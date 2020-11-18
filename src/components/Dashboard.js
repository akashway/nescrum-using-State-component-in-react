import React,{ Component } from 'react'
import axios from 'axios'
import './dashboardClassStyles.css'
import { Redirect } from 'react-router'
import Button from 'react-bootstrap/Button'
import ChildDashboard from './ChildDashboard'

//Dashboard class Component
/**
 * @author Akash Mishra
 * @requires Parent App Components
 * @description Basic logo and username is displayed at the top.List of feedbacks available in backend is showed with the help css grid.Timer is alse added using oment react js.API is called to validate all input field credential
 * @returns Static Dashboard design.Also return API links result in order to proper navigation between all pages off APP
 */


class Dashboard extends Component{

    constructor(props){
        super(props)
        this.state={
            tokenStatus:true,
            addFeedbackStatus:null,
            names : ['James'],
            feedbackArray:[],
            feedbackLength:0

            
        }
    }

    /**
     * @requires Dashboard Page
     * @description Api Handler function is use.During rendering it runns one time and it  establishing API connection.
     * @returns Successful or Unsuccessful API Connection
     */ 

    componentDidMount=()=>{

            if(localStorage.token) {
                axios.get("http://180.149.241.208:3047/feedback",{
                    headers:{ Authorization:localStorage.token
                    }
                })
                .then( response =>{
                    console.log(response.data)
                    // this.props.localStorageObject.feedbackResponse=response.data.message
                    localStorage.setItem("feedbackResponse",response.data.message)
                    // localStorage.setItem("feedbackLength",response.data.feedback.length)
                    // localStorage.setItem("feedbackArray",response.data.feedback)
                    this.setState({
                        feedbackArray:response.data.feedback,
                        feedbackLength:response.data.feedback.length
                    })
                    console.log(response.data.feedback)
                    console.log("api handler")
                    // console.log(this.props.localStorageObject.feedbackResponse)
                    console.log(localStorage.feedbackResponse)
                })
        
            }

            // if(localStorage.feedbackResponse){
            //     this.setState({
            //         displayBoxStatus:false
            //     })
            // }
    }

    clickLogoutHandler=(event)=>{

        // this.props.localStorageObject.token=""
        localStorage.removeItem("token");
        localStorage.removeItem("fistTimeUser");
        localStorage.removeItem("success");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("feedbackResponse");
        localStorage.removeItem("feedbackResponseTwo");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        localStorage.removeItem("length");
        localStorage.removeItem("fistUser");
        localStorage.removeItem("FeedbackLength");
        localStorage.removeItem("FeedbackArray");
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
            position:"absolute",
            // backgroundColor:"rgb(123, 50, 168)",
            // color:"white",
            // padding:"10px",
            // border:"1px solid rgb(123, 50, 168)",
            // borderRadius:"2px",
            top:"25px",
            right:"190px"
        }
    
        const logoutButtonStyle={
            position:"absolute",
            // backgroundColor:"red",
            // color:"white",
            // padding:"10px",
            margin:"5px",
            // border:"1px solid red",
            // borderRadius:"2px",
            top:"20px",
            right:"80px"
        }
    
        const feedbackStyleOne={
            backgroundColor:"chocolate",
            width:"350px",
            height:"30px",
            marginLeft:"10px",
            marginTop:"7px",
            textAlign:"center"
        }
    
        // const feedbackStyleTwo={
        //     backgroundColor:"blue",
        //     width:"350px",
        //     height:"30px",
        //     marginLeft:"10px",
        //     marginTop:"7px",
        //     textAlign:"center"
        // }
    
        // const feedbackStyleThree={
        //     backgroundColor:"yellow",
        //     width:"350px",
        //     height:"30px",
        //     marginLeft:"10px",
        //     marginTop:"7px",
        //     textAlign:"center"
        // }
    
        // const feedbackStyleFour={
        //     backgroundColor:"green",
        //     width:"350px",
        //     height:"30px",
        //     marginLeft:"10px",
        //     marginTop:"7px",
        //     textAlign:"center"
        // }
    
        // const feedbackStyleFive={
        //     backgroundColor:"violet",
        //     width:"350px",
        //     height:"30px",
        //     marginLeft:"10px",
        //     marginTop:"7px",
        //     textAlign:"center"
        // }
    
        // const feedbackStyleSix={
        //     backgroundColor:"chocolate",
        //     width:"350px",
        //     height:"30px",
        //     marginLeft:"10px",
        //     marginTop:"7px",
        //     textAlign:"center"
        // }
        return(
            <div>

{/* 
                {console.log(this.props.localStorageObject.firstTimeUser)}
                {console.log(this.props.localStorageObject.success)}
                {console.log(this.props.localStorageObject.userName)}
                {console.log(this.props.localStorageObject.userEmail)}
                {console.log(this.props.localStorageObject.feedbackResponse)}
                {console.log(this.props.localStorageObject.addFeedbackResponse)}
                {console.log(this.props.localStorageObject.token)} */}
                <div className="dashboardBox">

                <div className="dashboardHeader">
                    
                    <div className="nameLogo">
                        <img style={{width:"70px",height:"70px",borderRadius:"50px"}} src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-600w-1011569245.jpg" alt="Profile Photo"/ >
                        <span style={{position:"relative",left:"10px",top:"0px"}}>Akash Mishra</span>
                    </div>

                    <div className="logout">
                        <Button style={feedbackButtonStyle} variant="primary" size="lg" onClick={this.addFeedbackHandler}>Add Feedback</Button>
                        <Button style={logoutButtonStyle} variant="danger" size="lg" onClick={this.clickLogoutHandler}>Logout</Button>
                    </div>

                </div>


                { !((localStorage.feedbackResponse)==="You have no feedback")  ?

                    <div className="feedbackGridBox">

                        {

                                ((this.state.feedbackArray).map(name => {
                                    return(
                                        <div>
                                            <div className="one">
                                                <div style={feedbackStyleOne}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks {name }</span>
                                                    <ChildDashboard/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }))


                        }

                    {/* <div className="feedbackGrid">
                        <div className="one">
                            <div style={feedbackStyleOne}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks</span>
                            <ChildDashboard/>
                            </div>
                        </div>

                        <div className="two">
                            <div style={feedbackStyleOne}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks</span>
                            <ChildDashboard/>
                            </div>
                        </div>

                        <div className="three">
                            <div style={feedbackStyleOne}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks</span>
                            <ChildDashboard/>
                            </div>
                        </div>

                        <div className="four">
                            <div style={feedbackStyleOne}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks</span>
                            <ChildDashboard/>
                            </div>
                        </div>

                        <div className="five">
                            <div style={feedbackStyleOne}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks</span>
                            <ChildDashboard/>
                            </div>
                        </div>

                        <div className="six">
                            <div style={feedbackStyleOne}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks</span>
                            <ChildDashboard/>
                            </div>
                        </div>

                    </div> */}

                </div> : <div className="response"><h1>{(localStorage.feedbackResponse) }</h1></div>}
            </div>
                {/* {this.props.localStorageObject.token} */}
                { this.state.tokenStatus ? <Redirect to='/dashboard'/>  :<Redirect to='/login'/> }
                {this.state.addFeedbackStatus? <Redirect to='/adddashboard'/> : null}

        </div>
        )
    }
}

export default Dashboard