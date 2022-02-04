import React from 'react';
import { buyChoco, resetChoco } from './ChocoAction';
import { connect } from 'react-redux'

function ChocolateContainer(props) {

    return (
        <div>
            <h1>{props.CHOCO}</h1>
            <button onClick={props.buyChoco}>BUY CHOCOLATE</button>
            <button onClick={props.resetChoco}>RESET</button>
        </div>
    )
}
const MapStateToProps = (state) => {
    
    return {
        CHOCO: state.choco.noOfChoco

    }
}
const MapDispatchToProps = (dispatch) => {
    return {
        buyChoco: () => dispatch(buyChoco()),
        resetChoco: () => dispatch(resetChoco())
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(ChocolateContainer)