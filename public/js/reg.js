const { regForm } = document.forms;
regForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('hi!');
  const data = new FormData(regForm);
  const inputs = Object.fromEntries(data);
  console.log(inputs);

  const response = await fetch('/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputs),
  });
  const result = await response.json()
  if (result.msg === 'OK') {
    window.location.href = '/'
  }
  document.querySelectorAll('input').forEach((el) => (el.value = ''));
});
