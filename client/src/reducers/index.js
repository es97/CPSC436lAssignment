import { combineReducers } from "redux";
import {SHOW_DETAIL, CLOSE_DETAIL, GET_MESSAGE_SUCCESS, DELETE_ALL_MESSAGES_SUCCESS,DELETE_SINGLE_MESSAGES_SUCCESS} from "../actions/index"
import {ADD_MESSAGE_SUCCESS, ADD_MESSAGE_FAILURE} from "../actions/index"

const initialState = {
	messages: [],
	detail: "",
	showDetail:false,
	id:""
  };

export default function todosReducer(state = initialState, action) {
	switch (action.type) {
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
	case DELETE_SINGLE_MESSAGES_SUCCESS:
	return {
		...state,
		messages:state.messages.filter(state => state._id !== action.id)
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