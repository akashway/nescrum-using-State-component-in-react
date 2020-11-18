import React, {Component} from 'react'
import axios from 'axios'
import './registrationPageStyles.css'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router'
import * as ReactBootStrap from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

/**
 * @requires login class Component 
 * @description Validate the feilds.There is proper email and password should be entered using validation function
 * @returns CSS Styles which need to change on entering unaccepected details.
 */ 

class LoginPage extends Component{
    constructor(props){
        super(props)
        this.emailRef=React.createRef()
        this.emailLabeleReqRef=React.createRef()
        this.passwordRef=React.createRef()
        this.passLabeleReqRef=React.createRef()
        this.state={
            email:"",
            password:"",
            user_email:"",
            user_pass:"",
            dashboardStatus:false,
            loadingStatus:null,
            passwordError:"",
            employeeEmailError:""

        }
    }

    handleEmail = (event) =>{
        this.setState({
            email:event.target.value
        })
        console.log(event.target.value)

        const regxPasswoord=new RegExp("^(?=.*[!@#$%^&*])")
        const regxEmail= new RegExp(/^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)
    }

   
    handlePassword = (event) =>{
        this.setState({
            password:event.target.value
        })
        

    }

    /**
     * @requires login Page
     * @description On Submit function validate the field and it also establishing API connection on Login
     * @returns Successful or Unsuccessful API Connection
     */ 

    clickHandler= (event) =>{
        event.preventDefault()
        console.log(this.state.email)
        console.log(this.state.password)


        const newRegistration={
                user_email:this.state.email,
                user_pass:this.state.password
        }

        if(newRegistration.user_email && newRegistration.user_pass){
            axios.post("http://180.149.241.208:3047/login",newRegistration)

            .then( response =>{
                console.log(response)
                // this.props.localStorageObject.userName=response.data.user_name
                // this.props.localStorageObject.token=response.data.token
                // this.props.localStorageObject.userEmail=response.data.user_email
                localStorage.setItem("userName",response.data.user_name)
                localStorage.setItem("token",response.data.token)
                localStorage.setItem("userEmail",response.data.user_email)
                // console.log(this.props.localStorageObject.userName)
                // console.log(this.props.localStorageObject.token)
                // console.log(this.props.localStorageObject.userEmail)
                console.log(localStorage.getItem("userName"))
                console.log(localStorage.getItem("token"))
                console.log(localStorage.getItem("userEmail"))
                this.submitHandler()
            }
            )

            .catch(error =>{
                console.log(error)
                this.setState({
                    loadingStatus:false
                })
                alert("Enter Credential is wrong")

            }
            )

            this.setState({
                loadingStatus:true
            })


        }
        this.onSubmitvalidationHandler()

    }

    submitHandler = async(event) =>{
        
        let token=await localStorage.token
        // this.loadingStatusHandler()
        if(token){
            this.setState({
                dashboardStatus:true
            })
            console.log("1")
        }
        else{
            this.setState({
                dashboardStatus:false
            })
            console.log("2")
        }
    
        console.log(this.state.dashboardStatus)
    }

    // submitHandler = (event) =>{
    //     if(localStorage.getItem("token")){
    //         this.setState({
    //             dashboardStatus:true
    //         })
    //         console.log("1")
    //     }
    //     else{
    //         console.log("2")
    //     }
    //     console.log(this.state.dashboardStatus)
    // }

    // loadingStatusHandler=()=>{
    //     this.setState({
    //         loadingStatus:true
    //     })
    //     console.log(this.state.loadingStatus)
    //     console.log("yes before")
    // }


    /**
     * @requires login Page
     * @description Validate the Password feilds on Blur.There is proper password should be entered using blur validation function
     * @returns CSS Styles which need to change on entering unaccepected details.
     */ 

    handlePassBlur=(event)=>{
        const regxPasswoord=new RegExp("^(?=.*[!@#$%^&*])")

        if(this.state.password===""){
            this.passwordRef.current.style.border="2px solid red"
            this.passLabeleReqRef.current.style.display="block"
            this.setState({
                passwordError:"**Password Required"
            })
        }

        else if(regxPasswoord.test(this.state.password)){
            this.passwordRef.current.style.border="0.5px solid black"
            this.passLabeleReqRef.current.style.display="none"
            this.setState({
                passwordError:""
            })
     
        }

        else if(this.state.password.length<8 || this.state.password.length>13 ){
            this.passwordRef.current.style.border="2px solid red"
            this.passLabeleReqRef.current.style.display="block"
            this.setState({
                passwordError:"**length between 8 and 13"
            })
            
        }
        else{
            this.passwordRef.current.style.border="0.5px solid black"
            this.passLabeleReqRef.current.style.display="none"
            this.setState({
                passwordError:""
            })
         
        }
    }

    /**
     * @requires login Page 
     * @description Validate the Email feilds on Blur.There is proper Email should be entered using blur validation function
     * @returns CSS Styles which need to change on entering unaccepected details.
     */ 



