// modern approach? using hooks
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer() {
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  const handleBuyCake = () => {
    dispatch(buyCake());
  };

  return (
    <div>
      <h1>num of cakes: {numOfCakes}</h1>
      <button onClick={handleBuyCake}>buy cake</button>
    </div>
  );
}

export default CakeContainer;
