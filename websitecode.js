function addTask() {
    var task = document.forms["newTask"]["task"].value;
    var table = document.getElementById("taskList");
    var row = table.insertRow(-1);
    var taskName = row.insertCell(0);
    taskName.innerHTML = task;
    document.forms["newTask"]["task"].value = "";
  } 
