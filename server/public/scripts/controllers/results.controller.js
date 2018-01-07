myApp.controller('ResultsController', function(UserService, NutritionService) {
    //console.log('ResultsController created');
    var vm = this;
    vm.userService = UserService;
    vm.animalProducts = NutritionService.animalProducts;
    vm.isVegan = false;
    vm.displayIngredients = [];
    vm.displayDescriptions = [];

    // This function will show if the product is vegan or not. For now, until the backend routes are set up, this function is just set to toggle on the click of 'toggle results' button.
    vm.showResults = function() {
        // vm.isVegan = !vm.isVegan;
        if (vm.animalProducts.length < 1) {
            vm.isVegan = true;
        } else if (vm.animalProducts.length >= 1) {
            vm.isVegan = false;
            for (var i=0; i<vm.animalProducts.length; i++) {
                vm.displayIngredients.push(vm.animalProducts[i].ingredient);
                vm.displayDescriptions.push(vm.animalProducts[i].description);
            }
            console.log('ingredients', vm.displayIngredients, 'desc', vm.displayDescriptions)

        }
    }

    vm.showResults();


  });
  