myApp.service('NutritionService', function($http, $location){
    console.log('NutritionService Loaded');
    var self = this;
    self.productToSend = 'larabar';
    self.ingredientList = [];
    
    self.getNutrition = function(response) {
        $http.get('https://api.nutritionix.com/v1_1/search/' + self.productToSend + '?results=0:5&fields=item_name,brand_name,nf_ingredient_statement&appId=' + '3ec44756' + '&appKey=' + '915249de7bf1111281fa041ede07ebe3')
    .then(function(response) {
        console.log('full response', response);
        response.data.hits[4].fields.nf_ingredient_statement = self.ingredientList;
        console.log('ingredients', self.ingredientList);
    })
}

    self.getNutrition();

  });
  