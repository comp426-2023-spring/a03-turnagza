function genint(i) {
	const rnd = Math.floor(Math.random() * i + 1);
	return rnd;
  }
   
export function rpsls(locz) {
	//epic dlc expansion pack function
    var opponent = "null";
	const rand = genint(5);
	
	
	switch (rand) {
	case 1:
		var opponent = "rock"
		break;	
	case 2:
		var opponent = "paper"
		break;	
	case 3:
		var opponent = "scissors"
		break;
	case 4:
		var opponent = "lizard"
		break;
	case 5:
		var opponent = "spock"
		break;	
	default:
		console.log("unexpected input");
		console.log(rand)
		return 0;
	}
	if(locz == "none")
    {
		var finalVal = { player: opponent };
		return finalVal;
    }
    
	
	let inputLC = locz.toLowerCase();
	var finalResult = winChecker(inputLC, opponent)
	var finalVal = { player: inputLC, opponent: opponent, result: finalResult };
	return finalVal;
}


export function rps(locz) {
	//regular rock paper scissors function
    var opponent = "null";
	const rand = genint(3)
	
	
	switch (rand) {
	case 1:
		var opponent = "rock"
		break;	
	case 2:
		var opponent = "paper"
		break;	
	case 3:
		var opponent = "scissors"
		break;	
	default:
		console.log("unexpected input");
		console.log(rand)
		return 0;
	}
	if(locz == "none")
    {
		var finalVal = { player: opponent };
		return finalVal;
    }
    
	
	let inputLC = locz.toLowerCase();
	var finalResult = winChecker(inputLC, opponent)
	var finalVal = { player: inputLC, opponent: opponent, result: finalResult };
	return finalVal;
}

function winChecker(inputLC, opponent){
	//function to check for for all possible win/lose cases, standardizes input with .toLowerCase
    if (inputLC == opponent) var finalResult = "tie";
	if (inputLC == "paper" && opponent == "scissors") var finalResult = "lose";
	if (inputLC == "paper" && opponent == "rock") var finalResult = "win";
	if (inputLC == "paper" && opponent == "lizard") var finalResult = "lose";
	if (inputLC == "paper" && opponent == "spock") var finalResult = "win";
	if (inputLC == "scissors" && opponent == "rock") var finalResult = "lose";
	if (inputLC == "scissors" && opponent == "paper") var finalResult = "win";
	if (inputLC == "rock" && opponent == "paper") var finalResult = "lose";
	if (inputLC == "rock" && opponent == "scissors") var finalResult = "win";
	if (inputLC == "rock" && opponent == "lizard") var finalResult = "win";
	if (inputLC == "lizard" && opponent == "paper") var finalResult = "win";
	if (inputLC == "lizard" && opponent == "scissors") var finalResult = "lose";
	if (inputLC == "lizard" && opponent == "spock") var finalResult = "win";
	if (inputLC == "spock" && opponent == "rock") var finalResult = "win";
	if (inputLC == "spock" && opponent == "paper") var finalResult = "lose";
	if (inputLC == "spock" && opponent == "scissors") var finalResult = "win";
	if (inputLC == "spock" && opponent == "lizard") var finalResult = "lose";	
	if (inputLC == "rock" && opponent == "spock") var finalResult = "lose";
	if (inputLC == "scissors" && opponent == "lizard") var finalResult = "win";
	if (inputLC == "scissors" && opponent == "spock") var finalResult = "lose";
	if (inputLC == "lizard" && opponent == "rock") var finalResult = "lose";
	return finalResult;
}
