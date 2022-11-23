// 時間を取得する
function getTime() {
    var now = new Date();
    var hh = 0;
    var mm = 0;
    var ss = 0;

    if (now.getHours() < 10) {
        hh = '0' + now.getHours();
    } else {
        hh = now.getHours();
    }
    if (now.getMinutes() < 10) {
        mm = '0' + now.getMinutes();
    } else {
        mm = now.getMinutes();
    }
    if (now.getSeconds() < 10) {
        ss = '0' + now.getSeconds();
    } else {
        ss = now.getSeconds();
    }
    
    var msg = hh + ":" + mm + ":" + ss;
    document.getElementById('clock-show').innerHTML = msg;
}

setInterval('getTime()', 1000)
