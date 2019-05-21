
const initialMessage = '["Welcome to message box","First message here","Second message here"]'

function initilize(){
    let messageObj =JSON.parse(initialMessage);
    for (let i=0; i< messageObj.length; i++){
        loadMessage (messageObj[i]);
    }
}

function loadMessage(text){
    let message = document.createElement("LI");
    let a = giveId();
    console.log(a);
    message.setAttribute('id',a);
    message.innerText = text;
    let button = document.createElement('button');
    button.appendChild(document.createTextNode("remove"));
    message.appendChild(button);
    document.getElementById("messages").appendChild(message);
    button.setAttribute('onClick','removeName(id)');
}

function additem(){
    let message = document.createElement("LI");
}

function giveId(){
    let i=0;
    return i++;
}

function removeName(itemid){
    var item = document.getElementById(itemid);
    item.parentElement.parentElement.removeChild();
}

function clearInputMessage() {
    document.getElementById("messagebox").value = "";
}

function clearAllMessage() {
    document.getElementById("messages").innerHTML = "";
}