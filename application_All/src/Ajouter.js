import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function Ajouter(){
    const [task , setTask] = useState([]);
    const [newTask , setNewTask] = useState("");
    const handleChange = (e) =>{
        setNewTask(e.target.value);
    }
    const handeAjouter = () =>{
        if(newTask.trim() !== ""){
            setTask([...task , newTask]);
            setNewTask("");
        }
    }
    const handleSupprimer = (sup) =>{
        setTask(task.filter(t => t !== sup));
    }
    const compteur = task.length;
    return(
        <div class='container text-center'>
            <h1>To do List</h1>
            <Form>
                <label className='form-label'>Add Task</label>
                <input type='text' className='form-control' value={newTask} onChange={(e)=>handleChange(e)}/>
                <Button type="button" className="btn btn-primary my-3" onClick={()=>handeAjouter()}>Add Task</Button>
            </Form>
            <h2>Tasks List</h2>
            <Table striped bordered hover>
                <thead>
                    <th>Task</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {task.map(t =>(
                        <tr>
                            <td>{t}</td>
                            <td><Button className='btn btn-danger' onClick={()=>handleSupprimer(t)}><b>X</b></Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <h4>Tasks's number is : {compteur}</h4>
        </div>
    );
}