(function() {
    function RoomsCtrl(Room, Message){
        // make list of rooms available to the view by attaching them to the controller
        // ex: this.rooms
		this.room = Room;
        this.rooms = Room.all;
		this.messages = null;
		this.selectRoom = function(roomId) {
			this.messages = Message.getByRoomId(roomId);
		}
		
		// user clicks room name
		// run selectRoom and pass in room id
		// use the room id to filter the messages
		// set the messages property to the filtered message array
    }
    
    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['Room', 'Message', RoomsCtrl])
})();