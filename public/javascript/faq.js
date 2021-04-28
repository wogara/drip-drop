var q1 = document.getElementById("q1");
var a1 = document.getElementById("a1");
var m1 = document.getElementById("m1");
var p1 = document.getElementById("p1");
var m2 = document.getElementById("m2");
var p2 = document.getElementById("p2");
var m3 = document.getElementById("m3");
var p3 = document.getElementById("p3");
var m4 = document.getElementById("m4");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var m5 = document.getElementById("m5");
var p6 = document.getElementById("p6");
var m6 = document.getElementById("m6");
var p7 = document.getElementById("p7");
var m7 = document.getElementById("m7");

q1.addEventListener("click",function(){
    if (a1.style.display=="none"){
        a1.style.display="block";
        m1.style.display="block";
        p1.style.display="none";
    }else{
        a1.style.display="none";
        m1.style.display="none";
        p1.style.display="block";
    }
});
var q2 = document.getElementById("q2");
var a2 = document.getElementById("a2");
q2.addEventListener("click",function(){
    if (a2.style.display=="none"){
        a2.style.display="block";
        m2.style.display="block";
        p2.style.display="none";

    
    }else{
        a2.style.display="none";
        p2.style.display="block";
        m2.style.display="none";


        
    }
});
var q3 = document.getElementById("q3");
var a3 = document.getElementById("a3");
q3.addEventListener("click",function(){
    if (a3.style.display=="none"){
        a3.style.display="block";
        m3.style.display="block";
        p3.style.display="none";

    }else{
        a3.style.display="none";
        p3.style.display="block";
        m3.style.display="none";


    }
});
var q4 = document.getElementById("q4");
var a4 = document.getElementById("a4");
q4.addEventListener("click",function(){
    if (a4.style.display=="none"){
        a4.style.display="block";
        m4.style.display="block";
        p4.style.display="none";


    }else{
        a4.style.display="none";
        p4.style.display="block";
        m4.style.display="none";


    }
});
var q5 = document.getElementById("q5");
var a5 = document.getElementById("a5");
q5.addEventListener("click",function(){
    if (a5.style.display=="none"){
        a5.style.display="block";
        m5.style.display="block";
        p5.style.display="none";


    }else{
        a5.style.display="none";
        p5.style.display="block";
        m5.style.display="none";


    }
});
var q6 = document.getElementById("q6");
var a6 = document.getElementById("a6");
q6.addEventListener("click",function(){
    if (a6.style.display=="none"){
        a6.style.display="block";
        m6.style.display="block";
        p6.style.display="none";


    }else{
        a6.style.display="none";
        p6.style.display="block";
        m6.style.display="none";


    }
});
var q7 = document.getElementById("q7");
var a7 = document.getElementById("a7");
q7.addEventListener("click",function(){
    if (a7.style.display=="none"){
        a7.style.display="block";
        m7.style.display="block";
        p7.style.display="none";


    }else{
        a7.style.display="none";
        p7.style.display="block";
        m7.style.display="none";


    }
});

var facebookLink = document.getElementById("facebookLink");
var instagramLink = document.getElementById("instagramLink");
var emailLink = document.getElementById("emailLink");
var boringLink = document.getElementById("boringLink");
var facebookBox = document.getElementById("facebookBox");
var instagramBox = document.getElementById("instagramBox");
var emailBox = document.getElementById("emailBox");
var boringBox = document.getElementById("boringBox");
facebookLink.classList.add("smallLink");
facebookBox.addEventListener("mouseover",function(){
        facebookLink.classList.add("growLink");
        facebookLink.classList.remove("shrinkLink");
        facebookLink.classList.add("largeLink");
        facebookLink.classList.remove("smallLink");
});
facebookBox.addEventListener("mouseout",function(){
      facebookLink.classList.remove("growLink");
      facebookLink.classList.add("shrinkLink");
      facebookLink.classList.add("smallLink");
      facebookLink.classList.remove("largeLink");
  });
  
instagramLink.classList.add("smallLink");
instagramBox.addEventListener("mouseover",function(){
      instagramLink.classList.add("growLink");
      instagramLink.classList.remove("shrinkLink")    ;
      instagramLink.classList.add("largeLink");
      instagramLink.classList.remove("smallLink");
  });
instagramBox.addEventListener("mouseout",function(){
      instagramLink.classList.remove("growLink");
      instagramLink.classList.add("shrinkLink");
      instagramLink.classList.add("smallLink");
      instagramLink.classList.remove("largeLink");
  });
emailLink.classList.add("smallLink");
emailBox.addEventListener("mouseover",function(){
      emailLink.classList.add("growLink");
      emailLink.classList.remove("shrinkLink");
      emailLink.classList.add("largeLink");
      emailLink.classList.remove("smallLink");
  });
  emailBox.addEventListener("mouseout",function(){
      emailLink.classList.remove("growLink");
      emailLink.classList.add("shrinkLink");
      emailLink.classList.add("smallLink");
      emailLink.classList.remove("largeLink");
  });
  
  boringLink.classList.add("smallLink");
  boringBox.addEventListener("mouseover",function(){
      boringLink.classList.add("growLink");
      boringLink.classList.remove("shrinkLink");
      boringLink.classList.add("largeLink");
      boringLink.classList.remove("smallLink");
  });
  boringBox.addEventListener("mouseout",function(){
      boringLink.classList.remove("growLink");
      boringLink.classList.add("shrinkLink");
      boringLink.classList.add("smallLink");
      boringLink.classList.remove("largeLink");
 });

