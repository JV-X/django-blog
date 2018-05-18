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
            "J":{"url": "static/image/J.png","position": {"x": 0,"y": 0,"w": 10,"h": 10},"update": WelcomeUIAnimation.updateImageJ},
            "i":{"url": "static/image/i.png","position": {"x": 0,"y": 0,"w": 10,"h": 10},"update": WelcomeUIAnimation.defaultUpdate},
            "a":{"url": "static/image/a.png","position": {"x": 0,"y": 0,"w": 10,"h": 10},"update": WelcomeUIAnimation.defaultUpdate},
            "n":{"url": "static/image/n.png","position": {"x": 0,"y": 0,"w": 10,"h": 10},"update": WelcomeUIAnimation.defaultUpdate},
            "w":{"url": "static/image/w.png","position": {"x": 0,"y": 0,"w": 10,"h": 10},"update": WelcomeUIAnimation.defaultUpdate},
            "e":{"url": "static/image/e.png","position": {"x": 0,"y": 0,"w": 10,"h": 10},"update": WelcomeUIAnimation.defaultUpdate},
            "i":{"url": "static/image/i.png","position": {"x": 0,"y": 0,"w": 10,"h": 10},"update": WelcomeUIAnimation.defaultUpdate},
            "-":{"url": "static/image/-.png","position": {"x": 0,"y": 0,"w": 10,"h": 10},"update": WelcomeUIAnimation.defaultUpdate},
            "x":{"url": "static/image/x.png","position": {"x": 0,"y": 0,"w": 10,"h": 10},"update": WelcomeUIAnimation.defaultUpdate},
            "c":{"url": "static/image/c.png","position": {"x": 0,"y": 0,"w": 10,"h": 10},"update": WelcomeUIAnimation.defaultUpdate},
            "-":{"url": "static/image/dot.png","position": {"x": 0,"y": 0,"w": 10,"h": 10},"update": WelcomeUIAnimation.defaultUpdate},
        }

        return i
    }

    update() {
        var imageKeys = Object.keys(this.loadedImages)

        for (var i = 0; i< imageKeys.length; i++) {
            let key = imageKeys[i]
            let img = this.loadedImages[key]

            var update = this.imagesConfig[key]["update"]
            update(img)
        }
    }

    draw(ctx) {
        this.step = this.step + 1

        var imageKeys = Object.keys(this.loadedImages)

        for (var i = 0; i< imageKeys.length; i++) {
            let key = imageKeys[i]
            let img = this.loadedImages[key]

            img.draw(ctx, this.step)
        }
    }


    static destroy() {
        log("TODO")
    }

}

class WelcomeUIAnimation {

//     static updateImage0(img, step) {
//        if (step < 5000) {
//            return
//        }
//
//     }
//
//     static updateImage1(img) {
//
//     }
     static defaultUpdate() {

     }

     static updateImageJ(img, step) {
        var widthGravity = XvFrameWork.instance().widthGravity
        var heightGravity = XvFrameWork.instance().heightGravity

        var offsetX = 2
        var offsetY = 2
        var offsetW = 1
        var offsetH = 1

        img.update(
            img.x + offsetX * widthGravity,
            img.y + offsetY * heightGravity,
            img.w + offsetW * widthGravity,
            img.h + offsetH * heightGravity
            )
     }

     static updateImagei(img) {

     }

     static updateImagea(img) {

     }

     static updateImagen(img) {

     }

     static updateImagew(img) {

     }

     static updateImagee(img) {

     }

     static updateImagei(img) {

     }

     static updateImage_(img) {

     }

     static updateImagex(img) {

     }

     static updateImagec(img) {

     }
}



function _main() {
    welcome = WelcomeUI.create()
}

_main()