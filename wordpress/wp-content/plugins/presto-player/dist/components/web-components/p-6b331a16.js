import{k as n,l as r,a as e}from"./p-6b9905f8.js";import{P as t}from"./p-99ee0c39.js";import"./p-52cc8856.js";import"./p-9edb44a5.js";export default function(a){var o=a.config,i=a.selector,u=a.src,s=a.preload;return new Promise(function(){var a=n(r().mark((function n(a){var l,c,p;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(window.Hls){n.next=6;break}case 1:if(window.hasOwnProperty("Hls")){n.next=6;break}return n.next=4,new Promise((function(e){return setTimeout(e,50)}));case 4:n.next=1;break;case 6:if(!window.Hls.isSupported()){n.next=16;break}return c=!["metadata","none"].includes(s),null!==(l=wp)&&void 0!==l&&l.blocks&&(c=!0),(p=new window.Hls({autoStartLoad:c})).loadSource(u),p.on(window.Hls.Events.LEVEL_SWITCHED,(function(e,n){i.closest(".presto-player__wrapper").querySelector(".plyr__menu__container [data-plyr='quality'][value='0'] span").innerHTML=p.autoLevelEnabled?"AUTO (".concat(p.levels[n.level].height,"p)"):"AUTO"})),p.on(window.Hls.Events.MANIFEST_PARSED,(function(){var n=p.levels.map((function(e){return e.height}));n.unshift(0);var r=n.findIndex((function(e){var n;return e===parseInt(null===(n=prestoPlayer)||void 0===n?void 0:n.hls_start_level)}));p.startLevel=r?r-1:2,o.quality={default:0,options:n,forced:!0,onChange:function(e){0===e?prestoHLS.currentLevel=-1:prestoHLS.levels.forEach((function(n,t){n.height===e&&(console.log("Found quality match with "+e),prestoHLS.currentLevel=t)}))}},p.attachMedia(i),window.prestoHLS=p;var u=new t(i,e({},o));return u.hls=p,u.on("waiting",(function e(){p.startLoad(-1),u.off("waiting",e)})),u.on("languagechange",(function(){setTimeout((function(){return p.subtitleTrack=u.currentTrack}),50)})),a(u)})),n.abrupt("return");case 16:if(!i.canPlayType("application/vnd.apple.mpegurl")){n.next=18;break}return n.abrupt("return",a(new t(i,e({},o))));case 18:return n.abrupt("return",a(new t(i,e({},o))));case 19:case"end":return n.stop()}}),n)})));return function(e,n){return a.apply(this,arguments)}}())}