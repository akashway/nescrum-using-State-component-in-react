import React,{ Component } from 'react'
import axios from 'axios'
import './dashboardClassStyles.css'
import { Redirect } from 'react-router'

class Dashboard extends Component{

    constructor(){
        super()
        this.state={
            tokenStatus:true,
            addFeedbackStatus:null
        }
    }

    apiHandler=()=>{

            if(localStorage.token) {
                axios.get("http://180.149.241.208:3047/feedback",{
                    headers:{ Authorization:localStorage.token
                    }
                })
                .then( response =>{
                    console.log(response.data)
                    localStorage.setItem("feedbackResponse",response.data.message)
                })
        
            }
    }

    clickLogoutHandler=(event)=>{

        localStorage.removeItem("token")
        if(!(localStorage.token)){
            this.setState({
                tokenStatus:false
            })
            console.log(this.state.tokenStatus)
        }

        else{
            this.setState({
                tokenStatus:true
            })
            console.log(this.state.tokenStatus)

        }

        console.log(localStorage.token)
    }

    addFeedbackHandler=(event)=>{

        if(localStorage.token){
            this.setState({
                addFeedbackStatus:true
            })
            console.log(this.state.addFeedbackStatus)
        }

        else{
            this.setState({
                addFeedbackStatus:false
            })
            console.log(this.state.addFeedbackStatus)

        }


    }

    render(){
        const feedbackButtonStyle={
            backgroundColor:"rgb(123, 50, 168)",
            color:"white",
            padding:"10px",
            margin:"5px",
            border:"1px solid rgb(123, 50, 168)",
            borderRadius:"2px"
        }
    
        const logoutButtonStyle={
            backgroundColor:"red",
            color:"white",
            padding:"10px",
            margin:"5px",
            border:"1px solid red",
            borderRadius:"2px"
        }
    
        const feedbackStyleOne={
            backgroundColor:"chocolate",
            width:"350px",
            height:"30px",
            marginLeft:"10px",
            marginTop:"7px"
        }
    
        const feedbackStyleTwo={
            backgroundColor:"blue",
            width:"350px",
            height:"30px",
            marginLeft:"10px",
            marginTop:"7px",
            textAlign:"center"
        }
    
        const feedbackStyleThree={
            backgroundColor:"yellow",
            width:"350px",
            height:"30px",
            marginLeft:"10px",
            marginTop:"7px",
            textAlign:"center"
        }
    
        const feedbackStyleFour={
            backgroundColor:"green",
            width:"350px",
            height:"30px",
            marginLeft:"10px",
            marginTop:"7px",
            textAlign:"center"
        }
    
        const feedbackStyleFive={
            backgroundColor:"violet",
            width:"350px",
            height:"30px",
            marginLeft:"10px",
            marginTop:"7px",
            textAlign:"center"
        }
    
        const feedbackStyleSix={
            backgroundColor:"chocolate",
            width:"350px",
            height:"30px",
            marginLeft:"10px",
            marginTop:"7px",
            textAlign:"center"
        }

        return(
            <div className="dashboardBox">
                {this.apiHandler()}


            <div className="dashboardHeader">
                
                <div className="nameLogo">
                <img style={{width:"70px",height:"70px",borderRadius:"50px"}} src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-600w-1011569245.jpg" alt="Profile Photo"/ >
                <span style={{position:"relative",left:"10px",bottom:"30px"}}>Akash Mishra</span>
                </div>

                <div className="logout">
                        <button style={feedbackButtonStyle} onClick={this.addFeedbackHandler}>Add Feedback</button>
                    <button style={logoutButtonStyle} onClick={this.clickLogoutHandler}>Logout</button>
                </div>

            </div>


            <div className="feedbackGridBox">

            <h1>{localStorage.getItem("feedbackResponse")}</h1>

                <div className="feedbackGrid">
                    <div className="one">
                        <div style={feedbackStyleOne}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks</span>
                        </div>
                    </div>

                    <div className="two">
                        <div style={feedbackStyleTwo}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks</span>
                        </div>
                    </div>

                    <div className="three">
                        <div style={feedbackStyleThree}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks</span>
                        </div>
                    </div>

                    <div className="four">
                        <div style={feedbackStyleFour}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks</span>
                        </div>
                    </div>

                    <div className="five">
                        <div style={feedbackStyleFive}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks</span>
                        </div>
                    </div>

                    <div className="six">
                        <div style={feedbackStyleSix}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks</span>
                        </div>
                    </div>

                </div>

            </div> 
            {console.log(localStorage.token)}
            { this.state.tokenStatus ? <Redirect to='/dashboard'/>  :<Redirect to='/login'/> }
            {this.state.addFeedbackStatus? <Redirect to='/adddashboard'/> : null}
        </div>
        )
    }
}

export default Dashboard