$(document).ready(function(){
    let fonte = 14
    $('#fontemais').click(function(){
        if(fonte<25){
            $('body').css({'font-size': ++fonte +'px'})
        }
    })
    $('#fontemenos').click(function(){
        if(fonte>14){
            $('body').css({'font-size': --fonte +'px'})
        }
    })
})