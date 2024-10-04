class v{constructor(e){this.properties=e??[]}get(e){const r=this.properties.filter(o=>o.name===e).map(o=>o.value);if(r.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(r.length!==0)return r[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,r){const o=this.get(e);if(o!==void 0){if(r!=="json"&&typeof o!==r)throw new Error('Expected property "'+e+'" to have type "'+r+'"');return o}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,r){const o=this.get(e);if(o===void 0)throw new Error('Property "'+e+'" is missing');if(r!=="json"&&typeof o!==r)throw new Error('Expected property "'+e+'" to have type "'+r+'"');return o}getType(e){const r=this.properties.filter(o=>o.name===e).map(o=>o.type);if(r.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(r.length!==0)return r[0]}}const K="https://unpkg.com/@workadventure/scripting-api-extra@1.9.1/dist";class ie{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new v(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function U(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(K+"/configuration.html"+e,!0)}async function le(t,e){const r=await WA.room.getTiledMap(),o=new Map;return J(r.layers,o,t,e),o}function J(t,e,r,o){for(const n of t)if(n.type==="objectgroup"){for(const a of n.objects)if(a.type==="variable"||a.class==="variable"){if(r&&n.name!==r||o&&!o.includes(a.name))continue;e.set(a.name,new ie(a))}}else n.type==="group"&&J(n.layers,e,r,o)}let B;async function L(){return B===void 0&&(B=ce()),B}async function ce(){return ue(await WA.room.getTiledMap())}function ue(t){const e=new Map;return X(t.layers,"",e),e}function X(t,e,r){for(const o of t)o.type==="group"?X(o.layers,e+o.name+"/",r):(o.name=e+o.name,r.set(o.name,o))}async function Y(){const t=await L(),e=[];for(const r of t.values())if(r.type==="objectgroup")for(const o of r.objects)(o.type==="area"||o.class==="area")&&e.push(o);return e}function pe(t){let e=1/0,r=1/0,o=0,n=0;const a=t.data;if(typeof a=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<t.height;s++)for(let i=0;i<t.width;i++)a[i+s*t.width]!==0&&(e=Math.min(e,i),n=Math.max(n,i),r=Math.min(r,s),o=Math.max(o,s));return{top:r,left:e,right:n+1,bottom:o+1}}function Q(t){let e=1/0,r=1/0,o=0,n=0;for(const a of t){const s=pe(a);s.left<e&&(e=s.left),s.top<r&&(r=s.top),s.right>n&&(n=s.right),s.bottom>o&&(o=s.bottom)}return{top:r,left:e,right:n,bottom:o}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var fe=Object.prototype.toString,C=Array.isArray||function(e){return fe.call(e)==="[object Array]"};function G(t){return typeof t=="function"}function he(t){return C(t)?"array":typeof t}function I(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function F(t,e){return t!=null&&typeof t=="object"&&e in t}function ge(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var de=RegExp.prototype.test;function ye(t,e){return de.call(t,e)}var me=/\S/;function Ae(t){return!ye(me,t)}var be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function We(t){return String(t).replace(/[&<>"'`=\/]/g,function(r){return be[r]})}var we=/\s*/,ve=/\s+/,O=/\s*=/,Se=/\s*\}/,Ce=/#|\^|\/|>|\{|&|=|!/;function ke(t,e){if(!t)return[];var r=!1,o=[],n=[],a=[],s=!1,i=!1,l="",u=0;function f(){if(s&&!i)for(;a.length;)delete n[a.pop()];else a=[];s=!1,i=!1}var d,m,E;function k(b){if(typeof b=="string"&&(b=b.split(ve,2)),!C(b)||b.length!==2)throw new Error("Invalid tags: "+b);d=new RegExp(I(b[0])+"\\s*"),m=new RegExp("\\s*"+I(b[1])),E=new RegExp("\\s*"+I("}"+b[1]))}k(e||g.tags);for(var p=new P(t),A,c,y,x,M,w;!p.eos();){if(A=p.pos,y=p.scanUntil(d),y)for(var R=0,se=y.length;R<se;++R)x=y.charAt(R),Ae(x)?(a.push(n.length),l+=x):(i=!0,r=!0,l+=" "),n.push(["text",x,A,A+1]),A+=1,x===`
`&&(f(),l="",u=0,r=!1);if(!p.scan(d))break;if(s=!0,c=p.scan(Ce)||"name",p.scan(we),c==="="?(y=p.scanUntil(O),p.scan(O),p.scanUntil(m)):c==="{"?(y=p.scanUntil(E),p.scan(Se),p.scanUntil(m),c="&"):y=p.scanUntil(m),!p.scan(m))throw new Error("Unclosed tag at "+p.pos);if(c==">"?M=[c,y,A,p.pos,l,u,r]:M=[c,y,A,p.pos],u++,n.push(M),c==="#"||c==="^")o.push(M);else if(c==="/"){if(w=o.pop(),!w)throw new Error('Unopened section "'+y+'" at '+A);if(w[1]!==y)throw new Error('Unclosed section "'+w[1]+'" at '+A)}else c==="name"||c==="{"||c==="&"?i=!0:c==="="&&k(y)}if(f(),w=o.pop(),w)throw new Error('Unclosed section "'+w[1]+'" at '+p.pos);return Te(xe(n))}function xe(t){for(var e=[],r,o,n=0,a=t.length;n<a;++n)r=t[n],r&&(r[0]==="text"&&o&&o[0]==="text"?(o[1]+=r[1],o[3]=r[3]):(e.push(r),o=r));return e}function Te(t){for(var e=[],r=e,o=[],n,a,s=0,i=t.length;s<i;++s)switch(n=t[s],n[0]){case"#":case"^":r.push(n),o.push(n),r=n[4]=[];break;case"/":a=o.pop(),a[5]=n[2],r=o.length>0?o[o.length-1][4]:e;break;default:r.push(n)}return e}function P(t){this.string=t,this.tail=t,this.pos=0}P.prototype.eos=function(){return this.tail===""};P.prototype.scan=function(e){var r=this.tail.match(e);if(!r||r.index!==0)return"";var o=r[0];return this.tail=this.tail.substring(o.length),this.pos+=o.length,o};P.prototype.scanUntil=function(e){var r=this.tail.search(e),o;switch(r){case-1:o=this.tail,this.tail="";break;case 0:o="";break;default:o=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=o.length,o};function S(t,e){this.view=t,this.cache={".":this.view},this.parent=e}S.prototype.push=function(e){return new S(e,this)};S.prototype.lookup=function(e){var r=this.cache,o;if(r.hasOwnProperty(e))o=r[e];else{for(var n=this,a,s,i,l=!1;n;){if(e.indexOf(".")>0)for(a=n.view,s=e.split("."),i=0;a!=null&&i<s.length;)i===s.length-1&&(l=F(a,s[i])||ge(a,s[i])),a=a[s[i++]];else a=n.view[e],l=F(n.view,e);if(l){o=a;break}n=n.parent}r[e]=o}return G(o)&&(o=o.call(this.view)),o};function h(){this.templateCache={_cache:{},set:function(e,r){this._cache[e]=r},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}h.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};h.prototype.parse=function(e,r){var o=this.templateCache,n=e+":"+(r||g.tags).join(":"),a=typeof o<"u",s=a?o.get(n):void 0;return s==null&&(s=ke(e,r),a&&o.set(n,s)),s};h.prototype.render=function(e,r,o,n){var a=this.getConfigTags(n),s=this.parse(e,a),i=r instanceof S?r:new S(r,void 0);return this.renderTokens(s,i,o,e,n)};h.prototype.renderTokens=function(e,r,o,n,a){for(var s="",i,l,u,f=0,d=e.length;f<d;++f)u=void 0,i=e[f],l=i[0],l==="#"?u=this.renderSection(i,r,o,n,a):l==="^"?u=this.renderInverted(i,r,o,n,a):l===">"?u=this.renderPartial(i,r,o,a):l==="&"?u=this.unescapedValue(i,r):l==="name"?u=this.escapedValue(i,r,a):l==="text"&&(u=this.rawValue(i)),u!==void 0&&(s+=u);return s};h.prototype.renderSection=function(e,r,o,n,a){var s=this,i="",l=r.lookup(e[1]);function u(m){return s.render(m,r,o,a)}if(l){if(C(l))for(var f=0,d=l.length;f<d;++f)i+=this.renderTokens(e[4],r.push(l[f]),o,n,a);else if(typeof l=="object"||typeof l=="string"||typeof l=="number")i+=this.renderTokens(e[4],r.push(l),o,n,a);else if(G(l)){if(typeof n!="string")throw new Error("Cannot use higher-order sections without the original template");l=l.call(r.view,n.slice(e[3],e[5]),u),l!=null&&(i+=l)}else i+=this.renderTokens(e[4],r,o,n,a);return i}};h.prototype.renderInverted=function(e,r,o,n,a){var s=r.lookup(e[1]);if(!s||C(s)&&s.length===0)return this.renderTokens(e[4],r,o,n,a)};h.prototype.indentPartial=function(e,r,o){for(var n=r.replace(/[^ \t]/g,""),a=e.split(`
`),s=0;s<a.length;s++)a[s].length&&(s>0||!o)&&(a[s]=n+a[s]);return a.join(`
`)};h.prototype.renderPartial=function(e,r,o,n){if(o){var a=this.getConfigTags(n),s=G(o)?o(e[1]):o[e[1]];if(s!=null){var i=e[6],l=e[5],u=e[4],f=s;l==0&&u&&(f=this.indentPartial(s,u,i));var d=this.parse(f,a);return this.renderTokens(d,r,o,f,n)}}};h.prototype.unescapedValue=function(e,r){var o=r.lookup(e[1]);if(o!=null)return o};h.prototype.escapedValue=function(e,r,o){var n=this.getConfigEscape(o)||g.escape,a=r.lookup(e[1]);if(a!=null)return typeof a=="number"&&n===g.escape?String(a):n(a)};h.prototype.rawValue=function(e){return e[1]};h.prototype.getConfigTags=function(e){return C(e)?e:e&&typeof e=="object"?e.tags:void 0};h.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!C(e))return e.escape};var g={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){T.templateCache=t},get templateCache(){return T.templateCache}},T=new h;g.clearCache=function(){return T.clearCache()};g.parse=function(e,r){return T.parse(e,r)};g.render=function(e,r,o,n){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+he(e)+'" was given as the first argument for mustache#render(template, view, partials)');return T.render(e,r,o,n)};g.escape=We;g.Scanner=P;g.Context=S;g.Writer=h;class Z{constructor(e,r){this.template=e,this.state=r,this.ast=g.parse(e)}getValue(){return this.value===void 0&&(this.value=g.render(this.template,this.state)),this.value}onChange(e){const r=[];for(const o of this.getUsedVariables().values())r.push(this.state.onVariableChange(o).subscribe(()=>{const n=g.render(this.template,this.state);n!==this.value&&(this.value=n,e(this.value))}));return{unsubscribe:()=>{for(const o of r)o.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,r){for(const o of e){const n=o[0],a=o[1],s=o[4];["name","&","#","^"].includes(n)&&r.add(a),s!==void 0&&typeof s!="string"&&this.recursiveGetUsedVariables(s,r)}}}async function Le(){var t;const e=await Y();for(const r of e){const o=(t=r.properties)!==null&&t!==void 0?t:[];for(const n of o){if(n.type==="int"||n.type==="bool"||n.type==="object"||typeof n.value!="string")continue;const a=new Z(n.value,WA.state);if(a.isPureString())continue;const s=a.getValue();await z(r.name,n.name,s),a.onChange(async i=>{await z(r.name,n.name,i)})}}}async function Pe(){var t;const e=await L();for(const[r,o]of e.entries())if(o.type!=="objectgroup"){const n=(t=o.properties)!==null&&t!==void 0?t:[];for(const a of n){if(a.type==="int"||a.type==="bool"||a.type==="object"||typeof a.value!="string")continue;const s=new Z(a.value,WA.state);if(s.isPureString())continue;const i=s.getValue();N(r,a.name,i),s.onChange(l=>{N(r,a.name,l)})}}}async function z(t,e,r){console.log(t),(await WA.room.area.get(t)).setProperty(e,r)}function N(t,e,r){WA.room.setProperty(t,e,r),e==="visible"&&(r?WA.room.showLayer(t):WA.room.hideLayer(t))}const Ee="https://admin.workadventu.re/html";let V,j=0,$=0;function q(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const r of e.split(`
`))WA.room.showLayer(r);e=t.properties.mustGetString("closeLayer");for(const r of e.split(`
`))WA.room.hideLayer(r)}else{let e=t.properties.mustGetString("openLayer");for(const r of e.split(`
`))WA.room.hideLayer(r);e=t.properties.mustGetString("closeLayer");for(const r of e.split(`
`))WA.room.showLayer(r)}}function Me(t){const e=t.properties.getString("openSound"),r=t.properties.getNumber("soundRadius");let o=1;if(r){const n=te(t.properties.mustGetString("openLayer").split(`
`));if(n>r)return;o=1-n/r}e&&WA.sound.loadSound(e).play({volume:o})}function Re(t){const e=t.properties.getString("closeSound"),r=t.properties.getNumber("soundRadius");let o=1;if(r){const n=te(t.properties.mustGetString("closeLayer").split(`
`));if(n>r)return;o=1-n/r}e&&WA.sound.loadSound(e).play({volume:o})}function ee(t){return t.map(e=>V.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function te(t){const e=ee(t),r=Q(e),o=((r.right-r.left)/2+r.left)*32,n=((r.bottom-r.top)/2+r.top)*32;return Math.sqrt(Math.pow(j-o,2)+Math.pow($-n,2))}function Be(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Me(t):Re(t),q(t)}),q(t)}function D(t,e,r,o){const n=t.name;let a,s,i=!1;const l=r.getString("tag");let u=!0;l&&!WA.player.tags.includes(l)&&(u=!1);const f=!!l;function d(){var c;a&&a.remove(),a=WA.ui.displayActionMessage({message:(c=r.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var c;a&&a.remove(),a=WA.ui.displayActionMessage({message:(c=r.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,d()}})}function E(){let c;if(t.type==="tilelayer")c=Q(ee(e.properties.mustGetString("closeLayer").split(`
`)));else{if(t.x===void 0||t.y===void 0||t.width===void 0||t.height===void 0)throw new Error(`Doorstep zone "${t.name}" is missing x, y, width or height`);c={top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}s=WA.room.website.create({name:"doorKeypad"+n,url:o+"/keypad.html#"+encodeURIComponent(n),position:{x:c.right*32,y:c.top*32,width:32*3,height:32*4},allowApi:!0})}function k(){s&&(WA.room.website.delete(s.name),s=void 0)}function p(){if(i=!0,r.getBoolean("autoOpen")&&u){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(f&&!u||!f)&&(r.getString("code")||r.getString("codeVariable"))){E();return}u&&(WA.state[e.name]?d():m())}function A(){i=!1,r.getBoolean("autoClose")&&(WA.state[e.name]=!1),a&&a.remove(),k()}t.type==="tilelayer"?(WA.room.onEnterLayer(n).subscribe(p),WA.room.onLeaveLayer(n).subscribe(A)):(WA.room.area.onEnter(n).subscribe(p),WA.room.area.onLeave(n).subscribe(A)),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!r.getBoolean("autoClose")&&WA.state[e.name]===!0&&d(),s&&WA.state[e.name]===!0&&k(),!r.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function Ie(t){const e=t.properties.mustGetString("bellSound"),r=t.properties.getNumber("soundRadius");let o=1;if(r){const n=Math.sqrt(Math.pow(t.x-j,2)+Math.pow(t.y-$,2));if(n>r)return;o=1-n/r}WA.sound.loadSound(e).play({volume:o})}function Ve(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Ie(t)})}function _(t,e,r){let o;const n=e.getString("bellPopup");if(r.type==="tilelayer"){const a=r.name;WA.room.onEnterLayer(a).subscribe(()=>{var s;n?o=WA.ui.openPopup(n,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(a).subscribe(()=>{o&&(o.close(),o=void 0)})}else{const a=r.name;WA.room.area.onEnter(a).subscribe(()=>{var s;n?o=WA.ui.openPopup(n,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.area.onLeave(a).subscribe(()=>{o&&(o.close(),o=void 0)})}}async function Ge(t){t=t??Ee;const e=await le();V=await L();for(const r of e.values())r.properties.get("door")&&Be(r),r.properties.get("bell")&&Ve(r);for(const r of V.values()){const o=new v(r.properties),n=o.getString("doorVariable");if(n&&r.type==="tilelayer"){const s=e.get(n);if(s===void 0)throw new Error('Cannot find variable "'+n+'" referred in the "doorVariable" property of layer "'+r.name+'"');D(r,s,o,t)}const a=o.getString("bellVariable");a&&r.type==="tilelayer"&&_(a,o,r)}for(const r of await Y()){const o=new v(r.properties),n=o.getString("doorVariable");if(n){const s=e.get(n);if(s===void 0)throw new Error('Cannot find variable "'+n+'" referred in the "doorVariable" property of object "'+r.name+'"');D(r,s,o,t)}const a=o.getString("bellVariable");a&&_(a,o,r)}WA.player.onPlayerMove(r=>{j=r.x,$=r.y})}function je(t,e){const r=t.getString("bindVariable");if(r){const o=t.get("enterValue"),n=t.get("leaveValue"),a=t.getString("triggerMessage"),s=t.getString("tag");$e(r,e,o,n,a,s)}}function $e(t,e,r,o,n,a){a&&!WA.player.tags.includes(a)||(r!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{n||(WA.state[t]=r)}),o!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=o}))}async function Ue(){const t=await L();for(const e of t.values()){const r=new v(e.properties);je(r,e.name)}}let H;async function Fe(t){const e=await WA.room.getTiledMap();t=t??K,H=await L();const r=e.layers.find(o=>o.name==="configuration");if(r){const n=new v(r.properties).getString("tag");(!n||WA.player.tags.includes(n))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const a of H.values()){const s=new v(a.properties),i=s.getString("openConfig");i&&a.type==="tilelayer"&&Oe(i.split(","),a.name,s)}}}function Oe(t,e,r){let o;const n=r.getString("openConfigAdminTag");let a=!0;n&&!WA.player.tags.includes(n)&&(a=!1);function s(){var l;o&&o.remove(),o=WA.ui.displayActionMessage({message:(l=r.getString("openConfigTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE or touch here to configure",callback:()=>U(t)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const l=r.getString("openConfigTrigger");a&&(l&&l==="onaction"?s():U(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{o&&o.remove(),i()})}function ze(){return WA.onInit().then(()=>{Ge().catch(t=>console.error(t)),Ue().catch(t=>console.error(t)),Fe().catch(t=>console.error(t)),Pe().catch(t=>console.error(t)),Le().catch(t=>console.error(t))}).catch(t=>console.error(t))}let re="https://admin.workadventu.re";function oe(){const t=WA.player.userRoomToken;if(t===void 0)throw new Error("No userRoomToken found. The quests plugin can only work with WorkAdventure SAAS edition (at https://play.workadventu.re).");return t}async function Ne(t,e){if(!WA.player.isLogged)throw new Error("You must be logged to gain XP.");const r=new URL(`/api/quests/${t}/level-up`,re),o=await fetch(r,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:oe()},body:JSON.stringify({xp:e})});if(!o.ok)throw new Error(`An error occurred. HTTP Code: ${o.status} ${o.statusText}.`);const n=await o.json();return n.awardedBadges.length>0&&(async()=>{for(const a of n.awardedBadges)await qe(t,a)})().catch(a=>{console.error(a)}),n}async function qe(t,e){const r=new URL(`/quests/${t}/badge/${e}/congratulations`,re);r.search=new URLSearchParams({token:oe()}).toString(),await WA.ui.website.open({url:r.toString(),position:{vertical:"middle",horizontal:"middle"},allowApi:!0,visible:!0,size:{width:"100%",height:"100%"}})}WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),ze().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t))}).catch(t=>console.error(t));console.log("Script started successfully");WA.onInit().then(async()=>{WA.room.hideLayer("FG Interior/godray"),WA.controls.disablePlayerControls(),WA.controls.disableMicrophone(),WA.controls.disableWebcam(),WA.controls.disableWheelZoom(),WA.controls.disableRightClick(),WA.controls.disableInviteButton(),WA.controls.disableMapEditor(),WA.controls.disableRoomList(),WA.controls.disablePlayerProximityMeeting(),WA.controls.disableScreenSharing(),WA.camera.set(1055,1837,1e4,1e4,!1,!1,1e3);const t=await WA.player.getPosition();WA.camera.set(t.x,t.y,250,250,!1,!0,1e4),await new Promise(e=>setTimeout(e,1e4)),WA.controls.restoreWheelZoom(),WA.camera.set(t.x,t.y,250,250,!1,!1,10),WA.camera.followPlayer(!0),WA.room.showLayer("FG Interior/godray"),WA.ui.openPopup("popupRectangle",`Welcome to 
 CoCreation.World 
  Would you like to experience the tutorial first?`,[{label:"👎 no",className:"error",callback:e=>{e.close(),WA.player.tags.includes("member")?(WA.controls.restorePlayerControls(),WA.controls.restoreMicrophone(),WA.controls.restoreWebcam(),WA.controls.restoreRightClick(),WA.controls.restoreInviteButton(),WA.controls.restoreMapEditor(),WA.controls.restoreRoomList(),WA.controls.restorePlayerProximityMeeting(),WA.controls.restoreScreenSharing()):(WA.controls.restorePlayerControls(),WA.controls.restorePlayerProximityMeeting(),WA.controls.restoreScreenSharing(),WA.controls.restoreMicrophone(),WA.controls.restoreWebcam(),WA.controls.restoreRightClick(),WA.onInit().then(async()=>{if(!WA.player.tags.includes("member")){const r=WA.player.name;WA.ui.banner.openBanner({id:"banner-exploration",text:`Welcome to CoCreation.World ${encodeURIComponent(r)}. To access the full experience, please log in or sign up.`,bgColor:"#1B1B29",textColor:"#FFFFFF",closable:!0,timeToClose:0,link:{label:"CLICK HERE",url:"https://world.cocreation.world/login"}})}}))}},{label:"👍 yes",className:"warning",callback:async e=>{const r=WA.player.name,o=WA.player.language,n=await WA.player.getWokaPicture();var a=`https://chat.cocreation.world/c3-o-mat?playername=${encodeURIComponent(r)}&avatar=${encodeURIComponent(n)}&language=${o}`;WA.ui.modal.openModal({title:"Welcome",src:a,allow:"fullscreen",allowApi:!0,position:"center"}),e.close(),WA.player.tags.includes("member")?(WA.controls.restorePlayerControls(),WA.controls.restoreMicrophone(),WA.controls.restoreWebcam(),WA.controls.restoreRightClick(),WA.controls.restoreInviteButton(),WA.controls.restoreMapEditor(),WA.controls.restoreRoomList(),WA.controls.restorePlayerProximityMeeting(),WA.controls.restoreScreenSharing()):(WA.controls.restorePlayerControls(),WA.controls.restorePlayerProximityMeeting(),WA.controls.restoreScreenSharing(),WA.controls.restoreMicrophone(),WA.controls.restoreWebcam(),WA.controls.restoreRightClick(),WA.onInit().then(async()=>{if(!WA.player.tags.includes("member")){const s=WA.player.name;WA.ui.banner.openBanner({id:"banner-exploration",text:`Welcome to CoCreation.World ${encodeURIComponent(s)}. To access the full experience, please log in or sign up.`,bgColor:"#1B1B29",textColor:"#FFFFFF",closable:!0,timeToClose:0,link:{label:"CLICK HERE",url:"https://world.cocreation.world/login"}})}}))}}])});WA.room.area.onEnter("showRoof").subscribe(()=>{WA.room.showLayer("FG Exterior/Roof"),WA.room.showLayer("FG Exterior/glasswall")});WA.room.area.onLeave("showRoof").subscribe(()=>{WA.room.hideLayer("FG Exterior/Roof"),WA.room.hideLayer("FG Exterior/glasswall")});WA.room.area.onEnter("topLeft").subscribe(()=>{WA.room.showLayer("FG Exterior/roofTransp")});WA.room.area.onLeave("topLeft").subscribe(()=>{WA.room.hideLayer("FG Exterior/roofTransp")});WA.onInit().then(()=>{WA.player.tags.includes("hutriadmin")&&WA.controls.disableMapEditor()});async function W(t){var e=WA.state[t];console.log(`Text for ${t} is configured as `+e);var r=`https://iw6tkif7th7yp5ax2ufzkl3kce0bcuys.lambda-url.us-east-1.on.aws/?text=${encodeURIComponent(e)}&imageType=caption&width=78&height=50&color=yellow`;console.log("New img-url of title is "+r);const o=await WA.room.website.get(t.replace("text","display"));o.url=r,o.visible=!0,console.log(`Title for ${t} has been changed to ${o.url}`)}WA.onInit().then(()=>{W("holo1-text"),W("holo2-text"),W("holo3-text"),W("holo4-text"),W("holo5-text"),W("holo6-text"),W("makerHolo-text")});["holo1-text","holo2-text","holo3-text","holo4-text","holo5-text","holo6-text","makerHolo-text"].forEach(t=>{WA.state.onVariableChange(t).subscribe(()=>{console.log(`${t} variable changed`),W(t)})});async function ne(){var t=WA.state.makerspaceBillboardText;console.log("Text for makerspacebillboardText is configured as "+t);var e=`https://iw6tkif7th7yp5ax2ufzkl3kce0bcuys.lambda-url.us-east-1.on.aws/?text=${encodeURIComponent(t)}&imageType=caption&width=122&height=60&color=black`;console.log("New img-url of title is "+e);const r=await WA.room.website.get("makerspaceBillboard");r.url=e,r.visible=!0,console.log(`Title for makerspacebillboardText has been changed to ${r.url}`)}WA.onInit().then(()=>{ne()});WA.state.onVariableChange("makerspacebillboardText").subscribe(()=>{console.log("makerspacebillboardText variable changed"),ne()});async function ae(){var t=WA.state.makerMeet;if(console.log(`makerMeet variable changed to ${t}`),t===""){const e=await WA.room.area.get("makerspaceJitsi");e&&(e.height=0,e.width=0,console.log("Area 'makerSpaceJitsi' resized to height: 1, width: 1"))}else if(t==="1"){const e=await WA.room.area.get("makerspaceJitsi");e&&(e.height=252,e.width=352,console.log("Area 'makerSpaceJitsi' resized to height: 252, width: 352"))}}WA.onInit().then(()=>{ae()});WA.state.onVariableChange("makerMeet").subscribe(()=>{ae()});WA.onInit().then(()=>{let t=!1;WA.ui.actionBar.addButton({id:"calendar",type:"action",imageSrc:"https://minio-production-fa1d.up.railway.app/typebot/public/workspaces/clwxv3blz001hp28kvtibhtth/typebots/clzqtjvdr0001dvthgytin9cu/blocks/b0qczozh0s0f8tcj821pufod?v=1727883058553",toolTip:"Calendar",callback:()=>{t?(WA.ui.modal.closeModal(),t=!1):(WA.ui.modal.openModal({title:"Calender",src:"https://forum.cocreation.world/c/cal/23",allow:"fullscreen",allowApi:!0,position:"right"}),t=!0)}})});WA.onInit().then(()=>{WA.ui.actionBar.addButton({id:"contact",type:"action",imageSrc:"https://minio-production-fa1d.up.railway.app/typebot/public/workspaces/clwxv3blz001hp28kvtibhtth/typebots/clzqtjvdr0001dvthgytin9cu/blocks/ju9avkxx9u3rfb45hsika0s4?v=1727964643138",toolTip:"Contact",callback:async()=>{(await WA.ui.getMenuCommand("contact")).open()}})});WA.onInit().then(async()=>{const t=Math.floor(Date.now()/1e3);console.log(`Current epoch time: ${t}`);const e=await WA.player.state.lastVisit;if(console.log(`Last visit time: ${e}`),!e)await WA.player.state.saveVariable("lastVisit",t.toString(),{persist:!0,public:!0,scope:"world"}),console.log(`Set lastVisit to current epoch time: ${t}`);else{const r=parseInt(e,10),o=t-r;console.log(`Time difference since last visit: ${o} seconds`),o>=86400&&(Ne("LOGIN",25),console.log("Granted 25 XP for login after 24 hours"),await WA.player.state.saveVariable("lastVisit",t.toString(),{persist:!0,public:!0,scope:"world"}),console.log(`Updated lastVisit to current epoch time: ${t}`))}});
//# sourceMappingURL=main-664a1776.js.map