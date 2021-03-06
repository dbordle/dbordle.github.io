var allVariations =
[{title:"Wordle", link:"",link:"https://www.nytimes.com/games/wordle/index.html", description:""},
    {title:"absurdle",link:"https://qntm.org/files/absurdle/absurdle.html",description:""},
    {title:"airportle",link:"https://airportle.glitch.me/",description:""},
    {title:"antiwordle",link:"https://www.antiwordle.com/",description:""},
    {title:"arepo (latin)",link:"https://hands-up-education.org/arepo/arepo.html",description:""},
    {title:"bordle",link:"https://apps.nookkin.com/bordle/",description:""},
    {title:"byrdle",link:"https://www.byrdle.net/",description:""},
    {title:"canuckle",link:"https://canucklegame.github.io/canuckle/",description:""},
    {title:"chordle",link:"https://www.chordle.synthase.cc/",description:""},
    {title:"crosswordle 1",link:"https://crosswordle.mekoppe.com/",description:""},
    {title:"crosswordle 2",link:"https://crosswordle.vercel.app/?daily=1",description:""},
    {title:"crosswordle 3",link:"https://crosswordle.serializer.ca/",description:""},
    {title:"dordle",link:"https://zaratustra.itch.io/dordle",description:""},
    {title:"dungleon",link:"https://www.dungleon.com/",description:""},
    {title:"Duotrigordle",link:"https://duotrigordle.com/",description:""},
    {title:"flaggle",link:"https://ducc.pythonanywhere.com/flaggle/",description:""},
    {title:"globle",link:"https://globle-game.com/",description:""},
    {title:"gootsle",link:"https://gootsle.glitch.me/",description:""},
    {title:"gordle",link:"https://gordle.herokuapp.com/",description:""},
    {title:"hard words",link:"https://hard-words.shittywebapp.com/",description:""},
    {title:"heardle (phonemes)",link:"https://heardle.glitch.me/",description:""},
    {title:"Heardle (music)",link:"https://www.heardle.app/",description:""},
    {title:"hello wordl",link:"https://hellowordl.net/",description:""},
    {title:"invisidle",link:"https://invisidle.glitch.me/",description:""},
    {title:"japanese",link:"https://taximanli.github.io/kotobade-asobou/",description:""},
    {title:"japanese 4 char idioms",link:"https://motemen.github.io/kanjile/",description:""},
    {title:"jewdle",link:"https://www.jewdle.app/",description:""},
    {title:"JoJodle (JJBA)",link:"https://jojo-news.com/fun/jojodle/",description:""},
    {title:"Jordle",link:"https://www.jellyneo.net/jordle/",description:""},
    {title:"kanyerdle",link:"https://www.kanyerdle.com/",description:""},
    {title:"le mot (french)",link:"https://wordle.louan.me/",description:""},
    {title:"letterle",link:"https://edjefferson.com/letterle/",description:""},
    {title:"lewdle",link:"https://www.lewdlegame.com/",description:""},
    {title:"London Subwaydle",link:"https://london.subwaydle.com/",description:""},
    {title:"lordle of the rings",link:"https://digitaltolkien.github.io/vue-wordle/",description:""},
    {title:"mahjong handle",link:"https://mahjong-handle.update.sh/",description:""},
    {title:"mathler",link:"https://www.mathler.com/",description:""},
    {title:"Metrodle",link:"https://metrodle.com/",description:""},
    {title:"nerdle",link:"https://nerdlegame.com/",description:""},
    {title:"NYC subwaydle",link:"https://www.subwaydle.com/",description:""},
    {title:"octordle",link:"https://octordle.com/",description:""},
    {title:"passwordle",link:"https://rsk0315.github.io/playground/passwordle.html",description:""},
    {title:"polydle",link:"https://polydle.github.io/",description:""},
    {title:"primel",link:"https://converged.yt/primel/",description:""},
    {title:"queerdle",link:"https://queerdle.com/",description:""},
    {title:"quordle",link:"https://www.quordle.com/#/",description:""},
    {title:"rewordle",link:"https://rewordle.glitch.me/",description:""},
    {title:"semantle",link:"https://semantle.novalis.org/",description:""},
    {title:"Sedecordle",link:"http://www.sedecordle.com/",description:""},
    {title:"spanish",link:"https://wordle.danielfrg.com/",description:""},
    {title:"squardle",link:"https://fubargames.se/squardle/",description:""},
    {title:"squarewordle",link:"https://squareword.org/",description:""},
    {title:"squirdle",link:"https://squirdle.fireblend.com/",description:""},
    {title:"squabble",link:"https://squabble.me/",description:""},
    {title:"swordle",link:"https://wordle.starwars.guide/",description:""},
    {title:"taylordle",link:"https://www.taylordle.com/",description:""},
    {title:"tirtl",link:"https://tirtl.glitch.me/",description:""},
    {title:"waffle",link:"https://wafflegame.net/",description:""},
    {title:"Woordle (Dutch)",link:"https://woordle.nl",description:""},
    {title:"wordawazzle",link:"https://wordawazzle.com.au/",description:""},
    {title:"wordle",link:"https://www.nytimes.com/games/wordle/index.html",description:""},
    {title:"wordle2",link:"https://www.wordle2.in/",description:""},
    {title:"WordleWordle",link:"https://wordle10.com",description:""},
    {title:"worduel",link:"https://www.worduel.net/",description:""},
    {title:"wordle unlimited",link:"https://www.wordleunlimited.com/",description:""},
    {title:"worldle",link:"https://worldle.teuteuf.fr/",description:""},
    {title:"???????????? (Ukrainian)",link:"https://slovko.zaxid.net/",description:""}];

function startup() {
    var variations = document.getElementById("variations");
    allVariations.forEach( variation =>
        variations.innerHTML = variations.innerHTML + 
            `<a href="${variation.link}" target="_blank" class="variation">
                <div class="test">
                    <span class="variation-title">${variation.title}</span><br>
                    <span class="variation-desc">${variation.description}</span>
                </div>
            </a>`
    )
}