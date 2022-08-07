function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true}); 
    classifier = m15.soundclassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}