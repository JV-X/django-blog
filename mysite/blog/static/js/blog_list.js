class BlogListUI {

    static create() {
        return new BlogListUI()
    }

    constructor() {
        this.blogListData = XvFrameWork.instance().data.all_blog
        this.blogListView = new BlogListView(this.blogListData)

        this.bindEvent()
        this.step = 0
    }

    bindEvent() {
        XvFrameWork.instance().registerEvent('click', this.blogListView)
    }

    update() {
        this.step = this.step + 1
        this.blogListView.update(this.step)
    }

    draw(ctx) {
        this.blogListView.draw(ctx)
    }

}

class BlogItem {

    constructor(data, baseX, baseY, index) {
        var itemMargin = 15
        var height = 50
        var posX = baseX
        var posY = baseY + index * (itemMargin + height)
        var textMargin = 8

        this.titleView = XvText.new(data.title, posX, posY, height / 2)
        this.timeView = XvText.new(data.title, posX, posY, height / 2 - textMargin)
    }

    update(offsetX, offsetY, offsetW, offsetH) {
        this.titleView.update(
            this.titleView.x + offsetX,
            this.titleView.y + offsetY,
            this.titleView.w + offsetW,
            this.titleView.h + offsetH,
        )
        this.timeView.update(
            this.timeView.x + offsetX,
            this.timeView.y + offsetY,
            this.timeView.w + offsetW,
            this.timeView.h + offsetH,
        )
    }

    draw(ctx) {
        this.titleView.draw(ctx)
        this.timeView.draw(ctx)
    }

}

class BlogListView {

    constructor(data, baseX, baseY) {
        this.data = data
        this.items = []

        for (var i = 0; i <this. data.length; i++) {
            this.items[i] = new BlogItem(this.data[i], baseX, baseY, i)
        }
    }

    update(step) {


    }

    onEvent(event) {
        log("onEvent!")
    }

    draw(ctx) {
        var items = this.items
        for (var i = 0; i < items.length; i++) {
            items[i].draw(ctx)
        }
    }
}

function _main() {
    var blogListUI = BlogListUI.create()
    XvFrameWork.instance().startUI(blogListUI)
}

_main()