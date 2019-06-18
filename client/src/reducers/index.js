import { combineReducers } from "redux";
import {ADD_MESSAGE, SHOW_DETAIL, CLOSE_DETAIL} from "../actions/index"
// import thunkMidddleware from 'redux-thunk'

const initialMessage = '["Welcome to message box","First message here","Second message here"]'


let initialIndex= 1;
function addMessage(message, index, detail=""){
	if(index === undefined){
		index = ++initialIndex
	}
	return {
		message: message,
		index: index,
		detail: detail
	}
}

function initilize(){
	let messageObj =JSON.parse(initialMessage);
	let messageList = {};
    for (let i=0; i< messageObj.length; i++){
		let message = addMessage(messageObj[i]);
        messageList[message.index] = message;
	}
	return messageList;
}

const initialList = initilize();

const listReducer = (list = initialList, action) => {
	switch(action.type){
		case(ADD_MESSAGE):
			let message = addMessage(action.message,undefined,action.detail);
		return {...list,[message.index]:message};
	 	default:
			return list;
	}
};

const elReducer = (el={showDetail: false, message:"Something is wrong", detail: "you have no detail"}, action) =>{
	if(action.type === SHOW_DETAIL){
		return {showDetail:true, message: action.message, detail: action.detail }
	}else if(action.type === CLOSE_DETAIL){
		return {showDetail: false, message:"Something is wrong", detail: "you have no detail"};
	}
	return el;
}

export default combineReducers({
	list: listReducer,
	el: elReducer
// anotherKey: anotherReducer //all your reducers should be combined
});

