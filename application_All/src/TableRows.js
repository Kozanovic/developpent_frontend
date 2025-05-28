import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
export default function TableRows(props){
    return(
        <tbody>
            <tr>
              <td>{props.nom}</td>
              <td>{props.prix}</td>
              <td>{props.etat}</td>
              <td>
                <Button variant ="btn btn-success" className='me-2'>Modifier</Button>
                <Button variant ="btn btn-danger">supprimer</Button>
              </td>
            </tr>
        </tbody>
    );
}