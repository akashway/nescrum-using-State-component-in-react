// import React,{ Component } from 'react'
// import './addDashboardStyles.css'
// import axios from 'axios'
// import { Redirect } from 'react-router'

// class AddDashboard extends Component{
//     constructor(){
//         super()
//         this.state={
//             tokenAddStatus:true
//         }
//     }

//     apiAddDashboardHandler=()=>{

//         if(localStorage.token) {
//             axios.get("http://180.149.241.208:3047/dashboard",{
//                 headers:{ Authorization:localStorage.token
//                 }
//             })
//             .then( response =>{
//                 console.log(response.data)
//                 localStorage.setItem("feedbackResponseTwo",response.data.message)
    
//             })
    
//         }
// }

// clickLogoutHandler=(event)=>{

//     localStorage.removeItem("token")
//     if(!(localStorage.token)){
//         this.setState({
//             tokenAddStatus:false
//         })
//         console.log(this.state.tokenAddStatus)
//     }

//     else{
//         this.setState({
//             tokenAddStatus:true
//         })
//         console.log(this.state.tokenAddStatus)

//     }

//     console.log(localStorage.token)
//     }

//     render(){

//         const logoutButtonStyleTwo={
//             backgroundColor:"red",
//             color:"white",
//             padding:"10px",
//             marginRight:"20px",
//             border:"1px solid red",
//             borderRadius:"2px"
//         }
    
//         const submitFeedbackStyleOneButton={
//             position:"relative",
//             top:"10px",
//             left:"100px",
//             backgroundColor:"rgb(123, 50, 168)",
//             border:"2px solid rgb(123, 50, 168)",
//             borderRadius:"2px",
//             color:"white",
//             padding:"13px",
//             width:"160px"
//         }
    
//         const submitFeedbackStyleTwoButton={
//             position:"relative",
//             top:"10px",
//             left:"100px",
//             backgroundColor:"rgb(123, 50, 168)",
//             border:"2px solid rgb(123, 50, 168)",
//             borderRadius:"2px",
//             color:"white",
//             padding:"13px",
//             width:"160px"
//         }
    
//         const submitFeedbackStyleThreeButton={
//             position:"relative",
//             top:"10px",
//             left:"100px",
//             backgroundColor:"rgb(123, 50, 168)",
//             border:"2px solid rgb(123, 50, 168)",
//             borderRadius:"2px",
//             color:"white",
//             padding:"13px",
//             width:"160px"
//         }
    
//         const submitFeedbackStyleTextarea={
    
//             marginTop:"90px"
    
//         }

    
    
//         const handleLogout=() =>{
    
//             localStorage.removeItem("token")
//             console.log(localStorage.token)
    
//         }
    
//         return(
//             <div>
//                 {this.apiAddDashboardHandler()}

//             <div class="submitDashboardHeader">

//                 <div className="submitName">
//                     <img style={{position:"relative",width:"70px",height:"70px",borderRadius:"50px",bottom:"15px"}} src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-600w-1011569245.jpg" alt="Profile Photo"/ >
//                     <span style={{position:"relative",left:"10px",bottom:"45px"}}>Akash Mishra</span>
//                 </div>

//                 <div class="submitLogout">
//                     <button style={logoutButtonStyleTwo} onClick={this.clickLogoutHandler}>Logout</button>
//                 </div>

//             </div>


//             <h1>{localStorage.getItem("feedbackResponseTwo")}</h1>

//                 <div className="submitFeedbackGrid">

//                     <div className="submitOne">
//                         <div>
//                         <img style={{width:"70px",height:"70px",borderRadius:"50px",marginTop:"60px"}} src="https://www.yourtango.com/sites/default/files/image_blog/types-guys-who-stay-single-men.jpg" alt="Profile Photo"/ >
//                         </div>
//                         <div>
//                             <textarea style={submitFeedbackStyleTextarea} rows="3" cols="43"></textarea>
//                             <button style={submitFeedbackStyleOneButton}>Submit Feedback</button>
//                         </div>
//                     </div>

//                     <div className="submitTwo">
//                     <div>
//                         <img style={{width:"70px",height:"70px",borderRadius:"50px",marginTop:"60px"}} src="https://media.vanityfair.com/photos/5df908e81216ae00085d37dc/9:16/w_749,h_1333,c_limit/little-women-man-problem-b.jpg" alt="Profile Photo"/ >
//                         </div>
//                         <div>
//                             <textarea style={submitFeedbackStyleTextarea} rows="3" cols="43"></textarea>
//                             <button style={submitFeedbackStyleTwoButton}>Submit Feedback</button>
//                         </div>
//                     </div>

