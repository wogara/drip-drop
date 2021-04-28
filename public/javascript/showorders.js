var filterDropDown = document.getElementById("filter");
if (filterDropDown.options[filterDropDown.selectedIndex].text == "All"){
        var hidden = document.querySelectorAll(".hide");
        hidden.forEach(function(element){
            element.classList.remove("hide");
        })
    }else if (filterDropDown.options[filterDropDown.selectedIndex].text == "Complete"){
            var completed = document.querySelectorAll(".true");
            completed.forEach(function(element){
                element.classList.remove("hide");
            })
            var incompleted = document.querySelectorAll(".false");
            incompleted.forEach(function(element){
                element.classList.add("hide");
            })

    }else if (filterDropDown.options[filterDropDown.selectedIndex].text == "Incomplete"){
            var incomplete = document.querySelectorAll(".false");
            incomplete.forEach(function(element){
                element.classList.remove("hide");
            })
            var completed = document.querySelectorAll(".true");
            completed.forEach(function(element){
                element.classList.add("hide");
            })

            
    } 
    

filterDropDown.addEventListener('click',function(){
    
    console.log(filterDropDown.options[filterDropDown.selectedIndex].text)
    if (filterDropDown.options[filterDropDown.selectedIndex].text == "All"){
        var hidden = document.querySelectorAll(".hide");
        hidden.forEach(function(element){
            element.classList.remove("hide");
        })
    }else if (filterDropDown.options[filterDropDown.selectedIndex].text == "Complete"){
            var completed = document.querySelectorAll(".true");
            completed.forEach(function(element){
                element.classList.remove("hide");
            })
            var incompleted = document.querySelectorAll(".false");
            incompleted.forEach(function(element){
                element.classList.add("hide");
            })

    }else if (filterDropDown.options[filterDropDown.selectedIndex].text == "Incomplete"){
            var incomplete = document.querySelectorAll(".false");
            incomplete.forEach(function(element){
                element.classList.remove("hide");
            })
            var completed = document.querySelectorAll(".true");
            completed.forEach(function(element){
                element.classList.add("hide");
            })

            
    } 
        
})
