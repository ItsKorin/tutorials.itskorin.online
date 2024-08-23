document.addEventListener('DOMContentLoaded', function () {
  var collapsibles = document.querySelectorAll('.collapsible');
  
  collapsibles.forEach(function (collapsible) {
    collapsible.addEventListener('click', function () {
      this.classList.toggle('active');
      var content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
});
