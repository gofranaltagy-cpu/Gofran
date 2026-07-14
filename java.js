document.addEventListener('DOMContentLoaded', function() {
  let loginForm = document.querySelector('form#login');
  if(loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let username = document.querySelector('input[name="username"]').value.trim();
      let password = document.querySelector('input[name="password"]').value.trim();
      if(username === '' || password === '') {
        alert('من فضلك املأ جميع الحقول');
      } else {
        alert('تم تسجيل الدخول إلى حساب سامسونج');
        // window.location.href = 'index.html';
      }
    });
  }
});