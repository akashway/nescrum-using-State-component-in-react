import React, {Component} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import {Link} from 'react-router-dom'
import './registrationPageStyles.css'
import { Card } from 'react-bootstrap'
import { Grid } from '@material-ui/core'
import Button from 'react-bootstrap/Button'
import LabelName from './LabelName'

//Registration Class Component
/**
 * @author Akash Mishra
 * @requires Parent App Components
 * @description Create a basic Registration page with two input and submit button.API is called to validate all input field credential
 * @returns Two Input Fields.Also return API links result in order to proper navigation between all pages off APP
 */

class RegistrationPage extends Component{
    constructor(props){
        super(props)
        // super()
        console.log(this.props.localStorageObject.userName)
        this.employeeLabeleReqRef= React.createRef()
        this.employeeLabeleNumericRef=React.createRef()
        this.employeeLabeleSpcRef=React.createRef()
        this.nameRef= React.createRef()
        this.emailRef= React.createRef()
        this.emailLabeleReqRef= React.createRef()
        this.emailLabeleProperRef= React.createRef()

        this.state={
            employeeName:"",
            email:"",
            user_name:"",
            user_email:"",
            loginStatus:false
        }
    }

    handleEmployeeName = (event) =>{
        this.setState({
            employeeName:event.target.value
        })
        console.log(event.target.value)
    }

   
   
    handleEmail = (event) =>{
        this.setState({
            email:event.target.value
        })

    }

    /**
     * @requires Registration Page 
     * @description Validate the Name feild using Blur.There is proper email and name should be entered using Blur validation function
     * @returns CSS Styles which need to change on entering unaccepected details.
     */ 

    handleNameBlur = (event) =>{
        const regxname = new RegExp("^(?=.*[0-9])")
        const regxPasswoord=new RegExp("^(?=.*[!@#$%^&*])")

        // if(this.state.employeeName===""){
        //     this.nameRef.current.style.border="2px solid red"
        //     this.employeeLabeleReqRef.current.style.display="block"

        // }

        // else if(regxname.test(this.state.employeeName)){
        //     this.nameRef.current.style.border="2px solid blue"
            
        // }

        // else{
        //     this.nameRef.current.style.border="0.5px solid black"
        //     this.employeeLabeleReqRef.current.style.display="none"
          
        // }

        if(this.state.employeeName===""){
            this.nameRef.current.style.border="2px solid red"
            this.employeeLabeleReqRef.current.style.display="block"
            this.employeeLabeleSpcRef.current.style.display="none"
            this.employeeLabeleNumericRef.current.style.display="none"
        }

        else if(regxname.test(this.state.employeeName)){
            this.employeeLabeleNumericRef.current.style.display="block"
            this.employeeLabeleSpcRef.current.style.display="none"
            this.employeeLabeleReqRef.current.style.display="none"
        }

        else if(regxPasswoord.test(this.state.employeeName)){
            this.employeeLabeleSpcRef.current.style.display="block"
            this.employeeLabeleNumericRef.current.style.display="none"
            this.employeeLabeleReqRef.current.style.display="none"

        }

        else{
            this.nameRef.current.style.border="0.5px solid black"
            this.employeeLabeleNumericRef.current.style.display="none"
            this.employeeLabeleReqRef.current.style.display="none"
            this.employeeLabeleSpcRef.current.style.display="none"
        }

     
    
    }

        
    /**
     * @requires Registration Page 
     * @description Validate the Email feild using Blur.There is proper email and name should be entered using Blur validation function
     * @returns CSS Styles which need to change on entering unaccepected details.
     */ 

    handleEmailBlur=(event) => {

        const regxEmail= new RegExp(/^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)
        if(this.state.email===""){
            this.emailRef.current.style.border="2px solid red"
            this.emailLabeleReqRef.current.style.display="block"
            this.emailLabeleProperRef.current.style.display="none"

        }

        else if((regxEmail.test(this.state.email))===false){
            this.emailRef.current.style.border="2px solid red"
            this.emailLabeleProperRef.current.style.display="block"
            this.emailLabeleReqRef.current.style.display="none"
            
        }

        else if(localStorage.getItem("userEmail")===this.state.email){
            alert("Email is already register with us ")
            this.emailRef.current.style.border="2px solid red"
            this.emailLabeleReqRef.current.style.display="none"
            this.emailLabeleProperRef.current.style.display="none"

        }


        else{
            this.emailRef.current.style.border="0.5px solid black"
            this.emailLabeleReqRef.current.style.display="none"
            this.emailLabeleProperRef.current.style.display="none"
          
        }

    }

    /**
     * @requires Registration Page  
     * @description On Submit function validate the field and it also establishing API connection on Login
     * @returns Successful or Unsuccessful API Connection
     */ 

