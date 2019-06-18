export const DELETE_ALL_MESSAGES = "DELETE_ALL_MESSAGES",ADD_MESSAGE = "addMessage", ADD_DETAIL = "addDetail", SHOW_DETAIL = "showDetail", CLOSE_DETAIL = "closeDetail"

export const DELETE_ALL_MESSAGES_SUCCESS = "DELETE_ALL_MESSAGES_SUCCESS",GET_MESSAGE_SUCCESS = "GET_MESSAGE_SUCCESS", FETCH_MESSAGES = "fetchMessages", ADD_MESSAGE_STARTED = "addMessageStarted", ADD_MESSAGE_SUCCESS= "addMessageSuccess", ADD_MESSAGE_FAILURE = "addMessageFailure";

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

export const deleteAllMessages = message =>{
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

// export function showDetail(message, detail){
// 	return{
// 		type: SHOW_DETAIL,
// 		message: message,
// 		detail: detail
// 	}
// }

// export function closeDetail() {
//     return {type: CLOSE_DETAIL};
// }

// export const addMessage = (message, detail) =>{
// 	return dispatch =>{
// 		dispatch(addMessageStarted())
// 	axios
//       .get('/testAPI')
//       .then(res => {
//         dispatch(addMessageSuccess(res.data));
//       })
//       .catch(err => {
//         dispatch(addTodoFailure(err.message));
// 	  });
// 	};
// };


// export function addMessage(message,detail){
// 	return{
// 		type: ADD_MESSAGE,
// 		message: message,
// 		detail: detail
// 	}
// }



// const addMessageStarted = () => ({
// 	type: ADD_MESSAGE_STARTED
//   });