


let tableList = document.querySelectorAll('.ches__list-table li')
count =0
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
    console.log("bbvggvg");
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


let queen = document.querySelector('.queen')
let king = document.querySelector('.king')
let farzin = document.querySelector('.farzin')
let horse = document.querySelector('.horse')
let bishop = document.querySelector('.bishop')
let onfoot = document.querySelector('.onfoot')


// function queenfun () {
    // queen.addEventListener('click', ()=> {
    //     // console.log("aaa");
    //     queen.classList.add('green')
    //     king.classList.remove('green')
    //     farzin.classList.remove('green')
    //     bishop.classList.remove('green')
    //     horse.classList.remove('green')
    //     onfoot.classList.remove('green')



    //     tableList.forEach((e)=> {
    //         e.addEventListener('mouseout', ()=> {
    //             e.classList.remove('form1')
    //         })
    //         e.addEventListener('mouseover', ()=> {
    //             e.classList.add('moveitem')
    //             x =e.childNodes[1].textContent;
    //             y =e.childNodes[3].textContent

    //             queen.addEventListener('click', forms1(x, y))
    //             if(count==1) {
    //                 count++
    //             }else{
    //                 count=1
    //             }
    //         })
    //        e.classList.remove('moveitem')
    //     })
    // })
// }
// queenfun()


// function itemsFun() {
//     tableList.forEach((e) => {
//       e.addEventListener('mouseout', () => {
//         e.classList.remove('movitem2')
//         e.classList.remove('movItem')
//       })
//       e.addEventListener('mouseover', () => {
//         tableList.forEach((ee) => {
//           ee.classList.remove('movitem2')
//           ee.classList.remove('movItem')
//         })
//         e.classList.remove('movItem')
//         e.classList.add('movitem2')
//         textX.innerHTML = e.childNodes[1].textContent;
//         textY.innerHTML = e.childNodes[3].textContent;
//       })
//       e.classList.remove('movitem2')
//       e.classList.remove('movItem')
//     })
//   } itemsFun()


// function forms1(x, y) {
//     console.log("a");
//     tableList.forEach((item)=> {
//         console.log(item);
//         if(item.childNodes[1].textContent ==x || item.childNodes[3].textContent==y) {
//             item.classList.add('green')
//         }
//         else {
//             item.classList.remove('green')
//         }
//     })
// }forms1()
