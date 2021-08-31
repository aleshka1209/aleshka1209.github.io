let modal = document.getElementById("myModals"),
    btn = document.getElementById("myButton"),
    span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display = "block";
};

span.onclick = function(){
    modal.style.display = "none";
};

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
};
