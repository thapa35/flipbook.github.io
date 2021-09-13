let pages = document.getElementsByClassName("pages");
let portW;
let portH;
let i=0;
let j=0;
let k=0;
let audio = new Audio("fly.wav");
let property;
let flipbox = document.getElementById("flipbox");
let next = document.getElementById("next");
let table=document.getElementById("table");
let previous = document.getElementById("previous");
if (innerWidth>innerHeight){
    portW = innerHeight * 25/100;
    portH = innerHeight * 50/100;
}
else {
    if(innerWidth==innerHeight){
        portW = innerHeight * 25/100;
        portH = innerHeight * 50/100;
    }
    else {
        portW = innerWidth * 25/100;
        portH = innerWidth * 50/100;
    }
}
pages = Array.from(pages);
while (i<pages.length){
    pages[i].setAttribute("style",`width: ${portW}px;height: ${portH}px;display: flex;justify-content: center;align-items: center;`);
    property = `width: ${portW}px;height: ${portH}px;display: flex;justify-content: center;align-items: center;`;
    k++;
    i++;
}
table.setAttribute("style",`width: ${innerWidth}px;height: ${innerHeight}px;`);
previous.innerText = "<";
previous.setAttribute("style",`width: ${portW}px;height: ${portH}px;display: flex;justify-content: center;align-items: center;`);
flipbox.setAttribute("style",`width: ${portW}px;height: ${portH}px;display: flex;justify-content: center;align-items: center;`);
next.innerText = ">";
next.setAttribute("style",`width: ${portW}px;height: ${portH}px;display: flex;justify-content: center;align-items: center;`);
next.addEventListener("click",()=>{
if (j!=pages.length-1){
pages[j].setAttribute("style",`width: ${portW}px;height: ${portH}px;display: flex;justify-content: center;align-items: center;transform: translateY(${-innerHeight/2-portH}px);`);
j++;
audio.pause();
audio.play();
}
});
previous.addEventListener("click",()=>{
if (j!=0){
j--;
pages[j].setAttribute("style",`width: ${portW}px;height: ${portH}px;display: flex;justify-content: center;align-items: center;transform: translateY(${innerHeight/2-portH}px);`);
audio.pause();
audio.play();
}
});

