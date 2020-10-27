import React from 'react';

const ResultComponent = React.memo(({ result }) => {
    return (
        <div className="card">
            <div className="card-body">
                <p>{result}</p>
            </div>
        </div>
    );
});


export default ResultComponent;
