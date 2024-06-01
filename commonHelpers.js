import{s as a}from"./assets/vendor-8640402f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function u(t){const o="https://pixabay.com",s="/api/",n=new URLSearchParams({key:"44168099-5911f69422da676ec159a331f",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${o}${s}?${n}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>r.hits)}const f=document.querySelector(".gallery");document.querySelector(".loader");let i;function d(t){f.innerHTML=t.map(o=>p(o)).join(""),i?i.refresh():i=new a(".gallery a",{})}function p(t){return`
    <div class="gallery-item">
                <a href="${t.largeImageURL}" class="gallery-link">
                    <img src="${t.webformatURL}" alt="${t.tags}" />
                </a>
                <ul>
                <li><p>Likes: ${t.likes}</p></li>
                <li><p>Views: ${t.views}</p></li>
                <li><p>Comments: ${t.comments}</p></li>
                <li><p>Downloads: ${t.downloads}</p></li>
                </ul>
            </div>
            `}const m=document.querySelector(".search-form"),c=document.querySelector("input");m.addEventListener("submit",t=>{t.preventDefault();const o=c.value.trim();if(!o){showError();return}u(o).then(s=>{c.value===""?(clearGallery(),showError()):d(s)}).catch(s=>{showError(message,s)}).finally(()=>{hideLoader()})});
//# sourceMappingURL=commonHelpers.js.map
