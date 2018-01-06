myApp.controller('ResultsController', function(UserService) {
    console.log('ResultsController created');
    var vm = this;
    vm.userService = UserService;
  });
  