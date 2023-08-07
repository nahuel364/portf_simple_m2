window.onscroll= function() {
    if(document.documentElement.scrollTop > 300){
        document.querySelector('.bton_container')
        .classList.add('show');
    }else{
        document.querySelector('.bton_container')
        .classList.remove('show');
    }
}