!function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){o(1),e.exports=o(11)},function(e,t,o){Nova.booting(function(e,t){t.addRoutes([{name:"nova-advanced-command-runner",path:"/nova-advanced-command-runner",component:o(2)}])})},function(e,t,o){var n=o(8)(o(9),o(10),!1,function(e){o(3)},null,null);e.exports=n.exports},function(e,t,o){var n=o(4);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(6)("57c950cf",n,!0,{})},function(e,t,o){(e.exports=o(5)(!1)).push([e.i,".history-table{text-align:left}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary.focus,.btn-secondary:focus{-webkit-box-shadow:0 0 0 .2rem hsla(208,6%,54%,.5);box-shadow:0 0 0 .2rem hsla(208,6%,54%,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem hsla(208,6%,54%,.5);box-shadow:0 0 0 .2rem hsla(208,6%,54%,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{-webkit-box-shadow:0 0 0 .2rem rgba(72,180,97,.5);box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(72,180,97,.5);box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{-webkit-box-shadow:0 0 0 .2rem rgba(58,176,195,.5);box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(58,176,195,.5);box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{-webkit-box-shadow:0 0 0 .2rem rgba(222,170,12,.5);box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(222,170,12,.5);box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{-webkit-box-shadow:0 0 0 .2rem hsla(220,4%,85%,.5);box-shadow:0 0 0 .2rem hsla(220,4%,85%,.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem hsla(220,4%,85%,.5);box-shadow:0 0 0 .2rem hsla(220,4%,85%,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{-webkit-box-shadow:0 0 0 .2rem rgba(82,88,93,.5);box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(82,88,93,.5);box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge-success{color:#fff;background-color:#28a745}.badge-error{color:#fff;background-color:#dc3545}.badge-pending{color:#212529;background-color:#ffc107}.boton_clear_history{display:none}.table-history th{text-align:left}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var a=(s=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[o].concat(r).concat([a]).join("\n")}var s;return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(n[r]=!0)}for(a=0;a<e.length;a++){var s=e[a];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),t.push(s))}},t}},function(e,t,o){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a=o(7),r={},s=n&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,d=!1,c=function(){},u=null,b="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e){for(var t=0;t<e.length;t++){var o=e[t],n=r[o.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](o.parts[a]);for(;a<o.parts.length;a++)n.parts.push(v(o.parts[a]));n.parts.length>o.parts.length&&(n.parts.length=o.parts.length)}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(v(o.parts[a]));r[o.id]={id:o.id,refs:1,parts:s}}}}function p(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function v(e){var t,o,n=document.querySelector("style["+b+'~="'+e.id+'"]');if(n){if(d)return c;n.parentNode.removeChild(n)}if(f){var a=l++;n=i||(i=p()),t=_.bind(null,n,a,!1),o=_.bind(null,n,a,!0)}else n=p(),t=function(e,t){var o=t.css,n=t.media,a=t.sourceMap;n&&e.setAttribute("media",n);u.ssrId&&e.setAttribute(b,t.id);a&&(o+="\n/*# sourceURL="+a.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");if(e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,n),o=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}e.exports=function(e,t,o,n){d=o,u=n||{};var s=a(e,t);return m(s),function(t){for(var o=[],n=0;n<s.length;n++){var i=s[n];(l=r[i.id]).refs--,o.push(l)}t?m(s=a(e,t)):s=[];for(n=0;n<o.length;n++){var l;if(0===(l=o[n]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete r[l.id]}}}};var g,h=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function _(e,t,o,n){var a=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=h(t,a);else{var r=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}},function(e,t){e.exports=function(e,t){for(var o=[],n={},a=0;a<t.length;a++){var r=t[a],s=r[0],i={id:e+":"+a,css:r[1],media:r[2],sourceMap:r[3]};n[s]?n[s].parts.push(i):o.push(n[s]={id:s,parts:[i]})}return o}},function(e,t){e.exports=function(e,t,o,n,a,r){var s,i=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(s=e,i=e.default);var d,c="function"==typeof i?i.options:i;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),o&&(c.functional=!0),a&&(c._scopeId=a),r?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=d):n&&(d=n),d){var u=c.functional,b=u?c.render:c.beforeCreate;u?(c._injectStyles=d,c.render=function(e,t){return d.call(t),b(e,t)}):c.beforeCreate=b?[].concat(b,d):[d]}return{esModule:s,exports:i,options:c}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{modalOpen:!1,running:!1,groups:[],commands:{},customCommand:{label:"Custom Command",type:"primary",help:"are you sure you want to run this command?",command_type:"artisan",command:"",variables:[],flags:[]},history:{},runningCommand:{},help:"",heading:"",customCommands:{}}},created:function(){this.getData()},methods:{clearHistory:function(){this.openModal({label:"Clear Command Run History",type:"primary",help:"are you sure you want to clear the command run history?",command_type:"artisan",command:"cache:forget nova-advanced-command-runner-history",variables:[],flags:[]})},runCustomCommand:function(){this.customCommand.command?this.openModal(this.customCommand):this.$toasted.show("Please enter a command",{type:"error"})},getData:function(){var e=this;Nova.request().get("/nova-vendor/binarybuilds/nova-advanced-command-runner").then(function(t){e.groups=[],t.data.commands.forEach(function(t){var o=t.group;e.groups.indexOf(o)<0&&e.groups.push(o)}),e.commands=t.data.commands,e.history=t.data.history,e.help=t.data.help,e.heading=t.data.heading,e.customCommands=t.data.custom_commands,e.customCommands&&(e.customCommand.command_type=Object.keys(e.customCommands)[0])})},runCommand:function(){var e=this,t=!0;this.runningCommand.variables&&Object.keys(this.runningCommand.variables).forEach(function(o){e.runningCommand.variables[o].value||(t=!1,e.$toasted.show(e.runningCommand.variables[o].label+" is required",{type:"error"}))}),t&&(this.running=!0,Nova.request().post("/nova-vendor/binarybuilds/nova-advanced-command-runner/run",{command:this.runningCommand}).then(function(t){e.$toasted.show(t.data.result,{type:t.data.status?"success":"error"}),e.running=!1,e.history=t.data.history,e.closeModal()}).catch(function(t){e.running=!1}))},openModal:function(e){this.runningCommand=e,this.modalOpen=!0},closeModal:function(){this.modalOpen=!1,this.runningCommand={}}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("portal",{attrs:{to:"modals"}},[e.modalOpen?o("modal",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog"}},[o("div",{staticClass:"bg-white rounded-lg shadow-lg overflow-hidden w-action"},[o("div",[o("h2",{staticClass:"pt-8 px-8 text-90 font-normal text-xl"},[e._v(e._s(e.runningCommand.label))]),e._v(" "),o("p",{staticClass:"text-80 px-8 my-8",domProps:{innerHTML:e._s(e.runningCommand.help)}})]),e._v(" "),e._l(e.runningCommand.variables,function(t,n){return o("div",{staticClass:"flex border-b border-40 p-2 flex-col"},[o("label",{staticClass:"inline-block text-80 pt-2 leading-tight w-full capitalize"},[e._v(e._s(t.label))]),e._v(" "),"select"===t.field?o("select",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"variable.value"}],staticClass:"form-control form-select",on:{change:function(o){var n=Array.prototype.filter.call(o.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(t,"value",o.target.multiple?n:n[0])}}},[o("option",{attrs:{value:"",disabled:"disabled"}},[e._v(e._s(t.placeholder))]),e._v(" "),e._l(t.options,function(t,n){return o("option",{domProps:{value:n}},[e._v(e._s(t))])})],2):"checkbox"===t.field?o("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"variable.value"}],staticClass:"w-full form-control form-input form-input-bordered w-full",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.value)?e._i(t.value,null)>-1:t.value},on:{change:function(o){var n=t.value,a=o.target,r=!!a.checked;if(Array.isArray(n)){var s=e._i(n,null);a.checked?s<0&&e.$set(t,"value",n.concat([null])):s>-1&&e.$set(t,"value",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(t,"value",r)}}}):"radio"===t.field?o("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"variable.value"}],staticClass:"w-full form-control form-input form-input-bordered w-full",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:e._q(t.value,null)},on:{change:function(o){return e.$set(t,"value",null)}}}):o("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"variable.value"}],staticClass:"w-full form-control form-input form-input-bordered w-full",attrs:{placeholder:t.placeholder,type:t.field},domProps:{value:t.value},on:{input:function(o){o.target.composing||e.$set(t,"value",o.target.value)}}})])}),e._v(" "),e._l(e.runningCommand.flags,function(t,n){return o("div",{staticClass:"flex border-b border-40 p-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.runningCommand.flags[n].selected,expression:"runningCommand.flags[index].selected"}],staticClass:"checkbox m-2",attrs:{type:"checkbox",id:"flag-"+n},domProps:{checked:Array.isArray(e.runningCommand.flags[n].selected)?e._i(e.runningCommand.flags[n].selected,null)>-1:e.runningCommand.flags[n].selected},on:{change:function(t){var o=e.runningCommand.flags[n].selected,a=t.target,r=!!a.checked;if(Array.isArray(o)){var s=e._i(o,null);a.checked?s<0&&e.$set(e.runningCommand.flags[n],"selected",o.concat([null])):s>-1&&e.$set(e.runningCommand.flags[n],"selected",o.slice(0,s).concat(o.slice(s+1)))}else e.$set(e.runningCommand.flags[n],"selected",r)}}}),e._v(" "),o("label",{staticClass:"m-2",attrs:{for:"flag-"+n}},[e._v(e._s(t.label))])])}),e._v(" "),o("div",{staticClass:"bg-30 px-6 py-3 flex"},[o("div",{staticClass:"flex items-center ml-auto"},[o("button",{staticClass:"btn text-80 font-normal h-9 px-3 mr-3 btn-link",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.closeModal(t)}}},[e._v("Cancel")]),e._v(" "),o("button",{staticClass:"btn btn-default",class:e.runningCommand.type?"btn-"+e.runningCommand.type:"btn-primary",attrs:{type:"submit"},on:{click:function(t){return e.runCommand()}}},[e.running?e._e():o("span",[e._v("Run Command")]),e._v(" "),e.running?o("svg",{staticClass:"mx-auto block",staticStyle:{width:"30px"},attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"}},[o("circle",{attrs:{cx:"15",cy:"15",r:"10.9958"}},[o("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e._v(" "),o("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e._v(" "),o("circle",{attrs:{cx:"60",cy:"15",r:"13.0042","fill-opacity":"0.3"}},[o("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e._v(" "),o("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e._v(" "),o("circle",{attrs:{cx:"105",cy:"15",r:"10.9958"}},[o("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e._v(" "),o("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])]):e._e()])])])],2)]):e._e()],1),e._v(" "),o("heading",{staticClass:"mb-6"},[e._v(e._s(e.heading))]),e._v(" "),e.help?o("card",{staticClass:"p-3",domProps:{innerHTML:e._s(e.help)}}):e._e(),e._v(" "),Array.isArray(e.customCommands)?e._e():o("div",{staticClass:"flex mt-6 mb-6"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.customCommand.command_type,expression:"customCommand.command_type"}],staticClass:"form-control form-select rounded-r-none",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.customCommand,"command_type",t.target.multiple?o:o[0])}}},e._l(e.customCommands,function(t,n){return o("option",{domProps:{value:n}},[e._v(e._s(t))])}),0),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.customCommand.command,expression:"customCommand.command"}],staticClass:"w-full form-control form-input form-input-bordered mr-2 rounded-l-none",attrs:{type:"text",placeholder:"Enter a Command..."},domProps:{value:e.customCommand.command},on:{input:function(t){t.target.composing||e.$set(e.customCommand,"command",t.target.value)}}}),e._v(" "),o("button",{staticClass:"items-right btn btn-default btn-primary",attrs:{type:"button"},on:{click:e.runCustomCommand}},[e._v("Run")])]),e._v(" "),o("card",{staticClass:"flex flex-col items-center",staticStyle:{"min-height":"300px"}},[o("h2",{staticClass:"text-black text-3xl font-light mt-4"},[e._v("\n            Available commands\n        ")]),e._v(" "),o("div",{staticClass:"flex bg-grey-lighter"},e._l(e.groups,function(t){return o("div",{staticClass:"flex-1 text-grey-darker text-center bg-grey-light px-4 py-2 m-2"},[o("h4",{staticClass:"text-black text-2xl text-60 font-light mb-6 mt-4"},[e._v("\n                    "+e._s(t||"Unnamed group")+"\n                ")]),e._v(" "),e._l(e.commands,function(n,a){return n.group===t?o("button",{staticClass:"items-left btn btn-default mb-2",class:n.type?"btn-"+n.type:"btn-primary",staticStyle:{width:"100%"},attrs:{type:"button"},on:{click:function(t){return e.openModal(n)}}},[e._v("\n                    "+e._s(n.label)+"\n                ")]):e._e()})],2)}),0)]),e._v(" "),o("div",{staticClass:"flex justify-between mt-6 mb-6 d-none"},[o("heading",{},[e._v("Historial")]),e._v(" "),o("button",{staticClass:"items-right btn btn-default btn-danger boton_clear_history d-none",staticStyle:{display:"none"},attrs:{type:"button"}},[e._v("Limpiar Historial")])],1),e._v(" "),o("card",{staticClass:"mb-6 max-w-full overflow-x-auto"},[o("table",{staticClass:"table w-full table-history"},[o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[e._v("Comando")]),e._v(" "),o("th",{attrs:{scope:"col"}},[e._v("Tipo")]),e._v(" "),o("th",{attrs:{scope:"col"}},[e._v("Ejecutado por")]),e._v(" "),o("th",{attrs:{scope:"col"}},[e._v("Estado")]),e._v(" "),o("th",{attrs:{scope:"col"}},[e._v("Resultado")]),e._v(" "),o("th",{attrs:{scope:"col"}},[e._v("Duracion")]),e._v(" "),o("th",{staticClass:"table-fit",attrs:{scope:"col"}},[e._v("Desde hace")])])]),e._v(" "),o("tbody",e._l(e.history,function(t){return o("tr",[o("td",[e._v(e._s(t.run))]),e._v(" "),o("td",[e._v(e._s(t.type))]),e._v(" "),o("td",[e._v(e._s(t.ran_by))]),e._v(" "),o("td",[o("span",{staticClass:"badge",class:"badge-"+t.status},[e._v(e._s(t.status))])]),e._v(" "),o("td",[o("pre",{domProps:{innerHTML:e._s(t.result)}})]),e._v(" "),o("td",[e._v(e._s(t.duration?t.duration+" sec.":""))]),e._v(" "),o("td",{staticClass:"table-fit"},[e._v(e._s(t.time))])])}),0)])])],1)},staticRenderFns:[]}},function(e,t){}]);