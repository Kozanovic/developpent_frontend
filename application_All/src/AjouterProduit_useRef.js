import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useRef, useState } from 'react';
import TableHead from './TableHead';
import tableData from './tableData.json';

export default function AjouterProduit_useRef() {
  const [produit, setProduit] = useState(tableData);
  const [isVisible, setVisible] = useState(true);
  const nvNom_useRef = useRef("");
  const nvPrix_useRef = useRef("");
  const nvEtat_useRef = useRef("");

  const handleSupprimer = (sup) => {
    setProduit(produit.filter((acc) => acc.id !== sup));
  }

  const handleVisible = () => {
    setVisible(!isVisible);
  }
  const handleAjouterProduit = (e) => {
    const nvNom = nvNom_useRef.current.value;
    const nvPrix = nvPrix_useRef.current.value;
    const nvEtat = nvEtat_useRef.current.value;
    const nvId = produit.length;
    const NvProduit = {
        id: nvId + 1,
        nom: nvNom,
        prix: +nvPrix,
        etat: nvEtat
    }
    if(nvNom !== "" && nvPrix !== "" && nvEtat !== ""){
      setProduit([...produit, NvProduit]);
      e.preventDefault();
      nvNom_useRef.current.value = "";
      nvPrix_useRef.current.value = "";
      nvEtat_useRef.current.value = "";
    }
  }

  return (
    <>
      <form className="text-center" onSubmit={(e) => handleAjouterProduit(e)}>
        <table className="text-center mx-auto">
          <tbody>
            <tr>
              <td><label className="form-label">Nom :</label></td>
              <td><input type="text" className="form-control" ref={nvNom_useRef} /></td>
            </tr>
            <tr>
              <td><label className="form-label">Prix :</label></td>
              <td><input type="text" className="form-control" ref={nvPrix_useRef} /></td>
            </tr>
            <tr>
              <td><label className="form-label">Etat :</label></td>
              <td><input type="text" className="form-control" ref={nvEtat_useRef} /></td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-outline-secondary mt-3">Ajouter</button>
      </form>
      <div className="text-center">
        <div className="container mt-5">
          <h2>Suivi des phones</h2>
          <button className="btn btn-primary" onClick={()=>handleVisible()}>{isVisible ? 'Hide' : 'Show'}</button>
          {isVisible && (
            <>
              <Table striped bordered hover className="mt-3">
                <TableHead/>
                <tbody>
                  {produit.map(item => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.nom}</td>
                      <td>{item.prix}</td>
                      <td>{item.etat}</td>
                      <td>
                        <button className="btn btn-success me-2">Modifier</button>
                        <button onClick={()=>handleSupprimer(item.id)} className="btn btn-danger">Supprimer</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}
        </div>
      </div>
    </>
  );
}