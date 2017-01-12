(function() {
    function RoomsCtrl(Room){
        // make list of rooms available to the view by attaching them to the controller
        // ex: this.rooms
        this.rooms = Room.all;
    }
    
    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['Room', RoomsCtrl])
})();