const btnLine = document.querySelector('#btn-line');

const btnX = document.querySelector('#btn-x');

const mobileMenu = document.querySelector('#mobile-menu');

btnLine.addEventListener('click', ()=>{
    btnLine.classList.toggle('hidden');
    btnX.classList.toggle('hidden');
    mobileMenu.classList.add('max-sm:left-[20px]')
})

btnX.addEventListener('click', ()=>{
    btnLine.classList.toggle('hidden');
    btnX.classList.toggle('hidden');
    mobileMenu.classList.remove('max-sm:left-[20px]')
})