function change(){
    let newnot = document.getElementsByClassName('new-notification');
    let dot = document.getElementsByClassName('dot');
    for(let i=0; i<3; i++)
        newnot[0].className='old-notification';
    for(let i=0; i<3; i++)
        dot[i].style="width: 0; height: 0";
        document.getElementsByClassName('read')[0].style="color: lightgray; cursor: default";
}