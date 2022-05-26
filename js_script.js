// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  span.className = "close";
  span.appendChild(document.createTextNode("\u00D7"));
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//toggle between checked and unchecked
var list = document.querySelector('ul');
list.addEventListener('click', function(evnt) {
  if (evnt.target.tagName === 'LI') {
    evnt.target.classList.toggle('checked');
  }
}, false);

//add new task
function new_task(){
  var task = document.forms[0].elements[0].value;
  if (task===''){
      alert("Cannot create empty task, please enter something.");
  }
  else {
    var list_item = document.createElement("li");
    list_item.appendChild(document.createTextNode(task));
    document.getElementById("task_list").appendChild(list_item);
    var span = document.createElement("SPAN");
    span.className = "close";
    span.appendChild(document.createTextNode("\u00D7"));
    list_item.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  document.forms[0].elements[0].value = "";
}

//clear all tasks
function Clear_all(){
  var close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++){
    var div = close[i].parentElement;
    div.style.display = "none";
  }
}