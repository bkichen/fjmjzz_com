$(function(){
	 
	 //去除ie下黑边框
	 $("a").live('focus', function(event) {
	 	if(this.blur) {this.blur()};
	 });
	 $("input.button").live('focus', function(event) {
		if(this.blur) {this.blur()};
	});
	
	
	
//	显示时间
	showDT()
	function showDT() {  
	  var currentDT = new Date();  
	  var y,m,date,day,hs,ms,ss,theDateStr;  
	  y = currentDT.getFullYear(); //四位整数表示的年份
	  y < 1970 ? y=y+1970 : y;
	  m = currentDT.getMonth()+1; //月  
	  date = currentDT.getDate(); //日  
	  day = currentDT.getDay(); //星期  
	  hs = currentDT.getHours(); //时  
	  ms = currentDT.getMinutes(); //分  
	  ss = currentDT.getSeconds(); //秒  
	  var dayNames = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
	  theDateStr = y+"/"+  m +"/"+date+"/"+ "<b>"+ dayNames[day] +"</b>";  
	  $("#date").html(theDateStr)
	}
	
	
	$(".index-focus").slide({
		titCell:".hd",
	    mainCell:".bd ul",
	    autoPage:"<span></span>",
	    autoPlay:true,
	    effect:"leftLoop"
	})


	
})