
$(document).ready(function() {
    // toggle settings menu
    $('#menu-toggler').on('click', function(){
        $('#menu-to-toggle').toggle()
    })

    // deleting cards
    $('ul').on('click','.card-delete-button', function(e){
        $(this).parent().fadeOut(200, function(){
            $(this).remove()
        })
        e.stopPropagation()
    })
    // adding cards
    $('.new-item-input').keypress(function(e){
        if(e.which === 13){
            var newCard = $(this).val()
            $(this).val('')
            $(this).next().prepend("<li><span class='card-delete-button'><i class='fas fa-trash'></i></span> "+newCard+"</li>")
        }
    })
    // deleting list
    $('.list-delete').on('click', function(e){
        $(this).parent().parent().parent().fadeOut(200, function(){
            $(this).remove()
        })
        e.stopPropagation()
    })
    // adding a list
    



    // dark theme toggle
    $('#checkbox').on('change', function(){
        $(document.body).toggleClass('dark')
    })










})
