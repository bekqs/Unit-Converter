const ddFrom = document.getElementById('dropdown-from');
const ddTo = document.getElementById('dropdown-to');
const caretFrom = document.getElementById('caret-from');
const caretTo = document.getElementById('caret-to');
const sidebarLinks = document.getElementsByClassName('sidebar-li');

let controls = {
    dropdownFrom() {
        ddTo.classList.remove('open');
        ddFrom.classList.toggle('open');
        caretTo.classList.remove('rotate');
        caretFrom.classList.toggle('rotate');
    },
    dropdownTo() {
        ddFrom.classList.remove('open')
        ddTo.classList.toggle('open');
        caretFrom.classList.remove('rotate');
        caretTo.classList.toggle('rotate');
    },
    selectUnit() {
        if (this.parentNode.id == 'dropdown-from') {
            let from = document.getElementById('from');
            from.innerHTML = this.innerHTML;
            controls.dropdownFrom();
        } else {
            let to = document.getElementById('to');
            to.innerHTML = this.innerHTML;
            controls.dropdownTo();
        }
    }
};

// Add event listener to change "Selected" unit, by changing its innerHTML
const unitList = document.getElementsByClassName('unit');

for (let i = 0; i < unitList.length; i++) {
    const li = unitList[i];
    li.addEventListener('click', controls.selectUnit, false);
};

// Add function to slide down dropdown list
for (let i = 0; i < document.getElementsByClassName('selected').length; i++) {
    const open = document.getElementsByClassName('selected')[i];
    
    open.addEventListener('click', function(event) {
        if (this.id == 'convert-from') {
            controls.dropdownFrom();
        } else {
            controls.dropdownTo();
        }
    }, false);
};