(this.webpackJsonpsezzlecalculatortest=this.webpackJsonpsezzlecalculatortest||[]).push([[0],[,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_dhartimadeka_Desktop_calculator_combined_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),_Users_dhartimadeka_Desktop_calculator_combined_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),websocket__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),websocket__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(websocket__WEBPACK_IMPORTED_MODULE_3__),_App_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(22),_App_css__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__),_components_ResultComponent__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),_components_KeyPadComponent__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9),_components_UserLog__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(10),_components_UserLogin__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(12),client=new websocket__WEBPACK_IMPORTED_MODULE_3__.w3cwebsocket("wss://sezzleserver.herokuapp.com"),App=react__WEBPACK_IMPORTED_MODULE_2___default.a.memo((function(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),_React$useState2=Object(_Users_dhartimadeka_Desktop_calculator_combined_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_React$useState,2),result=_React$useState2[0],setResult=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),_React$useState4=Object(_Users_dhartimadeka_Desktop_calculator_combined_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_React$useState3,2),expressionLog=_React$useState4[0],setExpressionLog=_React$useState4[1],_React$useState5=react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),_React$useState6=Object(_Users_dhartimadeka_Desktop_calculator_combined_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_React$useState5,2),user=_React$useState6[0],setUser=_React$useState6[1];react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect((function(){client.onopen=function(){console.log("Websocket client connected !!")},client.onmessage=function(e){var t=JSON.parse(e.data);if(console.log("got reply !!",t),"message"===t.type){var _={equation:t.equation,user:t.user,time:t.time};if(user){var a=[_].concat(Object(_Users_dhartimadeka_Desktop_calculator_combined_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(expressionLog));a.length>10&&a.pop(),setExpressionLog(a)}}}}),[expressionLog,setExpressionLog,user]);var calculate=react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback((function(){try{setResult((eval(result)||"")+"");var expression=result+"="+eval(result),time=(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});client.send(JSON.stringify({type:"message",equation:expression,user:user,time:time}))}catch(e){setResult("error")}}),[user,result,setResult]),reset=react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback((function(){setResult("")}),[setResult]),backspace=react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback((function(){setResult(result.slice(0,-1))}),[result,setResult]),onClick=react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback((function(e){switch(e){case"=":calculate();break;case"C":reset();break;case"CE":backspace();break;default:setResult(result+e)}}),[calculate,reset,backspace,result,setResult]);return user?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"calculator-body"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2",null,"Sezzle Calculator Assessment"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ResultComponent__WEBPACK_IMPORTED_MODULE_5__.a,{result:result}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_KeyPadComponent__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:onClick})),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"userlog-wrapper"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_UserLog__WEBPACK_IMPORTED_MODULE_7__.a,{expressionLog:expressionLog}))):react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_UserLogin__WEBPACK_IMPORTED_MODULE_8__.a,{onSubmit:setUser})}));__webpack_exports__.a=App},,function(e,t,_){"use strict";var a=_(0),n=_.n(a),r=n.a.memo((function(e){var t=e.result;return n.a.createElement("div",{className:"result"},n.a.createElement("p",null,t))}));t.a=r},function(e,t,_){"use strict";var a=_(0),n=_.n(a),r=n.a.memo((function(e){var t=e.children,_=e.onClick,a=n.a.useMemo((function(){return!isNaN(t)||"."===t||"="===t}),[t]);return n.a.createElement("div",{className:"button ".concat(a?"":"operator")},n.a.createElement("button",{name:"(",onClick:function(e){return _(e.target.name)}},"("),n.a.createElement("button",{name:"CE",onClick:function(e){return _(e.target.name)}},"CE"),n.a.createElement("button",{name:")",onClick:function(e){return _(e.target.name)}},")"),n.a.createElement("button",{name:"C",onClick:function(e){return _(e.target.name)}},"C"),n.a.createElement("br",null),n.a.createElement("button",{name:"1",onClick:function(e){return _(e.target.name)}},"1"),n.a.createElement("button",{name:"2",onClick:function(e){return _(e.target.name)}},"2"),n.a.createElement("button",{name:"3",onClick:function(e){return _(e.target.name)}},"3"),n.a.createElement("button",{name:"+",onClick:function(e){return _(e.target.name)}},"+"),n.a.createElement("br",null),n.a.createElement("button",{name:"4",onClick:function(e){return _(e.target.name)}},"4"),n.a.createElement("button",{name:"5",onClick:function(e){return _(e.target.name)}},"5"),n.a.createElement("button",{name:"6",onClick:function(e){return _(e.target.name)}},"6"),n.a.createElement("button",{name:"-",onClick:function(e){return _(e.target.name)}},"-"),n.a.createElement("br",null),n.a.createElement("button",{name:"7",onClick:function(e){return _(e.target.name)}},"7"),n.a.createElement("button",{name:"8",onClick:function(e){return _(e.target.name)}},"8"),n.a.createElement("button",{name:"9",onClick:function(e){return _(e.target.name)}},"9"),n.a.createElement("button",{name:"*",onClick:function(e){return _(e.target.name)}},"x"),n.a.createElement("br",null),n.a.createElement("button",{name:".",onClick:function(e){return _(e.target.name)}},"."),n.a.createElement("button",{name:"0",onClick:function(e){return _(e.target.name)}},"0"),n.a.createElement("button",{name:"=",onClick:function(e){return _(e.target.name)}},"="),n.a.createElement("button",{name:"/",onClick:function(e){return _(e.target.name)}},"\xf7"),n.a.createElement("br",null))}));t.a=r},function(e,t,_){"use strict";var a=_(0),n=_.n(a),r=(_(23),n.a.memo((function(e){var t=e.expressionLog;return n.a.createElement("div",{className:"userLog"},n.a.createElement("ul",null,t.map((function(e){return n.a.createElement("li",null,"User: ",e.user," \xa0\xa0 Time: ",e.time," \xa0\xa0 Equation: ",e.equation)}))))})));t.a=r},,function(e,t,_){"use strict";_.d(t,"a",(function(){return c}));var a=_(1),n=_(0),r=_.n(n),c=(_(24),r.a.memo((function(e){var t=e.onSubmit,_=r.a.useState(""),n=Object(a.a)(_,2),c=n[0],o=n[1],u=r.a.useCallback((function(e){" "!==e.target.value.charAt(0)&&o(e.target.value)}),[o]),s=r.a.useCallback((function(e){c&&c.trim()&&t(c)}),[c,t]);return r.a.createElement("div",{className:"u-form"},r.a.createElement("input",{className:"u-input",type:"text",placeholder:"Please input a nick name",onChange:u,value:c}),r.a.createElement("button",{className:"u-btn",onClick:s},"submit"))})))},function(e,t,_){e.exports=_(25)},,,,,function(e,t,_){},,,,function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){"use strict";_.r(t);var a=_(0),n=_.n(a),r=_(5),c=_.n(r),o=(_(18),_(6));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(o.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.5c2bf2d8.chunk.js.map