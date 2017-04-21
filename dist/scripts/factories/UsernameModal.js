(function() {
	function BlocChatCookies($cookies, $uibModal) {
		var currentUser = $cookies.get('blocChatCurrentUser');
		
		function getUser() {
			// code to read the cookie (using $cookies service)
			var currentUser = $cookies.get('blocChatCurrentUser');
			return currentUser;
		}
		
		// when the html form is submitted (ng-submit="...") to create a username, this function needs to run
		function setUserCookie(username) {
			// code to set the cookie (using $cookies service)
			$cookies.put('blocChatCurrentUser', username);
		};
		
		function deleteUserCookie() {
			$cookies.remove('blocChatCurrentUser');
			console.log($cookies.get('blocChatCurrentUser'));
		};
		
		return {
			// make functions public
			getUser: getUser,
			setUserCookie: setUserCookie,
			deleteUserCookie: deleteUserCookie
		};
	}
	
	
	angular
		.module('blocChat')
		.factory('BlocChatCookies', ['$cookies', '$uibModal', BlocChatCookies]);
})();