//                     <div className="submitThree">
//                     <div>
//                         <img style={{width:"70px",height:"70px",borderRadius:"50px",marginTop:"60px"}} src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-600w-1011569245.jpg" alt="Profile Photo"/ >
//                         </div>
//                         <div>
//                             <textarea style={submitFeedbackStyleTextarea} rows="3" cols="43"></textarea>
//                             <button style={submitFeedbackStyleThreeButton}>Submit Feedback</button>
//                         </div>
//                     </div>

//                 </div>
//                 {/* { localStorage.token ? <Redirect to='/adddashboard'/> :<Redirect to='/login'/>} */}
//                 {this.state.tokenAddStatus?<Redirect to='/adddashboard'/> :<Redirect to='/login'/>}
//             </div>

//         )
//     }
// }

// export default AddDashboard


import React,{ Component } from 'react'
import './addDashboardStyles.css'
import axios from 'axios'
import { Redirect } from 'react-router'
import Button from "react-bootstrap/Button"

class AddDashboard extends Component{
    constructor(){
        super()
        this.textOneRequiredRef=React.createRef()
        this.textTwoRequiredRef=React.createRef()
        this.textThreeRequiredRef=React.createRef()
        this.textOnelableRef=React.createRef()
        this.textTwolableRef=React.createRef()
        this.textThreelableRef=React.createRef()
        this.state={
            textareaOne:"",
            textareaTwo:"",
            textareaThree:"",
            tokenAddStatus:true
        }
    }

    apiAddDashboardHandler=()=>{

        if(localStorage.token) {
            axios.get("http://180.149.241.208:3047/dashboard",{
                headers:{ Authorization:localStorage.token
                }
            })
            .then( response =>{
                console.log(response.data)
                localStorage.setItem("feedbackResponseTwo",response.data.message)
    
            })
    
        }
}

clickLogoutHandler=(event)=>{

    localStorage.removeItem("token")
    if(!(localStorage.token)){
        this.setState({
            tokenAddStatus:false
        })
        console.log(this.state.tokenAddStatus)
    }

    else{
        this.setState({
            tokenAddStatus:true
        })
        console.log(this.state.tokenAddStatus)

    }

    console.log(localStorage.token)
    }

    changeHandlerOne=(event)=>{
        this.setState({
            textareaOne:event.target.value
        })
    }

    changeHandlerTwo=(event)=>{
        this.setState({
            textareaTwo:event.target.value
        })
    }

    changeHandlerThree=(event)=>{
        this.setState({
            textareaThree:event.target.value
        })
    }



    clickHandlerOne=(event)=>{
        if(this.state.textareaOne===""){
            this.textOneRequiredRef.current.style.border="2px solid red"
            this.textOnelableRef.current.style.display="block"
        }
        else{
            this.textOneRequiredRef.current.style.border="0.5px solid black"
        }
    }
    clickHandlerTwo=(event)=>{
        if(this.state.textareaTwo===""){
            this.textTwoRequiredRef.current.style.border="2px solid red"
            this.textTwolableRef.current.style.display="block"
        }
        else{
            this.textTwoRequiredRef.current.style.border="0.5px solid black"
        }
    }

    clickHandlerThree=(event)=>{
        if(this.state.textareaThree===""){
            this.textThreeRequiredRef.current.style.border="2px solid red"
            this.textThreelableRef.current.style.display="block"
        }
        else{
            this.textThreeRequiredRef.current.style.border="0.5px solid black"
        }
    }

