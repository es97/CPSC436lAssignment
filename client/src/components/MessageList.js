import React from "react";
import { connect } from "react-redux";
import {showDetail, addMessage,closeDetail} from "../actions/index"
import "./style.css"

class MessageList extends React.Component {

  constructor(){
    super();
    this.inputMessage = React.createRef();
    this.inputDetail = React.createRef();
  }

  MessageText(message, detail){
    return <li onClick={() => this.props.showDetail(message, detail)} className="fullMessage">{message}</li>
  }

  submit= () =>{
    this.props.addMessage(this.inputMessage.current.value, this.inputDetail.current.value)
    this.inputMessage.current.value ="";
    this.inputDetail.current.value ="";
  }

	render() {
      const list = Object.values(this.props.list).map((input) =>
      <ul id="messagesList">
        {this.MessageText(input.message,input.detail)}
      </ul>
      );
      const details =
        <div className="container center">
        <h3>Details View</h3>
        <h4>Details: {this.props.el.detail}</h4>
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
            {this.props.el.showDetail? details : list}
          </div>
        </div>
      );
	}
}


const mapStateToProps = (state) => {
  return {list: state.list, el: state.el}
};

const mapDispatchToProps = {
  addMessage,showDetail,closeDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);