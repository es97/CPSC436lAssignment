import React from "react";
import { connect } from "react-redux";
import {fetchMessages,showDetail, addMessage,closeDetail,deleteAllMessages} from "../actions/index"
import "./style.css"

class MessageList extends React.Component {
  constructor(){
    super();
    this.inputMessage = React.createRef();
    this.inputDetail = React.createRef();
    this.state = {
      list: [],
      messageToAdd:""
    };
  }

  // MessageText(message, detail){
  //   return <li onClick={() => this.props.showDetail(message, detail)} className="fullMessage">{message}</li>
  // }
  MessageText(message){
    return <li onClick={() => this.props.showDetail(message.message)} className="fullMessage">{message.message}</li>
  }

  submit= () =>{
    // this.props.addMessage(this.inputMessage.current.value, this.inputDetail.current.value)
    this.props.addMessage(this.inputMessage.current.value)
    this.setState({messageToAdd:""})
    this.inputMessage.current.value ="";
    this.inputDetail.current.value ="";
  }

  componentDidMount() {
    this.props.fetchMessages();
  }

	render() {
      const list = Object.values(this.props.list).map((message) =>
      <ul id="messagesList">
        {this.MessageText(message)}
      </ul>
      );
      const details =
        <div className="container center">
        <h3>Details View</h3>
        {/* <h4>Details: {this.props.el.detail}</h4> */}
        <h4>Details: {this.props.message}</h4>
        <input type="button" onClick={() => this.props.closeDetail()} value="Close" className="button_close"></input>
        </div>
      return(
        <div className="container">
          <h4><strong>Messages want to add</strong></h4>
          <textarea ref={this.inputMessage} type="text"rows="8" cols="80" id="messagebox" name="message"
          placeholder="Enter message here..."></textarea><br></br>
          <h4><strong>Details want to add</strong></h4>
          <textarea ref={this.inputDetail} type="text"rows="4" cols="80" id="deatailbox" name="detail"
          placeholder="Enter details here..."></textarea><br></br>
          <br></br><input type="button" value="Add" id="addButton" onClick={this.submit}></input><br></br><br></br>
          <div className="message-list">
            {/* {this.props.el.showDetail? details : list} */}
            {this.props.showDetail? details : list}
          </div>
          <input type="button" onClick={() => this.props.deleteAllMessages()} value="Delete All Messages" className="button_close"></input>
        </div>
      );
	}
}


const mapStateToProps = (state) => {
  // return {list: state.list, el: state.el}
  return{
    list:state.messages,
    showDetail:state.showDetail
  }
};

const mapDispatchToProps =  dispatch => {
  // addMessage,showDetail,closeDetail
  return {
    fetchMessages:() => dispatch(fetchMessages()),
    addMessage: (message) => dispatch(addMessage(message)),
    closeDetail:() => dispatch(closeDetail('')),
    deleteAllMessages:() => dispatch(deleteAllMessages())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);