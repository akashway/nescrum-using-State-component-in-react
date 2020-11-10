import React,{ Component } from 'react'

class LabelName extends Component{

    constructor(){
        super()
        this.employeeLabeleReqRef= React.createRef()
        this.employeeLabeleNumericRef=React.createRef()
        this.employeeLabeleSpcRef=React.createRef()
    }
    render(){
        return(
            <div>
                <label ref={this.employeeLabeleReqRef} style={{color:"red", display:"none"}}>**Employee Name Required</label> 
                <label ref={this.employeeLabeleNumericRef} style={{color:"red", display:"none"}}>**Numeric number not required</label>
                <label ref={this.employeeLabeleSpcRef} style={{color:"red", display:"none"}}>**No special character req.</label>
            </div>
        )
    }
}

export default LabelName 