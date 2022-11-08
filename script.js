const newnot = document.getElementsByClassName('notification new');
const dot = document.getElementsByClassName('dot');
const notivalue = document.getElementsByClassName('value');
const notifications = document.getElementsByClassName('notification');
const dropdown = document.getElementsByClassName('dropdown');
const dropbutton = document.getElementsByClassName('dropbutton');
const dropcontent = document.getElementsByClassName('dropcontent');
const hideall = document.getElementsByClassName('hideall');
const readall = document.getElementsByClassName('readall');
const picture = document.getElementsByClassName('picture');
const text = document.getElementsByClassName('text');
var hidden=0;
var dropclicked = 0;
var readnotifications = 0;

window.onload=function(){
    if(newnot.length>0){
        notivalue[0].innerHTML=newnot.length;
        notivalue[0].style="transform: scale(1)";
        hideall[0].style="display: none";
        dropdown[0].style="border: none";
        dropcontent[0].style ="height: 5px;display: none";
        dropbutton[0].style="color: gray; border: 1px solid gray; cursor: pointer";
        readall[0].style="display: block";
    }
    else
        hidelall[0].style="display: block; opacity: 1";
}

function add(){
    const notification = {
        img: document.getElementById("avatar").value,
        name: document.getElementById("name").value,
        action: document.getElementById("action").value,
        content: document.getElementById("content").value,
        new: document.getElementById("new").checked
    };

    const newdiv = document.createElement("div");
    let avatar = document.createElement("img");
    avatar.className="avatar";
    let inner = notification.img;
    avatar.src=inner;
    newdiv.appendChild(avatar);
    let span = document.createElement("span");
    span.className="name";
    inner = document.createTextNode(notification.name+" ");
    span.appendChild(inner);
    newdiv.appendChild(span);
    span = document.createElement("span");
    span.className="action";
    inner = document.createTextNode(notification.action+" ");
    span.appendChild(inner);
    newdiv.appendChild(span);
    span = document.createElement("span");
    span.className="content";
    inner = document.createTextNode(notification.content+" ");
    span.appendChild(inner);
    newdiv.appendChild(span);
    if(notification.new){
        newdiv.className="notification new";
        span = document.createElement("span");
        span.className="dot";
        newdiv.appendChild(span);
        }
        else
        newdiv.className="notification old";
    let newline = document.createElement("br");
    newdiv.appendChild(newline);
    span = document.createElement("span");
    span.className="time";
    inner = document.createTextNode("1m ago");
    span.appendChild(inner);
    newdiv.appendChild(span);
    let div = document.createElement("div");

    

    const main = document.getElementsByTagName("main")[0];
    main.appendChild(newdiv);

    if(newnot.length>0){
        notivalue[0].innerHTML=newnot.length;
        notivalue[0].style="transform: scale(1)";
    }
    if(newnot.length<2)
        hideall[0].style="display: none";
        else
        hidelall[0].style="display: block; opacity: 1";

    return false;
}

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
    let newnotlength=newnot.length;
    if(newnot.length>0){
    for(let i=0; i<newnotlength; i++){
        newnot[0].className="notification old";
    }
    for(let i=0; i<dot.length; i++)
        animationhide(dot[i],1.3);
    animationhide(notivalue[0],1.1);
        readall[0].style="opacity: 0;";
        setTimeout(() => {
            readall[0].style="transform: scale(0)";
            readall[0].style="display: none";
        }, 300);
        
        readnotifications = 1;
    }
}

function drop(){
    dropclicked++;
    if(dropclicked==1){
    dropbutton[0].style="border: none";
    dropdown[0].style="border: 1px solid gray; border-radius: 10px; padding: 5px;";
    dropcontent[0].style="display: block; height: 100%";
    if(readnotifications)
        readall[0].style="display: none";
    setTimeout(() => {
        hideall[0].style="transform: translate(0,0)";
        if(!readnotifications)
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
    hideall[0].style="opacity: 0";
    if(!readnotifications)
    readall[0].style="opacity: 0";
    setTimeout(() => {
        hideall[0].style="transform: scale(0)";
        hideall[0].style="display: none";
        readall[0].style="transform: scale(0)";
        readall[0].style="display: none";
    }, 300);
    setTimeout(() => {
        dropcontent[0].style="display: none";
    dropbutton[0].style="pointer-events: none;color: lightgray; border: 1px solid lightgray; cursor: default";
    dropbutton[0].setAttribute("disabled","");
    dropdown[0].style="border: none";
    }, 300);
    
    animationhide(notivalue[0],1.1);
    setTimeout(function(){
        for(i in notifications){
            if(notifications[0].className=="notification old")
            notifications[0].style="z-index: 10;background-color: rgba(136, 136, 136,1);";
            else
            notifications[0].style="z-index: 10;background-color: rgba(100, 170, 255,1);";
            for(j in picture)
                picture[j].style="display: none";
            for(j in text)
                text[j].style="display: none";
            if(i>0){
                for(j in notifications[i].children)
                notifications[i].children[j].style="display: none";
            }
            notifications[i].style="translate: 0 -"+(70*i)+"px";
        }
        setTimeout(function(){
            for(i in notifications){
                notifications[i].style="translate: -120% -"+(70*i)+"px";
            }
        }, 350);
    }, 350);
    setTimeout(function(){
        for(i in notifications)
            notifications[i].style="display: none";
    },1400);
}

document.addEventListener('click', function handleClickOutsideBox(event) {
    if(!hidden)
    if (!dropdown[0].contains(event.target))
        rollup();
  });