import React from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";
import UserLog from "./components/UserLog";
import UserLogin from "./components/UserLogin";

// const client = new W3CWebSocket('ws://127.0.0.1:8000');
const client = new W3CWebSocket('https://www.sezzleserver.herokuapp.com');

const App = React.memo(() => {
  const [result, setResult] = React.useState("");
  const [expressionLog, setExpressionLog] = React.useState([]);
  const [user, setUser] = React.useState("");

  React.useEffect(() => {
    client.onopen = () => {
      console.log('Websocket client connected !!');
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log('got reply !!' , dataFromServer);
      if(dataFromServer.type === "message")
      {
        const newEntry = {
          equation: dataFromServer.equation,
          user: dataFromServer.user,
          time: dataFromServer.time
        };
        if (user) {
          const NewRecords = [newEntry, ...expressionLog];
          // NewRecords.push();
          if (NewRecords.length > 10) {
            NewRecords.pop();
          }
          setExpressionLog(NewRecords);
        }
      }
    }
  }, [expressionLog, setExpressionLog, user]);

  const calculate = React.useCallback(() => {
      try {
        setResult((eval(result) || "" ) + "");
        let expression = result + "="+ eval(result);
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});;

        client.send(JSON.stringify({
          type : "message",
          equation: expression,
          user: user,
          time: time
        }));
      } catch (e) {
        setResult("error");
      }
  }, [user, result, setResult]);

  const reset = React.useCallback(() => {
    setResult("");
  }, [setResult]);

  const backspace = React.useCallback(() => {
    setResult(result.slice(0, -1));
  }, [result, setResult]);


  const onClick = React.useCallback(button => {

        switch (button) {
          case "=":
            calculate();
            break;
          case "C":
            reset();
            break;
          case "CE":
            backspace();
            break;
          default:
            setResult(result + button);
        }
    }, [calculate, reset, backspace, result, setResult]);

    return user ? (
        <div>
            <div className="calculator-body">
                <h2>Sezzle Calculator Assessment</h2>
                <ResultComponent result={result}/>
                <KeyPadComponent onClick={onClick}/>
            </div>
            <div className="userlog-wrapper">
              <UserLog expressionLog={expressionLog} />
            </div>
        </div>
      ) : (
          <UserLogin onSubmit={setUser}/>
      );
});

export default App;
