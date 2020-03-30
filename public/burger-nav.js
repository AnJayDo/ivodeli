document.getElementById("back-to-top").onclick = function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
};
document.onscroll = function () {
    if (scrollY > 500) {
        document.getElementById("burger-nav").style.display = "inline";
    } else document.getElementById("burger-nav").style.display = "none";
    if(document.getElementsByClassName('navigator-box-list')[0].style.display=="block") {
        document.getElementsByClassName('navigator-box-list')[0].style.display="none";
    }
}
document.getElementById("burger-nav").onclick = function() {
    if(document.getElementsByClassName('navigator-box-list')[0].style.display=="block") {
        document.getElementsByClassName('navigator-box-list')[0].style.display="none";
    }
    else document.getElementsByClassName('navigator-box-list')[0].style.display="block";
}