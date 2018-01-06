myApp.controller('ImageCapture', ImageCapture);

function ImageCapture(Upload,UserService,$http) {

    var image = this;
    var API_KEY = '25f539a74f88957';
    var API_URL = "https://vision.googleapis.com/v1/images:annotate?key="+API_KEY;
    image.data = {};
    image.progressPercentage=0;

    image.uploadFile = function() {
      var requestData = {
                "requests": [
                    {
                      "image": {
                      "content": image.file
                    },
                    "features": [
                        {
                        "type": "TEXT_DETECTION"
                        }
                      ]
                    }
                  ]
                }; //end of requestData
      $http.post(API_URL,requestData).then(function(response){
        console.log(response);
      })
      /*  Upload.upload({
            url: 'https://vision.googleapis.com/v1/images:annotate',
            data:
        }).then(function(resp) {
            image.data = resp.data.ParsedResults[0].ParsedText;
            console.log(image.data);
            // console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ', resp.data);
            image.processData();

        }, function(resp) {
            console.log('Error status: ' + resp.status);
        }, function(evt) {
            image.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            // console.log('progress: ' + receipt.progressPercentage + '% ' + evt.config.data.file.name);
        });*/

    }; //End of uploadFile function

    image.processData = function() {


    }; //End of processData function


}
