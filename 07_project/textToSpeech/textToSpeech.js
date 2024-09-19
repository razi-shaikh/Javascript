let text="How are you I am Fine To store the value from a textarea field into a JavaScript variable, you can use the value property of the textarea element";
let speakWord= new SpeechSynthesisUtterance(text);
document.onclick=()=>{
    speechSynthesis.speak(speakWord)
}