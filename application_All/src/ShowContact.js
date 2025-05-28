export default function ShowContact({contact , setContact}){
    const handleDelete = (sup) =>{
        setContact(contact.filter(cont => cont.id !== sup));
    }
    const handleUpdate = (conta) =>{
        const nvNom = prompt('saisir le nouveau nom : ' , conta.nom);
        const nvEmail = prompt('saisir le nouveau email : ' , conta.email);
        setContact(contact.map((cont) =>{
            return cont.id === conta.id ? {
                ...cont,
                nom : nvNom,
                email : nvEmail,
            }:cont;
        }));
    }
    return(<>
        {contact.length !== 0 && <>
            <table border={1}>
                <thead>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {contact.map(cont =>(
                        <tr key={cont.id}>
                            <td>{cont.nom}</td>
                            <td>{cont.email}</td>
                            <td>
                                <button onClick={() =>handleDelete(cont.id)}>Supprimer</button>
                                <button onClick={() =>handleUpdate(cont)}>Modifier</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>le nombre total de contact est : {contact.length}</h2>
        </>}
    </>);
}