const subtasks = [];


/******************* THEME DARK / LIGHT *********************/
const theme = localStorage.getItem('theme') || 'light';
const body = document.body;

body.classList.add(`theme-${theme}`);




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

        console.log("subTaskElement", subTaskElement);

        renderSubTask(subTaskElement);

    })
}

/******************* end:: DYNAMIC SUBTASK *********************/


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
/******************* end:: FUNCTIONS *********************/


