(function(e){function t(t){for(var r,s,c=t[0],i=t[1],l=t[2],d=0,f=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"networkAddress",(function(){return R}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"\n    container\n    d-flex\n    flex-column\n    justify-content-center\n    align-items-center\n    mt-5\n  ",attrs:{id:"app"}},[n("h4",[e._v("Hier könnte Ihre Werbung stehen!")]),n("img",{staticClass:"mb-4",staticStyle:{"max-width":"400px"},attrs:{src:"img/employees.jpg"}}),e.offline?n("div",{staticClass:"alert alert-danger"},[e._v("You are offline...")]):e._e(),n("ButtonGet",{on:{get:e.fetchData}}),n("p",{staticClass:"mt-3 mb-1 text-center"},[e._v("Get the lastest news.")]),n("button",{staticClass:"btn btn-outline-success",on:{click:e.subscribe}},[e._v(" Subscribe ")]),n("CardView",{attrs:{serverAddress:e.serverAddress,employees:e.employees,offline:e.offline},on:{del:e.delEmployee}})],1)},a=[],s=n("b85c"),c=n("5530"),i=n("1da1"),l=(n("4de4"),n("d81d"),n("99af"),n("38cf"),n("ac1f"),n("5319"),n("d3b7"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"btn btn-outline-primary",on:{click:function(t){return e.$emit("get")}}},[e._v("Get Employees")])])}),u=[],d={},f=d,p=n("2877"),m=Object(p["a"])(f,l,u,!1,null,"d62479b4",null),b=m.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.employees.length>0,expression:"employees.length > 0"}]},[n("div",{staticClass:"row justify-content-center mt-4"},e._l(e.employees,(function(t){return n("div",{key:t.email,staticClass:"card p-2 m-2 bg-light",staticStyle:{width:"22rem"}},[n("img",{staticClass:"mx-auto d-block",attrs:{src:e.serverAddress+"/"+t.picture.large,alt:"picture of employee"}}),n("div",{staticClass:"mx-auto d-block mt-2"},[n("h4",[e._v(" Name: "+e._s(t.name.title)+" "+e._s(t.name.first)+" "+e._s(t.name.last)+" ")]),n("p",{staticClass:"card-text"},[e._v("Email: "+e._s(t.email))]),n("p",{staticClass:"card-text"},[e._v("Phone: "+e._s(t.phone))])]),e.offline?e._e():n("button",{staticClass:"btn btn-outline-danger mx-auto d-block mt-3",on:{click:function(n){return e.$emit("del",t)}}},[e._v(" Delete ")])])})),0)])])},h=[],g={props:{employees:{type:Array},serverAddress:{type:String},offline:{type:Boolean}}},y=g,w=(n("8049"),Object(p["a"])(y,v,h,!1,null,"c03fd726",null)),x=w.exports,k=n("bc3a"),O=n.n(k),_=n("1d25"),j={name:"app",components:{ButtonGet:b,CardView:x},data:function(){return{employees:[],serverAddress:"",offline:null,publicVapidKey:"BAwZYt_jEODmLm0STIcE_uc1ND_tYgSK91I4CbO6xX6GXNuNHqQCUNKmH0fFqqQVHM5JHlf-1Iwr6vyeZg88ZO8"}},created:function(){var e=this;document.addEventListener("swUpdated",this.updateAvailable,{once:!0}),window.addEventListener("online",(function(){return e.offline=!1})),window.addEventListener("offline",(function(){return e.offline=!0})),this.openDB()},methods:{openDB:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(_["a"])("employees",1,{upgrade:function(e){e.createObjectStore("employees",{keyPath:"id"})}});case 2:e.db=t.sent;case 3:case"end":return t.stop()}}),t)})))()},getStoredEmployees:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.db.getAll("employees");case 2:n=t.sent,e.employees=n.filter((function(e){return!e.isDeleted}));case 4:case"end":return t.stop()}}),t)})))()},getOnlineEmployees:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O()({url:"".concat(e.serverAddress,"/employees")});case 3:n=t.sent,r=n.data,e.employees=r.map((function(e){return Object(c["a"])(Object(c["a"])({},e),{},{isDeleted:!1})})),e.db.clear("employees"),o=Object(s["a"])(e.employees),t.prev=8,o.s();case 10:if((a=o.n()).done){t.next=16;break}return i=a.value,t.next=14,e.db.put("employees",i);case 14:t.next=10;break;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](8),o.e(t.t0);case 21:return t.prev=21,o.f(),t.finish(21);case 24:t.next=29;break;case 26:t.prev=26,t.t1=t["catch"](0),console.log(t.t1);case 29:case"end":return t.stop()}}),t,null,[[0,26],[8,18,21,24]])})))()},fetchData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.offline){t.next=5;break}return t.next=3,e.getStoredEmployees();case 3:t.next=7;break;case 5:return t.next=7,e.getOnlineEmployees();case 7:case"end":return t.stop()}}),t)})))()},delEmployee:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,O()({url:"".concat(t.serverAddress,"/employees/").concat(e.id),method:"DELETE"});case 2:t.fetchData(),console.log("delEmployee called");case 4:case"end":return n.stop()}}),n)})))()},updateAvailable:function(){confirm("New content is available!. Click OK to refresh")&&window.location.reload()},subscribe:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("serviceWorker"in navigator){t.next=3;break}return console.log("no service worker!"),t.abrupt("return");case 3:return t.next=5,navigator.serviceWorker.ready;case 5:return n=t.sent,t.next=8,n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:e.urlBase64ToUint8Array(e.publicVapidKey)});case 8:return r=t.sent,t.next=11,O.a.post("/subscribe",r);case 11:console.log("Subscription added.");case 12:case"end":return t.stop()}}),t)})))()},urlBase64ToUint8Array:function(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=window.atob(n),o=new Uint8Array(r.length),a=0;a<r.length;++a)o[a]=r.charCodeAt(a);return o}}},E=j,C=Object(p["a"])(E,o,a,!1,null,null,null),A=C.exports,S=n("9483");Object(S["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("ab8b");r["a"].config.productionTip=!1;var R="http://127.0.0.1:3000";new r["a"]({render:function(e){return e(A)}}).$mount("#app")},8049:function(e,t,n){"use strict";n("fb15")},fb15:function(e,t,n){}});