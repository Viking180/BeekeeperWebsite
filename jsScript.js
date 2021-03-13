function openPage(link){
    window.location.href = link;
}

function setURL(url){
    document.getElementById('iframe').src = url;
    resizeIframe();
}

function resizeIframe(){
    var iframe = document.getElementById("iframe");
    console.log(iframe.contentWindow.document.body.offsetHeight);
    iframe.style.height = (iframe.contentWindow.document.body.offsetHeight) + "px";
}