templates = {
    "sortSelectTemplate": null,
    "filterSelectTemplate": null,
    "ArticleTemplate": null,
}

function already_loaded(t) {
    return t["sortSelectTemplate"] === null
            || t["filterSelectTemplate"] === null
            || t["ArticleTemplate"] === null
}

function dealWithDefault(element) {
    var div = element.closest("div")


}

function sortSelectTemplate() {
    var t = `
    <li>
        <select name="class-sort-selector">
            <option value="default" selected>- sort by -</option>
        </select>
    </li>
    `

}

function filterSelectTemplate(fw) {
    var t = `
        <li>
        <select name="filter-selector">
        <option value="default" selected>- filter by -</option>`


    var ks = Object.keys(sw)
    for (var i = 0; i < ks.length; i++) {
        var k = ks[i]
        var value = fw[k]

        t = t + `<option value="${value}">${k}</option>`
    }

    t = t + `
        </select>
        <input class="class-filter-input">
        <button class="class-filter-add">add</button>
        </li>
        `
    return t
}

function onSortSelectChange(event) {
    var self = event.target

    if (self.value == "default") {
        dealWithDefault(self)
        return
    }
    template = sortSelectTemplate()
}

function bindEventLayoutSelect() {
    // TODO
    // TODO
}

function bindEventSortBySelect() {
    var es = element(".class-sort-selector")
    for(var i = 0; i < es.length; i++) {
        e = es[i]
        e.addEventListener('change',onSortSelectChange)
    }
}

function bindEvent() {
    if(already_loaded(templates)) {
        bindEventLayoutSelect()
        bindEventSortBySelect()
        bindEventFilterBySelect()
        bindEventRequestButtonClick()
    }
}

function sortSelectTemplate(sw) {
    var t = `
        <li>
        <select class="class-sort-selector">
        <option value="default" selected>- sort by -</option>
        `

    var ks = Object.keys(sw)
    for (var i = 0; i < ks.length; i++) {
        var k = ks[i]
        var value = sw[k]

        t = t + `<option value="${value}">${k}</option>`
    }

    t = t + `</select></li>`
    return t
}


function loadConfig(callBack) {
    var path = 'api/articles/config'
    ajax('GET', path, '', function(r) {
        response = JSON.parse(r)
        var sw = r.sort_way
        templates['sortSelectTemplate'] = sortSelectTemplate(sw)

        var fw = r.filter_way
        templates['filterSelectTemplate'] = filterSelectTemplate(fw)

        callBack()
    })
}

function loadArticle(callBack) {
    var path = 'api/articles'
    var form = {
        sort_ways: getSorts()
        filter_way: getFilters()
    }

    ajax('POST', path, form, function(r) {
        response = JSON.parse(r)
        var as = r.articles
        insertArticles(as)

        callBack()
    })
}

function _main() {
    var onDataLoaded = bindEvent
    loadConfig(onDataLoaded)
    loadArticle(onDataLoaded)
}

_main()