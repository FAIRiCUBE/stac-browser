"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[3787,4715],{24427:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var i=function(){var t=this,e=t._self._c;return e("main",{staticClass:"search d-flex flex-column"},[t.parent?t.canSearch?e("b-row",[e("b-col",{staticClass:"left"},[e("b-tabs",{model:{value:t.activeSearch,callback:function(e){t.activeSearch=e},expression:"activeSearch"}},[t.canSearchCollections?e("b-tab",{attrs:{title:t.$t("search.tabs.collections")}},[e("SearchFilter",{attrs:{parent:t.parent,title:"",value:t.collectionFilters,type:"Collections"},on:{input:t.setFilters}})],1):t._e(),t.canSearchItems?e("b-tab",{attrs:{title:t.$t("search.tabs.items")}},[e("SearchFilter",{attrs:{parent:t.parent,title:"",value:t.itemFilters,type:"Global"},on:{input:t.setFilters}})],1):t._e()],1)],1),e("b-col",{staticClass:"right"},[t.error?e("b-alert",{attrs:{variant:"error",show:""}},[t._v(t._s(t.error))]):t.data||t.hasFilters?!t.data&&t.loading?e("Loading",{attrs:{fill:"",top:""}}):0===t.results.length?e("b-alert",{attrs:{variant:"warning",show:""}},[t._v(t._s(t.$t("search.noItemsFound")))]):[t.itemCollection?e("div",{attrs:{id:"search-map"}},[e("Map",{attrs:{stac:t.stac,stacLayerData:t.itemCollection,scrollWheelZoom:"",popover:""}})],1):t._e(),t.isCollectionSearch?e("Catalogs",{attrs:{catalogs:t.results,collectionsOnly:"",pagination:t.pagination,loading:t.loading},on:{paginate:t.loadResults}}):e("Items",{attrs:{stac:t.stac,items:t.results,api:!0,allowFilter:!1,pagination:t.pagination,loading:t.loading},on:{paginate:t.loadResults}})]:e("b-alert",{attrs:{variant:"info",show:""}},[t._v(t._s(t.$t("search.modifyCriteria")))])],2)],1):e("b-alert",{attrs:{variant:"danger",show:""}},[t._v(t._s(t.$t("search.notSupported")))]):e("Loading",{attrs:{stretch:""}})],1)},s=[],r=a(20629),l=a(79879),n=a(6257),o=a(79091),c=a(43989),h=a(51015),u=a(82996),d=a(57273),p={name:"Search",components:{BTab:h.L,BTabs:u.M,Catalogs:()=>Promise.resolve().then(a.bind(a,40728)),SearchFilter:n["default"],Items:()=>Promise.resolve().then(a.bind(a,94473)),Loading:o.Z,Map:()=>a.e(5917).then(a.bind(a,55917))},props:{loadParent:{type:String,default:null}},data(){return{parent:null,error:null,link:null,loading:!1,data:null,itemFilters:{},collectionFilters:{},activeSearch:0}},computed:{...(0,r.rn)(["catalogUrl","catalogTitle","itemsPerPage"]),...(0,r.Se)(["canSearch","canSearchItems","canSearchCollections","getStac","root","collectionLink","parentLink","fromBrowserPath","toBrowserPath"]),stac(){return this.parent instanceof c.Z?this.parent:null},searchLink(){return this.isCollectionSearch?this.collectionSearchLink:this.itemSearchLink},collectionSearchLink(){return this.parent instanceof c.Z&&this.parent.getApiCollectionsLink()},itemSearchLink(){return this.parent instanceof c.Z&&this.parent.getSearchLink()},itemCollection(){return this.isCollectionSearch?null:{type:"FeatureCollection",features:this.results,links:[]}},results(){if(!l.ZP.isObject(this.data))return[];let t=this.isCollectionSearch?this.data.collections:this.data.features,e=this.isCollectionSearch?"Collection":"Feature";return Array.isArray(t)?t.map((t=>{try{if(!l.ZP.isObject(t)||t.type!==e)return null;let a,i=l.ZP.getLinkWithRel(t.links,"self");return null!==i&&void 0!==i&&i.href&&(a=l.ZP.toAbsolute(i.href,this.link.href)),new c.Z(t,a,this.toBrowserPath(a))}catch(a){return console.error(a),null}})).filter((t=>t instanceof c.Z)):[]},pagination(){return l.ZP.getPaginationLinks(this.data)},hasFilters(){return l.ZP.size(this.filters)>0},filters(){return this.isCollectionSearch?this.collectionFilters:this.itemFilters},isCollectionSearch(){return this.canSearchCollections&&0===this.activeSearch},pageDescription(){let t=c.Z.getDisplayTitle([this.collectionLink,this.parentLink,this.root],this.catalogTitle);return this.$t("search.metaDescription",{title:t})}},watch:{searchLink:{immediate:!0,handler(){this.searchLink&&this.showPage()}}},async created(){let t=this.catalogUrl;this.loadParent?(t=this.fromBrowserPath(this.loadParent),this.parent=this.getStac(t)):this.parent=this.root,this.parent||(await this.$store.dispatch("load",{url:t}),this.root||this.$store.commit("config",{catalogUrl:t}),this.parent=this.getStac(t),this.showPage())},methods:{async loadResults(t){this.error=null,this.loading=!0;try{this.link=l.ZP.addFiltersToLink(t,this.filters,this.itemsPerPage);let e=this.isCollectionSearch?"collections":"features",a=await(0,d.ui)(this.$store,this.link);a&&this.showPage(a.config.url),l.ZP.isObject(a.data)&&Array.isArray(a.data[e])?this.data=a.data:(this.data=null,this.error=this.$t(this.isCollectionSearch?"errors.invalidStacCollections":"errors.invalidStacItems"))}catch(e){this.data=null,this.error=e.message}finally{this.loading=!1}},async setFilters(t,e=!1){this.isCollectionSearch?this.collectionFilters=t:this.itemFilters=t,e?this.data=null:await this.loadResults(this.searchLink)},showPage(t){this.$store.commit("showPage",{title:this.$t("search.title"),description:this.pageDescription,url:t})}}},g=p,m=a(1001),S=(0,m.Z)(g,i,s,!1,null,null,null),f=S.exports}}]);
//# sourceMappingURL=3787.db551ac6.js.map