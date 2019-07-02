app.service('services', function() {
    this.httpGet = function (data) {
        console.log('success 1');
    }

    this.httpPost = function (x) {
        console.log('success 2');
    }
});