import{S as p,i as f}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c=document.querySelector("form"),g=document.getElementById("searchInput");document.getElementById("gallery");const l=document.getElementById("loader");c.addEventListener("submit",function(a){a.preventDefault(),l.classList.add("visible");const r="41459044-8203682bce4ef2c3a7a872845",n=g.value.trim();if(n!==""){const o=`https://pixabay.com/api/?key=${r}&q=${n}&image_type=photo&orientation=horizontal&safesearch=${!0}`;fetch(o).then(i=>i.json()).then(i=>{const d=i.hits,u=y(d),m=document.getElementById("gallery");m.innerHTML=u,new p(".image-card a")}).catch(i=>{console.error("Помилка при виконанні запиту:",i)}).finally(()=>{l.classList.remove("visible"),c.reset()})}else f.error({title:"Error",message:"Please enter a search query.",position:"topRight"})});function y(a){return a.map(({webformatURL:r,tags:n,likes:s,views:e,comments:t,downloads:o})=>`
<div class="image-card">
<a href="${r}" class="lightbox-trigger">
    <img src="${r}" alt="${n}">
</a>
    <div class="image-details">
    <p><strong>Likes:</strong> ${s}</p>
    <p><strong>Views:</strong> ${e}</p>
    <p><strong>Comments:</strong> ${t}</p>
    <p><strong>Downloads:</strong> ${o}</p>
</div>
    </div>
    `).join("")}
//# sourceMappingURL=commonHelpers.js.map
