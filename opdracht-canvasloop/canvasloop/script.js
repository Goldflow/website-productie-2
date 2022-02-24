let ctx = document.getElementById('canvas').getContext('2d');
  const WIDTH = 800;
  const HEIGHT = 600;
  function random(number) {
    return Math.round(Math.random() * number)
  }

  // deze functie maakt een RGBA kleur aan
  // red, green, blue moeten waardes zijn tussen 0 tem 255 (geen cijfers na de komma)
  // alpha moet een waarde zijn tussen 0 en 1, 1 is volledig zichtbaar, 0 is onzichtbaar
  function makeRGBA(red, green, blue, alpha) {
    return 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
  }

  // eerste variabele bepaalt de positie in de breedte
  // tweede variabele bepaald positie in de hoogte
  // derde variabele bepaalt de diameter
  // ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);

  // rgba
  // red green blue alpha
  // red green blue die gaan tot 256 maar in programmatie is dit 255
  // dus bv 255, 0, 255, 1 doet, krijg je paars
  // alpha doorzichtigheid
  // om rgba (een kleur voor canvas) in te stellen
  // moet je 4 waades hebben
  // de eerste 3 kleur waardes moeten tussen 0 en 255 zijn
  // de laatste waarde tussen 0 & 1 (dus bv 0.6)

  // https://www.w3schools.com/css/css_colors_rgb.asp

  // -----

  // OPDRACHT
  // 1. herhaal onderstaande code 100 keer of meer
  // 2. zorg dat kleur willekeurig is (tussen de eerste 3 parameters voor de makeRGBA functie moeten tussen 0 en 255 zijn)
  function createCircle() {
    let rgbaColor = makeRGBA(255, 0, 0, 0.5);
    ctx.beginPath();
    ctx.fillStyle = rgbaColor; // kleur aanmaken
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }

  createCircle();

  let i; // teller
  let hoeveelKeerLoopen = 5;
  for (i = 0; i < hoeveelKeerLoopen; i++) {
    // stuk code die je uitvoert
    console.log('verwijder deze lijn maar teken een cirkel in de plaats')
  }
