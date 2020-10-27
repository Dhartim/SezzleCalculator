import React from "react";

const UserLogin = React.memo(({ onSubmit }) => {
  const [input, setInput] = React.useState("");

  const inputChange = React.useCallback(e => {
    if(e.target.value.charAt(0) !== " ") {
      setInput(e.target.value)
    }
  }, [setInput]);
  const onClick = React.useCallback(e => {
    if(input && input.trim()) {
      onSubmit(input);
    }
  }, [input, onSubmit]);
  return (
    <div className="container-fluid">
      <div className="row p-2 bg-dark">
          <div className="col-12 text-center">
            <h2 className="userLog-p text-white">Sezzle Calculator Assessment</h2>
          </div>
      </div>
      <div className="row pt-5 ">
        <div className="col-12 d-flex justify-content-center">
          <div className="card">
            <div className="card-header">
              <h4 className="text-center"><b>LOGIN</b></h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="input-group input-group-lg">
                    <input  className="form-control" type="text" placeholder="Please Enter your Name" onChange={inputChange} value={input}/>
                  </div>
                </div>
                <div className="col-12 text-center mt-2">
                  <button type="button" className="btn btn-outline-dark" onClick={onClick}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default UserLogin;