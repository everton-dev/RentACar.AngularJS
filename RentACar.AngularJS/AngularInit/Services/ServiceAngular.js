app.service("APIService", function ($http, $sce) {

	this.getTest = function () {

        var url = "https://httpbin.org/get";

        return $http.get(url);
    }

	this.getCep = function (cep) {
		
        var url = "http://correiosapi.apphb.com/cep/" + cep;
		var trustedUrl = $sce.trustAsResourceUrl(url);

        return $http.jsonp(trustedUrl, url);
    }

});