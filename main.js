// way no 01

// // execute script after page load 
// window.onload = function digital_fn(){
//     // toggle button 
//     let toggle = document.querySelector('.toggle-btn')
//     let collapse = document.querySelector('.collapse')
//     toggle.addEventListener('click',function(event){
//         collapse.classList.toggle('active')
//     })
// }

// way no 02 

const btn = document.querySelector('.toggle-btn');
const nav = document.querySelector('.collapse');
btn.addEventListener('click', () => {
    nav.classList.toggle('active');
})

