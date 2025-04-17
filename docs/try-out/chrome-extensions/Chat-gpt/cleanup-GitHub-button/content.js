window.addEventListener('load', function() {
  var button = document.createElement('button');
  button.textContent = 'Toggle #repository-container-header';
  button.style.position = 'fixed';
  button.style.zIndex = 9999;
  button.style.top = '10px';
  button.style.right = '10px';
  document.body.appendChild(button);

  button.addEventListener('click', function() {
    var element = document.querySelector('#repository-container-header');
    if (element) {
      if (element.style.display === 'none') {
        element.style.display = '';
      } else {
        element.style.display = 'none';
      }
    }
  });
});
