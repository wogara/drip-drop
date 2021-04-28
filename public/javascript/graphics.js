var next = document.getElementById('nexty');
var prev= document.getElementById('prev');
var title = document.querySelector('.modal-title');
var desc = document.querySelector('.graphicsDescription');
var modal = document.getElementById('Modal');
var body = document.getElementsByTagName("BODY")[0];
var alphas = document.querySelectorAll('.alpha');
var b = document.getElementById('b');
var betas = document.querySelectorAll('.beta');

var descriptions = ["WATER. DRIPPING. ICY. THAT'S ALL (c. 20l7)","THE DRIP. THE DROP. THE DRIP DROP. THE TIP TOP. (c. 2018)","Camoflauge to keep you lit whenever, wherever. (c. 2018)","Camoflauge to keep you cool even in the warmest conditions. (c. 2018)","The notable portals from the show Rick and Morty have been warped into creating a world of slime and diamonds. Don't forget your portal gun if you want to get home. (c. 2017)", "Bricks were once made out of mortar and clay, but here at Drip Drop, we don't settle for anything less than the very tip top. That's why we make our bricks out of precious diamonds. (c. 2018)","The nature of a diamond is that it reflects all light. This is a hyperbolic representation of that effect. (c. 2020)","BOO! (c. 2017)","Why would anyone ever pay $1000 for a T-Shirt? We've figured out why. (c. 2017)","THIS IS THE STORY OF SD CLOUD FINDING THE POWER TO BE HAPPY. (c. 2019)","Inspired by the genius of the producer Metro Boomin, check him out boolin hard on the subway. (c. 2018)","THE IDEA OF SUPERWET IS INSPIRED BY THE BRAND SUPERDRY, BUT AT DRIP DROP, NOTHING IS DRY. (c. 2018)","\"There's levels to this s**t\" - Meek Mill\" - Drip Drop (c. 2018)","Inspired by artist Rich The Kid's music label, Rich Forever, we introduce the Infinity Dollar. (c. 2018)","100% just a copy of Young Thug's namesake album, Jeffery, Kidding. We made it really drippy. (c. 2020)","Crack a cold one with the gang, only if you're 21 of course. (c. 2020)","IF YOU EVER FIND YOURSELF IN A DRIP EMERGENCY, REMEMBER THESE LIFE SAVING STEPS: STOP! DRIP! DROP! AND ROLL! (c. 2020)","The story behind this is crazy. Arran painted some crazy realistic jellyfish in watercolor and then Josh traced them in illustrator, animated each frame individually. between the two of them, this has to be over 40 hours of work. (c. 2018)","No one knows what lies on the other side of a black hole. Here at Drip Drop, scientists have surpassed the event horizon, performing a successful splashdown into the Acid Galaxy. They were instantly vaporized by the heat of their discovery.","Meet Carl, he understands the value of respecting the ocean and asks everyone not to pollute so he can stay wavy. C.A.R.L. CARE AND RESPECT LIFE. (c.2018)","Some bling for your ring. (c. 2017)","The inspiration for much of my artwork comes from the Trap music scene. Nowadays, lean (codeine with promethazine) is a very popular drug within the trap scene and is often called slime. Here, I depict the \"slime\" dripping from some Actavis bottles. (c. 2017)"];
var titles = ["Drip Diamond","Drip Lit","DD Camo Fire","DD Camo Ice","Trippy Drippy Ricky", "Brick Diamond","The Diamond","Droopy Ghost","Look at Me","Electric Cloud","Metro Booling","Super Wet","Levels","UFO CEO","Drippy Jeffery","NarraGANGshit","Stop Drip Drop and Roll", "Jellyfish","Radioactive","Carl the Turtle","Ring Drip","Too Much Sauce"];

