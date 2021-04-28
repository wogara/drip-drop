var shopImage = document.getElementById('shopimage');
var shopLink = document.getElementById("shoplink");

shopLink.classList.add("faded");
shopLink.classList.add("small");

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
    instagramLink.classList.remove("shrinkLink");
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




shopLink.addEventListener("mouseover",function(){
    shopImage.classList.add("fadeout");
    shopImage.classList.remove("fadein");
    shopLink.classList.add("fadein");
    shopLink.classList.remove("fadeout");
    shopLink.classList.add("grow");
    shopLink.classList.remove("shrink");
    shopLink.classList.remove("small");
    shopLink.classList.add("large");
});
shopLink.addEventListener('mouseout',function(){
    shopImage.classList.remove("fadeout");
    shopImage.classList.add("fadein");
    shopLink.classList.remove("fadein");
    shopLink.classList.add("fadeout");
    shopLink.classList.remove("grow");
    shopLink.classList.add("shrink");
    shopLink.classList.add("small");
    shopLink.classList.remove("large");

});


shopImage.addEventListener('mouseover',function(){
    shopImage.classList.remove("fadein");
    shopLink.classList.add("fadein");
    shopLink.classList.remove("fadeout");
    shopImage.classList.add("fadeout");
    shopLink.classList.add("grow");
    shopLink.classList.remove("shrink");
    shopLink.classList.remove("small");
    shopLink.classList.add("large");


    
});
shopImage.addEventListener('mouseout',function(){
    shopImage.classList.remove("fadeout");
    shopLink.classList.remove("fadein");
    shopLink.classList.add("fadeout");
    shopImage.classList.add("fadein");
    shopLink.classList.remove("grow");
    shopLink.classList.add("shrink");
    shopLink.classList.add("small");
    shopLink.classList.remove("large");


});

var graphicsImage = document.getElementById('graphicsimage');
var graphicsLink = document.getElementById("graphicslink");
graphicsLink.classList.add("faded");
graphicsLink.classList.add("small");



graphicsLink.addEventListener("mouseover",function(){
    graphicsImage.classList.add("fadeout");
    graphicsImage.classList.remove("fadein");
    graphicsLink.classList.add("fadein");
    graphicsLink.classList.remove("fadeout");
    graphicsLink.classList.add("grow");
    graphicsLink.classList.remove("shrink");
    graphicsLink.classList.remove("small");
    graphicsLink.classList.add("large");

});

graphicsLink.addEventListener('mouseout',function(){
    graphicsImage.classList.remove("fadeout");
    graphicsImage.classList.add("fadein");
    graphicsLink.classList.remove('fadein');
    graphicsLink.classList.add("fadeout");
    graphicsLink.classList.remove("grow");
    graphicsLink.classList.add("shrink");
    graphicsLink.classList.add("small");
    graphicsLink.classList.remove("large");


});



graphicsImage.addEventListener('mouseover',function(){
    graphicsImage.classList.remove("fadein");
    graphicsImage.classList.add("fadeout");
    graphicsLink.classList.add("fadein");
    graphicsLink.classList.remove("fadeout");
    graphicsLink.classList.add("grow");
    graphicsLink.classList.remove("shrink");
    graphicsLink.classList.remove("small");
    graphicsLink.classList.add("large");


});
graphicsImage.addEventListener('mouseout',function(){
    graphicsImage.classList.remove("fadeout");
    graphicsImage.classList.add("fadein");
    graphicsLink.classList.remove("fadein");
    graphicsLink.classList.add("fadeout");
    graphicsLink.classList.remove("grow");
    graphicsLink.classList.add("shrink");
    graphicsLink.classList.add("small");
    graphicsLink.classList.remove("large");


});

var aboutImage = document.getElementById('aboutimage');
var aboutLink = document.getElementById("aboutlink");
aboutLink.classList.add("faded");
aboutLink.classList.add("small");



aboutLink.addEventListener("mouseover",function(){
    aboutImage.classList.add("fadeout");
    aboutImage.classList.remove("fadein");
    aboutLink.classList.remove("fadeout");
    aboutLink.classList.add("fadein");
    aboutLink.classList.add("grow");
    aboutLink.classList.remove("shrink");
    aboutLink.classList.remove("small");
    aboutLink.classList.add("large");


});

aboutLink.addEventListener('mouseout',function(){
    aboutImage.classList.remove("fadeout");
    aboutImage.classList.add("fadein");
    aboutLink.classList.add("fadeout");
    aboutLink.classList.remove("fadein");
    aboutLink.classList.remove("grow");
    aboutLink.classList.add("shrink");
    aboutLink.classList.add("small");
    aboutLink.classList.remove("large");


});



aboutImage.addEventListener('mouseover',function(){
    aboutImage.classList.remove("fadein");
    aboutImage.classList.add("fadeout");
    aboutLink.classList.add("fadein");
    aboutLink.classList.remove("fadeout");
    aboutLink.classList.add("grow");
    aboutLink.classList.remove("shrink");
    aboutLink.classList.remove("small");
    aboutLink.classList.add("large");


});
aboutImage.addEventListener('mouseout',function(){
    aboutImage.classList.remove("fadeout");
    aboutImage.classList.add("fadein");
    aboutLink.classList.remove("fadein");
    aboutLink.classList.add("fadeout");
    aboutLink.classList.remove("grow");
    aboutLink.classList.add("shrink");
    aboutLink.classList.add("small");
    aboutLink.classList.remove("large");


});

