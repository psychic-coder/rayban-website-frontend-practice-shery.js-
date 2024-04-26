Shery.imageEffect("#back"/*element*/,{style:5,config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8946259220231823},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.15,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":2.37,"range":[0,10]},"metaball":{"value":0.27,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.52,"range":[0,2]},"noise_scale":{"value":6.87,"range":[0,100]}},gooey:true}/*configuration*/);
/*debug:true*/
//is removed and in place of that config is added of the settings we made using the debug panel in browser
//we get the value of the config after we click copy from clipboard option in the debug panel
//we can add or remove the debug menu
//the debug gives us the debug panel from where we can use the extra features
//in element we write the name of the div within we have all the images
//within configuration we configure the animation*/



//-----------------------------------------------------------------------------------------------
//the below code is for the swipe up part of the text when we click on the screen
var elems=document.querySelectorAll(".elem");
elems.forEach((e)=>{
//we are selecting all the h1's present  inside  a particular elem
    var h1s=e.querySelectorAll("h1");
    var index=0; 
    var animating=false;
    document.querySelector("#main").addEventListener("click",()=>{
        if(!animating){
            animating=true;
            gsap.to(h1s[index],{
                //we are changing the top property to -100%
                top:'-=100%',
                ease:Expo.easeInOut,
                duration:1,
                onComplete:function(){
                  gsap.set(this._targets[0],{top:"100%"});
                  animating=false;
                },
            });
           index===h1s.length-1 ?index=0:index++;
            gsap.to(h1s[index],{
                top:'-=100%',
                ease:Expo.easeInOut,
                duration:1,
            })
        }
      
    })
})
