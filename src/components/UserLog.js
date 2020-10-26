import React from 'react';
import './UserLog.css';

const UserLog = React.memo(({ expressionLog }) => {
  return (
    <div className="userLog">
      <ul>
        {
          expressionLog.map(log =>
          <li>
            User: {log.user} &nbsp;&nbsp; Time: {log.time} &nbsp;&nbsp; Equation: {log.equation}
          </li>
        )}
      </ul>
    </div>
  );
});

export default UserLog ;
