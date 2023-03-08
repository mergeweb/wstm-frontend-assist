$(document).ready(function() {
var rand = Math.floor((Math.random() * 2) + 1);
console.log("rand: "+rand);
if (rand==1){
$(".img-1").hide();
$(".img-2").hide();
}else if (rand==2){
$(".img-3").hide();
$(".img-4").hide();
}
});

