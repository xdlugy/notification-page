const newnot = document.getElementsByClassName('notification new');
const dot = document.getElementsByClassName('dot');
const notivalue = document.getElementsByClassName('value');
const notification = document.getElementsByClassName('notification');
const dropdown = document.getElementsByClassName('dropdown');
const dropcontent = document.getElementsByClassName('dropcontent');

function animation(element,scale){
    element.style="transform: scale("+scale+")";
    setInterval(disappear,150);
    function disappear(){
        element.style="transform: scale(0)";
    }
}

function read(){
    for(let i=0; i<3; i++)
        newnot[0].className='notification old';
    for(let i=0; i<3; i++)
        animation(dot[i],1.3);
    animation(notivalue[0],1.1);
        document.getElementsByClassName('read')[0].style="opacity: 0; display: none";
}

function drop(){
    dropdown[0].style="border-radius: 10px";
    dropcontent[0].style="display: block";
}

function hide(){
    dropcontent[0].style="display: none";
}
/*
const move = e => {
    notification[0].style="transform: translateX(-"+e.offsetX+"px)";
}

notification.addEventListener("mousedown",move);
*/