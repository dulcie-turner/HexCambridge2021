function addTask() {
    var task = document.forms["newTask"]["task"].value;
    var time = document.forms["newTask"]["time"].value;

    var table = document.getElementById("taskTable");
    var row = table.insertRow(-1);

    var taskName = row.insertCell(0);
    taskName.innerHTML = task;

    var taskTime = row.insertCell(1);
    taskTime.innerHTML = time;

    document.forms["newTask"]["task"].value = "";
    document.forms["newTask"]["time"].value = "";
  } 
