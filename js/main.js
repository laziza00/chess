
let chessTable = document.querySelector('.ches__list-table');
let textX = document.querySelector('#x')
let textY = document.querySelector('#y')




let arr =[]

for(let i=1; i<=8; i++) {
    for(let j=1; j<=8; j++) {
        let obj ={
            y: i,
            x:j
        }
        arr.push(obj)
    }
}

    
arr.forEach((item, index )=> {

        let li = document.createElement('li')
  
        li.classList.add('a' + item.x, 'b' + item.y, 'ches__item');
        // li.textContent = item.x + "." +item.y;
    
        if( (item.x+item.y) %2==0) {

            li.style.backgroundImage = 'url(../images/wood.jpg)'
        }
        else {
            li.style.backgroundImage = 'url(../images/imags.jpeg)'
        }
        li.addEventListener('mouseover', ()=> {
            textX.textContent = `x=${item.x}`
            textY.textContent = `y=${item.y}`
        })
     
        chessTable.appendChild(li);
})


let tableList = document.querySelectorAll('.ches__item')


let queen = document.querySelector('.queen')
let king = document.querySelector('.king')
let farzin = document.querySelector('.farzin')
let horse = document.querySelector('.horse')
let bishop = document.querySelector('.bishop')
let onfoot = document.querySelector('.onfoot')


let x, y

