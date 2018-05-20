class WelcomeUI {

    static create() {
        return new WelcomeUI()
    }

    constructor() {
        this.imagesConfig = this.getImagesConfig()
        this.loadedImages = {}

        this.loadImages(this.imagesConfig, this.loadedImages)

        this.step = 0
    }

    loadImages(imagesConfig, loadedImages) {
        var context = this

        var imageKeys = Object.keys(imagesConfig)
        for (var i = 0; i< imageKeys.length; i++) {
            let key = imageKeys[i]
            let url = imagesConfig[key]['url']

            var onload = function(imgObject) {
                loadedImages[key] = imgObject
                var imgCount = Object.keys(imagesConfig).length
                var loadedCount = Object.keys(loadedImages).length
                if (imgCount == loadedCount) {
                    XvFrameWork.instance().startUI(context)
                }
            }

            var p = imagesConfig[key]["position"]
            XvImage.new(url, p["x"], p["y"], p["w"], p["h"], onload)
        }
    }

    getImagesConfig() {
        var i = {
//            "0":{"url": "static/image/0.png","position": {"x": 0,"y": 0,"w": 10,"h": 10},"update":},
//            "1":{"url": "static/image/1.png","position": {"x": 0,"y": 0,"w": 10,"h": 10},"update":},
            "J":{
                "url": "static/image/J.png",
                "position": {
                    "x": 300,
                    "y": 0,
                    "w": 50,
                    "h": 50,
                },
                    "update": WelcomeUIAnimation.updateImageJ
            },
            "i1":{
                "url": "static/image/i.png",
                "position": {
                    "x": 200,
                    "y": 0,
                    "w": 38,
                    "h": 38,
                },
                    "update": WelcomeUIAnimation.updateImagei1
            },
            "a":{
                "url": "static/image/a.png",
                "position": {
                    "x": 100,
                    "y": 0,
                    "w": 38,
                    "h": 38,
                },
                    "update": WelcomeUIAnimation.updateImagea
            },
            "n":{
                "url": "static/image/n.png",
                "position": {
                    "x": 50,
                    "y": 0,
                    "w": 30,
                    "h": 38,
                },
                    "update": WelcomeUIAnimation.updateImagen
            },
            "w":{
                "url": "static/image/w.png",
                "position": {
                    "x": 0,
                    "y": 0,
                    "w": 38,
                    "h": 38,
                },
                    "update": WelcomeUIAnimation.updateImagew
            },
            "e":{
                "url": "static/image/e.png",
                "position": {
                    "x": 0,
                    "y": 50,
                    "w": 38,
                    "h": 38,
                },
                    "update": WelcomeUIAnimation.updateImagee
            },
            "i2":{
                "url": "static/image/i.png",
                "position": {
                    "x": 0,
                    "y": 100,
                    "w": 38,
                    "h": 38,
                },
                    "update": WelcomeUIAnimation.updateImagei2
            },
            "-":{
                "url": "static/image/-.png",
                "position": {
                    "x": 0,
                    "y": 200,
                    "w": 38,
                    "h": 38,
                },
                    "update": WelcomeUIAnimation.updateImage_
            },
            "x":{
                "url": "static/image/x.png",
                "position": {
                    "x": 0,
                    "y": 200,
                    "w": 38,
                    "h": 38,
                },
                    "update": WelcomeUIAnimation.updateImagex
            },
            "c":{
                "url": "static/image/c.png",
                "position": {
                    "x": 0,
                    "y": 0,
                    "w": 10,
                    "h": 10,
                },
                    "update": WelcomeUIAnimation.defaultUpdate
            },
            "dot":{
                "url": "static/image/dot.png",
                "position": {
                    "x": 0,
                    "y": 0,
                    "w": 10,
                    "h": 10,
                },
                "update": WelcomeUIAnimation.defaultUpdate
            },
        }

        return i
    }

    update() {
        this.step = this.step + 1

        var imageKeys = Object.keys(this.loadedImages)
        for (var i = 0; i< imageKeys.length; i++) {
            let key = imageKeys[i]
            let img = this.loadedImages[key]

            let updateMethod = this.imagesConfig[key]["update"]
            updateMethod(img, this.step)
        }
    }

    draw(ctx) {
        var imageKeys = Object.keys(this.loadedImages)
        for (var i = 0; i< imageKeys.length; i++) {
            let key = imageKeys[i]
            let img = this.loadedImages[key]

            img.draw(ctx)
        }
    }

    static destroy() {
        log("TODO")
    }

}

var args = {
    "textY": 117,
    "textMargin": 8,
    "textBaseX": 0,
    "displayInterval": 5,
}

class WelcomeUIAnimation {

    static defaultUpdate() {
    
    }

    static updateImageJ(img, step) {
        var offsetX = -30, offsetY = 10, offsetW = 0, offsetH = 0
        
        if (img.y + offsetY > 108) {
            img.y = 108
            return
        }
        
        img.update(img.x + offsetX, img.y + offsetY, img.w + offsetW, img.h + offsetH)
    }

