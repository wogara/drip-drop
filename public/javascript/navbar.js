var home = document.getElementById("home");
var rotated = 0;
var droppy = document.getElementById("droppy");
var clickCount = 0;

document.addEventListener("click",function(event){
   if(clickCount == 0 && event.target.className.split(' ')[1] == "rotated"){
         clickCount = 1;
    }else{  
        home.style.transform="rotate(0deg)";
        home.classList.add('notRotated');
        home.classList.remove('rotated');
    }
});

home.addEventListener("click",function(){
    if (home.classList.contains('notRotated')){
        
        home.style.transform="rotate(90deg)";
        home.classList.remove('notRotated');
        home.classList.add('rotated');
    }else{

        home.style.transform="rotate(0deg)";
        home.classList.remove('rotated');
        home.classList.add('notRotated');

    }
});

