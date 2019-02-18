/*
  Scarlet - Index.js
   This file automatically generates the links in the toolbar
   and the cards for the main page.
*/

var work = document.getElementById("portfolioItemContainer");
var workRequest = new XMLHttpRequest();

var link = document.getElementById("socialLinkContent");
var linkRequest = new XMLHttpRequest();

linkRequest.open("GET", "json/links.json", true);
linkRequest.onreadystatechange = function () {
    if (linkRequest.readyState === 4) {
        if (linkRequest.status === 200 || linkRequest.status == 0) {
            var html = "";
            JSON.parse(linkRequest.responseText).forEach(function (link) {
                console.log(link.name);
                html += "<div class=\"links waves-effect\"><a href=" + link.url + " class=\"black-text\" target=\"_blank\"><i class=\"link_icon mdi mdi-" + link.icon + "\" style=\"color: " + link.color + "\"></i></a></div>";
            });
            link.innerHTML = html;
        }
    }
};
linkRequest.send(null);

workRequest.open("GET", "json/items.json", true);
workRequest.onreadystatechange = function () {
    if (workRequest.readyState === 4) {
        if (workRequest.status === 200 || workRequest.status == 0) {
            var html = "";
            JSON.parse(workRequest.responseText).forEach(function (work) {
                console.log(work.name);
                html += "<div class=\"col s12 m6 l4 xl3\"><div class=\"card hoverable\"><div class=\"card-image waves-effect waves-block waves-light\"><img src=" + work.image + "></div><div class=\"card-content\"><span class=\"card-title grey-text text-darken-4\">" + work.name + "<a href=" + work.link + " target=\"_blank\" style=\"color: #000000\"><i class=\"material-icons right\">launch</i></a></span><p><span class=\"card-blurb\">" + work.description + "</span></p></div><div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">" + work.name + "<i class=\"material-icons right\">close</i></span><p></p></div></div></div>";
            });
            work.innerHTML = html;
        }
    }
};
workRequest.send(null);