alphas.forEach(function(a){
    
    a.addEventListener('click',function(){
        if (document.querySelector('.active')){
            document.querySelector('.active').classList.remove('active');
        }
        var big = a.id.toUpperCase();
        if (a.id == "a"){
            desc.innerHTML = descriptions[0];
            title.innerHTML = titles[0];
        }else if (a.id== "b"){
            desc.innerHTML=descriptions[1];
            title.innerHTML = titles[1];
        }else if (a.id== "c"){
            desc.innerHTML=descriptions[2];
            title.innerHTML=titles[2];
        }else if (a.id== "d"){
            desc.innerHTML=descriptions[3];
            title.innerHTML=titles[3];
        }else if (a.id== "e"){
            desc.innerHTML=descriptions[4];
            title.innerHTML=titles[4];
        }else if (a.id== "f"){
            desc.innerHTML=descriptions[5];
             title.innerHTML=titles[5];

        }else if (a.id== "g"){
            desc.innerHTML=descriptions[6];
             title.innerHTML=titles[6];

        }else if (a.id== "h"){
            desc.innerHTML=descriptions[7];
             title.innerHTML=titles[7];

        }else if (a.id== "i"){
            desc.innerHTML=descriptions[8];
             title.innerHTML=titles[8];

        }else if (a.id== "j"){
            desc.innerHTML=descriptions[9];
            title.innerHTML=titles[9];
            
        }else if (a.id== "k"){
            desc.innerHTML=descriptions[10];
             title.innerHTML=titles[10];

        }else if (a.id== "l"){
            desc.innerHTML=descriptions[11];
             title.innerHTML=titles[11];

        }else if (a.id== "m"){
            desc.innerHTML=descriptions[12];
             title.innerHTML=titles[12];

        }else if (a.id== "n"){
            desc.innerHTML=descriptions[13];
             title.innerHTML=titles[13];

        }else if (a.id== "o"){
            desc.innerHTML=descriptions[14];
             title.innerHTML=titles[14];

        }else if (a.id== "p"){
            desc.innerHTML=descriptions[15];
             title.innerHTML=titles[15];

        }else if (a.id== "q"){
            desc.innerHTML=descriptions[16];
             title.innerHTML=titles[16];

        }else if (a.id== "r"){
            desc.innerHTML=descriptions[17];
             title.innerHTML=titles[17];

        }else if (a.id== "s"){
            desc.innerHTML=descriptions[18];
             title.innerHTML=titles[18];

        }else if (a.id== "t"){
            desc.innerHTML=descriptions[19];
             title.innerHTML=titles[19];

        }else if (a.id== "u"){
            desc.innerHTML=descriptions[20];
             title.innerHTML=titles[20];

        }else if (a.id== "v"){
            desc.innerHTML=descriptions[21];
             title.innerHTML=titles[20];

        }

         
        document.getElementById(big).classList.add('active');
    })
});

next.addEventListener('click',function(){
    var a = document.querySelector('.active');
    if (a.id == "A"){
            desc.innerHTML = descriptions[1];
            title.innerHTML = titles[1];
        }else if (a.id== "B"){
            desc.innerHTML=descriptions[2];
            title.innerHTML = titles[2];
        }else if (a.id== "C"){
            desc.innerHTML=descriptions[3];
            title.innerHTML=titles[3];
        }else if (a.id== "D"){
            desc.innerHTML=descriptions[4];
            title.innerHTML=titles[4];
        }else if (a.id== "E"){
            desc.innerHTML=descriptions[5];
            title.innerHTML=titles[5];
        }else if (a.id== "F"){
            desc.innerHTML=descriptions[6];
             title.innerHTML=titles[6];

        }else if (a.id== "G"){
            desc.innerHTML=descriptions[7];
             title.innerHTML=titles[7];

        }else if (a.id== "H"){
            desc.innerHTML=descriptions[8];
             title.innerHTML=titles[8];

        }else if (a.id== "I"){
            desc.innerHTML=descriptions[9];
             title.innerHTML=titles[9];

        }else if (a.id== "J"){
            desc.innerHTML=descriptions[10];
            title.innerHTML=titles[10];
            
        }else if (a.id== "K"){
            desc.innerHTML=descriptions[11];
             title.innerHTML=titles[11];

        }else if (a.id== "L"){
            desc.innerHTML=descriptions[12];
             title.innerHTML=titles[12];

        }else if (a.id== "M"){
            desc.innerHTML=descriptions[13];
             title.innerHTML=titles[13];

        }else if (a.id== "N"){
            desc.innerHTML=descriptions[14];
             title.innerHTML=titles[14];

        }else if (a.id== "O"){
            desc.innerHTML=descriptions[15];
             title.innerHTML=titles[15];

        }else if (a.id== "P"){
            desc.innerHTML=descriptions[16];
             title.innerHTML=titles[16];

        }else if (a.id== "Q"){
            desc.innerHTML=descriptions[17];
             title.innerHTML=titles[17];

        }else if (a.id== "R"){
            desc.innerHTML=descriptions[18];
             title.innerHTML=titles[18];

        }else if (a.id== "S"){
            desc.innerHTML=descriptions[19];
             title.innerHTML=titles[19];

        }else if (a.id== "T"){
            desc.innerHTML=descriptions[20];
             title.innerHTML=titles[20];

        }else if (a.id== "U"){
            desc.innerHTML=descriptions[21];
             title.innerHTML=titles[21];

        }else if (a.id== "V"){
            desc.innerHTML=descriptions[0];
             title.innerHTML=titles[0];

        }

});

