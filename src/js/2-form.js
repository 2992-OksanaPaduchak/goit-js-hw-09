const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formData = {
    email: "",
    message: "",
};

form.addEventListener('input', (evt) => {
  c
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

function loadFromLS(key) {
  const body = localStorage.getItem(key);
  try {
    const data = JSON.parse(body);
    return data;
  } catch {
    return body;
  }
}
function initPage() {
  const formData = loadFromLS(STORAGE_KEY);
  form.elements.email.value = formData?.email || '';
  form.elements.message.value = formData?.message  || '';
}

initPage();

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  formData[evt.target.name] = evt.target.value;
  
  const email =  form.elements.email.value;
  const message =  form.elements.message.value;

 if (!email || !message) {
    return alert('Fill please all fields');
  }
  console.log(`Email: ${email}, Message: ${message}`);
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
