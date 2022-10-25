import React,{Component} from 'react'
import axios from 'axios';
export default class CreateUser extends Component{
    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: ''  
        }
    }
    onChangeUsername(e){
        this.setState({
            username:e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const user = {
            username:this.state.username,
            
        }
        console.log(user)

        axios.post('http://localhost:5000/users/add',user)
        .then(res=>console.log(res.data));
        this.setState({
            username:''
        })
        //window.location = '/';
    }
    render(){
        return(
            <div><center>
                <h3>Create New User</h3>
                </center>
                <div className="container form">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername}></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                    <center>
                        <input type="submit" value="Create User" className="btn btn-primary"></input>
                        </center>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}