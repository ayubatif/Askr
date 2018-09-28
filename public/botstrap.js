/*//(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return mputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComput=null)}),n=s=l=u=r=o=null,t*/
$(function(){var FADE_TIME=150;var TYPING_TIMER_LENGTH=400;var COLORS=['#e21400','#91580f','#f8a700','#f78b00','#58dc00','#287b00','#a8f07a','#4ae8c4','#3b88eb','#3824aa','#a700ff','#d300e7'];var $window=$(window);var $usernameInput=$('.usernameInput');var $messages=$('.messages');var $inputMessage=$('.inputMessage');var $loginPage=$('.login.page');var $chatPage=$('.chat.page');var username;var connected=!1;var typing=!1;var lastTypingTime;var $currentInput=$usernameInput.focus();var socket=io();const addParticipantsMessage=(data)=>{var message='';if(data.numUsers===1){message+="1 member present"}else{message+=data.numUsers+" members present"}
log(message)}
const setUsername=()=>{username=cleanInput($usernameInput.val().trim());if(username){$loginPage.fadeOut();$chatPage.show();$loginPage.off('click');$currentInput=$inputMessage.focus();socket.emit('add user',username)}}
const sendMessage=()=>{var message=$inputMessage.val();message=cleanInput(message);if(message&&connected){$inputMessage.val('');addChatMessage({username:username,message:message});socket.emit('new message',message)}}
const log=(message,options)=>{var $el=$('<li>').addClass('log').text(message);addMessageElement($el,options)}
const addChatMessage=(data,options)=>{var $typingMessages=getTypingMessages(data);options=options||{};if($typingMessages.length!==0){options.fade=!1;$typingMessages.remove()}
var $usernameDiv=$('<span class="username"/>').text(data.username).css('color',getUsernameColor(data.username));var $messageBodyDiv=$('<span class="messageBody">').text(data.message);var typingClass=data.typing?'typing':'';var $messageDiv=$('<li class="message"/>').data('username',data.username).addClass(typingClass).append($usernameDiv,$messageBodyDiv);addMessageElement($messageDiv,options)}
/*//(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return mputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComput=null)}),n=s=l=u=r=o=null,t*/
const addChatTyping=(data)=>{data.typing=!0;data.message='is typing';addChatMessage(data)}
const removeChatTyping=(data)=>{getTypingMessages(data).fadeOut(function(){$(this).remove()})}
const addMessageElement=(el,options)=>{var $el=$(el);if(!options){options={}}
if(typeof options.fade==='undefined'){options.fade=!0}
if(typeof options.prepend==='undefined'){options.prepend=!1}
if(options.fade){$el.hide().fadeIn(FADE_TIME)}
if(options.prepend){$messages.prepend($el)}else{$messages.append($el)}
$messages[0].scrollTop=$messages[0].scrollHeight}
const cleanInput=(input)=>{return $('<div/>').text(input).html()}
const updateTyping=()=>{if(connected){if(!typing){typing=!0;socket.emit('typing')}
lastTypingTime=(new Date()).getTime();setTimeout(()=>{var typingTimer=(new Date()).getTime();var timeDiff=typingTimer-lastTypingTime;if(timeDiff>=TYPING_TIMER_LENGTH&&typing){socket.emit('stop typing');typing=!1}},TYPING_TIMER_LENGTH)}}
const getTypingMessages=(data)=>{return $('.typing.message').filter(function(i){return $(this).data('username')===data.username})}
const getUsernameColor=(username)=>{var hash=7;for(var i=0;i<username.length;i++){hash=username.charCodeAt(i)+(hash<<5)-hash}
var index=Math.abs(hash%COLORS.length);return COLORS[index]}
$window.keydown(event=>{if(!(event.ctrlKey||event.metaKey||event.altKey)){$currentInput.focus()}
if(event.which===13){if(username){sendMessage();socket.emit('stop typing');typing=!1}else{setUsername()}}});$inputMessage.on('input',()=>{updateTyping()});$loginPage.click(()=>{$currentInput.focus()});$inputMessage.click(()=>{$inputMessage.focus()});socket.on('login',(data)=>{connected=!0;var message="Dispatched in mankind's darkest hour, we are the knights of Askr";log(message,{prepend:!0});addParticipantsMessage(data)});socket.on('new message',(data)=>{addChatMessage(data)});socket.on('user joined',(data)=>{log(data.username+' joined');addParticipantsMessage(data)});socket.on('user left',(data)=>{log(data.username+' left');addParticipantsMessage(data);removeChatTyping(data)});socket.on('typing',(data)=>{addChatTyping(data)});socket.on('stop typing',(data)=>{removeChatTyping(data)});socket.on('disconnect',()=>{log('you have been disconnected')});socket.on('reconnect',()=>{log('you have been reconnected');if(username){socket.emit('add user',username)}});socket.on('reconnect_error',()=>{log('attempt to reconnect has failed')})})
/*//(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return mputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComput=null)}),n=s=l=u=r=o=null,t*/
