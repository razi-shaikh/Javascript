const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const body = document.querySelector('body')
let manage;
/*
let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
// console.log(typeof colorArray[2]);//type is string
// console.log(colorArray.length);//length is 50
function interval(){
	let index1=random();
	let index2=random();

	if(index1!==index2 || index1===index2){
		if (index1===index2) {
			index2=random();
			console.log('index1 and index2 is mached');
		}
		// body.style.backgroundColor=`${colorArray[index1]}`
		body.style.backgroundImage=`linear-gradient(to right,${colorArray[index1]},${colorArray[index2]})`
		// console.log(`${index1} ${index2}`);
	}
}

function random() {
	const min=1,max=50;
	return Math.floor(Math.random()*(max-min+1)+min)
}
*/


const randomColor = ()=>{
	const hex = '0123456789ABCDEF'
	let color = '#'
	
	for (let i = 0; i < 6; i++) {
		color += hex[Math.floor(Math.random()*16)]
	}
	
	return color;
}
// console.log(randomColor());
function interval() {
	// body.style.backgroundColor=`${randomColor()}`
	let color1=randomColor();
	let color2=randomColor();
	console.log(color1+' '+color2);
	// body.style.backgroundImage=`linear-gradient(to left,${color1},${color2})`
	body.style.backgroundImage=`linear-gradient(to right,${color1},${color2})`
}
start.addEventListener('click',function(){
	manage=setInterval(interval,1000)
})

stop.addEventListener('click',() =>{
	clearInterval(manage)
})