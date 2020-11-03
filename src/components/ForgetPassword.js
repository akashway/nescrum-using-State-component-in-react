import React,{ Component } from 'react'


class ForgetPassword extends Component{
    constructor(){
        super()
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

    render(){
        const buttonStyle={
            backgroundColor:"rgb(123, 50, 168)",
            color:"white",
            padding:"13px",
            float:"left",
            marginLeft:"15px",
            border:"1px solid rgb(123, 50, 168)",
            borderRadius:"3px",
            marginTop:"30px",
            marginLeft:"230px"
           
        }

        return(
            <div style={{backgroundColor:"white",border:"1px solid black",width:"500px",height:"300px",marginTop:"80px",marginLeft:"400px"}}>
                <div style={{marginTop:"40px"}}>
                <label style={{font:"bold",fontSize:"20px"}}>Enter Email</label>
                <div><input style={{padding:"7px 50px 7px 50px",marginTop:"30px"}}  value={this.state.email} name="email" type="email" onChange={this.handleChange} /></div>
                <label  style={{color:"red", display:"none"}}>&nbsp;&nbsp;&nbsp;&nbsp;**Email Required</label>
                <button  style={buttonStyle}>Submit</button>
                </div>
            </div>
        )
    }
}
export default ForgetPassword