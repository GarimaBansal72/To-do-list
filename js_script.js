var list = document.querySelector('ul');
list.addEventListener('click', function(evnt) {
  if (evnt.target.tagName === 'LI') {
    evnt.target.classList.toggle('checked');
  }
});

function new_task(){
    var task=document.forms[0].elements[0].value;
    if (task===''){
        alert("Cannot create empty task, please enter something.");
    }
    else {
        var list_item = document.createElement("li");
        list_item.appendChild(document.createTextNode(task));
        document.getElementById("list").appendChild(list_item);
    }
    document.forms[0].elements[0].value = "";
}
