const buttons = document.querySelectorAll('.button');
const bodys = document.querySelector('body');

buttons.forEach((item) => {
    // console.log(item);
    item.addEventListener('click', function (itemClick){
        console.log(itemClick);
        console.log(itemClick.target);
        switch (itemClick.target) {
            case Grey:
                bodys.style.backgroundColor='grey';
                break;
            case Orange:
                bodys.style.backgroundColor='orange';
                break;
            case Black:
                bodys.style.backgroundColor='black';
                break;
            case Yellow:
                bodys.style.backgroundColor='yellow';
                break;
            case Blue:
                bodys.style.backgroundColor='blue';
                break;
            case Red:
                bodys.style.backgroundColor='Red';
                break;
            
            default:
                bodys.style.backgroundColor='white';
                break;
        }
    })
})