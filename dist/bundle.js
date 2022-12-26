(()=>{"use strict";const e=class{constructor(e){this.sender=e,this.elem=document.createElement("form"),this.elem.classList.add("form"),this.elem.noValidate=!0;const t=document.createElement("h1");t.classList.add("form__title"),t.innerHTML="Client form";const r=document.createElement("fieldset");r.classList.add("userInfo");const n=document.createElement("h2");n.classList.add("userInfo__title"),n.innerHTML="Contact information";const s=document.createElement("fieldset");s.classList.add("cardInfo");const i=document.createElement("h2");i.classList.add("cardInfo__title"),i.innerHTML="Payment information";const a=document.createElement("article");a.classList.add("error-wrapper");const c=document.createElement("label");c.setAttribute("for","name"),c.innerHTML="Name:";const o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("maxlength","1000"),o.id="name";const l=document.createElement("article");l.classList.add("error-wrapper");const u=document.createElement("label");u.setAttribute("for","surname"),u.innerHTML="Surname:";const d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("maxlength","1000"),d.id="surname";const m=document.createElement("article");m.classList.add("error-wrapper");const h=document.createElement("label");h.setAttribute("for","email"),h.innerHTML="Email:";const p=document.createElement("input");p.setAttribute("type","email"),p.setAttribute("maxlength","320"),p.id="email";const f=document.createElement("article");f.classList.add("error-wrapper");const b=document.createElement("label");b.setAttribute("for","dateOfBirth"),b.innerHTML="Birthday:";const w=document.createElement("input");w.setAttribute("type","date"),w.setAttribute("min",(new Date).getFullYear()-100+"-01-01"),w.id="dateOfBirth";const E=document.createElement("article");E.classList.add("error-wrapper");const y=document.createElement("label");y.setAttribute("for","cardNumber"),y.innerHTML="Card:";const g=document.createElement("input");g.setAttribute("type","text"),g.setAttribute("maxlength","23"),g.id="cardNumber";const v=document.createElement("article");v.classList.add("error-wrapper");const L=document.createElement("label");L.setAttribute("for","cardExpiration"),L.innerHTML="Expiration:";const A=document.createElement("input");A.setAttribute("type","month"),A.setAttribute("min",`${this.#e()}`),A.setAttribute("max",`${this.#t()}`),A.id="cardExpiration";const M=document.createElement("article");M.classList.add("error-wrapper");const N=document.createElement("label");N.setAttribute("for","cardCvc"),N.innerHTML="CVC:";const V=document.createElement("input");V.setAttribute("type","password"),V.setAttribute("inputmode","numeric"),V.setAttribute("maxlength","4"),V.id="cardCvc";const S=document.createElement("button");function x(e){(e.target.value.length+1)%5==0&&0!==e.target.value.length&&(e.target.value=e.target.value+" ")}S.innerHTML="Submit",S.classList.add("button-submit"),S.setAttribute("type","submit"),this.elem.addEventListener("submit",(e=>{e.preventDefault();const t=this.#r(),r=this.sender.sendRequest(t);this.#n(),0!==r.length?this.#s(r):this.#n()})),g.addEventListener("input",x),g.addEventListener("keydown",(e=>{"Backspace"===e.key&&g.removeEventListener("input",x)})),g.addEventListener("keyup",(e=>{"Backspace"===e.key&&g.addEventListener("input",x)})),this.elem.append(t),this.elem.append(r),r.append(n),r.append(a),a.append(c),a.append(o),r.append(l),l.append(u),l.append(d),r.append(m),m.append(h),m.append(p),r.append(f),f.append(b),f.append(w),this.elem.append(s),s.append(i),s.append(E),E.append(y),E.append(g),s.append(v),v.append(L),v.append(A),s.append(M),M.append(N),M.append(V),this.elem.append(S)}mount(e){if(!(e instanceof HTMLElement))throw new Error("The type of parent is`t correct");e.append(this.elem)}unmount(){this.elem.remove()}#r(){return{name:this.elem.querySelector("#name").value,surname:this.elem.querySelector("#surname").value,email:this.elem.querySelector("#email").value,dateOfBirth:this.elem.querySelector("#dateOfBirth").value,cardNumber:this.elem.querySelector("#cardNumber").value,cardExpiration:this.elem.querySelector("#cardExpiration").value,cardCvc:this.elem.querySelector("#cardCvc").value}}#s(e){e.forEach((e=>{const t=this.elem.querySelector(`#${e.field}`);if(void 0===t)throw new Error("Input is not founded");t.parentNode.setAttribute("data-error",e.message),t.classList.add("invalid")}))}#n(){this.elem.querySelectorAll(".error-wrapper").forEach((e=>{null!==e.getAttribute("data-error")&&(e.setAttribute("data-error"," "),e.children[1].classList.remove("invalid"))}))}#e(){const e=(new Date).getFullYear();let t=(new Date).getMonth()+1;return t<10&&(t=0+String(t)),e+"-"+t}#t(){const e=(new Date).getFullYear()+5;let t=(new Date).getMonth()+1;return t<10&&(t=0+String(t)),e+"-"+t}},t=class extends e{constructor(e,t){super(t),this.entity=e,this.elem.classList.add("edit-view");for(let e in this.entity)this.elem.querySelector(`#${e}`).value=this.entity[e]}},r=class extends e{constructor(e,t){super(),this.entity=e,this.elem.classList.add("review-view"),this.elem.querySelectorAll("fieldset").forEach((e=>e.disabled=!0)),this.elem.querySelector(".button-submit").remove();for(let e in this.entity)this.elem.querySelector(`#${e}`).value=this.entity[e];const r=document.createElement("button");r.setAttribute("type","button"),r.innerHTML="Edit form",r.addEventListener("click",t),this.elem.append(r)}},n=class extends e{constructor(e){super(e),this.elem.classList.add("new-view")}};function s(e,t){return void 0!==t.split("").find((e=>!isNaN(Number(e))))?{field:e,message:"This field should not include numbers"}:{}}function i(e,t,r){return t.length<r?{field:e,message:`Length should not be less than ${r} symbols`}:{}}function a(e,t){return""===t?{field:e,message:"This field is required"}:{}}const c=document.getElementById("root");new class{constructor(e,c){this.entity=JSON.parse(JSON.stringify(e)),this.isEdit=c,this.elem=document.createElement("div"),this.elem.classList.add("form"),this.viewManager=new class{constructor(e,t,r){this.entity=e,this.isEdit=t,this.parent=r,this.requestManager=new class{constructor(e){this.changeView=e}sendRequest(e){const t=new class{constructor(e){this.entity=e}#i(e,t){switch(e){case"name":const n=[];return r(s(e,t),n),r(i(e,t,4),n),r(a(e,t),n),n;case"surname":const c=[];return r(s(e,t),c),r(i(e,t,5),c),r(a(e,t),c),c;case"email":const o=[];return r(function(e,t){return/[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}/.test(t)?{}:{field:e,message:"Email is incorrect"}}(e,t),o),r(a(e,t),o),o;case"dateOfBirth":const l=[];return r(function(e,t){const r=Number(t.slice(0,4)),n=(new Date).getFullYear()-100;return r<n?{field:e,message:`Value of year must be ${n} or later`}:{}}(e,t),l),r(a(e,t),l),l;case"cardNumber":const u=[];return r(function(e,t){const r=JSON.parse(JSON.stringify(t)),n=Array.from(r);let s={};return n.forEach((r=>{if(isNaN(Number(r))&&" "!==t)return s={field:e,message:"Value must include only numbers"},s})),s}(e,t),u),u;case"cardExpiration":const d=[];return r(function(e,t){const r=Number(t.slice(0,4)),n=(new Date).getFullYear(),s=t.slice(5);let i=0;const a=(new Date).getMonth()+1;return i="0"===s[0]?Number(s[1]):Number(s),r<n?{field:e,message:"Value of year is incorrect"}:r===n&&i<a?{field:e,message:"Value of month is incorrect"}:{}}(e,t),d),r(function(e,t){const r=Number(t.slice(0,4)),n=(new Date).getFullYear()+5,s=t.slice(5);let i=0;const a=(new Date).getMonth()+1;return i="0"===s[0]?Number(s[1]):Number(s),r>n?{field:e,message:"Value of year is incorrect"}:i>a?{field:e,message:"Value of month is incorrect"}:{}}(e,t),d),d;case"cardCvc":const m=[];return r(function(e,t){const r=JSON.parse(JSON.stringify(t)),n=Array.from(r);let s={};return n.forEach((t=>{if(isNaN(Number(t))||" "===t)return s={field:e,message:"Value must include only numbers"},s})),s}(e,t),m),m;default:throw new Error("Field name is undefined")}function r(e,t){0!==Object.keys(e).length&&t.push(e)}}validate(){let e=[];for(let t in this.entity){const r=this.#i(t,this.entity[t]);0!==r.length&&(e=e.concat(r))}return e}}(e).validate();if(0===t.length){const t=function(e){return JSON.stringify(e)}(e);(async function(e){let t=await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:e,headers:{"Content-Type":"application/json;charset=utf-8"}});t.ok?alert("Data is submitted successfully"):alert(`Submitting data is failed. Error: ${t.status}`)})(t).then((()=>{this.changeView("review",e)}))}return t}}(this.updateViewMode.bind(this)),this.currentView=null,this.mode=this.#a()}#a(){return 0===Object.keys(this.entity).length?"new":this.isEdit?"edit":"review"}updateViewMode(e,t=this.entity){this.mode=e,null!==this.currentView&&this.currentView.unmount(),this.#c(t),this.currentView.mount(this.parent)}#c(e){switch(this.mode){case"new":this.currentView=new n(this.requestManager);break;case"review":this.currentView=new r(e,this.updateViewMode.bind(this,"edit",e));break;case"edit":this.currentView=new t(e,this.requestManager);break;default:this.currentView=null}}initView(){if(this.#c(this.entity),null===this.currentView)throw new Error("View is undefined");this.currentView.mount(this.parent)}}(this.entity,this.isEdit,this.elem)}mount(e){if(!(e instanceof HTMLElement))throw new Error("Form: type of parent is`t correct");this.viewManager.initView(),e.append(this.elem)}unmount(){this.elem.remove()}}({name:"Name",surname:"Surname",email:"emailsdsk@gmail.com",dateOfBirth:"1994-02-13",cardNumber:"7777 7777 7777 7777",cardExpiration:"2023-02",cardCvc:"123"},!1).mount(c)})();