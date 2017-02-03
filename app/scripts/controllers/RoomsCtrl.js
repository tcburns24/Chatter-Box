(function() {
    function RoomsCtrl(Room, Message, BlocChatCookies){
        // make list of rooms available to the view by attaching them to the controller
        // ex: this.rooms
		this.room = Room;
        this.rooms = Room.all; 
		this.message = Message;
		this.messages = null;
		this.currentRoom = null;
		this.selectRoom = function(room) {
			this.messages = Message.getByRoomId(room.$id);
			this.currentRoom = room;
		}
		this.cookie = BlocChatCookies;

		// user clicks room name
		// run selectRoom and pass in room id
		// use the room id to filter the messages
		// set the messages property to the filtered message array
    }

    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['Room', 'Message', 'BlocChatCookies', RoomsCtrl])
})();
