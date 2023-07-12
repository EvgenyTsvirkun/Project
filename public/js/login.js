const { regForm } = document.forms;

regForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('hi!');
  console.log(regForm);
  const data = new FormData(regForm);
  console.log(data);
  const inputs = Object.fromEntries(data);
  console.log(inputs);

  const response = await fetch('/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputs),
  });
  document.querySelectorAll('input').forEach((el) => (el.value = ''));
});
