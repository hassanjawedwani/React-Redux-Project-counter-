import React from "react";
import { connect } from "react-redux";
import { increment, decrement, square } from "../redux/actions";

const Counter = ({count, increment, decrement, square}) => {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={square}>square</button>
        </div>
    );
};

const mapStateToProps = (state) =>({
    count: state.count
})

const mapDispatchToProps = {
    increment,
    decrement,
    square
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);