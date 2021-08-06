import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

// we will be using a selector
// to return some state information from
// the redux store

// We may only want to select what is required

function CakeContainer (props) {
    return (
        <div>
            <h2> Number of cakes - {props.numOfCakes} </h2>
            <button onClick={props.buyCake}> Buy cake </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

// connects React component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
