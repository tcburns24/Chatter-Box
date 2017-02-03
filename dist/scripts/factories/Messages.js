(function() {
	function Message($firebaseArray, BlocChatCookies) {
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);
	
		return {
			getByRoomId: function(roomId) {
				return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
			},
			
			send: function(newMessage, roomId) {
				messages.$add({ 
					content: newMessage,
					roomId: roomId,
					username: BlocChatCookies.getUser()
				})
			}
		};
	}
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', 'BlocChatCookies', Message]);
})();
