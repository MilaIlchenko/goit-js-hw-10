import"./assets/styles-14522bf3.js";import{f as y,i as p}from"./assets/vendor-77e16229.js";const r=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),C=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]"),i=document.querySelector("#datetime-picker");r.addEventListener("click",()=>{r.disabled=!0,i.disabled=!0,b()});r.disabled=!0;let n,s;const T={defaultDate:null,enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=new Date(e[0]).getTime(),o=Date.now();t>=o?(r.disabled=!1,n=t-o,d(u(n))):p.error({fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:2e3,backgroundColor:"red",message:"Please choose a date in the future"})}};y("#datetime-picker",T);function d({days:e,hours:t,minutes:o,seconds:c}){S.textContent=`${e}`,g.textContent=`${t}`,C.textContent=`${o}`,D.textContent=`${c}`}function b(){clearInterval(s),s=setInterval(k,1e3)}function k(){n>1e3?(n-=1e3,d(u(n))):(clearInterval(s),i.disabled=!1)}function a(e){return String(e).padStart(2,"0")}function u(e){const l=a(Math.floor(e/864e5)),m=a(Math.floor(e%864e5/36e5)),f=a(Math.floor(e%864e5%36e5/6e4)),h=a(Math.floor(e%864e5%36e5%6e4/1e3));return{days:l,hours:m,minutes:f,seconds:h}}
//# sourceMappingURL=commonHelpers.js.map
