import React,{ Component } from 'react'
import './dashboardClassStyles.css'

class Dashboard extends Component{
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

            <div className="dashboardHeader">
                
                <div className="nameLogo">
                <img style={{width:"70px",height:"70px",borderRadius:"50px"}} src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-600w-1011569245.jpg" alt="Profile Photo"/ >
                <span style={{position:"relative",left:"10px",bottom:"30px"}}>Akash Mishra</span>
                </div>

                <div className="logout">
                        <button style={feedbackButtonStyle}>Add Feedback</button>
                    <button style={logoutButtonStyle}>Logout</button>
                </div>

            </div>

            <div className="feedbackGridBox">

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
             
        </div>
        )
    }
}

export default Dashboard