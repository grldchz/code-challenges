/**
3
11 2 4
4 5 6
10 8 -12
*/
function diagonalDifference(arr) {
	let n;
	if(arr[0].length){
		n = arr[0].length;
	}
	else{
		n = arr.shift();
	}
    let diag1 = 0, diag2 = 0;
	for(let i=0;i<n;i++){
		if(Array.isArray(arr[i])){
			for(let j=0;j<n;j++){
				if (i == j){ 
					diag1 += arr[i][j]; 
				}
				if (i == n - j - 1){
					diag2 += arr[i][j]; 
				} 
			}
		}
	}
    return Math.abs(diag1 - diag2);
}
diagonalDifference([3,[11,2,4],[4,5,6],[10,8,-12]])