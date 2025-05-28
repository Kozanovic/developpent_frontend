import { useState } from "react";

export default function AddProduct({product , setProduct}){
    const [libelle , setLibelle] = useState('');
    const [PU , setPU] = useState('');
    const handleChangeLibelle = (e) =>{
        setLibelle(e.target.value);
    }
    const handleChangePU = (e) =>{
        setPU(e.target.value);
    }
    const nvId = product.length;
    const nvProduct = {
        id: nvId + 1,
        libelle : libelle,
        PU : +PU,
    }
    const handleAdd = (e) =>{
        if(libelle !== "" && PU !== ""){
            setProduct([...product,nvProduct]);
            e.preventDefault();
            setLibelle("");
            setPU("");
        }
    }
    return(
        <>
            <form onSubmit={(e)=>handleAdd(e)}>
                <table>
                    <tr>
                        <th>Libellé : </th>
                        <td><input type="text" value={libelle} onChange={(e)=>handleChangeLibelle(e)}/></td>
                    </tr>
                    <tr>
                        <th>PU : </th>
                        <td><input type="text" value={PU} onChange={(e)=>handleChangePU(e)}/></td>
                    </tr>
                        <button>Ajouter</button>
                </table>
            </form>
        </>
    );
}