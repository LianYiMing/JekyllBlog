//
function lianyiming() {
var now = new Date
var bornyear = "2020"
var bornmonth = "11"
var borndate = "7"
var bornhour = "7"
var bornminute = "30"
var bornsecond = "0"
var nowyear = now.getFullYear()
var nowmonth = now.getMonth() + 1
var nowdate = now.getDate()
var nowhour = now.getHours()
var nowminute = now.getMinutes()
var nowsecond = now.getSeconds()
if(bornmonth > nowmonth){
	var month = bornmonth - nowmonth
}else{  var month = nowmonth - bornmonth}


if(bornhour > nowhour){
		var hour = bornhour - nowhour
	}else{  var hour = nowhour - bornhour}

if(borndate > nowdate){
		var date = borndate - nowdate
	}else{  var date = nowdate - borndate}

if(bornminute> nowminute){
	var minute = bornminute -nowminute
}else{
	var minute =  nowminute - bornminute
}
var second = nowsecond
var year = nowyear - bornyear

var time =  year + "年" + month + "月" + date +"天" + hour +  "时" + minute + "分"   +  second +"秒"
if ( year == 0 ) {
	var time =  month + "月" + date +"天" + hour +  "时" + minute + "分"   +  second +"秒"
}
if ( year == 0 && month == 0 ) {
	var time =   date +"天" + hour +  "时" + minute + "分"   +  second +"秒"
}
//为了对齐，上边两行作废，秒后的空格为了对齐
var time =  year + " 年 " + month + " 月 " + date +" 天 " + hour +  " 时 " + minute + " 分 "   +  second +" 秒                     " 
document.getElementById("timer").innerHTML = time ;

}
setInterval(lianyiming,1000);