
 var speech_to_text = window.webkitSpeechRecognition;
var recognition = new speech_to_text;

function start() {
    document.getElementById("textbox").innerHTML = " ";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var result = event.results[0][0].transcript;
    console.log(result);
    document.getElementById("textbox").innerHTML = result;
    if(result == "selfie"){
     speak();   
     
    }
}
function speak() {
    var text_to_speech = window.speechSynthesis;
    var data = "taking your selfie in 5 seconds "
    var convert = new SpeechSynthesisUtterance(data);
    text_to_speech.speak(convert);
    Webcam.attach(camera);
    setTimeout(function(){
    takesnapshot();
    save();
    },5000);
}
Webcam.set({
    width:360,
    height:250,
    img_format:"png",
    png_quality:90
});
var camera = document.getElementById("camera");

function takesnapshot() {
    Webcam.snap(function(data_uri){
    document.getElementById("result1").innerHTML = '<img id="picture" src="'+data_uri+'">';
    document.getElementById("result2").innerHTML = '<img id="picture" src="'+data_uri+'">';
    document.getElementById("result3").innerHTML = '<img id="picture" src="'+data_uri+'">';
    });
}
