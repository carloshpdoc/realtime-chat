(function() {
    var Controller = function MessageController(Socket) {
        var vm = this;

        vm.arr =[];
        vm.create = create;

        function create(data) {
            Socket.emit('Event::PostCreate', data);
            vm.arr.push(data);
        }

        Socket.on('init', function (data) {
            console.log(data);
        });

        Socket.on('Event::PostCreate', function(data){
            vm.arr.push(data);
            console.log(vm.arr);
        });

    };

    angular
        .module('message')
        .controller('MessageController', Controller);
})();
