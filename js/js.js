function log() {
    var x = document.getElementById("1").value;
    var y = document.getElementById("2").value;
    var z = y;
    var k = x;
    if ((z == '77777' && k == 'javi77777') || (z == '48' && k == 'topilex48')) {
        document.getElementById("3").style.width = '20vw';
        document.getElementById("3").style.height = '20vw';
        document.getElementById('3').className = 'limon';
    } else {
        document.getElementById("4").style.width = '10vw';
        document.getElementById("4").style.height = '10vw';
        document.getElementById('4').className = 'limon';
    }
}
