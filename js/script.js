const subtasks = [];
const kanbanItems = [
    {
        id: 1,
        name: 'Todo'
    },
    {
        id: 2,
        name: 'Doing'
    },
    {
        id: 3,
        name: 'Done'
    },

];


const users = [
    {
        id: 1,
        name: 'User - 1',
        kanban: [
            {
                id: 1,
                title: 'Todo',
                cards: [
                    {
                        head: 'Card Title - 1',
                        description: '',
                        subtasks: ["Subtask - 1", "Subtask - 2"]
                    }
                ]
            }
        ]
    },
    {
        id: 1,
        name: 'User - 2',
        kanban: [
            {
                id: 2,
                title: 'Doing',
                cards: [
                    {
                        head: 'Card Title - 1',
                        description: '',
                        subtasks: ["Subtask - 1", "Subtask - 2"]
                    }
                ]
            }
        ]
    },
];


/******************* THEME DARK / LIGHT *********************/
const theme = localStorage.getItem('theme') || 'light';
const body = document.body;

body.classList.add(`theme-${theme}`);




/******************* begin:: USERS  *********************/
renderUser();
/******************* end:: USERS  *********************/

/******************* begin:: USER CONTENT  *********************/
renderUserContent();
/******************* end:: USER CONTENT  *********************/



/******************* begin:: USER TAB *********************/
const userTabListItems = document.querySelectorAll('.user-tab__list-item');
const userTabContentItems = document.querySelectorAll('.user-tab__content-item');
userTabListItems.forEach(tabItem => {
    if(tabItem){
        tabItem.addEventListener('click', () => {
            
            const dataTab = tabItem.getAttribute('data-tab');
            
            if(dataTab){
                removeClassElements(userTabListItems, 'active');
                tabItem.classList.add('active');
                
                const tabContent = document.getElementById(dataTab);
                if(tabContent){
                    removeClassElements(userTabContentItems, 'show');
                    tabContent.classList.add('show')
                }
            }
        })
    }
});
/******************* end:: USER TAB *********************/

/******************* begin:: KANBAN | DRAG & DROP *********************/
kanbanDragDrop();

/******************* end:: KANBAN | DRAG & DROP *********************/

/******************* begin:: CREATE TASK *********************/
const taskForm = document.getElementById('task-form');

if(taskForm){
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();


        const formData = new FormData(taskForm);
        const formDataObject = {};

        // FormData nesnesinin her bir öğesini döngü ile işle
        formData.forEach((value, key) => {
            // Eğer aynı isme sahip birden fazla input varsa, değerleri bir dizi içinde tut
            if (formDataObject.hasOwnProperty(key)) {
            // Eğer değer daha önce bir dizi içine eklenmediyse, bir dizi oluştur
            if (!Array.isArray(formDataObject[key])) {
                formDataObject[key] = [formDataObject[key]];
            }
            // Değeri diziye ekle
            formDataObject[key].push(value);
            } else {
            // Aynı isme sahip başka bir input yoksa, değeri doğrudan ata
            formDataObject[key] = value;
            }
        });



        const findUser = users.find(user => user.id == 1);

        if(findUser){
            const userKanban = findUser.kanban.find(item => item.title == formDataObject.status);
            if(userKanban){
                const card = {
                    head: formDataObject.title,
                    description: formDataObject.description,
                    subtasks: formDataObject.subtask
                };
                userKanban.cards.push(card);

            }
            else{

            }
            
            renderUserContent();
        }
        else{

        }

        console.log(formDataObject);

        

    })
}

/******************* end:: CREATE TASK *********************/


/******************* begin:: DYNAMIC SUBTASK *********************/
const subtask = document.getElementById('subtask');
if(subtask){
    const defaultTaskCount = 2;
    for (let index = 0; index < defaultTaskCount; index++) {

        const elementCount = index + 1;
        const taskElementItem = {
            index: index,
            name: 'subtask',
            title: `Sub Task - ${elementCount}`
        };

        subtasks.push(taskElementItem);
    }

    subtasks.map((item, index) => {
        const subTaskElement = {
            index: index,
            name: 'subtask'
        };

        renderSubTask(subTaskElement);
    });

    
   
}


