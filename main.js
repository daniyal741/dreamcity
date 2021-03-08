

const btnCart = document.getElementById('addToCart');
if(btnCart){
    btnCart.addEventListener('click',function(){


        window.location.replace('selectedProduct.html');
    
    
    
    });

}


// Active Class by Clicking the Cart

var cartBtn1 = document.getElementById('cart1');
var cartDisplay = document.getElementsByClassName('emptycart');
var cartBtn2 = document.getElementById('cart2');

if(cartBtn1){

    cartBtn1.addEventListener('click',function(){

   
        if(cartDisplay[0].style.visibility == 'visible')
        {
            cartDisplay[0].style.visibility = 'hidden';
            
    
        }
        else{
    
            cartDisplay[0].style.visibility = 'visible';
            
    
        }
    
    
    
    });

}

if(cartBtn1){
    cartBtn2.addEventListener('click',function(){

    
        if(cartDisplay[0].style.visibility == 'visible')
        {
            cartDisplay[0].style.transition = "transform 0.3s ease-in-out";
            cartDisplay[0].style.visibility = 'hidden';

        }
        else{

            cartDisplay[0].style.visibility = 'visible';
            

        }



    });
}

// Back To Top//
var btn = document.getElementById('backtotop');

btn.addEventListener('click',function(){

    var currentScroll = window.pageYOffset;
    if(currentScroll>0){

        btn.style.visibility = 'hidden';
        window.scrollTo(0,0);
 
    }


});

window.onscroll = function() {
    currentScroll = window.pageYOffset;
    if ((window.innerHeight + window.pageYOffset) >=1000) {

        btn.style.visibility = 'visible';
    }
    else{

        btn.style.visibility = 'hidden';

    }

   
   
};



//Footer Links

const btnlinks = document.querySelector('#imp-links');
const links = document.querySelector('.links');

btnlinks.addEventListener('click',function(){

    if(links.style.display == 'block')
    {
        links.style.display = 'none';

    }
    else{

        links.style.display = 'block';

    }

});

const btncont = document.querySelector('#contact');
const cont = document.querySelectorAll('.contact1');
const social = document.querySelector('.social-icons');

btncont.addEventListener('click',function(){

    if(cont[0].style.display == 'block')
    {
        cont[0].style.display = 'none';
        cont[1].style.display = 'none';
        social.style.display = 'none';

    }
    else{

        cont[0].style.display = 'block';
        cont[1].style.display = 'block';
        social.style.display = 'block';

    }

});
const burger = document.querySelector('#hamburger');
const menu =  document.querySelector('.menu');
burger.addEventListener('click',function(){

    if(menu.style.display == 'flex')
    {
        menu.style.display = 'none';
        burger.classList.remove('open');

    }
    else{

        menu.style.display = 'flex';
        burger.classList.add('open');

    }

});





//Carousal//
/*
const btn_Left = document.getElementById('btnLeft');
const btn_Right = document.getElementById('btnRight');
var gallery = document.querySelector('.gallery');
var slides = document.querySelectorAll('.customer');

let slideWidth = slides[0].clientWidth;
const N = slides.length;
var counter = 0;
var index=1;

btn_Left.addEventListener('click',function(){

    btn_Right.style.visibility = 'visible'; 
    counter=(counter+1)%(N-2);

    gallery.style.transition = "transform 1s ease-in-out";
    gallery.style.transform = 'translateX(' + (slideWidth * index) + 'px)';
    index--;


    if (counter <= 1) {

        index = N; // to reset counter so next and prev button should work 
        btn_Left.style.visibility = 'hidden'; 


    }


    console.log(counter);


});

btn_Right.addEventListener('click',function(){

    btn_Left.style.visibility = 'visible'; 
    counter=(counter+1)%(N-2);

    gallery.style.transition = "transform 1s ease-in-out";
    gallery.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
    index++;


    if (counter == 0) {

        index = 0; // to reset counter so next and prev button should work 


    }


    console.log(counter);

  


});

*/




