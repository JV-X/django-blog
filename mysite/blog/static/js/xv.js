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

    startUI(ui) {
        this.ui = ui
        setInterval(this.uiRunTask, 1000 / this.fps)
    }

}

class XvText {

     static new(text, x, y, size) {
        return new this(text, x, y, size, "serif", "black")
     }

     static new(text, x, y, size, color) {
        return new this(text, x, y, size, "serif", color)
     }

    constructor(text, x, y, size, font, color) {
        this.text = text
        this.x = x
        this.y = y
        this.size = size
        this.font = font
        this.color = color
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

class XvImage {

    static new(url, x, y, width, height, callback) {
        var i = new Image()
        var img = new this(i, x, y, width, height)
        i.src = url
        i.onload = callback(img)

        return img
    }

    constructor(image, x, y, width, height) {
        this.image = image
        this.x = x
        this.y = y
        this.w = width
        this.h = height
    }

    update(x, y, width, height) {
        this.x = x
        this.y = y
        this.w = width
        this.h = height
    }

    draw(ctx) {
        log("this.image:"+this.image+",this.x:"+this.x+",this.y:"+this.y+",this.width:"+this.w+",this.height:"+this.h)
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }

}
