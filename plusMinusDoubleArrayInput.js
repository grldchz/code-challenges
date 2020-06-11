/**
6
-4 3 -9 0 4 1
*/
function plusMinus(arr){
	let n;
	if(arr[0].length){
		n = arr[0].length;
	}
	else{
		n = arr.shift();
	}
	let pos = 0, neg = 0, zero = 0, posRatio = 0, negRatio = 0, zeroRatio = 0;
	for(let i=0;i<n;i++){
		if(Array.isArray(arr[i])){
			for(let j=0;j<n;j++){
		if(arr[i][j] > 0){
			pos++;
		}
		else if(arr[i][j] < -0){
			neg++;
		}
		else{
			zero++;
		}
		}
		}
	}
	posRatio = pos/n;
	negRatio = neg/n;
	zeroRatio = zero/n;
	return [posRatio.toPrecision(4), negRatio.toPrecision(4), zeroRatio.toPrecision(4)];
}
plusMinus([6,[-4, 3, -9, 0, 4, 1]])