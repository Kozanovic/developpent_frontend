export default function TaskList({tasks , setTasks}){
    const handleDelete = (sup) => { 
        setTasks(tasks.filter(task => task.id !== sup));
    };
  return(
    <>
        <table border={1}>
            <thead>
                <th>title</th>
                <th>completed</th>
                <th>action</th>
            </thead>
            <tbody>
                {tasks.map(task =>(
                    <tr>
                        <td>{task.title}</td>
                        <td>{task.completed ? 'Completed' : 'None Completed'}<button>{task.completed ? 'None Completed' : 'Completed'}</button></td>
                        <td><button onClick={()=>handleDelete(task.id)}>Supprimer</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        <pre>
            <h3>le nombre des tasks est : {tasks.length}</h3>
        </pre>
    </>
  );
}