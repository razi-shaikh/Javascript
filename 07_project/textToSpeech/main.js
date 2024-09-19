let form=document.querySelector('form');
form.addEventListener('submit',function speaker(event){
    let textArea=document.querySelector('textarea');
    let text=textArea.value;
    let speakWord= new SpeechSynthesisUtterance(text);
    event.preventDefault();
    speechSynthesis.speak(speakWord)
})
