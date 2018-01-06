myApp.controller('ResultsController', function(UserService) {
    console.log('ResultsController created');
    var vm = this;
    vm.userService = UserService;
    vm.isVegan = false;

    // This function will show if the product is vegan or not. For now, until the backend routes are set up, this function is just set to toggle on the click of 'toggle results' button.
    vm.showResults = function() {
        vm.isVegan = !vm.isVegan;
        
    }



  });
  