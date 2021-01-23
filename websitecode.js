function addTask() {
/* Handles the task form being submitted */

    var task = document.forms["newTask"]["task"].value;
    var time = document.forms["newTask"]["time"].value;
    addTaskToFile(task, time);
    addTaskToTable(task,time);

  } 

/* To do:
Add validation
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
        taskObj[String(previousID + 1)] = {taskName: task, taskTime: time };
        for (const [i] of Object.keys(originalJSON)) { 
            taskObj[i] = {taskName: originalJSON[i]["taskName"], taskTime: originalJSON[i]["taskTime"]} 
        }

    } else {
        /* Create a brand new list of tasks*/
        taskObj[String(1)] = {taskName: task, taskTime: time };
    }

    /* Store the updated list of tasks */
    var taskJSON = JSON.stringify(taskObj);
    localStorage.setItem("taskJSON", taskJSON);

}

function addTaskToTable(task, time) {
    /* Adds a new task to the bottom of the table */
    var table = document.getElementById("taskTable");
    var row = table.insertRow(-1);

    var taskName = row.insertCell(0);
    taskName.innerHTML = task;

    var taskTime = row.insertCell(1);
    taskTime.innerHTML = time;

    document.forms["newTask"]["task"].value = "";
    document.forms["newTask"]["time"].value = "";
}

function resetTasks() {
    /* Reset the tasklist */
    localStorage.setItem("taskJSON", null);
    localStorage.setItem("originalJSON", null);
}

function loadTasks() {
    /* Populate the table with stored tasks */
    var tasks = JSON.parse(localStorage.getItem("taskJSON"));
    if (tasks !== null) {
     for (const [i] of Object.keys(tasks)) {
            addTaskToTable(tasks[i]["taskName"], tasks[i]["taskTime"]);
     }
    }
}