function ajax(method, path, data, callback) {
    var r = new XMLHttpRequest()

    r.open(method, path, true)
    r.setRequestHeader('Content-Type', 'application/json')
    r.onreadystatechange = function() {
        if(r.readyState === 4) {
            callback(r.response)
        }
    }

    data = JSON.stringify(data)
    r.send(data)
}

function element(sel) {
    return document.querySelector(sel)
}

function timeString(timestamp) {
    var d = new Date(timestamp * 1000)
    return d.toLocaleString()
}

function log(msg) {
    console.log(msg)
}
