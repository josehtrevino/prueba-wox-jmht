const buttons = document.querySelectorAll('.job__reward--btn');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const target = button.parentNode.nextElementSibling;
    target.classList.toggle('hidden');
  });
});
