(this.webpackJsonpreact_todo=this.webpackJsonpreact_todo||[]).push([[0],{61:function(t,e,o){},62:function(t,e,o){"use strict";o.r(e);var n=o(0),c=o.n(n),r=o(30),a=o.n(r),s=o(20),i=o(8),d=o(9),l=o(11),u=o(10),p=o(14),j=o(2),b=o(1);var h={background:"gold",color:"black",textAlign:"center",padding:"10px"},f={color:"black",textDecoration:"none"},O=function(){return Object(b.jsxs)("header",{style:h,children:[Object(b.jsx)("h1",{children:"TodoList"}),Object(b.jsx)(p.b,{style:f,to:"/",children:"Home"})," | ",Object(b.jsx)(p.b,{style:f,to:"/about",children:"About"})]})},m=function(t){Object(l.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(d.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return Object(b.jsx)("div",{style:this.getStyle(),children:Object(b.jsxs)("p",{children:[Object(b.jsx)("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",o,Object(b.jsx)("button",{onClick:this.props.delTodo.bind(this,e),style:x,children:"x"})]})})}}]),o}(n.Component),x={background:"#ff0000",color:"#fff",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right"},g=m,v=function(t){Object(l.a)(o,t);var e=Object(u.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(d.a)(o,[{key:"render",value:function(){var t=this;return console.log(this.props.todos),this.props.todos.map((function(e){return Object(b.jsx)(g,{todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo},e.id)}))}}]),o}(n.Component),y=o(32),k=function(t){Object(l.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={title:""},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t.onChange=function(e){return t.setState(Object(y.a)({},e.target.name,e.target.value))},t}return Object(d.a)(o,[{key:"render",value:function(){return Object(b.jsxs)("form",{onSubmit:this.onSubmit,style:{display:"flex"},children:[Object(b.jsx)("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo...",value:this.state.title,onChange:this.onChange}),Object(b.jsx)("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}})]})}}]),o}(n.Component);var C=function(){return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)("h1",{children:"About"}),Object(b.jsx)("p",{children:"This is a Todo list app v1.0.0. It is a part of a React crash course"})]})},T=o(15),S=o.n(T),A=(o(61),function(t){Object(l.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){S.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(o){return t.setState({todos:Object(s.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.addTodo=function(e){S.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return t.setState({todos:[].concat(Object(s.a)(t.state.todos),[e.data])})}))},t}return Object(d.a)(o,[{key:"componentDidMount",value:function(){var t=this;S.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return console.log(this.state.todos),Object(b.jsx)(p.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{class:"container",children:[Object(b.jsx)(O,{}),Object(b.jsx)(j.a,{exact:!0,path:"/",render:function(e){return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(k,{addTodo:t.addTodo}),Object(b.jsx)(v,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo})]})}}),Object(b.jsx)(j.a,{path:"/about",component:C})]})})})}}]),o}(n.Component)),F=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,63)).then((function(e){var o=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;o(t),n(t),c(t),r(t),a(t)}))};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(A,{})}),document.getElementById("root")),F()}},[[62,1,2]]]);
//# sourceMappingURL=main.443be45e.chunk.js.map