!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},i=[],r=0;r<e.length;r++){var o=e[r],s=t.base?o[0]+t.base:o[0],d=n[s]||0,l="".concat(s," ").concat(d);n[s]=d+1;var p=c(l),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==p?(a[p].references++,a[p].updater(u)):a.push({identifier:l,updater:b(u,t),references:1}),i.push(l)}return i}function d(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,p=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=p(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,h=0;function b(e,t){var n,i,r;if(t.singleton){var o=h++;n=m||(m=d(t)),i=u.bind(null,n,o,!1),r=u.bind(null,n,o,!0)}else n=d(t),i=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=c(n[i]);a[r].references--}for(var o=s(e,t),d=0;d<n.length;d++){var l=c(n[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(a=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([r]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);i&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){var i=n(0),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},a=(i(r,o),r.locals?r.locals:{});e.exports=a},function(e,t,n){(t=n(1)(!1)).push([e.i,"*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}ul{list-style-type:none}\n",""]),e.exports=t},function(e,t,n){var i=n(0),r=n(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},a=(i(r,o),r.locals?r.locals:{});e.exports=a},function(e,t,n){(t=n(1)(!1)).push([e.i,".hidden{display:none}button{background:#006994;color:white;font-size:14px;font-weight:bold;padding:7px 15px;border:0;border-radius:3px;cursor:pointer}button.edit{background:white;color:#006994;border:solid 2px #006994}button.remove{background:white;color:#8b0000;border:solid 2px #8b0000}\n",""]),e.exports=t},function(e,t,n){var i=n(0),r=n(7);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},a=(i(r,o),r.locals?r.locals:{});e.exports=a},function(e,t,n){(t=n(1)(!1)).push([e.i,"body{display:flex;flex-direction:column;min-height:100vh;background:#f5f5f5;font-family:Arial, Helvetica, sans-serif}body main{flex:2}body main section{width:800px;max-width:90%;margin:50px auto}body main section#username h2{font-size:28px;margin-bottom:35px}body main section #welcome-message{font-size:28px;margin-bottom:35px}body main section .trip-list-container{background:white;padding:25px;border-radius:10px}body main section .trip-list-container h3{background:#f5f5f5;font-size:24px;padding:10px;border-radius:5px}body main section .trip-list-container .no-results{font-size:20px;color:#ccc;margin-top:15px}body main section .trip-list-container .trip-container{position:relative;display:flex;flex-direction:row;margin:25px 0 50px}body main section .trip-list-container .trip-container:last-of-type{margin-bottom:0}body main section .trip-list-container .trip-container .trip-expired{position:absolute;top:0;left:0;height:100%;width:100%;padding:10px;background:rgba(0,0,0,0.65);z-index:+1;border-radius:5px}body main section .trip-list-container .trip-container .trip-expired div{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center}body main section .trip-list-container .trip-container .trip-expired div p{color:white;font-size:18px;font-weight:bold;margin-bottom:15px}body main section .trip-list-container .trip-container .trip-expired div .remove{border:0}body main section .trip-list-container .trip-container .trip-image{position:relative;width:35%;min-height:250px;overflow:hidden;border-radius:5px}body main section .trip-list-container .trip-container .trip-image img{position:absolute;width:auto;height:100%;top:50%;left:50%;transform:translate(-50%, -50%)}body main section .trip-list-container .trip-container .trip-image .countdown{position:absolute;bottom:0;width:100%;background:rgba(250,250,250,0.85);padding:15px;text-align:center}body main section .trip-list-container .trip-container .trip-info{width:65%;padding:10px 0 10px 25px}body main section .trip-list-container .trip-container .trip-info h4{font-size:20px;font-weight:bold;border-bottom:solid 2px #f5f5f5;margin-bottom:15px;padding:10px 0}body main section .trip-list-container .trip-container .trip-info .trip-date{font-size:16px;color:#ccc}body main section .trip-list-container .trip-container .trip-info button{margin:15px 0 25px}body main section .trip-list-container .trip-container .trip-info .trip-weather h5{font-size:20px;color:#808080;width:100%;margin:15px 0}body main section .trip-list-container .trip-container .trip-info .trip-weather .weather-container{display:flex;flex-direction:row;align-items:stretch}body main section .trip-list-container .trip-container .trip-info .trip-weather .weather-container .weather-day{flex:1;width:19%;margin:0 1% 0 0;background:#f5f5f5;padding:10px 10px 0;text-align:center;border-radius:5px}body main section .trip-list-container .trip-container .trip-info .trip-weather .weather-container .weather-day .weather-date{color:#808080;font-size:18px;margin-bottom:5px}body main section .trip-list-container .trip-container .trip-info .trip-weather .weather-container .weather-day .weather-desc{color:#808080;font-size:11px}body main section .trip-list-container .trip-container .trip-info .trip-weather .weather-container .weather-day img{height:35px;width:auto}body main section .trip-list-container .trip-container .trip-info .trip-weather .weather-container .weather-day .weather-type{color:#808080;font-size:16px;margin-bottom:5px}body main section .trip-list-container .trip-container .trip-info .trip-weather .weather-container .weather-day .weather-stat{color:#808080;font-size:22px;margin-bottom:15px}@media (max-width: 650px){body main section .trip-list-container .trip-container{display:block}body main section .trip-list-container .trip-container .trip-info,body main section .trip-list-container .trip-container .trip-image{width:100%;padding:0}}\n",""]),e.exports=t},function(e,t,n){var i=n(0),r=n(9);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},a=(i(r,o),r.locals?r.locals:{});e.exports=a},function(e,t,n){(t=n(1)(!1)).push([e.i,"footer{border-top:solid 1px #323232;color:#323232;padding:20px}.overlay{display:none;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.65)}.overlay.show{display:block}.overlay p{display:inline-block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background:white;padding:10px;border-radius:5px;font-size:20px}\n",""]),e.exports=t},function(e,t,n){var i=n(0),r=n(11);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},a=(i(r,o),r.locals?r.locals:{});e.exports=a},function(e,t,n){(t=n(1)(!1)).push([e.i,"form{background:white;border-radius:3px;padding:40px;box-shadow:0 0 5px 5px rgba(0,0,0,0.015)}form#add-trip{max-width:350px}form#add-trip button{margin-top:10px}form input{padding:5px 20px;width:100%;line-height:16px;margin:10px 0}form input[type=text]{border-radius:3px;font-size:16px;border:solid 1px #ccc;padding:10px}form input[type=text].error{border:solid 1px #8b0000;background:rgba(139,0,0,0.15)}form input[type=submit]{background:#006994;color:white;font-size:18px;font-weight:bold;padding:15px;border:0;border-radius:3px;cursor:pointer}form .error-text{color:#8b0000}form .error-text.hidden{display:none}#add-trip-container{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:9999}#add-trip-container .form{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}\n",""]),e.exports=t},function(e,t,n){var i=n(0),r=n(13);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},a=(i(r,o),r.locals?r.locals:{});e.exports=a},function(e,t,n){(t=n(1)(!1)).push([e.i,"header{display:flex;justify-content:space-between;padding:10px 40px}header .logo h1{font-size:24px;color:#006994;font-weight:bold}@media (max-width: 500px){header{display:block;padding:0;width:90%;margin:auto}header .logo{padding:10px 0}}\n",""]),e.exports=t},function(e,t,n){"use strict";n.r(t);const i=e=>!!e.value.length,r=(e,t)=>{if(!e.classList.contains("error")){const n=document.createElement("div");n.setAttribute("class","error-text"),n.innerHTML=`<p>${t}</p>`,e.classList.add("error"),e.parentNode.insertBefore(n,e)}},o=e=>{e.classList.remove("error");const t=e.previousSibling;t&&t.parentNode.removeChild(t)},a=()=>{const e=document.querySelector("#trip-location"),t=document.querySelector("#trip-date");e.classList.contains("error")&&o(e),t.classList.contains("error")&&o(t),document.querySelector("#add-trip-container").classList.add("hidden")},c=async()=>{let e=await fetch("/get-data");try{return await e.json()}catch(e){console.log(e)}},s=async e=>{const t=await fetch("/set-data",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:e});try{return t}catch(e){console.log("Error posting data to the server",e)}},d=()=>{document.querySelector(".overlay").classList.add("show")},l=()=>{document.querySelector(".overlay").classList.remove("show")},p=async(e=!1,t)=>{if(e){await u(JSON.parse(t),"Welcome back,");try{l()}catch(e){console.log(e)}}else{await u(t,"Hi");try{l()}catch(e){console.log(e)}}};function u(e,t){return new Promise(n=>{if(document.querySelector("#username").classList.add("hidden"),document.querySelector("#welcome-message")){const n=document.querySelector("#welcome-message");n.innerText=`${t} ${e.user}`,n.classList.contains("hidden")&&n.classList.remove("hidden")}if(!document.querySelector(".trip-list-container")){const e=document.createElement("div");e.classList.add("trip-list-container");const t=document.createElement("h3");t.classList.add("trip-list-header"),t.innerText="Your upcoming trips:",e.appendChild(t),document.querySelector("#main").appendChild(e)}if(document.querySelector(".nav button").classList.contains("hidden")&&document.querySelector(".nav button").classList.remove("hidden"),e.trips){(async e=>{await f(e);try{n()}catch(e){console.log(e)}})(e)}else{const e=document.createElement("p");e.classList.add("no-results"),e.innerText="You haven't added any trips yet.  Add a trip to see it here.",document.querySelector(".trip-list-container")?document.querySelector(".trip-list-container").appendChild(e):tripContainer.appendChild(e),n()}})}const f=e=>new Promise(t=>{const n=Object.entries(e.trips);for(const e of n)if(!document.getElementById(e[0])){const t=new Date,n=new Date(e[1].date),i=new Date-n,r=Math.round(-i/864e5+1),o=n<t,a=document.createElement("div");a.setAttribute("id",e[0]),a.classList.add("trip-container");const c=document.createElement("div");c.classList.add("trip-image");const s=new Image;s.src=e[1].image;const d=document.createElement("p");d.classList.add("countdown"),d.innerText=`Your ${e[1].location} trip is ${r} days away`,c.appendChild(s),c.appendChild(d);const l=document.createElement("div");l.classList.add("trip-info"),l.innerHTML=`<h4 class="trip-title">${e[1].location}</h4>\n          <p class="trip-date">This trip begins: ${n.getMonth()+1}/${n.getDate()}/${n.getFullYear()}</p>`;const p=document.createElement("button");if(p.classList.add("remove"),p.innerHTML='<i class="fas fa-minus-circle"></i> Remove Trip',p.addEventListener("click",(function(e){m(e)})),o){const e=document.createElement("div");e.classList.add("trip-expired");const t=document.createElement("div");t.innerHTML="<p>This trip has passed</p>",t.appendChild(p),e.appendChild(t),a.appendChild(e)}else l.appendChild(p);if(!o)if("forecast"==e[1].weather.type){const t=document.createElement("div");t.classList.add("trip-weather");const n=document.createElement("div");n.classList.add("weather-container");const i=Object.entries(e[1].weather.data);let r=0;for(const e of i){const t=document.createElement("div");t.classList.add("weather-day");const i=new Date(e[0]),o=e[1].weather.description,a=new Image;a.src=` https://www.weatherbit.io/static/img/icons/${e[1].weather.icon}.png`,t.innerHTML=`<p class="weather-date">${i.getMonth()+1}/${i.getDate()}</p>\n                <p class="weather-desc">${o}</p>`,a.onload=function(){t.appendChild(a)},n.appendChild(t),r++}const o=document.createElement("h5");o.innerText=`Your ${r} day forecast:`,t.appendChild(o),t.appendChild(n),l.appendChild(t)}else{const t=document.createElement("div");t.classList.add("trip-weather");const n=document.createElement("div");n.classList.add("weather-container"),n.innerHTML=`<div class="weather-day">\n                <p class="weather-type">Temp</p>\n                <p class="weather-stat">${Math.round(e[1].weather.data.data[0].temp)}&deg;</p>\n              </div>\n              <div class="weather-day">\n                <p class="weather-type">Rainfall</p>\n                <p class="weather-stat">${e[1].weather.data.data[0].precip} in.</p>\n              </div>`;const i=document.createElement("h5");i.innerText="Typical weather during your stay:",t.appendChild(i),t.appendChild(n),l.appendChild(t)}s.onload=function(){document.querySelector(".no-results")&&document.querySelector(".no-results").remove(),a.appendChild(c),a.appendChild(l),document.querySelector(".trip-list-container").appendChild(a)}}t()}),m=e=>{let t;d(),t=e.target.parentElement.parentElement.classList.contains("trip-expired")?e.target.parentElement.parentElement.parentElement.getAttribute("id"):e.target.parentElement.parentElement.getAttribute("id"),c().then((function(e){const n=e.trips;delete n[t],e.trips=n,0===Object.keys(e.trips).length&&(delete e.trips,p(!0,JSON.stringify(e)));const i=document.getElementById(t);i.parentElement.removeChild(i),localStorage.setItem("travelData",JSON.stringify(e)),s(JSON.stringify(e))}))};n(2),n(4),n(6),n(8),n(10),n(12);document.addEventListener("DOMContentLoaded",()=>{if(d(),localStorage.getItem("travelData")){const e=localStorage.getItem("travelData");s(e),p(!0,e)}else l()}),document.querySelector("#username form button").addEventListener("click",e=>{e.preventDefault();let t=document.querySelector("#username form input[type=text]");i(t)?(s(JSON.stringify({user:t.value})).then((function(){c().then((function(e){localStorage.setItem("travelData",JSON.stringify(e)),p(!1,e)}))})),o(t)):r(t,"Please enter a username")});const h=document.querySelector("#trip-location"),b=document.querySelector("#trip-date");document.querySelector(".nav button").addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#add-trip-container").classList.remove("hidden")})),document.querySelector("#add-trip .remove").addEventListener("click",(function(e){e.preventDefault(),a()})),document.querySelector("#add-trip .submit").addEventListener("click",(function(e){e.preventDefault(),i(h)&&i(b)?(a(),d(),(async(e,t)=>{const n=await fetch("/add-trip",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({location:e,date:t})});try{return n}catch(e){console.log("Error posting data to the server",e)}})(h.value,b.value).then((function(){c().then((function(e){localStorage.setItem("travelData",JSON.stringify(e)),f(e).then((function(){var e;e="add-trip",document.getElementById(e).reset(),l()}))}))}))):(i(h)||r(h,"Please enter a city"),i(b)||r(b,"Please enter a trip date"))}))}]);