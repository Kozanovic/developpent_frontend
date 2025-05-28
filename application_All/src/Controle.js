import { useRef, useState } from "react";

export default function Controle(){
    const data = [
        {id: 1, name: "Alice", note: 85 },
        {id: 2, name: "Bob", note: 90},
    ]
    const [students , setStudents] = useState(data);
    const nvName = useRef('');
    const nvNote = useRef('');
    const handleSupprimer = (sup) =>{
        setStudents(students.filter(elem => elem.id !== sup));
    }
    const handleAjouter = (e) =>{
        const nom = nvName.current.value;
        const notes = nvNote.current.value;
        const nvId = students.length;
        const NvStudents = {
            id: nvId + 1,
            name: nom,
            note: +notes,
        }
        if(nom !== '' && notes !== ''){
            setStudents([...students,NvStudents])
            e.preventDefault(e);
            nvName.current.value = '';
            nvNote.current.value = '';
        }
    }

    return(
        <>
        <form onSubmit={(e) => handleAjouter(e)}>
            <label>name :</label>
            <input type="text" ref={nvName}/>
            <label>note :</label>
            <input type="text" ref={nvNote}/>
            <button>ajouter</button>
        </form>
            <table border={1}>
                <thead>
                    <th>name</th>
                    <th>note</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {students.map(student =>(
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.note}</td>
                            <td><button onClick={() => handleSupprimer(student.id)}>supprimer</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}