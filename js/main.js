//$() is selector
//$(selector).ready(function) is event

var current = [];
var next = [];

$(document).ready(function() {
	//var defaultTimeOut = 5000;
	var defaultcountOut = 5;
	var selectedString = "";
	var firstChildString = "";
	var length = $(".switch").length;
	var count= [];
	var countOut = [];
	for(var i=0;i<length;i++){
		count[i] = 0;
		countOut[i] = defaultcountOut;
	}
	var switchGraphics = function(count,countOut) {
		for(var i=0;i<length;i++){
			if(i==0 || i==1) 
				console.log("i=:"+i+"\ncount="+count[i]);
			count[i]++;
			if(	count[i] == countOut[i] ) {
				countOut[i] = defaultcountOut;
				count[i] = 0;
				//console.log(i);
				selectedString = ".switch:eq("+i+") .active";
				current[i] = $(selectedString);
				//alert(current[i].length);
				next[i] = current[i].next();
				firstChildString = ".switch:eq("+i+") p:first-child,.switch:eq("+i+") img:first-child";
				if (next[i].is(':last-child')) next[i] = $(firstChildString);
				
				if (
				next[i].is('.switch:eq(2) p:eq(9)')
				|| next[i].is('.switch:eq(2) p:eq(10)')
				|| next[i].is('.switch:eq(3) img:eq(9)')
				|| next[i].is('.switch:eq(3) img:eq(10)')
				|| next[i].is('.switch:eq(4) img:eq(10)')
				|| next[i].is('.switch:eq(4) img:eq(11)')
				|| next[i].is('.switch:eq(5) p:eq(10)')
				|| next[i].is('.switch:eq(5) p:eq(11)')
				|| next[i].is('.switch:eq(6) p:eq(8)')
				|| next[i].is('.switch:eq(6) p:eq(9)')
				|| next[i].is('.switch:eq(7) img:eq(8)')
				|| next[i].is('.switch:eq(7) img:eq(9)')
				) {
					console.log("change switch time");
					countOut[i] = 12;
					//timeOut = 12000;
				}
				
				
				//alert(current[i].src);
				current[i].fadeOut();
				next[i].fadeIn("slow", "swing", function(i) {
					setTimeout(function(){
						console.log("fadein "+i);
						current[i].removeClass("active");
						current[i].css("display", "none");
						next[i].addClass("active");
						next[i].css("z-index", 1);
					}, 1000);
				}(i));
			}
		
			var timeLeft = countOut[i]-count[i];
			timeLeft = timeLeft==0?countOut[i]:timeLeft;
			switch(i){
				case 1:
				var downCount = $(".timeCounter:eq(0) p:first-child");
				downCount.text(timeLeft);
				break;
				case 2:
				var downCount = $(".timeCounter:eq(1) p:first-child");
				downCount.text(timeLeft);
				break;
				case 5:
				var downCount = $(".timeCounter:eq(2) p:first-child");
				downCount.text(timeLeft);
				break;
				case 6:
				var downCount = $(".timeCounter:eq(3) p:first-child");
				downCount.text(timeLeft);
				break;
			}
		}
		setTimeout(function(){
			switchGraphics(count,countOut);	
		}, 1000);
	};
	
	setTimeout(function(){
		switchGraphics(count,countOut);	
	}, 1000);
		
});