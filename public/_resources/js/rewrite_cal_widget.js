document.addEventListener("DOMContentLoaded", function(){
	
			var script = document.getElementById("cal_script").getAttribute("src");
			var filter = "";
			var filter_list = "";
			if (script!=undefined){
				console.log("scripts:", script);
				filter = script.split("=");
				filter = filter[1];
				console.log("filter:", filter);
				filter_list = filter.split(", ");
				console.log("filter list", filter_list);
			
			}
			var show_all = 0;
			
			
			if (filter_list[0]==""){
				show_all = 1;
			}
	

			var a = document.getElementById("cal-comp");	
			var y = document.getElementById("cal-comp");

			var b = a.getElementsByTagName("ul")[0];
			var x = b.getElementsByTagName("li");

			var curr_time;

			var curr_date = "";
			var show = 0;
	

			for (var i = 0; i < x.length; i++){
			if (x[i].className=="date"){
				curr_date = x[i].innerHTML;
			}
			if (x[i].className!="date"){
				var show = 0;
				if (show_all==0){
						for (var ahh  = 0; ahh < filter_list.length; ahh++){
						show = show + x[i].innerHTML.includes(filter_list[ahh]);
					
					}
				}
				
				if ((show!=0)||(show_all==1)){
					var h;
				h = document.createElement("h3");
				h.setAttribute("class", "small-margin-bottom");
				
				var ct =x[i].getElementsByTagName("time")[0];
				if (ct!=undefined){
					ct.setAttribute("style", "display:none");
				}
				
				h.innerHTML = "<small>"+x[i].innerHTML+"</small>";
				y.appendChild(h);
				currDate = h;

				curr_time = x[i].getElementsByTagName("time")[0].innerHTML;
					var p = document.createElement("p");
					p.innerHTML = "<p class=\"small-margin-bottom\">" + curr_date + "&nbsp;|&nbsp;" + curr_time + "</p>";
					y.appendChild(p);
				}


			}
			

			x[i].setAttribute("style", "display:none");
			}
			});