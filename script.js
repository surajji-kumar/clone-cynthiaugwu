const scroll = new LocomotiveScroll({
    el:document.querySelector('#main'),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    

     .to(".boundingelem",{
        y: '0',
        ease:Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger:0.2,
    })

     .from("#herofooter",{
         y: '-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        ease: Expo.easeInOut
    })

}
var timeout;
function circleChaptaKaro(){
    // define defoult scale value
    var xscale =1;
    var yscale =1;


    var xprev=0;
    var yprev=0;

   window.addEventListener("mousemove",function(dets){
   clearTimeout(timeout);
    xscale= gsap.utils.clamp(.8,1.2,dets.clientX - xprev);
  yscale= gsap.utils.clamp(.8,1.2,dets.clientY -yprev);
    

   xprev = dets.clientX;
   yprev =dets.clientY;

   
    circleMouseFollower(xscale,yscale) ;
   
   
    timeout=setTimeout(function(){
       
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale( 1 ,1)`;

    },100);

   });

}

function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
       document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xscale} , ${yscale})`;
    });
}
circleMouseFollower();
firstPageAnim();
circleChaptaKaro();


// seleect all three element ,then apply mousemove all three elements,when 
// mousemove moveing we find out where is mouse, which means find we position 
// of x and y exis, now we show image instead of x y position and move images
// rotate images while doing mouse move ,and  as mouse speed high then rotate is high


 document.querySelectorAll(".elem").forEach(function (elem){

   var rotate =0;
   var diffrot =0; 


    elem.addEventListener("mousemove",function(dets){
        var yyyy = dets.clientY - elem.getBoundingClientRect().top;
          diffrot = dets.clientX - rotate;
          rotate = dets.clientX;

          gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease: Power3,
             top:yyyy,
             left:dets.clientX,
             rotate: gsap.utils.clamp(-20,20,diffrot*0.5),
             
        });
    });


  elem.addEventListener("mouseleave",function(dets){
         gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease: Power3,
            duration:0.5,
        });
    });
});
 
