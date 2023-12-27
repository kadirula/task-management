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
            removeClassElements(userTabListItems, 'active');
            tabItem.classList.add('active');
            const dataTab = tabItem.getAttribute('data-tab');
            const tabContent = document.getElementById(dataTab);
            if(tabContent){
                removeClassElements(userTabContentItems, 'show');
                tabContent.classList.add('show')
            }
        })
    }
});

/******************* end:: USER TAB *********************/

/******************* begin:: FUNCTIONS *********************/
function removeClassElements(elements, className){
    elements.forEach(element => {
        element.classList.remove(className);
    })
}
/******************* end:: FUNCTIONS *********************/