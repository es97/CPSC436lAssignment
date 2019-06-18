import React from "react";
import { connect } from "react-redux";
import {fetchMessages,showDetail, addMessage,closeDetail,deleteAllMessages} from "../actions/index"
import "./style.css"
import MessageList from "../components/MessageList";
import { withRouter } from 'react-router-dom'

class Welcome extends React.Component {

    Button = withRouter(({ history }) => (
        <button
          type='button'
          onClick={() => { history.push('.src/components/MessageList.js') }}
        >
          Click Me!
        </button>
      ))

    render() {
        return(
            <div className="container">
                  <h1>Welcome to Message Adding Tool</h1>
                  {/* <Redirect to ="/MessageList" /> */}
            </div>
        )
    }

  }

export default Welcome;