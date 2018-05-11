class WelcomeUI {
    constructor() {
        this.worlds = {}
        var helloWorld = new XvText()
        helloWorld.text = 'Hello world'
        helloWorld.font = 'Microsoft YaHei'
        helloWorld.color = 'red'
        helloWorld.x = 50
        helloWorld.y = 100
        this.worlds['Hello world'] = helloWorld
    }

    update() {
        var h = this.worlds['Hello world']
        h.x = h.x + 3
    }

    draw(ctx) {
        this.worlds['Hello world'].draw(ctx)
    }

    release() {
        worlds.clear()
    }

}


function _main() {
    welcome = new WelcomeUI()

    xv = XvFrameWork.instance()
    xv.setUI(welcome)
    xv.start()

    log("ctx is "+ctx+",w is :"+xv.width+",h:"+xv.height)
}

_main()