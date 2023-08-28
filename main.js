function setup(){
    canvas = createCanvas(900,600);}
    var SpeechRecognition = window.webkitSpeechRecognition;
            var recognition = new SpeechRecognition();
function start(){
        document.getElementById("status").innerHTML = "System is listening please speak";
        recognition.start();}
        recognition.onresult = function(event){
            console.log(event);
            var content =event.results[0][0].transcript;
            document.getElementById("status").innerHTML = "The Speech has been recognized as: "+ content;}
            function setup(){
                video = createCapture(VIDEO);
                video.size(550,500);
            
                canvas= createCanvas(550,550);
                canvas.position(600,100);
            
                poseNet = ml5.poseNet(video, modelLoaded);
                poseNet.on('pose', gotPoses);
            }
            function draw(){
                background('#969A97')
            }
            function modelLoaded(){
                console.log('PoseNet Is Initialized!');
            }
            function gotPoses(results){
                if(results.length > 0){
                    console.log(results);
                }
            }
            
    
