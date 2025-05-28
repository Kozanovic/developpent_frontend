export default function AddContact({ contact, setContact , nom , email , setEmail , setNom , update , setUpdate}) {
    
        const AjouterContact = (e) =>{
            e.preventDefault();
            const nvId = contact.length;
            if(nom !== '' && email !== ''){
                if(!update){
                    const nvContact = {
                        id: nvId + 1,
                        nom: nom,
                        email: email,
                    };
                    setContact([...contact, nvContact]);
                }else{
                    setContact(contact.map((cont) =>{
                        return cont.id === update.id ? {
                            ...cont,
                            nom : nom,
                            email : email,
                        }:cont
                    }));
                    setUpdate();
                }
                setNom('');
                setEmail('');
            }
        };
        const handleChangeNom = (e) =>{
            setNom(e.target.value);
        }
        const handleChangeEmail = (e) =>{
            setEmail(e.target.value);
        }
    return (
        <>
            <form onSubmit={(e)=>AjouterContact(e)}>
                <h1>{update ? 'Modifier un contact' : 'Ajouter un contact'}</h1>
                <label>Nom : </label>
                <input type="text" value={nom} onChange={(e)=>handleChangeNom(e)}/><br/>
                <label>Email : </label>
                <input type="text" value={email} onChange={(e)=>handleChangeEmail(e)}/><br/>
                <button>{update ? 'Modifier' : 'Ajouter'}</button>
            </form>
        </>
    );
}
