
// show hide settings menu

// $('#menu-toggler').on('click', function(){
//     $('#menu-to-toggle').toggle()
// })

var menuToggler = document.getElementById('menu-toggler')
var menuToToggler = document.getElementById('menu-to-toggle')

menuToggler.addEventListener('click', function(){
    menuToToggler.style('display', 'block')
})



