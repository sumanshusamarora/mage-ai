(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2403],{10831:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r,i=n(77837),o=n(82394),s=n(75582),u=n(38860),c=n.n(u),a=n(82684),l=n(21764),d=n(83455),p=n(60328),h=n(38341),f=n(67971),y=n(87372),b=n(10919),m=n(41788),j=n(55378),v=n(30775),Z=n(86673);!function(e){e.SSH="ssh",e.HTTPS="https"}(r||(r={}));var g=[{autoComplete:"remote_repo_link",label:"Remote repo url",required:!0,uuid:"remote_repo_link"},{autoComplete:"repo_path",label:"Local directory path",labelDescription:"Defaults to Python's os.getcwd() if omitted. Mage will create this local directory if it doesn't already exist.",uuid:"repo_path"}],_=[{autoComplete:"username",label:"Username",uuid:"username"},{autoComplete:"email",label:"Email",uuid:"email"},{autoComplete:"ssh_public_key",label:"SSH public key in base64",labelDescription:'Run "cat ~/.ssh/id_rsa.pub | base64 | tr -d \\\\n && echo" in terminal to get base64 encoded public key and paste the result here. The key will be stored as a Mage secret.',type:"password",uuid:"ssh_public_key"},{autoComplete:"ssh_private_key",label:"SSH private key in base64",labelDescription:'Follow same steps as the public key, but run "cat ~/.ssh/id_rsa | base64 | tr -d \\\\n && echo" instead. The key will be stored as a Mage secret.',type:"password",uuid:"ssh_private_key"}],x=[{autoComplete:"username",label:"Username",required:!0,uuid:"username"},{autoComplete:"email",label:"Email",required:!0,uuid:"email"},{autoComplete:"access_token",label:"Access token",labelDescription:"Add your Git access token to authenticate with your provided username. The access token will be stored as a Mage secret.",required:!0,type:"password",uuid:"access_token"}],w=[{autoComplete:"branch",label:"Branch name",required:!0,uuid:"branch"}],O=n(19711),k=n(82944),P=n(70902),S=n(82531),C=n(49125),T=n(79585),D=n(96510),E=n(28598);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(){var e=S.ZP.syncs.list().data,t=(0,a.useState)(null),n=t[0],i=t[1],u=(0,a.useState)(null),c=u[0],m=u[1],q=(0,a.useState)(null),H=q[0],I=q[1];(0,a.useEffect)((function(){if(e){var t,n=null===e||void 0===e||null===(t=e.syncs)||void 0===t?void 0:t[0];i(n),I(!(null===n||void 0===n||!n.branch))}}),[e]);var N=(0,d.Db)(S.ZP.syncs.useCreate(),{onSuccess:function(e){return(0,D.wD)(e,{callback:function(e){var t=e.sync;t&&(i(t),window.location.reload(),l.Am.success("Sync saved",{position:l.Am.POSITION.BOTTOM_RIGHT,toastId:"data_sync_success"}))},onErrorCallback:function(e){var t=e.error,n=t.exception;t.message;return m(n)}})}}),A=(0,s.Z)(N,2),G=A[0],R=A[1].isLoading,L=(0,d.Db)(S.ZP.syncs.useUpdate("git"),{onSuccess:function(e){return(0,D.wD)(e,{callback:function(e){e.sync&&l.Am.success("Data synced!",{position:l.Am.POSITION.BOTTOM_RIGHT,toastId:"data_sync_success"})},onErrorCallback:function(e){var t=e.error,n=t.exception;t.message;return m(n)}})}}),U=(0,s.Z)(L,2),W=U[0],B=U[1].isLoading,F=(0,a.useMemo)((function(){return(null===n||void 0===n?void 0:n.auth_type)||r.SSH}),[null===n||void 0===n?void 0:n.auth_type]),Y=(0,a.useMemo)((function(){return F===r.HTTPS?x:_}),[F]);return(0,E.jsx)(v.Z,{uuidItemSelected:T.fF,uuidWorkspaceSelected:T.WH,children:(0,E.jsxs)(Z.Z,{p:C.cd,style:{width:"600px"},children:[(0,E.jsx)(y.Z,{children:"Git repository settings"}),(0,E.jsx)(Z.Z,{mt:1,children:(0,E.jsx)(O.ZP,{bold:!0,children:"Authentication type"})}),(0,E.jsx)(Z.Z,{mt:1,children:(0,E.jsx)(j.Z,{compact:!0,label:"Authentication type",onChange:function(e){var t=e.target.value;i((function(e){return M(M({},e),{},{auth_type:t})}))},value:F,children:Object.entries(r).map((function(e){var t=(0,s.Z)(e,2),n=t[0],r=t[1];return(0,E.jsx)("option",{value:r,children:n},r)}))})}),(0,E.jsxs)(Z.Z,{mt:1,children:[(0,E.jsx)(O.ZP,{bold:!0,children:"You can enable the Git integration by supplying the url for your remote repository."}),F===r.SSH&&(0,E.jsxs)(O.ZP,{bold:!0,children:["You will need to ",(0,E.jsx)(b.Z,{href:"https://docs.mage.ai/developing-in-the-cloud/setting-up-git",openNewWindow:!0,children:"set up your SSH key"})," if you have not done so already."]})]}),(0,E.jsx)("form",{children:g.map((function(e){var t=e.autoComplete,r=e.disabled,s=e.label,u=e.labelDescription,c=e.required,a=e.type,l=e.uuid;return(0,E.jsxs)(Z.Z,{mt:2,children:[u&&(0,E.jsx)(Z.Z,{mb:1,children:(0,E.jsx)(O.ZP,{small:!0,children:u})}),(0,E.jsx)(k.Z,{autoComplete:t,disabled:r,label:s,onChange:function(e){i((function(t){return M(M({},t),{},(0,o.Z)({},l,e.target.value))}))},primary:!0,required:c,setContentOnMount:!0,type:a,value:(null===n||void 0===n?void 0:n[l])||""})]},l)}))}),(0,E.jsx)(Z.Z,{mt:C.Mq,children:(0,E.jsxs)(O.ZP,{bold:!0,children:["These fields are ",F===r.HTTPS?"required":"recommended"," to help Mage configure your Git settings."]})}),(0,E.jsx)("form",{children:Y.map((function(e){var t=e.autoComplete,r=e.disabled,s=e.label,u=e.labelDescription,c=e.required,a=e.type,l=e.uuid;return(0,E.jsxs)(Z.Z,{mt:2,children:[u&&(0,E.jsx)(Z.Z,{mb:1,children:(0,E.jsx)(O.ZP,{small:!0,children:u})}),(0,E.jsx)(k.Z,{autoComplete:t,disabled:r,label:s,onChange:function(e){i((function(t){return M(M({},t),{},(0,o.Z)({},l,e.target.value))}))},primary:!0,required:c,setContentOnMount:!0,type:a,value:(null===n||void 0===n?void 0:n[l])||""})]},l)}))}),(0,E.jsx)(Z.Z,{mt:C.Mq,children:(0,E.jsxs)(f.Z,{alignItems:"center",children:[(0,E.jsx)(Z.Z,{mr:2,children:(0,E.jsx)(P.Z,{checked:!!H,onCheck:function(){return I((function(e){var t=!e;return t||i((function(e){return M(M({},e),{},{branch:null,sync_on_pipeline_run:!1})})),t}))}})}),(0,E.jsxs)(O.ZP,{bold:!0,large:!0,children:["Use ",(0,E.jsx)(b.Z,{bold:!0,href:"https://docs.mage.ai/production/data-sync/git#git-sync",large:!0,openNewWindow:!0,children:"Git Sync"})]})]})}),H&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Z.Z,{mt:1,children:(0,E.jsx)(O.ZP,{bold:!0,children:"(OPTIONAL) You can also set up your project to only sync with a specified branch."})}),(0,E.jsx)("form",{children:w.map((function(e){var t=e.autoComplete,r=e.disabled,s=e.label,u=e.required,c=e.type,a=e.uuid;return(0,E.jsx)(Z.Z,{mt:2,children:(0,E.jsx)(k.Z,{autoComplete:t,disabled:r,label:s,onChange:function(e){i((function(t){return M(M({},t),{},(0,o.Z)({},a,e.target.value))}))},primary:!0,required:u,setContentOnMount:!0,type:c,value:(null===n||void 0===n?void 0:n[a])||""})},a)}))}),(0,E.jsx)(f.Z,{alignItems:"center",children:(0,E.jsx)(Z.Z,{mt:2,children:(0,E.jsx)(h.Z,{checked:null===n||void 0===n?void 0:n.sync_on_pipeline_run,label:"Sync before each trigger run",onClick:function(){i((function(e){return M(M({},e),{},{sync_on_pipeline_run:!(null!==n&&void 0!==n&&n.sync_on_pipeline_run)})}))}})})})]}),(0,E.jsx)(Z.Z,{mt:2,children:(0,E.jsx)(p.Z,{loading:R,onClick:function(){return G({sync:n})},primary:!0,children:"Save repository settings"})}),c&&(0,E.jsx)(Z.Z,{mt:1,children:(0,E.jsx)(O.ZP,{danger:!0,children:c})}),H&&(0,E.jsxs)(Z.Z,{mt:C.HN,children:[(0,E.jsx)(y.Z,{children:"Synchronize code from remote repository"}),(0,E.jsx)(Z.Z,{mt:1,children:(0,E.jsxs)(O.ZP,{children:["Running the sync from this page will run a one time sync with the remote repository.",(0,E.jsx)("br",{}),"This may ",(0,E.jsx)(O.ZP,{bold:!0,danger:!0,inline:!0,children:"overwrite"})," your existing data, so make sure you\u2019ve committed or backed up your current changes."]})}),(0,E.jsx)(Z.Z,{mt:2,children:(0,E.jsx)(p.Z,{loading:B,onClick:function(){return W({sync:{action_type:"sync_data"}})},warning:!0,children:"Synchronize code"})})]})]})})}H.getInitialProps=(0,i.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var I=(0,m.Z)(H)},37056:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/workspace/sync-data",function(){return n(10831)}])},80022:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},15544:function(e,t,n){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,{Z:function(){return r}})},99177:function(e,t,n){"use strict";function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,{Z:function(){return i}})},93189:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(12539),i=n(80022);function o(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}}},function(e){e.O(0,[844,881,1005,3077,9774,2888,179],(function(){return t=37056,e(e.s=t);var t}));var t=e.O();_N_E=t}]);