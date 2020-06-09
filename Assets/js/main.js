
$(window).on('load', function() {
    // toggle settings menu
    $('body').on('click', '#menu-toggler', function(){
        $('#menu-to-toggle').toggle()
    })

    // deleting cards
    $('body').on('click','.card-delete-button', function(e){
        $(this).parent().fadeOut(200, function(){
            $(this).remove()
        })
        e.stopPropagation()
    })
    // adding cards
    $('body').on('keypress', '.new-item-input', function(e){
        if(e.which === 13){
            var newCard = $(this).val()
            $(this).val('')
            $(this).next().prepend("<li><span class='card-delete-button'><i class='fas fa-trash'></i></span> "+newCard+"</li>")
        }
    })
    // deleting list
    $('body').on('click','.list-delete', function(e){
        $(this).parent().parent().parent().fadeOut(200, function(){
            $(this).remove()
        })
        e.stopPropagation()
    })
    // adding a list
    $('body').on('click','#add-new-list', function(){
        var newListTitle = $('#new-list-title').val()
        
        if ( newListTitle == "" ){
            newListTitle = "No title"
            var newList = '<div class="list"><div class="list-container"><div id="list-header"><h3 class="list-title">' + newListTitle + '</h3><i class="fas fa-window-close list-delete"></i></div><div id="list-content"><input type="text" class="new-item-input" placeholder="Add another card"><ul></ul></div></div></div>'
            $(this).parent().before(newList)
            $('#new-list-title').val("")
        }else{
            var newList = '<div class="list"><div class="list-container"><div id="list-header"><h3 class="list-title">' + newListTitle + '</h3><i class="fas fa-window-close list-delete"></i></div><div id="list-content"><input type="text" class="new-item-input" placeholder="Add another card"><ul></ul></div></div></div>'
            $(this).parent().before(newList)
            $('#new-list-title').val("")
        }
    })
    // dark theme toggle
    $('#checkbox').on('change', function(){
        $(document.body).toggleClass('dark')
    })
})