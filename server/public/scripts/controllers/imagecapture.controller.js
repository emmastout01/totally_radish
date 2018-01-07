myApp.controller('ImageCapture', ImageCapture);

function ImageCapture(Upload,UserService,$http, NutritionService) {
    var image = this;
    image.userObject = UserService.userObject;
    var API_KEY = '25f539a74f88957' //
    var parameter = '';

  //  var API_KEY = 'AIzaSyDnHEnyUqglQTflBIECVl5mZDks5M-xRLY';
  //  var API_URL = "https://vision.googleapis.com/v1/images:annotate?key="+API_KEY;
    image.data = {};
    image.progressPercentage=0;

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
          //console.log(response.data);
          image.data = response.data.ParsedResults[0].ParsedText;
         //console.log(image.data);
         NutritionService.parameter = image.data;
         console.log('image text: ', NutritionService.parameter);
         // console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ', resp.data);
         image.processData();

        }, function(resp) {
            console.log('Error status: ' + resp.status);
        }, function(evt) {
            image.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            // console.log('progress: ' + receipt.progressPercentage + '% ' + evt.config.data.file.name);
        }).then(function() {
            NutritionService.getNutrition();
        })

    }; //End of uploadFile function
//};
    image.processData = function() {


    }; //End of processData function

};

function move() {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            elem.style.width = 1 + '%';
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
