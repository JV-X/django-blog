templates = {
    "sortsTemplate": null,
    "filtersTemplate": null,
    "ArticleTemplate": null,
}

function already_loaded(t) {
    return t["sortTemplate"] === null
            || t["filterTemplate"] === null
            || t["ArticleTemplate"] === null
}

function dealWithDefault(element) {
    var div = element.closest("div")


}

function sortSelectTemplate() {
    var t = `
    <li class="class-sort-selector">
        <select>
            <option value="default" selected>- sort by -</option>
        </select>
    </li>
    `

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

}

function bindEventSortSelect() {
    var es = element(".class-sort-selector")
    for(var i = 0; i < es.length; i++) {
        var e = es[i].children[0]
        e.addEventListener('change',onSortSelectChange)
    }
}

function bindEventFilterSelect() {
    var es = element(".class-filter-selector")
    for(var i = 0; i < es.length; i++) {
        e = es[i]
        e.addEventListener('change',onSortSelectChange)
    }
}

function bindEventRequestButtonClick() {
    //TODO

}

function bindEvent() {
    window.templates = templates
    if(already_loaded(templates)) {
        bindEventLayoutSelect()
        bindEventSortSelect()
        bindEventFilterSelect()

        bindEventRequestButtonClick()
    }
}

function filtersTemplate(f) {
    var filterSelect = element("#id-filter-selector > ul > li > select")

    for (var i = 0; i < f.length; i++) {
        var value = f[i]
        option = `<option value="${value}">${value}</option>`
        filterSelect.insertAdjacentHTML('beforeend', option)
    }
}

function sortsTemplate(s) {
    var sortSelect = element("#id-sort-selector > ul > li > select")

    for (var i = 0; i < s.length; i++) {
        var value = s[i]
        var option = `<option value="${value}">${value}</option>`
        sortSelect.insertAdjacentHTML('beforeend', option)
    }
}

function apiArticleConfig(callBack) {
    var path = 'api/articles/config'
    ajax('GET', path, '', function(r) {
        if (r == null) {
            return
        }

        response = JSON.parse(r)
        var s = response.sort_way
        templates["sortsTemplate"] = sortsTemplate(s)

        var f = response.filter_way
        templates["filtersTemplate"] = filtersTemplate(f)

        callBack()
    })
}

function sortsFromDocument() {
    var sorts = []
    var ul = element("#id-sort-selector > ul")

    for (var i = 1; i < ul.children.length; i++) {
        var select = ul.children[i].children[0].value
        sorts.push(select)
    }

    return sorts
}

function filtersFromDocument() {
    var filters = {}
    var ul = element("#id-filter-selector > ul")

    for (var i = 1; i < ul.children.length; i++) {
        var li = ul.children[i]
        var k = li.querySelector('select').value
        var v = li.querySelector('input').value

        filters[k] = v
    }

    return filters
}

function insertArticles(as) {

}

function apiArticleList(callBack) {
    var path = 'api/articles'
    var form = {
        sort_ways: sortsFromDocument(),
        filter_way: filtersFromDocument(),
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
    apiArticleConfig(onDataLoaded)
    apiArticleList(onDataLoaded)
}

_main()