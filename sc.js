let btn=document.querySelectorAll(".btn")
let body=document.querySelector('body')
console.log(btn);

btn.forEach(function(button){
    button.addEventListener('click',function(e){
        if (e.target.id==='wh'){
            body.style.background="white";
        }
        if (e.target.id==='or'){
            body.style.background="orange";
        }
        if (e.target.id==='bl'){
            body.style.background="blue";
        }
        if (e.target.id==='yl'){
            body.style.background="yellow";
        }
    })
})


