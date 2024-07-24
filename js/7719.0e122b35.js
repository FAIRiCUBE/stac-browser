(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[7719],{87719:function(t,e,r){"use strict";r.d(e,{A:function(){return D}});var o=function(){var t=this,e=t._self._c;return e("div",[t.href?e("b-button-group",{staticClass:"actions",attrs:{vertical:t.vertical,size:t.size}},[t.requiresAuth?e("b-button",{attrs:{variant:"danger",id:`popover-href-${t.id}-btn`},on:{click:t.handleAuthButton}},[e("b-icon-lock"),t._v(" "+t._s(t.$i18n.t("authentication.required"))+" ")],1):t._e(),t.hasDownloadButton?e("b-button",t._g(t._b({attrs:{disabled:t.requiresAuth,variant:"primary"}},"b-button",t.downloadProps,!1),t.downloadEvents),[t.loading?e("b-spinner",{attrs:{small:"",variant:"light"}}):t.browserCanOpenFile?e("b-icon-box-arrow-up-right"):e("b-icon-download"),t._v(" "+t._s(t.buttonText)+" ")],1):t._e(),e("CopyButton",{attrs:{variant:"primary",copyText:t.href,title:t.href}},[t._v(" "+t._s(t.copyButtonText)+" ")]),t.hasShowButton?e("b-button",{attrs:{variant:"primary"},on:{click:t.show}},[e("b-icon-eye",{staticClass:"mr-1"}),t.isThumbnail?[t._v(t._s(t.$t("assets.showThumbnail")))]:[t._v(t._s(t.$t("assets.showOnMap")))]],2):t._e(),t._l(t.actions,(function(r){return e("b-button",t._b({key:r.id,attrs:{variant:"primary"},on:{click:r.onClick}},"b-button",r.btnOptions,!1),[r.icon?e(r.icon,{tag:"component",staticClass:"mr-1"}):t._e(),t._v(" "+t._s(r.text)+" ")],1)}))],2):t._e(),t.auth.length>1?e("b-popover",{attrs:{id:`popover-href-${t.id}`,"custom-class":"href-auth-methods",target:`popover-href-${t.id}-btn`,triggers:"focus",container:"stac-browser",title:t.$i18n.t("authentication.chooseMethod")}},[e("b-list-group",t._l(t.auth,(function(r,o){return e("AuthSchemeItem",{key:o,attrs:{method:r},on:{authenticate:t.startAuth}})})),1)],1):t._e()],1)},s=[],n=(r(64979),r(82948)),a=r(43580),i=r(30278),c=r(30282),l=r(41526),u=r(31831),h=r(2566),d=r(95353),p=r(84193),f=r.n(p);class m{constructor(t,e){this.id=t,this.component=e}get btnOptions(){let t;return this.uri instanceof f()?t=this.uri.toString():"string"===typeof this.uri&&(t=this.uri),t?{href:t,target:"_blank"}:{}}get onClick(){return()=>{}}get uri(){return null}get show(){return!1}get icon(){return n.hNP}}class w extends m{constructor(t,e,r){super(r,e),this.asset=t}}var g=r(48907);class b extends w{get show(){return this.component.isBrowserProtocol&&"application/vnd.laszip+copc"===this.asset.type}get uri(){let t=new(f())("https://viewer.copc.io");return t.addQuery("copc",this.component.href),t}get text(){return g.Ay.t("actions.openIn",{service:"copc.io"})}}class E extends w{get show(){return this.component.isBrowserProtocol&&h.oV==this.asset.type}get uri(){let t=new(f())("https://geojson.io");return t.addQuery("data",`text/x-url,${this.component.href}`),t}get text(){return g.Ay.t("actions.openIn",{service:"geojson.io"})}}var y={CopcViewer:b,GeoJsonIo:E},v={},_=r(33484),A=r(24274);let R=0;var S={name:"HrefActions",components:{AuthSchemeItem:()=>r.e(8775).then(r.bind(r,28775)),BIconBoxArrowUpRight:n.hNP,BIconDownload:n.AXN,BIconEye:n.bL_,BIconLock:n.D8r,BListGroup:a.M,BPopover:i.u,BSpinner:c._,CopyButton:()=>Promise.resolve().then(r.bind(r,99975)),Description:l["default"],Metadata:()=>Promise.all([r.e(9710),r.e(537),r.e(4870),r.e(3147)]).then(r.bind(r,73147))},props:{data:{type:Object,required:!0},isAsset:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},size:{type:String,default:"md"},shown:{type:Boolean,default:!1},auth:{type:Array,default:()=>[]}},data(){return{id:R++,loading:!1}},computed:{...(0,d.aH)(["pathPrefix","requestHeaders"]),...(0,d.L8)(["getRequestUrl"]),...(0,d.L8)("auth",["isLoggedIn"]),requiresAuth(){return!this.isLoggedIn&&this.auth.length>0},actions(){return Object.entries(this.isAsset?y:v).map((([t,e])=>new e(this.data,this,t))).filter((t=>t.show))},canShow(){return"string"===typeof this.data.type&&(!("server"!==this.tileRendererType||!h.df.includes(this.data.type))||(!this.isGdalVfs||"client"!==this.tileRendererType)&&(!!this.isBrowserProtocol&&!!h.C8.includes(this.data.type)))},hasShowButton(){return this.isAsset&&this.canShow&&!this.shown},hasDownloadButton(){return this.isAsset&&this.isBrowserProtocol},downloadEvents(){return this.hasDownloadButton&&this.useAltDownloadMethod?{click:async t=>{t.preventDefault(),this.altDownload()}}:{}},filename(){return"string"===typeof this.data["file:local_path"]?f()(this.data["file:local_path"]).filename():this.parsedHref.filename()},downloadProps(){if(this.hasDownloadButton&&!this.useAltDownloadMethod){const t={href:this.href,target:"_blank"};return this.browserCanOpenFile||(t.download=this.filename),t}return{}},useAltDownloadMethod(){return!(!this.isBrowserProtocol||!window.isSecureContext)&&("string"===typeof this.data.method&&"GET"!==this.method.toUpperCase()||(h.Ay.size(this.data.headers)>0||h.Ay.size(this.requestHeaders)>0))},protocol(){if("string"===typeof this.href&&this.href){let t=this.href.match(/^(\w+):\/\//);if(t)return t[1].toLowerCase()}return null},isBrowserProtocol(){return!this.protocol&&!this.isGdalVfs||h.I5.includes(this.protocol)},isThumbnail(){return this.isAsset?Array.isArray(this.data.roles)&&this.data.roles.includes("thumbnail")&&!this.data.roles.includes("overview"):"preview"===this.data.rel&&h.Ay.canBrowserDisplayImage(this.data)},isGdalVfs(){return h.Ay.isGdalVfsUri(this.href)},href(){if("string"!==typeof this.data.href)return null;let t=null;this.context instanceof u.A&&(t=this.context.getAbsoluteUrl());try{return this.getRequestUrl(this.data.href,t)}catch(e){return this.data.href}},parsedHref(){return f()(this.href)},from(){if(this.isGdalVfs){let t=this.href.match(/^\/vsi([a-z\d]+)(_streaming)?\//);return this.protocolName(t)}return this.protocolName(this.protocol)},browserCanOpenFile(){if(this.isGdalVfs||this.useAltDownloadMethod)return!1;if(h.Ay.canBrowserDisplayImage(this.data))return!0;if("string"===typeof this.data.type)switch(this.data.type.toLowerCase()){case"text/html":case"application/xhtml+xml":case"text/plain":case"application/pdf":return!0}return!1},buttonText(){if(this.browserCanOpenFile&&this.isBrowserProtocol)return this.$t("open");let t=!this.isBrowserProtocol&&this.from?"withSource":"generic";return this.$t(`assets.download.${t}`,{source:this.from})},copyButtonText(){let t=this.isGdalVfs?"copyGdalVfsUrl":"copyUrl",e=!this.isBrowserProtocol&&this.from?"withSource":"generic";return this.$t(`assets.${t}.${e}`,{source:this.from})}},methods:{async altDownload(){window.isSecureContext||(window.location.href=this.href);try{this.loading=!0;const t=r(90731),e=f()(window.origin.toString());e.path(h.Ay.removeTrailingSlash(this.pathPrefix)+"/mitm.html"),t.mitm=e.toString();const o=Object.assign({},this.data,{href:this.href}),s=(0,_.lx)(this.$store,o),n=s.url;delete s.url,"undefined"!==typeof s.data&&(s.body=s.data,delete s.data);const a=await fetch(n,s);if(a.status>=400){let t;switch(a.status){case 401:t=this.$t("errors.unauthorized");break;case 403:t=this.$t("errors.authFailed");break;case 404:t=this.$t("errors.notFound");break;case 500:t=this.$t("errors.serverError");break;default:t=this.$t("errors.networkError");break}throw new Error(t)}let i=this.filename;const c=a.headers.get("content-disposition");if("string"===typeof c){const t=c.match(/filename=(?:"|)([^"]+)(?:"|)(?:;|$)/);t&&(i=t[1])}const l=t.createWriteStream(i);window.addEventListener("unload",(()=>{this.loading&&l.abort()})),window.addEventListener("beforeunload",(t=>{this.loading&&t.preventDefault()})),await a.body.pipeTo(l)}catch(t){if(t instanceof DOMException&&"AbortError"===t.name)return;this.$store.commit("showGlobalError",{error:t})}finally{this.loading=!1}},protocolName(t){if("string"!==typeof t)return"";switch(t.toLowerCase()){case"s3":try{const t=`protocol.s3.${this.parsedHref.domain()}`;if(this.$te(t))return this.$t(t)}catch(e){}return this.$t("protocol.s3.default");case"abfs":case"abfss":return this.$t("protocol.azure");case"gcs":return this.$t("protocol.gcs");case"ftp":return this.$t("protocol.ftp");case"oss":return this.$t("protocol.oss");case"file":return this.$t("protocol.file")}return""},show(){let t=Object.assign({},this.data);this.isGdalVfs||(t.href=this.href),this.$emit("show",t,this.id,this.isThumbnail)},handleAuthButton(){1===this.auth.length&&this.startAuth(this.auth[0])},async startAuth(t){if(A.A.isSupported(t,this.$store.state))await this.$store.dispatch("config",{authConfig:t}),await this.$store.dispatch("auth/requestLogin");else{const e=this.$i18n.t(`authentication.schemeTypes.${t.type}`,t),r=this.$i18n.t("authentication.unsupportedLong",{method:e});this.$root.$emit("error",new Error(r),this.$i18n.t("authentication.unsupported"))}}}},T=S,I=r(81656),C=(0,I.A)(T,o,s,!1,null,null,null),D=C.exports},43580:function(t,e,r){"use strict";r.d(e,{M:function(){return h}});var o=r(2448),s=r(58722),n=r(49800),a=r(80072),i=r(46710),c=r(1340);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u=(0,c.sC)({flush:(0,c.Yg)(a.Ye,!1),horizontal:(0,c.Yg)(a.iF,!1),tag:(0,c.Yg)(a.vq,"div")},n.l$),h=(0,o.X$)({name:n.l$,functional:!0,props:u,render:function(t,e){var r=e.props,o=e.data,n=e.children,a=""===r.horizontal||r.horizontal;a=!r.flush&&a;var c={staticClass:"list-group",class:l({"list-group-flush":r.flush,"list-group-horizontal":!0===a},"list-group-horizontal-".concat(a),(0,i.Kg)(a))};return t(r.tag,(0,s.L)(o,c),n)}})},90731:function(t){((e,r)=>{t.exports=r()})(0,(()=>{"use strict";const t="object"===typeof window?window:this;t.HTMLElement||console.warn("streamsaver is meant to run on browsers main thread");let e=null,r=!1;const o=t=>{try{t()}catch(e){}},s=t.WebStreamsPolyfill||{},n=t.isSecureContext;let a=/constructor/i.test(t.HTMLElement)||!!t.safari||!!t.WebKitPoint;const i=n||"MozAppearance"in document.documentElement.style?"iframe":"navigate",c={createWriteStream:d,WritableStream:t.WritableStream||s.WritableStream,supported:!0,version:{full:"2.0.5",major:2,minor:0,dot:5},mitm:"https://jimmywarting.github.io/StreamSaver.js/mitm.html?version=2.0.0"};function l(t){if(!t)throw new Error("meh");const e=document.createElement("iframe");return e.hidden=!0,e.src=t,e.loaded=!1,e.name="iframe",e.isIframe=!0,e.postMessage=(...t)=>e.contentWindow.postMessage(...t),e.addEventListener("load",(()=>{e.loaded=!0}),{once:!0}),document.body.appendChild(e),e}function u(e){const r="width=200,height=100",o=document.createDocumentFragment(),s={frame:t.open(e,"popup",r),loaded:!1,isIframe:!1,isPopup:!0,remove(){s.frame.close()},addEventListener(...t){o.addEventListener(...t)},dispatchEvent(...t){o.dispatchEvent(...t)},removeEventListener(...t){o.removeEventListener(...t)},postMessage(...t){s.frame.postMessage(...t)}},n=e=>{e.source===s.frame&&(s.loaded=!0,t.removeEventListener("message",n),s.dispatchEvent(new Event("load")))};return t.addEventListener("message",n),s}try{new Response(new ReadableStream),n&&!("serviceWorker"in navigator)&&(a=!0)}catch(p){a=!0}function h(){e||(e=n&&!1 in document.documentElement.style?l(c.mitm):u(c.mitm))}function d(t,o,s){let n={size:null,pathname:null,writableStrategy:void 0,readableStrategy:void 0},u=0,d=null,p=null,f=null;if(Number.isFinite(o)?([s,o]=[o,s],console.warn("[StreamSaver] Deprecated pass an object as 2nd argument when creating a write stream"),n.size=s,n.writableStrategy=o):o&&o.highWaterMark?(console.warn("[StreamSaver] Deprecated pass an object as 2nd argument when creating a write stream"),n.size=s,n.writableStrategy=o):n=o||{},!a){h(),p=new MessageChannel,t=encodeURIComponent(t.replace(/\//g,":")).replace(/['()]/g,escape).replace(/\*/g,"%2A");const o={transferringReadable:r,pathname:n.pathname||Math.random().toString().slice(-6)+"/"+t,headers:{"Content-Type":"application/octet-stream; charset=utf-8","Content-Disposition":"attachment; filename*=UTF-8''"+t}};n.size&&(o.headers["Content-Length"]=n.size);const s=[o,"*",[p.port2]];if(r){const t="iframe"===i?void 0:{transform(t,e){if(!(t instanceof Uint8Array))throw new TypeError("Can only write Uint8Arrays");u+=t.length,e.enqueue(t),d&&(location.href=d,d=null)},flush(){d&&(location.href=d)}};f=new c.TransformStream(t,n.writableStrategy,n.readableStrategy);const e=f.readable;p.port1.postMessage({readableStream:e},[e])}p.port1.onmessage=t=>{t.data.download?"navigate"===i?(e.remove(),e=null,u?location.href=t.data.download:d=t.data.download):(e.isPopup&&(e.remove(),e=null,"iframe"===i&&l(c.mitm)),l(t.data.download)):t.data.abort&&(m=[],p.port1.postMessage("abort"),p.port1.onmessage=null,p.port1.close(),p.port2.close(),p=null)},e.loaded?e.postMessage(...s):e.addEventListener("load",(()=>{e.postMessage(...s)}),{once:!0})}let m=[];return!a&&f&&f.writable||new c.WritableStream({write(t){if(!(t instanceof Uint8Array))throw new TypeError("Can only write Uint8Arrays");a?m.push(t):(p.port1.postMessage(t),u+=t.length,d&&(location.href=d,d=null))},close(){if(a){const e=new Blob(m,{type:"application/octet-stream; charset=utf-8"}),r=document.createElement("a");r.href=URL.createObjectURL(e),r.download=t,r.click()}else p.port1.postMessage("end")},abort(){m=[],p.port1.postMessage("abort"),p.port1.onmessage=null,p.port1.close(),p.port2.close(),p=null}},n.writableStrategy)}return o((()=>{const{readable:t}=new TransformStream,e=new MessageChannel;e.port1.postMessage(t,[t]),e.port1.close(),e.port2.close(),r=!0,Object.defineProperty(c,"TransformStream",{configurable:!1,writable:!1,value:TransformStream})})),c}))},73506:function(t,e,r){"use strict";var o=r(13925),s=String,n=TypeError;t.exports=function(t){if(o(t))return t;throw new n("Can't set "+s(t)+" as a prototype")}},90679:function(t,e,r){"use strict";var o=r(1625),s=TypeError;t.exports=function(t,e){if(o(e,t))return t;throw new s("Incorrect invocation")}},36955:function(t,e,r){"use strict";var o=r(92140),s=r(94901),n=r(44576),a=r(78227),i=a("toStringTag"),c=Object,l="Arguments"===n(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(r){}};t.exports=o?n:function(t){var e,r,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=u(e=c(t),i))?r:l?n(e):"Object"===(o=n(e))&&s(e.callee)?"Arguments":o}},55002:function(t){"use strict";t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},16193:function(t,e,r){"use strict";var o=r(79504),s=Error,n=o("".replace),a=function(t){return String(new s(t).stack)}("zxcasd"),i=/\n\s*at [^:]*:[^\n]*/,c=i.test(a);t.exports=function(t,e){if(c&&"string"==typeof t&&!s.prepareStackTrace)while(e--)t=n(t,i,"");return t}},46706:function(t,e,r){"use strict";var o=r(79504),s=r(79306);t.exports=function(t,e,r){try{return o(s(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(n){}}},23167:function(t,e,r){"use strict";var o=r(94901),s=r(20034),n=r(52967);t.exports=function(t,e,r){var a,i;return n&&o(a=e.constructor)&&a!==r&&s(i=a.prototype)&&i!==r.prototype&&n(t,i),t}},13925:function(t,e,r){"use strict";var o=r(20034);t.exports=function(t){return o(t)||null===t}},32603:function(t,e,r){"use strict";var o=r(655);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:o(t)}},52967:function(t,e,r){"use strict";var o=r(46706),s=r(20034),n=r(67750),a=r(73506);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{t=o(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch(i){}return function(r,o){return n(r),a(o),s(r)?(e?t(r,o):r.__proto__=o,r):r}}():void 0)},92140:function(t,e,r){"use strict";var o=r(78227),s=o("toStringTag"),n={};n[s]="z",t.exports="[object z]"===String(n)},655:function(t,e,r){"use strict";var o=r(36955),s=String;t.exports=function(t){if("Symbol"===o(t))throw new TypeError("Cannot convert a Symbol value to a string");return s(t)}},64979:function(t,e,r){"use strict";var o=r(46518),s=r(24475),n=r(97751),a=r(6980),i=r(24913).f,c=r(39297),l=r(90679),u=r(23167),h=r(32603),d=r(55002),p=r(16193),f=r(43724),m=r(96395),w="DOMException",g=n("Error"),b=n(w),E=function(){l(this,y);var t=arguments.length,e=h(t<1?void 0:arguments[0]),r=h(t<2?void 0:arguments[1],"Error"),o=new b(e,r),s=new g(e);return s.name=w,i(o,"stack",a(1,p(s.stack,1))),u(o,this,E),o},y=E.prototype=b.prototype,v="stack"in new g(w),_="stack"in new b(1,2),A=b&&f&&Object.getOwnPropertyDescriptor(s,w),R=!!A&&!(A.writable&&A.configurable),S=v&&!R&&!_;o({global:!0,constructor:!0,forced:m||S},{DOMException:S?E:b});var T=n(w),I=T.prototype;if(I.constructor!==T)for(var C in m||i(I,"constructor",a(1,T)),d)if(c(d,C)){var D=d[C],O=D.s;c(T,O)||i(T,O,a(6,D.c))}}}]);
//# sourceMappingURL=7719.0e122b35.js.map