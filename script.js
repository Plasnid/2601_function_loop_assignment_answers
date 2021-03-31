/**
 * * Q1.  30 Marks
 * * Create a self executing function that returns an object describing an animal of your choice.
 * * Ensure your animal object contains the following information
 * * -weight
 * * -covering
 * * -length
 * * -diet
 * * -predators
 * * -habitat
 * * -source information web page
 * 
 * * Your object needs to contain at least:
 * * -1 array containing 3 or more entries
 * * -1 or more strings
 * * -1 or more numbers
 * * -1 or more booleans
 */

let animalFacts = (function(){
    return {
        name: "bilby",
        otherNames: ["greater bilby", "dalgyte", "greater rabbit-eared bandicoot"],
        nativeTo: "Australia",
        currentlyLimitedTo: ["Great Sandy", "Tanami", "Gibson deserts", "southwestern Queensland"],
        family: "Peramelidae",
        sexuallyDimorphic: true,
        aproximateWeightinKg: 2.5,
        description: "The bilby is known for its long snout, blue-gray fur, white underbelly, and long, hairless ears that resemble those of rabbits. On its tail is a prominent band of black fur that terminates with a white tuft that surrounds a naked, spurlike tip.",
        maximumLengthInCM: 55,
        GraspingApendages: "The ends of the forelimbs terminate in five digits with the middle three digits possessing a claw.",
        locomotion: "loping",
        sourceReference: "https://www.britannica.com/animal/bilby",
        hasPouch: true,
        pouchFacing: "reverse",
        diet: "omnivore",
        nativePredators: ["wedge-tailed eagles (Aquila audax)", "carpet pythons (Morelia spilota)", "monitor lizards (family Varanidae)"],
        invasivePredators:["red foxes", "feral cats", "dingoes"],
        livesIn: "burrows",
        solitary: true,
        littersPerYear: 4,
        gestationPeriod: "12 to 14 days",
        pouchPeriod: "75-80 days",
        lifeSpan: "6 to 11 years",
        convervationStatus: "vulnerable",
        covering: "fur"
    }
})();
/**
 * * Q2. 20 marks
 * * Create a function expression that takes the output of question 1 and
 * * loops backwards through the array in the object console logging each time. 
 */
let factLoop = function(facts){
    for(let i=facts.nativePredators.length-1; i>=0; i--){
        console.log(facts.nativePredators[i]);
    }
}
factLoop(animalFacts)

/**
 * * Q3. 25 marks
 * * Create a fat arrow function that takes in the output of question 1 and
 * * returns a string in the following format: The __animalName__ lives in __habitat__ and has a covering of __covering__.
 * * Ensure that your function is a single line.
 */
let habitatReturner = animal => `The ${animal.name} lives in ${animal.currentlyLimitedTo[0]} and has a covering of ${animal.covering}`;
console.log(habitatReturner(animalFacts));

/**
 * * Q4. 25 marks
 * * Create a function declaration that takes in the output of question 1, and loops through
 * * all of it's values, console logging each individual key:value pair.  
 * * To answer this question review how to loop through an object.
 */
function animalObjLooper(animal){
    for(feature in animal){
        console.log(`${feature}: ${animal[feature]}`);
    };
}
animalObjLooper(animalFacts);