import { OpenAIEmbeddings } from "@langchain/openai";
import "dotenv/config";
import { QdrantVectorStore } from "@langchain/qdrant";
import { OpenAI } from "openai";

const client = new OpenAI();
async function chat(question = "") {
  const embeddings = new OpenAIEmbeddings({
    model: "text-embedding-3-small",
  });

  const vectorStore = await QdrantVectorStore.fromExistingCollection(
    embeddings,
    {
      url: "http://localhost:6333",
      collectionName: "langchainjs-testing",
    }
  );

  const ret = vectorStore.asRetriver({ k: 3 });
  const result = await ret.invoke(question);
  const SYSTEM_PROMPT = `You are helpfull AI assistance who answers the users the query based on the available context from PDF File.
  Context:
  ${JSON.stringify(result)}`;

  const chatResult = await client.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userQuery },
    ],
  });
  console.log(`🤖: ${chatResult.choices[0].message.content}`);
}

chat(`Can you tell me about FS Modules and which page number should I refer to?`);
