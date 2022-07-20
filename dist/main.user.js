// ==UserScript==
// @name        雨课堂考试 Hack
// @version     1.0.3
// @include     /https:\/\/examination\.xuetangx\.com/
// @run-at      document-start
// @downloadURL https://github.com/CUC-Life-Hack/rainclass-exam-hack/raw/master/dist/main.user.js
// @updateURL   https://github.com/CUC-Life-Hack/rainclass-exam-hack/raw/master/dist/main.user.js
// ==/UserScript==

(()=>{"use strict";(async()=>{{const e=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(){const o=arguments[0]+"";return-1!=o.indexOf("visibilitychange")?(console.group("拦截切屏检测事件绑定"),console.log(arguments),void console.groupEnd()):e.apply(this,arguments)}}{const e=MediaDevices.prototype.getUserMedia;MediaDevices.prototype.getUserMedia=function(o){return console.group("劫持相机流"),console.log(o),console.groupEnd(),e.call(this,{video:!0})}}{const e=MediaDevices.prototype.getDisplayMedia;MediaDevices.prototype.getDisplayMedia=function(o){return console.group("劫持屏幕流"),console.log(o),console.log("Constraints dropped"),console.groupEnd(),e.call(this)};const o=MediaStreamTrack.prototype.getSettings;MediaStreamTrack.prototype.getSettings=function(){const e=o.apply(this,arguments);return"displaySurface"in e&&(e.displaySurface="monitor"),console.group("劫持屏幕流设置"),console.log(e),console.groupEnd(),e}}})()})();