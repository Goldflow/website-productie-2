# Les 3: Data Types

## Variabelen

Ook wel variables genoemd.

### Wat is een variabele

Een variabele is een container voor een waarde, zoals een getal dat we zouden kunnen gebruiken in een som, of een string die we zouden kunnen gebruiken als onderdeel van een zin. Maar het bijzondere van variabelen is dat hun waarden kunnen veranderen. Laten we naar een eenvoudig voorbeeld kijken:

HTML:
```HTML
<button>Klik op mij</button>
```
JavaScript:
```JavaScript
const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
}
```
[probeer het hier uit](https://codepen.io/GoldFlow/pen/XWNbeKM)

ls u in dit voorbeeld op de knop drukt, worden een aantal regels code uitgevoerd. Op de eerste regel verschijnt een vak op het scherm waarin de lezer wordt gevraagd zijn naam in te voeren en vervolgens de waarde in een variabele opslaat. De tweede regel geeft een welkomstbericht weer met hun naam, ontleend aan de waarde van de variabele.

### Waarom variabelen gebruiken

Laten we, om te begrijpen waarom dit zo nuttig is, eens nadenken over hoe we dit voorbeeld zouden schrijven zonder een variabele te gebruiken. Het zou er ongeveer zo uitzien:

```JavaScript
    let name = prompt('What is your name?');

    if (name === 'Adam') {
    alert('Hello Adam, nice to see you!');
    } else if (name === 'Alan') {
    alert('Hello Alan, nice to see you!');
    } else if (name === 'Bella') {
    alert('Hello Bella, nice to see you!');
    } else if (name === 'Bianca') {
    alert('Hello Bianca, nice to see you!');
    } else if (name === 'Younes') {
    alert('Hello Younes, nice to see you!');
    }

    // ... and so on ...
```

Misschien begrijp je de syntaxis die we gebruiken (nog!) Niet helemaal, maar je zou het idee moeten kunnen krijgen - als we geen variabelen beschikbaar hadden, zouden we een gigantisch codeblok moeten implementeren dat controleert wat de ingevoerde naam is was, en toon vervolgens het juiste bericht voor elke naam. 

Dit is duidelijk erg inefficiënt (de code is een stuk groter, zelfs voor slechts vijf keuzes), en het zou gewoon niet werken - je zou onmogelijk alle mogelijke keuzes kunnen opslaan.

Variabelen zijn gewoon logisch, en naarmate u meer over JavaScript leert, zullen ze een tweede natuur worden.

Wat ook bijzonder is aan variabelen is dat ze vrijwel alles kunnen bevatten, niet alleen strings en getallen. Variabelen kunnen ook complexe gegevens en zelfs hele functies bevatten om verbazingwekkende dingen te doen. Je leert hier meer over gaandeweg.

> **Opmerking** : we zeggen dat variabelen waarden bevatten. Dit is een belangrijk onderscheid om te maken. Variabelen zijn niet de waarden zelf; het zijn ***containers*** voor waarden. Je kunt ze zien als kleine kartonnen dozen waarin je dingen kunt bewaren.**

![](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables/boxes.png)

### Variabelen declareren

Om een ​​variabele te gebruiken, moet u deze eerst maken - nauwkeuriger, we noemen dit het declareren van de variabele. Om dit te doen, typen we het trefwoord varof letgevolgd door de naam die u uw variabele wilt noemen:

```JavaScript
let mijnNaam;
let mijnLeeftijd;
```

Hier maken we twee variabelen genaamd `mijnNaam` en `mijnLeeftijd`. Typ deze regels in de console van uw webbrowser. Probeer daarna een variabele (of twee) te maken met uw eigen naamkeuzes.

> **Opmerking**: in JavaScript moeten alle code-instructies eindigen met een puntkomma ( `;`) - uw code werkt mogelijk correct voor enkele regels, maar waarschijnlijk niet als u meerdere regels code samen schrijft. Probeer er een gewoonte van te maken om het op te nemen.

U kunt testen of deze waarden nu in de uitvoeringsomgeving bestaan ​​door alleen de naam van de variabele te typen, bijv

```JavaScript
let mijnNaam;
let mijnLeeftijd;
```

Ze hebben momenteel geen waarde; het zijn lege containers. Wanneer u de variabelenamen invoert, krijgt u de waarde `undefined` geretourneerd. Als ze niet bestaan, krijg je een foutmelding - probeer bv eens `scoobyDoo`  in te typen.

> ***Opmerking***: verwar een variabele die wel bestaat maar geen gedefinieerde waarde heeft niet met een variabele die helemaal niet bestaat - het zijn heel verschillende dingen. In de box-analogie die je hierboven zag, zou niet bestaan ​​betekenen dat er geen box (variabele) is voor een waarde om in te gaan. Geen gedefinieerde waarde zou betekenen dat er een box IS, maar er zit geen waarde in.

### Initialiseren van een variabele

Nadat u een variabele heeft gedeclareerd, kunt u deze initialiseren met een waarde. Dit doe je door de naam van de variabele te typen, gevolgd door een gelijkteken (`=`), gevolgd door de waarde die je eraan wilt geven. Bijvoorbeeld:

```JavaScript
mijnNaam = 'Younes'
mijnLeeftijd = 28;
```

Probeer nu terug te gaan naar de console en deze regels in te typen. U zou de waarde die u aan de variabele hebt toegewezen in de console moeten zien om het in elk geval te bevestigen. Nogmaals, u kunt uw variabelewaarden retourneren door hun naam in de console te typen - probeer deze opnieuw:

```JavaScript
mijnNaam;
mijnLeeftijd;
```

### Initialiseren en declareren een variabele tegelijk

U kunt een variabele tegelijkertijd declareren en initialiseren, op de volgende manier:

```JavaScript
let mijnHond = 'Bobby';
```
Dit is waarschijnlijk wat u meestal zult doen, omdat het sneller is dan de twee acties op twee afzonderlijke regels uitvoeren.

<video width="600" controls>
<source src="uitleg-declaratie-initialisatie.mkv">
</video>

### Het verschil tussen var en let

Op dit punt denk je misschien "waarom hebben we twee sleutelwoorden nodig voor het definiëren van variabelen ?? Waarom hebben var en let ?".

De redenen zijn enigszins historisch. Toen JavaScript voor het eerst werd gemaakt, was er alleen var. Dit werkt in de meeste gevallen prima, maar het heeft enkele problemen met de manier waarop het werkt - het ontwerp kan soms verwarrend of ronduit irritant zijn. Dus  letis gemaakt in moderne versies van JavaScript, een nieuw sleutelwoord voor het maken van variabelen dat enigszins anders werkt dan varde problemen tijdens het proces oplossen.

Hieronder worden enkele eenvoudige verschillen toegelicht. We zullen nu niet op alle verschillen ingaan, maar u zult ze ontdekken naarmate u meer over JavaScript leert ([als je er nu echt meer over wilt lezen, klik hier](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)).

Om te beginnen, als u een JavaScript-programma met meerdere regels schrijft dat een variabele declareert en initialiseert, kunt u een variabele daadwerkelijk declareren varnadat u deze hebt geïnitialiseerd en het zal nog steeds werken.

Wanneer `var` gebruikt, kunt u dezelfde variabele zo vaak declareren als u wilt, maar met `let` kunt u dat niet. Het volgende zou werken:

```JavaScript
var myName = 'Younes';
var myName = 'Bob';
```

```JavaScript
let myName = 'Younes';
let myName = 'Bob';
```

```JavaScript
let myName = 'Younes';
myName = 'Bob';
```

Nogmaals, dit is een verstandige taalbeslissing. Er is geen reden om variabelen opnieuw te declareren - het maakt de zaken alleen maar verwarrender.

Om deze en meer redenen (zoals [hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting)) raden we u aan om `let` zoveel mogelijk in uw code te gebruiken in plaats van `var`. Er is geen reden om het te gebruiken `var`, tenzij u oude versies van Internet Explorer met uw code moet ondersteunen (het ondersteunt `let` pas versie 11; de moderne Microsoft Edge-browser ondersteunt `let` het prima).

### Een variabele updaten

Nadat een variabele is geïnitialiseerd met een waarde, kunt u die waarde wijzigen (of bijwerken) door er een andere waarde aan te geven. Probeer de volgende regels in uw console in te voeren:

```JavaScript
myName = 'Bob';
myAge = 40;
```

### Variabele naamgeving

Je kunt een variabele vrijwel alles noemen wat je maar wilt, maar er zijn beperkingen. Over het algemeen moet u zich beperken tot het gebruik van alleen Latijnse tekens (0-9, az, AZ) en het onderstrepingsteken.

- Gebruik geen andere tekens, omdat deze fouten kunnen veroorzaken of moeilijk te begrijpen zijn voor een internationaal publiek.
- Gebruik geen onderstrepingstekens aan het begin van variabelenamen - dit wordt in bepaalde JavaScript-constructies gebruikt om specifieke dingen aan te duiden, dus het kan verwarrend zijn.
- Gebruik geen getallen aan het begin van variabelen. Dit is niet toegestaan ​​en veroorzaakt een fout.
- Een veilige conventie om aan vast te houden is het zogenaamde "kleine kameelhoofdletter" , waarbij je meerdere woorden aan elkaar plakt, - kleine letters gebruikt voor het hele eerste woord en vervolgens hoofdletters gebruikt. We hebben dit tot nu toe gebruikt voor onze variabelenamen in het artikel.
- Maak variabelenamen intuïtief, zodat ze de gegevens beschrijven die ze bevatten. Gebruik niet alleen losse letters / cijfers of lange zinnen.
- Variabelen zijn hoofdlettergevoelig - dus myageeen andere variabele dan myAge.
- Nog een laatste punt: u moet ook voorkomen dat u JavaScript-gereserveerde woorden als uw variabelenamen gebruikt - hiermee bedoelen we de woorden die de feitelijke syntaxis van JavaScript vormen! Dus, kun je geen gebruik maken van woorden als `var`, `function`, `let` en `for` als namen van variabelen. Browsers herkennen ze als verschillende code-items, waardoor u fouten krijgt.

> **Opmerking**: u kunt een redelijk volledige lijst van gereserveerde trefwoorden vinden die u moet vermijden bij [Lexicale grammatica - trefwoorden](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords).

Goede voorbeelden van namen voor variabelen:

```JavaScript
age
myAge
init
initialColor
finalOutputValue
audio1
audio2
```

Slechte voorbeelden van namen voor variabelen:

```JavaScript
1
a
_12
myage
MYAGE
var
Document
skjfndskjfnbdskjfb
thisisareallylongstupidvariablenameman
```

Probeer nu nog een paar variabelen te maken, rekening houdend met de bovenstaande richtlijnen

## Variabele types / Data types

Er zijn een paar verschillende soorten gegevens die we in variabelen kunnen opslaan. In dit gedeelte zullen we deze in het kort beschrijven, en in toekomstige artikelen leert u er meer over.

Tot dusver hebben we de eerste twee bekeken, maar er zijn er nog meer.

### Numbers (getallen)

U kunt getallen in variabelen opslaan, ofwel hele getallen zoals 30 (ook wel gehele getallen genoemd) of decimale getallen zoals 2.456 (ook wel floats of floating point getallen genoemd). In tegenstelling tot sommige andere programmeertalen, hoeft u in JavaScript geen variabeletypen te declareren. Als je een variabele een getalswaarde geeft, neem je geen aanhalingstekens op:

```JavaScript
let myAge = 17;
```

### Strings (tekst)

Strings zijn stukjes tekst. Als u een variabele een tekenreekswaarde geeft, moet u deze tussen enkele of dubbele aanhalingstekens plaatsen; anders probeert JavaScript het te interpreteren als een andere variabelenaam.

```JavaScript
let dolphinGoodbye = 'So long and thanks for all the fish';
```

### Booleans

Booleans zijn true / false-waarden - ze kunnen twee waarden hebben, trueof false. Deze worden over het algemeen gebruikt om een ​​conditie te testen, waarna de code wordt uitgevoerd als dat nodig is. Een eenvoudig geval zou bijvoorbeeld zijn:

```JavaScript
let iAmAlive = true;
```

Terwijl het in werkelijkheid meer als volgt zou worden gebruikt:

```JavaScript
let test = 6 < 3;
```

Dit gebruikt de operator "kleiner dan" ( `<`) om te testen of 6 kleiner is dan 3. Zoals je zou verwachten, keert het `false` terug , omdat 6 niet kleiner is dan 3! Later in de cursus leert u veel meer over dergelijke operators.

### Arrays (lijsten)

Een array is een enkel object dat meerdere waarden bevat tussen vierkante haken en gescheiden door komma's. Probeer de volgende regels in uw console in te voeren:

```JavaScript
let myNameArray = ['Younes', 'Bob', 'Jim'];
let myNumberArray = [10, 15, 40];
```

Zodra deze arrays zijn gedefinieerd, hebt u toegang tot elke waarde op basis van hun locatie binnen de array. Probeer deze regels:

```JavaScript
myNameArray[0]; // zou 'Younes' moeten teruggeven
myNumberArray[2]; // zou 40 moeten teruggeven
```

De vierkante haken specificeren een indexwaarde die overeenkomt met de positie van de waarde die u wilt retourneren. Het is je misschien opgevallen dat arrays in JavaScript nul-geïndexeerd zijn: het eerste element bevindt zich op index 0.

### Objects

Bij het programmeren is een object een codestructuur die een realistisch object modelleert. U kunt een eenvoudig object hebben dat een doos vertegenwoordigt en informatie bevat over de breedte, lengte en hoogte, of u kunt een object hebben dat een persoon vertegenwoordigt en gegevens bevat over hun naam, lengte, gewicht, welke taal ze spreken, hoe om ze gedag te zeggen, en meer.

Probeer de volgende regel in uw console in te voeren:

```JavaScript
let dog = { name : 'Spot', breed : 'Dalmatian' };
```
Om de informatie die in het object is opgeslagen op te halen, kunt u de volgende syntaxis gebruiken:

```JavaScript
dog.name
```

We zullen voorlopig niet meer naar objecten kijken - we zien daar meer over later in de cursus.

### OPDRACHT: oefeningen op variabelen

#### Taak 1

Bij deze taak willen we dat u:

- Declareer een variabele genaamd `myName`.
Initialiseer `myName` met een geschikte waarde, op een aparte regel (u kunt uw werkelijke naam of iets anders gebruiken).
- Declareer een variabele die wordt aangeroepen `myAge` en initialiseer deze met een waarde op dezelfde regel.
- Kopiëer onderstaande code in Visual Studio Code of CodePen en probeer

[Opdracht 1](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/tasks/variables/variables1-download.html)


[Voer de oefeningen hier uit](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_variables)