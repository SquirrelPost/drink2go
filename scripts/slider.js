var s=["slider--flat-white","slider--lavender-latte","slider--espresso"];var n=document.querySelector(".slider"),l=n.querySelector(".slide-switch__button--prev"),o=n.querySelector(".slide-switch__button--next"),d=n.querySelectorAll(".slide-pagination__button"),x=n.querySelectorAll(".slider__item"),a=n.classList,i,r,e,c,_,S,m=t=>{t===0?l.disabled=!0:l.disabled=!1,t===2?o.disabled=!0:o.disabled=!1},f=(t,u)=>(r=t.target.classList[1],r.includes("next")&&(e=u+1),r.includes("prev")&&(e=u-1),e),b=()=>{m(e),n.classList.replace(s[i],s[e])},B=()=>{c=n.querySelector(".slide-pagination__button--current"),c.classList.remove("slide-pagination__button--current"),c.setAttribute("href","#"),d[e].classList.add("slide-pagination__button--current"),d[e].removeAttribute("href")},I=()=>{_=n.querySelector(".slider__item--current"),_.classList.remove("slider__item--current"),x[e].classList.add("slider__item--current")},h=()=>{b(e),B(e),I(e)},g=t=>{i=s.indexOf(a[1]),f(t,i),h(e)},L=()=>{l.addEventListener("click",g),o.addEventListener("click",g)},p=t=>{S=t.target.id,e=Number(S),i=s.indexOf(a[1]),h(e)},v=()=>{d.forEach(t=>t.addEventListener("click",p))},w=()=>{i=s.indexOf(a[1]),m(i),L(),v()};export{w as initSlider};