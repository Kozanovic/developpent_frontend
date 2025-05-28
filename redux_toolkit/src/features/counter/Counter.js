import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
export function Counter() {
  // Récupérer la valeur du compteur depuis le store
  const count = useSelector((state) => state.counter.value);
  // Récupérer la fonction dispatch pour envoyer des actions
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Compteur: {count}</h1>
      <button onClick={() => dispatch(increment())}>Incrémenter</button>
      <button onClick={() => dispatch(decrement())}>Décrémenter</button>
    </div>
  );
}
