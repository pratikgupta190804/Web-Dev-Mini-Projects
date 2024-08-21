const toDoCard = document.querySelector(".card");

const inputEl = document.querySelector("#addTask");
const addButton = document.querySelector('.add-button');

const ulEl = document.querySelector('.mission-list');

let list = JSON.parse(localStorage.getItem("list"));

list.forEach(task=>{
    toDoList(task)
})
console.log(list);

addButton.addEventListener('click', toDoList)

function toDoList(task){
    let inputText = inputEl.value;
    if(task && task.name){
        inputText = task.name
    }
    const liEl = document.createElement("li");
    if (task && task.checked){
        liEl.classList.add("checked");
    }
    liEl.innerText = inputText;
    ulEl.appendChild(liEl);
    inputEl.value = "";
    const checkBtnEl = document.createElement("div");
    checkBtnEl.innerHTML = `
    <i class="fa-solid fa-square-check"></i>
    `;
    liEl.appendChild(checkBtnEl);
    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = `
    <i class="fa-solid fa-trash"></i>
    `;
    liEl.appendChild(trashBtnEl);

    checkBtnEl.addEventListener('click', () => {
        liEl.classList.toggle("checked");
        updateLocalStorage();
    });

    trashBtnEl.addEventListener('click', () => {
        liEl.remove();
        updateLocalStorage();
    });

    updateLocalStorage();
};

toDoCard.addEventListener('submit', (event) => {
    event.preventDefault();
    toDoList();
});

function updateLocalStorage(){
    const liEls = document.querySelectorAll('li')
    let list = [];
    liEls.forEach(liEl=>{
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked")
        });
    });
    localStorage.setItem("list", JSON.stringify(list))
}

