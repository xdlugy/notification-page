const newnot = document.getElementsByClassName('notification new');
const dot = document.getElementsByClassName('dot');
const notivalue = document.getElementsByClassName('value');
const notification = document.getElementsByClassName('notification');
const dropdown = document.getElementsByClassName('dropdown');
const dropbutton = document.getElementsByClassName('dropbutton');
const dropcontent = document.getElementsByClassName('dropcontent');
const hideall = document.getElementsByClassName('hideall');
const readall = document.getElementsByClassName('readall');
const picture = document.getElementsByClassName('picture');
const text = document.getElementsByClassName('text');
var hidden=0;
var dropclicked = 0;

function animationhide(element,scale){
    element.style="transform: scale("+scale+")";
    setTimeout(function (){
        element.style="transform: scale(0)";
    }, 300);
    setTimeout(function (){
        element.innerHTML="";
    },600)
}

function read(){
    if(newnot.length>0){
    for(let i=0; i<3; i++)
        newnot[0].className='notification old';
    for(let i=0; i<3; i++)
        animationhide(dot[i],1.3);
    animationhide(notivalue[0],1.1);
        readall[0].style="opacity: 0; display: none";
    }
}

function drop(){
    dropclicked++;
    if(dropclicked==1){
    dropbutton[0].style="border: none";
    dropdown[0].style="border: 1px solid gray; border-radius: 10px; padding: 5px;";
    dropcontent[0].style="display: block; height: 100%";
    setTimeout(() => {
        hideall[0].style="transform: translate(0,0)";
        readall[0].style="transform: translate(0,0)";
    }, 0);
    }
    else
    rollup();
}

function rollup(){
    dropclicked=0;
    dropdown[0].style="border: none";
    dropcontent[0].style ="height: 5px;display: none";
    dropbutton[0].style="color: gray; border: 1px solid gray; cursor: pointer";
    hideall[0].style="transform: translate(0,-100%)";
    readall[0].style="transform: translate(0,-200%)";
}

function hide(){
    hidden=1;
    dropcontent[0].style="display: none";
    dropbutton[0].style="pointer-events: none;color: lightgray; border: 1px solid lightgray; cursor: default";
    dropbutton[0].setAttribute("disabled","");
    dropdown[0].style="border: none";
    animationhide(notivalue[0],1.1);
    setTimeout(function(){
        for(i in notification){
            if(notification[0].className=="notification old")
            notification[0].style="z-index: 10;background-color: rgba(136, 136, 136,1);";
            else
            notification[0].style="z-index: 10;background-color: rgba(100, 170, 255,1);";
            for(j in picture)
                picture[j].style="display: none";
            for(j in text)
                text[j].style="display: none";
            if(i>0){
                for(j in notification[i].children)
                notification[i].children[j].style="display: none";
            }
            notification[i].style="translate: 0 -"+(70*i)+"px";
        }
        setTimeout(function(){
            for(i in notification){
                notification[i].style="translate: -120% -"+(70*i)+"px";
            }
        }, 350);
    }, 350);
    setTimeout(function(){
        for(i in notification)
            notification[i].style="display: none";
    },1400);
}

document.addEventListener('click', function handleClickOutsideBox(event) {
    if(!hidden)
    if (!dropdown[0].contains(event.target))
        rollup();
  });

/*
const move = e => {
    notification[0].style="transform: translateX(-"+e.offsetX+"px)";
}

notification.addEventListener("mousedown",move);
*/