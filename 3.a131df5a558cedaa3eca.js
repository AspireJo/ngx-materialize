(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{yu7T:function(l,n,u){"use strict";u.r(n);var e=u("keVe"),t=function(){},a=u("fYis"),s=u("tVgD"),o=u("KeTA"),d=u("WduM"),i=u("TOqr"),c=(u("nQ6I"),function(){function l(l){this.toastService=l,this.properties=[{name:"message",type:"string",description:"Toast message to display"},{name:"displayLength",type:"number",description:"Display time in milliseconds before toast is dismissed"},{name:"className",type:"string",description:"CSS class name to apply on the toast"},{name:"completeCallback",type:"Function",description:"Callback function to execute after toast is dismissed"}]}return l.prototype.showBasicToast=function(){this.toastService.show("I am a toast!",4e3)},l.prototype.showStyledToast=function(){this.toastService.show("I am a green toast!",4e3,"green rounded")},l.prototype.showCustomToast=function(){this.toastService.show('<span>I am a custom toast!</span>\n       <button class="btn-flat white-text medium" onclick="alert(\'Toast action button has been clicked\')">CLICK ME</button>',4e3)},l.prototype.showCallbackToast=function(){this.toastService.show("I am a callback toast!",4e3,null,function(){return alert("Toast has been dismissed")})},l}()),r=u("30OG"),p=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.method-name[_ngcontent-%COMP%]{font-size:1.1rem;padding:5px 0}"]],data:{animation:[{type:7,name:"routeAnimation",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{opacity:0,transform:"translateX(6%)"},offset:null},{type:4,styles:null,timings:"0.35s cubic-bezier(0.550, 0.055, 0.675, 0.190)"}],options:null},{type:1,expr:":leave",animation:[{type:6,styles:{opacity:0},offset:null}],options:null}],options:{}}]}});function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](2,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](3,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](8,0,null,null,0,"td",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "]))],null,function(l,n){l(n,3,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.type),l(n,8,0,n.context.$implicit.description)})}function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Toast"])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275eld"](3,0,null,null,5,"div",[["class","section"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](5,0,null,null,2,"app-code-snippet",[],null,null,null,s.b,s.a)),e["\u0275did"](6,4243456,null,0,o.a,[],null,null),(l()(),e["\u0275ted"](-1,0,["import { MzToastModule } from 'ngx-materialize'"])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275eld"](10,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n  Materialize provides a toast implementation that will be automatically placed and sized according to the device's screen resolution. Toasts are programmatically triggered using the service "])),(l()(),e["\u0275eld"](12,0,null,null,1,"code",[["class","language-markup"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["MzToastService"])),(l()(),e["\u0275ted"](-1,null,[" and can be customized through the parameters of the method "])),(l()(),e["\u0275eld"](15,0,null,null,1,"code",[["class","language-markup"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["show"])),(l()(),e["\u0275ted"](-1,null,[".\n"])),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275eld"](19,0,null,null,17,"div",[["class","section"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](21,0,null,null,1,"h5",[["class","light"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Basic toast"])),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](24,0,null,null,11,"div",[["class","row m-valign-wrapper"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275eld"](26,0,null,null,5,"div",[["class","col s12 m3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](28,0,null,null,2,"button",[["mz-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.showBasicToast()&&e),e},null,null)),e["\u0275did"](29,606208,null,0,d.a,[e.ElementRef,e.Renderer],null,null),(l()(),e["\u0275ted"](-1,null,["Toast"])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275eld"](33,0,null,null,1,"p",[["class","col s12 m9"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      Basic toast using a custom message with a 4000 ms delay\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275eld"](38,0,null,null,20,"div",[["class","section"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](40,0,null,null,1,"h5",[["class","light"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Styled toast"])),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](43,0,null,null,14,"div",[["class","row m-valign-wrapper"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275eld"](45,0,null,null,5,"div",[["class","col s12 m3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](47,0,null,null,2,"button",[["mz-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.showStyledToast()&&e),e},null,null)),e["\u0275did"](48,606208,null,0,d.a,[e.ElementRef,e.Renderer],null,null),(l()(),e["\u0275ted"](-1,null,["Toast"])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275eld"](52,0,null,null,4,"p",[["class","col s12 m9"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      Toasts can be customized by providing a class name to the "])),(l()(),e["\u0275eld"](54,0,null,null,1,"code",[["class","language-markup"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["MzToastService"])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275eld"](60,0,null,null,17,"div",[["class","section"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](62,0,null,null,1,"h5",[["class","light"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Custom toast"])),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](65,0,null,null,11,"div",[["class","row m-valign-wrapper"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275eld"](67,0,null,null,5,"div",[["class","col s12 m3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](69,0,null,null,2,"button",[["mz-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.showCustomToast()&&e),e},null,null)),e["\u0275did"](70,606208,null,0,d.a,[e.ElementRef,e.Renderer],null,null),(l()(),e["\u0275ted"](-1,null,["Toast"])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275eld"](74,0,null,null,1,"p",[["class","col s12 m9"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      You can pass an HTML string as the first argument as well as shown in this example where we pass in text a flat button. If you call an external function instead of in-line JavaScript, you will not need to escape quotation marks.\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275eld"](79,0,null,null,17,"div",[["class","section"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](81,0,null,null,1,"h5",[["class","light"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Callback toast"])),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](84,0,null,null,11,"div",[["class","row m-valign-wrapper"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275eld"](86,0,null,null,5,"div",[["class","col s12 m3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](88,0,null,null,2,"button",[["mz-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.showCallbackToast()&&e),e},null,null)),e["\u0275did"](89,606208,null,0,d.a,[e.ElementRef,e.Renderer],null,null),(l()(),e["\u0275ted"](-1,null,["Toast"])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275eld"](93,0,null,null,1,"p",[["class","col s12 m9"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      You can tell the toast to execute a callback function when it has been dismissed\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275eld"](98,0,null,null,27,"div",[["class","section"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](100,0,null,null,1,"h5",[["class","light"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["HTML Structure"])),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](103,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    To trigger a toast you must use the service "])),(l()(),e["\u0275eld"](105,0,null,null,1,"code",[["class","language-markup"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["MzToastService"])),(l()(),e["\u0275ted"](-1,null,[" and invoke "])),(l()(),e["\u0275eld"](108,0,null,null,1,"code",[["class","language-markup"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["show"])),(l()(),e["\u0275ted"](-1,null,[" method with the desired parameters. A common example is to add the click event to a button to trigger the toast as shown below.\n  "])),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](112,0,null,null,1,"p",[["class","bold"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["example.component.html"])),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](115,0,null,null,2,"app-code-snippet",[],null,null,null,s.b,s.a)),e["\u0275did"](116,4243456,null,0,o.a,[],null,null),(l()(),e["\u0275ted"](-1,0,['\n<button mz-button (click)="showToast()">Toast</button>\n  '])),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](119,0,null,null,1,"p",[["class","bold"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["example.component.ts"])),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](122,0,null,null,2,"app-code-snippet",[],null,null,null,s.b,s.a)),e["\u0275did"](123,4243456,null,0,o.a,[],null,null),(l()(),e["\u0275ted"](-1,0,["\nconstructor(\n  private toastService: MzToastService,\n) { }\n\nshowToast() {\n  this.toastService.show('I am a toast!', 4000, 'green', () => alert('Toast has been dismissed'));\n}\n  "])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275eld"](127,0,null,null,25,"div",[["class","section"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](129,0,null,null,1,"h5",[["class","light"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Service methods"])),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](132,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    Toasts can be customized using the following parameters on the method "])),(l()(),e["\u0275eld"](134,0,null,null,1,"code",[["class","language-markup"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["show"])),(l()(),e["\u0275ted"](-1,null,[" of the service "])),(l()(),e["\u0275eld"](137,0,null,null,1,"code",[["class","language-markup"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["ToastService"])),(l()(),e["\u0275ted"](-1,null,[".\n  "])),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](141,0,null,null,1,"p",[["class","method-name bold"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["show(message: string, displayLength: number, className?: string, completeCallback?: Function): void"])),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](144,0,null,null,7,"table",[["class","striped responsive-table"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](146,0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](149,278528,null,0,i.j,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n"]))],function(l,n){var u=n.component;l(n,29,0),l(n,48,0),l(n,70,0),l(n,89,0),l(n,149,0,u.properties)},null)}var g=e["\u0275ccf"]("app-toast",c,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-toast",[],[[40,"@routeAnimation",0]],null,null,h,p)),e["\u0275did"](1,49152,null,0,c,[r.a],null,null)],null,function(l,n){l(n,0,0,!0)})},{},{},[]),v=u("xEGo"),f=u("CD0U"),b=u("Q4qP"),w=u("Oupg"),y=u("ael7"),T=u("X+PR");u.d(n,"ToastModuleNgFactory",function(){return k});var k=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,g]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,i.m,i.l,[e.LOCALE_ID,[2,i.t]]),e["\u0275mpd"](4608,r.a,r.a,[]),e["\u0275mpd"](1073742336,i.c,i.c,[]),e["\u0275mpd"](1073742336,v.a,v.a,[]),e["\u0275mpd"](1073742336,f.a,f.a,[]),e["\u0275mpd"](1073742336,b.a,b.a,[]),e["\u0275mpd"](1073742336,w.a,w.a,[]),e["\u0275mpd"](1073742336,y.a,y.a,[]),e["\u0275mpd"](1073742336,T.n,T.n,[[2,T.t],[2,T.l]]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,T.j,function(){return[[{path:"",component:c}]]},[])])})}}]);