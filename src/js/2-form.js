const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formData = {
    email: "",
    message: "",
};

form.addEventListener('input', (evt) => {
  if (typeof evt.target.value === 'string') {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

function loadFromLS(key) {
  const body = localStorage.getItem(key);
  try {
    const data = JSON.parse(body);
    return data;
  } catch (e) {
    return body;
  }
}
function initPage() {
  const str = loadFromLS(STORAGE_KEY);
  formData = { ...formData, ...str };
  form.elements.email.value = formData?.email || '';
  form.elements.message.value = formData?.message || '';
 }

initPage();

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
    
  const email =  form.elements.email.value.trim();
  const message =  form.elements.message.value.trim();


 if (!email || !message) {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
