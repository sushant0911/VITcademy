const accordians=document.querySelectorAll('.accordian');

accordians.forEach(accordian=>{
    const icon=accordian.querySelector('.icon');
    const moduleInside=accordian.querySelector('.module-inside');
    accordian.addEventListener('click',()=>{
        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            moduleInside.style.maxHeight=null;
        }else{
            icon.classList.add('active');
            moduleInside.style.maxHeight=moduleInside.scrollHeight+'px';
        }
    })
})