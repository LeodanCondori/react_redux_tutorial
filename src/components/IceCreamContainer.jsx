import { buyIceCream } from "../redux";
import { connect } from "react-redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h1>num of ice creams: {props.numOfIceCreams}</h1>
      <button onClick={props.buyIceCream}>buy ice cream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
