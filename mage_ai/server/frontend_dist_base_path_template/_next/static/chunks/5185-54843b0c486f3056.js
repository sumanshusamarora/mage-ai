(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5185],{59739:function(e,n,t){"use strict";var r=t(56669);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,u){if(u!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},47329:function(e,n,t){e.exports=t(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},23192:function(e,n,t){"use strict";t.d(n,{fi:function(){return U},lG:function(){return Y}});var r=t(82394),o=t(75582),i=t(82684),u=t(12691),c=t.n(u),l=t(34376),a=t.n(l),s=t(38626),d=t(69864),p=t(40761),f=t(41143),v=t(71180),b=t(39867),h=t(55485),m=t(48670),g=t(57653),j=t(38276),O=t(75499),y=t(30160),x=t(12468),P=t(35686),_=t(89706),Z=t(11498),k=t(72473),S=t(81655),T=t(70515),C=t(3917),L=t(55283),w=t(86735),D=t(72619),R=t(74052),I=t(69419),E=t(70320),M=t(28598);function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Y=[0,1,3,4,5],U={0:"status",1:"block_uuid",3:"created_at",4:"started_at",5:"completed_at"};n.ZP=function(e){var n=e.blockRuns,t=e.onClickRow,r=e.pipeline,u=e.selectedRun,l=e.setErrors,N=e.sortableColumnIndexes,Y=(0,E.q)(),U=(0,i.useContext)(s.ThemeContext),B=(0,i.useState)(null),F=B[0],V=B[1],H=(0,i.useState)(null),X=H[0],G=H[1],Q=r||{},q=Q.uuid,z=Q.type,J=(0,i.useMemo)((function(){return r.blocks||[]}),[r]),K=(0,i.useMemo)((function(){return(0,w.HK)(J,(function(e){return e.uuid}))}),[J]),W=(0,i.useMemo)((function(){return g.qL.INTEGRATION===z}),[z]),$=(0,i.useMemo)((function(){return g.qL.PYTHON===z}),[z]),ee=(0,I.iV)(),ne=null===ee||void 0===ee?void 0:ee[S.lG.SORT_COL_IDX],te=(0,i.useMemo)((function(){return ne?{columnIndex:+ne,sortDirection:(null===ee||void 0===ee?void 0:ee[S.lG.SORT_DIRECTION])||S.sh.ASC}:void 0}),[ee,ne]),re=(0,i.useMemo)((function(){var e,n;return null===(e=new p.Z)||void 0===e||null===(n=e.decodedToken)||void 0===n?void 0:n.token}),[]),oe=(0,d.Db)((function(e){var n=e.blockUUID,t=e.pipelineRunId;return P.ZP.block_outputs.pipelines.downloads.detailAsync(null===r||void 0===r?void 0:r.uuid,n,{pipeline_run_id:t,token:re},{onDownloadProgress:function(e){return V((Number((null===e||void 0===e?void 0:e.loaded)||0)/1e6).toFixed(3))},responseType:Z.E.BLOB})}),{onSuccess:function(e){return(0,D.wD)(e,{callback:function(e){G(null),(0,R.uS)(e,"block_output.".concat(_.Lu.CSV))},onErrorCallback:function(e,n){return null===l||void 0===l?void 0:l({errors:n,response:e})}})}}),ie=(0,o.Z)(oe,2),ue=ie[0],ce=ie[1].isLoading,le=Y?S.O$:{},ae=[{uuid:"Status"},{uuid:"Block"},{uuid:"Trigger"},A(A({},le),{},{uuid:"Created at"}),A(A({},le),{},{uuid:"Started at"}),A(A({},le),{},{uuid:"Completed at"}),{uuid:"Logs"}];return $&&ae.push({uuid:"Output"}),(0,M.jsx)(O.Z,{columnFlex:[1,2,2,1,1,1,null,null],columns:ae,isSelectedRow:function(e){return n[e].id===(null===u||void 0===u?void 0:u.id)},onClickRow:t,rows:null===n||void 0===n?void 0:n.map((function(e){var n,t,r,o,i=e||{},u=i.block_uuid,l=i.completed_at,s=i.created_at,d=i.id,p=i.pipeline_run_id,g=i.pipeline_schedule_id,O=i.pipeline_schedule_name,P=i.started_at,_=i.status,Z=u,S=Z.split(":"),w=X===d&&ce;W&&(Z=S[0],r=S[1],o=S[2]);var D=K[Z];D||(D=K[S[0]]);var R=[(0,M.jsx)(y.ZP,{danger:f.V.FAILED===_,default:f.V.CANCELLED===_,info:f.V.INITIAL===_,monospace:!0,success:f.V.COMPLETED===_,warning:f.V.RUNNING===_,children:_},"".concat(d,"_status")),(0,M.jsx)(c(),{as:"/pipelines/".concat(q,"/edit?block_uuid=").concat(Z),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,M.jsxs)(m.Z,{bold:!0,fitContentWidth:!0,verticalAlignContent:!0,children:[(0,M.jsx)(b.Z,{color:(0,L.qn)(null===(n=D)||void 0===n?void 0:n.type,{blockColor:null===(t=D)||void 0===t?void 0:t.color,theme:U}).accent,size:1.5*T.iI,square:!0}),(0,M.jsx)(j.Z,{mr:1}),(0,M.jsxs)(y.ZP,{monospace:!0,sky:!0,children:[Z,r&&":",r&&(0,M.jsx)(y.ZP,{default:!0,inline:!0,monospace:!0,children:r}),o>=0&&":",o>=0&&(0,M.jsx)(y.ZP,{default:!0,inline:!0,monospace:!0,children:o})]})]})},"".concat(d,"_block_uuid")),(0,M.jsx)(c(),{as:"/pipelines/".concat(q,"/triggers/").concat(g),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,M.jsx)(m.Z,{bold:!0,sky:!0,children:O})},"".concat(d,"_trigger")),(0,M.jsx)(y.ZP,{default:!0,monospace:!0,small:!0,title:s?(0,C._6)(s):null,children:Y?(0,C.XG)(s,Y):(0,C.d$)(s,{includeSeconds:!0})},"".concat(d,"_created_at")),(0,M.jsx)(y.ZP,{default:!0,monospace:!0,small:!0,title:P?(0,C._6)(P):null,children:P?Y?(0,C.XG)(P,Y):(0,C.d$)(P,{includeSeconds:!0}):(0,M.jsx)(M.Fragment,{children:"\u2014"})},"".concat(d,"_started_at")),(0,M.jsx)(y.ZP,{default:!0,monospace:!0,small:!0,title:l?(0,C._6)(l):null,children:l?Y?(0,C.XG)(l,Y):(0,C.d$)(l,{includeSeconds:!0}):(0,M.jsx)(M.Fragment,{children:"\u2014"})},"".concat(d,"_completed_at")),(0,M.jsx)(v.ZP,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return a().push("/pipelines/".concat(q,"/logs?block_run_id[]=").concat(d))},children:(0,M.jsx)(k.UL,{default:!0,size:2*T.iI})},"".concat(d,"_logs"))];return $&&R.push((0,M.jsx)(h.ZP,{alignItems:"center",justifyContent:"center",children:(0,M.jsx)(x.Z,{appearBefore:!0,autoHide:!w,block:!0,forceVisible:w,label:w?"".concat(F||0,"mb downloaded..."):"Save block run output as CSV file (not supported for dynamic blocks)",size:null,children:(0,M.jsx)(v.ZP,{default:!0,disabled:!$||!(f.V.COMPLETED===_)||ce,iconOnly:!0,loading:w,noBackground:!0,onClick:function(){V(null),G(d),ue({blockUUID:Z,pipelineRunId:p})},children:(0,M.jsx)(k.vc,{default:!0,size:2*T.iI})})})},"".concat(d,"_save_output"))),R})),sortableColumnIndexes:N,sortedColumn:te,uuid:"block-runs"})}},74052:function(e,n,t){"use strict";t.d(n,{Dp:function(){return h},OF:function(){return m},Q9:function(){return j},Rt:function(){return f},Rz:function(){return y},h8:function(){return g},k1:function(){return v},uS:function(){return O},zv:function(){return x}});var r=t(21831),o=t(82394),i=t(48339),u=t(53808),c=t(3917),l=t(86735),a=t(81728),s=t(70320);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e){var n={},t={};return null===e||void 0===e||e.forEach((function(e){var r=e.content,o=e.outputs,u=e.type,c=e.uuid;(null===o||void 0===o?void 0:o.length)>=1&&(n[c]=o.map((function(e){if("object"===typeof e){var n=e||{},t=n.sample_data,r=n.shape,o=n.text_data,u=n.type;return t?{data:p({shape:r},t),type:u}:o&&(0,a.Pb)(o)?JSON.parse(o):o}return{data:String(e),type:i.Gi.TEXT}}))),t[u]||(t[u]={}),t[u][c]=r})),{content:t,messages:n}}function v(e,n,t){e.forEach((function(e){(0,u.t8)("".concat(t,"/").concat(e.uuid,"/codeCollapsed"),(0,u.Od)("".concat(n,"/").concat(e.uuid,"/codeCollapsed"))),(0,u.t8)("".concat(t,"/").concat(e.uuid,"/outputCollapsed"),(0,u.Od)("".concat(n,"/").concat(e.uuid,"/outputCollapsed")))}))}function b(e){return"".concat(e,"/").concat(u.kP)}function h(e){return(0,u.U2)(b(e),[])}function m(e,n){var t=h(e);t.includes(n)||(0,u.t8)(b(e),[].concat((0,r.Z)(t),[n]))}function g(e,n){var t=h(e).filter((function(e){return e!==n}));(0,u.t8)(b(e),t)}function j(e,n){var t=(0,l.HK)(n,(function(e){return e.uuid}));return e.map((function(e){return t[e]})).filter((function(e){return!!e}))}var O=function(e,n){var t=window.URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download=n,document.body.appendChild(r),r.click(),r.remove()};function y(e,n){var t,r=(0,s.q)(),o=null===n||void 0===n?void 0:n.isPipelineUpdating,i=null===n||void 0===n?void 0:n.pipelineContentTouched,u=null===n||void 0===n?void 0:n.pipelineLastSaved;if(i)t="Unsaved changes";else if(o)t="Saving changes...";else if(u){var l=(0,c.JX)(Number(u)/1e3);null!==e&&void 0!==e&&e.updated_at&&(l=(0,c.XG)(null===e||void 0===e?void 0:e.updated_at,r)),t="Last saved ".concat(l)}else t="All changes saved";return t}function x(e){var n=e.type,t=e.uuid;return"".concat(n,"s/").concat(t,".py")}},8955:function(e,n,t){"use strict";t.d(n,{G7:function(){return x},ZP:function(){return P},u$:function(){return j}});var r=t(75582),o=t(82394),i=t(26304),u=t(90299),c=t(9134),l=t(74407),a=t(38276),s=t(30160),d=t(75499),p=t(70515),f=t(16488),v=t(42122),b=t(28598),h=["height","heightOffset","pipeline","selectedRun","selectedTab","setSelectedTab"];function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j=76,O={uuid:"Run details"},y={uuid:"Dependency tree"},x=[y,O];function P(e){var n=e.height,t=e.heightOffset,o=e.pipeline,m=e.selectedRun,P=e.selectedTab,_=e.setSelectedTab,Z=g({},(0,i.Z)(e,h));m?Z.blockStatus=(0,f.IJ)(null===m||void 0===m?void 0:m.block_runs):Z.noStatus=!0;var k=(0,v.Kn)(null===m||void 0===m?void 0:m.variables)?g({},null===m||void 0===m?void 0:m.variables):(null===m||void 0===m?void 0:m.variables)||{},S=null===m||void 0===m?void 0:m.event_variables;if(S&&(0,v.Kn)(S)&&!(0,v.Qr)(S))if((0,v.Kn)(k)&&k.hasOwnProperty("event")){var T=(0,v.Kn)(k.event)?k.event:{};k.event=g(g({},T),S)}else k.event=g({},S);var C=[];k&&JSON.stringify(k,null,2).split("\n").forEach((function(e){C.push("    ".concat(e))}));var L=m&&[["Run ID",null===m||void 0===m?void 0:m.id],["Variables",(0,b.jsx)(c.Z,{language:"json",small:!0,source:C.join("\n")},"variable_value")]],w=m&&(0,b.jsx)(a.Z,{pb:p.cd,px:p.cd,children:(0,b.jsx)(d.Z,{alignTop:!0,columnFlex:[null,1],columnMaxWidth:function(e){return 1===e?"100px":null},rows:L.map((function(e,n){var t=(0,r.Z)(e,2),o=t[0],i=t[1];return[(0,b.jsx)(s.ZP,{monospace:!0,muted:!0,children:o},"key_".concat(n)),(0,b.jsx)(s.ZP,{monospace:!0,textOverflow:!0,children:i},"val_".concat(n))]})),uuid:"LogDetail"})}),D=P&&_;return(0,b.jsxs)(b.Fragment,{children:[D&&(0,b.jsx)(a.Z,{py:p.cd,children:(0,b.jsx)(u.Z,{onClickTab:_,selectedTabUUID:null===P||void 0===P?void 0:P.uuid,tabs:x})}),(!D||y.uuid===(null===P||void 0===P?void 0:P.uuid))&&(0,b.jsx)(l.ZP,g(g({},Z),{},{height:n,heightOffset:(t||0)+(D?j:0),pipeline:o})),O.uuid===(null===P||void 0===P?void 0:P.uuid)&&w]})}},55072:function(e,n,t){"use strict";t.d(n,{Et:function(){return p},Q:function(){return d}});t(82684);var r=t(71180),o=t(55485),i=t(38276),u=t(31748),c=t(72473),l=t(79633),a=t(70515),s=t(28598),d=30,p=9;n.ZP=function(e){var n=e.page,t=e.maxPages,d=e.onUpdate,p=e.totalPages,f=[],v=t;if(v>p)f=Array.from({length:p},(function(e,n){return n}));else{var b=Math.floor(v/2),h=n-b;n+b>=p?(h=p-v+2,v-=2):n-b<=0?(h=0,v-=2):(v-=4,h=n-Math.floor(v/2)),f=Array.from({length:v},(function(e,n){return n+h}))}return(0,s.jsx)(s.Fragment,{children:p>0&&(0,s.jsxs)(o.ZP,{alignItems:"center",children:[(0,s.jsx)(r.ZP,{disabled:0===n,onClick:function(){return d(n-1)},children:(0,s.jsx)(c.Hd,{size:1.5*a.iI,stroke:u.Av})}),!f.includes(0)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{ml:1,children:(0,s.jsx)(r.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return d(0)},children:1})},0),!f.includes(1)&&(0,s.jsx)(i.Z,{ml:1,children:(0,s.jsx)(r.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0)]}),f.map((function(e){return(0,s.jsx)(i.Z,{ml:1,children:(0,s.jsx)(r.ZP,{backgroundColor:e===n&&l.a$,borderLess:!0,noBackground:!0,notClickable:e===n,onClick:function(){e!==n&&d(e)},children:e+1})},e)})),!f.includes(p-1)&&(0,s.jsxs)(s.Fragment,{children:[!f.includes(p-2)&&(0,s.jsx)(i.Z,{ml:1,children:(0,s.jsx)(r.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0),(0,s.jsx)(i.Z,{ml:1,children:(0,s.jsx)(r.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return d(p-1)},children:p})},p-1)]}),(0,s.jsx)(i.Z,{ml:1}),(0,s.jsx)(r.ZP,{disabled:n===p-1,onClick:function(){return d(n+1)},children:(0,s.jsx)(c.Kw,{size:1.5*a.iI,stroke:u.Av})})]})})}},89706:function(e,n,t){"use strict";t.d(n,{JD:function(){return b},Lu:function(){return i},PF:function(){return p},dT:function(){return u},n6:function(){return a},nB:function(){return v},oy:function(){return f},xF:function(){return d}});var r,o,i,u,c=t(82394),l=t(44425);!function(e){e.CSV="csv",e.JSON="json",e.MD="md",e.PY="py",e.R="r",e.SH="sh",e.SQL="sql",e.TXT="txt",e.YAML="yaml",e.YML="yml"}(i||(i={})),function(e){e.INIT_PY="__init__.py",e.METADATA_YAML="metadata.yaml",e.REQS_TXT="requirements.txt"}(u||(u={}));var a=[i.PY,i.SQL],s=[i.JSON,i.MD,i.PY,i.R,i.SH,i.SQL,i.TXT,i.YAML,i.YML],d=new RegExp(s.map((function(e){return".".concat(e,"$")})).join("|")),p=(new RegExp(s.map((function(e){return".".concat(e,"$")})).join("|")),"charts"),f="pipelines",v=(r={},(0,c.Z)(r,i.MD,l.t6.MARKDOWN),(0,c.Z)(r,i.JSON,i.JSON),(0,c.Z)(r,i.PY,l.t6.PYTHON),(0,c.Z)(r,i.R,l.t6.R),(0,c.Z)(r,i.SQL,l.t6.SQL),(0,c.Z)(r,i.TXT,"text"),(0,c.Z)(r,i.YAML,l.t6.YAML),(0,c.Z)(r,i.YML,l.t6.YAML),r),b=(o={},(0,c.Z)(o,l.t6.MARKDOWN,i.MD),(0,c.Z)(o,l.t6.PYTHON,i.PY),(0,c.Z)(o,l.t6.R,i.R),(0,c.Z)(o,l.t6.SQL,i.SQL),(0,c.Z)(o,l.t6.YAML,i.YAML),(0,c.Z)(o,"text",i.TXT),o)},9134:function(e,n,t){"use strict";var r=t(82684),o=t(21124),i=t(68432),u=t(38626),c=t(65292),l=t(44897),a=t(95363),s=t(70515),d=t(28598);n.Z=function(e){var n=e.language,t=e.maxWidth,p=e.showLineNumbers,f=e.small,v=e.source,b=e.wrapLines,h=(0,r.useContext)(u.ThemeContext);function m(e){var r=e.value;return(0,d.jsx)(i.Z,{customStyle:{backgroundColor:(h.background||l.Z.background).popup,border:"none",borderRadius:"none",boxShadow:"none",fontFamily:a.Vp,fontSize:f?12:14,marginBottom:0,marginTop:0,maxWidth:t,paddingBottom:2*s.iI,paddingTop:2*s.iI},language:n,lineNumberStyle:{color:(h.content||l.Z.content).muted},showLineNumbers:p,style:c._4,useInlineStyles:!0,wrapLines:b,children:r})}return(0,d.jsx)(o.D,{components:{code:function(e){var n=e.children;return(0,d.jsx)(m,{value:n})}},children:v})}}}]);