export const ADD_MESSAGE = "addMessage", ADD_DETAIL = "addDetail", SHOW_DETAIL = "showDetail", CLOSE_DETAIL = "closeDetail"

export const increment = amount => {
	return {
		type: 'INCREMENT_COUNTER',
		payload: amount
	};
};

export function addMessage(message,detail){
	return{
		type: ADD_MESSAGE,
		message: message,
		detail: detail
	}
}

export function showDetail(message, detail){
	return{
		type: SHOW_DETAIL,
		message: message,
		detail: detail
	}
}

export function closeDetail() {
    return {type: CLOSE_DETAIL};
}