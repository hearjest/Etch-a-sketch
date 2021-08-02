let LxW=Number(document.querySelector('#inpt').value);
let tile;
function generateTiles(){
    for(let i=0;i<(LxW*LxW);i++){
        tile=document.createElement('div');
        tile.style.cssText=`height:${100/LxW}%;width:${100/LxW}%;`;
        tile.classList.add('tile');
        document.querySelector('#container').appendChild(tile);
    }
}


function addCss(){
    tile=document.querySelectorAll('.tile');
    for(let i=0;i<tile.length;i++){
        tile[i].addEventListener('mouseover',function(){
            tile[i].style.cssText=`background-color:#A64484;height:${100/LxW}%;width:${100/LxW}%;`;
        });
    }
}


let btn=document.querySelector('#btn');
btn.addEventListener('click',function(){
    LxW=Number(document.querySelector('input').value);
    tile=document.querySelectorAll('.tile');
    for(let i=0;i<tile.length;i++){
        tile[i].remove();
    }
    generateTiles();
    addCss();
});

generateTiles();
addCss();