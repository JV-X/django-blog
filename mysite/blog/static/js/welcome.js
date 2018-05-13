class WelcomeUI {

    constructor(xv) {
        this.loadedImages = {}
        this.images = {
            "0":"static/image/0.png",
            "1":"static/image/1.png",
            "J":"static/image/J.png",
            "i":"static/image/i.png",
            "a":"static/image/a.png",
            "n":"static/image/n.png",
            "w":"static/image/w.png",
            "e":"static/image/e.png",
            "i":"static/image/i.png",
            "-":"static/image/-.png",
            "x":"static/image/x.png",
            "c":"static/image/c.png",
            "dot":"static/image/dot.png",
        }

        this.xv = xv
        var self = this
        var imageKeys = Object.keys(this.images)
        for (var i = 0; i< imageKeys.length; i++) {
            let key = imageKeys[i]
            let url = this.images[key]

            var onload = function(imgObject) {
                self.loadedImages[key] = imgObject

                var imgCount = Object.keys(self.images).length
                var loadedCount = Object.keys(self.loadedImages).length
                if (imgCount == loadedCount) {
                    xv.startUI(self)
                }
            }

            XvImage.new(url, i*60, i*60, 120, 44, onload)
        }
    }

    static new(xv) {
        return new WelcomeUI(xv)
    }

    update() {
        var imageKeys = Object.keys(this.loadedImages)

        for (var i = 0; i< imageKeys.length; i++) {
            let key = imageKeys[i]
            let img = this.loadedImages[key]

            img.update(img.x + 1, img.y + 1,img.w + 1, img.h + 1)
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

}


function _main() {
    xv = XvFrameWork.instance()
    welcome = WelcomeUI.new(xv)
}

_main()