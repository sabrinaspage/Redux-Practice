import React from 'react';
import { connect } from 'react-redux';
import { buyIcecream } from '../redux';

// we will be using a selector
// to return some state information from
// the redux store

// We may only want to select what is required

function IcecreamContainer (props) {
    return (
        <div>
            <h2> Number of Icecreams - {props.numOfIcecreams} </h2>
            <button onClick={props.buyIcecream}> Buy cake </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIcecreams: state.icecream.numOfIcecreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
}

// connects React component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
