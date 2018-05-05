
function _main() {
    var canvas = document.getElementById('id-canvas');
    var ctx = canvas.getContext('2d');
    console.log("js")
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 100, 100);
}

_main()