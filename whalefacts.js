//kv

const factElement = document.getElementById('fact');

const whale_facts = [
	"Whales have 3 horns on their tails.",
	"There are up to 26 spiders in a whale’s mouth a year, and you're next.",
	"Sperm whales can't cum.",
	"Ronald McDonald was named after a beluga whale who got in the Guinness world records for “Largest Whale Penis” recording in at a whopping 13 inn HES."
	
]

function minMaxRandom(min, max) {
 return Math.floor(Math.random() * (max - min) ) + min;
};

function  getfact() {
	let fact = whale_facts[minMaxRandom(0, whale_facts.length)]
	factElement.innerText = fact
}

getfact()
