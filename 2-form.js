import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const n="feedback-form-state",a=document.querySelector(".feedback-form");let e={email:"",message:""};a.addEventListener("input",t=>{typeof t.target.value=="string"&&(e[t.target.name]=t.target.value.trim(),localStorage.setItem(n,JSON.stringify(e)))});function r(t){const s=localStorage.getItem(t);try{return JSON.parse(s)}catch{return s}}function m(){const t=r(n);e={...e,...t},a.elements.email.value=(e==null?void 0:e.email)||"",a.elements.message.value=(e==null?void 0:e.message)||""}m();a.addEventListener("submit",t=>{t.preventDefault();const s=a.elements.email.value,l=a.elements.message.value;if(!s||!l)return alert("Fill please all fields");console.log(`Email: ${s}, Message: ${l}`),localStorage.removeItem(n),e={email:"",message:""},a.reset()});
//# sourceMappingURL=2-form.js.map
