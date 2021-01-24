function addTask() {
/* Handles the task form being submitted */

    var task = document.forms["newTask"]["task"].value;
    var time = document.forms["newTask"]["time"].value;
    if (isNaN(time)) {
        document.getElementById("errorMessage").innerHTML = "Error! Please enter a numeric time value";
    } else {
        if (task === "" || time === "") {
            document.getElementById("errorMessage").innerHTML = "Error! You must enter values for both fields";
        } else {
           document.getElementById("errorMessage").innerHTML = "";
           
            addTaskToFile(task, time);
            addTaskToTable(task,time, "");
            addTimeToTable(task, getTaskID(task));
            clearForm();
        }
    }

  } 

function getTaskID(name) {
    var tasks = JSON.parse(localStorage.getItem("taskJSON"));
    for (const [i] of Object.keys(tasks)) {
            if (tasks[i]["taskName"] === name) { return i};
    }   
}

/* To do:
Make sure you can't submit empty fields!
*/

function addTaskToFile(task, time) {
    var originalJSON = JSON.parse(localStorage.getItem("taskJSON"));
    var taskObj = {};

    /* If there's already task data */
    if (originalJSON !== null) {
        /* Get next ID */
        var previousID = 0
        for (const [i] of Object.keys(originalJSON)) {
            if (Number(i) > previousID) { previousID = Number(i)};
        }

        /* Loop through and join the previous tasks to the new one, to make an updated tasklist */
        taskObj[String(previousID + 1)] = {taskName: task, taskTime: time, taskDate: new Date().toLocaleDateString(), actualTime:""};
        for (const [i] of Object.keys(originalJSON)) { 
            taskObj[i] = {taskName: originalJSON[i]["taskName"], taskTime: originalJSON[i]["taskTime"], taskDate: originalJSON[i]["taskDate"], actualTime:originalJSON[i]["actualTime"]} 
        }

    } else {
        /* Create a brand new list of tasks*/
        taskObj[String(1)] = {taskName: task, taskTime: time, taskDate: new Date().toLocaleDateString(), actualTime:"" };
    }

    /* Store the updated list of tasks */
    var taskJSON = JSON.stringify(taskObj);
    localStorage.setItem("taskJSON", taskJSON);

}

function addTaskToTable(task, time, aTime) {
    /* Adds a new task to the bottom of the table */
    console.log(task);
    var table = document.getElementById("taskTable");
    var row = table.insertRow(-1);

    var taskName = row.insertCell(0);
    taskName.innerHTML = task;

    var taskTime = row.insertCell(1);
    taskTime.innerHTML = time;

    var actualTime = row.insertCell(2);
    actualTime.innerHTML = aTime;

}

function addTimeToTable(task, ID) {
    /* Adds a new time to the bottom of the table */
    var table = document.getElementById("timeTable");
    var row = table.insertRow(-1);

    var timeName = row.insertCell(0);
    timeName.innerHTML = task;

    var taskTime = row.insertCell(1);

    var form = document.createElement("form");
    var txtBox = document.createElement("input");
    txtBox.type = "text";
    txtBox.classList.add(ID);

    var button = document.createElement("input");
    button.type = "button";
    button.classList.add(ID);
    button.name = ("enterButton");
    button.value = "Enter";
    button.setAttribute( "onClick", "handleTime(this.className)");
    
    form.appendChild(txtBox);
    form.appendChild(button);

    taskTime.appendChild(form);
}

function handleTime(buttonClass) {
    /* update object and save */
    /* update table */
    var inputs = document.getElementsByClassName(buttonClass);
    var txtBox;
    console.log(inputs);
    if (inputs[0].type == "text") {
        txtBox = inputs[0];
    } else {
        txtBox = inputs[1];
    }

    if (isNaN(txtBox.value)) {
        document.getElementById("timeError").innerHTML = "Error: Time must be a numerical value";
    } else {
        if (txtBox.value === "") {  document.getElementById("timeError").innerHTML = "Error: A value is required";}
        else {

            /* Update actual time taken */
        document.getElementById("timeError").innerHTML = "";

        var originalJSON = JSON.parse(localStorage.getItem("taskJSON"));
        /* Find task from its name */
        for (const [i] of Object.keys(originalJSON)) {
            if (i === buttonClass) {
                
                originalJSON[i]["actualTime"] = txtBox.value;
                txtBox.value = "";
                
                var taskJSON = JSON.stringify(originalJSON);
                localStorage.setItem("taskJSON", taskJSON);
                
                fullUpdate();
                break
            }
        }
    }
    }



}


function clearForm() {
    document.getElementsByName("newTask")[0].reset();
}

function resetTasks() {
    /* Reset the tasklist */
    localStorage.setItem("taskJSON", null);
    localStorage.setItem("originalJSON", null);
    fullUpdate();
}

function loadTasks() {
    var table = document.getElementById("taskTable");
    table.innerHTML = "<tr><td><b>Task Name</b></td><td><b>Time Estimated</b></td><td><b>Time Taken</b></td></tr><script> loadTasks();</script>"
    /* Populate the table with stored tasks */
    var tasks = JSON.parse(localStorage.getItem("taskJSON"));
    if (tasks !== null) {
     for (const [i] of Object.keys(tasks)) {
            addTaskToTable(tasks[i]["taskName"], tasks[i]["taskTime"], tasks[i]["actualTime"]);
     }
    }
}

function loadTimes() {
    var table = document.getElementById("timeTable");
    table.innerHTML = "<tr><td><b>Task Name</b></td><td><b>Actual Time Taken</b></td></tr><script> loadTimes();</script>";

    /* Populate the table with stored times */
    var tasks = JSON.parse(localStorage.getItem("taskJSON"));
    if (tasks !== null) {
     for (const [i] of Object.keys(tasks)) {
            if(tasks[i]["actualTime"] === "") {
                addTimeToTable(tasks[i]["taskName"], i);
            }
     }
    }
}

function fullUpdate() {
    loadTasks();
    loadTimes();
}