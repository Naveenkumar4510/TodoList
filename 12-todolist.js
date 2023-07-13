const todoList=[{name:'make dinner',date:'2023-06-23'},{name:
  'wash dishes',date:'2023-09-10'}];

rendertodolist();
function rendertodolist()
{
let todoht='';

//foreach

todoList.forEach((todoObject,index)=>
{
  //const todoObject=todoList[index];
 // const name=todoObject.name;
  //const date=todoObject.date;
  const {name,date}=todoObject;

  const ht=`<div> ${name}</div>
 <div>${date}</div>
  <button class="btn-delete js-delete-btn">
  Delete
  </button>`;
  todoht+=ht;
});
/*
for (let i=0;i<todoList.length;i++)
{
  const todoObject=todoList[i];
  const name=todoObject.name;
  const date=todoObject.date;
  const {name,date}=todoObject;

  const ht=`<div> ${name}</div>
 <div>${date}</div>
  <button onclick="todoList.splice(${i},1);
  rendertodolist();
  " class="btn-delete">
  Delete
  </button>`;
  todoht+=ht;
}
*/
document.querySelector('.js-todo-list').innerHTML=todoht;

document.querySelectorAll('.js-delete-btn').forEach((deleteButton,index)=>
{
  deleteButton.addEventListener('click',()=>
  {
todoList.splice(index,1);
rendertodolist();
  });
});

}




document.querySelector('.js-add-btn').addEventListener('click',()=>
{
  addTodo();
});




function addTodo(){
 const inputElement = document.querySelector('.js-name-input');
 const name=inputElement.value;
const inputElement1 = document.querySelector('.js-date');
const date=inputElement1.value;

 
 todoList.push(
  {
    //name:name,
//date:date
name,
date

});
 


 inputElement.value='';

 rendertodolist();
}