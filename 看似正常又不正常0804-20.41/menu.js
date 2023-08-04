// https://youtu.be/rm5lSQXoO4I?t=2100 JS教學部分
// $(document).ready(function () {

//     $('#collapse').on('click', function () {

//         $('#menu').toggleClass('active');
//     });

// })
console.log(document.querySelector("#collapse"))
document.querySelector("#collapse").addEventListener("click",
    function () {
        console.log(document.querySelector("#menu").classList)
        document.querySelector("#menu").classList.toggle('menu-active');
        document.querySelector("#main").classList.toggle('main-active');
    }
);