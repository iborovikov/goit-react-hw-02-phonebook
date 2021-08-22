(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={input:"filter_input__bddV0"}},17:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(9),c=n.n(r),o=n(2),i=n(3),s=n(5),u=n(4),l=(n(17),n(10)),b=n(6),m=n.n(b),p=n(0),d=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.resetFormInput=function(){t.setState({name:"",number:""})},t.handleInputChange=function(e){var n=e.currentTarget.name,a=e.currentTarget.value;t.setState(Object(l.a)({},n,a))},t.onSbmit=function(e){e.preventDefault(),t.props.onFormSubmit(t.state.name,t.state.number),t.resetFormInput()},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=this.handleInputChange;return Object(p.jsxs)("form",{className:m.a.form,onSubmit:this.onSbmit,children:[Object(p.jsxs)("label",{className:m.a.label,children:["Name",Object(p.jsx)("input",{className:m.a.input,type:"text",name:"name",value:e,onChange:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{className:m.a.label,children:["Number",Object(p.jsx)("input",{className:m.a.input,type:"tel",name:"number",value:n,onChange:a,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{className:m.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),h=n(11),f=n.n(h),j=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).handleInputChange=function(e){t.props.onFilterInputChange(e.currentTarget.value)},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsx)("label",{children:Object(p.jsx)("input",{className:f.a.input,type:"text",name:"filter",value:this.props.filter,onChange:this.handleInputChange})})}}]),n}(a.Component),O=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).takeId=function(e){t.props.deleteContact(e.currentTarget.id)},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.contacts,e=this.takeId;return t.map((function(t){var n=t.name,a=t.number,r=t.id;return Object(p.jsxs)("li",{children:[n,": ",a," ",Object(p.jsx)("button",{type:"button",id:r,onClick:e,children:"Delete"})]},r)}))}}]),n}(a.Component),v=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).deleteContact=function(e){t.props.removeContact(e)},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.contacts,e=this.deleteContact;return Object(p.jsx)("ul",{children:Object(p.jsx)(O,{deleteContact:e,contacts:t})})}}]),n}(a.Component),C=n(12),g=n.n(C),x=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a=g.a.generate();t.setState((function(t){return t.contacts.push({name:e,number:n,id:a})}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.onFilterInputChange=function(e){t.setState({filter:e})},t.resetFilterInput=function(){t.setState({filter:""})},t.isNameInList=function(e){return t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},t.onFormSubmit=function(e,n){if(t.isNameInList(e))return t.resetFilterInput(),alert("".concat(e," is already in contacts"));t.addContact(e,n),t.resetFilterInput()},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.onFormSubmit,r=this.onFilterInputChange,c=this.removeContact,o=n.toLowerCase(),i=e.filter((function(t){return t.name.toLowerCase().includes(o)}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(d,{onFormSubmit:a}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(j,{onFilterInputChange:r,filter:n}),Object(p.jsx)(v,{contacts:i,removeContact:c})]})}}]),n}(a.Component);n(27);c.a.render(Object(p.jsx)(x,{}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"Form_form__-5bK_",btn:"Form_btn__EWMim",label:"Form_label__AIXNR",input:"Form_input__2tzeq"}}},[[28,1,2]]]);
//# sourceMappingURL=main.182156d4.chunk.js.map