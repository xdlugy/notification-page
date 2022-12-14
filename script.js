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
const addbutton = document.getElementById("addbutton");

var hidden=0;
var dropclicked = 0;
var readnotifications = 0;
var modalclick = 0;

var uploadedavatar="";
var uploadedpicture="";

window.onload=function(){
    if(newnot.length)
        readall[0].style="display: none";

    if(localStorage.length>0){
        let main = document.querySelector('main');
        let end=notifications.length;
        for(let i=0; i<end; i++){
            notifications[0].remove();
        }
        end = localStorage.length-1;
        for(let i=0; i<end; i++){
            main.insertAdjacentHTML('beforeend',localStorage.getItem('notification'+i));
        }
    }
        

  const imageavatar = document.getElementById("avatar");
  imageavatar.addEventListener("change", function(){
      const reader = new FileReader();
      reader.addEventListener("load", () => {
          uploadedavatar = reader.result;
          let avatarlabel = document.getElementById("avatarlabel");
          avatarlabel.innerHTML=this.files[0].name;
      })
      reader.readAsDataURL(this.files[0]);
  })
  const imagepicture = document.getElementById("picture");
  imagepicture.addEventListener("change", function(){
      const reader = new FileReader();
      reader.addEventListener("load", () => {
          uploadedpicture = reader.result;
          let picturelabel = document.getElementById("picturelabel");
          picturelabel.innerHTML=this.files[0].name;

      })
      reader.readAsDataURL(this.files[0]);
  })
    if(newnot.length>0){
        notivalue[0].innerHTML=newnot.length;
        notivalue[0].style="transform: scale(1)";
        readnotifications = 0;
    }
        else
        if(notifications.length<=0)
            hide();
}

