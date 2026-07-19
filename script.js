// تغيير لون الزر عند المرور عليه
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.querySelector('.btn');
  if (btn) {
    btn.addEventListener('mouseover', function() {
      this.style.backgroundColor = '#2ecc71';
    });
    btn.addEventListener('mouseout', function() {
      this.style.backgroundColor = '#3498db';
    });
    btn.addEventListener('click', function() {
      alert('تم الضغط على الزر!');
    });
  }

  // ربط الصفحات
  var links = document.querySelectorAll('a');
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var href = this.getAttribute('href');
      if (href === 'index.html') {
        window.location.href = 'index.html';
      } else if (href === 'home.html') {
        window.location.href = 'home.html';
      } else if (href === 'contact.html') {
        window.location.href = 'contact.html';
      } else {
        alert('الصفحة غير موجودة');
      }
    });
  });
});