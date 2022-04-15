


let tableList = document.querySelectorAll('.ches__item')
count =0
let chessTable = document.querySelector('.ches__list-table');
let textX = document.querySelector('#x')
let textY = document.querySelector('#y')




let arr =[]

for(let i=1; i<=8; i++) {
    for(let j=1; j<=8; j++) {
        let obj ={
            x: i,
            y:j
        }
        arr.push(obj)
    }
}

    
arr.forEach((item, index )=> {

        let li = document.createElement('li')
        li.className = "ches__item";
        li.classList.add('a' +item.x, 'b' +item.y);
        li.textContent = item.x + "." +item.y;
    
        if( (item.x+item.y) %2==0) {
            li.style.backgroundImage = 'url(../images/wood.jpg)'
            // console.log(li);
        }
        else {
            li.style.backgroundImage = 'url(../images/imags.jpeg)'
        }
        li.addEventListener('mouseover', (e)=> {
         
                textX.textContent = `x = ${item.y}`
                textY.textContent = `y = ${item.x}`
      
        })
        chessTable.appendChild(li);

})
console.log(tableList);

tableList.forEach((item,index)=> {
    item.addEventListener('mouseover', ()=> {
        let xCor = item.classList[0];
        let yCor = item.classList[1];

        let xCors = document.querySelectorAll(`.${xCor}`)
        let yCors = document.querySelectorAll(`.${yCor}`)
        // console.log(xCors);
        xCors.forEach(element => {
            element.classList.add('green')
        })
        yCors.forEach(element => {
            element.classList.add('green')
        })
        item.classList.add('red')
        
    })
    item.addEventListener('mouseout', ()=> {
        let xCor = item.classList[0];
        let yCor = item.classList[1];

        let xCors = document.querySelectorAll(`.${xCor}`)
        let yCors = document.querySelectorAll(`.${yCor}`)
        // console.log(xCors);
        xCors.forEach(element => {
            element.classList.add('white')
        })
        yCors.forEach(element => {
            element.classList.add('white')
        })
        item.classList.add('white')
        // console.log(item.classList[0]);
    })
})



function queenfun () {
    queen.addEventListener('click', ()=> {
        queen.classList.add('green')
        king.classList.remove('green')
        farzin.classList.remove('green')
        bishop.classList.remove('green')
        horse.classList.remove('green')
        onfoot.classList.remove('green')



        tableList.forEach((e)=> {
            e.addEventListener('mouseover', ()=> {
                e.classList.add('moveitem')
                x =e.childNodes[1].textContent;
                y =e.childNodes[3].textContent
                queen.addEventListener('click', forms1(x, y))
                if(count==1) {
                    count++
                }else{
                    count=1
                }
            })
           
        })
    })
}
queenfun()
function forms1(x, y) {
    tableList.forEach((item)=> {
        if(item.childNodes[1].textContent ==x || item.childNodes[3].textContent==y) {
            item.classList.add('green')
        }
        else {
            item.classList.remove('green')
        }
    })
}forms1()
