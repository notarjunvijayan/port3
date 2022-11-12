//Cursor

let cursor = document.querySelector('.cursor')

document.addEventListener('mousemove',(e) =>{
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})




let intro = document.querySelector('.intro')
let logo = document.querySelector('.Welcome')
let logospan = document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded',()=>{

    setTimeout(()=>{
        
        logospan.forEach((span, idx)=>{
             setTimeout(()=>{
                span.classList.add('active');
             }, (idx +1) *400)
        })
    })
    setTimeout(()=>{
        
        logospan.forEach((span, idx)=>{
             setTimeout(()=>{
                span.classList.remove('active');
                span.classList.add('fade');
             }, (idx +1) *50)
        })
    },4000)

    setTimeout(()=>{
        intro.style.top = '-100vh';
    }, 4900)
})