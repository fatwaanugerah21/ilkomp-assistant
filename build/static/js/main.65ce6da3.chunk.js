(this["webpackJsonpilkomp-assistant"]=this["webpackJsonpilkomp-assistant"]||[]).push([[0],{189:function(e,a,t){},190:function(e,a,t){},195:function(e,a,t){},196:function(e,a,t){},197:function(e,a,t){},198:function(e,a,t){},199:function(e,a,t){},200:function(e,a,t){},203:function(e,a,t){},204:function(e,a,t){},225:function(e,a,t){},226:function(e,a,t){},227:function(e,a,t){},228:function(e,a,t){},229:function(e,a,t){},230:function(e,a,t){},231:function(e,a,t){},400:function(e,a,t){},401:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(74),l=t.n(c),i=(t(189),t(112)),o=t(39),m=t(10),s=(t(190),t.p+"static/media/burger-icon.d17fc4d9.svg"),u=t.p+"static/media/CloseIcon.c4abb3db.svg",d=function(){var e=function(){document.getElementById("navigation-list").classList.remove("active")};return r.a.createElement("div",{className:"second-background-color"},r.a.createElement("nav",{className:"nav-wrapper"},r.a.createElement(m.b,{to:"/"},r.a.createElement("img",{className:"ilkomp-assistant-logo",src:"favicon.svg",alt:"ilkomp-logo",height:"65"})),r.a.createElement("img",{onClick:function(){document.getElementById("navigation-list").classList.add("active")},src:s,alt:"mantul",id:"burger-icon",className:"burger-menu"}),r.a.createElement("ul",{id:"navigation-list",className:"nav-row hide-on-mobile"},r.a.createElement("img",{className:"close-side-nav",onClick:e,src:u,alt:"cancel-icon",height:"40"}),r.a.createElement(m.b,{to:"/learn"},r.a.createElement("li",{className:"nav-item nav-item1",onClick:e},"Learn")),r.a.createElement(m.b,{to:"/project"},r.a.createElement("li",{className:"nav-item nav-item2",onClick:e},"Proyek")),r.a.createElement(m.b,{to:"/contact-us"},r.a.createElement("li",{className:"nav-item nav-item3",onClick:e},"Contact Us")))))},E=t.p+"static/media/Group 2.5a68d7e0.svg",f=(t(195),t.p+"static/media/alAlam.279bab87.jpg"),p=(t(196),function(){return r.a.createElement("div",{className:"user-profil"},r.a.createElement("section",{className:"profil-avatar"},r.a.createElement("img",{src:f,alt:"Fatwa"})),r.a.createElement("section",{className:"profil-text"},r.a.createElement("p",{className:"profil-name"},"Fatwa anugerah nasir"),r.a.createElement("p",{className:"profil-email"},r.a.createElement(m.a,{to:"/"},"fatwaanugerah21@gmail.com"))))}),h=(t(197),function(){return r.a.createElement("div",{className:"phone-number-menu-in"},r.a.createElement(m.a,{to:"phone-number"},r.a.createElement("div",{className:"mask"},r.a.createElement("h1",null,"Phone Number"))))}),b=(t(198),function(){return r.a.createElement("div",{className:"schedule-menu"},r.a.createElement(m.a,{to:"schedule"},r.a.createElement("div",{className:"mask"},r.a.createElement("h1",null,"Jadwal Matakuliah"))))}),g=(t(199),function(){return r.a.createElement("div",{className:"task-list-menu"},r.a.createElement("div",{className:"mask"},r.a.createElement(m.a,{to:"/task-list"},r.a.createElement("h1",null,"Daftar Tugas"))))}),v=(t(200),function(){return r.a.createElement("div",{className:"add-task-menu"},r.a.createElement(m.a,{to:"add-task"},r.a.createElement("div",{className:"mask"},r.a.createElement("h1",null,"Tambah Tugas"))))}),N=t(25),k=t(9),w=function(){return function(e,a,t){var n=t.getFirebase,r=[],c={};n().firestore().collection("phone-number").get().then((function(e){e.forEach((function(e){c=e.data(),c=Object(k.a)({id:e.id},c),r.push(c)}))})).then((function(){e({type:"PHONE_NUMBER_STORED",data:r})}))}},O=Object(N.b)(null,(function(e){return{getPhoneNumberData:function(){return e(w())}}}))((function(e){return Object(n.useEffect)((function(){e.getPhoneNumberData()})),r.a.createElement("div",{className:"homepage-background"},r.a.createElement(p,null),r.a.createElement("img",{src:E,alt:"background",className:"homepage-background-logo"}),r.a.createElement("div",{className:"homepage-menu"},r.a.createElement("div",{className:"row task-list-and-add-task"},r.a.createElement(g,null),r.a.createElement(v,null)),r.a.createElement("div",{className:"phone-number-menu"},r.a.createElement(h,null)),r.a.createElement("div",{className:"schedule-menu"},r.a.createElement(b,null))))})),D=t(76),j=t(52),y=(t(202),t(203),Object(N.b)(null,(function(e){return{addPhoneNumber:function(a){e(function(e){return function(a,t,n){(0,n.getFirebase)().firestore().collection("phone-number").add({name:e.name,phoneNumber:e.prefix+e.number,email:e.email,address:e.address}).then((function(e){a({type:"AddedPhoneNumber",data:e})}))}}(a))},getPhoneData:function(){e(w())}}}))((function(e){var a=Object(n.useState)({name:null,address:null,number:"",email:"",prefix:"+62 "}),t=Object(j.a)(a,2),c=t[0],l=t[1],i=function(e){l(Object(k.a)(Object(k.a)({},c),{},Object(D.a)({},e.target.id,e.target.value)))};return r.a.createElement("div",{className:"contact-us-page card container"},r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),c.name&&c.address&&c.number&&e.addPhoneNumber(c),e.onSubmit(),l({name:null,address:null,number:"",email:"",prefix:"+62 "})},className:"add-contact-form"},r.a.createElement("div",{className:"name-input input-container"},r.a.createElement("span",{className:"label white-text"},"Nama Dosen :"),r.a.createElement("input",{className:"add-contact-input",id:"name",type:"text",placeholder:"Pak Iswanto",onChange:i})),r.a.createElement("div",{className:"number-input input-container"},r.a.createElement("span",{className:"Label white-text"},"Nomor Handphone :"),r.a.createElement("div",{className:"number-input-field"},r.a.createElement("span",{className:"prefix white-text"},"+62 "),r.a.createElement("input",{className:"add-contact-input number",value:4===c.number.length||c.number.length<=9?c.number.replace(/[^,\d]/g,""):c.number,type:"text",placeholder:"812 3456 7890",onChange:function(e){l(Object(k.a)(Object(k.a)({},c),{},{number:c.number.replace(" ","")}));var a=e.target.value.replace(/[^,\d]/g,""),t=[a.substr(0,3)];t.push(a.substr(3,4)),t.push(a.substr(7,4)),l(Object(k.a)(Object(k.a)({},c),{},{number:"".concat(t[0]," ").concat(t[1]," ").concat(t[2])}))}}))),r.a.createElement("div",{className:"email-input input-container"},r.a.createElement("span",{className:"addres-label white-text"},"Email :"),r.a.createElement("input",{className:"add-contact-input",id:"email",type:"email",placeholder:"fatwaanugerah21@gmail.com",onChange:i})),r.a.createElement("div",{className:"address-input input-container"},r.a.createElement("span",{className:"addres-label white-text"},"Alamat :"),r.a.createElement("input",{className:"add-contact-input",id:"address",type:"address",placeholder:"Jl. Cakalang",onChange:i})),r.a.createElement("button",null,"Submit")))}))),C=(t(204),t(205),t(183)),P=t.n(C),x=(t(225),function(e){var a=e.show?"modal-open show":"display-none";Object(n.useEffect)((function(){var a=window.addEventListener("keyup",(function(t){return 27===t.keyCode&&e.onClick(),window.removeEventListener("keyup",a)}))}));var t=e.footer?e.footer:"";return r.a.createElement("div",{className:"modal "+a,id:"modal",onClick:function(a){a.target!==document.getElementById("modal")&&27!==a.keyCode||e.onClick()}},r.a.createElement("div",{className:"modal-main"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h1",null,e.headerText),r.a.createElement("span",{onClick:function(){return e.onClick()}},"\xd7")),r.a.createElement("div",{className:"modal-content"},e.children),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("h1",null,t))))}),A=(t(226),function(e){return console.log(e.isAscending),r.a.createElement("div",{className:e.className},r.a.createElement("span",{className:"sort-order",onClick:function(){return e.onClick()}},r.a.createElement("div",{className:"order-arrow"},r.a.createElement("span",{className:"bot-arrow ".concat(e.isAscending?"active-order":"non-active-order")},"\u2193"),r.a.createElement("span",{className:"top-arrow ".concat(e.isAscending?"non-active-order":"active-order")},"\u2191")),"Name"))}),S=Object(N.b)((function(e){return{firestoreData:e.getFirestoreData}}),(function(e){return{getPhoneNumberData:function(){return e(w())},deletePhone:function(a){return e(function(e){return function(a,t,n){(0,n.getFirebase)().firestore().collection("phone-number").doc(e).delete().then((function(e){a({type:"DATA_DELETED",data:e}),console.log("Deleted")}))}}(a))}}}))((function(e){var a=e.firestoreData,t=Object(n.useState)(!1),c=Object(j.a)(t,2),l=c[0],i=c[1],o=Object(n.useState)(!0),m=Object(j.a)(o,2),s=m[0],u=m[1];if(Object(n.useEffect)((function(){e.getPhoneNumberData()}),[l,s]),!e.firestoreData.phoneNumberData)return r.a.createElement(P.a,{className:"center spinner",type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3});var d=function(e){var a=e.array,t=void 0===a?null:a,n=e.sortParameter,r=void 0===n?null:n,c=e.sortOrder,l=void 0===c?"asc":c,i=e.limit,o=void 0===i?null:i,m=0;if(r){for(var s=0;s<t.length-1;s++){m=s;for(var u=s+1;u<t.length;u++)t[u][r]<t[m][r]&&(m=u);t[s]=[t[m],t[m]=t[s]][0]}return"asc"===l||(t=t.reverse()),null===o?t:t.slice(0,o)}for(var d=0;d<t.length-1;d++){m=d;for(var E=d+1;E<t.length;E++)t[E]<t[m]&&(m=E);t[d]=[t[m],t[m]=t[d]][0]}return"asc"===l||(t=t.reverse()),null===o?t:t.slice(0,o)}({array:a.phoneNumberData,sortParameter:"name",sortOrder:s?"asc":null}).map((function(e){var a,t,n,c;return r.a.createElement("div",{className:"lecturer-info-item",key:e.id},r.a.createElement("div",{className:"card lecturer-info"},r.a.createElement("div",{className:"section-1"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/id/thumb/9/95/Logo_UH.png/1200px-Logo_UH.png",alt:"Lecturer Profile",className:"profile-image",height:"150"})),r.a.createElement("div",{className:"section-2"},r.a.createElement("ul",null,r.a.createElement("li",{className:"first-list"},r.a.createElement("p",{className:"lecturer-name"},null!==(a=e.name)&&void 0!==a?a:"-")),r.a.createElement("li",null,r.a.createElement("p",{className:"lecturer-phone-number"},null!==(t=e.phoneNumber)&&void 0!==t?t:"-")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"lecturer-email"},null!==(n=e.email)&&void 0!==n?n:"-")),r.a.createElement("li",null,r.a.createElement("p",{className:"lecturer-address"},null!==(c=e.address)&&void 0!==c?c:"-"))))))}));return r.a.createElement("div",{className:"container phone-number-page"},r.a.createElement(x,{show:l,headerText:"Tambah nomor handphone",onClick:function(){i(!1)}},r.a.createElement(y,{onSubmit:function(){i(!1)}})),r.a.createElement("div",{className:"content-header"},r.a.createElement("h1",null,"Daftar info dosen"),r.a.createElement(A,{className:"order",isAscending:s,onClick:function(){return u(!s)}})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"lecturer-info-container"},d),r.a.createElement("div",{className:"other-menu-item white-text",onClick:function(){return i(!0)}},"Tambah Nomor Handphone")))})),T=(t(227),function(){return r.a.createElement("div",{className:"creator-info"},r.a.createElement("span",{className:"title"},"Created by"),r.a.createElement("p",{className:"name"},"Fatwa Anugerah Nasir"))}),F=(t(228),function(){var e=function(e){e.preventDefault()};return r.a.createElement("div",{className:"footer-email"},r.a.createElement("span",{className:"title"},"Get Notification"),r.a.createElement("form",{onSubmit:e},r.a.createElement("input",{type:"email-input",placeholder:"Enter your email"}),r.a.createElement("button",{className:"email-submit-button",onClick:e},"Submit")))}),R=(t(229),t.p+"static/media/facebook.02535181.svg"),_=t.p+"static/media/instagram.e8286fef.svg",B=t.p+"static/media/linkedin.f42e04d0.svg",L=t.p+"static/media/twitter.f9992582.svg",I=function(){return r.a.createElement("div",{className:"social-media-info"},r.a.createElement("span",{className:"title"},"Social Media"),r.a.createElement("div",{className:"icons-row"},r.a.createElement("a",{href:"https://www.facebook.com/fatwaanugerah21",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{alt:"facebook-social-media",src:R,width:"10",className:"facebook-icon sosmed-icon"})),r.a.createElement("a",{href:"https://www.instagram.com/fatwaanugerah21",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:_,alt:"instagram-social-media",className:"instagram-icon sosmed-icon"})),r.a.createElement("a",{href:"https://twitter.com/Fatwa69351857",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{alt:"twitter-social-media",src:L,className:"twitter-icon sosmed-icon"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/fatwa-anugerah-9763b11b4",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:B,alt:"linkedin-social-media",className:"linkedin-icon sosmed-icon"}))))},M=(t(230),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"icon-container"},r.a.createElement("li",{className:"creator"},r.a.createElement(T,null)),r.a.createElement("li",{className:"social-media-info"},r.a.createElement(I,null)),r.a.createElement("li",{className:"email"},r.a.createElement(F,null))))}),U=(t(231),function(e){var a=[{id:1,name:"Teori Peluang",time:"Selasa, 10:00",lecturer:"Bu Hilal",chief:"Takdim",room:"Google Meet"},{id:2,name:"Desain dan Algoritma",time:"Selasa, 07:30",lecturer:"Kak Sadno",chief:"Takdim",room:"Zoom Meetings"}].map((function(e){return console.log(e),r.a.createElement("div",{className:"schedule-item card",key:e.id},r.a.createElement("li",{className:"schedule-name"},e.name),r.a.createElement("li",{className:"schedule-time"},e.time))}));return r.a.createElement("div",{className:"schedules-page container"},a)});var H=function(){return r.a.createElement(o.BrowserRouter,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"app-header"},r.a.createElement(d,null)),r.a.createElement("main",null,r.a.createElement(o.Route,{exact:!0,path:"/",component:O}),r.a.createElement(o.Route,{path:"/add-phone-number",component:y}),r.a.createElement(o.Route,{path:"/phone-number",component:S}),r.a.createElement(o.Route,{path:"/schedule",component:U})),r.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=t(26),J=t(51),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(a.type)switch(a.type){case"PHONE_NUMBER_STORED":case"PHONE_NUMBER_ADDED":return Object(k.a)(Object(k.a)({},e),{},{phoneNumberData:a.data});case"GET_DUMMY_DATA":return Object(k.a)({},e);default:return e}},K=Object(G.c)({getFirestoreData:z,firebase:J.firebaseReducer}),W=t(184),Z=(t(395),t(398),{apiKey:"AIzaSyAncdPhLuJ1tE85kb0cJRUcotOes6mt0m8",authDomain:"ilkomp-assistant.firebaseapp.com",databaseURL:"https://ilkomp-assistant.firebaseio.com",projectId:"ilkomp-assistant",storageBucket:"ilkomp-assistant.appspot.com",messagingSenderId:"505217365516",appId:"1:505217365516:web:62a637fb78c04a7359e029",measurementId:"G-L2ZTG73FBN"});t(400);i.a.initializeApp(Z);var Y=Object(G.e)(K,Object(G.d)(Object(G.a)(W.a.withExtraArgument({getFirebase:J.getFirebase})))),$={firebase:i.a,config:Z,dispatch:Y.dispatch};l.a.render(r.a.createElement(N.a,{store:Y},r.a.createElement(J.ReactReduxFirebaseProvider,$,r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),",")),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[401,1,2]]]);
//# sourceMappingURL=main.65ce6da3.chunk.js.map