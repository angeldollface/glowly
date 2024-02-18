(()=>{"use strict";var e={822:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var a=o(296),r=o(786),n=o(8894),i=o(6665),l=o(6725),d=o(1672),s=o(6283),u=o(3929),f=o(3668),c=o(397);const g=function(e){e.navigation;var t=(0,d.useRoute)(),n=(0,r.useFonts)({PSB:o(5627),Axeon:o(8087),DotMatrix:o(6778),Lobster:o(1760),LSD2:o(3361),MC:o(6664),Pacman:o(8832)}),i=((0,a.default)(n,1)[0],t.params.backGroundColor),g=t.params.boxColor,h=t.params.borderColor,x=t.params.fontColor,p=t.params.font,F=t.params.message,b=l.default.get("window").height;console.log(i);var m=f.default.create({container:{width:"100%",height:"100%",backgroundColor:i,padding:0,margin:0,left:0,right:0,bottom:0,top:0},box:{height:"65",backgroundColor:g,borderColor:h,borderWidth:2,padding:0,marginTop:.25*b,marginBottom:0,marginLeft:"10%",marginRight:"10%",borderRadius:5},text:{textAlign:"center",fontSize:25,padding:20,color:x,fontFamily:p}});return(0,c.jsx)(u.default,{style:m.container,children:(0,c.jsx)(u.default,{style:m.box,children:(0,c.jsx)(s.default,{style:m.text,children:F})})})};const h=function(e){var t=e.text,n=(0,r.useFonts)({PSB:o(5627)}),i=((0,a.default)(n,1)[0],f.default.create({text:{color:"#000000",fontSize:15,paddingTop:0,paddingBottom:5,paddingLeft:0,paddingRight:0,fontFamily:"PSB",margin:0,textAlign:"left"}}));return(0,c.jsx)(s.default,{style:i.text,children:t})};const x=function(e){var t=e.height,o=l.default.get("window").height,a=f.default.create({spacer:{width:"100%",backgroundColor:"transparent",height:o*parseFloat(t)}});return(0,c.jsx)(u.default,{style:a.spacer})};var p=o(5356);const F=function(e){var t=e.onPress,n=e.title,i=(0,r.useFonts)({PSB:o(5627)}),l=((0,a.default)(i,1)[0],f.default.create({actionButton:{width:"100%",height:65,backgroundColor:"#FFFFFF",padding:20,position:"absolute",bottom:0,margin:0},text:{color:"#000000",fontSize:25,padding:0,fontFamily:"PSB",margin:0,textAlign:"center"}}));return(0,c.jsx)(p.default,{onPress:t,style:l.actionButton,children:(0,c.jsx)(s.default,{style:l.text,children:n})})};var b=o(6773);const m=function(e){var t=e.onChange,n=e.value,i=(0,r.useFonts)({PSB:o(5627)}),l=((0,a.default)(i,1)[0],f.default.create({inputHandler:{borderColor:"#FFFFFF",borderWidth:2,textAlign:"center",backgroundColor:"#FFFFFF",fontSize:25,fontFamily:"PSB",borderColor:"#000000",color:"#000000",borderRadius:5,margin:0,padding:10}}));return(0,c.jsx)(b.default,{editable:!0,multiline:!1,numberOfLines:1,maxLength:200,onChangeText:t,value:n,style:l.inputHandler})};var j=o(4701),v=o(5662);const C=function(e){var t=e.navigation,n=(0,r.useFonts)({PSB:o(5627)}),l=((0,a.default)(n,1)[0],i.useState("#FFFFFF")),d=(0,a.default)(l,2),s=d[0],g=d[1],p=i.useState("Hello World!"),b=(0,a.default)(p,2),C=b[0],S=b[1],y=i.useState("PSB"),w=(0,a.default)(y,2),B=w[0],P=w[1],k=i.useState("#000000"),O=(0,a.default)(k,2),T=O[0],R=O[1],L=i.useState("#000000"),M=(0,a.default)(L,2),A=M[0],z=M[1],D=i.useState("false"),W=(0,a.default)(D,2),E=W[0],_=W[1],H=i.useState("#FFFFFF"),G=(0,a.default)(H,2),N=G[0],V=G[1],q=f.default.create({container:{width:"100%"},scrollView:{width:"100%",height:"100%",backgroundColor:"#FF7BAC"},infoContainer:{width:"80%",padding:0,marginLeft:"10%",marginRight:"10%",marginTop:"5%"},buttonContainer:{bottom:0,flex:1,width:"100%",margin:0,padding:0}});return(0,c.jsx)(j.default,{style:q.container,children:(0,c.jsxs)(v.default,{style:q.scrollView,children:[(0,c.jsxs)(u.default,{style:q.infoContainer,children:[(0,c.jsx)(h,{text:"Background Color"}),(0,c.jsx)(m,{onChange:g,value:s}),(0,c.jsx)(x,{height:"0.05"}),(0,c.jsx)(h,{text:"Message"}),(0,c.jsx)(m,{onChange:S,value:C}),(0,c.jsx)(x,{height:"0.05"}),(0,c.jsx)(h,{text:"Font Family"}),(0,c.jsx)(m,{onChange:P,value:B}),(0,c.jsx)(x,{height:"0.05"}),(0,c.jsx)(h,{text:"Border Color"}),(0,c.jsx)(m,{onChange:R,value:T}),(0,c.jsx)(x,{height:"0.05"}),(0,c.jsx)(h,{text:"Font Color"}),(0,c.jsx)(m,{onChange:z,value:A}),(0,c.jsx)(x,{height:"0.05"}),(0,c.jsx)(h,{text:"Enable Border"}),(0,c.jsx)(m,{onChange:_,value:E}),(0,c.jsx)(x,{height:"0.05"}),(0,c.jsx)(h,{text:"Box Background Color"}),(0,c.jsx)(m,{onChange:V,value:N})]}),(0,c.jsx)(x,{height:"0.05"}),(0,c.jsxs)(u.default,{style:q.buttonContainer,children:[(0,c.jsx)(x,{height:"0.1"}),(0,c.jsx)(F,{onPress:function(){t.navigate("Renderer",{backGroundColor:s,message:C,font:B,borderColor:T,fontColor:A,hasBorder:E,boxColor:N})},title:"RENDER"})]})]})})};var S=o(6520),y=(0,o(1594).default)();function w(){var e=(0,r.useFonts)({PSB:o(5627)});(0,a.default)(e,1)[0];return(0,c.jsx)(S.default,{children:(0,c.jsxs)(y.Navigator,{children:[(0,c.jsx)(y.Screen,{name:"Settings",component:C,options:{title:"Settings",headerStyle:{backgroundColor:"#FFFFF"},headerTintColor:"#FFFFFF",headerTitleStyle:{fontWeight:"bold",color:"#000000",fontFamily:"PSB",fontSize:25}}}),(0,c.jsx)(y.Screen,{name:"Renderer",component:g,options:{title:"Settings",headerStyle:{backgroundColor:"#FFFFFF"},headerTintColor:"#000000",headerTitleStyle:{fontWeight:"bold",color:"#000000",fontFamily:"PSB",fontSize:25}}})]})})}(0,n.default)(w)},8087:(e,t,o)=>{e.exports=o.p+"static/media/Axeon.6e64f7e4d3a0c9131d26.ttf"},6778:(e,t,o)=>{e.exports=o.p+"static/media/DotMatrix.9a451f682aca63da0ff1.ttf"},3361:(e,t,o)=>{e.exports=o.p+"static/media/LSD2.c0cf96e82e5f323b843a.ttf"},1760:(e,t,o)=>{e.exports=o.p+"static/media/Lobster.9535d77ef867bef91bc5.ttf"},6664:(e,t,o)=>{e.exports=o.p+"static/media/MC.9f40becc41aadbd2ba2d.ttf"},5627:(e,t,o)=>{e.exports=o.p+"static/media/PSB.53df38d5491afbeb42a5.ttf"},8832:(e,t,o)=>{e.exports=o.p+"static/media/Pacman.00d715146e777174376c.ttf"}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,o),n.exports}o.m=e,(()=>{var e=[];o.O=(t,a,r,n)=>{if(!a){var i=1/0;for(u=0;u<e.length;u++){for(var[a,r,n]=e[u],l=!0,d=0;d<a.length;d++)(!1&n||i>=n)&&Object.keys(o.O).every((e=>o.O[e](a[d])))?a.splice(d--,1):(l=!1,n<i&&(i=n));if(l){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,r,n]}})(),o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/glowly/",(()=>{var e={792:0};o.O.j=t=>0===e[t];var t=(t,a)=>{var r,n,[i,l,d]=a,s=0;if(i.some((t=>0!==e[t]))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(d)var u=d(o)}for(t&&t(a);s<i.length;s++)n=i[s],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},a=self.webpackChunkweb=self.webpackChunkweb||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=o.O(void 0,[651],(()=>o(822)));a=o.O(a)})();
//# sourceMappingURL=main.73d53b52.js.map