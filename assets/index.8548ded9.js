const l=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}};l();const u=document.getElementById("rCard"),a=document.getElementById("tCard"),c=document.querySelectorAll(".circle"),f=document.getElementById("rating"),m=document.getElementById("button");function i(t,o){t.classList.toggle(o)}function g(t){const o=Array.from(c);o.forEach(r=>{o.indexOf(t)!=o.indexOf(r)&&r.classList.remove("selected")})}function y(t){f.innerHTML=t.getAttribute("data-rate")}function p(){return Array.from(c).some(t=>t.classList.contains("selected"))}c.forEach(t=>{t.addEventListener("click",()=>{g(t),i(t,"selected"),y(t)})});m.addEventListener("click",()=>{p()&&(i(u,"hidden"),i(a,"hidden"))});