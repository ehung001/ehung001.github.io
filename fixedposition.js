var buttonimages = document.getElementByID("buttonimages");
var originOffsetY = buttonimages.offsetTop;
function onScroll(e) {
    window.scrollY >= originOffsetY ? buttonimages.position = "fixed":
    buttonimages.style.position="absolute";
}
document.addEventListener('scroll', onScroll);

var nav = document.getElementByID("nav");
var originOffsetY = nav.offsetTop;
function onScroll(e) {
    window.scrollY >= originOffsetY ? nav.position = "fixed":
    nav.style.position="absolute";
}
document.addEventListener('scroll', onScroll);