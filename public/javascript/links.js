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

