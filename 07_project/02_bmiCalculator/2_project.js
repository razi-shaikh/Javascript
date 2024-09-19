form = document.querySelector('form');
form.addEventListener('submit',function (event){
    event.preventDefault();
    const height = Number(document.querySelector('#height').value);
    const weight = Number(document.querySelector('#weight').value);
    const result = document.querySelector('.result')
    const status = document.querySelector('.status')

    if(height>0 && weight>0){
        const bmiCal = (weight / ((height*0.01)*(height*0.01))).toFixed(2);
        result.innerHTML=`${bmiCal}`
        if((bmiCal)>=18.6 && (bmiCal)<24.9){
            status.innerHTML='Normal Weight'
        }
        else if((bmiCal)<18.6){
            status.innerHTML='Under Weight'
        }
        else if((bmiCal)>24.9){
            status.innerHTML='Over Weight'
        }
    }
    else{
        result.innerHTML=`Please enter valid height and weight`
    }
})