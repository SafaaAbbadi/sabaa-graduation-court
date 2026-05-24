function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function (screen) {
    screen.classList.remove('active');
  });

  var target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-go]').forEach(function (button) {
    button.addEventListener('click', function () {
      showScreen(button.getAttribute('data-go'));
    });
  });

  var printButton = document.querySelector('[data-print-document]');
  if (printButton) {
    printButton.addEventListener('click', function () {
      showScreen('s8');
      setTimeout(function () {
        window.print();
      }, 150);
    });
  }
});
