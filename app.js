$(document).ready(function() {

    function CheckingForm(){
       var text=$('.box').find('textarea#tekst');
       var formName=$('.box').find('span.formName');

        if(text.val().length>0)
        {
            formName.hide();
        }

        else{
            formName.show();
        }
    }

    $('button').on('click', function(){
        CheckingForm();

    });





});