    clickHandler= (event) =>{
        event.preventDefault()

        // if(this.state.email){
        //     if((localStorage.getItem("userEmail"))){
        //         this.loginStatus=true;
        //     }
        // }

        const newRegistration={
                user_name:this.state.employeeName,
                user_email:this.state.email
        }

        if(newRegistration.user_name && newRegistration.user_email){
            axios.post("http://180.149.241.208:3047/registration",newRegistration)

            .then( response =>{
                console.log(response)
                this.props.localStorageObject.firstTimeUser=response.data.message
                this.props.localStorageObject.success=response.data.success
                // localStorage.setItem("fistTimeUser",response.data.message)
                // localStorage.setItem("success",response.data.success)
                console.log(newRegistration.user_name)
                console.log(this.state.employeeName)
                console.log(newRegistration.user_email)
                console.log(this.state.email)
                // console.log(localStorage.getItem("fistTimeUser"))
                // console.log(localStorage.getItem("success"))
                console.log(this.props.localStorageObject.firstTimeUser)
                console.log(this.props.localStorageObject.success)
                alert(this.props.localStorageObject.firstTimeUser)

                this.loginStatusHandler()
            }
            )

            .catch(error =>{
                console.log(error)
            }
            )
            
        }
        this.onSubmitHandler()
    }

    loginStatusHandler=()=>{

        this.setState({
            loginStatus:true
        })
    }

    /**
     * @requires Registration Page Function 
     * @description Validate the feilds.There is proper email and name should be entered using validation function
     * @returns CSS Styles which need to change on entering unaccepected details.
     */ 

    onSubmitHandler=()=>{
        if(this.state.employeeName===""){
            this.nameRef.current.style.border="2px solid red"
            this.employeeLabeleReqRef.current.style.display="block"
        }

        if(this.state.email===""){
            this.emailRef.current.style.border="2px solid red"
            this.emailLabeleReqRef.current.style.display="block"
        }

    }


       
    render(){

        const logo={
            fontSize:"25px",
            marginTop:"20px"
        }
    
        const firstHeading={
            color:"red"
        }

        const employeeNameField={
            margin:"20px 20px 5px 22px",
            float:"left",
            padding:"10px",
            borderBottom: "1px solid rgb(76, 82, 80)",
            borderLeft: "3px solid white",
            borderRight: "3px solid white",
            borderTop: "3px solid white"
        }

        const emailField={
            margin:"8px 20px 5px 22px",
            float:"left",
            padding:"10px",
            borderBottom: "1px solid rgb(76, 82, 80)",
            borderLeft: "3px solid white",
            borderRight: "3px solid white",
            borderTop: "3px solid white"
        }
    
        const buttonStyle={
            // backgroundColor:"rgb(123, 50, 168)",
            // color:"white",
            // padding:"13px",
            float:"left",
            // border:"1px solid rgb(123, 50, 168)",
            // borderRadius:"3px",
            marginTop:"70px",
            marginLeft:"110px",
            marginBottom:"8px"
        }

        return(
            <div>
                <div style={logo}>
                    <h1>Neo<span style={firstHeading}>SCRUM</span></h1>
                </div>
                {console.log(this.props.localStorageObject.firstTimeUser)}
                {console.log(this.props.localStorageObject.success)}
                {console.log(this.props.localStorageObject.userName)}
                {console.log(this.props.localStorageObject.userEmail)}
                {console.log(this.props.localStorageObject.feedbackResponse)}
                {console.log(this.props.localStorageObject.addFeedbackResponse)}
                {console.log(this.props.localStorageObject.token)}

                {/* <Grid container justify="center">

                    <Card style={{width:"20rem",height:"23rem"}}>
                        <Card.Body>
                            <Card.Title>Enter New Developer</Card.Title>
                        </Card.Body>

                    </Card>

                </Grid> */}

                <form className="formBox" onSubmit={this.submitHandler}>
                    <div style={{margin:"10px 0px"}}>
                        <h3>Enter New Developer</h3>
                    </div>

                    <div style={{margin:"20px 23px 10px 24px"}}>
                        <input type="text" ref={this.nameRef} value={this.state.employeeName} placeholder="Employee Name*" style={employeeNameField}  onChange={this.handleEmployeeName} onBlur={this.handleNameBlur}/>
                        <label ref={this.employeeLabeleReqRef} style={{color:"red", display:"none"}}>**Employee Name Required</label> 
                        <label ref={this.employeeLabeleNumericRef} style={{color:"red", display:"none"}}>**Numeric number not required</label>
                        <label ref={this.employeeLabeleSpcRef} style={{color:"red", display:"none"}}>**No special character req.</label>
                    </div>

                    <div style={{margin:"20px 23px 10px 24px"}}>
                        <input type="text" ref={this.emailRef} value={this.state.email} placeholder="Email*" style={emailField} onChange={this.handleEmail} onBlur={this.handleEmailBlur}/>
                        <label ref={this.emailLabeleReqRef} style={{color:"red", display:"none",float:"left"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Email Required</label> 
                        <label ref={this.emailLabeleProperRef}style={{color:"red", display:"none",float:"left"}}>**Please Enter Proper Email id</label> 
                    </div>

                    <span style={{position:"relative", top:"30px",left:"46px"}}>
                        <input type="file" id="myFile" name="filename"></input>
                    </span>

                    <div>
                        <Button type="submit" style={buttonStyle} variant="primary"  onClick={this.clickHandler}>Submit</Button>
                    </div>

                    <div style={{margin: "130px auto", color:"blue"}}>

                        <Link to="/login" style={{textDecoration:"none"}}>
                            <div style={{fontSize:"17px",color:"blue"}}>Already have account click here</div>
                        </Link>
                        
                    </div>
                </form>
                {localStorage.token?<Redirect to='/dashboard'/>: null}
                {this.state.loginStatus?<Redirect to='/login'/>:null}
            </div>
        )
    }
}

export default RegistrationPage