(this["webpackJsonpexample-app"]=this["webpackJsonpexample-app"]||[]).push([[0],{139:function(e,t,n){e.exports=n(298)},296:function(e,t,n){},298:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(12),o=n(14),c=n(13),l=n(15),i=n(16),s=n(0),u=n.n(s),m=n(6),p=n(8),f="LOGIN",h=function(e){return e.currentUser?null:u.a.createElement("ul",{className:"nav navbar-nav pull-xs-right"},u.a.createElement("li",{className:"nav-item"},u.a.createElement(i.Link,{to:"login",className:"nav-link"},"Sign in")),u.a.createElement("li",{className:"nav-item"},u.a.createElement(i.Link,{to:"register",className:"nav-link"},"Sign up")))},d=function(e){return e.currentUser?u.a.createElement("ul",{className:"nav navbar-nav pull-xs-right"},u.a.createElement("li",{className:"nav-item"},e.currentUser),u.a.createElement("li",{className:"nav-item"},u.a.createElement(i.Link,{to:"/",onClick:e.logout,className:"nav-link"},"LogOut"))):null},v=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("nav",{className:"navbar navbar-light bg-primary"},u.a.createElement("div",{className:"container"},u.a.createElement(i.Link,{to:"/",className:"navbar-brand"},"Tereshchenko & Shishkov"),u.a.createElement(h,{currentUser:this.props.currentUser}),u.a.createElement(d,{currentUser:this.props.currentUser,logout:this.props.onClickLogout})))}}]),t}(u.a.Component),g=Object(p.connect)((function(){return{}}),(function(e){return{onClickLogout:function(){e({type:"LOGOUT",payload:m.a.Auth.logout()})}}}))(v),E=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=window.localStorage.getItem("token"),t=window.localStorage.getItem("username");e&&m.a.setToken(e),this.props.onLoad(t,e)}},{key:"componentWillReceiveProps",value:function(e){e.redirectTo&&(this.context.router.replace(e.redirectTo),this.props.onRedirect())}},{key:"render",value:function(){return u.a.createElement("div",{className:"welcome"},u.a.createElement(g,{currentUser:this.props.currentUser,appName:this.props.appName}),this.props.children)}}]),t}(u.a.Component);E.contextTypes={router:u.a.PropTypes.object.isRequired};var b=Object(p.connect)((function(e){return{appName:e.common.appName,currentUser:e.common.currentUser,points:e.points.points,redirectTo:e.common.redirectTo}}),(function(e){return{onLoad:function(t,n){return e({type:"APP_LOAD",username:t,token:n})},onRedirect:function(){return e({type:"REDIRECT"})}}}))(E),T=n(138),y=n.n(T),O=n(42);var N=n(35),k=n(7),P={appName:"Lab4-Web",token:null},j=Object(O.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:case"REGISTER":return Object(k.a)({},e,{inProgress:!1,errors:t.error?t.payload.message:null});case"ASYNC_START":return t.subtype===f||"REGISTER"===t.subtype?Object(k.a)({},e,{inProgress:!0}):e;case"UPDATE_FIELD_AUTH":return Object(k.a)({},e,Object(N.a)({},t.key,t.value));default:return e}},common:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP_LOAD":return Object(k.a)({},e,{token:t.token||null,appLoaded:!0,currentUser:t.username||null});case"REDIRECT":return Object(k.a)({},e,{redirectTo:null});case"LOGOUT":return Object(k.a)({},e,{redirectTo:"/",token:null,currentUser:null});case f:return Object(k.a)({},e,{redirectTo:t.error?null:"/",currentUser:t.error?null:t.username});case"REGISTER":return Object(k.a)({},e,{redirectTo:t.error?null:"/login"});default:return e}},points:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FIELD_POINT":return Object(k.a)({},e,Object(N.a)({},t.key,t.value));case"POINT_ADDED":return Object(k.a)({},e,{point:t.payload});case"POINTS_LOADED":return Object(k.a)({},e,{points:t.payload});case"POINTS_RECALCULATED":return Object(k.a)({},e,{points_r:t.payload,current_r:t.r});default:return e}}}),w=Object(O.applyMiddleware)((function(e){return function(t){return function(n){if((a=n.payload)&&"function"===typeof a.then)return e.dispatch({type:"ASYNC_START",subtype:n.type}),void n.payload.then((function(t){n.payload=t,e.dispatch(n)}),(function(t){n.error=!0,n.payload=t.response,e.dispatch(n)}));var a;t(n)}}}),(function(e){return function(e){return function(t){switch(t.type){case f:t.error||(window.localStorage.setItem("token",t.payload.message),window.localStorage.setItem("username",t.username),m.a.setToken(t.payload.message));break;case"LOGOUT":window.localStorage.removeItem("token"),window.localStorage.removeItem("username"),m.a.setToken(null)}e(t)}}}),(function(e){return function(t){return function(n){switch(n.type){case"POINTS_LOADED":n.error&&(window.localStorage.removeItem("token"),window.localStorage.removeItem("username"),m.a.setToken(null));break;case"POINT_ADDED":n.error||(e.dispatch({type:"POINTS_LOADED",payload:m.a.Points.all()}),e.dispatch({type:"POINTS_RECALCULATED",payload:m.a.Points.recalculated(n.r),r:n.r}))}t(n)}}})),x=Object(O.createStore)(j,w),C=function(e){var t=e.point;return u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,t.id),u.a.createElement("td",null,t.x.toFixed(3)),u.a.createElement("td",null,t.y.toFixed(3)),u.a.createElement("td",null,t.r),u.a.createElement("td",null,t.result?"true":"false")))},U=function(e){return e.currentUser?e.points?0===e.points.length?u.a.createElement("div",{className:"points"},"No points are here... yet."):u.a.createElement("div",null,u.a.createElement("table",{className:"innerTable"},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Id"),u.a.createElement("th",null,"X"),u.a.createElement("th",null,"Y"),u.a.createElement("th",null,"R"),u.a.createElement("th",null,"HIT"))),e.points.map((function(e){return u.a.createElement(C,{point:e,key:e.id})})))):u.a.createElement("div",{className:"points"},"Loading..."):null},S=(n(296),Object(p.connect)((function(e){return{points:e.points.points,currentUser:e.common.currentUser}}),(function(){return{}}))((function(e){return u.a.createElement("div",{className:"table"},u.a.createElement(U,{points:e.points,currentUser:e.currentUser}))}))),D=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.errors;return e?u.a.createElement("ul",{className:"error-messages"},u.a.createElement("li",{key:e},e)):null}}]),t}(u.a.Component),I=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).changeX=function(e){return n.props.onChangeX(e.target.value)},n.changeY=function(e){return n.props.onChangeY(e.target.value)},n.changeR=function(e){return n.props.onChangeR(e.target.value)},n.submitForm=function(e,t,a){return function(r){r.preventDefault(),n.props.onSubmit(e,t,a)}},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.xc,t=this.props.yc,n=this.props.rc;return u.a.createElement("div",{className:"auth-page"},u.a.createElement("div",{className:"container page"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},u.a.createElement(D,{errors:this.props.errors}),u.a.createElement("form",{onSubmit:this.submitForm(e,t,n)},u.a.createElement("fieldset",null,u.a.createElement("fieldset",{className:"form-group"},u.a.createElement("input",{className:"form-control form-control-lg",type:"text",placeholder:"X [-5:3]",value:e,onChange:this.changeX})),u.a.createElement("fieldset",{className:"form-group"},u.a.createElement("input",{className:"form-control form-control-lg",type:"text",placeholder:"Y [-3:3]",value:t,onChange:this.changeY})),u.a.createElement("fieldset",{className:"form-group"},u.a.createElement("input",{className:"form-control form-control-lg",type:"text",placeholder:"R [0:5]",value:n,onChange:this.changeR})),u.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right",type:"submit"},"CHECK")))))))}}]),t}(u.a.Component),A=Object(p.connect)((function(e){return Object(k.a)({},e.points)}),(function(e){return{onChangeX:function(t){t>=-5&&t<=3&&e({type:"UPDATE_FIELD_POINT",key:"xc",value:t})},onChangeY:function(t){t>=-3&&t<=3&&e({type:"UPDATE_FIELD_POINT",key:"yc",value:t})},onChangeR:function(t){t>=0&&t<=5&&e({type:"UPDATE_FIELD_POINT",key:"rc",value:t})},onSubmit:function(t,n,a){e({type:"POINT_ADDED",payload:m.a.Points.new(t,n,a),r:a})}}}))(I),L=n(53),_=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).addPointFromCanvas=n.addPointFromCanvas.bind(Object(L.a)(n)),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.props.recalculatedPoints(1)}},{key:"componentDidMount",value:function(){this.drawGraphic(1)}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"graphic"},u.a.createElement("canvas",{width:"300",height:"300",ref:function(t){return e.graphic=t},onClick:this.addPointFromCanvas}))}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.rc&&(this.drawGraphic(e.rc),e.current_r&&e.current_r===e.rc||this.props.recalculatedPoints(e.rc)),e.points&&e.points.map((function(e){return t.drawPoint(e)}))}},{key:"drawPoint",value:function(e){var t=e.x,n=e.y,a=e.result,r=this.graphic.getContext("2d");r.beginPath(),r.arc(Math.round(150+t/5*130)-3,Math.round(150-n/5*130)-3,2,0,2*Math.PI),r.closePath(),r.strokeStyle="black";var o="red";a&&(o="lime"),r.fillStyle=o,r.fill(),r.stroke()}},{key:"addPointFromCanvas",value:function(e){var t=this.graphic.getBoundingClientRect(),n=t.left,a=t.top,r=e,o=r.clientX-n,c=r.clientY-a;console.log("x=".concat(o," y=").concat(c));var l=(o-150)/130*5,i=(150-c)/130*5;this.props.onCanvasClick(l,i,this.props.rc||1)}},{key:"drawGraphic",value:function(e){console.log("Drawing graphic with R="+e);var t=this.graphic.getContext("2d");t.clearRect(0,0,this.graphic.width,this.graphic.height),t.beginPath(),t.rect(150,150,e/5*130,e/5*130),t.closePath(),t.strokeStyle="#df8b1f",t.fillStyle="#df8b1f",t.fill(),t.stroke(),t.beginPath(),t.moveTo(150,150),t.arc(150,150,e/5*130,3*Math.PI/2,2*Math.PI,!1),t.closePath(),t.strokeStyle="#df8b1f",t.fillStyle="#df8b1f",t.fill(),t.stroke(),t.beginPath(),t.moveTo(150,150),t.lineTo(150-e/5*130,150),t.lineTo(150,150+e/5*130),t.lineTo(150,150),t.closePath(),t.strokeStyle="#df8b1f",t.fillStyle="#df8b1f",t.fill(),t.stroke(),t.beginPath(),t.font="10px Verdana",t.strokeStyle="black",t.fillStyle="black",t.moveTo(150,0),t.lineTo(150,300),t.moveTo(150,0),t.lineTo(145,15),t.moveTo(150,0),t.lineTo(155,15),t.fillText("Y",160,10),t.moveTo(0,150),t.lineTo(300,150),t.moveTo(300,150),t.lineTo(285,145),t.moveTo(300,150),t.lineTo(285,155),t.fillText("X",290,130),t.moveTo(145,20),t.lineTo(155,20),t.fillText(" 5",160,20),t.moveTo(145,46),t.lineTo(155,46),t.fillText(" 4",160,46),t.moveTo(145,72),t.lineTo(155,72),t.fillText(" 3",160,72),t.moveTo(145,98),t.lineTo(155,98),t.fillText(" 2",160,98),t.moveTo(145,124),t.lineTo(155,124),t.fillText(" 1",160,124),t.moveTo(145,176),t.lineTo(155,176),t.fillText("-1",160,176),t.moveTo(145,202),t.lineTo(155,202),t.fillText("-2",160,202),t.moveTo(145,228),t.lineTo(155,228),t.fillText("-3",160,228),t.moveTo(145,254),t.lineTo(155,254),t.fillText("-4",160,254),t.moveTo(145,280),t.lineTo(155,280),t.fillText("-5",160,280),t.moveTo(20,145),t.lineTo(20,155),t.fillText("-5",13,140),t.moveTo(46,145),t.lineTo(46,155),t.fillText("-4",39,140),t.moveTo(72,145),t.lineTo(72,155),t.fillText("-3",65,140),t.moveTo(98,145),t.lineTo(98,155),t.fillText("-2",91,140),t.moveTo(124,145),t.lineTo(124,155),t.fillText("-1",117,140),t.moveTo(176,145),t.lineTo(176,155),t.fillText(" 1",169,140),t.moveTo(202,145),t.lineTo(202,155),t.fillText(" 2",195,140),t.moveTo(228,145),t.lineTo(228,155),t.fillText(" 3",221,140),t.moveTo(254,145),t.lineTo(254,155),t.fillText(" 4",247,140),t.moveTo(280,145),t.lineTo(280,155),t.fillText(" 5",273,140),t.closePath(),t.strokeStyle="black",t.fillStyle="black",t.stroke()}}]),t}(u.a.Component),R=Object(p.connect)((function(e){return{points:e.points.points_r,rc:e.points.rc,current_r:e.points.current_r}}),(function(e){return{recalculatedPoints:function(t){e({type:"POINTS_RECALCULATED",payload:m.a.Points.recalculated(t),r:t})},onCanvasClick:function(t,n,a){e({type:"POINT_ADDED",payload:m.a.Points.new(t,n,a),r:a})}}}))(_),F=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.props.currentUser&&this.props.onLoad(m.a.Points.all())}},{key:"render",value:function(){return this.props.currentUser?u.a.createElement("div",{className:"home-page"},u.a.createElement(R,null),u.a.createElement(A,null),u.a.createElement("div",{className:"container-page"},u.a.createElement(S,null)),u.a.createElement("div",{className:"footer"},"End.")):null}}]),t}(u.a.Component),G=Object(p.connect)((function(e){return{appName:e.common.appName,currentUser:e.common.currentUser}}),(function(e){return{onLoad:function(t){return e({type:"POINTS_LOADED",payload:t})}}}))(F),M=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).changeUsername=function(e){return n.props.onChangeUsername(e.target.value)},n.changePassword=function(e){return n.props.onChangePassword(e.target.value)},n.submitForm=function(e,t){return function(a){a.preventDefault(),n.props.onSubmit(e,t)}},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.username,t=this.props.password;return u.a.createElement("div",{className:"auth-page"},u.a.createElement("div",{className:"container page"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},u.a.createElement("h1",{className:"text-xs-center"},"Sign In"),u.a.createElement("p",{className:"text-xs-center"},u.a.createElement(i.Link,{to:"register"},"Need an account?")),u.a.createElement(D,{errors:this.props.errors}),u.a.createElement("form",{onSubmit:this.submitForm(e,t)},u.a.createElement("fieldset",null,u.a.createElement("fieldset",{className:"form-group"},u.a.createElement("input",{className:"form-control form-control-lg",type:"email",placeholder:"Username",value:e,onChange:this.changeUsername})),u.a.createElement("fieldset",{className:"form-group"},u.a.createElement("input",{className:"form-control form-control-lg",type:"password",placeholder:"Password",value:t,onChange:this.changePassword})),u.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right",type:"submit",disabled:this.props.inProgress},"Sign in")))))))}}]),t}(u.a.Component),Y=Object(p.connect)((function(e){return Object(k.a)({},e.auth)}),(function(e){return{onChangeUsername:function(t){return e({type:"UPDATE_FIELD_AUTH",key:"username",value:t})},onChangePassword:function(t){return e({type:"UPDATE_FIELD_AUTH",key:"password",value:t})},onSubmit:function(t,n){return e({type:f,payload:m.a.Auth.login(t,n),username:t})}}}))(M),H=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).changePassword=function(e){return n.props.onChangePassword(e.target.value)},n.changeUsername=function(e){return n.props.onChangeUsername(e.target.value)},n.submitForm=function(e,t){return function(a){a.preventDefault(),n.props.onSubmit(e,t)}},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.password,t=this.props.username;return u.a.createElement("div",{className:"auth-page"},u.a.createElement("div",{className:"container page"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},u.a.createElement("h1",{className:"text-xs-center"},"Sign Up"),u.a.createElement("p",{className:"text-xs-center"},u.a.createElement(i.Link,{to:"login"},"Have an account?")),u.a.createElement(D,{errors:this.props.errors}),u.a.createElement("form",{onSubmit:this.submitForm(t,e)},u.a.createElement("fieldset",null,u.a.createElement("fieldset",{className:"form-group"},u.a.createElement("input",{className:"form-control form-control-lg",type:"email",placeholder:"Username",value:this.props.username,onChange:this.changeUsername})),u.a.createElement("fieldset",{className:"form-group"},u.a.createElement("input",{className:"form-control form-control-lg",type:"password",placeholder:"Password",value:this.props.password,onChange:this.changePassword})),u.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right",type:"submit",disabled:this.props.inProgress},"Sign up")))))))}}]),t}(u.a.Component),X=Object(p.connect)((function(e){return Object(k.a)({},e.auth)}),(function(e){return{onChangePassword:function(t){return e({type:"UPDATE_FIELD_AUTH",key:"password",value:t})},onChangeUsername:function(t){return e({type:"UPDATE_FIELD_AUTH",key:"username",value:t})},onSubmit:function(t,n){var a=m.a.Auth.register(t,n);e({type:"REGISTER",payload:a})}}}))(H);n(297);y.a.render(u.a.createElement(p.Provider,{store:x},u.a.createElement(i.Router,{history:i.browserHistory},u.a.createElement(i.Route,{path:"/",component:b},u.a.createElement(i.IndexRoute,{component:G}),u.a.createElement(i.Route,{path:"login",component:Y}),u.a.createElement(i.Route,{path:"register",component:X})))),document.getElementById("root"))},6:function(e,t,n){"use strict";(function(e){var a=n(134),r=n.n(a),o=n(135),c=n.n(o),l=r()(c.a,e.Promise),i="http://localhost:28228/api",s=function(e){return e.body},u=null,m=function(e){u&&e.set("Authorization","Basic ".concat(u))},p=function(e){return l.get("".concat(i).concat(e)).use(m).then(s)},f=function(e,t){return l.post("".concat(i).concat(e),t).use(m).then(s)},h={all:function(){return p("/points")},recalculated:function(e){return p("/points/recalculate?r=".concat(e))},new:function(e,t,n){return f("/points",{x:e,y:t,r:n})}},d={login:function(e,t){return f("/users/login",{username:e,password:t})},register:function(e,t){return f("/users/register",{username:e,password:t})},logout:function(){return f("/users/logout")}};t.a={Points:h,Auth:d,setToken:function(e){u=e}}}).call(this,n(37))}},[[139,1,2]]]);
//# sourceMappingURL=main.fce57327.chunk.js.map