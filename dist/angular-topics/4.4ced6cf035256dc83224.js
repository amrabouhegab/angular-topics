(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{ql9m:function(t,n,e){"use strict";e.r(n),e.d(n,"ChangeDetectionModule",function(){return l});var b=e("ofXK"),i=e("tyNb"),o=e("fXoL");let s=(()=>{class t{constructor(){}ngOnInit(){}getName(){console.log("TODO"+this.item.id)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.zb({type:t,selectors:[["app-todo"]],inputs:{item:"item"},decls:13,vars:3,template:function(t,n){1&t&&(o.Ib(0,"table"),o.Ib(1,"thead"),o.Ib(2,"th"),o.Ub(3,"Id"),o.Hb(),o.Ib(4,"th"),o.Ub(5,"Name"),o.Hb(),o.Hb(),o.Ib(6,"tbody"),o.Ib(7,"tr"),o.Ib(8,"td"),o.Ub(9),o.Hb(),o.Ib(10,"td"),o.Ub(11),o.Hb(),o.Hb(),o.Hb(),o.Hb(),o.Ub(12)),2&t&&(o.wb(9),o.Vb(null==n.item?null:n.item.id),o.wb(2),o.Vb(null==n.item?null:n.item.name),o.wb(1),o.Wb(" ",n.getName(),"\n"))},styles:[""],changeDetection:0}),t})();function c(t,n){if(1&t&&(o.Ib(0,"div"),o.Gb(1,"app-todo",5),o.Hb()),2&t){const t=n.$implicit;o.wb(1),o.Pb("item",t)}}const d=[{path:"",component:(()=>{class t{constructor(){this.list=[{name:"Todo1",id:1},{name:"Todo2",id:2},{name:"Todo3",id:3}]}ngOnInit(){}onAddItem(){const t=this.list.map(t=>t.id),n=Math.max(...t)+1;this.list.push({id:n,name:"TODO"+n})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.zb({type:t,selectors:[["app-todo-list"]],decls:10,vars:1,consts:[[1,"row"],[1,"col-md"],[1,"btn","btn-primary",3,"click"],[1,"todo-list"],[4,"ngFor","ngForOf"],[3,"item"]],template:function(t,n){1&t&&(o.Ib(0,"div",0),o.Ib(1,"div",1),o.Ib(2,"button",2),o.Nb("click",function(){return n.onAddItem()}),o.Ub(3,"Add Item"),o.Hb(),o.Hb(),o.Hb(),o.Ib(4,"div",0),o.Ib(5,"div",1),o.Ib(6,"div",3),o.Ib(7,"h1"),o.Ub(8,"My Todo List"),o.Hb(),o.Tb(9,c,2,1,"div",4),o.Hb(),o.Hb(),o.Hb()),2&t&&(o.wb(9),o.Pb("ngForOf",n.list))},directives:[b.h,s],styles:[""]}),t})()}];let r=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.Db({type:t}),t.\u0275inj=o.Cb({imports:[[i.b.forChild(d)],i.b]}),t})(),l=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.Db({type:t}),t.\u0275inj=o.Cb({imports:[[b.b,r]]}),t})()}}]);