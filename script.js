setTimeout(function(){ document.getElementById('animtext').innerHTML =
                        "I am Sahil and these are few of my works"; }, 4000);
                        setTimeout(function(){ document.getElementById('lander').style.display ="none";
                         }, 13000);
gsap.to('.landingText',{opacity:1,duration:1});
gsap.to('.landingText',{opacity:0,duration:1,delay:3});
gsap.to('.landingText',{opacity:1,duration:1,delay:4});
gsap.to('.landingText',{opacity:0,duration:1,delay:9});
gsap.to('.landing',{opacity:0,duration:2,delay:11});