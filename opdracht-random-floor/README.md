# OPDRACHT: Random Floor

## Benodigdheden

Neem eerst les 4 en 5 voor je aan deze opdracht begint.

[Download de zip waarmee je de opdracht moet beginnen hier.](https://github.com/Goldflow/website-productie-2/raw/main/opdracht-random-floor/random-floor.zip)

Deze volgende links zijn ook nuttig om je meer informatie te geven ivm afronden en willekeurige getallen te maken:

### Afronden

Op W3 schools:

[Math.floor() informatie](https://www.w3schools.com/jsref/jsref_floor.asp)

[Math.round() informatie](https://www.w3schools.com/jsref/jsref_round.asp)

Klik zeker eens op "Try it out!" en probeer eens te spelen met de code.

### Random / Willekeurige getallen

Op W3 schools

[Random() link ](https://www.w3schools.com/js/js_random.asp)

Klik zeker eens op "Try it out!" en probeer eens te spelen met de code.

## Start opdracht
- Download de oefening .zip bestand & plaats die in "web-2-taken" folder
- rechterklik op het bestand
- kies 7zip > dan extract here
Plaats de map in je web-2-taken folder.

## Uitleg opdracht

In de oefening:

zie je hoe we dat getal afronden (cijfers na de komma weghalen)

```JavaScript
let geheelGetal = 4.33;
let geheelGetalAfgerond = Math.floor(geheelGetal);
```

je krijgt ook al een voorbeeld hoe je een willekeurig getal uitprint tussen 0 en 1

```JavaScript
let randomGetal = Math.random();
// Math.random() maakt een willekeurig getal tusen 0 en 1 tot 17 cijfers na de komma
console.log('random nummer tussen 0 en 1 ' + randomGetal)
```

Dan staat er een voorbeeld hoe je een willekeurig getal uitprint tussen 0 en 10

```JavaScript
// om een willekeurige waarde te verkrijgen tussen 0 en een maximum waarde
// moet je Math.random() vermenigvuldigen met de maximum waarde
// dus bv om een getal tussen 0 en 10 te krijgen, doe je Math.random() * 10
let randomGetal10 = Math.random() * 10;
console.log('random nummer tussen 0 en 10 ' +  randomGetal10)
```

Vervolgens zie je hoe we dat getal (dit cijfers na de komma zullen zijn), kunnen afronden:

```JavaScript
// hier gaan we het random getal tussen 0 en 10 afronden
let randomGetal10Afgerond = Math.floor(randomGetal10);
console.log('geheel getal afgerond ' + randomGetal10Afgerond)
```
Wat je nu moet doen is gewoon hetzelfde doen maar een willekeurig getal tussen 255 uitprinten.

## Wat je zelf moet doen:

1. een willekeurig getal uitprinten die tussen 0 en 255 is > gebruik Math.random()
2. en dan van dat getal, alle cijfers na de komma wegdoen > gebruik Math.floor()

## Vragen / Opmerkingen

Laat me zeker weten of er iets niet duidelijk is of vragen hebt / vast zit.

## Indienen

- Maak een zip van de map & dien in bij relevante Uploadzone
- Oefening uploaden in je GitHub repository
- Link maken op de index pagina van Web2taken repository
- Controleer dat de link werkt
