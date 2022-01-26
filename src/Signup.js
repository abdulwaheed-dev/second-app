import React from "react";

class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = {fullname:'',about:'',isNative:false, gender:'',language:[],comment:''}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        //debugger;
        let {name,value,type,checked} = e.target
        value  = type == 'checkbox' ? checked : value

        if(type == 'select-multiple'){
            let arr = Array.from(e.target.selectedOptions, opt=> opt.value)
            this.setState({language:[...arr]})
        } else{
            this.setState({[name]:value})
        }
        // const value = e.target.type == 'checkbox' ? e.target.checked : e.target.value
        // const name = e.target.name
        // switch(name){
        //     case 'fullname':{
        //         return this.setState({fullname:value})
        //     }
        //     case 'about':{
        //         return this.setState({about:value})
        //     }
        //     case 'isNative':{
        //         return this.setState({isNative:value})
        //     }
        // }
    }
    render() {
        return(<>
        <h1 className='fw-light text-center'>Signup Form</h1>
        <form style={{width:'450px',display: 'block',marginLeft:'auto',marginRight:'auto'}}>
            <div className="mb-3">
                <label className="form-label">Full Name: {this.state.fullname}</label>
                <input type="text" name="fullname" className="form-control" onChange={this.handleChange} value={this.state.fullname} />
            </div>
            <div className="mb-3">
                <label className="form-label">About Me: {this.state.about}</label>
                <input type="text" name="about" onChange={this.handleChange} className="form-control" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" name="isNative" checked={this.state.isNative} onChange={this.handleChange} />
                <label className="form-check-label" >{this.state.isNative ? 'TRUE' : 'FALSE'}</label>
            </div>
            <div className="mb-3">
                <label className="form-label"> Gender: {this.state.gender} </label> <br/>
                <label className="btn btn-outline-primary me-1"> <input type='radio' className="btn-check" name='gender' value='Female' checked={this.state.gender == 'female' ? true : false} onChange={this.handleChange}></input> Female </label>
                <label className="btn btn-outline-primary"> <input type='radio' className="btn-check" name='gender' value='Male' checked={this.state.gender == 'male' ? true : false} onChange={this.handleChange}></input> Male </label>
                <br/>
            </div>
            <div className="mb-3">
            <label className="form-label">Languages: {this.state.language}</label>
            <select multiple name="language" className="form-select form-select mb-3" onChange={this.handleChange}>
                <option value={'Sindhi'}>Sindhi</option>
                <option value={'Urdu'}>Urdu</option>
                <option value={'English'}>English</option>
                <option value={'French'}>French</option>
            </select>
            </div>
            <div className="mb-3">
            <label className="form-label">Comment:</label>
            <textarea className="form-control" name='comment' onChange={this.handleChange}> </textarea>
            <label className="form-label">Your Comment:{this.state.comment} </label>
            </div>
            <button type="submit" className="btn btn-primary container">Signup</button>
        </form>
        </>)
    }
}

export default Signup;