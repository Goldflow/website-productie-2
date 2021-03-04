# Les 6: Loops (lussen) & Herhaling

We proberen een eerste basis te zien en we maken een praktische oefening.

Daarna kan je werken aan opdrachten, de verplichte zelfstudie van de week maken (hiervaan plaats je sowieso een screenshot tegen het einde van de les) of gewoon meevolgen (maar je moet sowieso dan op een ander moment nog je opdrachten doen en zelfstudie vervolledigen).

## Benodigdheden

Je hebt alle vorige lessen doorgenomen en meegevolgd.

Meerbepaald zijn de volgende concepten belangrijk;

## Loops (lussen)

Dit is de equivalente link van Studie Anker: [https://www.studieanker.be/js/006-lussen.html](https://www.studieanker.be/js/006-lussen.html)

## Herhaling in de vorm van oefeningen

We gaan vandaag enkele oefeningen maken die je later ook gaat indienen. Er is ruim de tijd om deze oefeningen te doen tijdens de les.


## Theorie

Programmeertalen zijn erg handig voor het snel voltooien van repetitieve taken, van meerdere basisberekeningen tot zowat elke andere situatie waarin je veel vergelijkbare werkstukken moet voltooien. Hier zullen we kijken naar de lusstructuren die beschikbaar zijn in JavaScript die dergelijke behoeften verwerken.

<table class="learn-box standard-table"><tbody><tr><th scope="row" _msthash="1727687" _msttexthash="194857">Voorwaarden:</th><td _msthash="1725646" _msttexthash="4615702">Basis computergeletterdheid, een basiskennis van HTML en CSS, <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps" _istranslated="1">JavaScript eerste stappen</a>.</td></tr><tr><th scope="row" _msthash="1728337" _msttexthash="220493">Doelstelling:</th><td _msthash="1726296" _msttexthash="1685411">Om te begrijpen hoe u lussen gebruikt in JavaScript.</td></tr></tbody></table>

## [Keep me in the loop](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#keep_me_in_the_loop "Permalink to Keep me in the loop")

Lussen, lussen, lussen. Naast het feit dat ze worden geassocieerd met [populaire ontbijtgranen,](https://en.wikipedia.org/wiki/Froot_Loops) [achtbanen](https://en.wikipedia.org/wiki/Vertical_loop) en [muzikale productie,](https://en.wikipedia.org/wiki/Loop_(music))zijn ze ook een cruciaal concept in de programmering. Programmeerlussen hebben allemaal te maken met steeds hetzelfde doen, wat in programmeren **iteratie** wordt noemde.

Laten we eens kijken naar het geval van een boer die ervoor zorgt dat hij genoeg voedsel heeft om zijn gezin deze week te voeden. Hij kan de volgende lus gebruiken om dit te bereiken:

  
![ ](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code/loop_js-02-farm.png)

Een lus heeft meestal een of meer van de volgende kenmerken:

- Een **teller**, die wordt geïnitialiseerd met een bepaalde waarde - dit is het startpunt van de lus ("Start: Ik heb geen voedsel", hierboven).
- Een **voorwaarde**\- een echte / valse test om te bepalen of de lus blijft lopen of stopt - meestal wanneer de teller een bepaalde waarde bereikt. Dit wordt geïllustreerd door "Heb ik genoeg eten?" hierboven. Laten we zeggen dat hij 10 porties voedsel nodig heeft om zijn familie te voeden.
- Een **iterator**, die de teller over het algemeen met een kleine hoeveelheid verhoogt op elke opeenvolgende lus totdat de voorwaarde niet langer is . We hebben dit hierboven niet expliciet geïllustreerd, maar we kunnen er wel aan denken dat de boer 2 porties voedsel per uur kan verzamelen. Na elk uur wordt de hoeveelheid voedsel die hij heeft verzameld met twee verhoogd en controleert hij of hij genoeg voedsel heeft. Als hij 10 porties heeft bereikt (het punt waar de toestand niet langer waar is, dus de lus verlaat), kan hij stoppen met verzamelen en naar huis gaan.`true`

In [pseudocode](https://developer.mozilla.org/en-US/docs/Glossary/Pseudocode) ziet dit er ongeveer als volgt uit:

```JavaScript
loop(food = 0; foodNeeded = 10) {
  if (food >= foodNeeded) {
    exit loop;
    // We have enough food; let's go home
  } else {
    food += 2; // Spend an hour collecting 2 more food
    // loop will then run again
  }
}
```
Dus de hoeveelheid voedsel die nodig is, is vastgesteld op 10 en de hoeveelheid die de boer momenteel heeft, is vastgesteld op 0. In elke iteratie van de lus controleren we of de hoeveelheid voedsel die de boer heeft groter is of gelijk is aan de hoeveelheid die hij nodig heeft. Als dat zo is, kunnen we de lus verlaten. Zo niet, dan besteedt de boer een uur aan het verzamelen van twee porties voedsel en loopt de lus weer.

### [Waarom zoveel moeite doen?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#why_bother "Permalink to Why bother?")

Op dit moment begrijp je waarschijnlijk de concepten op hoog niveau achter lussen, maar je denkt waarschijnlijk "OK, geweldig, maar hoe helpt dit me om betere JavaScript-code te schrijven?" Zoals we eerder al zeiden, **hebben lussen allemaal te maken met steeds hetzelfde doen**, wat geweldig is voor het snel voltooien van **repetitieve taken**.

Vaak zal de code enigszins verschillen bij elke opeenvolgende iteratie van de lus, wat betekent dat u een hele lading taken voltooien die vergelijkbaar zijn, maar enigszins anders; als je veel verschillende berekeningen te doen hebt, wil je elke andere doen, niet steeds dezelfde!

Laten we een voorbeeld bekijken om perfect te illustreren waarom lussen zo'n goede zaak zijn. Stel dat we 100 willekeurige cirkels wilden tekenen op een [`element <canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) dan zou dit veel tijd in beslag nemen en zouden we het volgende stukje code 100 moeten herhalen:

Je hoeft voorlopig niet alle code te begrijpen, maar laten we eens kijken naar het deel van de code dat de 100 cirkels tekent:

```JavaScript
for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255,0,0,0.5)';
  ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
  ctx.fill();
}
```

- `random(x)`, eerder gedefinieerd in de code, retourneert een heel getal tussen en .`0``x-1`
- `WIDTH` en zijn de breedte en hoogte van het binnenste browservenster. `HEIGHT`

U moet het basisidee krijgen - we gebruiken een lus om 100 iteraties van deze code uit te voeren, die elk een cirkel in een willekeurige positie op de pagina tekenen. De hoeveelheid code die nodig is, zou hetzelfde zijn, of we nu 100 cirkels, 1000 of 10.000 tekenen. Er hoeft maar één nummer te veranderen.

Als we hier geen lus gebruikten, zouden we de volgende code moeten herhalen voor elke cirkel die we wilden tekenen:

```JavaScript
ctx.beginPath();
ctx.fillStyle = 'rgba(255,0,0,0.5)';
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
ctx.fill();
```

Dit zou erg saai en moeilijk te onderhouden worden. Lussen zijn echt de max.

## [De standaard voor lus](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#the_standard_for_loop "Permalink to The standard for loop")

Laten we beginnen met het verkennen van een aantal specifieke lusconstructies. De eerste, die je meestal zult gebruiken, [](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)is de for-lus. Dit heeft de volgende syntaxis:

```JavaScript
for (initializer; condition; final-expression) {
  // code to run
}
```

Hier hebben we:

1. Het trefwoord , gevolgd door enkele haakjes.`for`
2. Tussen de haakjes hebben we drie items, gescheiden door puntkomma's:
    1. Een **initialisator** - dit is meestal een variabele die is ingesteld op een getal, dat wordt verhoogd om het aantal keren te tellen dat de lus is uitgevoerd. Het wordt ook wel een **tegenvariabele**genoemd .
    2. Een **voorwaarde** - zoals eerder vermeld, definieert dit wanneer de lus moet stoppen met herhalen. Dit is over het algemeen een expressie met een vergelijkingsoperator, een test om te zien of aan de exitvoorwaarde is voldaan.
    3. Een **laatste expressie** - dit wordt altijd geëvalueerd (of uitgevoerd) telkens wanneer de lus een volledige iteratie heeft doorlopen. Het dient meestal om de tegenvariabele te verhogen (of in sommige gevallen te verlagen), om deze dichter bij het punt te brengen waar de voorwaarde niet langer is .`true`
3. Sommige accolades die een codeblok bevatten, worden uitgevoerd telkens wanneer de lus itereert.

Laten we eens kijken naar een echt voorbeeld, zodat we kunnen visualiseren wat deze duidelijker doen.

```JavaScript
const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My cats are called ';
const para = document.querySelector('p');

for (let i = 0; i < cats.length; i++) {
  info += cats[i] + ', ';
}

para.textContent = info;
```

Dit geeft ons de volgende output:

**Opmerking**: U deze voorbeeldcode ook vinden [op GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/basic-for.html) [(zie ook live ).](https://mdn.github.io/learning-area/javascript/building-blocks/loops/basic-for.html)

Dit toont aan dat een lus wordt gebruikt om de items in een array te herhalen en iets met elk van hen te doen - een veel voorkomend patroon in JavaScript. Hier:

1. De tellervariabele (ook wel initialisator of iteratievariabele genoemd), begint bij ().`i``0``let i = 0`
2. De lus is verteld om uit te voeren totdat deze niet langer kleiner is dan de lengte van de array. Dit is belangrijk - de voorwaarde is de toestand waaronder de lus nog steeds zal lopen. Dus in dit geval, terwijl het nog steeds waar is, zal de lus nog steeds lopen.`i``cats``i < cats.length`
3. In de lus concatenateeren we het huidige lusitem (, dat wil zien) samen met een komma en ruimte, aan het einde van de variabele. Dus: `cats[i]``cats[whatever i is at the time]``info`
    1. Tijdens de eerste run wordt daarom (wat gelijk is aan ) samengevoegd op .`i = 0``cats[0] + ', '``Bill,` `info`
    2. Tijdens de tweede run wordt dus (gelijk aan ) samengevoegd op .`i = 1``cats[1] + ', '``Jeff,` `info`
    3. En ga zo maar door. Na elke keer dat de lus is uitgevoerd, wordt er 1 toegevoegd aan (), waarna het proces opnieuw wordt gestart.`i``i++`
4. Wanneer gelijk wordt aan (in dit geval 5), stopt de lus en gaat de browser verder met het volgende stukje code onder de lus.`i``cats.length`

**Opmerking**: We hebben de voorwaarde gemaakt , niet , omdat computers tellen van 0, niet 1 - we beginnen bij , en gaan tot (de index van de laatste array item). retourneert 5, omdat er 5 items in de array zijn, maar we willen niet tot , omdat dat zou terugkeren voor het laatste item (er is geen array-item met een index van 5). Daarom willen we tot 1 minder gaan dan (), niet hetzelfde als ().`i < cats.length``i <= cats.length``i``0``i = 4``cats.length``i = 5``undefined``cats.length``i <``cats.length``i <=`

**Opmerking**: Een veelgemaakte fout met voorwaarden is dat ze "gelijk aan" () gebruiken in plaats van "minder dan of gelijk aan" () te zeggen. Als we onze lus tot, de uitgang voorwaarde zou moeten zijn. Als we het instellen op , zou de lus helemaal niet lopen omdat deze niet gelijk is aan bij de eerste lus iteratie, dus het zou onmiddellijk stoppen.`===``<=``i = 5``i <= cats.length``i === cats.length``i``5`

Een klein probleempje dat we nog hebben is dat de uiteindelijke uitvoerzin niet erg goed gevormd is:

> Mijn katten heten Bill, Jeff, Pete, Biggles, Jasmin,

Idealiter willen we de aaneenschakeling op de iteratie van de laatste lus wijzigen, zodat we geen komma aan het einde van de zin hebben. Nou, geen probleem - we kunnen heel graag een voorwaardelijk in onze for-lus plaatsen om dit speciale geval te behandelen:

```JavaScript
for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }
}
```

**Opmerking**: U deze voorbeeldcode ook vinden [op GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/basic-for-improved.html) [(zie ook live ).](https://mdn.github.io/learning-area/javascript/building-blocks/loops/basic-for-improved.html)

**Belangrijk**: Met for - zoals bij alle lussen - moet u ervoor zorgen dat de initialisator wordt verhoogd of, afhankelijk van het geval, wordt gedecrementeerd, zodat deze uiteindelijk het punt bereikt waar de voorwaarde niet waar is. Zo niet, dan gaat de lus voor altijd door en dwingt de browser hem te stoppen of crasht hij. Dit wordt een **oneindige lus**genoemd.