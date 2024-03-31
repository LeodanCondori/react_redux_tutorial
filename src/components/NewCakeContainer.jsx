import { buyCake } from "../redux";
import { connect } from "react-redux";
import { useState } from "react";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>num of cakes: {props.numOfCakes}</h1>
      <input
        type="text"
        name=""
        id=""
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>buy {number} cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
