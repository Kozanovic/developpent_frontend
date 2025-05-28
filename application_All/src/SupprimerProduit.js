import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import TableHead from './TableHead';
import tableData from './tableData.json';

export default function Supprimer(){
    const [produit , setProduit] = useState(tableData);
    const [isVisible , setVisible] = useState(true);
    const handleSupprimer = (sup) =>{
        setProduit(produit.filter(acc => acc.id !== sup));
    }
    const handleVisible = () =>{
        setVisible(!isVisible);
    }
    return(
        <div className="App">
            <div className="container mt-5">
                <h2>suivi des phones</h2>
                <Button variant ="btn btn-primary" onClick={()=>handleVisible()}>{isVisible ? "Hide" : "Show"}</Button>
                {isVisible && <>
                <Table striped bordered hover className='mt-3'>
                <TableHead />
                <tbody>
                    {
                        produit.map(item =>(
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.nom}</td>
                                <td>{item.prix}</td>
                                <td>{item.etat}</td>
                                <Button variant ="btn btn-success" className='me-2'>Modifier</Button>
                                <Button onClick={()=>handleSupprimer(item.id)} variant ="btn btn-danger">supprimer</Button>
                            </tr>
                        ))
                    }
                </tbody>
                </Table></>}
            </div>
        </div>
    );
}