var sizeDropDown = document.querySelectorAll(".custom-select");
var addSizesJoggers = document.getElementById("2");
var addSizesHoodie = document.getElementById("1");
var XL = document.createElement('option');
var XLJoggers = document.createElement('option');
XL.value="4";
XL.innerHTML="XL";
XLJoggers.value="4";
XLJoggers.innerHTML="XL";
addSizesHoodie.appendChild(XL);
addSizesJoggers.appendChild(XLJoggers);
var XXLJoggers = document.createElement('option');
var XXL = document.createElement('option');
XXL.value = "5";
XXL.innerHTML="XXL";
XXLJoggers.value="5";
XXLJoggers.innerHTML="XXL";
addSizesHoodie.appendChild(XXL);
addSizesJoggers.appendChild(XXLJoggers);
addSizesHoodie.appendChild(XXL);

var braModels = document.getElementById("3Models");
var braFabric = document.getElementById("3Fabric");
braFabric.textContent="Fabric composition: 95% Cotton, 5% Elastane";
var hoodieModels = document.getElementById("1Models");
var joggerModels = document.getElementById("2Models");

braModels.textContent = "Fit: Comfortable, but size down for a more fitted look. Female model is 5'3\" with a 33\" chest and wears a Small";
hoodieModels.textContent = "Fit: True to size i.e. if you usually wear a large, get a large. Model is 5'10\" with a 31\" waist and wears a Large."
joggerModels.textContent = "Fit: Slim. If you prefer a more relaxed fit size up. Male model is 5'10\" with a 31\" waist and wears a Large. Female model is 5'3\" with a 25\" waist and wears a Medium."


var braSizeChart = document.getElementById("3sizeChart");
braSizeChart.src='images/racertop-size-chart.png'
var braSizeToggle = document.getElementById("3sizeChartToggle");
braSizeChart.style.display="none";
braSizeToggle.addEventListener('click',function(){
    if (braSizeChart.style.display=="none"){
        braSizeChart.style.display="block";
        braSizeToggle.style.display="none";
    }
});
var HoodieSizeChart = document.getElementById("1sizeChart");
HoodieSizeChart.src = 'images/hoodie-size-chart.png'
var HoodieSizeToggle = document.getElementById("1sizeChartToggle");
HoodieSizeChart.style.display="none";
HoodieSizeToggle.addEventListener('click',function(){
    if (HoodieSizeChart.style.display=="none"){
        HoodieSizeChart.style.display="block";
        HoodieSizeToggle.style.display="none";
    }
});

var JoggersSizeChart = document.getElementById("2sizeChart");
var JoggersSizeToggle = document.getElementById("2sizeChartToggle");
JoggersSizeChart.style.display="none";
JoggersSizeToggle.addEventListener('click',function(){
    if (JoggersSizeChart.style.display=="none"){
        JoggersSizeChart.style.display="block";
        JoggersSizeToggle.style.display="none";
    }
});


sizeDropDown.forEach(function(button){

    var size = document.getElementById(button.id + "size");
    size.value = button.options[button.selectedIndex].text;


    button.addEventListener('click',function(){

        console.log(this.options[this.selectedIndex].text);
        var size = document.getElementById(this.id + "size");
        size.value = this.options[this.selectedIndex].text;
        console.log('added to cart');
    });
});
var hoodieCartButton = document.getElementById("1cartButton");
hoodieCartButton.addEventListener('click',function(){
    var size = document.getElementById("1size");
    var sizeValue = document.getElementById("1");
    size.value = sizeValue.options[sizeValue.selectedIndex].text;
    console.log("worked");
});
var joggersCartButton = document.getElementById("2cartButton");
joggersCartButton.addEventListener('click',function(){
    var size = document.getElementById("2size");
    var sizeValue = document.getElementById("2");
    size.value = sizeValue.options[sizeValue.selectedIndex].text;
    console.log("worked");
});
var cropCartButton = document.getElementById("3cartButton");
cropCartButton.addEventListener('click',function(){
    var size = document.getElementById("3size");
    var sizeValue = document.getElementById("3");
    size.value = sizeValue.options[sizeValue.selectedIndex].text;
    console.log("worked");
});


var joggers  = document.getElementById("2figure");
var bra = document.getElementById("3figure");
var hoodie = document.getElementById("1figure");
joggers.addEventListener("mouseover",function(){
    joggers.classList.remove("unselected");
    joggers.classList.add("selected");

});
joggers.addEventListener("mouseout",function(){
    joggers.classList.add("unselected");
    joggers.classList.remove("selected");

});

bra.addEventListener("mouseover",function(){
    bra.classList.remove("unselected");
    bra.classList.add("selected");
});
bra.addEventListener("mouseout",function(){
    bra.classList.add("unselected");
    bra.classList.remove("selected");
});

hoodie.addEventListener("mouseover",function(){
    hoodie.classList.remove("unselected");
    hoodie.classList.add("selected");
});
hoodie.addEventListener("mouseout",function(){
    hoodie.classList.add("unselected");
    hoodie.classList.remove("selected");
});

