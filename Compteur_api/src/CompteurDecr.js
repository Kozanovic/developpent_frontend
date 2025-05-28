import { useContext } from "react";
import { CompteurContext } from "./CompteurContext";

export default function CompteurDecrement(){
    const {compteurDecr} = useContext(CompteurContext);
    return(<>
         <button onClick={() => compteurDecr()}>Décrémenter</button>
    </>);
}