import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Tasks from './Tasks.json';

export default function Ajouter_useState() {
    const [task, setTask] = useState(Tasks); // Contient la liste des tâches
    const [update, setUpdate] = useState(false); // Permet de savoir si le mode édition est activé
    const [currentTask, setCurrentTask] = useState(null); // Contient la tâche en cours d'édition
    const [isVisible, setVisible] = useState(true);
    const [newTask, setNewTask] = useState(""); // Utilisation de useState pour stocker la nouvelle tâche

    const handleAjouter = () => {
        if (newTask.trim() !== "") {
            if (update) {
                // Met à jour la tâche si en mode édition
                setTask(task.map(t => t === currentTask ? newTask : t));
                setUpdate(false);
                setCurrentTask(null);
            } else {
                // Ajoute une nouvelle tâche si non en mode édition
                setTask([...task, newTask]);
            }
            setNewTask(""); // Réinitialise le champ d'entrée
        }
    };

    const handleSupprimer = (sup) => {
        setTask(task.filter(t => t !== sup));
    };

    const handleEdit = (taskToEdit) => {
        setUpdate(true);
        setCurrentTask(taskToEdit); // Définit la tâche en cours d'édition
        setNewTask(taskToEdit); // Met la valeur de la tâche dans le champ d'entrée
    };

    const handleVisible = () => {
        setVisible(!isVisible);
    };

    const compteur = task.length;

    return (
        <div className='container text-center'>
            <h1>ToDo List</h1>
            <Form>
                <label className='form-label'>{update ? "Edit Task" : "Add Task"}</label>
                <input
                    type='text'
                    className='form-control'
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <Button type="button" className="btn btn-primary my-3" onClick={handleAjouter}>
                    {update ? "Update Task" : "Add Task"}
                </Button>
            </Form>
            <h2>Tasks List</h2>
            <Button variant="btn btn-primary" onClick={handleVisible}>{isVisible ? "Show Tasks" : "Hide Tasks"}</Button>
            {!isVisible && (
                <>
                    <Table striped bordered hover className='mt-3'>
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {task.map(t => (
                                <tr key={t}>
                                    <td>{t}</td>
                                    <td>
                                        <Button className='btn btn-warning me-2' onClick={() => handleEdit(t)}>Edit</Button>
                                        <Button className='btn btn-danger' onClick={() => handleSupprimer(t)}><b>X</b></Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <h4>Tasks's number is : {compteur}</h4>
                </>
            )}
        </div>
    );
}
