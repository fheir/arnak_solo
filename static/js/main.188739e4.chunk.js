(this.webpackJsonparnaksolo=this.webpackJsonparnaksolo||[]).push([[0],{38:function(t,i,e){},39:function(t,i,e){},44:function(t,i,e){"use strict";e.r(i);var c=e(4),a=e(0),n=e.n(a),r=e(13),s=e.n(r),d=(e(38),e(20)),f=e(24),o=e(25),l=e(27),u=e(26),p=e.p+"static/media/back_right.5d7514db.png",b=e.p+"static/media/back_left.f9380e33.png",h=e.p+"static/media/basic_front_1.2fee07ec.png",j=e.p+"static/media/basic_front_2.c502fa87.png",g=e.p+"static/media/basic_front_3.794612d8.png",m=e.p+"static/media/basic_front_4.46b1bc0b.png",k=e.p+"static/media/basic_front_5.f420f6d7.png",y=e.p+"static/media/green_front_1.c70d1160.png",_=e.p+"static/media/green_front_2.96fdcca1.png",D=e.p+"static/media/green_front_3.66f05e8f.png",O=e.p+"static/media/green_front_4.b57910a3.png",v=e.p+"static/media/green_front_5.8f95a384.png",x=e.p+"static/media/red_front_1.f8058cf3.png",C=e.p+"static/media/red_front_2.b806a5a3.png",I=e.p+"static/media/red_front_3.7ed0661c.png",w=e.p+"static/media/red_front_4.4586df07.png",S=e.p+"static/media/red_front_5.ef415b43.png",N=e.p+"static/media/purple_front_1.b9b9da93.png",M=e.p+"static/media/purple_front_2.721046a8.png",T=e.p+"static/media/purple_front_3.d422f7b3.png",F=e.p+"static/media/purple_front_4.5d137886.png",L=e.p+"static/media/purple_front_5.d823700f.png",B=(e(39),e(61)),P=e(63),J=e(65),R=e(64),A=[{id:1,front:h,back:p},{id:2,front:j,back:b},{id:3,front:g,back:p},{id:4,front:m,back:b},{id:5,front:k,back:p}],E=[{id:1,front:y,back:b,difficulty:0},{id:2,front:_,back:p,difficulty:0},{id:3,front:D,back:b,difficulty:0},{id:4,front:O,back:p,difficulty:0},{id:5,front:v,back:b,difficulty:0}],H=[{id:1,front:x,back:b,difficulty:1},{id:2,front:C,back:p,difficulty:1},{id:3,front:I,back:b,difficulty:1},{id:4,front:w,back:p,difficulty:1},{id:5,front:S,back:b,difficulty:1}],V=[{id:1,front:N,back:b,difficulty:2},{id:2,front:M,back:p,difficulty:2},{id:3,front:T,back:b,difficulty:2},{id:4,front:F,back:p,difficulty:2},{id:5,front:L,back:b,difficulty:2}];Object(B.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function q(t){var i,e,c;for(c=t.length-1;c>0;c--)i=Math.floor(Math.random()*(c+1)),e=t[c],t[c]=t[i],t[i]=e;return t}var z=function(t){Object(l.a)(e,t);var i=Object(u.a)(e);function e(t){var c;return Object(f.a)(this,e),(c=i.call(this,t)).state={difficultyText:"5 Purple 5 Red Cards",difficulty:0},c}return Object(o.a)(e,[{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:"difficulty-container",children:[Object(c.jsx)(P.a,{id:"discrete-slider",gutterBottom:!0,children:"Select Difficulty"}),Object(c.jsxs)("div",{className:"slider-container",children:[Object(c.jsxs)(P.a,{className:"difficulty-text",children:[this.state.difficulty," ",this.state.difficultyText]}),Object(c.jsx)(J.a,{className:"slider-component",defaultValue:0,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,min:0,max:10,onChange:function(i,e){return t.setState((function(){return{difficultyText:"Hello",difficulty:e}}))}})]}),Object(c.jsx)(R.a,{variant:"contained",color:"primary",onClick:function(){return t.props.onClick(t.state.difficulty)},children:"Start"})]})}}]),e}(n.a.Component),G=function(t){Object(l.a)(e,t);var i=Object(u.a)(e);function e(t){var c;return Object(f.a)(this,e),(c=i.call(this,t)).state={cardsInDeck:[],cardsInDiscard:[],difficulty:-1},c.onDifficultySelected=c.onDifficultySelected.bind(Object(d.a)(c)),c}return Object(o.a)(e,[{key:"onDifficultySelected",value:function(t){var i=A.slice();if(t%5==0)0==t?i=q(i.concat(E)):5==t?i=q(i.concat(H)):10==t&&(i=q(i.concat(V)));else{var e=[];t<5?e=this.selectDifficultyCards(t,E.slice(),H.slice()):t>5&&(e=this.selectDifficultyCards(t%5,H.slice(),V.slice())),i=q(i.concat(e))}this.setState((function(){return{cardsInDeck:i,cardsInDiscard:[],difficulty:t}}))}},{key:"selectDifficultyCards",value:function(t,i,e){for(var c=[],a=1;a<=t;){var n=Math.floor(Math.random()*e.length),r=e.splice(n,1);console.log(r[0]),c.push(r[0]);var s=Math.floor(Math.random()*i.length);i.splice(s,1),a++}return console.log(i),c=c.concat(i)}},{key:"handleDrawCard",value:function(){var t=this.state.cardsInDeck.slice(),i=this.state.cardsInDiscard.slice();i.push(t.splice(t.length-1,1)[0]),this.setState((function(){return{cardsInDeck:t,cardsInDiscard:i}}))}},{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:"cards-container",children:[Object(c.jsx)(z,{onClick:this.onDifficultySelected}),Object(c.jsx)(K,{cards:this.state.cardsInDeck,name:"draw-pile",canDraw:this.state.cardsInDeck.length>0,index:this.state.cardsInDeck.length>0?this.state.cardsInDeck.length-1:0,onClick:function(){return t.handleDrawCard()}}),Object(c.jsx)(K,{cards:this.state.cardsInDiscard,name:"discard-pile",canDraw:!1,index:this.state.cardsInDiscard.length>0?this.state.cardsInDiscard.length-1:0})]})}}]),e}(n.a.Component),K=function(t){Object(l.a)(e,t);var i=Object(u.a)(e);function e(t){return Object(f.a)(this,e),i.call(this,t)}return Object(o.a)(e,[{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:this.props.name,children:[Object(c.jsx)("img",{className:"Draw",src:this.props.cards[this.props.index]?this.props.canDraw?this.props.cards[this.props.index].back:this.props.cards[this.props.index].front:null}),Object(c.jsx)("h1",{children:this.props.cards.length}),this.props.canDraw?Object(c.jsx)(R.a,{variant:"contained",color:"primary",onClick:function(){return t.props.onClick()},children:"Draw"}):null]})}}]),e}(n.a.Component),Q=function(t){return Object(c.jsxs)("div",{className:"root-container",children:[Object(c.jsx)("h1",{children:"Lost Ruins of Arnak"}),Object(c.jsx)(G,{})]})},U=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,67)).then((function(i){var e=i.getCLS,c=i.getFID,a=i.getFCP,n=i.getLCP,r=i.getTTFB;e(t),c(t),a(t),n(t),r(t)}))};s.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(Q,{})}),document.getElementById("root")),U()}},[[44,1,2]]]);
//# sourceMappingURL=main.188739e4.chunk.js.map