(this.webpackJsonparnaksolo=this.webpackJsonparnaksolo||[]).push([[0],{13:function(t,a,n){},14:function(t,a,n){},15:function(t,a,n){"use strict";n.r(a);var c=n(0),s=n(1),e=n.n(s),i=n(7),r=n.n(i),d=(n(13),n(2)),o=n(3),p=n(5),h=n(4),b=n.p+"static/media/back_basic_1.7c0b4ab0.png",l=n.p+"static/media/back_basic_2.d25adc44.png",u=n.p+"static/media/back_basic_3.543231fa.png",f=n.p+"static/media/back_basic_4.3170a442.png",j=n.p+"static/media/back_basic_5.93b07908.png",k=n.p+"static/media/basic_front_1.2fee07ec.png",g=n.p+"static/media/basic_front_2.c502fa87.png",m=n.p+"static/media/basic_front_3.794612d8.png",D=n.p+"static/media/basic_front_4.46b1bc0b.png",O=n.p+"static/media/basic_front_5.f420f6d7.png",_=(n(14),[{id:1,front:k,back:b},{id:2,front:g,back:l},{id:3,front:m,back:u},{id:4,front:D,back:f},{id:5,front:O,back:j}]);function x(t){var a,n,c;for(c=t.length-1;c>0;c--)a=Math.floor(Math.random()*(c+1)),n=t[c],t[c]=t[a],t[a]=n;return t}e.a.Component;var v=function(t){Object(p.a)(n,t);var a=Object(h.a)(n);function n(t){var c;return Object(d.a)(this,n),(c=a.call(this,t)).state={cardsInDeck:x(_.slice()),cardsInDiscard:[]},c}return Object(o.a)(n,[{key:"handleDrawCard",value:function(){var t=this.state.cardsInDeck.slice(),a=this.state.cardsInDiscard.slice();a.push(t.splice(t.length-1,1)[0]),this.setState((function(){return{cardsInDeck:t,cardsInDiscard:a}}))}},{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:"cards-container",children:[Object(c.jsx)(I,{cards:this.state.cardsInDeck,name:"draw-pile",canDraw:this.state.cardsInDeck.length>0,index:this.state.cardsInDeck.length>0?this.state.cardsInDeck.length-1:0,onClick:function(){return t.handleDrawCard()}}),Object(c.jsx)(I,{cards:this.state.cardsInDiscard,name:"discard-pile",canDraw:!1,index:this.state.cardsInDiscard.length>0?this.state.cardsInDiscard.length-1:0})]})}}]),n}(e.a.Component),I=function(t){Object(p.a)(n,t);var a=Object(h.a)(n);function n(t){return Object(d.a)(this,n),a.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:this.props.name,children:[console.log(this.props.cards),Object(c.jsx)("img",{className:"Draw",src:this.props.cards[this.props.index]?this.props.canDraw?this.props.cards[this.props.index].back:this.props.cards[this.props.index].front:null}),Object(c.jsx)("h1",{children:this.props.cards.length}),this.props.canDraw?Object(c.jsx)("button",{onClick:function(){return t.props.onClick()},children:"Draw"}):null]})}}]),n}(e.a.Component),w=function(t){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h1",{children:["Hello World! ",t.name]}),Object(c.jsx)(v,{})]})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(a){var n=a.getCLS,c=a.getFID,s=a.getFCP,e=a.getLCP,i=a.getTTFB;n(t),c(t),s(t),e(t),i(t)}))};r.a.render(Object(c.jsx)(e.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),C()}},[[15,1,2]]]);
//# sourceMappingURL=main.d205d41e.chunk.js.map