myApp.controller('ImageCapture', function ImageCapture(Upload,UserService,$http, NutritionService) {
    console.log('image capture loaded');
    var image = this;
    var API_KEY = '25f539a74f88957' //
    var parameter = '';

  //  var API_KEY = 'AIzaSyDnHEnyUqglQTflBIECVl5mZDks5M-xRLY';
  //  var API_URL = "https://vision.googleapis.com/v1/images:annotate?key="+API_KEY;
    image.animalProducts = [];
    image.showResults = false;
    image.isVegan = false;
    image.displayIngredients = [];
    image.displayDescriptions = [];
    image.data = {};
    image.progressPercentage=0;

    image.showResults = function() {
        if (image.animalProducts.length < 1) {
            image.isVegan = true;
        } else if (image.animalProducts.length >= 1) {
            image.isVegan = false;
            for (var i=0; i<image.animalProducts.length; i++) {
                image.displayIngredients.push(image.animalProducts[i].ingredient);
                image.displayDescriptions.push(image.animalProducts.description);
            }
            console.log('ingredients', image.displayIngredients, 'desc', image.displayDescriptions)
            
        }
    }

    image.checkImage = function() {
        if (image.file !== null) {
            image.showResults = false;
        }
    }
    
    

    image.uploadFile = function() {
      move();
       Upload.upload({
         url: 'https://api.ocr.space/parse/image',
          data: {
              base64Image: image.file,
              'apikey': API_KEY
          }
          //  url: API_URL,
            //data:requestData
        }).then(function(response) {
          console.log(response.data);
          image.data = response.data.ParsedResults[0].ParsedText;
         console.log(image.data);
         NutritionService.parameter = image.data;
         // console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ', resp.data);
         image.processData();

        }, function(resp) {
            console.log('Error status: ' + resp.status);
        }, function(evt) {
            image.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            // console.log('progress: ' + receipt.progressPercentage + '% ' + evt.config.data.file.name);
        }).then(function() {
            NutritionService.getNutrition();
        }).then(function() {
            image.showResults = true;
            image.animalProducts = NutritionService.animalProducts;
            console.log('ingredient array', NutritionService.animalProducts);
            if (image.animalProducts.length < 1) {
                image.isVegan = true;
            } else if (image.animalProducts.length >= 1) {
                image.isVegan = false;
                for (var i=0; i<image.animalProducts.length; i++) {
                    image.displayIngredients.push(image.animalProducts[i].ingredient);
                    image.displayDescriptions.push(image.animalProducts.description);
                }
                console.log('ingredients', image.displayIngredients, 'desc', image.displayDescriptions)
                
            }
        })

    }; //End of uploadFile function
//};
    image.processData = function() {

    }; //End of processData function

    // image.nonVeganIngredients = ['Caprylic Acid', 'Fish Liver Oil'];
    // image.nonVeganDescriptions = ['A liquid fatty acid from cow’s or goat’s milk Also from palm, coconut, and other plant oils In perfumes, soaps Derivatives: Caprylic Triglyceride, Caprylamine Oxide, Capryl Betaine Alternatives: plant sources, especially coconut oil', 'Female hormones from pregnant mares’ urine Considered a drug Can have harmful systemic effects if used by children Used for reproductive problems and in birth control pills and Premarin, a menopausal drug In creams, perfumes, and lotions Has a negligible effect in the creams as a skin restorative; simple vegetable-source emollients are considered better Alternatives: oral contraceptives and menopausal drugs based on synthetic steroids or phytoestrogens from plants, especially palm-kernel oil Menopausal symptoms can also be treated with diet and herbs']
    
    // This function will show if the product is vegan or not. For now, until the backend routes are set up, this function is just set to toggle on the click of 'toggle results' button.

    

});

function move() {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            elem.style.width = 1 + '%';
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
};




