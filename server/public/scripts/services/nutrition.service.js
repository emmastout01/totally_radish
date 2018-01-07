myApp.service('NutritionService', function($http, $location){
    //console.log('NutritionService Loaded');
    var self = this;
    self.productToSend = 'larabar';
    self.ingredientList = '';
    self.parameter = '';
    self.animalProducts = [];

    //console.log('nutrition service param', self.parameter);
    
    self.getNutrition = function() {
        $http.get('https://api.nutritionix.com/v1_1/search/' + self.parameter + '?results=0:10&fields=item_name,brand_name,nf_ingredient_statement&appId=' + '3ec44756' + '&appKey=' + '915249de7bf1111281fa041ede07ebe3')
    .then(function(response) {
        //console.log('full response', response);
        var possibleProducts = response.data.hits;
        for (var i=0; i<possibleProducts.length; i++) {
            if (possibleProducts[i].fields.nf_ingredient_statement !== null) {
                self.ingredientList = possibleProducts[i].fields.nf_ingredient_statement;
                console.log('ingredients: ', self.ingredientList);
                return;
            }
        }
    }).then(function() {
        self.getAnimalProducts(self.ingredientList)
    })
}

// "Made of: Sorbitol, Gum Base, Glycerol, Mannitol, Natural and Artificial Flavors, Less than 2% of: Hydrogenated Starch Hydrolysate, Aspartame, Soy Lecithin, Gelatin, Acesulfame K, Colors (Titanium Dioxide, Blue 1, Blue 1 Lake, Yellow 5), BHT (to Maintain Freshness)."
    self.getAnimalProducts = function(ingredientList) {
        $http.get('/vegan/' + ingredientList).then(function(response) {
            console.log('non-vegan ingredients: ', response.data);
            self.animalProducts = response.data;
        })
    }

  });
  