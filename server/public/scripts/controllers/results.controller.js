myApp.controller('ResultsController', function(UserService, NutritionService) {
    console.log('ResultsController created');
    var vm = this;
    vm.userService = UserService;
    vm.animalProducts = NutritionService.animalProducts;
    vm.isVegan = false;
    vm.displayIngredients = [];
    vm.displayDescriptions = [];
    vm.nonVeganIngredients = ['Caprylic Acid', 'Fish Liver Oil'];
    vm.nonVeganDescriptions = ['A liquid fatty acid from cow’s or goat’s milk Also from palm, coconut, and other plant oils In perfumes, soaps Derivatives: Caprylic Triglyceride, Caprylamine Oxide, Capryl Betaine Alternatives: plant sources, especially coconut oil', 'Female hormones from pregnant mares’ urine Considered a drug Can have harmful systemic effects if used by children Used for reproductive problems and in birth control pills and Premarin, a menopausal drug In creams, perfumes, and lotions Has a negligible effect in the creams as a skin restorative; simple vegetable-source emollients are considered better Alternatives: oral contraceptives and menopausal drugs based on synthetic steroids or phytoestrogens from plants, especially palm-kernel oil Menopausal symptoms can also be treated with diet and herbs']

    // This function will show if the product is vegan or not. For now, until the backend routes are set up, this function is just set to toggle on the click of 'toggle results' button.
    vm.showResults = function() {
        // vm.isVegan = !vm.isVegan;
        if (vm.animalProducts.length < 1) {
            vm.isVegan = true;
        } else if (vm.animalProducts.length >= 1) {
            vm.isVegan = false;
            for (var i=0; i<vm.animalProducts.length; i++) {
                vm.displayIngredients.push(vm.animalProducts[i].ingredient);
                vm.displayDescriptions.push(vm.animalProducts.description);
            }
            console.log('ingredients', vm.displayIngredients, 'desc', vm.displayDescriptions)

        }
    }

    vm.showResults();


  });
  