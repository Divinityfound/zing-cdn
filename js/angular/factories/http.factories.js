app.factory('HttpFactory', function($http, $q, $window) {
	function HttpFactory() {
		var self = this;
		self.results = null;

		self.getHttp        = function(data, args = []) {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				data: { data: data },
				url: args['url']+args['ext']
			}).then(function successCallback(response) {
				self.results = response.data;
				deferred.resolve(response.data);
			});
			return deferred.promise;
		}

		self.postHttp       = function(data, args = []) {
			$http({
				method: 'POST',
				data: { data: data },
				url: args['url']+args['ext'],
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				}
			}).then(function successCallback(response) { });
		}

		self.postHttpReturn = function(data, args = []) {
			var deferred = $q.defer();
			$http({
				method: 'POST',
				data: { data: data },
				url: args['url']+args['ext'],
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				}
			}).then(function successCallback(response) {
				self.results = response.data;
				deferred.resolve(response.data);
			});

			return deferred.promise;
		}
	}
	return new HttpFactory();
});