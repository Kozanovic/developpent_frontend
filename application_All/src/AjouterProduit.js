// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import TableHead from './TableHead';
import tableData from './tableData.json';

export default function AjouterProduit(){
    const [produit , setProduit] = useState(tableData);
    const [isVisible , setVisible] = useState(true);
    const [nvNom , setNvNom] = useState('');
    const [nvPrix , setNvPrix] = useState('');
    const [nvEtat , setNvEtat] = useState('');
    const handleSupprimer = (sup) =>{
        setProduit(produit.filter(acc => acc.id !== sup));
    }
    const handleVisible = () =>{
        setVisible(!isVisible);
    }
    const handleChangeNom = (e) =>{
        setNvNom(e.target.value);
    }
    const handleChangePrix = (e) =>{
        setNvPrix(e.target.value);
    }
    const handleChangeEtat = (e) =>{
        setNvEtat(e.target.value);
    }
    const nvId = produit.length;
    const NvProduit = {
        id: nvId +1,
        nom : nvNom,
        prix : +nvPrix,
        etat : nvEtat
    }
    const handleAjouterProduit=(e)=>{
        if(nvNom !== "" && nvPrix !== "" && nvEtat !== ""){
            setProduit([...produit,NvProduit]);
            e.preventDefault();
            setNvNom("");
            setNvPrix("");
            setNvEtat("");
        }
    }

    return(
        <>
        <form className='text-center' onSubmit={(e) => handleAjouterProduit(e)}>
            <table className='text-center mx-auto'>
                <tr>
                    <td><label className='form-label'>Nom : </label></td>
                    <td><input type='text' className='form-control' value={nvNom} onChange={(e) => handleChangeNom(e)}/></td>
                </tr>
                <tr>
                    <td><label className='form-label'>Prix : </label></td>
                    <td><input type='text' className='form-control' value={nvPrix} onChange={(e) => handleChangePrix(e)}/></td>
                </tr>
                <tr>
                    <td><label className='form-label'>Etat : </label></td>
                    <td><input type='text' className='form-control' value={nvEtat} onChange={(e) => handleChangeEtat(e)}/></td>
                </tr>
            <button className='btn btn-outline-secondary'>ajouter</button>
            </table>
            </form>
        <div className='text-center'>
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
        </>
    );
}