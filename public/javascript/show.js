var sizeDropDown = document.querySelectorAll(".custom-select");

sizeDropDown.forEach(function(button){

    var size = document.getElementById(button.id + "size");
    size.value = button.options[button.selectedIndex].text;


    button.addEventListener('click',function(){

        console.log(this.options[this.selectedIndex].text);
        var size = document.getElementById(this.id + "size");
        size.value = this.options[this.selectedIndex].text;
    });
});
