const formAdd = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


const generateTemplate = todos=>{
   const html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todos}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`;
list.innerHTML += html;
};

formAdd.addEventListener('submit', (e)=>{
    e.preventDefault();

    const todos =formAdd.add.value.trim();
    if(todos.length){
        generateTemplate(todos);
        formAdd.reset();
    }
});

list.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term)=>{
    Array.from(list.children)
    .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
    .forEach((todo)=>todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo)=> todo.textContent.toLowerCase().includes(term))
    .forEach((todo)=>todo.classList.remove('filtered'));
};

// keyup event

search.addEventListener('keyup', (e)=>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});