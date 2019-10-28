!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;((e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).vtg||(e.vtg={})).tracking=t()}}(function(){return function o(s,r,d){function p(e,t){if(!r[e]){if(!s[e]){var i="function"==typeof require&&require;if(!t&&i)return i(e,!0);if(h)return h(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var a=r[e]={exports:{}};s[e][0].call(a.exports,function(t){return p(s[e][1][t]||t)},a,a.exports,o,s,r,d)}return r[e].exports}for(var h="function"==typeof require&&require,t=0;t<d.length;t++)p(d[t]);return p}({1:[function(t,e,i){"use strict";var n,a=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),o=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;0<=r;r--)(a=t[r])&&(s=(o<3?a(s):3<o?a(e,i,s):a(e,i))||s);return 3<o&&s&&Object.defineProperty(e,i,s),s};function s(e){return function(t){t.prototype.injectable=e}}Object.defineProperty(i,"__esModule",{value:!0}),i.Injectable=s;var r,d,p=(h.prototype.register=function(t){"object"==typeof t&&(this.observers.unshift(t),t.onRegister())},h.prototype.remove=function(e){this.observers=this.observers.filter(function(t){return t!==e})},h.prototype.notify=function(t){for(var e=this.observers.length;e--;){var i=this.observers[e];i.onUpdate.call(i,t)}},h);function h(){this.observers=[]}function u(){return"object"==typeof window}function c(){return"object"==typeof top}function f(t){return u()&&window[t]}function l(){return c()&&-1<top.location.href.search(/^https/)}i.Observable=p,(d=r=i.View||(i.View={})).isWindow=u,d.isTop=c,d.isVar=function(t,e){var i=t.split(".");return 2===i.length?u()&&typeof window[i[0]]===e&&typeof window[i[0]][i[1]]===e:u()&&typeof window[t]===e},d.getVar=f,d.getScreenSize=function(){var t=window;return u()&&t.screen&&t.screen.width&&t.screen.height?t.screen.width+"x"+t.screen.height:"N/A"},d.isHttps=l,d.getProtocol=function(){return c()?l()?"https://":"http://":"https://"},d.stringify=function(t){return f("JSON")?window.JSON.stringify(t):t.toString()};var v=(g.POST=function(t){var e=new XMLHttpRequest,i=g.makeUrl(t.ssl,t.url);e.open("POST",i,!0),e.setRequestHeader("Content-Type",t.type||"application/json"),e.onreadystatechange=function(){e.readyState===XMLHttpRequest.DONE&&t.callback({xhr:e,status:e.status,text:200<=e.status&&e.status<300||304===e.status?e.responseText:e.statusText})},e.onerror=function(){t.callback({xhr:e,status:-1,text:"Error "+e.status})},e.send(t.data)},g.GET=function(t){var e=new XMLHttpRequest,i=g.makeUrl(t.ssl,t.url+"?"+t.data);e.open("GET",i,!0),e.onload=function(){t.callback({xhr:e,status:e.status,text:e.responseText})},e.send()},g.makeUrl=function(t,e){return(t?"https:":"http:")+"//"+e},g);function g(){}i.HttpRequest=v;var y=(m.setLogger=function(t){"object"==typeof t&&"function"==typeof t.log&&(m.logger=t)},m.logger=console||null,m);function m(){}i.Log=y;var S=(E.prototype.add=function(t){this.items.unshift(t)},E.prototype.each=function(t){if(!this.isRunning){this.isRunning=!0;for(var e=this.items.length;e--;){var i=this.items.pop();i&&t(i)}this.isRunning=!1}},E.prototype.isEmpty=function(){return 0===this.items.length},E);function E(){this.items=[],this.isRunning=!1}i.Queue=S;var I=(b.prototype.start=function(t){setInterval&&(this.isRunning||(this.intervalId=setInterval(t,this.milliseconds),this.isRunning=!0))},b.prototype.stop=function(){clearInterval&&(clearInterval(this.intervalId),this.isRunning=!1)},b);function b(t){this.milliseconds=t,this.isRunning=!1}function k(i){return function(t,e){t.keys||(t.keys={}),t.keys[e]=function(t){return t.hasOwnProperty(e)&&t[e]?t[e]:"boolean"!=typeof i?i||"":i}}}function P(i){return function(t,e){t.rule||(t.rule={}),t.rule[e]=i.bind(t)}}i.Timer=I,i.ConfigParam=k,i.FormatRule=P;var T=(C.prototype.format=function(){var e=this,i=this;return Object.keys(this.keys).forEach(function(t){i[t]=e.keys[t](e.params)}),i},C.prototype.dataToString=function(t){var e={};for(var i in t)t.hasOwnProperty(i)&&void 0!==t[i]&&null!==t[i]&&(e[i]=t[i].toString());return e},C.prototype.mapCustomData=function(t,e){var i=new N([new B,new U]);return i.addSource("data",e),i.addSource("context",e.contextData),i.addSource("config",this.params),i.setMapping(t),this.dataToString(i.getData())},C);function C(t){this.params=t,this.format()}i.DataAccess=T;var D=(A.toInt=function(t){return Math.floor(t)},A.toKbps=function(t){return Math.floor(t/1e3)},A.toLowercase=function(t){return t?t.toLocaleLowerCase():""},A.toString=function(t){return t?t.toString():""},A);function A(){}i.DataFormat=D;var R=(L.prototype.applyFormat=function(t,e){return this.rule[t]?this.rule[t].call(this,e[t]):e[t]},o([P(D.toInt)],L.prototype,"adBreakDuration",void 0),o([P(D.toInt)],L.prototype,"adDuration",void 0),o([P(D.toString)],L.prototype,"mediaId",void 0),o([P(D.toInt)],L.prototype,"duration",void 0),o([P(D.toInt)],L.prototype,"playhead",void 0),o([P(D.toKbps)],L.prototype,"bitrate",void 0),o([P(D.toLowercase)],L.prototype,"userCountry",void 0),L);function L(){this.playerId="",this.playerName="",this.playerVersion="",this.playerInitTime=-1,this.playerManager={},this.dashJsPlayer={},this.hlsJsPlayer={},this.videoElement=null,this.isMobile=!1,this.hasSessionResumed=!1,this.sessionId="",this.screenSize="",this.adBreakType="",this.adBreakPosition=-1,this.adBreakDuration=-1,this.adTitle="",this.adId="",this.adUrl="",this.adDuration=-1,this.adPosition=-1,this.mediaUrl="",this.category="",this.streamId="",this.mediaId="",this.episodeTitle="",this.seriesTitle="",this.videoTitle="",this.airDate="",this.isPaidContent=!1,this.isAffiliateFeed=!1,this.duration=-1,this.episodeFlag=!1,this.isLive=!1,this.isDai=!1,this.isAd=!1,this.timestamp=-1,this.playhead=0,this.seasonNumber=NaN,this.episodeNumber=NaN,this.cdn="",this.bitrate=-1,this.playbackFramerate=-1,this.drmEnabled=!1,this.drmType="",this.userId="",this.userStatus="anon",this.partner="",this.userCountry="",this.userConnectionType="",this.siteId="",this.contextData={},this.ozTamMediaId="",this.ozTamOptOut=!1,this.nielsenOptOut=!1,this.errorType=-1,this.errorMessage="",this.errorFatal=!1,this.screenSize=r.getScreenSize()}i.DataModel=R;var w=(O.prototype.update=function(t){this.data=this.mergeData(t),this.data.timestamp=(new Date).getTime()},O.prototype.reset=function(){this.data=new R},O.prototype.getData=function(){return this.data},O.prototype.mergeData=function(t){var e=this.data;for(var i in t)e.hasOwnProperty(i)&&void 0!==t[i]&&null!==t[i]&&(e[i]=this.data.applyFormat(i,t));return e},O);function O(){this.data=new R}i.DataProxy=w;var B=(M.prototype.run=function(a){var o={};return Object.keys(a.mapping).forEach(function(n){var t=a.mapping[n].match(/\{\w+.\w+\}/g);o[n]=a.mapping[n],t&&t.forEach(function(t){var e=t.replace(/\{|\}/g,"").split("."),i=a.source[e[0]][e[1]];o[n]=o[n].replace(t,i)})}),o},M);function M(){}i.ReplaceTokens=B;var N=(_.prototype.addSource=function(t,e){this.source[t]=e},_.prototype.setMapping=function(t){this.mapping=t},_.prototype.getData=function(){for(var t={},e=0,i=this.rules;e<i.length;e++){var n=i[e],a={source:this.source,mapping:this.mapping,data:t};t=n.run(a)}return t},_);function _(t){this.rules=[],this.source={},this.rules=t}i.RulesEngine=N;var U=(x.prototype.run=function(i){function n(t){return t.replace(/^\s+|\s$/g,"")}var a={};return Object.keys(i.data).forEach(function(t){var e=i.data[t].match(/(.+)\?(.+):(.+)/);e&&3<e.length?(a[t]="true"===n(e[1])?e[2]:e[3],a[t]=n(a[t])):a[t]=i.data[t]}),a},x);function x(){}i.SimpleTernary=U;var j=(z.prototype.onRegister=function(){},z.prototype.onUpdate=function(t){var e=this;this.notifications.add(t),this.hasSdkLoaded()&&this.notifications.each(function(t){e.onNotify(t)})},z.prototype.hasSdkLoaded=function(){if("object"!=typeof this.injectable)return this.isSdkLoaded;var t=this.injectable,e=r.getVar(t.name);return e&&(this[t.name]=e,this.isSdkLoaded=!0),this.isSdkLoaded},z.prototype.onNotify=function(t){var e=!1;switch((this.notification=t).name){case"adBreakStart":case"adStart":e=!0;break;case"adEnd":case"adBreakEnd":case"contentStart":e=!1}this.observable.dataProxy.update({isAd:e});var i=this.events[t.name];i&&i.call(this)},z.prototype.getData=function(){return this.observable.dataProxy.getData()},z.prototype.hasContentCompleted=function(){var t=this.getData();return(!t||!t.isLive)&&t.playhead>=.95*t.duration},z);function z(t,e){this.config=t,this.observable=e,this.events={},this.notifications=new S,this.isSdkLoaded=!1,this.isDev=!1,this.isDev=e.isDev}function F(){return function(t,e){t.obsever=!0}}i.Agent=j,i.Subscribe=F;var H=(Object.defineProperty(K,"version",{get:function(){return"tracking v0.2.2 Mon, 28 Oct 2019 20:17:53 GMT"},enumerable:!0,configurable:!0}),Object.defineProperty(K,"modules",{get:function(){return[et,rt,ft]},enumerable:!0,configurable:!0}),Object.defineProperty(K,"platform",{get:function(){return"Chromecast"},enumerable:!0,configurable:!0}),K.isChromecast=function(){return"Chromecast"===K.platform},K.isDev=function(){return!(!window.utag||!window.utag.data||"dev"!==window.utag.data["ut.env"])},K);function K(){}i.BuildInfo=H;var V=(q.prototype.onRegister=function(){},q.prototype.onUpdate=function(t){switch(t.name){case"contentStart":this.hasSessionEnd=!1,this.hasContentStart=!0;break;case"adBreakStart":this.isAd=!0,this.timer.stop();break;case"adBreakEnd":this.isAd=!1,this.isStopped=!0;break;case"contentPause":case"bufferStart":case"seekStart":this.isStopped=!0,this.startHb();break;case"timeUpdate":this.timeUpdate();break;case"contentEnd":case"sessionEnd":this.hasSessionEnd=!0,this.hasContentStart=!1,this.isStopped=!0,this.timer.stop()}},q.prototype.timeUpdate=function(){this.hasSessionEnd||this.isStopped&&this.hasContentStart&&!this.isAd&&(this.isStopped=!1,this.startHb())},q.prototype.startHb=function(){var t=this;this.timer.stop(),this.timer.start(function(){t.tracker.track("hb")})},q.NAME="Hb",q);function q(t){this.tracker=t,this.hasContentStart=!1,this.hasSessionEnd=!1,this.isStopped=!0,this.isAd=!1,this.config={name:"Hb",enabled:!0,params:{}},this.timer=new I(1e4)}i.Heartbeat=V;var G=(Q.prototype.register=function(n){var a=this;this.tracker=n,this.registerAgent(new V(n)),this.tracker.modules.forEach(function(t){var e=t;if(a.isAgentEnabled(e.NAME)){var i=a.getAgentConfig(e.NAME);a.registerAgent(new e(i,n))}})},Q.prototype.isAgentEnabled=function(t){return this.tracker.config.hasOwnProperty(t)&&this.tracker.config[t].hasOwnProperty("enabled")&&this.tracker.config[t].enabled},Q.prototype.getAgentConfig=function(t){var e=this.tracker.config[t];return e.params||(e.params={}),e.name||(e.name=t),e},Q.prototype.registerAgent=function(e){this.tracker.observers.find(function(t){return t.config.name===e.config.name})||this.tracker.register(e)},Q);function Q(){}i.Registrar=G;var W,Y=(a(J,W=p),J.prototype.track=function(t,e){if("sessionStart"===t&&this.dataProxy.reset(),e=e||{},"timeUpdate"===t){if(!this.hasProgress(e.playhead))return;e.playhead=this.playhead}e.playhead=e.playhead?Math.floor(e.playhead):this.playhead,this.playhead=e.playhead,this.dataProxy.update(e),this.isDev&&y.logger.log(this.logId,t,e),this.notify({name:t})},J.prototype.hasProgress=function(t){var e=Math.floor(t);return!isNaN(e)&&this.playhead!==e&&(this.playhead=e,!0)},J.prototype.setConfig=function(t){this.isDev=H.isDev(),this.isDev&&y.logger.log(this.logId,"setConfig",t),this.config||"object"==typeof t&&(this.config=t,this.registrar.register(this))},J.prototype.setContextData=function(t){this.dataProxy.update({contextData:t})},J.prototype.setLogger=function(t){y.setLogger(t)},J);function J(){var t=null!==W&&W.apply(this,arguments)||this;return t.modules=H.modules,t.dataProxy=new w,t.registrar=new G,t.playhead=0,t.isDev=!1,t.logId="[Tracker]",t}i.VideoTracker=Y;var X,$=(a(Z,X=Y),Z.prototype.onNotify=function(t){var e=this.eventMap[t.type];e&&e.call(this,t)},Z.prototype.on=function(t,e){this.callback[t]=e},Z.prototype.startSession=function(t){this.hasPlayerLoaded&&!this.hasSessionStart&&(this.hasSessionStart=!0,this.event("sessionStart",t,{playerManager:this.playerManager,playerInitTime:(new Date).getTime()}))},Z.prototype.endSession=function(t){this.event("contentEnd",t),this.hasPlayerLoaded=!1,this.hasSessionStart=!1,this.hasClipStarted=!1,this.hasBreakStarted=!1,this.isAdPlaying=!1,this.isBuffering=!1,this.isPaused=!1,this.event("sessionEnd",t)},Z.prototype.event=function(t,e,i){var n=i||{};if("function"==typeof this.callback[t]){var a=this.callback[t](e);"object"==typeof a&&(Object.keys(a).forEach(function(t){n[t]=a[t]}),delete this.callback[t])}n.season&&(n.seasonNumber=n.season),n.episode&&(n.episodeNumber=n.episode),n.playhead=e.currentMediaTime,X.prototype.track.call(this,t,n)},Z);function Z(){var e=X.call(this)||this;return e.hasPlayerLoaded=!1,e.hasSessionStart=!1,e.hasClipStarted=!1,e.hasBreakStarted=!1,e.isBuffering=!1,e.isAdPlaying=!1,e.isPaused=!1,e.isSeeking=!1,e.callback={},e.eventMap={PLAYER_LOAD_COMPLETE:function(t){e.hasPlayerLoaded=!0,e.event("playerLoaded",t)},CLIP_STARTED:function(t){e.isAdPlaying&&e.hasClipStarted||(e.hasPlayerLoaded&&!e.hasClipStarted&&(e.startSession(t),e.event("contentStart",t)),e.hasClipStarted=!0)},BREAK_STARTED:function(t){e.hasPlayerLoaded&&(e.startSession(t),e.hasBreakStarted=!0,e.event("adBreakStart",t))},BREAK_CLIP_STARTED:function(t){e.hasPlayerLoaded&&(e.hasBreakStarted||e.eventMap.BREAK_STARTED(t),e.isAdPlaying=!0,e.event("adStart",t))},BREAK_CLIP_ENDED:function(t){e.isAdPlaying=!1,e.isPaused=!1,"SKIPPED"===t.endedReason&&e.event("adSkip",t),e.event("adEnd",t)},BREAK_ENDED:function(t){e.isAdPlaying=!1,e.hasBreakStarted=!1,e.event("adBreakEnd",t)},BUFFERING:function(t){e.hasSessionStart&&!e.isBuffering&&(e.isBuffering=!0,e.event("bufferStart",t))},TIME_UPDATE:function(t){e.isBuffering&&(e.isBuffering=!1,e.event("bufferEnd",t)),e.isPaused||e.event("timeUpdate",t)},PLAYING:function(t){e.isPaused&&(e.isPaused=!1,e.event(e.isAdPlaying?"adResume":"contentResume",t))},PAUSE:function(t){e.isPaused||(e.isPaused=!0,e.event(e.isAdPlaying?"adPause":"contentPause",t))},REQUEST_SEEK:function(t){e.isSeeking=!0,e.event("seekStart",t)},SEEKED:function(t){e.isSeeking&&(e.event("seekEnd",t),e.isSeeking=!1)},BITRATE_CHANGED:function(t){e.event("bitrateChange",t,{bitrate:t.totalBitrate})},MEDIA_FINISHED:function(t){e.endSession(t)},ERROR:function(t){t&&t.endedReason&&t.endedReason===cast.framework.events.EndedReason.ERROR&&e.event("playerError",t,{errorCode:t.detailedErrorCode,errorMessage:t.endedReason,isFatal:!1})}},e.context=cast.framework.CastReceiverContext.getInstance(),e.playerManager=e.context.getPlayerManager(),["PLAYER_LOAD_COMPLETE","CLIP_STARTED","BREAK_STARTED","BREAK_CLIP_STARTED","BREAK_CLIP_ENDED","BREAK_ENDED","BUFFERING","TIME_UPDATE","PLAYING","PAUSE","REQUEST_SEEK","SEEKED","BITRATE_CHANGED","MEDIA_FINISHED","ERROR"].forEach(function(t){e.playerManager.addEventListener(t,e.onNotify.bind(e))}),e.context.addEventListener(cast.framework.system.EventType.SHUTDOWN,e.endSession.bind(e)),e}i.ChromecastTracker=$;var tt,et=(a(it,tt=j),it.prototype.onRegister=function(){tt.prototype.onRegister.call(this),this.dao=new at(this),this.eventQueue=new S},it.prototype.flushQueue=function(){var e=this;this.hasSession&&this.eventQueue.each(function(t){e.postRequest(t)})},it.prototype.postRequest=function(t){"play"===t&&this.getData().isAd||v.POST({url:this.eventUrl,ssl:this.dao.enableSSL,data:r.stringify(this.dao.getPayload(t)),callback:Function.prototype})},it.prototype.startSession=function(){var i=this;v.POST({url:this.dao.getSessionUrl(),ssl:this.dao.enableSSL,data:r.stringify(this.dao.getSessionInfo()),callback:function(t){if(404===t.status)throw"Error: Server 404";var e=t.xhr.getResponseHeader("location");if(!e)throw"Error: Location not found";i.hasSession=!0,i.eventUrl=i.dao.getEventUrl(e),i.flushQueue()}})},it.prototype.trackEvent=function(t){this.eventQueue.add(t),this.flushQueue()},it.prototype.contentStart=function(){this.hasSession||this.startSession(),this.trackEvent("play")},it.prototype.play=function(){this.hasStateChange&&(this.hasStateChange=!1,this.trackEvent("play"))},it.prototype.ping=function(){this.trackEvent("ping")},it.prototype.sessionEnd=function(){this.hasSession&&(this.hasContentCompleted()&&this.trackEvent("sessionComplete"),this.trackEvent("sessionEnd"),this.hasSession=!1)},it.NAME="Adobe",o([function(t,e){t.obsever=!0}],it.prototype,"events",void 0),it);function it(){var t=null!==tt&&tt.apply(this,arguments)||this;return t.hasSession=!1,t.hasStateChange=!1,t.isSdkLoaded=!0,t.events={adBreakStart:function(){t.hasSession||t.startSession(),t.trackEvent("adBreakStart")},adStart:function(){t.trackEvent("adStart")},adPause:function(){t.trackEvent("pauseStart")},adSkip:function(){t.trackEvent("adSkip")},adEnd:function(){t.trackEvent("adComplete")},adBreakEnd:function(){t.trackEvent("adBreakComplete"),t.hasStateChange=!0},contentPause:function(){t.hasStateChange=!0,t.trackEvent("pauseStart")},bufferStart:function(){t.hasStateChange=!0,t.trackEvent("bufferStart")},seekStart:function(){t.hasStateChange=!0},id3Data:function(){t.getData().isLive&&(t.sessionEnd(),t.contentStart())},playerError:function(){t.trackEvent("error"),t.sessionEnd()},contentStart:t.contentStart,contentResume:t.play,timeUpdate:t.play,hb:t.ping,sessionEnd:t.sessionEnd},t}i.AdobeAgent=et;var nt,at=(a(ot,nt=T),ot.prototype.getSessionInfo=function(){var t=this.agent.getData(),e=this.getPayload("sessionStart"),i=this.mapCustomData(this.mediaInfo,this.agent.getData()),n={};return Object.keys(i).forEach(function(t){i[t]&&(n[t]=i[t])}),e.params=Object.assign(n,{"analytics.trackingServer":this.trackingServer,"analytics.reportSuite":this.reportSuite,"analytics.visitorId":this.visitorId,"analytics.enableSSL":this.enableSSL,"visitor.marketingCloudOrgId":this.marketingCloudOrgId,"visitor.marketingCloudUserId":this.marketingCloudUserId||this.getMid(),"media.resume":!!t.hasSessionResumed}),e.params["media.length"]=parseInt(e.params["media.length"]),t.contextData.mediaResume=!!t.hasSessionResumed,e.customMetadata=this.dataToString(t.contextData),e},ot.prototype.getMid=function(){var t=r.getVar("vtg"),e="";return t&&t.data&&t.data.AdobeCloudId&&(e=t.data.AdobeCloudId.getMid()),e},ot.prototype.getAdBreakInfo=function(){var t=this.agent.getData();return{"media.ad.podFriendlyName":t.adBreakType,"media.ad.podIndex":t.adBreakPosition,"media.ad.podSecond":t.playhead}},ot.prototype.getAdInfo=function(){var t=this.agent.getData();return{"media.ad.name":t.adTitle,"media.ad.id":t.videoTitle+" - "+t.adTitle,"media.ad.length":t.adDuration,"media.ad.creativeId":t.adId,"media.ad.creativeURL":t.adUrl,"media.ad.playerName":t.playerName,"media.ad.podPosition":t.adPosition}},ot.prototype.getSessionUrl=function(){return[this.agent.isDev?this.devApiServer:this.prodApiServer,ot.SESSION_PATH].join("/")},ot.prototype.getEventUrl=function(t){return[this.agent.isDev?this.devApiServer:this.prodApiServer,t.replace(/^\/|\/$/g,""),"events"].join("/")},ot.prototype.getPayload=function(t){var e=this.agent.getData(),i={};switch(t){case"adBreakStart":i=this.getAdBreakInfo();break;case"adStart":i=this.getAdInfo()}return{eventType:t,playerTime:{playhead:e.playhead,ts:(new Date).getTime()},params:i}},ot.SESSION_PATH="api/v1/sessions",o([k(!0)],ot.prototype,"enableSSL",void 0),o([k()],ot.prototype,"reportSuite",void 0),o([k()],ot.prototype,"trackingServer",void 0),o([k()],ot.prototype,"marketingCloudOrgId",void 0),o([k()],ot.prototype,"marketingCloudUserId",void 0),o([k()],ot.prototype,"visitorId",void 0),o([k()],ot.prototype,"devApiServer",void 0),o([k()],ot.prototype,"prodApiServer",void 0),o([k()],ot.prototype,"visitorOptions",void 0),o([k()],ot.prototype,"mediaInfo",void 0),ot);function ot(t){var e=nt.call(this,t.config.params)||this;return e.agent=t,e}i.AdobeDao=at;var st,rt=(a(dt,st=j),dt.prototype.onRegister=function(){st.prototype.onRegister.call(this),this.dao=new ht(this)},dt.prototype.timeUpdate=function(){this.getData().isAd||(this.hasContentStart&&(this.startSession(),this.begin(),this.hasContentStart=!1),this.isStopped&&(this.isStopped=!1,this.ozTamInstance&&this.ozTamInstance.resumeProgress()))},dt.prototype.startSession=function(){var t=this.dao.getConfigInfo();this.ozTamInstance=new this.OzTAMService(t.publisherId,t.vendorVersion,t.productionMode,t.verboseLogging,t.useHTTPS),this.mediaInfo=this.dao.getMediaInfo(),this.ozTamInstance&&this.ozTamInstance.startSession(this.mediaInfo.mediaId,this.mediaInfo.url,this.mediaInfo.mediaDuration,this.mediaInfo.mediaType)},dt.prototype.begin=function(){this.ozTamInstance&&this.ozTamInstance.beginPlayback(this.mediaInfo.mediaId,this.mediaInfo.url,this.mediaInfo.mediaDuration,this.mediaInfo.mediaPositionFunction,this.dao.getPropertyInfo(),this.mediaInfo.mediaType)},dt.prototype.stop=function(){this.isStopped=!0,this.ozTamInstance&&this.ozTamInstance.haltProgress()},dt.NAME="OzTam",o([function(t,e){t.obsever=!0}],dt.prototype,"events",void 0),dt=o([s({name:"OzTAMService",type:"function"})],dt));function dt(){var t=null!==st&&st.apply(this,arguments)||this;return t.hasContentStart=!1,t.isStopped=!1,t.events={contentStart:function(){t.hasContentStart=!0},seekStart:function(){t.ozTamInstance&&t.ozTamInstance.seekBegin()},seekEnd:function(){t.ozTamInstance&&t.ozTamInstance.seekComplete(),t.isStopped=!0},contentEnd:function(){t.ozTamInstance&&t.ozTamInstance.complete()},contentPause:t.stop,bufferStart:t.stop,contentResume:t.timeUpdate,timeUpdate:t.timeUpdate},t}i.OzTamAgent=rt;var pt,ht=(a(ut,pt=T),ut.prototype.getConfigInfo=function(){return{publisherId:this.agent.getData().isLive?this.pubIdForLive:this.pubIdForVod,vendorVersion:this.getVersion(),productionMode:!this.agent.isDev,verboseLogging:this.agent.isDev,useHTTPS:r.isHttps()}},ut.prototype.getVersion=function(){var t=this.agent.getData(),e=t.isMobile?"Mobile-Web":"Desktop-Web";return H.isChromecast()&&(e="Chromecast"),[this.platform,e,t.playerVersion].join("_")},ut.prototype.getMediaInfo=function(){var t=this.agent.getData(),e=function(){return t.playhead}.bind(this);return{mediaId:t.ozTamMediaId||t.mediaId,url:t.mediaUrl,mediaDuration:t.duration,mediaType:t.isLive?"live":"vod",mediaPositionFunction:e}},ut.prototype.getPropertyInfo=function(){var t=this.agent.getData(),e={};return t.ozTamMediaId&&(e.altMediaId=t.mediaId),t.userId&&(e.demo1=t.userId),e},ut.prototype.isOzTamOptOut=function(){return this.agent.getData().ozTamOptOut},o([k()],ut.prototype,"pubIdForLive",void 0),o([k()],ut.prototype,"pubIdForVod",void 0),o([k()],ut.prototype,"platform",void 0),ut);function ut(t){var e=pt.call(this,t.config.params)||this;return e.agent=t,e}i.OzTamDao=ht;var ct,ft=(a(lt,ct=j),lt.prototype.onRegister=function(){ct.prototype.onRegister.call(this),this.dao=new gt(this)},lt.prototype.createSession=function(){if(!(-1<this.sessionId)&&this.dao.getCastPlayerManager()){var t=this.dao.getCustomerKey();if(this.isDev?(this.Conviva.LivePass.toggleTraces(!0),this.Conviva.LivePass.initWithSettings(t,this.dao.getInitOptions())):(this.Conviva.LivePass.toggleTraces(!1),this.Conviva.LivePass.init(t)),this.playerManager=this.dao.getCastPlayerManager(),this.streamer=new this.Conviva.ConvivaCastV3StreamerProxy(this.playerManager),this.streamer){var e=this.dao.getContentInfo();this.sessionId=this.Conviva.LivePass.createSession(this.streamer,e,this.dao.getSessionOptions())}}},lt.prototype.adBreakStart=function(){-1===this.sessionId&&this.createSession(),this.Conviva.LivePass.detachStreamer(this.sessionId),this.adBreakInfo=this.dao.getAdBreakInfo(),this.Conviva.LivePass.sendSessionEvent(this.sessionId,"Conviva.PodStart",this.adBreakInfo)},lt.prototype.adBreakEnd=function(){this.adBreakInfo&&this.adBreakInfo.podDuration&&delete this.adBreakInfo.podDuration,this.Conviva.LivePass.sendSessionEvent(this.sessionId,"Conviva.PodEnd",this.adBreakInfo||{}),this.Conviva.LivePass.attachStreamer(this.sessionId,this.streamer)},lt.prototype.adStart=function(){this.Conviva.LivePass.adStart(this.sessionId)},lt.prototype.adEnd=function(){this.Conviva.LivePass.adEnd(this.sessionId)},lt.prototype.bitrateChange=function(){-1<this.sessionId&&!this.getData().isAd&&this.Conviva.LivePass.setBitrate(this.sessionId,this.getData().bitrate)},lt.prototype.playerError=function(){var t=this.dao.getConvivaError();this.Conviva.LivePass.reportError(t.sessionId,t.message,t.type),this.getData().errorFatal&&this.Conviva.LivePass.cleanupSession(this.sessionId)},lt.prototype.cleanUpSession=function(){this.Conviva.LivePass.cleanupSession(this.sessionId),this.sessionId=-1},lt.NAME="ConvivaCast",o([function(t,e){t.obsever=!0}],lt.prototype,"events",void 0),lt=o([s({name:"Conviva",type:"function"})],lt));function lt(){var t=null!==ct&&ct.apply(this,arguments)||this;return t.sessionId=-1,t.events={contentStart:t.createSession,adBreakStart:t.adBreakStart,adBreakEnd:t.adBreakEnd,adStart:t.adStart,adEnd:t.adEnd,sessionEnd:t.cleanUpSession,playerError:t.playerError,bitrateChange:t.bitrateChange},t}i.ConvivaCastAgent=ft;var vt,gt=(a(yt,vt=T),yt.prototype.getCustomerKey=function(){return this.agent.isDev?this.devCustomerKey:this.prodCustomerKey},yt.prototype.getInitOptions=function(){var t=this.agent.isDev?this.devServerUrl:this.prodServerUrl;return-1===t.search(/^http/)&&(t=r.getProtocol()+t),{gatewayUrl:t}},yt.prototype.getSessionOptions=function(){var t;return(t={})[this.agent.Conviva.LivePass.OPTION_EXTERNAL_BITRATE_REPORTING]=!0,t},yt.prototype.getContentInfo=function(){var t=this.agent.getData(),e=new this.agent.Conviva.ConvivaContentInfo;return e.playerName=t.playerName,e.streamUrl=t.mediaUrl,e.assetName=t.videoTitle,e.duration=t.duration,e.defaultReportingBitrateKbps=t.bitrate,e.defaultReportingResource=t.cdn,e.encodedFps=t.playbackFramerate,e.isLive=t.isLive,e.viewerId=t.userId,e.tags=this.mapCustomData(this.customTag,this.agent.getData()),e},yt.prototype.getEpisodeTitle=function(t){var e=t.videoTitle||t.episodeTitle;return t.isLive?e:(-1<e.search(/\w+.*-.*\w+/)&&(e=e.split("-")[1]),e.replace(/^\s+|\s+$/g,""))},yt.prototype.getAdBreakInfo=function(){var t=this.agent.getData();return this.dataToString({podDuration:t.adBreakDuration,podIndex:t.adBreakPosition,podPosition:t.adBreakType+"-roll"})},yt.prototype.getConvivaError=function(){var t=this.agent.getData(),e=this.agent.Conviva.StreamerError;return this.dataToString({sessionId:this.agent.sessionId,message:[t.errorType,t.errorMessage].join(":"),type:t.errorFatal?e.SEVERITY_FATAL:e.SEVERITY_WARNING})},yt.prototype.getCastPlayerManager=function(){return this.agent.getData().playerManager},o([k()],yt.prototype,"prodCustomerKey",void 0),o([k()],yt.prototype,"devCustomerKey",void 0),o([k()],yt.prototype,"devServerUrl",void 0),o([k()],yt.prototype,"prodServerUrl",void 0),o([k()],yt.prototype,"customTag",void 0),yt);function yt(t){var e=vt.call(this,t.config.params)||this;return e.agent=t,e}i.ConvivaCastDao=gt},{}]},{},[1])(1)});