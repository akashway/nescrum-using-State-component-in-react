import { Grid } from '@material-ui/core'
import React,{ Component, createRef } from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

class ForgetPassword extends Component{
    constructor(){
        super()
        this.emailLabeleReqRef=React.createRef()
        this.emailLabeleProperRef=React.createRef()
        this.emailRef=React.createRef()
        this.state={
            email:""
        }
    }

    handleChange = (event) =>{
        this.setState({
            email:event.target.value
        })
        console.log(event.target.value)
    }

    clickHandler=(event)=>{
        const regxEmail= new RegExp(/^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)
        if(this.state.email===""){
            this.emailRef.current.style.border="2px solid red"
            this.emailLabeleReqRef.current.style.display="block"
        }
        if(this.state.email){
            if((regxEmail.test(this.state.email))===true){
                alert("further instruction send to your email")
                this.setState({
                    email:""
                }
                )
            }

        }
    }

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

        else{
            this.emailRef.current.style.border="0.5px solid black"
            this.emailLabeleReqRef.current.style.display="none"
            this.emailLabeleProperRef.current.style.display="none"

          
        }

    }


    render(){
        const buttonStyle={
            // backgroundColor:"rgb(123, 50, 168)",
            // color:"white",
            // padding:"13px",
            float:"left",
            marginLeft:"15px",
            // border:"1px solid rgb(123, 50, 168)",
            // borderRadius:"3px",
            marginTop:"30px",
            marginLeft:"230px"
           
        }

        const logo={
            fontSize:"25px"
        }
    
        const firstHeading={
            color:"red"
        }


        return(
            <Grid container justify="center" style={{marginTop:"100px"}}>
                <Card className="text-center" style={{ width: '40rem' }} border="secondary">
                    <Card.Header>
                    <div style={logo}>
                        <h1>Neo<span style={firstHeading}>SCRUM</span></h1>
                    </div>
                    </Card.Header>
                        <Card.Body>
                            <Card.Title>Enter Email</Card.Title>
                            <div><input value={this.state.email} ref={this.emailRef} name="email" type="email" onChange={this.handleChange} onBlur={this.handleEmailBlur} /></div>
                            <label ref={this.emailLabeleReqRef} style={{color:"red", display:"none"}}>**Email Required</label> 
                            <label ref={this.emailLabeleProperRef}style={{color:"red", display:"none"}}>**Please Enter Proper Email</label> 
                            <Button style={{marginTop:"20px"}} variant="primary" onClick={this.clickHandler}>Submit</Button>
                            <Link to="/login" style={{textDecoration:"none"}}>
                                <div style={{fontSize:"17px",color:"blue",marginTop:"10px"}}>Click here to login</div>
                            </Link>
                        </Card.Body>
                    <Card.Footer className="text-muted">© 1996-2020,neoscrum.com</Card.Footer>
                </Card>

            </Grid>

        )
    }
}
export default ForgetPassword