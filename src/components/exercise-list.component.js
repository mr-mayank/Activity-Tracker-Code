import React,{Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Exercise = props =>{
    return(
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.exercise._id}>Edit</Link> | <button type="button" className="btn btn-danger" onClick={() => {props.deleteExercise(props.exercise._id)}}>Delete</button>
        </td>
    </tr>
    )
}
export default class ExerciseList extends Component{
    constructor(props) {
        super(props);

       this.deleteExercise = this.deleteExercise.bind(this);
        this.state = {exercises: []};
    }

   async componentDidMount(){
       await axios.get('http://localhost:5000/exercises/')
        .then(resp=>{
            this.setState({exercises: resp.data })
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    deleteExercise(id){
        axios.delete('http://localhost:5000/exercises/'+id)
        .then(res => console.log(res.data));
        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }
    exerciselist(){
        return this.state.exercises.map(currentexercise =>{
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
        })
    }
    render(){
        return(
            <div>
            <center>
                <h3>List of Exercises</h3>
                </center>
                <br></br>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciselist()}
                    </tbody>
                </table>
            </div>
        )
    }
}