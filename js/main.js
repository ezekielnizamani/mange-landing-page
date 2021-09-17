    function getElement(element) {
    return document.querySelector(element)
    }

    
    const navigation = getElement('.navbar-nav')
    const hamburger =  getElement('.hamburger');
    const hamburgerIcon =  getElement('.hamburger > img');
    
    function openNavbar(){

        navigation.classList.add('open');
        hamburgerIcon.src='../images/icon-close.svg';
    
    }    
  
    function closeNavbar(){

        navigation.classList.remove('open');
    hamburgerIcon.src='../images/icon-hamburger.svg'
   
} 
  

    


    
hamburger.addEventListener('click', () =>{
    if(navigation.classList.contains('open')){
        closeNavbar();
        return;
    }else{
        openNavbar();
        return;
    }
})

    