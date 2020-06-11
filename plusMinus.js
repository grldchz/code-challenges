/**
6
-4 3 -9 0 4 1
*/
function plusMinus(arr){
	let n;
	if(Array.isArray(arr)){
		n = arr.length;
	}
	let pos = 0, neg = 0, zero = 0, posRatio = 0, negRatio = 0, zeroRatio = 0;
	for(let i=0;i<n;i++){
		if(arr[i] > 0){
			pos++;
		}
		else if(arr[i] < -0){
			neg++;
		}
		else{
			zero++;
		}
	}
	posRatio = pos/n;
	negRatio = neg/n;
	zeroRatio = zero/n;
    console.log(posRatio.toPrecision(6)
        +"\n"+negRatio.toPrecision(6)
        +"\n"+zeroRatio.toPrecision(6));
}
plusMinus([-4, 3, -9, 0, 4, 1])