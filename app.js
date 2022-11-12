//Cursor

let cursor = document.querySelector('.cursor')

document.addEventListener('mousemove',(e) =>{
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})


//Navbar

const sections = document.querySelectorAll('section1')
const navLi = document.querySelectorAll('nav ul li')

window.addEventListener('scroll',()=> {
    let current = '';

    sections.forEach(section =>{
        const sectop = section.offsetTop;
        const sechgt = section.clientHeight;

        if(pageYOffset >= (sectop - sechgt / 3)){
            current = section.getAttribute('id');
        }
    })
    navLi.forEach(li =>{
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    })
})