export default function AfficherContact({contact , setContact , setNom , setEmail , setUpdate}){
    const handleDelete = (sup) =>{
        setContact(contact.filter(cont => cont.id !== sup));
    }
    const handleUpdate = (conta) =>{
        setUpdate(conta);
        setNom(conta.nom);
        setEmail(conta.email);
    }
    return(<>
        {contact.length !== 0 && <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contact.map(cont =>(
                        <tr key={cont.id}>
                            <td>{cont.nom}</td>
                            <td>{cont.email}</td>
                            <td>
                                <button onClick={() =>handleDelete(cont.id)}>Supprimer</button>
                                <button onClick={()=>handleUpdate(cont)}>Modifier</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>le nombre total de contact est : {contact.length}</h2>
        </>}
    </>);
}