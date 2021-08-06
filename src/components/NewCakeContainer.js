import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

// we will be using a selector
// to return some state information from
// the redux store

// We may only want to select what is required

function NewCakeContainer (props) {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h2> Number of cakes - {props.numOfCakes} </h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <br />
            <button onClick={() => props.buyCake(number)}> Buy {number} Cakes </button>
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
        buyCake: number => dispatch(buyCake(number))
    }
}

// connects React component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
