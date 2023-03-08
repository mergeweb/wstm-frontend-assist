$(document).ready(function() {
var rand = Math.floor((Math.random() * 2) + 1);
console.log("rand: "+rand);
if (rand==1){
$("#IGPost1").hide();
$("#IGPost2").hide();
$("#IGPost3").hide();
$("#IGPost4").hide();
}else if (rand==2){
$("#IGPost5").hide();
$("#IGPost6").hide();
$("#IGPost7").hide();
$("#IGPost8").hide();
}
});