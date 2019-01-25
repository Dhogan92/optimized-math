for(let i = 1; i <= 100; i++) {
	// Checks if number is divisible by 2. if so, then checks to see if the same number is divisible by 3
	if(i % 2 == 0 ) {
		if(i % 3 == 0)
			console.log('The number ' + i + ' is divisible by two and three')
		else 
			console.log('The number ' + i + ' is even')
	}
	// when number IS NOT divisible by 2. Check to see if the same number is divisible by 3
	else if (i % 2 !== 0) {
		if(i % 3 == 0)
			console.log('The number ' + i + ' is divisible by three')
		else 
			console.log('The number ' + i + ' is odd')
	}
	// Default
	else {
		console.log('Cannot Find Answer: Try Again')
	}
}