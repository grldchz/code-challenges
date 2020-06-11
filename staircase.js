/**
6
*/
function staircase(n) {
	let ret="";
	for(let i=0;i<n;i++){
		for(let j=n-1;j>-1;j--){
			if(i == j) ret+="#";
			if(i < j) ret+=" ";
		}
		for(let j=n;j>-1;j--){
			if(i > j) ret+="#";
		}
		ret+="\n";
	}
	console.log(ret);
}
staircase(6)
