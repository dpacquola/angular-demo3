import{a as b,b as x,c as g,d as h,e as D,f as k,g as A,h as y,i as S}from"./chunk-UBKV2C25.js";import{Ba as i,Ca as v,Da as p,Ja as C,P as s,R as m,la as f,ua as o,va as n,wa as a}from"./chunk-WUHKH4HT.js";var l=class e{title="";activateRoute=s(g);constructor(){this.title=this.activateRoute.snapshot.data.title,this.activateRoute.data.subscribe(r=>{console.log(r.title)})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-demo1"]],standalone:!0,features:[p],decls:4,vars:1,template:function(t,u){t&1&&(o(0,"p"),i(1," demo1 works!"),a(2,"br"),i(3),n()),t&2&&(f(3),v(" ",u.title," "))}})};var R=[{path:"demo1",component:l,data:{title:"Hello Demo 1"}},{path:"demo2",loadComponent:()=>import("./chunk-RXZ2QJF4.js").then(e=>e.Demo2Component)},{path:"demo3",loadComponent:()=>import("./chunk-QQOWR4OD.js"),data:{title:"Titolo 3333"}},{path:"product/:productId",loadComponent:()=>import("./chunk-SARBOX6X.js")},{path:"",redirectTo:"demo1",pathMatch:"full"}];var E={providers:[C({eventCoalescing:!0}),y(R,S())]};var c=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-navbar"]],standalone:!0,features:[p],decls:23,vars:0,consts:[["routerLink","demo1",1,"btn"],["routerLink","demo2",1,"btn"],["routerLink","demo3",1,"btn"],[1,"navbar","bg-base-100"],[1,"flex-1"],[1,"btn","btn-ghost","text-xl"],[1,"flex-none"],[1,"menu","menu-horizontal","px-1"],["routerLink","demo1","routerLinkActive","text-sky-400"],["routerLink","demo2","routerLinkActive","text-sky-400"],["routerLink","demo3","routerLinkActive","text-sky-400"]],template:function(t,u){t&1&&(o(0,"button",0),i(1,"Demo 1"),n(),o(2,"button",1),i(3,"Demo 2"),n(),o(4,"button",2),i(5,"Demo 3"),n(),a(6,"hr"),o(7,"div",3)(8,"div",4)(9,"a",5),i(10,"Angular Training"),n()(),o(11,"div",6)(12,"ul",7)(13,"li",8)(14,"a"),i(15,"Demo 1"),n()(),o(16,"li",9)(17,"a"),i(18,"Demo 2"),n()(),o(19,"li",10)(20,"a"),i(21,"Demo 3"),n()()()()(),a(22,"hr"))},dependencies:[k,A]})};var d=class e{router=s(D);constructor(){this.router.events.subscribe(r=>{r instanceof x&&console.log("Usando inject: "+r.url)})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[p],decls:3,vars:0,consts:[[1,"max-w-screen-lg","mx-3","lg:mx-auto"]],template:function(t,u){t&1&&(a(0,"app-navbar"),o(1,"div",0),a(2,"router-outlet"),n())},dependencies:[c,h],encapsulation:2})};b(d,E).catch(e=>console.error(e));
