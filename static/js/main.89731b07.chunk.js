(this["webpackJsonptodo-app-hooks"]=this["webpackJsonptodo-app-hooks"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(6),l=a.n(c),r=(a(12),a(4)),s=a(3),d=(a(13),a(14),function(e){var t=e.todo,a=e.index,o=e.completeTodo,c=e.deleteTodo;return n.a.createElement("div",{className:t.isCompleted?"todo completed":"todo"},n.a.createElement("p",null,t.text),n.a.createElement("div",{className:"button-container"},n.a.createElement("button",{className:"complete-button",onClick:function(){return o(a)}},"Complete"),n.a.createElement("button",{className:"delete-button",onClick:function(){return c(a)}},"Delete")))}),i=(a(15),function(e){var t=e.addTodo,a=Object(o.useState)(""),c=Object(s.a)(a,2),l=c[0],r=c[1];return n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l&&(t(l),r(""))}},n.a.createElement("input",{type:"text",placeholder:"Add task",className:"input",value:l,onChange:function(e){return r(e.target.value)}}),n.a.createElement("button",{className:"add-todo-button"},"Add"))}),u=function(){var e=localStorage.getItem("todos"),t=Object(o.useState)(e&&JSON.parse(e).length?JSON.parse(e):[]),a=Object(s.a)(t,2),c=a[0],l=a[1],u=function(e){var t=Object(r.a)(c);t[e].isCompleted=!0,l(t),localStorage.setItem("todos",JSON.stringify(t))},m=function(e){var t=Object(r.a)(c);t.splice(e,1),l(t),localStorage.setItem("todos",JSON.stringify(t))};return n.a.createElement("div",{className:"app"},n.a.createElement("h1",{className:"heading"},"Task List"),n.a.createElement("div",{className:"todo-list"},c.map((function(e,t){return n.a.createElement(d,{key:t,index:t,todo:e,completeTodo:u,deleteTodo:m})})),n.a.createElement(i,{addTodo:function(e){var t=[].concat(Object(r.a)(c),[{text:e}]);l(t),localStorage.setItem("todos",JSON.stringify(t))}})))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.89731b07.chunk.js.map