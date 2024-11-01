class v{constructor(e){this.properties=e??[]}get(e){const o=this.properties.filter(r=>r.name===e).map(r=>r.value);if(o.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(o.length!==0)return o[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,o){const r=this.get(e);if(r!==void 0){if(o!=="json"&&typeof r!==o)throw new Error('Expected property "'+e+'" to have type "'+o+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,o){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(o!=="json"&&typeof r!==o)throw new Error('Expected property "'+e+'" to have type "'+o+'"');return r}getType(e){const o=this.properties.filter(r=>r.name===e).map(r=>r.type);if(o.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(o.length!==0)return o[0]}}const H="https://unpkg.com/@workadventure/scripting-api-extra@1.9.1/dist";class ce{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new v(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function O(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(H+"/configuration.html"+e,!0)}async function ue(t,e){const o=await WA.room.getTiledMap(),r=new Map;return J(o.layers,r,t,e),r}function J(t,e,o,r){for(const n of t)if(n.type==="objectgroup"){for(const a of n.objects)if(a.type==="variable"||a.class==="variable"){if(o&&n.name!==o||r&&!r.includes(a.name))continue;e.set(a.name,new ce(a))}}else n.type==="group"&&J(n.layers,e,o,r)}let I;async function x(){return I===void 0&&(I=pe()),I}async function pe(){return fe(await WA.room.getTiledMap())}function fe(t){const e=new Map;return K(t.layers,"",e),e}function K(t,e,o){for(const r of t)r.type==="group"?K(r.layers,e+r.name+"/",o):(r.name=e+r.name,o.set(r.name,r))}async function Y(){const t=await x(),e=[];for(const o of t.values())if(o.type==="objectgroup")for(const r of o.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function he(t){let e=1/0,o=1/0,r=0,n=0;const a=t.data;if(typeof a=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<t.height;s++)for(let i=0;i<t.width;i++)a[i+s*t.width]!==0&&(e=Math.min(e,i),n=Math.max(n,i),o=Math.min(o,s),r=Math.max(r,s));return{top:o,left:e,right:n+1,bottom:r+1}}function Z(t){let e=1/0,o=1/0,r=0,n=0;for(const a of t){const s=he(a);s.left<e&&(e=s.left),s.top<o&&(o=s.top),s.right>n&&(n=s.right),s.bottom>r&&(r=s.bottom)}return{top:o,left:e,right:n,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ge=Object.prototype.toString,C=Array.isArray||function(e){return ge.call(e)==="[object Array]"};function U(t){return typeof t=="function"}function de(t){return C(t)?"array":typeof t}function V(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function z(t,e){return t!=null&&typeof t=="object"&&e in t}function ye(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var me=RegExp.prototype.test;function be(t,e){return me.call(t,e)}var Ae=/\S/;function we(t){return!be(Ae,t)}var We={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function ve(t){return String(t).replace(/[&<>"'`=\/]/g,function(o){return We[o]})}var Se=/\s*/,Ce=/\s+/,N=/\s*=/,ke=/\s*\}/,Te=/#|\^|\/|>|\{|&|=|!/;function Ee(t,e){if(!t)return[];var o=!1,r=[],n=[],a=[],s=!1,i=!1,l="",u=0;function f(){if(s&&!i)for(;a.length;)delete n[a.pop()];else a=[];s=!1,i=!1}var d,m,P;function k(A){if(typeof A=="string"&&(A=A.split(Ce,2)),!C(A)||A.length!==2)throw new Error("Invalid tags: "+A);d=new RegExp(V(A[0])+"\\s*"),m=new RegExp("\\s*"+V(A[1])),P=new RegExp("\\s*"+V("}"+A[1]))}k(e||g.tags);for(var p=new L(t),b,c,y,T,M,W;!p.eos();){if(b=p.pos,y=p.scanUntil(d),y)for(var B=0,le=y.length;B<le;++B)T=y.charAt(B),we(T)?(a.push(n.length),l+=T):(i=!0,o=!0,l+=" "),n.push(["text",T,b,b+1]),b+=1,T===`
`&&(f(),l="",u=0,o=!1);if(!p.scan(d))break;if(s=!0,c=p.scan(Te)||"name",p.scan(Se),c==="="?(y=p.scanUntil(N),p.scan(N),p.scanUntil(m)):c==="{"?(y=p.scanUntil(P),p.scan(ke),p.scanUntil(m),c="&"):y=p.scanUntil(m),!p.scan(m))throw new Error("Unclosed tag at "+p.pos);if(c==">"?M=[c,y,b,p.pos,l,u,o]:M=[c,y,b,p.pos],u++,n.push(M),c==="#"||c==="^")r.push(M);else if(c==="/"){if(W=r.pop(),!W)throw new Error('Unopened section "'+y+'" at '+b);if(W[1]!==y)throw new Error('Unclosed section "'+W[1]+'" at '+b)}else c==="name"||c==="{"||c==="&"?i=!0:c==="="&&k(y)}if(f(),W=r.pop(),W)throw new Error('Unclosed section "'+W[1]+'" at '+p.pos);return Le(xe(n))}function xe(t){for(var e=[],o,r,n=0,a=t.length;n<a;++n)o=t[n],o&&(o[0]==="text"&&r&&r[0]==="text"?(r[1]+=o[1],r[3]=o[3]):(e.push(o),r=o));return e}function Le(t){for(var e=[],o=e,r=[],n,a,s=0,i=t.length;s<i;++s)switch(n=t[s],n[0]){case"#":case"^":o.push(n),r.push(n),o=n[4]=[];break;case"/":a=r.pop(),a[5]=n[2],o=r.length>0?r[r.length-1][4]:e;break;default:o.push(n)}return e}function L(t){this.string=t,this.tail=t,this.pos=0}L.prototype.eos=function(){return this.tail===""};L.prototype.scan=function(e){var o=this.tail.match(e);if(!o||o.index!==0)return"";var r=o[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};L.prototype.scanUntil=function(e){var o=this.tail.search(e),r;switch(o){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,o),this.tail=this.tail.substring(o)}return this.pos+=r.length,r};function S(t,e){this.view=t,this.cache={".":this.view},this.parent=e}S.prototype.push=function(e){return new S(e,this)};S.prototype.lookup=function(e){var o=this.cache,r;if(o.hasOwnProperty(e))r=o[e];else{for(var n=this,a,s,i,l=!1;n;){if(e.indexOf(".")>0)for(a=n.view,s=e.split("."),i=0;a!=null&&i<s.length;)i===s.length-1&&(l=z(a,s[i])||ye(a,s[i])),a=a[s[i++]];else a=n.view[e],l=z(n.view,e);if(l){r=a;break}n=n.parent}o[e]=r}return U(r)&&(r=r.call(this.view)),r};function h(){this.templateCache={_cache:{},set:function(e,o){this._cache[e]=o},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}h.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};h.prototype.parse=function(e,o){var r=this.templateCache,n=e+":"+(o||g.tags).join(":"),a=typeof r<"u",s=a?r.get(n):void 0;return s==null&&(s=Ee(e,o),a&&r.set(n,s)),s};h.prototype.render=function(e,o,r,n){var a=this.getConfigTags(n),s=this.parse(e,a),i=o instanceof S?o:new S(o,void 0);return this.renderTokens(s,i,r,e,n)};h.prototype.renderTokens=function(e,o,r,n,a){for(var s="",i,l,u,f=0,d=e.length;f<d;++f)u=void 0,i=e[f],l=i[0],l==="#"?u=this.renderSection(i,o,r,n,a):l==="^"?u=this.renderInverted(i,o,r,n,a):l===">"?u=this.renderPartial(i,o,r,a):l==="&"?u=this.unescapedValue(i,o):l==="name"?u=this.escapedValue(i,o,a):l==="text"&&(u=this.rawValue(i)),u!==void 0&&(s+=u);return s};h.prototype.renderSection=function(e,o,r,n,a){var s=this,i="",l=o.lookup(e[1]);function u(m){return s.render(m,o,r,a)}if(l){if(C(l))for(var f=0,d=l.length;f<d;++f)i+=this.renderTokens(e[4],o.push(l[f]),r,n,a);else if(typeof l=="object"||typeof l=="string"||typeof l=="number")i+=this.renderTokens(e[4],o.push(l),r,n,a);else if(U(l)){if(typeof n!="string")throw new Error("Cannot use higher-order sections without the original template");l=l.call(o.view,n.slice(e[3],e[5]),u),l!=null&&(i+=l)}else i+=this.renderTokens(e[4],o,r,n,a);return i}};h.prototype.renderInverted=function(e,o,r,n,a){var s=o.lookup(e[1]);if(!s||C(s)&&s.length===0)return this.renderTokens(e[4],o,r,n,a)};h.prototype.indentPartial=function(e,o,r){for(var n=o.replace(/[^ \t]/g,""),a=e.split(`
`),s=0;s<a.length;s++)a[s].length&&(s>0||!r)&&(a[s]=n+a[s]);return a.join(`
`)};h.prototype.renderPartial=function(e,o,r,n){if(r){var a=this.getConfigTags(n),s=U(r)?r(e[1]):r[e[1]];if(s!=null){var i=e[6],l=e[5],u=e[4],f=s;l==0&&u&&(f=this.indentPartial(s,u,i));var d=this.parse(f,a);return this.renderTokens(d,o,r,f,n)}}};h.prototype.unescapedValue=function(e,o){var r=o.lookup(e[1]);if(r!=null)return r};h.prototype.escapedValue=function(e,o,r){var n=this.getConfigEscape(r)||g.escape,a=o.lookup(e[1]);if(a!=null)return typeof a=="number"&&n===g.escape?String(a):n(a)};h.prototype.rawValue=function(e){return e[1]};h.prototype.getConfigTags=function(e){return C(e)?e:e&&typeof e=="object"?e.tags:void 0};h.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!C(e))return e.escape};var g={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){E.templateCache=t},get templateCache(){return E.templateCache}},E=new h;g.clearCache=function(){return E.clearCache()};g.parse=function(e,o){return E.parse(e,o)};g.render=function(e,o,r,n){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+de(e)+'" was given as the first argument for mustache#render(template, view, partials)');return E.render(e,o,r,n)};g.escape=ve;g.Scanner=L;g.Context=S;g.Writer=h;class ee{constructor(e,o){this.template=e,this.state=o,this.ast=g.parse(e)}getValue(){return this.value===void 0&&(this.value=g.render(this.template,this.state)),this.value}onChange(e){const o=[];for(const r of this.getUsedVariables().values())o.push(this.state.onVariableChange(r).subscribe(()=>{const n=g.render(this.template,this.state);n!==this.value&&(this.value=n,e(this.value))}));return{unsubscribe:()=>{for(const r of o)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,o){for(const r of e){const n=r[0],a=r[1],s=r[4];["name","&","#","^"].includes(n)&&o.add(a),s!==void 0&&typeof s!="string"&&this.recursiveGetUsedVariables(s,o)}}}async function Pe(){var t;const e=await Y();for(const o of e){const r=(t=o.properties)!==null&&t!==void 0?t:[];for(const n of r){if(n.type==="int"||n.type==="bool"||n.type==="object"||typeof n.value!="string")continue;const a=new ee(n.value,WA.state);if(a.isPureString())continue;const s=a.getValue();await D(o.name,n.name,s),a.onChange(async i=>{await D(o.name,n.name,i)})}}}async function Me(){var t;const e=await x();for(const[o,r]of e.entries())if(r.type!=="objectgroup"){const n=(t=r.properties)!==null&&t!==void 0?t:[];for(const a of n){if(a.type==="int"||a.type==="bool"||a.type==="object"||typeof a.value!="string")continue;const s=new ee(a.value,WA.state);if(s.isPureString())continue;const i=s.getValue();_(o,a.name,i),s.onChange(l=>{_(o,a.name,l)})}}}async function D(t,e,o){console.log(t),(await WA.room.area.get(t)).setProperty(e,o)}function _(t,e,o){WA.room.setProperty(t,e,o),e==="visible"&&(o?WA.room.showLayer(t):WA.room.hideLayer(t))}const Re="https://admin.workadventu.re/html";let $,G=0,j=0;function q(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const o of e.split(`
`))WA.room.showLayer(o);e=t.properties.mustGetString("closeLayer");for(const o of e.split(`
`))WA.room.hideLayer(o)}else{let e=t.properties.mustGetString("openLayer");for(const o of e.split(`
`))WA.room.hideLayer(o);e=t.properties.mustGetString("closeLayer");for(const o of e.split(`
`))WA.room.showLayer(o)}}function Be(t){const e=t.properties.getString("openSound"),o=t.properties.getNumber("soundRadius");let r=1;if(o){const n=oe(t.properties.mustGetString("openLayer").split(`
`));if(n>o)return;r=1-n/o}e&&WA.sound.loadSound(e).play({volume:r})}function Ie(t){const e=t.properties.getString("closeSound"),o=t.properties.getNumber("soundRadius");let r=1;if(o){const n=oe(t.properties.mustGetString("closeLayer").split(`
`));if(n>o)return;r=1-n/o}e&&WA.sound.loadSound(e).play({volume:r})}function te(t){return t.map(e=>$.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function oe(t){const e=te(t),o=Z(e),r=((o.right-o.left)/2+o.left)*32,n=((o.bottom-o.top)/2+o.top)*32;return Math.sqrt(Math.pow(G-r,2)+Math.pow(j-n,2))}function Ve(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Be(t):Ie(t),q(t)}),q(t)}function F(t,e,o,r){const n=t.name;let a,s,i=!1;const l=o.getString("tag");let u=!0;l&&!WA.player.tags.includes(l)&&(u=!1);const f=!!l;function d(){var c;a&&a.remove(),a=WA.ui.displayActionMessage({message:(c=o.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var c;a&&a.remove(),a=WA.ui.displayActionMessage({message:(c=o.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,d()}})}function P(){let c;if(t.type==="tilelayer")c=Z(te(e.properties.mustGetString("closeLayer").split(`
`)));else{if(t.x===void 0||t.y===void 0||t.width===void 0||t.height===void 0)throw new Error(`Doorstep zone "${t.name}" is missing x, y, width or height`);c={top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}s=WA.room.website.create({name:"doorKeypad"+n,url:r+"/keypad.html#"+encodeURIComponent(n),position:{x:c.right*32,y:c.top*32,width:32*3,height:32*4},allowApi:!0})}function k(){s&&(WA.room.website.delete(s.name),s=void 0)}function p(){if(i=!0,o.getBoolean("autoOpen")&&u){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(f&&!u||!f)&&(o.getString("code")||o.getString("codeVariable"))){P();return}u&&(WA.state[e.name]?d():m())}function b(){i=!1,o.getBoolean("autoClose")&&(WA.state[e.name]=!1),a&&a.remove(),k()}t.type==="tilelayer"?(WA.room.onEnterLayer(n).subscribe(p),WA.room.onLeaveLayer(n).subscribe(b)):(WA.room.area.onEnter(n).subscribe(p),WA.room.area.onLeave(n).subscribe(b)),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!o.getBoolean("autoClose")&&WA.state[e.name]===!0&&d(),s&&WA.state[e.name]===!0&&k(),!o.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function $e(t){const e=t.properties.mustGetString("bellSound"),o=t.properties.getNumber("soundRadius");let r=1;if(o){const n=Math.sqrt(Math.pow(t.x-G,2)+Math.pow(t.y-j,2));if(n>o)return;r=1-n/o}WA.sound.loadSound(e).play({volume:r})}function Ue(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&$e(t)})}function Q(t,e,o){let r;const n=e.getString("bellPopup");if(o.type==="tilelayer"){const a=o.name;WA.room.onEnterLayer(a).subscribe(()=>{var s;n?r=WA.ui.openPopup(n,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(a).subscribe(()=>{r&&(r.close(),r=void 0)})}else{const a=o.name;WA.room.area.onEnter(a).subscribe(()=>{var s;n?r=WA.ui.openPopup(n,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.area.onLeave(a).subscribe(()=>{r&&(r.close(),r=void 0)})}}async function Ge(t){t=t??Re;const e=await ue();$=await x();for(const o of e.values())o.properties.get("door")&&Ve(o),o.properties.get("bell")&&Ue(o);for(const o of $.values()){const r=new v(o.properties),n=r.getString("doorVariable");if(n&&o.type==="tilelayer"){const s=e.get(n);if(s===void 0)throw new Error('Cannot find variable "'+n+'" referred in the "doorVariable" property of layer "'+o.name+'"');F(o,s,r,t)}const a=r.getString("bellVariable");a&&o.type==="tilelayer"&&Q(a,r,o)}for(const o of await Y()){const r=new v(o.properties),n=r.getString("doorVariable");if(n){const s=e.get(n);if(s===void 0)throw new Error('Cannot find variable "'+n+'" referred in the "doorVariable" property of object "'+o.name+'"');F(o,s,r,t)}const a=r.getString("bellVariable");a&&Q(a,r,o)}WA.player.onPlayerMove(o=>{G=o.x,j=o.y})}function je(t,e){const o=t.getString("bindVariable");if(o){const r=t.get("enterValue"),n=t.get("leaveValue"),a=t.getString("triggerMessage"),s=t.getString("tag");Oe(o,e,r,n,a,s)}}function Oe(t,e,o,r,n,a){a&&!WA.player.tags.includes(a)||(o!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{n||(WA.state[t]=o)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function ze(){const t=await x();for(const e of t.values()){const o=new v(e.properties);je(o,e.name)}}let X;async function Ne(t){const e=await WA.room.getTiledMap();t=t??H,X=await x();const o=e.layers.find(r=>r.name==="configuration");if(o){const n=new v(o.properties).getString("tag");(!n||WA.player.tags.includes(n))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const a of X.values()){const s=new v(a.properties),i=s.getString("openConfig");i&&a.type==="tilelayer"&&De(i.split(","),a.name,s)}}}function De(t,e,o){let r;const n=o.getString("openConfigAdminTag");let a=!0;n&&!WA.player.tags.includes(n)&&(a=!1);function s(){var l;r&&r.remove(),r=WA.ui.displayActionMessage({message:(l=o.getString("openConfigTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE or touch here to configure",callback:()=>O(t)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const l=o.getString("openConfigTrigger");a&&(l&&l==="onaction"?s():O(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),i()})}function _e(){return WA.onInit().then(()=>{Ge().catch(t=>console.error(t)),ze().catch(t=>console.error(t)),Ne().catch(t=>console.error(t)),Me().catch(t=>console.error(t)),Pe().catch(t=>console.error(t))}).catch(t=>console.error(t))}let re="https://admin.workadventu.re";function ne(){const t=WA.player.userRoomToken;if(t===void 0)throw new Error("No userRoomToken found. The quests plugin can only work with WorkAdventure SAAS edition (at https://play.workadventu.re).");return t}async function ae(t,e){if(!WA.player.isLogged)throw new Error("You must be logged to gain XP.");const o=new URL(`/api/quests/${t}/level-up`,re),r=await fetch(o,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:ne()},body:JSON.stringify({xp:e})});if(!r.ok)throw new Error(`An error occurred. HTTP Code: ${r.status} ${r.statusText}.`);const n=await r.json();return n.awardedBadges.length>0&&(async()=>{for(const a of n.awardedBadges)await qe(t,a)})().catch(a=>{console.error(a)}),n}async function qe(t,e){const o=new URL(`/quests/${t}/badge/${e}/congratulations`,re);o.search=new URLSearchParams({token:ne()}).toString(),await WA.ui.website.open({url:o.toString(),position:{vertical:"middle",horizontal:"middle"},allowApi:!0,visible:!0,size:{width:"100%",height:"100%"}})}WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),_e().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t))}).catch(t=>console.error(t));console.log("Script started successfully");WA.onInit().then(async()=>{if(!WA.player.tags.includes("member")){let t=function(){WA.controls.restorePlayerControls(),WA.controls.restoreMicrophone(),WA.controls.restoreWebcam(),WA.controls.restoreWheelZoom(),WA.controls.restoreRightClick(),WA.controls.restoreInviteButton(),WA.controls.restoreMapEditor(),WA.controls.restoreRoomList(),WA.controls.restorePlayerProximityMeeting(),WA.controls.restoreScreenSharing()},e=function(){WA.controls.restorePlayerControls(),WA.controls.restorePlayerProximityMeeting(),WA.controls.restoreScreenSharing(),WA.controls.restoreWheelZoom(),WA.controls.restoreMicrophone(),WA.controls.restoreWebcam(),WA.controls.restoreRightClick(),WA.ui.banner.openBanner({id:"banner-exploration",text:`Welcome to CoCreation.World ${encodeURIComponent(n)}. To access the full experience, sign up.`,bgColor:"#1B1B29",textColor:"#FFFFFF",closable:!0,timeToClose:1e4,link:{label:"CLICK HERE",url:"https://app.cocreation.world/login"}})},o=function(){WA.camera.set(r.x,r.y,500,500,!1,!0,1e3),new Promise(i=>setTimeout(i,1e3)).then(()=>{WA.camera.followPlayer(!0),WA.controls.restoreWheelZoom()})};WA.camera.set(700,1e3,800,800,!1,!1,10),WA.camera.set(700,1700,700,700,!1,!0,5e3);const r=await WA.player.getPosition(),n=WA.player.name,a=WA.player.language,s=await WA.player.getWokaPicture();WA.controls.disablePlayerControls(),WA.controls.disableMicrophone(),WA.controls.disableWebcam(),WA.controls.disableWheelZoom(),WA.controls.disableRightClick(),WA.controls.disableInviteButton(),WA.controls.disableMapEditor(),WA.controls.disableRoomList(),WA.controls.disablePlayerProximityMeeting(),WA.controls.disableScreenSharing(),new Promise(i=>setTimeout(i,3e3)).then(()=>{WA.ui.openPopup("popupRectangle",`Welcome to 
 CoCreation.World 
  Would you like to experience the tutorial first?`,[{label:"👎 no",className:"error",callback:async i=>{i.close(),o(),WA.player.tags.includes("member")?(t(),o()):(e(),o())}},{label:"👍 yes",className:"warning",callback:async i=>{console.log("popup closed"),i.close(),WA.ui.modal.openModal({title:"Welcome",src:`https://chat.cocreation.world/c3-o-mat?playername=${encodeURIComponent(n)}&avatar=${encodeURIComponent(s)}&language=${a}`,allow:"fullscreen",allowApi:!0,position:"center"}),WA.player.tags.includes("member")?(t(),o()):(e(),o())}}])})}});WA.room.area.onEnter("showRoof").subscribe(()=>{WA.room.showLayer("FG Exterior/Roof"),WA.room.showLayer("FG Exterior/glasswall")});WA.room.area.onLeave("showRoof").subscribe(()=>{WA.room.hideLayer("FG Exterior/Roof"),WA.room.hideLayer("FG Exterior/glasswall")});WA.room.area.onEnter("topLeft").subscribe(()=>{WA.room.showLayer("FG Exterior/roofTransp")});WA.room.area.onLeave("topLeft").subscribe(()=>{WA.room.hideLayer("FG Exterior/roofTransp")});WA.onInit().then(()=>{WA.player.tags.includes("hutriadmin")&&WA.controls.disableMapEditor()});async function w(t){var e=WA.state[t];console.log(`Text for ${t} is configured as `+e);var o=`https://iw6tkif7th7yp5ax2ufzkl3kce0bcuys.lambda-url.us-east-1.on.aws/?text=${encodeURIComponent(e)}&imageType=caption&width=78&height=50&color=yellow`;console.log("New img-url of title is "+o);const r=await WA.room.website.get(t.replace("text","display"));r.url=o,r.visible=!0,console.log(`Title for ${t} has been changed to ${r.url}`)}WA.onInit().then(()=>{w("holo1-text"),w("holo2-text"),w("holo3-text"),w("holo4-text"),w("holo5-text"),w("holo6-text"),w("makerHolo-text")});["holo1-text","holo2-text","holo3-text","holo4-text","holo5-text","holo6-text","makerHolo-text"].forEach(t=>{WA.state.onVariableChange(t).subscribe(()=>{console.log(`${t} variable changed`),w(t)})});async function se(){var t=WA.state.makerspaceBillboardText;console.log("Text for makerspacebillboardText is configured as "+t);var e=`https://iw6tkif7th7yp5ax2ufzkl3kce0bcuys.lambda-url.us-east-1.on.aws/?text=${encodeURIComponent(t)}&imageType=caption&width=122&height=60&color=black`;console.log("New img-url of title is "+e);const o=await WA.room.website.get("makerspaceBillboard");o.url=e,o.visible=!0,console.log(`Title for makerspacebillboardText has been changed to ${o.url}`)}WA.onInit().then(()=>{se()});WA.state.onVariableChange("makerspacebillboardText").subscribe(()=>{console.log("makerspacebillboardText variable changed"),se()});async function ie(){var t=WA.state.makerMeet;if(console.log(`makerMeet variable changed to ${t}`),t===""){const e=await WA.room.area.get("makerspaceJitsi");e&&(e.height=0,e.width=0,console.log("Area 'makerSpaceJitsi' resized to height: 1, width: 1"))}else if(t==="1"){const e=await WA.room.area.get("makerspaceJitsi");e&&(e.height=252,e.width=352,console.log("Area 'makerSpaceJitsi' resized to height: 252, width: 352"))}}WA.onInit().then(()=>{ie()});WA.state.onVariableChange("makerMeet").subscribe(()=>{ie()});WA.onInit().then(()=>{let t=!1;WA.ui.actionBar.addButton({id:"calendar",type:"action",imageSrc:"https://minio-production-fa1d.up.railway.app/typebot/public/workspaces/clwxv3blz001hp28kvtibhtth/typebots/clzqtjvdr0001dvthgytin9cu/blocks/b0qczozh0s0f8tcj821pufod?v=1727883058553",toolTip:"Calendar",callback:()=>{t?(WA.ui.modal.closeModal(),t=!1):(WA.ui.modal.openModal({title:"Calender",src:"https://cocreation.world/upcoming-events",allow:"fullscreen",allowApi:!0,position:"right"}),t=!0)}})});WA.onInit().then(()=>{WA.ui.actionBar.addButton({id:"contact",type:"action",imageSrc:"https://minio-production-fa1d.up.railway.app/typebot/public/workspaces/clwxv3blz001hp28kvtibhtth/typebots/clzqtjvdr0001dvthgytin9cu/blocks/ju9avkxx9u3rfb45hsika0s4?v=1727964643138",toolTip:"Contact",callback:async()=>{(await WA.ui.getMenuCommand("contact")).open()}})});WA.onInit().then(async()=>{const t=Math.floor(Date.now()/1e3);console.log(`⌚ Login-QUEST:Current epoch time: ${t}`);const e=await WA.player.state.lastVisit;if(console.log(`⌚ Login-QUEST:Last visit time: ${e}`),!e)await WA.player.state.saveVariable("lastVisit",t.toString(),{persist:!0,public:!0,scope:"world"}),console.log(`Set lastVisit to current epoch time: ${t}`);else{const o=parseInt(e,10),r=t-o;if(console.log(`⌚ Login-QUEST: Time difference since last visit: ${r} seconds`),r>=86400){try{console.log("⌚ Login-QUEST: Attempting to grant 25 XP for login after 24 hours"),await ae("LOGIN",25),console.log("⌚ Login-QUEST: Successfully granted 25 XP for login after 24 hours")}catch(n){console.error(`⌚ Login-QUEST: Error while granting XP: ${n}`)}console.log("⌚ Login-QUEST:: Granted 25 XP for login after 24 hours"),await WA.player.state.saveVariable("lastVisit",t.toString(),{persist:!0,public:!0,scope:"world"}),console.log(`⌚ Login-QUEST:Updated lastVisit to current epoch time: ${t}`)}else console.log("⌚ Login-QUEST: Not enough time has passed since last visit")}});const Fe=["holo","library","games","meeting","couch","maker","cowork","bots"],R=new Set;WA.onInit().then(async()=>{const t=await WA.player.state.discoveredAreas;t&&typeof t=="string"&&t.split(",").forEach(e=>R.add(e)),Fe.forEach(e=>{WA.room.area.onEnter(e).subscribe(async()=>{if(!R.has(e)){R.add(e),console.log(`Player discovered area: ${e}`);try{await ae("EXPLORATION",10),console.log(`Granted 10 XP for discovering area: ${e}`),await WA.player.state.saveVariable("discoveredAreas",Array.from(R).join(","),{persist:!0,public:!0,scope:"world"})}catch(o){console.error(`Error while granting XP for area ${e}: ${o}`)}}})})});const Qe=["library","games","maker","staff"];WA.onInit().then(()=>{let t;Qe.forEach(e=>{WA.room.area.onEnter(`trigger_popup-${e}`).subscribe(()=>{t=WA.ui.openPopup(`popup-${e}`,"There is more to explore for members.",[{label:"Explore",className:"primary",callback:()=>{WA.ui.modal.openModal({title:"CCW Website",src:`https://cocreation.world/${e}`,allow:"fullscreen",allowApi:!0,position:"right"})}}])}),WA.room.area.onLeave(`trigger_popup-${e}`).subscribe(()=>{t.close()})})});WA.onInit().then(async()=>{await WA.player.name});
//# sourceMappingURL=main-f07b5d23.js.map