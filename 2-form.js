import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const m="feedback-form-state",t=document.querySelector(".feedback-form");let e={email:"",message:""};t.addEventListener("input",a=>{e[a.target.name]=a.target.value.trim(),localStorage.setItem(m,JSON.stringify(e))});function n(a){const l=localStorage.getItem(a);try{return JSON.parse(l)}catch{return l}}function r(){n(m),e={...e,...data},t.elements.email.value=(e==null?void 0:e.email)||"",t.elements.message.value=(e==null?void 0:e.message)||""}r();t.addEventListener("submit",a=>{a.preventDefault();const l=t.elements.email.value,s=t.elements.message.value;if(!l||!s)return alert("Fill please all fields");console.log(`Email: ${l}, Message: ${s}`),localStorage.removeItem(m),e={email:"",message:""},t.reset()});
//# sourceMappingURL=2-form.js.map
