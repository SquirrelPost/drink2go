var r={MAX:1068,MIN:0},u=1,s=()=>{let e=document.querySelector(".range__slider"),n=document.querySelector("#min-price"),t=document.querySelector("#max-price");if(!e||!n||!t)return;let c=[n,t];noUiSlider.create(e,{start:[0,900],connect:!0,range:{min:r.MIN,max:r.MAX},step:u}),e.noUiSlider.on("update",(o,i)=>{c[i].value=Number(o[i])}),n.addEventListener("change",function(){e.noUiSlider.set([this.value,null])}),t.addEventListener("change",function(){e.noUiSlider.set([null,this.value])})};export{s as initRangeSlider};
