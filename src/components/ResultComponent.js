import React from 'react';

const ResultComponent = React.memo(({ result }) => {
    return (
        <div className="result">
            <p>{result}</p>
        </div>
    );
});


export default ResultComponent;
