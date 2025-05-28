import 'bootstrap/dist/css/bootstrap.min.css';
export default function Form(){
    return (
        <div className="container mt-5">
          <h2>Ajouter un produit</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">ID du produit</label>
              <input
                type="text" className="form-control" id="productId" name="productId" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Image du produit</label>
              <input type="text" className="form-control" id="productImage"name="productImage" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Description du produit</label>
              <textarea className="form-control" id="productDescription" name="productDescription" rows="3" required
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Prix du produit</label>
              <input type="number" className="form-control" id="productPrice" name="productPrice"required />
            </div>
            <button type="submit" className="btn btn-success">Ajouter</button>
          </form>
        </div>
      );
}
