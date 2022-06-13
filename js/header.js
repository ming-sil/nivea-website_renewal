(function(){

    const header = document.querySelector('header');
    const underLine1 = document.querySelector('.under_line_1');
    const underLine2 = document.querySelector('.under_line_2');
    const logo = document.querySelector('.header_logo');


    const handleScrollHeader = () => {
        const sct = window.pageYOffset;

        if(sct > 100){
            header.classList.add('active_header');
            underLine1.classList.add('active_underline');
            underLine2.classList.add('active_underline');
            logo.classList.add('active_logo');
        }else{
            header.classList.remove('active_header');
            underLine1.classList.remove('active_underline');
            underLine2.classList.remove('active_underline');
            logo.classList.remove('active_logo');
        }
    }

    window.addEventListener('scroll', handleScrollHeader);

})();//end