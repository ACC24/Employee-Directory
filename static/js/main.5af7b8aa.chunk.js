(this["webpackJsonpemployee-app"]=this["webpackJsonpemployee-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a(48)},24:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l);a(24);var o=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"display-4"},"Employee Directory"),r.a.createElement("p",{className:"lead"},"Click on carrots to filter by heading or use the search box to narrow your results."))},s=a(2),m=a(13),u=a(14),i=a(18),p=a(17),d=a(15),h=a.n(d),f=function(){return h.a.get("https://randomuser.me/api/?results=200&nat=us")};var E=function(e){return r.a.createElement("div",{className:"container",style:e.style},e.children)};a(42);var y=function(e){var t=e.handleInputChange;return r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:function(e){return t(e)},className:"form-control",placeholder:"Search employee",id:"searchBox"})))},v=a(16),g=a.n(v);a(44);var b=function(e){var t=e.employees,a=e.sortingFunctionHandler;return r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{scope:"col",className:"nameCol",onClick:function(){return a()}},"Name"),r.a.createElement("th",{scope:"col"},"Phone"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"DOB"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement("img",{alt:"Employee",src:e.picture.thumbnail,className:"img-fluid"})),r.a.createElement("td",null,e.name.first," ",e.name.last),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.email),r.a.createElement("td",null,g()(e.dob.date).calendar()))}))))},C=function(e){return e.sort((function(e,t){var a=e.name.first.toUpperCase()+e.name.last.toUpperCase(),n=t.name.first.toUpperCase()+t.name.last.toUpperCase();return a<n?-1:a>n?1:0}))},N=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={search:"",employees:[],filteredEmployees:[]},e.sortingFunctionHandler=function(){e.setState(Object(s.a)(Object(s.a)({},e.state),{},{filteredEmployees:C(e.state.filteredEmployees)}))},e.handleInputChange=function(t){var a=t.target.value,n=e.state.employees.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));e.setState({filteredEmployees:n,search:t.target.value})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({employees:t.data.results,filteredEmployees:t.data.results})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,{style:{minHeight:"80%",minWidth:"80%"}},r.a.createElement(y,{handleInputChange:this.handleInputChange}),r.a.createElement(b,{employees:this.state.filteredEmployees,sortingFunctionHandler:this.sortingFunctionHandler})))}}]),a}(n.Component);a(45);var O=function(e){return r.a.createElement("main",{className:"wrapper"},e.children)};var j=function(){return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement(O,null,r.a.createElement(N,null)))};a(46),a(47);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.5af7b8aa.chunk.js.map