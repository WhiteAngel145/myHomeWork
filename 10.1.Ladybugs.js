function ladybugs(input) {
	const lenOfArrayPos = input.shift();
	let startPosOfLadybugs = input.shift().split(' ').map(Number);
	let arrayOfCommand = input;
	let positionOfBugs = new Array(lenOfArrayPos,);

// Create new array and set position of ladybugs in this array.
	function positionOfLadybugs (lenOfArrayPos, startPosOfLadybugs) {
		for (let i = 0; i < lenOfArrayPos; i++) {
			positionOfBugs[i] = 0;
		}
		for (let pos = 0; pos < startPosOfLadybugs.length; pos++) {
			if (startPosOfLadybugs[pos] >= 0 && startPosOfLadybugs[pos] < positionOfBugs.length) {
			positionOfBugs[startPosOfLadybugs[pos]] = 1;
			}
		}
		return positionOfBugs;
	}
	positionOfBugs = positionOfLadybugs(lenOfArrayPos, startPosOfLadybugs);

//Convert string to arrya and get command in separates varibles
	function movingOfLadybugs(arr) {
		for (let item of arr) { 
			let command = item.split(' ');
			let ladygugsIndex = +command[0];
			let ladybugsDirection = command[1];
			let ladybugsSteps = +command[2];

			if (!positionOfBugs[ladygugsIndex]) {
				continue;
			}

			positionOfBugs[ladygugsIndex] = 0; 

			if (ladybugsDirection === 'left') {
				let newIndexOfLadybug = ladygugsIndex - ladybugsSteps;
				if (newIndexOfLadybug >= 0) {
					while (positionOfBugs[newIndexOfLadybug] === 1) {
						newIndexOfLadybug -= ladybugsSteps;
					}
					if (newIndexOfLadybug >= 0) {
					positionOfBugs[newIndexOfLadybug] = 1;
					}
				}
			} else {
				let newIndexOfLadybug = ladygugsIndex + ladybugsSteps;

				if (newIndexOfLadybug < positionOfBugs.length) {
					while (positionOfBugs[newIndexOfLadybug] === 1) {
						newIndexOfLadybug += ladybugsSteps;
					}

					if (newIndexOfLadybug < positionOfBugs.length) {
					positionOfBugs[newIndexOfLadybug] = 1;
					}
				}
			}
		}
		return positionOfBugs;
	}
	
	let result = movingOfLadybugs(arrayOfCommand);
	console.log(result.join(' '));
}

ladybugs([ 3, '0 1', '0 right 1', '2 right 1']);
ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([ 5, '3', '3 left 2', '1 left -2']);