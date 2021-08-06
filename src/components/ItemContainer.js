import React from "react";
import { connect } from "react-redux";
import { buyIcecream, buyCake } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <button onClick={props.buyItem}> Buy Items </button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.icecream.numOfIcecreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIcecream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(null, mapDispatchToProps)(ItemContainer);
