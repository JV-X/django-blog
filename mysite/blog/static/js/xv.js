class XvFrameWork {

    constructor(fps) {
        this.canvas = element('#id-canvas')
        this.ctx = this.canvas.getContext("2d")

        this.canvas.height = XvAdaptScreen.instance().clientHeight
        this.canvas.width = XvAdaptScreen.instance().clientWidth

        this.fps = fps

        this.registeredEvents = {}
        this.eventsBuffer = {}

        this.data = JSON.parse(element('#id-data').innerHTML)
    }

    static instance() {
        this.i = this.i || new this(50)
        return this.i
    }

    registerEvent(action, target) {
        this.registeredEvents[action] = target

        window.addEventListener(action, function(event) {
            XvFrameWork.instance().eventsBuffer[action] = event
        })
    }

    uiRunTask() {
        var xv = XvFrameWork.instance()
        var ui = xv.ui
        var eventsBuffer = xv.eventsBuffer
        var registeredEvents = xv.registeredEvents

        xv.ctx.clearRect(0, 0, xv.canvas.width, xv.canvas.height)
        var actions = Object.keys(eventsBuffer)
        for (var i = 0; i < actions.length; i++) {
            var action = actions[i]
            registeredEvents[action].onEvent(eventsBuffer[action])
            delete eventsBuffer[action]
        }

        ui.update()
        ui.draw(xv.ctx)
    }

    startUI(ui) {
        this.ui = ui
        setInterval(this.uiRunTask, 1000 / this.fps)
    }

}

class XvAdaptScreen {

    constructor() {
        this.windowWidth = window.screen.width
        this.windowHeight = window.screen.height

        this.clientWidth = document.body.clientWidth
        this.clientHeight = document.body.clientHeight

        this.designWidth = 1920
        this.designHeight = 1080
    }

    static instance() {
        this.i = this.i || new this()
        return this.i
    }

    toActualX(x) {
        x = x / this.designWidth * document.body.clientWidth
        return x
    }

    toActualY(y) {
        y = y / this.designHeight * document.body.clientHeight
        return y
    }

    toDesignX(x) {
        x = x / document.body.clientWidth * this.designWidth
        return x
    }

    toDesignY(y) {
        y = y / document.body.clientHeight * this.designHeight
        return y
    }
}

function toActualX(x) {
    x = XvAdaptScreen.instance().toActualX(x)
    return x
}

function toActualY(y) {
    y = XvAdaptScreen.instance().toActualY(y)
    return y
}

function toDesignX(x) {
    x = XvAdaptScreen.instance().toDesignX(x)
    return x
}

function toDesignY(y) {
    y = XvAdaptScreen.instance().toDesignY(y)
    return y
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
        ctx.font = toActualX(this.size)+"px "+this.font
        ctx.fillStyle = this.color
        ctx.fillText(this.text, toActualX(this.x), toActualY(this.y))
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
        ctx.drawImage(
            this.image,
            toActualX(this.x),
            toActualY(this.y),
            toActualX(this.w),
            toActualY(this.h)
        );
    }

}
