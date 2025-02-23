// document.write('Hello from js');

// function changeBackgroundBlack(){
//     document.body.style.backgroundColor="black";
// }

// function changeBackgroundWhite(){
//     document.body.style.backgroundColor="white";
// }


// Above code violate the DRY principle
// function changeBackground(color){
//     document.body.style.backgroundColor =  color;
// }

// const darkButton = document.getElementById('dark-mode-button')

// console.log(darkButton);

// darkButton.addEventListener('click',function(){
//     console.log('I got clicked')
//     changeBackground('black');
// });
// darkButton.addEventListener('click',function(){
//     console.log('Storing Dark Mode value in DB');
    
// });

// toggle 

function changeBackground(color){
    document.body.style.backgroundColor =  color;
}

const themeButton = document.getElementById('theme-button')

console.log(themeButton);

themeButton.addEventListener('click',()=>{
    console.log(document.body.backgroundColor);
    const currentColor = document.body.style.background;

    if(!currentColor || currentColor=='white'){
        changeBackground('black');
        themeButton.innerText='Light Mode'
    }else{
        changeBackground('white');
        themeButton.innerText='Dark Mode'
    }
});
darkButton.addEventListener('click',function(){
    console.log('Storing Dark Mode value in DB');
    
});

