
function _main() {
    xv = XvUI.instance();
    var ctx = xv.canvas.getContext("2d")
    ctx.fillStyle = 'green'
    ctx.fillRect(0,0,xv.width,xv.height)
    ctx.font = '48px serif'
    ctx.fillStyle = 'black'
    ctx.fillText('Hello world', 50, 100)
    log("ctx is "+ctx+",w is :"+xv.width+",h:"+xv.height)
}

_main()