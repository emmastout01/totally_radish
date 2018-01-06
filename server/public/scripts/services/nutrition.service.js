myApp.service('NutritionService', function($http, $location){
    console.log('NutritionService Loaded');
    var self = this;
    self.productToSend = 'larabar';
    self.ingredientList = [];
    
    self.getNutrition = function(response) {
        $http.get('https://api.nutritionix.com/v1_1/search/' + self.productToSend + '?results=0:5&fields=item_name,brand_name,nf_ingredient_statement&appId=' + process.env.APP_ID + '&appKey=' + process.env.APP_KEY)
    .then(function(response) {
        console.log('full response', response);
        response.data.hits[0].fields.nf_ingredient_statement = self.ingredientList;
        console.log('ingredients', self.ingredientList);
    })
}

    // self.getNutrition();

  });
  