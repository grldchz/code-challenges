/**
Research Square
*/
function researchSquare() {
	let ret="";
	for(let i=1;i<100;i++){
		let n = i/3;		
		let multipleOfThree = !((n - Math.floor(n)) !== 0);
		n = i/5;		
		let multipleOfFive = !((n - Math.floor(n)) !== 0);
		if(multipleOfThree && !multipleOfFive){
			ret+="Research ";
		}
		else if(!multipleOfThree && multipleOfFive){
			ret+="Square";
		}
		else if(multipleOfThree && multipleOfFive){
			ret+="Research Square";
		}
		else{
			ret+=""+i;
		}
		ret+="\n";
	}
	return ret;
}
researchSquare()

When the coronavirus hit I started seeing graphs and charts displaying data about the virus.  But, none of them showed me exactly what I wanted to seeing regarding US states and counties.  I also started hearing about these charts and graphs manipulating the data to look a certain way.  Anyways, I endeavored to create my own coronavirus chart showing nytimes data by state and county.  To see the chart in action please go to http://grilledcheeseoftheday.com or copy and paste the contents of coronavirus.latest.json into https://vega.github.io/editor.