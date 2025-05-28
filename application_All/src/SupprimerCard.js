import React from "react";
import { useState } from "react";
// import cardData from './Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

export default function SupprimerCard(){
    const [produit, setProduit] = useState([]);
    const [compteur, setCompteur] = useState(produit.length);
    const [isVisible, setVisible] = useState(true);
    const [nvImage, setNvImage] = useState();
    const [nvDesc, setNvDesc] = useState("");
    const [nvPrix, setNvPrix] = useState("");

    const handleSupp = (sup) => {
        setProduit(produit.filter(acc => acc.id !== sup));
        setCompteur(compteur - 1);
    }

    const handleVisible = () => {
        setVisible(!isVisible);
    }

    const somme = () => {
        return produit.reduce((sum, pr) => sum + pr.price, 0);
    }
    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = () => {
                setNvImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleChangeDesc = (e) => setNvDesc(e.target.value);
    const handleChangePrix = (e) => setNvPrix(e.target.value);
    const resetForm = () =>{
        setNvImage();
        setNvDesc("");
        setNvPrix("");
    }
    const handleAddCard = (e) =>{
        const nvId = produit.length;
        const NvProduit = {
            id: nvId +1,
            pic: nvImage,
            para : nvDesc,
            price : +nvPrix,
        }
        setProduit([...produit,NvProduit]);
            e.preventDefault();
            resetForm();
            handleVisible();
            setCompteur(compteur + 1);
    }
    return(
        <div>
            <nav className="navbar navbar-light bg-light p-3">
                <div className="container">
                    <div className="navbar-nav">
                        <button className="btn btn-primary" style={!isVisible ? {display: 'none'} : {display : 'flex'}} onClick={handleVisible}>
                            {isVisible ? "Nouveau" : "vide"}
                        </button>
                    </div>
                </div>
            </nav>

            {isVisible && <>
                <div className="container my-5">
                    <h1>Ajouter des nouveaux produits</h1>
                    <div className="row">
                        {produit.map(pr => (
                            <div className="col-md-4 mb-4" key={pr.id}>
                                <div className="card h-100">
                                <img src={pr.pic} className="card-img-top" alt={pr.para}/>
                                <div className="card-body">
                                        <p className="card-text">{pr.para}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="text-success">Price: {pr.price} $</span>
                                            <button className="btn btn-primary">Buy</button>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger w-50" onClick={() => handleSupp(pr.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={compteur === 0 ? {display : 'none'} : {}}>
                        <h1 className="text-center">Nombre de produits actuel: {compteur}</h1>
                        <hr/>
                        <h2 className="text-center">La somme des prix: {somme()} $</h2>
                    </div>
                </div>
                </>}
            {!isVisible && (
                <div className="container mt-5">
                    <h2>Ajouter un produit</h2>
                    <form onSubmit={(e) =>handleAddCard(e)}>
                        <div className="mb-3">
                            <label className="form-label">Image du produit</label>
                            <input type="file" className="form-control" id="productImage" name="productImage" onChange={(e) =>handleChangeImage(e)} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description du produit</label>
                            <textarea className="form-control" id="productDescription" value={nvDesc} name="productDescription" onChange={(e) =>handleChangeDesc(e)} rows="3" required></textarea>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Prix du produit</label>
                            <input type="number" className="form-control" id="productPrice" value={nvPrix} name="productPrice" onChange={(e) =>handleChangePrix(e)} required />
                        </div>
                        <button type="submit" className="btn btn-success">Ajouter</button>
                    </form>
                </div>
            )}
        </div>
    );
}
