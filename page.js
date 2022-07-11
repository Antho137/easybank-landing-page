function requestInvite() { 
    alert("Thanks for request an invitation.\nAs soon as, we'll contact you.\n\neasybank Team");
}

function createEventListeners() {
    document.getElementById("request").addEventListener("click", requestInvite, false);
    document.getElementById("request1").addEventListener("click", requestInvite, false);
    document.getElementById("request2").addEventListener("click", requestInvite, false);
}

window.addEventListener("load", createEventListeners, false);


$('.nav-link').click(function() {
    $('.nav-link').removeClass("active");
    $('li.nav-item.active').removeClass("active");
    $(this).addClass("active"); 
})