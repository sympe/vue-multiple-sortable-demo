webpackJsonp([1],{NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},d=s("VU/8")({name:"App"},n,!1,null,null,null).exports,r=s("/ocq"),l=s("fZjL"),a=s.n(l),c=s("M4fF"),o=s.n(c),m={name:"multi-select-sortable",props:["items"],data:function(){return{selectedItems:{},beforeY:0,slotText:":names='item.name' :id='item.id'"}},computed:{orderedItems:function(){return o.a.orderBy(this.items,"index")}},methods:{select:function(e){if(this.selectedItems[e.index])this.deleteSelectedItems(e);else{var t=Math.min.apply(null,a()(this.selectedItems)),s=Math.max.apply(null,a()(this.selectedItems));e.index!==t-1&&e.index!==s+1&&0!==a()(this.selectedItems).length||this.addSelectedItems(e)}},addSelectedItems:function(e){this.selectedItems[e.index]=e,this.items[e.index].isSelected=!0,console.log(this.selectedItems)},deleteSelectedItems:function(e){this.items[e.index].isSelected=!1,delete this.selectedItems[e.index]},dragstart:function(e,t){if(!(e.index in this.selectedItems)){for(var s in this.selectedItems)this.deleteSelectedItems(this.selectedItems[s]);this.addSelectedItems(e)}this.beforeY=t.pageY},dragenter:function(e,t){for(var s in this.selectedItems)if(this.selectedItems[s].index===e.index)return;if(t.pageY<this.beforeY)for(var i in e.index+=a()(this.selectedItems).length,this.$emit("drag",this.orderedItems),this.selectedItems)this.selectedItems[i].index-=1,this.$emit("drag",this.orderedItems);else for(var n in e.index-=a()(this.selectedItems).length,this.$emit("drag",this.orderedItems),this.selectedItems)this.selectedItems[n].index+=1,this.$emit("drag",this.orderedItems);this.beforeY=t.pageY},dragend:function(e){for(var t in this.items)this.items[t].isSelected=!1;this.selectedItems={}}},created:function(){for(var e in this.items)this.$set(this.items[e],"isSelected",!1),this.$set(this.items[e],"index",Number(e))}},h={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",e._l(e.items,function(t){return s("div",{key:t.index,class:{selected:t.isSelected},attrs:{draggable:"true"},on:{dragstart:function(s){e.dragstart(t,s)},dragend:e.dragend,dragenter:function(s){e.dragenter(t,s)},click:function(s){e.select(t)}}},[e._t("item",null,{title:t.title,id:t.id,keyword:t.keyword,description:t.description})],2)}))},staticRenderFns:[]};var u={components:{MultiSelectSortable:s("VU/8")(m,h,!1,function(e){s("Po4+")},null,null).exports},data:function(){return{items:[{id:53,title:"Michael"},{id:32,title:"John"},{id:41,title:"Daniel"},{id:29,title:"Andrew"}]}},methods:{drag:function(e){this.items=e}}},f={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aaa"},[s("multi-select-sortable",{attrs:{items:e.items},on:{drag:e.drag},scopedSlots:e._u([{key:"item",fn:function(t){return s("div",{},[e._v("\n      "+e._s(" 【"+t.id+"】"+t.title)+"\n    ")])}}])})],1)},staticRenderFns:[]},p=s("VU/8")(u,f,!1,null,null,null).exports;i.a.use(r.a);var I=new r.a({routes:[{path:"/",name:"Main",component:p}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:I,components:{App:d},template:"<App/>"})},"Po4+":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.9738c5013de785b4bbe0.js.map