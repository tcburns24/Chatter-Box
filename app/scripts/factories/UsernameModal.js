(function() {
	function BlocChatCookies($cookies, $uibModal) {
		var currentUser = $cookies.get('blocChatCurrentUser');
		
		function getUser() {
			// code to read the cookie (using $cookies service)
			var currentUser = $cookies.get('blocChatCurrentUser');
			console.log(currentUser);
			return currentUser;
		}
		
		// when the html form is submitted (ng-submit="...") to create a username, this function needs to run
		function setUserCookie(username) {
			// code to set the cookie (using $cookies service)
			$cookies.put('blocChatCurrentUser', username);
		};
		
		return {
			// make functions public
			getUser: getUser,
			setUserCookie: setUserCookie
		};
	}
	
	
	angular
		.module('blocChat')
		.factory('BlocChatCookies', ['$cookies', '$uibModal', BlocChatCookies]);
})();