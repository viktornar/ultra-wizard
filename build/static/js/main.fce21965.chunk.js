(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(10),i=n.n(r),o=n(3),c=n(4),u=n(5),l=n(7),m=n(6),p=n(1),d=n(8);n(18);var h=function(e){for(var t=[],n=0;n<e.count;++n)t[n]="";for(var a=0;a<e.step-1;++a)t[a]+="seen ";return t[e.step-1]+="active ",t[e.count-1]+="final ",s.a.createElement("ul",{className:"StatusBar"},t.map(function(e,t){return s.a.createElement("li",{key:t,className:e},s.a.createElement("i",null))}))},f={givenAnswers:[],step:0,history:[]},v={givenAnswers:[],step:1};n(19),n(20);var w=function(e){var t=e.onStart;return s.a.createElement("div",{className:"Intro"},s.a.createElement("h2",null,"We will help for you to take a right loan"),s.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),s.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),s.a.createElement("button",{className:"Intro__start",onClick:t},"Start"))},g=n(11),y=n(2),E=function(e,t){e.setState({history:[].concat(Object(y.a)(e.state.history),[Object(o.a)({},t)])})},x=function(e){var t=Object(y.a)(e.state.history);t.pop();var n=(t=t.length?t:v)[t.length-1],a=Object(g.a)({},n);e.setState(Object(o.a)({},{history:t},a))},b=(n(21),n(22),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){n.setState({amount:parseInt(e.target.value)||"",showMessage:!1})},n.onClick=function(){var e=n.state.amount,t=n.props,a=t.min,s=t.max,r=t.prefix;e<a||e>s?n.setState({showMessage:!0}):n.props.onNext("".concat(e," ").concat(r))},n.state={amount:"",showMessage:!1},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.min,n=e.max,a=this.state.showMessage?"LoanAmount__next--disabled":"LoanAmount__next";return s.a.createElement("div",{className:"LoanAmount"},s.a.createElement("input",{name:"amount",type:"number",value:this.state.amount,onChange:this.handleChange}),s.a.createElement("button",{className:a,onClick:this.onClick},"Next"),this.state.showMessage&&s.a.createElement("div",{className:"LoanAmount__message"},"Enter between ".concat(t," and ").concat(n)))}}]),t}(a.Component));b.defaultProps={prefix:""};var O=function(e){var t=e.question,n=e.history,a=t.text,r=t.answers,i=t.answer,o=Object(y.a)(n).pop();return s.a.createElement("div",{className:"Question"},s.a.createElement("h2",null,a),i&&i.min&&i.max&&i.prefix&&s.a.createElement(b,{onNext:e.onNext,min:i.min,max:i.max,prefix:i.prefix}),r&&r.map(function(n,a){return function(e,t,n){if(!function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}(t.depends)&&t.depends.step&&t.depends.condition&&t.answers){var a=t.depends,s=a.step,r=a.condition,i=t.answers;return parseInt(n.givenAnswers[s-1])<r.min?i.indexOf(e)<r.renderIndex:i.indexOf(e)>r.renderIndex}return!0}(n,t,o)?s.a.createElement("div",{key:a},s.a.createElement("button",{className:"Question__answer",onClick:(r=n,function(){e.onNext(r)})},n)):null;var r}))};var N=function(e){var t=e.givenAnswers;return s.a.createElement("div",{className:"Summary"},s.a.createElement("h2",null,"Summary:"),t.map(function(e,t){return s.a.createElement("p",{key:t},e)}))},j=(n(23),function(e){var t=s.a.Children.map(e.children,function(e){var t=e.props.className;return t?s.a.cloneElement(e,{className:"".concat(t," FadeTransition")}):e});return s.a.createElement("div",null,t)}),A=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).startWizard=function(){n.setState(function(){return{step:1}}),E(Object(p.a)(n),v)},n.goBack=function(){return x(Object(p.a)(n))},n.recordAnswerAndStep=function(e){var t=n.state.givenAnswers;t.push(e);var a=0,s=n.state.step+1;a=s>=n.state.count?n.state.count:s,E(Object(p.a)(n),{step:a,givenAnswers:t}),n.setState({step:a,givenAnswers:t})};var a=e.wizardConfig;if(a){var s=a.questions;n.state=Object(o.a)({},f,{steps:s[s.length-1].step+1,count:s.length+1,wizardConfig:a})}return n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.wizardConfig.questions[this.state.step-1];return s.a.createElement(j,null,s.a.createElement("div",{className:"WizardApp"},this.state.step>1&&this.state.step<this.state.count&&s.a.createElement("div",{className:"WizardApp__button--back",onClick:this.goBack},"Back"),s.a.createElement("div",{className:"WizardApp__body"},0===this.state.step&&s.a.createElement(w,{onStart:this.startWizard}),0<this.state.step&&this.state.step<this.state.count&&s.a.createElement(O,{onNext:this.recordAnswerAndStep,question:e,history:this.state.history}),this.state.step===this.state.count&&s.a.createElement(N,{givenAnswers:this.state.givenAnswers})),s.a.createElement(h,{step:this.state.step,count:this.state.count})))}}]),t}(s.a.Component);i.a.render(s.a.createElement(A,{wizardConfig:{questions:[{text:"What the size of loan you want to get?",tip:"Depending on entered value next step will differ :)",step:1,answer:{min:1e3,max:3e4,prefix:"eur"}},{text:"Choose the term of loan?",step:2,depends:{step:1,condition:{min:15e3,renderIndex:5}},answers:["1 year","2 years","3 years","4 years","5 years","10 years","25 years","30 years"]},{text:"Payment frequency per year?",step:3,answers:["Every month","Every quarter","Every half year"]},{text:"Interest rate?",step:4,answer:{min:1,max:5,prefix:"%"}}]}}),document.getElementById("wizard"))}],[[12,1,2]]]);
//# sourceMappingURL=main.fce21965.chunk.js.map