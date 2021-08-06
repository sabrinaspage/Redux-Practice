import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyBanana } from '../redux';

function HooksBananaContainer() {
    const numOfBananas = useSelector(state => state.banana.numOfBananas);
    const dispatch = useDispatch();
    return (
        <div>
            <h2> Number of Bananas - {numOfBananas} </h2>
            <button onClick={
                () => dispatch(buyBanana())
            }> Buy banana </button>
        </div>
    )
}

export default HooksBananaContainer
