
const initialMessage = '["Welcome to message box","First message here","Second message here"]'

function initilize(){
    let messageObj =JSON.parse(initialMessage);
    for (let i=0; i< messageObj.length; i++){
        loadMessage (messageObj[i]);
    }
}

function loadMessage(text){
    let ul = document.createElement("ul")
    let id = giveId();
    ul.setAttribute("id",id);
    let message = document.createElement("LI");
    message.appendChild(document.createTextNode(text));
    // message.innerText = text;
    let button = document.createElement('button');
    button.setAttribute('onClick','removeMessage("'+id+'")');
    button.innerText = "Remove"
    ul.appendChild(message);
    ul.appendChild(button);
    document.getElementById("messages").appendChild(ul);
    clearInputMessage();
}

function additem(){
    let message = document.createElement("LI");
}
let i=0;
function giveId(){
    return 'item' + i++;
}

function removeMessage(itemid){
    var item = document.getElementById(itemid);
    item.parentElement.removeChild(item);
}

function clearInputMessage() {
    document.getElementById("messagebox").value = "";
}

function clearAllMessage() {
    document.getElementById("messages").innerHTML = "";
}