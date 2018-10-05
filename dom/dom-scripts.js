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

    // 'click' event listener on textBtn
    textBtn.addEventListener('click', () => {
        
    })
})