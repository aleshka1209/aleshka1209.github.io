// let modal = document.getElementById("myModals"),
//     btn = document.getElementById("myButton"),
//     span = document.getElementsByClassName("close")[0];

// btn.onclick = function(){
//     modal.style.display = "block";
// };

// span.onclick = function(){
//     modal.style.display = "none";
// };

// window.onclick = function(event){
//     if(event.target == modal){
//         modal.style.display = "none";
//     }
// };

$(document).ready(function(){
    $('#myButton').on('click',function(event){
        event.preventDefault();
        $('#myModals').fadeIn();
    });
    $('.close').on('click', function(event){
        event.preventDefault();
        $('#myModals').fadeOut();
    });
    //modal 
    $("#done").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var fail = "";
        if(name.length < 3) fail = 'Имя не меньше 3 слов';
        else if(email.split('@').length - 1 == 0 || email.split('.').length - 1 == 0) fail = "Вы ввели не корректный email";
        else if(phone.length <= 10) fail = "Вы ввели не корректный номер телефона";
        if(fail != ""){
            $('#messageShow').html(fail + "<div class='clear'></div>");
            $('#messageShow').show();
            return false;
        }
    });
});