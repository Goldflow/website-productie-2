# Les 4: Conditionals (wat als dan)

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mensen (en andere dieren) nemen de hele tijd beslissingen die van invloed zijn op hun leven, van klein ('moet ik een of twee koekjes eten?') Tot grote ('moet ik in mijn thuisland blijven en op de boerderij van mijn vader werken, of moet ik naar Amerika verhuizen en astrofysica studeren? ")</font></font>

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Voorwaardelijke verklaringen stellen ons in staat om dergelijke besluitvorming in JavaScript weer te geven, van de keuze die moet worden gemaakt (bijvoorbeeld 'één cookie of twee') tot het resulterende resultaat van die keuzes (misschien kan de uitkomst van 'één cookie gegeten' zijn "had nog steeds honger", en het resultaat van "at twee koekjes" zou kunnen zijn "voelde me vol, maar mama schold me uit omdat ik alle koekjes at".)</font></font>

![](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals/cookie-choice-small.png)

## [<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">if ... else uitspraken</font></font>](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#if...else_statements "Permalink naar if ... else-verklaringen")

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Laten we eens kijken naar verreweg het meest voorkomende type voorwaardelijke verklaring dat u in JavaScript gebruikt: de bescheiden </font></font>`[if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)`[<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">verklaring</font></font>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font>

### [<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Basis als ... else-syntaxis</font></font>](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#basic_if_..._else_syntax "Permalink naar Basic if ... else syntaxis")

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">De </font></font>`if...else`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">basissyntaxis ziet er in </font></font>[<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pseudocode</font></font>](https://developer.mozilla.org/en-US/docs/Glossary/Pseudocode)
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> als volgt uit </font><font style="vertical-align: inherit;">:</font></font>

<pre class="notranslate">
if (condition) {
  code to run if condition is true
} else {
  run some other code instead
}
</pre>

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hier hebben we:</font></font>

1.  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Het trefwoord </font></font>`if`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">gevolgd door enkele haakjes.</font></font>

2.  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Een voorwaarde om te testen, tussen haakjes geplaatst (typisch "is deze waarde groter dan deze andere waarde?", Of "bestaat deze waarde?"). </font><font style="vertical-align: inherit;">De voorwaarde maakt gebruik van de </font></font>[<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vergelijkingsoperatoren die</font></font>](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#comparison_operators)

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> we in de laatste module hebben besproken en retourneert </font></font>`true`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">of </font></font>`false`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.</font></font>

3.  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Een set accolades, waarbinnen we een code hebben - dit kan elke code zijn die we leuk vinden, en deze wordt alleen uitgevoerd als de voorwaarde terugkeert </font></font>`true`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.</font></font>

4.  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Het sleutelwoord </font></font>`else`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.</font></font>

5.  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nog een set accolades, waarbinnen we wat meer code hebben - dit kan elke code zijn die we leuk vinden, en het werkt alleen als de voorwaarde dat niet is </font></font>`true`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- of met andere woorden, de voorwaarde is </font></font>`false`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.</font></font>

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Deze code is redelijk leesbaar voor mensen - het zegt " </font></font>**<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">als</font></font>**
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> de </font></font>**<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">conditie</font></font>**
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> terugkeert </font></font>`true`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">, voer dan code A uit, </font></font>**<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">anders</font></font>**
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> voer je code B uit"</font></font>

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Houd er rekening mee dat u het </font></font>`else`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">en het tweede accoladeblok </font><font style="vertical-align: inherit;">niet hoeft op te nemen </font><font style="vertical-align: inherit;">- het volgende is ook volkomen legale code:</font></font>

<pre class="notranslate">
if (condition) {
  code to run if condition is true
}

run some other code
</pre>

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">U moet hier echter voorzichtig zijn - in dit geval wordt het tweede codeblok niet bestuurd door de voorwaardelijke instructie, dus het wordt </font></font>**<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">altijd</font></font>**
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> uitgevoerd, ongeacht of de voorwaarde terugkeert </font></font>`true`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">of </font></font>`false`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">. </font><font style="vertical-align: inherit;">Dit is niet per se een slechte zaak, maar het is misschien niet wat u wilt - vaak wilt u het ene blok code </font></font>_<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">of</font></font>_
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> het andere uitvoeren, niet beide.</font></font>

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Als laatste punt kunt u soms </font></font>`if...else`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">uitspraken zien die zonder accolades zijn geschreven, in de volgende steno-stijl:</font></font>

<pre class="notranslate">
if (condition) code to run if condition is true
else run some other code instead
</pre>

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dit is een volkomen geldige code, maar het gebruik ervan wordt niet aanbevolen - het is veel gemakkelijker om de code te lezen en uit te zoeken wat er aan de hand is als je de accolades gebruikt om de codeblokken af ​​te bakenen, en meerdere regels en inspringingen gebruikt.</font></font>

### [<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Een echt voorbeeld</font></font>](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#a_real_example "Permalink to Een echt voorbeeld")

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Laten we eens kijken naar een echt voorbeeld om deze syntaxis beter te begrijpen. </font><font style="vertical-align: inherit;">Stel je voor dat een kind door zijn moeder of vader om hulp wordt gevraagd bij een klus. </font><font style="vertical-align: inherit;">De ouder zou kunnen zeggen: "Hé lieverd! Als je me helpt door boodschappen te doen, geef ik je wat extra geld zodat je dat speelgoed kunt betalen dat je wilde." </font><font style="vertical-align: inherit;">In JavaScript zouden we dit als volgt kunnen weergeven:</font></font>

```JavaScript
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Deze code zoals weergegeven resulteert altijd in het </font></font>`shoppingDone`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">terugkeren van </font><font style="vertical-align: inherit;">de </font><font style="vertical-align: inherit;">variabele </font></font>`false`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">, wat teleurstelling betekent voor ons arme kind. </font><font style="vertical-align: inherit;">Het is aan ons om de ouder een mechanisme te bieden om de </font></font>`shoppingDone`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">variabele in te stellen </font></font>`true`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">als het kind boodschappen heeft gedaan.</font></font>



### [<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">anders als</font></font>](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#else_if "Permalink naar anders als")

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Het laatste voorbeeld gaf ons twee keuzes of uitkomsten - maar wat als we er meer dan twee willen?</font></font>

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Er is een manier om extra keuzes / resultaten te koppelen aan uw </font></font>`if...else`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">gebruik </font></font>`else if`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">. </font><font style="vertical-align: inherit;">Elke extra keuze vereist een extra blok tussen </font></font>`if() { ... }`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">en </font></font>`else { ... }`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- bekijk het volgende meer betrokken voorbeeld, dat deel zou kunnen uitmaken van een eenvoudige weersvoorspellingstoepassing:</font></font>

```HTML
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
```

```JavaScript
const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}
```

[link oefening CodePen](https://codepen.io/GoldFlow/pen/VwmjgVp)

### [<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Een opmerking over vergelijkingsoperatoren</font></font>](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#a_note_on_comparison_operators "Permalink to Een opmerking over vergelijkingsoperatoren")

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vergelijkingsoperatoren worden gebruikt om de voorwaarden in onze voorwaardelijke verklaringen te testen. </font><font style="vertical-align: inherit;">We hebben eerst naar vergelijkingsoperatoren gekeken in ons artikel </font></font>[<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Basis wiskunde in JavaScript - getallen en operatoren</font></font>](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#comparison_operators)
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> . </font><font style="vertical-align: inherit;">Onze keuzes zijn:</font></font>

* `===`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">en </font></font>`!==`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&nbsp;- testen of een waarde identiek is aan, of niet identiek aan, een andere.</font></font>

* `<`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">en </font></font>`>`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- test of de ene waarde kleiner of groter is dan de andere.</font></font>

* `<=`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">en </font></font>`>=`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- test of een waarde kleiner is dan of gelijk is aan, of groter dan of gelijk is aan een andere.</font></font>

**<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Opmerking</font></font>**
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : bekijk het materiaal op de vorige link als u uw herinneringen hieraan wilt opfrissen.</font></font>

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">We wilden een speciale vermelding maken van het testen van booleaanse ( </font></font>`true`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font>`false`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">) waarden, en een algemeen patroon dat je keer op keer tegenkomt. </font><font style="vertical-align: inherit;">Elke waarde die niet </font></font>`false`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">, </font></font>`undefined`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">, </font></font>`null`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">, </font></font>`0`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">, </font></font>`NaN`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">, of een lege string ( </font></font>`''`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">) eigenlijk keert terug </font></font>`true`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">wanneer het wordt getest als een voorwaardelijke verklaring, dus u kunt een variabele naam te gebruiken op zijn eigen om te testen of het is </font></font>`true`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">, of zelfs dat het bestaat (dat wil zeggen, het is niet ongedefinieerd.) Dus bijvoorbeeld:</font></font>

```
let cheese = 'Cheddar';

if (cheese) {
  console.log('Yay! Cheese available for making cheese on toast.');
} else {
  console.log('No cheese on toast for you today.');
}
```

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">En als je terugkeert naar ons vorige voorbeeld over het kind dat een klusje voor zijn ouders doet, zou je het als volgt kunnen schrijven:</font></font>

```
let shoppingDone = false;
let childsAllowance;

if (shoppingDone) { // don't need to explicitly specify '=== true'
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

### [<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nesten als ... anders</font></font>](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#nesting_if_..._else "Permalink naar Nesting als ... anders")

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Het is volkomen oké om de ene </font></font>`if...else`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">verklaring in de andere te plaatsen - om ze te nesten. </font><font style="vertical-align: inherit;">We kunnen bijvoorbeeld onze weersvoorspellingstoepassing bijwerken om nog meer keuzes weer te geven, afhankelijk van wat de temperatuur is:</font></font>

```
if (choice === 'sunny') {
  if (temperature < 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
  } else if (temperature >= 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.';
  }
}
```

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hoewel de code allemaal samenwerkt, werkt elke </font></font>`if...else`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">instructie volledig onafhankelijk van de andere.</font></font>

### [<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Logische operatoren: AND, OR en NOT</font></font>](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#logical_operators_and_or_and_not "Permalink naar Logische operators: AND, OR en NOT")

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Als u meerdere voorwaarden wilt testen zonder geneste </font></font>`if...else`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">instructies </font><font style="vertical-align: inherit;">te schrijven </font><font style="vertical-align: inherit;">, kunnen </font></font>[<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">logische operators</font></font>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> u helpen. </font><font style="vertical-align: inherit;">Bij gebruik onder omstandigheden doen de eerste twee het volgende:</font></font>

* `&&`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- EN; </font><font style="vertical-align: inherit;">stelt je in staat om twee of meer uitdrukkingen aan elkaar te koppelen, zodat ze allemaal afzonderlijk moeten evalueren om </font></font>`true`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">de hele uitdrukking terug te geven </font></font>`true`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.</font></font>

* `||`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- OF; </font><font style="vertical-align: inherit;">stelt je in staat om twee of meer uitdrukkingen aan elkaar te koppelen, zodat een of meer ervan afzonderlijk moeten evalueren om </font></font>`true`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">de hele uitdrukking terug te geven </font></font>`true`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.</font></font>

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Om u een EN-voorbeeld te geven, kan het vorige voorbeeldfragment hiernaar worden herschreven:</font></font>

```
if (choice === 'sunny' && temperature < 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
} else if (choice === 'sunny' && temperature >= 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.';
}
```

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Het eerste codeblok wordt bijvoorbeeld alleen uitgevoerd als </font></font>`choice === 'sunny'` _<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">en</font></font>_ `temperature < 86`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> terug </font></font>`true`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.</font></font>

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Laten we naar een snel OR-voorbeeld kijken:</font></font>

```
if (iceCreamVanOutside || houseStatus === 'on fire') {
  console.log('You should leave the house quickly.');
} else {
  console.log('Probably should just stay in then.');
}
```

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Het laatste type logische operator, NOT, uitgedrukt door de </font></font>`!`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">operator, kan worden gebruikt om een ​​uitdrukking te ontkennen. </font><font style="vertical-align: inherit;">Laten we het combineren met OR in het bovenstaande voorbeeld:</font></font>

```
if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
  console.log('Probably should just stay in then.');
} else {
  console.log('You should leave the house quickly.');
}
```

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Als in dit fragment de instructie OR retourneert </font></font>`true`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">, negeert de operator NOT deze zodat de algehele expressie wordt geretourneerd </font></font>`false`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.</font></font>

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">U kunt zoveel logische uitspraken combineren als u wilt, in welke structuur dan ook. </font><font style="vertical-align: inherit;">In het volgende voorbeeld wordt de code binnenin alleen uitgevoerd als beide OR-instructies true retourneren, wat betekent dat de algehele AND-instructie true retourneert:</font></font>

```
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === 'Steve')) {
  // run the code
}
```

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Een veelgemaakte fout bij het gebruik van de logische OR-operator in voorwaardelijke instructies is om te proberen de variabele te vermelden waarvan u de waarde één keer controleert, en vervolgens een lijst met waarden te geven die het zou kunnen zijn om true terug te geven, gescheiden door </font></font>`||`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">(OR) -operatoren. </font><font style="vertical-align: inherit;">Bijvoorbeeld:</font></font>

```
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">In dit geval zal de voorwaarde binnenin </font></font>`if(...)`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;altijd waar worden geëvalueerd, aangezien 7 (of een andere niet-nulwaarde) altijd resulteert in </font></font>`true`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">. </font><font style="vertical-align: inherit;">Deze voorwaarde zegt eigenlijk "als x gelijk is aan 5, of 7 is waar - wat het altijd is". </font><font style="vertical-align: inherit;">Dit is logischerwijs niet wat we willen! </font><font style="vertical-align: inherit;">Om dit te laten werken, moet u een volledige test aan weerszijden van elke OF-operator specificeren:</font></font>

```
if (x === 5 || x === 7 || x === 10 ||x === 20) {
  // run my code
}
```

## [<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">switch-instructies</font></font>](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements "Permalink om van statement te wisselen")

`if...else`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">verklaringen doen het werk om voorwaardelijke code mogelijk te maken, maar ze zijn niet zonder hun nadelen. </font><font style="vertical-align: inherit;">Ze zijn vooral geschikt voor gevallen waarin u een aantal keuzes heeft, en voor elke keuze moet een redelijke hoeveelheid code worden uitgevoerd, en / of de voorwaarden zijn complex (bijvoorbeeld meerdere logische operators). </font><font style="vertical-align: inherit;">Voor gevallen waarin u alleen een variabele op een bepaalde waarde wilt instellen of een bepaalde instructie wilt afdrukken, afhankelijk van een voorwaarde, kan de syntaxis een beetje omslachtig zijn, vooral als u een groot aantal keuzes heeft.</font></font>

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">In dat geval zijn </font></font>[`switch`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">uitspraken</font></font>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> je vriend - ze nemen een enkele uitdrukking / waarde als invoer en doorlopen vervolgens een aantal keuzes totdat ze er een vinden die overeenkomt met die waarde, waarbij ze de bijbehorende code uitvoeren. </font><font style="vertical-align: inherit;">Hier is nog wat pseudocode, om u een idee te geven:</font></font>

<pre class="notranslate">
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // include as many cases as you like

  default:
    actually, just run this code
}
</pre>

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hier hebben we:</font></font>

1.  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Het trefwoord </font></font>`switch`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">, gevolgd door een reeks haakjes.</font></font>

2.  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Een uitdrukking of waarde tussen haakjes.</font></font>
3.  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Het trefwoord </font></font>`case`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">, gevolgd door een keuze die de uitdrukking / waarde zou kunnen zijn, gevolgd door een dubbele punt.</font></font>

4.  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Een code die moet worden uitgevoerd als de keuze overeenkomt met de uitdrukking.</font></font>
5.  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Een </font></font>`break`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">verklaring, gevolgd door een puntkomma. </font><font style="vertical-align: inherit;">Als de vorige keuze overeenkomt met de uitdrukking / waarde, stopt de browser met het uitvoeren van het codeblok hier, en gaat verder naar elke code die onder de instructie switch verschijnt.</font></font>

6.  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Zoveel andere gevallen (opsommingstekens 3-5) als u wilt.</font></font>
7.  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Het sleutelwoord </font></font>`default`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">, gevolgd door exact hetzelfde codepatroon als een van de gevallen (opsommingstekens 3-5), behalve dat </font></font>`default`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">er geen keuze achter staat, en je hoeft geen </font></font>`break`

    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">verklaring te geven omdat er daarna niets meer kan worden uitgevoerd in de toch blokkeren. </font><font style="vertical-align: inherit;">Dit is de standaardoptie die wordt uitgevoerd als geen van de keuzes overeenkomt.</font></font>

**<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Opmerking</font></font>**
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : u hoeft de </font></font>`default`
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sectie </font><font style="vertical-align: inherit;">niet op te nemen </font><font style="vertical-align: inherit;">- u kunt deze veilig weglaten als er geen kans is dat de uitdrukking gelijk zou kunnen zijn aan een onbekende waarde. </font><font style="vertical-align: inherit;">Als er echter een kans is, moet u dit opnemen om onbekende gevallen te behandelen.</font></font>

### [<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Een voorbeeld van een schakelaar</font></font>](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#a_switch_example "Permalink to Een wisselvoorbeeld")

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Laten we eens kijken naar een echt voorbeeld - we zullen onze weersvoorspellingstoepassing herschrijven om in plaats daarvan een switch-statement te gebruiken:</font></font>

```HTML
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
```

```JavaScript
const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}
```

[Link naar CodePen Oefening](https://codepen.io/GoldFlow/pen/GRNqzPy)

