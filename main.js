
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6eQpv3ZIM/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        rr= Math.floor(Math.random()*255)+1;
        gg= Math.floor(Math.random()*255)+1;
      bb= Math.floor(Math.random()*255)+1;
      document.getElementById("hear").innerHTML='I can hear'+results[0].label
      document.getElementById("ac").innerHTML='Accuracy'+(results[0].confidence*100).toFixed(2)+"%";
      document.getElementById("hear").style.color="rgb("+rr+","+gg+","+rr+")";
      document.getElementById("ac").style.color="rgb("+rr+","+gg+","+rr+")";
      img=document.getElementById('aieng1');
      img1=document.getElementById('aienb1');
      img2=document.getElementById('aienr1');
      img3=document.getElementById('aiengr1');
      if(results[0].label=="clap"){
          img.src='aliens-01.gif';
          img1.src='aliens-02.png';
          img2.src='aliens-03.png';
          img3.src='aliens-04.png';
      }
      else if(results[0].label=="snap"){
        img.src='aliens-01.png';
        img1.src='aliens-02.gif';
        img2.src='aliens-03.png';
        img3.src='aliens-04.png';
    }
     else{
        img.src='aliens-01.png';
        img1.src='aliens-02.png';
        img2.src='aliens-03.gif';
        img3.src='aliens-04.png';
    }
    else{
        img.src='aliens-01.png';
        img1.src='aliens-02.png';
        img2.src='aliens-03.png';
        img3.src='aliens-04.gif';
    }
    }
}