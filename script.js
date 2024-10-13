function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (!email || !password || !confirmPassword) {
        alert('All fields are required!');
        return false;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address!');
        return false;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }

    return true;
}

function addTask(){
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value === '') {
        alert('Please enter a task!');
        return;
    }

    var listItem = document.createElement('li');
    listItem.textContent = taskInput.value;

    var completeBtn = document.createElement('button');
    completeBtn.style.marginLeft = '10px';
    completeBtn.style.marginRight = '2px';
    completeBtn.textContent = '✓';
    completeBtn.addEventListener('click', function() {
        if(listItem.style.textDecoration == 'line-through'){
            listItem.style.textDecoration = 'none';
        }
        else{
            listItem.style.textDecoration = 'line-through';
        }
    });
    
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', function() {
        listItem.remove();
    });


    listItem.appendChild(completeBtn);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    taskInput.value = '';
}

function sortNumbers() {
    var numbers = document.getElementById('numbers').value.split(',').map(Number);
    var order = document.getElementById('order').value;
    if (order === 'asc') {
        numbers.sort();
    } else if (order === 'desc') {
        numbers.sort();
        numbers.reverse();
    }
    var sortedNumbers = numbers.join(', ');
    document.getElementById('sortNumbersText').textContent = sortedNumbers;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function updateDateTime(){
    var now = new Date();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var partHour = '';

    if (hours >= 12) {
        hours = hours - 12;
        if (hours === 12) {
            hours = 0;
            partHour = 'AM';
        }
        else{
            partHour = 'PM';
        }
    }
    else{
        partHour = 'AM';
    }


    var dateTime = month + ' ' + day + ', ' + year + ', ' + hours + ':' + minutes + ' ' + partHour;
    document.getElementById('dateTime').textContent = dateTime;
}
updateDateTime();
setInterval(updateDateTime, 1000);