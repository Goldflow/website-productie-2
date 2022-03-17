# Voorbereiding Test

Gelieve volgende zaken door te nemen in de cursus:

Opgelet 1 vraag in de Kahoot test moet je niet vanbuiten weten.

Je zal een vraag krijgen wat geen JavaScript bibliotheken is:
Hiervoor krijg je het antwoord: jDom

---

Wat is het DOM als we spreken over JavaScript en HTML?

Is JavaScript een serverside of front-end(client-side) programmeertaal?

Waarvoor dient JavaScript?

Antwoorden vind je hier:
[https://www.studieanker.be/js/001-inleiding.html#wat-is-javascript](https://www.studieanker.be/js/001-inleiding.html#wat-is-javascript)

---

Welke knop moet je drukken in de browser om de console te openen?

[https://www.studieanker.be/js/002-opdrachten.html#javascript-console](https://www.studieanker.be/js/002-opdrachten.html#javascript-console)

---

Wat geldige variabele namen zijn in JavaScript. Met wat mag een variabele naam zeker NIET beginnen?

[https://www.studieanker.be/js/003-variabelen.html#variabelenaam](https://www.studieanker.be/js/003-variabelen.html#variabelenaam
)

---

Verschil tussen `0` en `null`?

https://nl.wikipedia.org/wiki/Null

---

Verschil tussen een object, een array (tekenreeks), boolean.

Verschil tussen een string & een nummer. Hoe kan je dat herkennen?

Wat een toewijzingsoperator is. Dit wil zeggen, als je nieuwe variabele maakt, hoe ga je die initialiseren?

[https://www.studieanker.be/js/003-variabelen.html#waarde-toewijzen](https://www.studieanker.be/js/003-variabelen.html#waarde-toewijzen
)

---

Wat is het resultaat van:
```JavaScript
    let getal = 5;
    getal -=3; // zorg dat je begrijpt wat deze regel doet!
    console.log(getal)
```

Voor meer info:

[https://www.studieanker.be/js/004-bewerkingen.html#toewijzingsoperators](https://www.studieanker.be/js/004-bewerkingen.html#toewijzingsoperators)

---

Wat doet een alert?

[https://www.studieanker.be/js/002-opdrachten.html#opdrachtregels](https://www.studieanker.be/js/002-opdrachten.html#opdrachtregels)

---

Hoe kan je strings optellen / op elkaar plakken?

[https://www.studieanker.be/js/004-bewerkingen.html#strings-optellen](https://www.studieanker.be/js/004-bewerkingen.html#strings-optellen)

---

Hoe werkt if than else?

Hoe kan je weten welke regel code zal uitgevoerd worden afhankelijk van de conditie?

[https://www.studieanker.be/js/005-condities.html#controlestructuur-if-statement](https://www.studieanker.be/js/005-condities.html#controlestructuur-if-statement)

---

Probeer code in dit hoofdstuk eens uit in console;

dus copypaste deze code;

voor je op enter drukt, probeer te raden wat de boodschappen zullen zijn die je uitprint

- kopïeer code opnieuw en verander vervolgens eens leeftijd naar +18 (bv 20)
- kopïeer code opnieuw en verander dan ook eens heeftBetaald naar true

en probeer telkens te raden welke boodschappen worden uitgeprint

Ter voorbereiding van de opdracht is het belangrijk dat je dit correct kan raden.

Voorbeeld in Kahoot zal eenvoudiger zijn.

```JavaScript
const leeftijd = 15;
const heeftBetaald = false;

if (heeftBetaald) {
    console.log("Welkom bij de club!");
    if (leeftijd > 18) {
        console.log("Wil je een biertje?");
    }
    else {
        console.log("Wil je een cola'tje?")
    }
} else {
    console.log("Gelieve eerst te betalen!");
    if (leeftijd < 18) {
        console.log("Je krijgt korting vanwege je leeftijd.");
    }
}
```

[https://www.studieanker.be/js/005-condities.html#nesten-van-if-statements](https://www.studieanker.be/js/005-condities.html#nesten-van-if-statements)

---

Hoe werkt een lus / for loop? met andere woorden:
- Wat is de "begin opdracht" bij een for loop / lus ([uitleg](https://www.studieanker.be/js/006-lussen.html#beginopdracht))?
- Wat is de "conditie" bij een for loop? ([uitleg](https://www.studieanker.be/js/006-lussen.html#conditie))
- Wat is de "Incrementopdracht" bij een for loop? ([uitleg](https://www.studieanker.be/js/006-lussen.html#incrementopdracht))


Voer deze code uit in de console en vertel me wat het eind resultaat zal zijn ***als je 8 verandert naar 5***.

```JavaScript
let getal = 8; // verander dit naar 5

for (let i = 0; i < 5; i++) {
    getal *= 10;
}

console.log(getal);
```


[https://www.studieanker.be/js/006-lussen.html#for-lus](https://www.studieanker.be/js/006-lussen.html#for-lus)

---

Wat is het resultaat van dit:

```JavaScript
let waarde1 = true || false;
let waarde2 = false || false;
let waarde3 = true || true;
// probeer nu telkens voor elke waarde eens uit te printen en te raden wat het resultaat is voor je op enter drukt
console.log('vul naam van variabele in zonder aanhalingstekens');
```