let task = []   

document.getElementById('addTask').addEventListener('click', () => {
    //get val of input box store in variable
    let taskIn = document.getElementById('taskIn').value;  
    // check if task input has something
    if(taskIn){
        //add new task
        task.push(taskIn)
        //clear unwanted task
        document.getElementById('taskIn').value = '';
        //display task
        displayTask()
    }
})


//function to display task
function displayTask() {
    let taskList = document.getElementById('taskList');

    //clear task list
    taskList.innerHTML = '';
    //loop through task array
    task.forEach((task, index) => {
        //create new li element
        let li = document.createElement('li');
        //add css classes
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center',
        )
        li.innerHTML = `${task} <button class='btn btn-dark btn-sm' onclick='removeTask(${index})'> √ </button>`;
        // Append the new li to the task list
        taskList.appendChild(li);
    });
}

///func remove

function removeTask(index){
    task.splice(index, 1)
//call display task
    displayTask()
}
//clear all
document.getElementById('clearTaskBtn').addEventListener('click',
     () => {
        
        task = [];
        
        displayTask()
    
        
})
