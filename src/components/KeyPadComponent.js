import React from 'react';

const KeyPadComponent = React.memo(props => {
    const { children, onClick } = props;

    const isOperator = React.useMemo(() => {
        return !isNaN(children) || children === '.' || children === '=';
    }, [children]);
    return (
        <div>
            <button className="btn btn-outline-secondary button-keys" name="(" onClick={e => onClick(e.target.name)}>(</button>
            <button className="btn btn-outline-secondary button-keys" name="CE" onClick={e => onClick(e.target.name)}>CE</button>
            <button className="btn btn-outline-secondary button-keys" name=")" onClick={e => onClick(e.target.name)}>)</button>
            <button className="btn btn-outline-secondary button-keys" name="C" onClick={e => onClick(e.target.name)}>C</button><br/>


            <button className="btn btn-outline-secondary button-keys" name="1" onClick={e => onClick(e.target.name)}>1</button>
            <button className="btn btn-outline-secondary button-keys" name="2" onClick={e => onClick(e.target.name)}>2</button>
            <button className="btn btn-outline-secondary button-keys" name="3" onClick={e => onClick(e.target.name)}>3</button>
            <button className="btn btn-outline-secondary button-keys" name="+" onClick={e => onClick(e.target.name)}>+</button><br/>


            <button className="btn btn-outline-secondary button-keys" name="4" onClick={e => onClick(e.target.name)}>4</button>
            <button className="btn btn-outline-secondary button-keys" name="5" onClick={e => onClick(e.target.name)}>5</button>
            <button className="btn btn-outline-secondary button-keys" name="6" onClick={e => onClick(e.target.name)}>6</button>
            <button className="btn btn-outline-secondary button-keys" name="-" onClick={e => onClick(e.target.name)}>-</button><br/>

            <button className="btn btn-outline-secondary button-keys" name="7" onClick={e => onClick(e.target.name)}>7</button>
            <button className="btn btn-outline-secondary button-keys" name="8" onClick={e => onClick(e.target.name)}>8</button>
            <button className="btn btn-outline-secondary button-keys" name="9" onClick={e => onClick(e.target.name)}>9</button>
            <button className="btn btn-outline-secondary button-keys" name="*" onClick={e => onClick(e.target.name)}>x</button><br/>


            <button className="btn btn-outline-secondary button-keys" name="." onClick={e => onClick(e.target.name)}>.</button>
            <button className="btn btn-outline-secondary button-keys" name="0" onClick={e => onClick(e.target.name)}>0</button>
            <button className="btn btn-outline-secondary button-keys" name="=" onClick={e => onClick(e.target.name)}>=</button>
            <button className="btn btn-outline-secondary button-keys" name="/" onClick={e => onClick(e.target.name)}>÷</button><br/>
        </div>
    );
});

export default KeyPadComponent;
