!function(e){var t={};function a(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="assets/js/",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);class n{constructor(e){this.calendar=document.querySelector(".calendar"),this.calendarTable=this.calendar.querySelector(".calendar__table"),this.calendarTableBox=this.calendar.querySelector(".calendar__table-box"),this.app=e,this.initRender(this.app)}initRender(){function e(e,t,a){e.classList.remove(t+"--day",t+"--week",t+"--month"),e.classList.add(`${t}--${a}`)}e(this.calendar,"calendar",this.app.mode),e(this.calendarTable,"calendar__table",this.app.mode)}calendarRender(e){let t="";if(this.calendarTableBox.innerHTML="",this.calendarTable.innerHTML="","day"===this.app.mode){t+='<table class="calendar__table calendar__table--day">';for(let e=1;e<25;e++){t+=`\n        <tr class="calendar__row">\n          <th>${e<=12?e+"am":e-12+"pm"}</th>\n          <td></td>\n        </tr>\n        `}t+="</table>\x3c!-- CALENDAR TABLE --\x3e"}else if("week"===this.app.mode){let a=e.weekHandler(e.chosenDate,e.todayDate),n=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];t+='<table class="calendar__labels"><tr class="calendar__row"><th>&nbsp;</th>';for(let e=0;e<7;e++)t+=`\n          <td class="calendar__label"><span class="calendar__day--name">${n[e]}</span><span class="calendar__day ${e===a[7]-1?"calendar__day--active":""}">${a[e]}</span></td>\n        `;t+='</tr></table>\x3c!-- CALENDAR LABELS --\x3e<table class="calendar__table calendar__table--week">';for(let e=1;e<25;e++){t+=`\n        <tr class="calendar__row">\n          <th>${e<=12?e+"am":e-12+"pm"}</th>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        `}t+="</table>\n\x3c!-- CALENDAR TABLE --\x3e"}else this.app.mode;this.calendarTableBox.innerHTML=t}}class s extends n{constructor(e){super(e)}render(e){this.calendarRender(e)}}class d extends n{constructor(e){super(e)}render(e){this.calendarRender(e)}}class r extends n{constructor(e){super(e)}render(e){this.calendarRender(e)}}class i{constructor(){this.todayDate=new Date,this.chosenDate=new Date(this.todayDate)}getDateString(e){return this.chosenDate.toLocaleDateString(void 0,e)}weekHandler(e,t){let a=[];const n=new Date(e.getFullYear(),e.getMonth()+1,0).getDate();for(let t=e.getDate();t<=n&&a.length<7;t++)a.push(t);for(let e=1;a.length<7;e++)a.push(e);return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&t.getDate()-e.getDate()<7&&t.getDate()-e.getDate()>=0?a.push(t.getDay()):a.push(-1),a}monthHandler(e,t){const a=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),n=new Date(t.getFullYear(),t.getMonth(),0).getDate(),s=new Date(t.getFullYear(),t.getMonth(),0).getDay();let d=7-new Date(t.getFullYear(),t.getMonth()+1,0).getDay();7===d&&(d=0);return{lastD:a,prevLastD:n,firstDIndex:s,nextD:d,w:Math.ceil((s+1+t.getDate())/7)}}}class l{constructor(e){this.date=new i,this.app=e}changeDate(e,t,a,n){let s=e;"month"===this.app.mode||n?-1===s?this.date.chosenDate.setMonth(this.date.chosenDate.getMonth()-1):1===s&&this.date.chosenDate.setMonth(this.date.chosenDate.getMonth()+1):"day"===this.app.mode?(s*=864e5,this.date.chosenDate=new Date(this.date.chosenDate.getTime()+s)):"week"===this.app.mode&&(s*=6048e5,this.date.chosenDate=new Date(this.date.chosenDate.getTime()+s)),a.innerHTML=this.date.getDateString("day"!==this.app.mode||n?{year:"numeric",month:"long"}:{year:"numeric",month:"long",day:"numeric"})}}class c extends l{constructor(e){super(e),this.init()}init(){const e=document.querySelector("button.calendar__switch--left"),t=e.nextElementSibling,a=document.querySelector(".calendar__header");e.addEventListener("click",()=>{this.changeDate(-1,!0,a),this.render()}),t.addEventListener("click",()=>{this.changeDate(1,!0,a),this.render()}),this.changeDate(0,!1,a)}render(){let e;if("day"===this.app.mode)e=new s(this.app);else if("week"===this.app.mode)e=new d(this.app);else{if("month"!==this.app.mode)return void console.log("Wrong calendar mode!");e=new r(this.app)}this.changeDate(0,!0,document.querySelector(".calendar__header")),e.render(this.date)}}class o extends l{constructor(e){super(e),this.init()}init(){const e=document.querySelector("button.side-calendar__switch--left"),t=e.nextElementSibling,a=document.querySelector(".side-calendar__month");e.addEventListener("click",()=>{this.changeDate(-1,!0,a,!0),this.render()}),t.addEventListener("click",()=>{this.changeDate(1,!0,a,!0),this.render()}),this.changeDate(0,!0,a,!0),this.render()}render(){const e=document.querySelector(".side-calendar__table"),t=document.querySelector(".side-calendar__week"),a=this.date.chosenDate,n=this.date.todayDate,s=this.date.monthHandler(n,a),d=s.lastD,r=s.prevLastD,i=s.firstDIndex,l=s.nextD,c=s.w;let o='<div class="side-calendar__day--name">Mon</div>\n<div class="side-calendar__day--name">Tue</div>\n<div class="side-calendar__day--name">Wed</div>\n<div class="side-calendar__day--name">Thu</div>\n<div class="side-calendar__day--name">Fri</div>\n<div class="side-calendar__day--name">Sat</div>\n<div class="side-calendar__day--name">Sun</div>';for(let e=i;e>0;e--)o+=`<div class="side-calendar__day--additional">${r-e+1}</div>`;for(let e=1;e<=d;e++)e===(new Date).getDate()&&a.getMonth()===(new Date).getMonth()?o+=`<div class="side-calendar__day--active">${e}</div>`:o+=`<div>${e}</div>`;for(let e=1;e<=l;e++)o+=`<div class="side-calendar__day--additional">${e}</div>`;e.innerHTML=o,"week"!==this.app.mode&&"month"!==this.app.mode||a.getMonth()!==n.getMonth()||a.getFullYear()!==n.getFullYear()?t.style.display="none":(t.style.display="block",t.style.top=3.5*c+"rem")}}(class{static init(){this.app={mode:"day"};const e=new c(this.app);e.render(e.app.mode,e.date);const t=new o(this.app);this.render(e,t)}static render(e,t){const a=document.querySelector(".side-calendar__button"),n=a.nextElementSibling,s=n.nextElementSibling;a.addEventListener("click",()=>{a.classList.remove("side-calendar__button--right"),a.classList.add("side-calendar__button--active"),n.classList.remove("side-calendar__button--active"),s.classList.remove("side-calendar__button--active"),s.classList.add("side-calendar__button--left"),this.app.mode="day",e.render(this.app.mode),t.render()}),n.addEventListener("click",()=>{a.classList.remove("side-calendar__button--right","side-calendar__button--active"),n.classList.add("side-calendar__button--active"),s.classList.remove("side-calendar__button--active","side-calendar__button--left"),this.app.mode="week",e.date.chosenDate=new Date(e.date.chosenDate.getFullYear(),e.date.chosenDate.getMonth(),e.date.chosenDate.getDate()-e.date.chosenDate.getDay()+1),e.render(this.app.mode),t.render()}),s.addEventListener("click",()=>{a.classList.remove("side-calendar__button--active"),a.classList.add("side-calendar__button--right"),n.classList.remove("side-calendar__button--active"),s.classList.remove("side-calendar__button--left"),s.classList.add("side-calendar__button--active"),this.app.mode="month",e.render(this.app.mode),t.render()})}}).init()}]);
//# sourceMappingURL=app.js.map