tableList.forEach((item,index)=> {

    queen.addEventListener('click', ()=> {

        queen.classList.add('green')
        onfoot.classList.remove('green')
        king.classList.remove('green')
        farzin.classList.remove('green')
        bishop.classList.remove('green')
        horse.classList.remove('green')


        item.addEventListener('mouseover', (el)=> {

            let xCor = el.target.classList[0].split('')[1]
            let yCor = el.target.classList[1].split('')[1]
         
           

tableList.forEach(idx => {
        let xxx = idx.classList[0].split('')[1]
        let yyy = idx.classList[1].split('')[1];

        if(xxx==((xCor-0)-1) && yyy==yCor ||
           xxx==((xCor-0)-1) && yyy==((yCor-0)-1) ||
           xxx==xCor && yyy==((yCor-0)-1) ||
           xxx==((xCor-0)+1) && yyy==((yCor-0)-1) ||
           xxx==((xCor-0)+1) && yyy==yCor ||
           xxx==((xCor-0)+1) && yyy==((yCor-0)+1)||
           xxx==xCor && yyy==((yCor-0)+1) ||
           xxx==((xCor-0)-1) && yyy==((yCor-0)+1)) {

            idx.classList.add('green')
        }else {
            idx.classList.remove('green')
        }
            
            })
       
          })
    })


    bishop.addEventListener('click', ()=> {

        bishop.classList.add('green')
        onfoot.classList.remove('green')
        king.classList.remove('green')
        farzin.classList.remove('green')
        queen.classList.remove('green')
        horse.classList.remove('green')
        item.addEventListener('mouseover', (el)=> {

            let xCor = el.target.classList[0].split('')[1]
            let yCor = el.target.classList[1].split('')[1]
         

tableList.forEach(idx => {
        let xxx = idx.classList[0].split('')[1]
        let yyy = idx.classList[1].split('')[1];
   
        if(xxx==((xCor-0)+1) && yyy==((yCor-0)-1) ||
           xxx==((xCor-0)+2) && yyy==((yCor-0)-2) ||
           xxx==((xCor-0)+3) && yyy==((yCor-0)-3) ||
           xxx==((xCor-0)+4) && yyy==((yCor-0)-4) ||
           xxx==((xCor-0)+5) && yyy==((yCor-0)-5) ||
           xxx==((xCor-0)+6) && yyy==((yCor-0)-6) ||
           xxx==((xCor-0)+7) && yyy==((yCor-0)-8) ||
           xxx==((xCor-0)+8) && yyy==((yCor-0)-8) ||
           xxx==((xCor-0)+1) && yyy==((yCor-0)+1) ||
           xxx==((xCor-0)+2) && yyy==((yCor-0)+2) ||
           xxx==((xCor-0)+3) && yyy==((yCor-0)+3) ||
           xxx==((xCor-0)+4) && yyy==((yCor-0)+4) ||
           xxx==((xCor-0)+5) && yyy==((yCor-0)+5) ||
           xxx==((xCor-0)+6) && yyy==((yCor-0)+6) ||
           xxx==((xCor-0)+7) && yyy==((yCor-0)+7) ||
           xxx==((xCor-0)+8) && yyy==((yCor-0)+8) ||
           xxx==((xCor-0)-1) && yyy==((yCor-0)+1) ||
           xxx==((xCor-0)-2) && yyy==((yCor-0)+2) ||
           xxx==((xCor-0)-3) && yyy==((yCor-0)+3) ||
           xxx==((xCor-0)-4) && yyy==((yCor-0)+4) ||
           xxx==((xCor-0)-5) && yyy==((yCor-0)+5) ||
           xxx==((xCor-0)-6) && yyy==((yCor-0)+6) ||
           xxx==((xCor-0)-7) && yyy==((yCor-0)+7) ||
           xxx==((xCor-0)-8) && yyy==((yCor-0)+8) ||
           xxx==((xCor-0)-1) && yyy==((yCor-0)-1) ||
           xxx==((xCor-0)-2) && yyy==((yCor-0)-2) ||
           xxx==((xCor-0)-3) && yyy==((yCor-0)-3) ||
           xxx==((xCor-0)-4) && yyy==((yCor-0)-4) ||
           xxx==((xCor-0)-5) && yyy==((yCor-0)-5) ||   
           xxx==((xCor-0)-6) && yyy==((yCor-0)-6) ||
           xxx==((xCor-0)-7) && yyy==((yCor-0)-7) ||
           xxx==((xCor-0)-8) && yyy==((yCor-0)-8)) {

            idx.classList.add('green')
        }else {
            idx.classList.remove('green')
        }
            
            })
       
          })
    })


    horse.addEventListener('click', ()=> {

        horse.classList.add('green')
        farzin.classList.remove('green')
        king.classList.remove('green')
        queen.classList.remove('green')
        onfoot.classList.remove('green')
        bishop.classList.remove('green')

        item.addEventListener('mouseover', (el)=> {

            let xCor = el.target.classList[0].split('')[1]
            let yCor = el.target.classList[1].split('')[1]
         

tableList.forEach(idx => {
        let xxx = idx.classList[0].split('')[1]
        let yyy = idx.classList[1].split('')[1];

        if(xxx==((xCor-0)+1) && yyy==((yCor-0)-2) ||
           xxx==((xCor-0)+2) && yyy==((yCor-0)-1) ||
           xxx==((xCor-0)+2) && yyy==((yCor-0)+1) ||
           xxx==((xCor-0)+1) && yyy==((yCor-0)+2) ||
           xxx==((xCor-0)-1) && yyy==((yCor-0)+2) ||
           xxx==((xCor-0)-2) && yyy==((yCor-0)+1) ||
           xxx==((xCor-0)-2) && yyy==((yCor-0)-1) ||
           xxx==((xCor-0)-1) && yyy==((yCor-0)-2)) {

            idx.classList.add('green')
        }else {
            idx.classList.remove('green')
        }
            
            })
       
          })
    })
    farzin.addEventListener('click', ()=> {

        farzin.classList.add('green')
        horse.classList.remove('green')
        king.classList.remove('green')
        queen.classList.remove('green')
        onfoot.classList.remove('green')
        bishop.classList.remove('green')

        item.addEventListener('mouseover', (el)=> {

            let xCor = el.target.classList[0].split('')[1]
            let yCor = el.target.classList[1].split('')[1]

tableList.forEach(idx => {
        let xxx = idx.classList[0].split('')[1]
        let yyy = idx.classList[1].split('')[1];

        if(xxx==xCor && yyy==((yCor-0)-1) ||
           xxx==xCor && yyy==((yCor-0)-2) ||
           xxx==xCor && yyy==((yCor-0)-3) ||
           xxx==xCor && yyy==((yCor-0)-4) ||
           xxx==xCor && yyy==((yCor-0)-5) ||
           xxx==xCor && yyy==((yCor-0)-6) ||
           xxx==xCor && yyy==((yCor-0)-7) ||
           xxx==xCor && yyy==((yCor-0)-8) ||
           xxx==((xCor-0)+1) && yyy==yCor ||
           xxx==((xCor-0)+2) && yyy==yCor ||
           xxx==((xCor-0)+3) && yyy==yCor ||
           xxx==((xCor-0)+4) && yyy==yCor ||
           xxx==((xCor-0)+5) && yyy==yCor ||
           xxx==((xCor-0)+6) && yyy==yCor ||
           xxx==((xCor-0)+7) && yyy==yCor ||
           xxx==((xCor-0)+8) && yyy==yCor ||
           xxx==((xCor-0)-1) && yyy==yCor ||
           xxx==((xCor-0)-2) && yyy==yCor ||
           xxx==((xCor-0)-3) && yyy==yCor ||
           xxx==((xCor-0)-4) && yyy==yCor ||
           xxx==((xCor-0)-5) && yyy==yCor ||
           xxx==((xCor-0)-6) && yyy==yCor ||
           xxx==((xCor-0)-7) && yyy==yCor ||
           xxx==((xCor-0)-8) && yyy==yCor ||
           xxx==xCor && yyy==((yCor-0)+1) ||
           xxx==xCor && yyy==((yCor-0)+2) ||
           xxx==xCor && yyy==((yCor-0)+3) ||
           xxx==xCor && yyy==((yCor-0)+4) ||
           xxx==xCor && yyy==((yCor-0)+5) ||
           xxx==xCor && yyy==((yCor-0)+6) ||
           xxx==xCor && yyy==((yCor-0)+7) ||
           xxx==xCor && yyy==((yCor-0)+8) ) {

            idx.classList.add('green')
        }else {
            idx.classList.remove('green')
        }
    
            })
       
          })
    })


    king.addEventListener('click', ()=> {

        king.classList.add('green')
        horse.classList.remove('green')
        farzin.classList.remove('green')
        queen.classList.remove('green')
        onfoot.classList.remove('green')
        bishop.classList.remove('green')

        item.addEventListener('mouseover', (el)=> {

            let xCor = el.target.classList[0].split('')[1]
            let yCor = el.target.classList[1].split('')[1]
         
     

tableList.forEach(idx => {
        let xxx = idx.classList[0].split('')[1]
        let yyy = idx.classList[1].split('')[1];
  
        if(xxx==xCor && yyy==((yCor-0)-1) ||
           xxx==xCor && yyy==((yCor-0)-2) ||
           xxx==xCor && yyy==((yCor-0)-3) ||
           xxx==xCor && yyy==((yCor-0)-4) ||
           xxx==xCor && yyy==((yCor-0)-5) ||
           xxx==xCor && yyy==((yCor-0)-6) ||
           xxx==xCor && yyy==((yCor-0)-7) ||
           xxx==xCor && yyy==((yCor-0)-8) ||
           xxx==((xCor-0)+1) && yyy==yCor ||
           xxx==((xCor-0)+2) && yyy==yCor ||
           xxx==((xCor-0)+3) && yyy==yCor ||
           xxx==((xCor-0)+4) && yyy==yCor ||
           xxx==((xCor-0)+5) && yyy==yCor ||
           xxx==((xCor-0)+6) && yyy==yCor ||
           xxx==((xCor-0)+7) && yyy==yCor ||
           xxx==((xCor-0)+8) && yyy==yCor ||
           xxx==((xCor-0)-1) && yyy==yCor ||
           xxx==((xCor-0)-2) && yyy==yCor ||
           xxx==((xCor-0)-3) && yyy==yCor ||
           xxx==((xCor-0)-4) && yyy==yCor ||
           xxx==((xCor-0)-5) && yyy==yCor ||
           xxx==((xCor-0)-6) && yyy==yCor ||
           xxx==((xCor-0)-7) && yyy==yCor ||
           xxx==((xCor-0)-8) && yyy==yCor ||
           xxx==xCor && yyy==((yCor-0)+1) ||
           xxx==xCor && yyy==((yCor-0)+2) ||
           xxx==xCor && yyy==((yCor-0)+3) ||
           xxx==xCor && yyy==((yCor-0)+4) ||
           xxx==xCor && yyy==((yCor-0)+5) ||
           xxx==xCor && yyy==((yCor-0)+6) ||
           xxx==xCor && yyy==((yCor-0)+7) ||
           xxx==xCor && yyy==((yCor-0)+8) ||
           xxx==((xCor-0)-1) && yyy==yCor ||
           xxx==((xCor-0)-1) && yyy==((yCor-0)-1) ||
           xxx==xCor && yyy==((yCor-0)-1) ||
           xxx==((xCor-0)+1) && yyy==((yCor-0)-1) ||
           xxx==((xCor-0)+1) && yyy==yCor ||
           xxx==((xCor-0)+1) && yyy==((yCor-0)+1)||
           xxx==xCor && yyy==((yCor-0)+1) ||
           xxx==((xCor-0)-1) && yyy==((yCor-0)+1) ||
           xxx==((xCor-0)+1) && yyy==((yCor-0)-1) ||
           xxx==((xCor-0)+2) && yyy==((yCor-0)-2) ||
           xxx==((xCor-0)+3) && yyy==((yCor-0)-3) ||
           xxx==((xCor-0)+4) && yyy==((yCor-0)-4) ||
           xxx==((xCor-0)+5) && yyy==((yCor-0)-5) ||
           xxx==((xCor-0)+6) && yyy==((yCor-0)-6) ||
           xxx==((xCor-0)+7) && yyy==((yCor-0)-8) ||
           xxx==((xCor-0)+8) && yyy==((yCor-0)-8) ||
           xxx==((xCor-0)+1) && yyy==((yCor-0)+1) ||
           xxx==((xCor-0)+2) && yyy==((yCor-0)+2)  ||
           xxx==((xCor-0)+3) && yyy==((yCor-0)+3) ||
           xxx==((xCor-0)+4) && yyy==((yCor-0)+4) ||
           xxx==((xCor-0)+5) && yyy==((yCor-0)+5) ||
           xxx==((xCor-0)+6) && yyy==((yCor-0)+6) ||
           xxx==((xCor-0)+7) && yyy==((yCor-0)+7) ||
           xxx==((xCor-0)+8) && yyy==((yCor-0)+8) ||
           xxx==((xCor-0)-1) && yyy==((yCor-0)+1) ||
           xxx==((xCor-0)-2) && yyy==((yCor-0)+2) ||
           xxx==((xCor-0)-3) && yyy==((yCor-0)+3) ||
           xxx==((xCor-0)-4) && yyy==((yCor-0)+4) ||
           xxx==((xCor-0)-5) && yyy==((yCor-0)+5) ||
           xxx==((xCor-0)-6) && yyy==((yCor-0)+6) ||
           xxx==((xCor-0)-7) && yyy==((yCor-0)+7) ||
           xxx==((xCor-0)-8) && yyy==((yCor-0)+8) ||
           xxx==((xCor-0)-1) && yyy==((yCor-0)-1) ||
           xxx==((xCor-0)-2) && yyy==((yCor-0)-2) ||
           xxx==((xCor-0)-3) && yyy==((yCor-0)-3) ||
           xxx==((xCor-0)-4) && yyy==((yCor-0)-4) ||
           xxx==((xCor-0)-5) && yyy==((yCor-0)-5) ||   
           xxx==((xCor-0)-6) && yyy==((yCor-0)-6) ||
           xxx==((xCor-0)-7) && yyy==((yCor-0)-7) ||
           xxx==((xCor-0)-8) && yyy==((yCor-0)-8)) {

            idx.classList.add('green')
        }else {
            idx.classList.remove('green')
        }
    
            })
       
          })
    })

onfoot.addEventListener('click', ()=> {

    onfoot.classList.add('green')
    farzin.classList.remove('green')
    king.classList.remove('green')
    queen.classList.remove('green')
    bishop.classList.remove('green')
    horse.classList.remove('green')

    item.addEventListener('mouseover', (el)=> {

        let xCor = el.target.classList[0].split('')[1]
        let yCor = el.target.classList[1].split('')[1]
     
      

tableList.forEach(idx => {
    let xxx = idx.classList[0].split('')[1]
    let yyy = idx.classList[1].split('')[1];
  
    if(yCor==6 || yCor==2 || yCor==3 || yCor==4 || yCor==5 && xCor==xCor) {
        
        if(xxx==xCor && yyy==((yCor-0)-1)) {
            idx.classList.add('green')
        }
        else {
            idx.classList.remove('green')
        }
            
    }    
    if(yCor==7 && xCor==xCor) {
     
        if(xxx==xCor && yyy==((yCor-0)-1) ||
           xxx==xCor && yyy==((yCor-0)-2)) {
            idx.classList.add('green')
        }
        else {
            idx.classList.remove('green')
        }
            
    }
    if(yCor==8 || yCor==1 && xCor==xCor){
        if(xxx==xCor && yyy==yCor) {
            idx.classList.add('green')
        }
        else {
            idx.classList.remove('green')
        }
    }
    
        })
   
      })
})


chessTable.addEventListener("mouseout", () => {
    tableList.forEach((element) => {
        element.classList.remove('green');
        textX.textContent = `x = 0`;
        textY.textContent = `y = 0`;
    })
})

})
let chesBoard = document.querySelector('.ches__board')
let dButton = document.querySelector('.ches__three-d');


let count =1
// dButton.addEventListener('click', ()=> {

//     if(count==1) {
//         dButton.textContent= `2D`
//         chesBoard.classList.add('anim3D');
//         count++
//     }else {
//         chesBoard.classList.remove('anim3D');
//         dButton.textContent= `3D`
//     }
// })

