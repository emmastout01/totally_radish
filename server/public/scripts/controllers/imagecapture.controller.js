myApp.controller('ImageCapture', ImageCapture);

function ImageCapture(Upload,UserService,$http) {

    var image = this;
    var API_KEY = '25f539a74f88957' //

  //  var API_KEY = 'AIzaSyDnHEnyUqglQTflBIECVl5mZDks5M-xRLY';
  //  var API_URL = "https://vision.googleapis.com/v1/images:annotate?key="+API_KEY;
    image.data = {};
    image.progressPercentage=0;

    image.uploadFile = function() {

    //  var fileReader = new FileReader();
//fileReader.readAsDataURL(image.file);
//fileReader.onload = function (e) {
  //var dataUrl = e.target.result;
  //var base64Data = dataUrl.substr(dataUrl.indexOf('base64,') + 'base64,'.length);


  /*    var requestData = {
                "requests": [
                    {
                      "image": {
                      "content": base64Data
                    },
                    "features": [
                        {
                        "type": "TEXT_DETECTION"
                        }
                      ]
                    }
                  ]
                }; //end of requestData
    //  $http.post(API_URL,requestData).then(function(response){
      //  console.log(response);
    //  })*/
       Upload.upload({
         url: 'https://api.ocr.space/parse/image',
          data: {
              base64Image: image.file,
              'apikey': API_KEY
          }
          //  url: API_URL,
            //data:requestData
        }).then(function(response) {
          image.data = response.data.ParsedResults[0].ParsedText;
         console.log(image.data);
         // console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ', resp.data);
         image.processData();

        }, function(resp) {
            console.log('Error status: ' + resp.status);
        }, function(evt) {
            image.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            // console.log('progress: ' + receipt.progressPercentage + '% ' + evt.config.data.file.name);
        });

    }; //End of uploadFile function
//};
    image.processData = function() {


    }; //End of processData function


}
