export default function ShowProduct({product , setProduct}){
    const handleDelete = (sup) => { 
        setProduct(product.filter(prod => prod.id !== sup));
    };
    return(
        <>
            {product.length !== 0 && <>
                <table border={1}>
                <thead>
                    <th>Libellé</th>
                    <th>PU</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {product.map(prod =>(
                        <tr key={prod.id}>
                            <td>{prod.libelle}</td>
                            <td>{prod.PU}</td>
                            <td>
                                <button onClick={()=>handleDelete(prod.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>nombre de produit est : {product.length}</h2>
            </>}
        </>
    );
}