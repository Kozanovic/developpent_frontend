import { useContext } from "react";
import { CompteurContext } from "./CompteurContext";

export default function CompteurIncrement(){
    const {compteurIncr} = useContext(CompteurContext);
    return(<>
        <button onClick={() => compteurIncr()}>Incrémenter</button>
    </>);
}