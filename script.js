function read(){
    let newnot = document.getElementsByClassName('notification new');
    let dot = document.getElementsByClassName('dot');
    for(let i=0; i<3; i++)
        newnot[0].className='notification old';
    for(let i=0; i<3; i++)
        dot[i].style="opacity: 0";
    document.getElementsByClassName('value')[0].style="opacity: 0";
        document.getElementsByClassName('read')[0].style="color: lightgray; cursor: default;";
}