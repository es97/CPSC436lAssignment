import { combineReducers } from "redux";
import {SHOW_DETAIL, CLOSE_DETAIL, GET_MESSAGE_SUCCESS, DELETE_ALL_MESSAGES_SUCCESS} from "../actions/index"
import {ADD_MESSAGE_SUCCESS, ADD_MESSAGE_FAILURE} from "../actions/index"

// let initialIndex= 1;
// function addMessage(message, index, detail=""){
// 	if(index === undefined){
// 		index = ++initialIndex
// 	}
// 	return {
// 		message: message,
// 		index: index,
// 		detail: detail
// 	}
// }

// function initilize(){
// 	let messageObj =JSON.parse(initialMessage);
// 	let messageList = {};
//     for (let i=0; i< messageObj.length; i++){
// 		let message = addMessage(messageObj[i]);
//         messageList[message.index] = message;
// 	}
// 	return messageList;
// }

// const initialList = initilize();

const initialState = {
	messages: [],
	detail: "",
	showDetail:false
  };

export default function todosReducer(state = initialState, action) {
	switch (action.type) {
	//   case ADD_MESSAGE_STARTED:
	// 	return {
	// 	  ...state,
	// 	  loading: true
	// 	  messages:action.response
	// 	};
	case GET_MESSAGE_SUCCESS:
		return{
			...state,
			messages:action.response
		};
	case ADD_MESSAGE_SUCCESS:
	return {
		...state,
		messages: state.messages.concat(action.message)
	};
	case ADD_MESSAGE_FAILURE:
	return {
		...state,
		error: action.payload.error
	};
	case DELETE_ALL_MESSAGES_SUCCESS:
	return {
		...state,
		messages:[]
	};
	case SHOW_DETAIL:
		return {
			...state,
			detail: action.message,
			showDetail:true
		};
	case CLOSE_DETAIL:
	return {
		...state,
		detail: 'close detail',
		showDetail:false
	};
	default:
	return state;
	}
  }

//   const listReducer = (list = initialState, action) => {
// 		switch(action.type){
// 			case(ADD_MESSAGE):
// 				let message = addMessage(action.message,undefined,action.detail);
// 			return {...list,[message.index]:message};
// 		 	default:
// 				return list;
// 		}
// 	};


// const listReducer = (list = initialList, action) => {
// 	switch(action.type){
// 		case(ADD_MESSAGE):
// 			let message = addMessage(action.message,undefined,action.detail);
// 		return {...list,[message.index]:message};
// 	 	default:
// 			return list;
// 	}
// };

// const elReducer = (el={showDetail: false, message:"Something is wrong", detail: "you have no detail"}, action) =>{
// 	if(action.type === SHOW_DETAIL){
// 		return {showDetail:true, message: action.message, detail: action.detail }
// 	}else if(action.type === CLOSE_DETAIL){
// 		return {showDetail: false, message:"Something is wrong", detail: "you have no detail"};
// 	}
// 	return el;
// }

// export default combineReducers({
// 	list: listReducer,
// 	el: elReducer
// // anotherKey: anotherReducer //all your reducers should be combined
// });

