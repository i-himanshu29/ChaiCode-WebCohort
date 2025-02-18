const addBtn = document.getElementById('add-btn');
const todoBtn = document.getElementById('todo-input');

addBtn.addEventListener('click',()=>{
    const value = todoInput.value;

    const li = document.createElement('li');
    li.innerText = value;
    console.log('li', li);

    const delButton = document.createElement('button');
    delButton.innerText = 'X';
    li.appendChild(delButton);

    delButton.addEventListener('click',function (){
        li.remove();
    });

    todoItemsContainer.appendChild(li);
    todoInput.value = '';
});