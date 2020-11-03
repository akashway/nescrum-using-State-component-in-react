import React, {Component} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import {Link} from 'react-router-dom'
import './registrationPageStyles.css'

class RegistrationPage extends Component{
    constructor(props){
        super(props)
        this.nameRef= React.createRef()
        this.employeeLabeleReqRef= React.createRef()
        this.emailRef= React.createRef()
        this.emailLabeleReqRef= React.createRef()
        this.state={
            employeeName:"",
            email:"",
            user_name:"",
            user_email:"",
            // loginStatus:false
        }
    }

    handleEmployeeName = (event) =>{
        this.setState({
            employeeName:event.target.value
        })
        console.log(event.target.value)
        const regxname = new RegExp("^(?=.*[0-9])")
    }

   
   
    handleEmail = (event) =>{
        this.setState({
            email:event.target.value
        })

    }

    handleNameBlur = (event) =>{

        if(this.state.employeeName===""){
            this.nameRef.current.style.border="2px solid red"
            this.employeeLabeleReqRef.current.style.display="block"

        }

        else{
            this.nameRef.current.style.border="0.5px solid black"
            this.employeeLabeleReqRef.current.style.display="none"
          
        }
        console.log(this.loginStatus)
    
    }

    handleEmailBlur=(event) => {
        if(this.state.email===""){
            this.emailRef.current.style.border="2px solid red"
            this.emailLabeleReqRef.current.style.display="block"

        }
        else if(this.state.regxname.test(this.state.email)){
            this.emailRef.current.style.border="2px solid blue"
            
        }

        else{
            this.emailRef.current.style.border="0.5px solid black"
            this.emailLabeleReqRef.current.style.display="none"
          
        }

    }

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
                localStorage.setItem("fistTimeUser",response.data.message)
                localStorage.setItem("success",response.data.success)
                console.log(newRegistration.user_name)
                console.log(this.state.employeeName)
                console.log(newRegistration.user_email)
                console.log(this.state.email)
                console.log(localStorage.getItem("fistTimeUser"))
                console.log(localStorage.getItem("success"))
            }
            )

            .catch(error =>{
                console.log(error)
            }
            )

            
        }


    }

       
    render(){

        const logo={
            fontSize:"25px"
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
            backgroundColor:"rgb(123, 50, 168)",
            color:"white",
            padding:"13px",
            float:"left",
            border:"1px solid rgb(123, 50, 168)",
            borderRadius:"3px",
            marginTop:"60px",
            marginLeft:"80px",
            marginBottom:"0px"
        }

        return(
            <div>
                <div style={logo}>
                    <h1>Neo<span style={firstHeading}>SCRUM</span></h1>
                </div>

                <form className="formBox" onSubmit={this.submitHandler}>
                    <div >
                        <h3>Enter New Developer</h3>
                    </div>

                    <div>
                        <input type="text" ref={this.nameRef} value={this.state.employeeName} placeholder="Employee Name*" style={employeeNameField}  onChange={this.handleEmployeeName} onBlur={this.handleNameBlur}/>
                        <label ref={this.employeeLabeleReqRef} style={{color:"red", display:"none"}}>**Employee Name Required</label> 
                    </div>

                    <div>
                        <input type="text" ref={this.emailRef} value={this.state.email} placeholder="Email*" style={emailField} onChange={this.handleEmail} onBlur={this.handleEmailBlur}/>
                        <label ref={this.emailLabeleReqRef} style={{color:"red", display:"none"}}>**Email  Required</label> 
                    </div>

                    <span style={{position:"relative", top:"30px",left:"30px"}}>
                        <input type="file" id="myFile" name="filename"></input>
                    </span>

                    <div>
                        <button type="submit" style={buttonStyle} onClick={this.clickHandler}>Submit</button>
                    </div>

                    <div style={{margin: "130px auto", color:"blue"}}>

                        <Link to="/login">
                            <button style={{}}>Already have account click here</button>
                        </Link>
                        
                    </div>
                </form>
                {/* {this.loginStatus? alert("You Already Register with us "):null} */}
                {localStorage.token?<Redirect to='/dashboard'/>: null}
            </div>
        )
    }
}

export default RegistrationPage