import 'bootstrap/dist/css/bootstrap.min.css';
export default function TableHead(){
    return(
        <>
            <thead className='bg-warning'>
                <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Prix</th>
                <th>Etat</th>
                <th>Action</th>
                </tr>
            </thead>
        </>
    );
}