    static updateImagei1(img, step) {
        if (step < args["displayInterval"] * 1) {
            img.h = 0, img.w = 0 // todo 这里先这样控制显示隐藏，待处理
            return
        } else {
            img.w = 38, img.h = 38
        }
        
        var offsetX = -20, offsetY = 10, offsetW = 0, offsetH = 0
        if (img.y + offsetY > args["textY"] - 2) {
            img.y = args["textY"] - 2
            return
        }

        if (img.x + offsetX < 25) {
            img.x =  25 - offsetX
        }
        
        img.update(img.x + offsetX, img.y + offsetY, img.w + offsetW, img.h + offsetH)
    }

    static updateImagea(img, step) {
        if (step < args["displayInterval"] * 2) {
            img.h = 0, img.w = 0 // todo 这里先这样控制显示隐藏，待处理
            return
        } else {
            img.w = 38, img.h = 38
        }
        
        var offsetX = -5, offsetY = 10, offsetW = 0, offsetH = 0
        if (img.y + offsetY > args["textY"]) {
            img.y = args["textY"]
            return
        }

        if (img.x + offsetX < 30) {
            img.x = 30 - offsetX
        }
        
        img.update(
            img.x + offsetX,
            img.y + offsetY,
            img.w + offsetW,
            img.h + offsetH
            )
    }

    static updateImagen(img, step) {
        if (step < args["displayInterval"] * 3) {
            img.h = 0, img.w = 0 // todo 这里先这样控制显示隐藏，待处理
            return
        } else {
            img.w = 32, img.h = 38
        }

        var offsetX = 3, offsetY = 10, offsetW = 0, offsetH = 0
        if (img.y + offsetY > args["textY"]) {
            img.y = args["textY"]
            return
        }

        if (img.x + offsetX > 80) {
            img.x = 80 - offsetX
        }

        img.update(
            img.x + offsetX,
            img.y + offsetY,
            img.w + offsetW,
            img.h + offsetH
            )
    }

    static updateImagew(img, step) {
        if (step < args["displayInterval"] * 4) {
            img.h = 0, img.w = 0 // todo 这里先这样控制显示隐藏，待处理
            return
        } else {
            img.w = 40, img.h = 40
        }

        var offsetX = 10, offsetY = 10, offsetW = 0, offsetH = 0
        if (img.y + offsetY > args["textY"] - 3) {
            img.y = args["textY"] - 3
            return
        }

        if (img.x + offsetX > 120) {
            img.x = 120 - offsetX
        }

        img.update(
            img.x + offsetX,
            img.y + offsetY,
            img.w + offsetW,
            img.h + offsetH
            )
    }

    static updateImagee(img, step) {
        if (step < args["displayInterval"] * 5) {
            img.h = 0, img.w = 0 // todo 这里先这样控制显示隐藏，待处理
            return
        } else {
            img.w = 32, img.h = 32
        }

        var offsetX = 25, offsetY = 10, offsetW = 0, offsetH = 0
        if (img.y + offsetY > args["textY"] + 5) {
            img.y = args["textY"] + 5
            return
        }

        if (img.x + offsetX > 150) {
            img.x = 150 - offsetX
        }

        img.update(
            img.x + offsetX,
            img.y + offsetY,
            img.w + offsetW,
            img.h + offsetH
            )
    }

    static updateImagei2(img, step) {
        if (step < args["displayInterval"] * 6) {
            img.h = 0, img.w = 0 // todo 这里先这样控制显示隐藏，待处理
            return
        } else {
            img.w = 36, img.h = 36
        }

        var offsetX = 25, offsetY = 2, offsetW = 0, offsetH = 0
        if (img.y + offsetY > args["textY"]) {
            img.y = args["textY"]
            return
        }

        if (img.x + offsetX > 170) {
            img.x = 170 - offsetX
        }

        img.update(img.x + offsetX, img.y + offsetY, img.w + offsetW, img.h + offsetH)
    }

    static updateImage_(img, step) {
        if (step < args["displayInterval"] * 7) {
            img.h = 0, img.w = 0 // todo 这里先这样控制显示隐藏，待处理
            return
        } else {
            img.w = 36, img.h = 36
        }

        var offsetX = 25, offsetY = 1, offsetW = 0, offsetH = 0

        if (img.x + offsetX > 190) {
            img.x = 190
            return
        }

        if (img.y + offsetY > args["textY"]) {
            log("invokle")
            img.y = args["textY"]
        }

        img.update(img.x + offsetX, img.y + offsetY, img.w + offsetW, img.h + offsetH)
    }

    static updateImagex(img, step) {
        if (step < args["displayInterval"] * 8) {
            img.h = 0, img.w = 0 // todo 这里先这样控制显示隐藏，待处理
            return
        } else {
            img.w = 38, img.h = 38
        }

        var offsetX = 25, offsetY = -10, offsetW = 0, offsetH = 0

        if (img.x + offsetX > 215) {
            img.x = 215
            return
        }

        if (img.y + offsetY < args["textY"]) {
            log("invokle")
            img.y = args["textY"]
        }

        img.update(img.x + offsetX, img.y + offsetY, img.w + offsetW, img.h + offsetH)
    }

    static updateImagec(img, step) {

    }
}


function _main() {
    welcome = WelcomeUI.create()
}

_main()