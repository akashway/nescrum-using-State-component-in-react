import React, {Component} from 'react'
import axios from 'axios'
import './registrationPageStyles.css'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router'

class RegistrationPage extends Component{
    constructor(){
        super()

        this.state={
            email:"",
            password:"",
            user_email:"",
            user_pass:"",
            dashboardStatus:false

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
                localStorage.setItem("userName",response.data.user_name)
                localStorage.setItem("token",response.data.token)
                localStorage.setItem("userEmail",response.data.user_email)
                console.log(localStorage.getItem("userName"))
                console.log(localStorage.getItem("token"))
                console.log(localStorage.getItem("userEmail"))
                this.submitHandler()
            }
            )

            .catch(error =>{
                console.log(error)
            }
            )
            
        }


    }

    submitHandler = async(event) =>{
        let token=await localStorage.getItem("token")
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

       
    render(){

        const logo={
            fontSize:"25px"
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
                        <h3>Login</h3>
                    </div>

                    <div>
                        <input type="text" value={this.state.email} placeholder="Email*" style={emailField}  onChange={this.handleEmail}/>
                    </div>

                    <div>
                        <input type="password" value={this.state.password} placeholder="password*" style={passwordField} onChange={this.handlePassword} />
                    </div>

                    <div>
                        <button type="submit" style={buttonStyle} onClick={this.clickHandler}>Login</button>
                    </div>

                    <div style={{margin: "130px auto", color:"blue"}}>
                        <Link to="/">
                            <button style={{}}>Do not have account click here</button>
                        </Link>
                        <button style={{}}>Forget Password click here</button>
                        
                    </div>
                </form>
                {localStorage.getItem("token")}
                {this.state.dashboardStatus? <Redirect to='/dashboard'/> :console.log("no u can not")}
                {localStorage.token?<Redirect to='/dashboard'/> :console.log("no u can not")}
            </div>
            
        )
    }
}

export default RegistrationPage