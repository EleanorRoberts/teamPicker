const randomNames = ['Ash Not-a-Footballer', 'Spiderman', 'Mr Potato Head', 'Jessushi', 'Xerxes', 'Mister Big', 'Uncle Bob', 'Caroline Francess', 'Jake\'s Sentient Black Jack Game', 'Barry Trotter', 'Damo', 'Mr Darcy', 'Will 2', 'Mr Suit', 'Nova (the best dog)']
// Defining DOM Elements
const addVictim: HTMLButtonElement = document.querySelector<HTMLButtonElement>('#addVictim');
const removeVictim: HTMLButtonElement = document.querySelector<HTMLButtonElement>('#removeVictim');
const victimProcessing: HTMLDivElement = document.querySelector<HTMLDivElement>('#victimProcessing');
const determineFates: HTMLFormElement = document.querySelector<HTMLFormElement>('form');
const resultingTeams: HTMLDivElement = document.querySelector<HTMLDivElement>('.results');
const errorsOutput: HTMLDivElement = document.querySelector<HTMLDivElement>('.errors');

/**
 * Resets the errors and teams
 * Fetches and shuffles victims
 */
determineFates.addEventListener('submit', (e: Event) => {
    resultingTeams.textContent = '';
    errorsOutput.textContent = '';
    let victims: NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>('.victim');
    let numberOfTeams = document.querySelector<HTMLInputElement>('#numberOfTeams');
    e.preventDefault();
    // Use the nodeList to make an array of victims
    let victimArray = getAllVictims(victims);
    if (victimArray.length === 1 && victimArray[0] === 'Validation failed') {
        console.log(victimArray);
        return;
    }
    // Shuffle the victims
    let shuffledVictims = shuffleVictims(victimArray);
    // Check that there is a value for number of teams
    if (numberOfTeams.value === '') {
        errorsOutput.textContent += 'Number of teams not specified! ';
        return;
    }
    // Use the shuffled victims and the number of teams to generate teams into nested arrays
    let fatesOfVictims = determineFatesOfVictims(shuffledVictims, parseInt(numberOfTeams.value));
    displayVictimFates(fatesOfVictims);
})

// Add an event listener to the click of the addVictim button
addVictim.addEventListener('click', (e: Event) => {
    // Check to see if the remove button should be visible
    if (victimProcessing.children.length === 1) {
        removeVictim.style.display = 'inline-block';
        removeVictim.classList.remove('disabled');
    }
    // Link to DOM victim Elements
    let victimFields: NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>('.victim');
    // Get all currently unused placeholders
    let placeholders: Array<string> = getAllPlaceholders(victimFields);
    let availableRandomNames = randomNames.filter(name => placeholders.indexOf(name) === -1);
    // Create variable randomName with default empty string
    let randomName = '';
    // If there there are random names available
    if (availableRandomNames[0] !== undefined) {
        randomName = availableRandomNames[Math.floor(Math.random() * availableRandomNames.length)];
    }
    // Create a new input field and add a type, class and placeholder
    let newVictim: HTMLInputElement = document.createElement("input");
    newVictim.type = 'text';
    newVictim.className = 'victim';
    newVictim.placeholder = randomName + '...';
    // Append the new victim into the victimProcessing field
    victimProcessing.appendChild(newVictim);
})

// Add event listener to the removeVictim button
removeVictim.addEventListener('click', (e: Event) => {
    // Remove the final child of the victimProcessing div
    victimProcessing.removeChild(victimProcessing.lastChild);
    // If there is only one input field in the processing div, remove the - button and disable
    if (victimProcessing.children.length === 1) {
        removeVictim.style.display = 'none';
        removeVictim.classList.add('disabled');
    }
})

function getAllVictims(victims: NodeListOf<HTMLInputElement>): Array<string> {
    // Create an array of victims from the input fields
    let victimArray = [];
    victims.forEach(victim => {
        if (victim.value !== '') {
            victimArray.push(victim.value);
        }
    })
    // If there is no victims added
    if (victimArray.length === 0) {
        errorsOutput.textContent += 'No teammates added! ';
        return [];
    }
    if (victimArray.length > 0) {
        let filteredVictims = [];
        victimArray.forEach(victim => {
            if (Validator.validateName(victim)) {
                filteredVictims.push(victim);
            }
        })
        if (filteredVictims.length !== victimArray.length) {
            errorsOutput.textContent += 'Check your names! Only letters, dashes and dots allowed.  ';
            return ['Validation failed'];
        }
    }
    return victimArray;
}

function getAllPlaceholders(placeholderVictims: NodeListOf<HTMLInputElement>): Array<string> {
    let placeholderVictimsArray = [];
    placeholderVictims.forEach(victim => {
        if (victim.placeholder !== '' && victim.placeholder !== undefined) {
            placeholderVictimsArray.push(victim.placeholder.slice(0, -3));
        }
    })
    return placeholderVictimsArray;
}

function shuffleVictims(victims: Array<string>): Array<string> {
    return victims
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
}

function determineFatesOfVictims(victims: Array<string>, numberOfTeams: number): Array<Array<string>> {
    let teamsOfFate: Array<Array<string>> = [];
    let j = 0;
    if (numberOfTeams < victims.length) {
        for (let h = 0; h < numberOfTeams; h++) {
            teamsOfFate.push([]);
        }
    } else {
        for (let h = 0; h < victims.length; h++) {
            teamsOfFate.push([]);
        }
    }
    for (let i = 0; i < victims.length; i++) {
        if (j === numberOfTeams) {
            j = 0;
        }
        teamsOfFate[j].push(victims[i]);
        j++;
    }
    return teamsOfFate;
}

function displayVictimFates(fatesOfVictims: Array<Array<string>>): void {
    let output = '';
    let teamNumber = 1;
    fatesOfVictims.forEach(arrayOfVictims => {
        output += '<div class="team col col-12 col-sm-6 col-md-3">';
        output += '<h2>Team ' + teamNumber + '</h2><ul class="list-group list-group-flush">';
        arrayOfVictims.forEach(victim => {
            output += '<li class="victim">' + victim + '</li>';
        })
        output += '</ul></div>';
        teamNumber++;
    })
    resultingTeams.innerHTML = output;
}

class Validator {
    static validateName(name: string)
    {
        const regex = /^[A-Za-z \-\.]+$/;
        return name.match(regex);
    }
}
