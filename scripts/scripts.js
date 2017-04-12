/* Set the width of the side navigation to 250px */
document.getElementById("sidebar").style.marginLeft = "0px";
document.getElementById("content").style.marginLeft = "205px";

function openNav() {
    if (document.getElementById("sidebar").style.marginLeft == "0px") {
        document.getElementById("sidebar").style.marginLeft = "-205px";
        document.getElementById("content").style.marginLeft = "0px";
    } else {
        document.getElementById("sidebar").style.marginLeft = "0px";
        document.getElementById("content").style.marginLeft = "205px";
    }
    // document.getElementById("sidebar").style.marginLeft = "0px";
}