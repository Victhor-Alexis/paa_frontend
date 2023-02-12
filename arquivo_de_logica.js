let database = [
    {name: "Iron man", human: true, youtuber: false, movie: true, original: false, inventor: true, indian: false},
    {name: "Einstein", human: true, youtuber: false, movie: false, original: true, inventor: true, indian: false},
    {name: "Carry Minati", human: true, youtuber: true, movie: false, original: true, inventor: false, indian: true},
    {name: "PewDiePie", human: true, youtuber: true, movie: false, original: true, inventor: false, indian: false},
    {name: "Nemo", human: false, youtuber: false, movie: true, original: false, inventor: false, indian: false},
    {name: "Narendra Modi", human: true, youtuber: false, movie: false, original: true, inventor: false, indian: true},
    {name: "Mukesh Ambani", human: true, youtuber: false, movie: false, original: true, inventor: true, indian: true}
];

function takeChance(answer, property) {
    let ans = answer === "y" ? true : false;
    let toRemove = [];
    let auxDatabase = [];

    for (let d of database) {
        if (d[property] !== ans) {
            toRemove.push(d);
        }
    }

    for (let i of toRemove) {
        let index = database.indexOf(i);
        database.splice(index, 1);
    }

    if (database.length === 1) {
        console.log(`Your character is ${database[0].name}.`);
        process.exit();
    } else {
        console.log("E agora mané?")
    }
}

let ans = prompt("Is your character human (y, n)?");
takeChance(ans, "human");

ans = prompt("Is your character a YouTuber (y, n)?");
takeChance(ans, "youtuber");

ans = prompt("Is your character in a movie (y, n)?");
takeChance(ans, "movie");

ans = prompt("Is your character original (y, n)?");
takeChance(ans, "original");

ans = prompt("Is your character an inventor (y, n)?");
takeChance(ans, "inventor");

ans = prompt("Is your character Indian (y, n)?");
takeChance(ans, "indian");