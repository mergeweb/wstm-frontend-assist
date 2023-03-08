window.onload = function() {
  if ((navigator.userAgent.search("Edge") >= 0)){
    console.log("Unsupported");
    $("p").append(" </br> </br> <strong>You are currently using an unsupported browser. Please make sure your donation is recorded properly by using a supported browser (Chrome, Firefox, or Safari).</strong>");
    $("p").remove("#browser-warning-message");
  }
}