import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const r="feedback-form-state",a=document.querySelector(".feedback-form");let e={email:"",message:""};a.addEventListener("input",t=>{typeof t.target.value=="string"&&(e[t.target.name]=t.target.value.trim(),localStorage.setItem(r,JSON.stringify(e)))});function n(t){const s=localStorage.getItem(t);try{return JSON.parse(s)}catch{return s}}function m(){const t=n(r);e={...e,...t},a.elements.email.value=(e==null?void 0:e.email)||"",a.elements.message.value=(e==null?void 0:e.message)||""}m();a.addEventListener("submit",t=>{t.preventDefault();const s=a.elements.email.value.trim(),l=a.elements.message.value.trim();if(!s||!l)return alert("Fill please all fields");console.log(e),localStorage.removeItem(r),e={email:"",message:""},a.reset()});
//# sourceMappingURL=2-form.js.map
