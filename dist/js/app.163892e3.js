(function(e){function n(n){for(var r,a,u=n[0],c=n[1],s=n[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(n);while(p.length)p.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,u=1;u<t.length;u++){var c=t[u];0!==o[c]&&(r=!1)}r&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},i=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var d=c;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"3e8e":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r,o,i,a=t("2b0e"),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],s=(t("5c0b"),t("2877")),d={},l=Object(s["a"])(d,u,c,!1,null,null,null),p=l.exports,f=t("8c4f"),h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"home"}})},v=[],w=t("5a89"),m=t("6397"),b=t.n(m),g=(t("53f9"),t("bd2e")),y=t.n(g),P={name:"home",data:function(){return{publicPath:"/"}},components:{},mounted:function(){this.init()},methods:{init:function(){r=new w["Scene"],r.background=new w["Color"](13421772),o=new w["PerspectiveCamera"](45,window.innerWidth/window.innerHeight,1,5e3),o.rotation.y=.25*Math.PI,o.position.x=800,o.position.y=100,o.position.z=1e3;var e=new w["HemisphereLight"](14544639,986637,5);r.add(e);var n=new w["DirectionalLight"](16777215,100);n.position.set(0,1,0),n.castShadow=!0,r.add(n);var t=new w["PointLight"](12895428,30);t.position.set(0,300,500),r.add(t);var a=new w["PointLight"](12895428,30);a.position.set(500,100,0),r.add(a);var u=new w["PointLight"](12895428,30);u.position.set(0,100,-500),r.add(u);var c=new w["PointLight"](12895428,30);c.position.set(-500,300,0),r.add(c),i=new w["WebGLRenderer"],i.setSize(window.innerWidth,window.innerHeight),document.getElementById("home").appendChild(i.domElement);var s=new y.a;s.load("".concat(this.publicPath,"model/car/scene.gltf"),function(e){var n=e.scene.children[0];n.scale.set(.4,.4,.4),r.add(e.scene)});var d=new b.a(o),l=function e(){i.render(r,o),d.update(),requestAnimationFrame(e)};l()}}},O=P,j=Object(s["a"])(O,h,v,!1,null,"1a4480c0",null),_=j.exports;a["a"].use(f["a"]);var x=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:_}]}),S=t("2f62");a["a"].use(S["a"]);var L=new S["a"].Store({state:{},mutations:{},actions:{}});t("3e8e");a["a"].config.productionTip=!1,new a["a"]({router:x,store:L,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("e332"),o=t.n(r);o.a},e332:function(e,n,t){}});
//# sourceMappingURL=app.163892e3.js.map