import { OpenAI } from "openai";
import "dotenv/config";
import axios from "axios"
import fs from 'fs/promises'
import {exec} from 'child_process'
const openai = new OpenAI();

// const SYSTEM_PROMPT = `
// You are an AI Expert in Weather data.
//    Weather Data:
//    - patiala:34 C
//    - jaipur:32 C
//    - delhi:38 C`


async function readFolder(path){
    return await fs.readdir(path,{recursive:true})
}

async function runCommand(cmd=''){
    return new Promise((res)=>{
        exec(cmd,(err,stdout)=>{
            if(err){
                res(`Error:(${err.code}):${err.message}`)
            }else{
                res(`Stdout:${stdout}`)
            }
        })
    })
}


async function createFolder(path){
    return await fs.mkdir(path)
}



async function getWeatherData(city) {
    const url = `https://wttr.in/{city}?format=%C+%t`
    const result = await axios.get(url,{responseType:'text'})
  return `THe weather of ${city} is ${result} C`;
}

const availableFunctions = {

    createFolder:{
        functionName:'createFolder',
        fn:createFolder,
        description:'Take path as a string and create a folder',
    },
    runCommand:{
        functionName:'runCommand',
        fn:runCommand,
        description:'Take commond as a string and execute the command on the user device and return the result',
    },
    readFolder:{},
  getWeatherData: {
    functionName: "getWeatherData",
    fn: getWeatherData,
    description:
      "Takes city as string an input and returns the weather data of the city",
  },
};
const SYSTEM_PROMPT = `
    For the given user query and available tools, plan the step by step execution,
    based on the planning, select the relevant tool from the available tool. and based on the tool 
    selection you perform an action to call the tool.
    wait for the observation and based on the observation from the tool call resolve the user query.
    
    Rules:
        - Follow the output JSON Format.
        - Always perform one step at a time and wait for the next input
        - carefully analyse the user query
        
    Output JSON Format:
    {{
        "step":"string",
        "content":"string",
        "tool":"The name of function if the step is action:,
        "input":"The  input parameter for the function",
    }}
    
    Available Tools:
        ${Object.values(availableFunctions)
          .map(
            ({ functionName, description }) =>
              `- ${functionName}:${description}`
          )
          .join("\n")}


    Example:
    User Query:What is the weather of new york?
    Output:{"step":"plan","content":"The user is intersected in weather data of new york"}
    Output:{"step":"plan","content":"From the available tools I should call getWeather function"}
    Output:{"step":"action","tool":"getWeather","input":"new york"}
    Output:{"step":"observe","output":"12 Degree Cel"}
    Output:{"step":"output","content":"The weather for the new york seems to be 12 degrees."}

    `;

console.log("systemmm...",SYSTEM_PROMPT)

const messageDB = [];
messageDB.push({role:'system',content:SYSTEM_PROMPT});

const query = 'What is the weather of patiala?';
messageDB.push({role:'user',content:query})

async function startAgent(){
    while(true){
        const result = await openai.chat.completions.create({
            model:'gpt-4.1',
            response_format:{type:'json_object'},
            messages:messageDB,
        });

        const response = result.choices[0].message.content;
        messageDB.push({role:'assistant',content:response});

        const parseResponse = JSON.parse(response);

        const {step} = parseResponse;
         if(step==="plan"){
            console.log(`🧠:${parseResponse.content}`)
         }

         if(step==="action"){
            const {tool , input} = parseResponse;
            const mapping = availableFunctions[tool];

            if(!mapping){
                messageDB.push({
                    role:'developer',
                    content:`Unspported tool ${tool}`
                });
                continue;
            }
            console.log(`🔨 ${tool}:${input}`);
            const output = await mapping.fn(input);// calling your function
            console.log(`🔨🔨 ${tool}:${output}`);
            
            messageDB.push({
                role:'developer',
                content:JSON.stringify({step:'observe',output:output}),
            })
            continue;
         }
        if(step==='output'){
            console.log(`🤖: ${parseResponse.content}`)
            break;
        }
    }
}
// (async () => {
//   const result = await openai.chat.completions.create({
//     model: "gpt-4.1",
//     messages: [
//       { role: "system", content: SYSTEM_PROMPT },
//       {
//         role: "user",
//         content: JSON.stringify({
//           step: "plan",
//           content: "What is the weather in patiala",
//         }),
//       },
//     ],
//   });
//   console.log(`🤖: ${result.choices[0].message.content}`);
// })();
