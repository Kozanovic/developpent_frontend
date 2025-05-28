import { useRef , useState} from "react";
export default function AddTask({tasks , setTasks}){
  const TITLE = useRef("");
  const [completed , setCompleted] = useState(false);
  const handleAdd = (e) => {
      const titre = TITLE.current.value;
      const nvID = tasks.length;
      const newTask = {
        id: nvID + 1,
        title: titre,
        completed: completed,
      };
      if(titre !== ""){
          setTasks([...tasks, newTask]);
          e.preventDefault();
          TITLE.current.value = "";
      }
  };
  return(
    <>
        <form onSubmit={(e)=>handleAdd(e)}>
            <input type="text" ref={TITLE}/><br/>
            <input type="radio" name="completed" checked={completed == true} onChange={()=>setCompleted(true)}/>oui
            <input type="radio" name="completed" checked={completed == false} onChange={()=>setCompleted(false)}/>non<br/>
            <button>Ajouter</button>
        </form>
    </>
  );
}