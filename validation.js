$(function(){

$("#signupForm").validate({
rule:{
    email:{
        reguired:true,
        email:true
    },
    firstname:{
        required:true,
        nowhitespace:true,
        lettersonly:true
    },
    lastname:{
        required:true,
        nowhitespace:true,
         lettersonly:true
    },
    message:{
        required:true,
    },
    messages: {
        email: {
          required: 'Please enter an email address.',
          email: 'Please enter a <em>valid</em> email address.',
        }
    }
}

});

});