const addNewTaskBtn = document.getElementById('add-new-task');

if(addNewTaskBtn){
    addNewTaskBtn.addEventListener('click', () => {

        const subTaskElement = {
            index: subtasks.length,
            name: 'subtask'
        };

        renderSubTask(subTaskElement);

    })
}

/******************* end:: DYNAMIC SUBTASK *********************/

/******************* begin:: SELECT KANBAN ITEMS *********************/
const kanbanSelect = document.getElementById('kanban-item-select');
if(kanbanSelect){
    kanbanItems.map(kanban_item => {
        const selectItem = `
        <option value="${kanban_item.name}">${kanban_item.name}</option>`;

        kanbanSelect.innerHTML += selectItem;
    })
}
/******************* end:: SELECT KANBAN ITEMS *********************/


/******************* begin:: FUNCTIONS *********************/
function removeClassElements(elements, className){
    elements.forEach(element => {
        element.classList.remove(className);
    })
}

function renderSubTask(item){

    const subTaskElement = `
            <div class="input-group mb-3" id="subtask-${item.index}">
                <input type="text" class="form-control" placeholder="Subtasks..." name="${item.name}" />
                <span class="input-action">
                    <i class="fa-solid fa-xmark"></i>
                </span>
            </div>
        `;
   

    subtask.innerHTML += subTaskElement;
}

function renderUser(){
    const userListItem = document.querySelector('.user-tab__list');
    if(userListItem){
    
        users.map((user_item, index) => {
            const itemIndex = index + 1;
            const item = `
            <li class="user-tab__list-item ${itemIndex == 1 && 'active'}" data-tab="user-${itemIndex}">
            <i class="fa-regular fa-user"></i>
            <span>${user_item.name}</span>
            </li>`;
            
            userListItem.innerHTML += item;
        });
    }
}

function renderUserContent(){

    const userTabContent = document.querySelector('.user-tab__content');
    if(userTabContent){

        users.forEach((user_item, index) => {
            const itemIndex = index + 1;
            const item = `
            <div class="user-tab__content-item ${itemIndex == 1 && 'show'}" id="user-${itemIndex}">
                <div class="kanban"></div>
            </div>`;

            userTabContent.innerHTML += item;


            const userTabKanban = document.querySelector(`#user-${itemIndex} .kanban`);

            if(userTabKanban){
                const kanbans = user_item.kanban;

                userTabKanban.innerHTML = '';


                kanbans.forEach(kanban_item => {

                    userTabKanban.innerHTML += `
                        <div class="kanban__item">
                            <h4 class="kanban__title">${kanban_item.title}</h4>
                            <div class="kanban__content"></div>
                        </div>
                    `;

                    const userKanbanContent = userTabKanban.querySelector('.kanban__content');

                    if(userKanbanContent){
                        userKanbanContent.innerHTML = '';
                        const taskCards = kanban_item.cards;

                        console.log("12312312312", taskCards);

                        taskCards.forEach(task_item => {

                            userKanbanContent.innerHTML += `
                            <div class="task-card">
                                <div class="task-card__head">${task_item.head}</div>
                                <div class="task-card__body">
                                    0 of ${task_item.subtasks?.length} subtasks
                                </div>
                            </div>
                            `;
                        })
                    }
                })
            }
        });

        kanbanDragDrop();
    }
}

function kanbanDragDrop(){
    const kanbanDropItems = document.querySelectorAll('.kanban__content');

    kanbanDropItems.forEach(dropItem => {
        if(dropItem){
            new Sortable(dropItem, {
                group: 'kanban',
                animation: 150,
                onAdd: function (evt) {
                    console.log('Added:', evt);
                }
            })
        }
    })
}
/******************* end:: FUNCTIONS *********************/


