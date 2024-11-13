


// function changeText(e){
//     console.log(e);
// let para = document.getElementById('para')
// para.textContent = 'Tushar Mukherjee'
// }

// let para = document.getElementById('para')

// para.addEventListener('click',changeText
//     // e.preventDefault()
// )
// para.removeEventListener('click',changeText)

// let anchor = document.getElementById('fanchor');

// anchor.addEventListener('click',(e)=>{
//     e.preventDefault();
//     anchor.textContent = "You can change bad padai karlo!"
// })

// const paras = document.querySelector('p');
function aleartPara(e){
    if(e.target.nodeName === 'SPAN'){
        alert("You have clicked : " + e.target.textContent)
    }
}

// for(let i=0;i<paras.length;i++){
   
//     let para = paras[i];
//     para.addEventListener('click',aleartPara);
// }


let mydiv = document.getElementById('wrapper')

mydiv.addEventListener('click',(e)=>{
    // console.log(e.target.tagName)
})



