(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function i(c){const r="https://pixabay.com",s="/api/",o=new URLSearchParams({key:"44168099-5911f69422da676ec159a331f",q:`${c}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${r}${s}?${o}`;return fetch(e).then(t=>t.json())}i("cats");
//# sourceMappingURL=commonHelpers.js.map
