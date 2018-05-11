class XvFrameWork {

    constructor(fps) {
        this.canvas = element('#id-canvas')
        this.ctx = this.canvas.getContext("2d")
        this.height = this.canvas.height = document.body.clientHeight
        this.width = this.canvas.width = document.body.clientWidth

        this.fps = fps

        this.registeredEvents = {}
        this.eventsBuffer = {}

        this.data = element('#id-data').innerHTML
    }

    static instance() {
        this.i = this.i || new this(30)
        return this.i
    }

    registerEvent(key, callback) {
        this.registeredEvents[key] = callback

        xv = this.i
        window.addEventListener(key, function(event) {
            xv.eventsBuffer[key] = event
        })
    }

    setUI(ui) {
        this.ui = ui
    }

    uiRunTask() {
        xv = XvFrameWork.instance()
        var ui = xv.ui
        var eventsBuffer = xv.eventsBuffer
        var registeredEvents = xv.registeredEvents

        xv.ctx.clearRect(0, 0, xv.width, xv.height)

        var keys = Object.keys(eventsBuffer)
        for (var i = 0; i < keys.length; i++) {
            event = eventsBuffer[key]
            registeredEvents[key](event)
        }

        ui.update()
        ui.draw(xv.ctx)
    }

    start() {
        setInterval(this.uiRunTask, 1000 / this.fps)
    }

}

class XvText {
    constructor(text) {
        this.text = text
        this.x = 0
        this.y = 0
        this.size = 30
        this.font = "serif"
        this.color = "black"
    }

    update(x,y,size,color) {
        this.x = x
        this.y = y
        this.size = size
        this.font = font
    }

    draw(ctx) {
        ctx.font = this.size+"px "+this.font
        ctx.fillStyle = this.color
        ctx.fillText(this.text, this.x, this.y)
    }

}
