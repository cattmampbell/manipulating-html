// .ready() event handler method on document
$(document).ready(() => {
    // Creates <button>, appends to #row2
    $('#row2').append('<button class="btn btn-lg btn-secondary col-6 py-2 mb-4" id="alertBtn">Click Me</button>');

    $('#alertBtn').on('click', () => {
        alert(`Hi How Are You?`);
    })

    // Creates <div id="divBox">, appends to #row4 and styles it
    $('#row4').append('<div id="divBox" class="my-4"></div>');
    $('#divBox').css({
        'background-color': '#3b4249',
        'width': '15rem',
        'height': '15rem',
        'border-radius': '0.5rem'
    });

    // .on('click') event handler method on #textBtn
    $('#textBtn').on('click', () => {
        alert(`"${$('#textArea').val()}"`);
        $('#textArea').val(''); // Clear!
    })

    const myColors = ['#007bff', '#6c757d', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#f8f9fa'];

    // Randomly selects an index from myColors, assigns value to myRandomColor
    const getRandomColor = () => {
        const myRandomColor = myColors[Math.floor(Math.random() * myColors.length)];
        return myRandomColor;
    }

    // .mouseenter(event) event handler method on #divBox
    $('#divBox').mouseenter ((event) => {
        const thisRandomColor = getRandomColor();
        $(event.target).css('background-color', thisRandomColor);
    })

    // .mouseleave(event) event handler method on #divBox
    $('#divBox').mouseleave ((event) => {
        $(event.target).css('background-color', '#3b4249');
    })

    // .click(event) event handler method on #pText
    $('#pText').click ((event) => {
        const thisRandomColor = getRandomColor();
        $(event.target).css('color', thisRandomColor);
    })

    let spanCount = 0; // Initializing spanCount

    $('#emptyDiv').append('<span class="col-12 py-4"><h3 class="h3">Matthew Campbell</h3></span>'); // Creates <span>, appends to #emptyDiv
    $('span').hide(); // Hides <span>!

    //.on('click') event handler method on #spanBtn
    $('#spanBtn').on('click', () => {
        spanCount += 1; // Adds 1 with each .on('click') 
        if(spanCount === 1) {
            $('span').show();
        } else if(spanCount > 1) {
            $('span').hide();
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

    for(let i = 0; i < myFriends.length; i += 1) {
        $('#friendUl').append(`<li class="list-group-item">${myFriends[i]}</li>`); // Creates <li>, appends to #friendsUl
        $('#friendUl').hide(); // Hides <ul>!
    }

    //.on('click') event handler method on #ulBtn
    $('#ulBtn').on('click', () => {
        ulCount += 1; // Adds 1 with each .on('click') 
        if(ulCount === 1) {
            $('#friendUl').show();
        } else if(ulCount > 1) {
            $('#friendUl').hide();
            ulCount = 0;
        }
    })
})