const buttons = document.querySelectorAll('.button');
const bodys = document.querySelector('body');

buttons.forEach((item) => {
    // console.log(item);
    item.addEventListener('click', function (itemClick){
        // console.log(itemClick);
        // console.log(itemClick.target.id);
        if(itemClick.target){
            bodys.style.backgroundColor=`${itemClick.target.id}`;
            // break;
        }
        else{
            bodys.style.backgroundColor=`${itemClick.target.id}`;
        }
    })
})