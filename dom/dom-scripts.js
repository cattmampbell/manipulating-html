// 'DOMContentLoaded' event listener on document
document.addEventListener('DOMContentLoaded', () => {

    // Creates/appends <elementName id="idName" class="className">, returns element
    const createElement = (elementName, idName, className, appendTo) => {
        const element = document.createElement(elementName);
        element.id = idName;
        element.className = className;
        appendTo.appendChild(element);
        return element;
    }

    // Creates/appends <appendTo>textContent, returns element
    const createTextNode = (textContent, appendTo) => {
        const element = document.createTextNode(textContent);
        appendTo.appendChild(element);
        return element;
    }

    const divRow2 = document.querySelector('#row2');
    const alertBtn = createElement('button', 'alertBtn', 'btn btn-lg btn-secondary col-6 py-2 mb-4', divRow2);
    const alertBtnTxt = createTextNode('Click Me', alertBtn);

    // 'click' event listener on alertBtn
    alertBtn.addEventListener('click', () => {
        alert(`Hi, How Are You?`);
    })

    // Creates <div id="divBox">, appends to #row4 and styles it
    const divRow4 = document.querySelector('#row4');
    const divBox = createElement('div', 'divBox', 'my-4', divRow4);
    divBox.style.backgroundColor = '#3b4249';
    divBox.style.width = '15rem';
    divBox.style.height = '15rem';
    divBox.style.borderRadius = '0.5rem';

    const textBtn = document.querySelector('#textBtn');
    const textArea = document.querySelector('#textArea');

    // 'click' event listener on textBtn
    textBtn.addEventListener('click', () => {
        alert(`${textArea.value}`);
        textArea.value = ''; // Clear!
    })

    const myColors = ['#007bff', '#6c757d', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#f8f9fa'];

    // Randomly selects an index from myColors, assigns value to myRandomColor
    const getRandomColor = () => {
        const myRandomColor = myColors[Math.floor(Math.random() * myColors.length)];
        return myRandomColor;
    }

    // 'mouseenter' event listener on divBox
    divBox.addEventListener('mouseenter', (event) => {
        const thisRandomColor = getRandomColor();
        event.target.style.backgroundColor = thisRandomColor;
    })

    // 'mouseleave' event listener on divBox
    divBox.addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = '#3b4249';
    })

    const pText = document.querySelector('#pText');

    // 'click' event listener on pText
    pText.addEventListener('click', (event) => {
        const thisRandomColor = getRandomColor();
        event.target.style.color = thisRandomColor;
    })

    let spanCount = 0; // Initializing spanCount

    const emptyDiv = document.querySelector('#emptyDiv');
    const spanName = createElement('span', '', 'col-12 py-1', emptyDiv);
    const h3Name = createElement('h3', '', 'h3', spanName);
    const h3NameTxt = createTextNode('Matthew Campbell', h3Name);
    spanName.style.visibility = 'hidden'; // visibility: hidden;

    const spanBtn = document.querySelector('#spanBtn');

    // 'click' event listener on spanBtn
    spanBtn.addEventListener('click', () => {
        spanCount += 1; // Adds 1 with each .on('click') 
        if(spanCount === 1) {
            spanName.style.visibility = 'visible'; // visibility: none;
        } else if(spanCount > 1) {
            spanName.style.visibility = 'hidden'; // visibility: hidden;
            spanCount = 0;
        }
    })

    const myFriends = [
        'Olivia',
        'Toast',
        'Cody',
        'Megan',
        'Mona',
        'Wyatt',
        'Emily',
        'George',
        'Caleb',
        'Lydia',
    ];

    let ulCount = 0; // Initializing ulCount
    const friendUl = document.querySelector('#friendUl');

    for(let i = 0; i < myFriends.length; i += 1) {
        const listItem = createElement('li', '', 'list-group-item', friendUl);
        const listItemTxt = createTextNode(myFriends[i], listItem);
        friendUl.style.visibility = 'hidden'; // visibility: hidden;
    }

    const ulBtn = document.querySelector('#ulBtn');

    // 'click' event listener on ulBtn
    ulBtn.addEventListener('click', () => {
        ulCount += 1; // Adds 1 with each 'click'
        if(ulCount === 1) {
            friendUl.style.visibility = 'visible'; // visibility: hidden;
        } else if(ulCount > 1) {
            friendUl.style.visibility = 'hidden'; // visibility: hidden;
            ulCount = 0;
        }
    })
})