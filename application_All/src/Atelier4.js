import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import info from './Client.json';
import { useState } from 'react';

export default function Atelier4(){
    const data = info;
    const [client , setClient] = useState(data);
    const [details, setDetails] = useState(null);
    const handleSupprimer = (sup) =>{
        setClient(client.filter(cl => cl.id !== sup));
    }
    const handleDetails = (cl) => {
        setDetails(cl);
    };
    return(
        <>
            <Table striped bordered hover className='mt-3'>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Détails</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {client.map(cl =>(
                        <tr key={cl.id}>
                            <td>{cl.nom}</td>
                            <td>{cl.email}</td>
                            <td>
                                <Button variant='btn btn-primary' onClick={()=>handleDetails(cl)}>Détails</Button>
                                <Button variant='btn btn-danger ms-3' onClick={()=>handleSupprimer(cl.id)}>Supprimer</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {details && <>
                <div className="mt-3">
                    <h3>commandes de {details.nom}</h3>
                        {details.commande.map(cl =>(
                            <ul key={cl.id}>
                                <li>Produit: {cl.produit} | Date: {cl.date}</li>
                            </ul>
                        ))}
                </div>
            </>}
        </>
    );
}