
function timetravel() {
    var speed = (Number(document.getElementById("inputspeed").value))
    var distance = (Number(document.getElementById("inputdistance").value))
    var timeresult = distance / speed
    if (timeresult <= 0 || (isNaN(timeresult))) {
        return ("กรุณากรอกค่าที่ถูกต้อง")
    }
    else {
        return timeresult
    }
}
function distancetravel() {
    var speed = (Number(document.getElementById("inputspeed").value))
    var time = (Number(document.getElementById("inputtime").value))
    var distanceresult = speed * time
    if (distanceresult <= 0) {
        return ("กรุณากรอกค่าที่ถูกต้อง")
    }
    else {
        return distanceresult
    }
}
function speedtravel() {
    var distance = (Number(document.getElementById("inputdistance").value))
    var time = (Number(document.getElementById("inputtime").value))
    var speedresult = distance / time
    if (speedresult <= 0) {
        return ("กรุณากรอกค่าที่ถูกต้อง")
    }
     else {
        return speedresult
    }

}
function totime() {
    var finalresult = timetravel()
    if (typeof finalresult === "string"){
         document.getElementById("result").innerHTML = finalresult
    }
    else{
    document.getElementById("result").innerHTML = "ต้องใช้เวลา" + finalresult +  "วินาที"}
}
function todistance() {
    var finalresult = distancetravel()
    if (typeof finalresult === "string"){
        document.getElementById("result").innerHTML = finalresult
   }
   else{
    document.getElementById("result").innerHTML = "ใช้ระยะทาง" + finalresult + "เมตร"}
}
function tospeed() {
    var finalresult = speedtravel()
    if (typeof finalresult === "string"){
        document.getElementById("result").innerHTML = finalresult
   }
   else{
    document.getElementById("result").innerHTML = "ใช้ความเร็ว" + finalresult + "เมตร/วินาที"
}
}

