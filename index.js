// let string= "";

// let buttons= document.querySelectorAll('.digit')
// Array.from(buttons).forEach((items)=>{
//     items.addEventListener('click', (e)=>{
// console.log(e.target.innerHTML)

//         if(e.target.innerHTML == '='){
//             string = eval(string)
//             // console.log("fdgdfg")
//             document.querySelector('input').value= string;

//         }
//         else if(e.target.innerHTML== 'AC'){
//             string=""
//             document.querySelector('input').value= string;

//         }
//         else {
//         string = string+ e.target.innerHTML;
//         document.querySelector('input').value=string;
//         }
//     })
    
// })

let result= document.getElementById('result');

function insertNumber(number){
    result.value += number;
    console.log(result.value)
}

function clearResult(){
    result.value=""
}

function calculate(){
    result.value= eval(result.value)
}