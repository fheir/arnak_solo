(this.webpackJsonparnaksolo=this.webpackJsonparnaksolo||[]).push([[0],{50:function(t,e,i){},51:function(t,e,i){},57:function(t,e,i){"use strict";i.r(e);var a=i(2),r=i(0),n=i.n(r),s=i(20),c=i.n(s),o=(i(50),i(15)),d=i(16),l=i(17),u=i(19),f=i(18),p=i.p+"static/media/back_right.5d7514db.png",h=i.p+"static/media/back_left.f9380e33.png",b=i.p+"static/media/basic_front_1.2fee07ec.png",j=i.p+"static/media/basic_front_2.c502fa87.png",v=i.p+"static/media/basic_front_3.794612d8.png",g=i.p+"static/media/basic_front_4.46b1bc0b.png",m=i.p+"static/media/basic_front_5.f420f6d7.png",O=i.p+"static/media/green_front_1.c70d1160.png",y=i.p+"static/media/green_front_2.96fdcca1.png",k=i.p+"static/media/green_front_3.66f05e8f.png",C=i.p+"static/media/green_front_4.b57910a3.png",x=i.p+"static/media/green_front_5.8f95a384.png",w=i.p+"static/media/red_front_1.f8058cf3.png",D=i.p+"static/media/red_front_2.b806a5a3.png",_=i.p+"static/media/red_front_3.7ed0661c.png",S=i.p+"static/media/red_front_4.4586df07.png",R=i.p+"static/media/red_front_5.ef415b43.png",I=i.p+"static/media/purple_front_1.b9b9da93.png",N=i.p+"static/media/purple_front_2.721046a8.png",M=i.p+"static/media/purple_front_3.d422f7b3.png",T=i.p+"static/media/purple_front_4.5d137886.png",B=i.p+"static/media/purple_front_5.d823700f.png",F=i.p+"static/media/objective_front_1.b636a3a6.png",L=i.p+"static/media/objective_front_2.9a6dd850.png",H=i.p+"static/media/objective_front_3.ebcc7853.png",z=i.p+"static/media/objective_front_4.9754c7d5.png",A=i.p+"static/media/objective_front_5.9387c67c.png",E=(i.p,i(51),i(58)),K=i(39),P=i(5),V=i(83),J=i(87),q=i(85),G=i(88),Q=i(84),U=i(86),W=i(90),X=i(89),Y=(i(52),[{id:1,front:b,back:p},{id:2,front:j,back:h},{id:3,front:v,back:p},{id:4,front:g,back:h},{id:5,front:m,back:p}]),Z=[{id:1,front:O,back:h,difficulty:0},{id:2,front:y,back:p,difficulty:0},{id:3,front:k,back:h,difficulty:0},{id:4,front:C,back:p,difficulty:0},{id:5,front:x,back:h,difficulty:0}],$=[{id:1,front:w,back:h,difficulty:1},{id:2,front:D,back:p,difficulty:1},{id:3,front:_,back:h,difficulty:1},{id:4,front:S,back:p,difficulty:1},{id:5,front:R,back:h,difficulty:1}],tt=[{id:1,front:I,back:h,difficulty:2},{id:2,front:N,back:p,difficulty:2},{id:3,front:M,back:h,difficulty:2},{id:4,front:T,back:p,difficulty:2},{id:5,front:B,back:h,difficulty:2}],et=[{id:1,front:F},{id:2,front:L},{id:3,front:H},{id:4,front:z},{id:5,front:A}],it=function(t){Object(u.a)(i,t);var e=Object(f.a)(i);function i(){return Object(d.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"componentDidMount",value:function(){document.title="Arnak Solo"}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"root-container",children:[Object(a.jsx)(E.a,{align:"center",variant:"h5",children:"Lost Ruins of Arnak Solo Helper"}),Object(a.jsx)(nt,{})]})}}]),i}(n.a.Component);function at(t){var e,i,a;for(a=t.length-1;a>0;a--)e=Math.floor(Math.random()*(a+1)),i=t[a],t[a]=t[e],t[e]=i;return t}var rt=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],a=!0,r=!1,n=void 0;try{for(var s,c=t[Symbol.iterator]();!(a=(s=c.next()).done)&&(i.push(s.value),!e||i.length!==e);a=!0);}catch(o){r=!0,n=o}finally{try{!a&&c.return&&c.return()}finally{if(r)throw n}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},nt=function(t){Object(u.a)(i,t);var e=Object(f.a)(i);function i(t){var a;return Object(d.a)(this,i),(a=e.call(this,t)).state={selectedDeck:[],cardsInDeck:[],cardsInDiscard:[],numberOfObjectives:3,selectedObjectives:[],difficulty:-1,deviceOrientation:"portrait",hasRedrawn:!1,roundNumber:1},a.changedOrientation=a.changedOrientation.bind(Object(o.a)(a)),a.onDifficultySelected=a.onDifficultySelected.bind(Object(o.a)(a)),a.onRedrawSelected=a.onRedrawSelected.bind(Object(o.a)(a)),a}return Object(l.a)(i,[{key:"changedOrientation",value:function(){var t="portrait",e=0;if(window.orientation&&(e=window.orientation,t=90===Math.abs(e)?"landscape":"portrait"),window.screen.orientation){var i=window.screen.orientation.type.split("-"),a=rt(i,2);t=a[0]}console.log(t),this.setState((function(){return{deviceOrientation:t}}))}},{key:"componentDidMount",value:function(){window.screen.orientation&&"onchange"in window.screen.orientation?(window.screen.orientation.addEventListener("change",this.changedOrientation),this.changedOrientation()):"onorientationchange"in window?(window.addEventListener("orientationchange",this.changedOrientation),this.changedOrientation()):console.warn("No orientationchange events")}},{key:"onDifficultySelected",value:function(t,e,i,a,r,n){var s,c=Y.slice();s=this.selectDifficultyCards([e,i,a]),c=at(c.concat(s)),n||(r=0);var o=n?this.selectObjectiveCards(r):[];this.setState((function(){return{selectedDeck:c.slice(),cardsInDeck:c.slice(),cardsInDiscard:[],selectedObjectives:o.slice(),difficulty:t,numberOfObjectives:r}}))}},{key:"selectDifficultyCards",value:function(t){for(var e=[],i=t[0],a=t[1],r=t[2],n=Z.slice(),s=$.slice(),c=tt.slice(),o=0,d=function(){l=Math.floor(Math.random()*n.length),h=n.splice(l,1),e.push(h[0]);var t=h[0].id;s=s.filter((function(e){return e.id!==t})),c=c.filter((function(e){return e.id!==t})),o++};o<i;){var l;d()}o=0;for(var u=function(){f=Math.floor(Math.random()*s.length),h=s.splice(f,1),e.push(h[0]);var t=h[0].id;c=c.filter((function(e){return e.id!==t})),o++};o<a;){var f;u()}for(o=0;o<r;){var p=Math.floor(Math.random()*c.length),h=c.splice(p,1);e.push(h[0]),o++}return console.log(e),e}},{key:"selectObjectiveCards",value:function(t){var e=at(et.slice());return e.splice(0,5-t),e}},{key:"onRedrawSelected",value:function(t){var e=this.state.selectedObjectives.map((function(t){return t.id})),i=et.filter((function(t){return!e.includes(t.id)})),a=Math.floor(Math.random()*i.length),r=this.state.selectedObjectives.slice();r[t]=i[a],this.setState((function(){return{selectedObjectives:r,hasRedrawn:!0}}))}},{key:"handleDrawCard",value:function(){var t=[],e=[];if(this.state.cardsInDeck.length>0)t=this.state.cardsInDeck.slice(),(e=this.state.cardsInDiscard.slice()).push(t.splice(t.length-1,1)[0]),this.setState((function(){return{cardsInDeck:t,cardsInDiscard:e}}));else{t=at(this.state.selectedDeck.slice()),e=[];var i=this.selectObjectiveCards(this.state.numberOfObjectives),a=this.state.roundNumber+1;this.setState((function(){return{selectedObjectives:i,cardsInDeck:t,cardsInDiscard:e,hasRedrawn:!1,roundNumber:a}}))}}},{key:"render",value:function(){var t,e,i,r=this,n=this.state.difficulty<0,s=this.state.numberOfObjectives>0?"":"-noobj",c="draw-pile-"+this.state.deviceOrientation+s;n?t=Object(a.jsx)(lt,{orientation:this.state.deviceOrientation,onClick:this.onDifficultySelected}):(e=Object(a.jsx)(ut,{orientation:this.state.deviceOrientation,cards:this.state.cardsInDeck,discard:this.state.cardsInDiscard,name:c,canDraw:!0,drawIndex:this.state.cardsInDeck.length>0?this.state.cardsInDeck.length-1:0,discardIndex:this.state.cardsInDiscard.length>0?this.state.cardsInDiscard.length-1:0,onClick:function(){return r.handleDrawCard()}}),i=Object(a.jsx)(ft,{round:this.state.roundNumber,playerHasRedrawn:this.state.hasRedrawn,cardsDrawnByRival:this.state.cardsInDiscard.length,orientation:this.state.deviceOrientation,cards:this.state.selectedObjectives,onRedrawObjective:this.onRedrawSelected}));var o="cards-container-"+this.state.deviceOrientation;return Object(a.jsxs)("div",{className:o,children:[t,i,e]})}}]),i}(n.a.Component),st=Object(K.a)({typography:{subtitle1:{fontSize:20}}}),ct=Object(P.a)({root:{color:"#6b9c3a",height:3,marginBottom:20}})(J.a),ot=Object(P.a)({root:{color:"#ad1018",height:3,marginBottom:20}})(J.a),dt=Object(P.a)({root:{color:"#63298b",height:3,marginBottom:20}})(J.a),lt=function(t){Object(u.a)(i,t);var e=Object(f.a)(i);function i(t){var a;return Object(d.a)(this,i),(a=e.call(this,t)).state={difficultyText:"Difficulty Level: 0",difficulty:0,numObjectives:3,objectivesOn:!0,greenCards:0,redCards:0,purpleCards:0},a.toggleObjectives=a.toggleObjectives.bind(Object(o.a)(a)),a}return Object(l.a)(i,[{key:"friendlyDifficultyString",value:function(t,e){var i=1*this.state.redCards+2*this.state.purpleCards;return"red"===t?i=1*e+2*this.state.purpleCards:"purple"===t&&(i=1*this.state.redCards+2*e),"Difficulty Level: "+i}},{key:"toggleObjectives",value:function(){var t=!this.state.objectivesOn;console.log("toggle"),this.setState((function(){return{objectivesOn:t}}))}},{key:"getMarksForSlider",value:function(t,e){var i,a=5-(this.state.greenCards+this.state.redCards+this.state.purpleCards);"green"===t?(i=this.state.greenCards+a,console.log(t+" "+i)):"red"===t?(i=this.state.redCards+a,console.log(t+" "+i)):"purple"===t&&(i=this.state.purpleCards+a,console.log(t+" "+i));for(var r=[],n=0;n<=i;n++)r.push({value:n,label:n});return r}},{key:"hasSelectedFiveCards",value:function(){return this.state.greenCards+this.state.redCards+this.state.purpleCards==5}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{className:"difficulty-container",children:[Object(a.jsxs)(E.a,{id:"discrete-slider",gutterBottom:!0,children:["Select ",Object(a.jsx)("b",{children:"5"})," Rival Action Cards"]}),Object(a.jsx)(V.a,{theme:st,children:Object(a.jsx)(E.a,{variant:"subtitle1",align:"center",className:"difficulty-text",children:this.state.difficultyText})}),Object(a.jsx)("div",{className:"slider-container",children:Object(a.jsx)(ct,{className:"slider-component",defaultValue:0,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",marks:this.getMarksForSlider("green",this.state.greenCards),step:null,min:0,max:5,onChange:function(e,i){return t.setState((function(){return{difficultyText:t.friendlyDifficultyString("green",i),greenCards:i}}))},onChangeCommitted:function(e,i){return t.setState((function(){return{difficultyText:t.friendlyDifficultyString("green",i),greenCards:i}}))}})}),Object(a.jsx)("div",{className:"slider-container",children:Object(a.jsx)(ot,{className:"slider-component",defaultValue:0,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",marks:this.getMarksForSlider("red",this.state.redCards),step:null,min:0,max:5,onChange:function(e,i){return t.setState((function(){return{difficultyText:t.friendlyDifficultyString("red",i),redCards:i}}))},onChangeCommitted:function(e,i){return t.setState((function(){return{difficultyText:t.friendlyDifficultyString("red",i),redCards:i}}))}})}),Object(a.jsx)("div",{className:"slider-container",children:Object(a.jsx)(dt,{className:"slider-component",defaultValue:0,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",marks:this.getMarksForSlider("purple",this.state.purpleCards),step:null,min:0,max:5,onChange:function(e,i){return t.setState((function(){return{difficultyText:t.friendlyDifficultyString("purple",i),purpleCards:i}}))},onChangeCommitted:function(e,i){return t.setState((function(){return{difficultyText:t.friendlyDifficultyString("purple",i),purpleCards:i}}))}})}),Object(a.jsx)(Q.a,{control:Object(a.jsx)(G.a,{checked:this.state.objectivesOn,onChange:this.toggleObjectives,color:"primary"}),label:"Select Number of Objectives"}),Object(a.jsx)("div",{className:"objectives-slider-container",children:Object(a.jsx)(J.a,{className:"objectives-slider-container",defaultValue:3,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",marks:!0,step:1,min:2,max:4,disabled:!this.state.objectivesOn,onChange:function(e,i){return t.setState((function(){return{numObjectives:i}}))},onChangeCommitted:function(e,i){return t.setState((function(){return{numObjectives:i}}))}})}),Object(a.jsx)(q.a,{variant:"contained",disabled:!this.hasSelectedFiveCards(),color:"primary",onClick:function(){return t.props.onClick(t.state.difficulty,t.state.greenCards,t.state.redCards,t.state.purpleCards,t.state.numObjectives,t.state.objectivesOn)},children:"Start"})]})}}]),i}(n.a.Component),ut=function(t){Object(u.a)(i,t);var e=Object(f.a)(i);function i(t){return Object(d.a)(this,i),e.call(this,t)}return Object(l.a)(i,[{key:"render",value:function(){var t,e,i,r,n=this,s=this.props.cards.length<=0,c="Draw-"+this.props.orientation,o="Discard-"+this.props.orientation,d="Tiebreaker-"+this.props.orientation;return this.props.cards[this.props.drawIndex]&&(t=Object(a.jsx)("img",{className:c,src:this.props.cards[this.props.drawIndex].back}),r="Cards Left: "+this.props.cards.length),this.props.discard[this.props.discardIndex]&&(s&&(i=Object(a.jsx)("img",{className:d,src:this.props.discard[0].back}),r="Deck empty: Tiebreaker shown"),e=Object(a.jsx)("img",{className:o,src:this.props.discard[this.props.discardIndex].front})),Object(a.jsxs)("div",{className:this.props.name,children:[t,i,e,Object(a.jsxs)("div",{children:[Object(a.jsx)(E.a,{variant:"h5",children:r}),this.props.canDraw?Object(a.jsx)(q.a,{variant:"contained",color:"primary",onClick:function(){return n.props.onClick()},children:this.props.cards.length>0?"Draw":"Next Round"}):null]})]})}}]),i}(n.a.Component),ft=function(t){Object(u.a)(i,t);var e=Object(f.a)(i);function i(t){return Object(d.a)(this,i),e.call(this,t)}return Object(l.a)(i,[{key:"render",value:function(){for(var t="Objectives-Container-"+this.props.orientation,e=[],i=this.props.cards.length*(this.props.round-1),r=0;r<this.props.cards.length;r++)e.push(Object(a.jsx)(ht,{playerHasRedrawn:this.props.playerHasRedrawn,cardsDrawnByRival:this.props.cardsDrawnByRival,redrawHandler:this.props.onRedrawObjective,isFirst:0===r,cardKey:r,orientation:this.props.orientation,card:this.props.cards[r]?this.props.cards[r].front:null},r+1+i));return Object(a.jsx)("div",{className:t,children:e})}}]),i}(n.a.Component),pt=Object.freeze({Incomplete:0,Rival:1,Player:2}),ht=function(t){Object(u.a)(i,t);var e=Object(f.a)(i);function i(t){var a;return Object(d.a)(this,i),(a=e.call(this,t)).state={objectiveStatus:pt.Incomplete},a.handleRadioChange=a.handleRadioChange.bind(Object(o.a)(a)),a}return Object(l.a)(i,[{key:"handleRadioChange",value:function(t){console.log(this.state.objectiveStatus);var e=t.target.value;console.log(e),this.setState((function(){return{objectiveStatus:e}}))}},{key:"render",value:function(){var t=this;console.log(this.props.cardKey);var e="Objectives-"+this.props.orientation,i="ObjectiveCardHolder-"+this.props.orientation,r=this.props.isFirst?i+"-first":i,n=0==this.state.objectiveStatus?null:{opacity:"0.4"},s=null;return this.props.playerHasRedrawn||1!==this.props.cardsDrawnByRival?this.props.cardsDrawnByRival>=1&&(s=Object(a.jsx)(X.a,{component:"fieldset",children:Object(a.jsxs)(W.a,{value:this.state.objectiveStatus,onChange:this.handleRadioChange,children:[Object(a.jsx)(Q.a,{value:"1",control:Object(a.jsx)(U.a,{color:"primary",size:"small"}),label:"Rival"},"1"),Object(a.jsx)(Q.a,{value:"2",control:Object(a.jsx)(U.a,{color:"primary",size:"small"}),label:"Player"},"2")]})})):s=Object(a.jsx)(q.a,{className:"Redraw-Button",size:"small",variant:"contained",color:"primary",onClick:function(){return t.props.redrawHandler(t.props.cardKey)},children:"Redraw"}),Object(a.jsxs)("div",{className:r,children:[Object(a.jsx)("img",{style:n,className:e,src:this.props.card},this.props.cardKey),s]})}}]),i}(n.a.Component),bt=it,jt=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,91)).then((function(e){var i=e.getCLS,a=e.getFID,r=e.getFCP,n=e.getLCP,s=e.getTTFB;i(t),a(t),r(t),n(t),s(t)}))};c.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(bt,{})}),document.getElementById("root")),jt()}},[[57,1,2]]]);
//# sourceMappingURL=main.0f3dbbef.chunk.js.map