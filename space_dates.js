// return an array of x equally spaced dates between given start_date, end_date 
function test(start_date, end_date, x){
	// parse the two dates into epic milliseconds
	const startMillis = new Date(start_date).getTime();
	const endMillis = new Date(end_date).getTime();
	// get the difference
	const diff = endMillis-startMillis;
	// find the space between dates 
	const space = diff/x;
	let incrementMillis = startMillis;
	const returnArray = [];
	// loop x times adding space to incrementMillis and storing the value
    for(let i=0; i<x; i++){
		// store the previous incrementMillis as a pretty date
		returnArray.push(new Date(incrementMillis));
		// add space to incrementMillis
		incrementMillis += space;
    }
	// store the endMillis as a pretty date
	returnArray.push(new Date(endMillis));
	return returnArray;
}
test("2019-01-01 00:00:00", "2019-01-02 00:00:00", 24)
test("2016-01-01 00:00:00", "2016-01-08 00:00:00", 42)