    render(){

        const logoutButtonStyleTwo={
            position:"absolute",
            // backgroundColor:"red",
            // color:"white",
            // padding:"10px",
            marginRight:"20px",
            // border:"1px solid red",
            // borderRadius:"2px",
            top:"25px",
            right:"40px"
        }
    
        const submitFeedbackStyleOneButton={
            position:"relative",
            top:"10px",
            left:"67px",
            // backgroundColor:"rgb(123, 50, 168)",
            // border:"2px solid rgb(123, 50, 168)",
            // borderRadius:"2px",
            // color:"white",
            // padding:"13px",
            // width:"160px"
        }
    
        const submitFeedbackStyleTwoButton={
            position:"relative",
            top:"10px",
            left:"67px",
            // backgroundColor:"rgb(123, 50, 168)",
            // border:"2px solid rgb(123, 50, 168)",
            // borderRadius:"2px",
            // color:"white",
            // padding:"13px",
            // width:"160px"
        }
    
        const submitFeedbackStyleThreeButton={
            position:"relative",
            top:"10px",
            left:"67px",
            // backgroundColor:"rgb(123, 50, 168)",
            // border:"2px solid rgb(123, 50, 168)",
            // borderRadius:"2px",
            // color:"white",
            // padding:"13px",
            // width:"160px"
        }
    
        const submitFeedbackStyleTextarea={
    
            marginTop:"65px",
            marginBottom:"10px"
    
        }

    
    
        const handleLogout=() =>{
    
            localStorage.removeItem("token")
            console.log(localStorage.token)
    
        }
    
        return(

            <div>
                <div>
                    {this.apiAddDashboardHandler()}

                <div class="submitDashboardHeader">

                    <div className="submitName">
                        <img style={{position:"relative",width:"70px",height:"70px",borderRadius:"50px",bottom:"15px"}} src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-600w-1011569245.jpg" alt="Profile Photo"/ >
                        <span style={{position:"absolute",left:"140px",top:"35px",}}>Akash Mishra</span>
                    </div>

                    <div class="submitLogout">
                        <Button style={logoutButtonStyleTwo} variant="danger" size="lg" onClick={this.clickLogoutHandler}>Logout</Button>
                    </div>

                </div>

                { !((localStorage.feedbackResponseTwo)==="You do not have any receiver name to give feedback") ?

                    <div className="submitFeedbackGrid">

                        <div className="submitOne">
                            <div>
                            <img style={{width:"70px",height:"70px",borderRadius:"50px",marginTop:"60px"}} src="https://www.yourtango.com/sites/default/files/image_blog/types-guys-who-stay-single-men.jpg" alt="Profile Photo"/ >
                            </div>
                            <div>
                                <textarea ref={this.textOneRequiredRef} value={this.state.textareaOne} style={submitFeedbackStyleTextarea} onChange={this.changeHandlerOne} onBlur={this.clickHandlerOne} rows="2" cols="43" ></textarea>
                                <label ref={this.textOnelableRef} style={{color:"red", display:"none",float:"left",position:"absolute",top:"410px",left:"88px"}}>** this field must have value</label>
                                <Button style={submitFeedbackStyleOneButton} variant="primary" size="lg" onClick={this.clickHandlerOne}>Submit Feedback</Button>
                            </div>
                        </div>

                        <div className="submitTwo">
                        <div>
                            <img style={{width:"70px",height:"70px",borderRadius:"50px",marginTop:"60px"}} src="https://media.vanityfair.com/photos/5df908e81216ae00085d37dc/9:16/w_749,h_1333,c_limit/little-women-man-problem-b.jpg" alt="Profile Photo"/ >
                            </div>
                            <div>
                                <textarea ref={this.textTwoRequiredRef} value={this.state.textareaTwo} style={submitFeedbackStyleTextarea} onChange={this.changeHandlerTwo} onBlur={this.clickHandlerTwo} rows="2" cols="43" ></textarea>
                                <label ref={this.textTwolableRef} style={{color:"red", display:"none",float:"left",position:"absolute",top:"410px",left:"517px"}}>** this field must have value</label>
                                <Button style={submitFeedbackStyleTwoButton} variant="primary" size="lg" onClick={this.clickHandlerTwo}>Submit Feedback</Button>
                            </div>
                        </div>

                        <div className="submitThree">
                        <div>
                            <img style={{width:"70px",height:"70px",borderRadius:"50px",marginTop:"60px"}} src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-600w-1011569245.jpg" alt="Profile Photo"/ >
                            </div>
                            <div>
                                <textarea ref={this.textThreeRequiredRef} value={this.state.textareaThree} style={submitFeedbackStyleTextarea} onChange={this.changeHandlerThree} onBlur={this.clickHandlerThree} rows="2" cols="43" ></textarea>
                                <label ref={this.textThreelableRef} style={{color:"red", display:"none",float:"left",position:"absolute",top:"410px",left:"947px"}}>** this field must have value</label>
                                <Button style={submitFeedbackStyleThreeButton} variant="primary" size="lg" onClick={this.clickHandlerThree}>Submit Feedback</Button>
                
                            </div>
                        </div>

                    </div>:<h1>{localStorage.feedbackResponseTwo}</h1>}
                    
                    {/* { localStorage.token ? <Redirect to='/adddashboard'/> :<Redirect to='/login'/>} */}
                    {this.state.tokenAddStatus?<Redirect to='/adddashboard'/> :<Redirect to='/login'/>}
                </div>
            </div>

        )
    }
}

export default AddDashboard