prev.addEventListener('click',function(){
    var a = document.querySelector('.active');
    if (a.id == "A"){
            desc.innerHTML = descriptions[21];
            title.innerHTML = titles[21];
        }else if (a.id== "B"){
            desc.innerHTML=descriptions[0];
            title.innerHTML = titles[0];
        }else if (a.id== "C"){
            desc.innerHTML=descriptions[1];
            title.innerHTML=titles[1];
        }else if (a.id== "D"){
            desc.innerHTML=descriptions[2];
            title.innerHTML=titles[2];
        }else if (a.id== "E"){
            desc.innerHTML=descriptions[3];
            title.innerHTML=titles[3];
        }else if (a.id== "F"){
            desc.innerHTML=descriptions[4];
             title.innerHTML=titles[4];

        }else if (a.id== "G"){
            desc.innerHTML=descriptions[5];
             title.innerHTML=titles[5];

        }else if (a.id== "H"){
            desc.innerHTML=descriptions[6];
             title.innerHTML=titles[6];

        }else if (a.id== "I"){
            desc.innerHTML=descriptions[7];
             title.innerHTML=titles[7];

        }else if (a.id== "J"){
            desc.innerHTML=descriptions[8];
            title.innerHTML=titles[8];
            
        }else if (a.id== "K"){
            desc.innerHTML=descriptions[9];
             title.innerHTML=titles[9];

        }else if (a.id== "L"){
            desc.innerHTML=descriptions[10];
             title.innerHTML=titles[10];

        }else if (a.id== "M"){
            desc.innerHTML=descriptions[11];
             title.innerHTML=titles[11];

        }else if (a.id== "N"){
            desc.innerHTML=descriptions[12];
             title.innerHTML=titles[12];

        }else if (a.id== "O"){
            desc.innerHTML=descriptions[13];
             title.innerHTML=titles[13];

        }else if (a.id== "P"){
            desc.innerHTML=descriptions[14];
             title.innerHTML=titles[14];

        }else if (a.id== "Q"){
            desc.innerHTML=descriptions[15];
             title.innerHTML=titles[15];

        }else if (a.id== "R"){
            desc.innerHTML=descriptions[16];
             title.innerHTML=titles[16];

        }else if (a.id== "S"){
            desc.innerHTML=descriptions[17];
             title.innerHTML=titles[17];

        }else if (a.id== "T"){
            desc.innerHTML=descriptions[18];
             title.innerHTML=titles[18];

        }else if (a.id== "U"){
            desc.innerHTML=descriptions[19];
             title.innerHTML=titles[19];

        }else if (a.id== "V"){
            desc.innerHTML=descriptions[20];
             title.innerHTML=titles[20];

        }

    
});
