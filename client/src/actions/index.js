export const DELETE_ALL_MESSAGES = "DELETE_ALL_MESSAGES",ADD_MESSAGE = "addMessage", ADD_DETAIL = "addDetail", SHOW_DETAIL = "showDetail", CLOSE_DETAIL = "closeDetail"

export const DELETE_SINGLE_MESSAGES_SUCCESS = "deleteSingle", DELETE_ALL_MESSAGES_SUCCESS = "DELETE_ALL_MESSAGES_SUCCESS",GET_MESSAGE_SUCCESS = "GET_MESSAGE_SUCCESS", FETCH_MESSAGES = "fetchMessages", ADD_MESSAGE_STARTED = "addMessageStarted", ADD_MESSAGE_SUCCESS= "addMessageSuccess", ADD_MESSAGE_FAILURE = "addMessageFailure";

export const fetchMessages = () => dispatch => {
	fetch('/testAPI')
	  .then(res => res.json())
	  .then(
		message  => dispatch (getMessageSuccess(message)),
	  )
	  .catch(error => {
		console.log(error);
	  });
  }

  const getMessageSuccess = (response) =>{
	  return{
		  type: GET_MESSAGE_SUCCESS,
		  response,
	  }
  }

export const addMessage = message =>{
	return dispatch =>{
		fetch('/testAPI', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message })
		})
		.then(res => res.json())
		.then(message => {
			dispatch(addMessageSuccess(message));
		})
		.catch(err => {
			dispatch(addTodoFailure(err.message));
		});
	};
};

export const deleteSingle = id =>{
	console.log(id)
	return dispatch =>{
		fetch(`testAPI/${id}`, {
			method: 'DELETE',
		})
		.then(res => res.json())
		.then(response => {
			dispatch(deleteSingleMessagesSuccess(id));
		})
		.catch(err => console.error(err))
	};
};

export const deleteAllMessages = id =>{
	return dispatch =>{
		fetch('/testAPI', {
			method: 'DELETE',
		})
		.then(res => res.json())
		.then(deletedMessage => {
			dispatch(deleteAllMessagesSuccess(deletedMessage));
		})
		.catch(err => console.error(err))
	};
};


const addMessageSuccess = message => ({
	type: ADD_MESSAGE_SUCCESS,
	message: message
});

const deleteAllMessagesSuccess = deletedMessage => {
	return {
		type: DELETE_ALL_MESSAGES_SUCCESS,
		deletedEntries: deletedMessage,
	};
};

const deleteSingleMessagesSuccess = id => {
	return {
		type: DELETE_SINGLE_MESSAGES_SUCCESS,
		id
	};
};

const addTodoFailure = error => ({
	type: ADD_MESSAGE_FAILURE,
	payload: {
		error
	}
});


export const showDetail = message => ({
    type: SHOW_DETAIL,
    message
})

export const closeDetail = message => ({
    type: CLOSE_DETAIL,
    message
})