    handleEmailBlur=(event)=>{
        const regxEmail= new RegExp(/^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)
        if(this.state.email===""){
            this.emailRef.current.style.border="2px solid red"
            this.emailLabeleReqRef.current.style.display="block"
            this.setState({
                employeeEmailError:"**Email required"
            })
        
        }

        else if((regxEmail.test(this.state.email))===false){
            this.emailRef.current.style.border="2px solid red"
            this.emailLabeleReqRef.current.style.display="block"
            this.setState({
                employeeEmailError:"**Enter Proper Email Id"
            })
            
        }

        else{
            this.emailRef.current.style.border="0.5px solid black"
            this.emailLabeleReqRef.current.style.display="none"
            this.setState({
                employeeEmailError:""
            })
        }

    }

    /**
     * @requires login Page
     * @description Validate the fields on submit.There is proper email and password should be entered using validation function
     * @returns CSS Styles which need to change on entering unaccepected details.
     */ 

    onSubmitvalidationHandler=()=>{

        if(this.state.email===""){
            this.emailRef.current.style.border="2px solid red"
            this.emailLabeleReqRef.current.style.display="block"
            this.setState({
                employeeEmailError:"**Email required"
            })
        }

        if(this.state.password===""){
            this.passwordRef.current.style.border="2px solid red"
            this.passLabeleReqRef.current.style.display="block"
            this.setState({
                passwordError:"**Password Required"
            })
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

        const emailField={
            margin:"20px 20px 5px 22px",
            float:"left",
            padding:"10px",
            borderBottom: "1px solid rgb(76, 82, 80)",
            borderLeft: "3px solid white",
            borderRight: "3px solid white",
            borderTop: "3px solid white"
        }

        const passwordField={
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
            marginTop:"40px",
            marginLeft:"110px",
            marginBottom:"5px"
        }

    

        return(
            
            <div>
                <div style={logo}>
                    <h1>Neo<span style={firstHeading}>SCRUM</span></h1>
                </div>

                {/* {console.log(this.props.localStorageObject.firstTimeUser)}
                {console.log(this.props.localStorageObject.success)}
                {console.log(this.props.localStorageObject.userName)}
                {console.log(this.props.localStorageObject.userEmail)}
                {console.log(this.props.localStorageObject.feedbackResponse)}
                {console.log(this.props.localStorageObject.addFeedbackResponse)}
                {console.log(this.props.localStorageObject.token)} */}

                {!(this.state.loadingStatus)?<form className="formBox" onSubmit={this.submitHandler}>
                    <div style={{marginTop:"10px"}}>
                        <h3>Login</h3>
                    </div>
    
                    <div style={{margin:"20px 23px 10px 24px"}}>
                        <input type="text" ref={this.emailRef} value={this.state.email} placeholder="Email*" style={emailField}  onChange={this.handleEmail} onBlur={this.handleEmailBlur}/>
                        <label ref={this.emailLabeleReqRef} style={{color:"red", display:"none",float:"left",marginLeft:"23px"}}>{this.state.employeeEmailError}</label> 
                        {/* <label ref={this.emailLabeleProperRef}style={{color:"red", display:"none"}}>**Please Enter Proper Email id</label>  */}
                    </div>

                    <div style={{margin:"20px 23px 10px 24px"}}>
                        <input type="password" ref={this.passwordRef} value={this.state.password} placeholder="password*" style={passwordField} onChange={this.handlePassword} onBlur={this.handlePassBlur}/>
                        <label ref={this.passLabeleReqRef} style={{color:"red", display:"none",float:"left",marginLeft:"23px"}}>{this.state.passwordError}</label>
                        {/* <label ref={this.passLabeleAlpaNumRef} style={{color:"red", display:"none"}}>**should contain Alpha Numeric no special chars</label>
                        <label ref={this.passLabeleLengthRef} style={{color:"red", display:"none"}}>**length between 8 and 13</label>   */}
                    </div>

                    <div>
                        <Button type="submit" style={buttonStyle} variant="primary"  onClick={this.clickHandler}>Login</Button>
                    </div>
                    
                    <div style={{margin: "320px auto 0px", color:"blue"}}>
                        <Link to="/" style={{textDecoration:"none"}}>
                            <div style={{fontSize:"17px",color:"blue"}}>Do not have account click here</div>
                        </Link>
                        <Link to="/forgetpassword" style={{textDecoration:"none"}}>
                            <div style={{fontSize:"17px",color:"blue",marginTop:"14px"}}>Forget Password click here</div>
                        </Link>
                        
                    </div>
                </form>
    :<div style={{margin:"250px auto"}}><ReactBootStrap.Spinner size="lg" animation="border"/></div>}

                {localStorage.token}
                {this.state.dashboardStatus? <Redirect to='/dashboard'/> :console.log("no u can not")}
                {localStorage.token?<Redirect to='/dashboard'/> :console.log("no u can not")}
            </div>
            
        )
    }
}

export default LoginPage