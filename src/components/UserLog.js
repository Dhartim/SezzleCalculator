import React from 'react';
import './UserLog.css';

const UserLog = React.memo(({ expressionLog }) => {
  return (
    <div className="userLog">
      <p className="userLog-p">Most recent 10 calculations</p>
      <ul>
        {
          expressionLog.map((log, index) =>
          <li key={index}>
            User: {log.user} &nbsp;&nbsp; Time: {log.time} &nbsp;&nbsp; Equation: {log.equation}
          </li>
        )}
      </ul>
    </div>
  );
});

export default UserLog ;
