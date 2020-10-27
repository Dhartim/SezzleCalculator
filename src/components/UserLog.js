import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './UserLog.css';

const UserLog = React.memo(({ expressionLog }) => {
  return (
    <div className="card border-0">
      <div className="card-header">
        <h3 className="text-center">Most recent 10 calculations</h3>
      </div>
      <div className="card-body">
        <ul>
        {
          expressionLog.map((log, index) =>
          <li key={index}>
            User: {log.user} &nbsp;&nbsp; Time: {log.time} &nbsp;&nbsp; Equation: {log.equation}
          </li>
        )}
      </ul>
      </div>
    </div>
  );
});

export default UserLog ;
