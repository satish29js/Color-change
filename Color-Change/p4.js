// const buttons = document.querySelectorAll('.button');
// const body= document.querySelector('body')

// buttons.forEach(function(button){
//     // console.log(button)
//     button.addEventListener('click', function(e){
//            console.log(e)
//            console.log(e.target)
//            if(e.target.id === 'gray'){
//             body.style.background=e.target.id
//            }
//            else if(e.target.id === 'white'){
//             body.style.background=e.target.id
//            }
//            else if(e.target.id === 'blue'){
//             body.style.background=e.target.id
//            }
//           else if(e.target.id === 'yellow'){
//             body.style.background=e.target.id
//            }
//     })
// })


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.id==='gray'){
            body.style.background=e.target.id
        }
         else if(e.target.id==='white'){
            body.style.background=e.target.id
        }
         else if(e.target.id==='blue'){
            body.style.background=e.target.id
        }
         else if(e.target.id==='yellow'){
            body.style.background=e.target.id
        }
        // else(e.target === ''){
        //     body.style.background='red';
        // }
    })
    
})