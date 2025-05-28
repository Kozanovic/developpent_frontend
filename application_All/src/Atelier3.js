import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function Atelier3(){
    const message = [
        "Apprendre React ⚛️",
        "Réaliser un projet React 💼",
        "Passer l'exam React 🤑",
    ];
    const [etapeActuel , setEtapeActuel] = useState(0);
    const [isVisible , setVisible] = useState(true);
    const handleSuivant = () => {
        if (etapeActuel < message.length -1) {
            setEtapeActuel(etapeActuel + 1);
        } else {
            setEtapeActuel(0);
        }
    };
    const handlePrecedent = () => {
        if (etapeActuel > 0) {
            setEtapeActuel(etapeActuel - 1);
        }
    };
    const handleVisible = () =>{
        setVisible(!isVisible);
    }
    return(
        <>
        <Button variant ="btn btn-primary" onClick={()=>handleVisible()}>{isVisible ? "X" : "✓"}</Button>
        {isVisible && <>
        <div className="container">
            <div className="steps">
                <div class={etapeActuel>=0?'active':''}>1</div>
                <div class={etapeActuel>=1?'active':''}>2</div>
                <div class={etapeActuel>=2?'active':''}>3</div>
            </div>
            <div class="content">
                <p>{message[etapeActuel]}</p>
            </div>
            <div class="navigation">
                <button class="prev" onClick={()=>handlePrecedent()}>Précédent</button>
                <button class="next" onClick={()=>handleSuivant()}>Suivant</button>
            </div>
        </div>
        </>}
        </>
    );
}