function add(){
        var name = document.getElementById("name").value;
        if(name=="")
            name="Name";
        var action = document.getElementById("action").value;
        if(action=="")
            action="Action";
        var content = document.getElementById("content").value;
        if(content=="")
            content="Content";
        var app = document.getElementById("app").value;
        if(app=="")
            app="App name";
        var textbox = document.getElementById("textbox").value;
        var checked = document.getElementById("new").checked;
    
    const newdiv = document.createElement("div");
    let avatar = document.createElement("img");
    if(uploadedavatar!="")
        avatar.src=uploadedavatar;
        else
        avatar.src="assets/images/white.png";
    avatar.className="avatar";
    newdiv.appendChild(avatar);

    if(uploadedpicture!=""){
    let pictureimg = document.createElement("img");
    pictureimg.className="picture";
    pictureimg.src=uploadedpicture;
    newdiv.appendChild(pictureimg);
    }
    let span = document.createElement("span");
    span.className="name";
    inner = document.createTextNode( name+" ");
    span.appendChild(inner);
    newdiv.appendChild(span);
    span = document.createElement("span");
    span.className="action";
    inner = document.createTextNode( action+" ");
    span.appendChild(inner);
    newdiv.appendChild(span);
    span = document.createElement("span");
    span.className="content";
    inner = document.createTextNode( content+" ");
    span.appendChild(inner);
    newdiv.appendChild(span);
    span = document.createElement("span");
    span.className="app";
    inner = document.createTextNode( app+" ");
    span.appendChild(inner);
    newdiv.appendChild(span);
    if(checked){
        newdiv.className="notification new";
        span = document.createElement("span");
        span.className="dot";
        newdiv.appendChild(span);
        animationshow(notivalue[0]);
        }
        else
        newdiv.className="notification old";
    let newline = document.createElement("br");
    newdiv.appendChild(newline);
    span = document.createElement("span");
    span.className="time";
    inner = document.createTextNode("Now");
    span.appendChild(inner);
    var created = new Date();
    setInterval(() => {
        var now = new Date();
        var elapsed = now-created;
        if(elapsed > 60000)
            {
                var min = Math.round(elapsed/60000);
                if(min<60)
                    inner=document.createTextNode(min+" minutes ago");
                else
                {
                    var hour = Math.round(min/60);
                    if(hour<24)
                    inner=document.createTextNode(hour+" hours ago");
                    else{
                    var day = Math.round(hour/24);
                    inner=document.createTextNode(day + "days ago");
                    }
                }
            }
            span.innerHTML="";
            span.appendChild(inner);
    }, 60000);
    newdiv.appendChild(span);
    if(textbox!=""){
    let div = document.createElement("div");
    div.className="text";
    inner = document.createTextNode( textbox);
    div.appendChild(inner);
    newdiv.appendChild(div);
    }
    

    const main = document.getElementsByTagName("main")[0];
    main.appendChild(newdiv);

    dropbutton[0].style="color: gray; border: 1px solid gray; cursor: pointer; pointer-events: auto";
    dropbutton[0].setAttribute("enabled","");
    dropbutton[0].removeAttribute("disabled");
    hidden=0;
    readnotifications=1;
    

    if(newnot.length>0){
        notivalue[0].innerHTML=newnot.length;
        notivalue[0].style="transform: scale(1)";
        readnotifications = 0;
    }
        else
            hideall[0].style="display: block; opacity: 1";

    localStorage.setItem('hidden',0);
    let end=notifications.length;
    for(let i=0; i<end; i++)
       localStorage.setItem('notification'+i,notifications[i].outerHTML);

    
    animationshow(notifications[notifications.length-1]);

    closemodal();

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

function animationshow(element){
    element.style="transform: scale(0)";
    setTimeout(function (){
        element.style="transform: scale(1.1)";
    }, 100);
    setTimeout(function (){
        element.style="transform: scale(1.0)";
    }, 400);
}

function read(){
    
    if(newnot.length>0){
        let end=newnot.length;
        for(let i=0; i<end; i++){
            newnot[0].className="notification old";
        }
    end = dot.length;
    for(let i=0; i<end; i++){
        animationhide(dot[0],1.3);
        dot[0].remove();
    }
    animationhide(notivalue[0],1.1);
        readall[0].style="opacity: 0;";
        setTimeout(() => {
            readall[0].style="transform: scale(0)";
            readall[0].style="display: none";
        }, 300);
        
        readnotifications = 1;
    }

    hideall[0].style="opacity: 0";
    if(!readnotifications)
    readall[0].style="opacity: 0";
    setTimeout(() => {
        hideall[0].style="transform: scale(0)";
        hideall[0].style="display: none";
        readall[0].style="transform: scale(0)";
        readall[0].style="display: none";
        dropcontent[0].style="display: none";
    dropbutton[0].style="";
    dropdown[0].style="border: none";
    }, 300);
    dropclicked=0;
    
    end=notifications.length;
    for(let i=0; i<end; i++)
        localStorage.setItem('notification'+i,notifications[i].outerHTML);
}

function drop(){
    dropclicked++;
    if(dropclicked==1){
    dropbutton[0].style="border: none";
    dropdown[0].style="border: 1px solid gray; border-radius: 10px; padding: 5px;";
    dropcontent[0].style="display: block; height: 100%";
    if(newnot.length==0)
        readall[0].style="display: none";
            setTimeout(() => {
                hideall[0].style="transform: translate(0,0)";
                if(!newnot.length==0)
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
        let end = notifications.length;
        for(let i=0; i<end; i++){
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
        }, 300);
    }, 300);
    setTimeout(function(){
        let end=notifications.length;
        for(let i=0; i<end; i++){
            notifications[0].remove();
        }
    },900);

    localStorage.setItem('hidden',1);
    let end=localStorage.length-1;
    for(let i=0; i<end; i++)
        localStorage.removeItem('notification'+i);

}

function deletelocal(){
    let end=localStorage.length;
    for(let i=0; i<end; i++)
        localStorage.clear();
    window.location.reload();
}

function openmodal(){
    modalcontent.style.animation="animatetop 0.5s";
    modal.style.animation="animateopacity 0.5s";
    modal.style.display="block";
    modalcontent.style.display="block";
}

function closemodal(){
    modalcontent.style.animation="animatetop-reverse 0.5s";
    modal.style.animation="animateopacity-reverse 0.5s";
    setTimeout(() => {
        modalcontent.style.display="none";
    modal.style.display="none";
    }, 300);
}

function resetform(){
    newwrapper.style.backgroundColor="white";
    uploadedavatar="";
    uploadedpicture="";
    let avatarlabel = document.getElementById("avatarlabel");
    avatarlabel.innerHTML="Choose file";
    let picturelabel = document.getElementById("picturelabel");
    picturelabel.innerHTML="Choose file";
}



document.addEventListener('click', function handleClickOutsideBox(event) {
    if(!hidden)
    if (!dropdown[0].contains(event.target))
        rollup();
    
    if(!addbutton.contains(event.target))
    if (!modalcontent.contains(event.target))
        closemodal();
  });

  var checkbox = document.getElementById("new");
  var newwrapper = document.getElementById("newwrapper");

checkbox.addEventListener('change',function () {
    if(this.checked){
        newwrapper.style.backgroundColor="rgb(232, 240, 255)";
    }
    else{
        newwrapper.style.backgroundColor="white";
    }
});