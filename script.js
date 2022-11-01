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

function animation(element,scale){
    element.style="transform: scale("+scale+")";
    setTimeout(disappear,150);
    function disappear(){
        element.style="transform: scale(0)";
    }
}

function read(){
    if(newnot.length>0){
    for(let i=0; i<3; i++)
        newnot[0].className='notification old';
    for(let i=0; i<3; i++)
        animation(dot[i],1.3);
    animation(notivalue[0],1.1);
        readall[0].style="opacity: 0; display: none";
    }
}

function drop(){
    dropbutton[0].style="border: none";
    dropdown[0].style="border: 1px solid gray; border-radius: 10px; padding: 5px;";
    dropcontent[0].style="display: block";
}

function hide(){
    hideall[0].style="display: none";
    readall[0].style="display: none";
    dropbutton[0].style="color: lightgray; border: 1px solid lightgray; cursor: default";
    dropbutton[0].setAttribute("disabled","");
    dropdown[0].style="border: none";
    setTimeout(function(){
        for(i in notification){
            if(notification[0].className=="notification old")
            notification[0].style="z-index: 10;background-color: rgba(136, 136, 136,1);";
            else
            notification[0].style="z-index: 10;background-color: rgba(60, 124, 233,1);";
            for(j in picture)
                picture[j].style="display: none";
            for(j in text)
                text[j].style="display: none";
            if(i>0){
                for(j in notification[i].children)
                notification[i].children[j].style="opacity: 0";
            }
            notification[i].style="translate: 0 -"+(70*i)+"px";
        }
        setTimeout(function(){
            for(i in notification){
                notification[i].style="translate: -120% -"+(70*i)+"px";
            }
        }, 350);
    }, 350);
}
/*
const move = e => {
    notification[0].style="transform: translateX(-"+e.offsetX+"px)";
}

notification.addEventListener("mousedown",move);
*/