//Initial References
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

//Options values for buttons
let options = {
  Paises: [
    "Afeganistao", "AfricaDoSul", "Albania", "Alemanha", "Andorra", "Angola", "AntiguaEBarbuda",
    "ArabiaSaudita", "Argélia", "Argentina", "Armenia", "Australia", "Austria", "Arzebaijao",
    "Bahamas", "Bahrein", "Bangladesh", "Barbados", "Belgica", "Belize", "Benin", "Bielorrusia",
    "Bolívia", "BosnioHerzegovina", "Botswana", "Brasil", "Bulgaria", "BurkinaFaso", "Burundi",
    "Butao", "Cabo Verde", "Camaroes", "Camboja", "Canada", "Catar", "Cazaquistao", "Chade", "Chile",
    "China", "Chipre", "Colombia", "Comores", "CongoBrazzaville", "CoreiaDoNorte", "CoreiaDoSul",
    "CostaDoMarfim", "CostaRica", "Croacia", "Cuba", "Dinamarca", "Djibouti", "Dominica", "Egito",
    "EmiradosArabesUnidos", "Equador", "ElSalvador", "Eritreia", "Eslovaquia", "Escocia", "Eslovenia",
    "Espanha", "Essuatini", "EstadosUnidos", "Estonia", "Etiopia", "Fiji", "Filipinas", "Finlandia",
    "Franca", "Gabao", "Gambia", "Gana", "Georgia", "Granada", "Grecia", "Guatemala", "Guiana", "Guine",
    "GuineEquatorial", "GuineBissau", "Haiti", "Honduras", "Hungria", "Iemen", "IlhasMarshall", "India",
    "Indonesia", "Inglaterra,", "Ira", "Iraque", "Irlanda", "IrlandaDoNorte", "Islandia", "Israel", "Italia",
    "Jamaica", "Japao", "Jordania", "Kosovo", "Kuwait", "Laos", "Lesoto", "Letonia", "Letonia", "Libano",
    "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "MacedoniaDoNorte", "Madagascar", "Malasia",
    "Malawi", "Maldivas", "Mali", "Malta", "Marrocos", "Mauricio", "Mauritania", "Mexico", "Mianmar", "Micronesia",
    "Mocambique", "Moldavia", "Monaco", "Mongolia", "Montenegro", "Namibia", "Nauru", "Nepal", "Nicaragua", "Niger",
    "Nigeria", "Noruega", "NovaZelandia", "Oma", "PaisDeGales,", "PaisesBaixos", "Palau", "Palestina", "Panama",
    "PapuaNovaGuine", "Paquistao", "Paraguai", "Peru", "Polonia", "Portugal", "Quenia", "Quirguistao", "Quiribati",
    "RepublicaCentroAfricana", "RepublicaTcheca", "RepublicaDemocraticaDoCongo", "RepublicaDominicana", "Romenia",
    "Ruanda", "Russia", "Salomao", "Samoa", "SantaLucia", "SanMarino", "SaoCristovaoENeves", "SaoTomeEPrincipe",
    "SaoVicenteEGranadinas", "Seicheles", "Senegal", "SerraLeoa", "Servia", "Singapura", "Siria", "Somalia",
    "SriLanka", "Sudao", "SudaoDoSul", "Suecia", "Suica", "Suriname", "Tailandia", "Taiwan", "Tajiquistao",
    "Tanzania", "TimorLeste", "Togo", "Tonga", "TrinidadETobago", "Tunisia", "Turcomenistao", "Turquia",
    "Tuvalu", "Ucrania", "Uganda", "Uruguai", "Uzbequistao", "Vanuatu", "Vaticano", "Venezuela", "Vietna", "Zambia",
    "Zimbabue"
  ],

  Animais: [
    "Abelha", "Abutre", "Aguia", "Alce", "Alpaca", "Anta", "Antilope", "Aranha", "Arara", "Asno", "Avestruz", "Babuino",
    "Bagre", "Baleia", "Barata", "BeijaFlor", "Besouro", "Bisao", "Bode", "Boi", "Borboleta", "Boto", "Bufalo",
    "Burro", "Cabra", "Cacatua", "Cachorro", "Camaleao", "Camarao", "Camelo", "Canario", "Canguru", "Capivara",
    "Caracol", "Caramujo", "Caranguejo", "Carneiro", "Cavalo", "Cigarra", "Cisne", "Coala", "Cobra", "Coelho",
    "Coruja", "Crocodilo", "Dinossauro", "Dromedario", "Elefante", "Escorpiao", "Esquilo", "EstelaDoMar",
    "Falcao", "Flamingo", "Foca", "Formiga", "Fuinha", "Furao", "Gafanhoto", "Gaivota", "Galo", "Gamba", "Ganso",
    "Garca", "Gato", "Gaviao", "Girafa", "Golfinho", "Gorila", "Grilo", "Guepardo", "Hamster", "Hiena", "Hipopotamo",
    "Iguana", "Jacare", "Jaguatirica", "Javali", "Joaninha", "Jumento", "Lacraia", "Lagarto", "Lagartixa", "Lagosta",
    "Leao", "Lemure", "Leopardo", "Lesma", "Lhama", "Libelula", "Lince", "Lobo", "Lontra", "Lula", "Macaco", "Mamute",
    "Mariposa", "Marmota", "Marreco", "Mico", "Minhoca", "Morcego", "Morsa", "Mosquito", "Mula", "Orangotango", "Orca",
    "Ornitorrinco", "Ostra", "Ourico", "Ovelha", "Panda", "Pantera", "Papagaio", "Pardal", "Passaro", "Pato", "Pavao",
    "Peixe", "Pelicano", "Peru", "PicaPau", "Pinguim", "Pinto", "Piranha", "Polvo", "Pombo", "Ponei", "Porco",
    "PorcoEspinho", "PorquinhoDaIndia", "Preguica", "Puma", "QueroQuero", "Rato", "Ratazana", "Raposa", "Rinoceronte",
    "Sabia", "Salamandra", "Sapo", "Serpente", "Siri", "Suricate", "Tainha", "Tamandua", "Tatu", "Tigre", "Touro", "Traca",
    "Truta", "Tubarao", "Tucano", "Unicornio", "Urso", "Urubu", "Vaca", "VagaLume", "Veado", "Vespa", "Zebra", "Zorrilho"
  ],

  Frutas: [

    "Abacate", "Abacaxi", "Acai", "Acerola", "Ameixa", "Amora", "Banana", "Bergamota", "Butia", "Cacau",
    "Caju", "Caqui", "Carambola", "Cereja", "Coco", "Cupuacu", "Damasco", "Figo", "Framboesa", "Goiaba", "Groselha",
    "Guarana", "Jabuticaba", "Jaca", "Jamelao", "Kiwi", "Laranja", "Limao", "Lima", "Maca", "Mamao", "Manga", "Maracuja",
    "Melancia", "Melao", "Mirtilo", "Morango", "Nespera", "Pera", "Pessego", "Pitanga", "Pitaia", "Pomelo", "Roma",
    "Tamarindo", "Tamara", "Toranja", "Tucuma", "Uva"
  ],


};

//count
let winCount = 0;
let count = 0;
let chosenWord = "";

//Display option buttons
const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>Selecione uma categoria:</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonCon);
};

//Block all the Buttons
const blocker = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");
  //disable all options
  optionsButtons.forEach((button) => {
    button.disabled = true;
  });

  //disable all letters
  letterButtons.forEach((button) => {
    button.disabled.true;
  });
  newGameContainer.classList.remove("hide");
};

//Word Generator
const generateWord = (optionValue) => {
  let optionsButtons = document.querySelectorAll(".options");
  //If optionValur matches the button innerText then highlight the button
  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
    button.disabled = true;
  });

  //initially hide letters, clear previous word
  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[optionValue];
  //choose random word
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
  chosenWord = chosenWord.toUpperCase();

  //replace every letter with span containing dash
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

  //Display each element as span
  userInputSection.innerHTML = displayItem;
};

//Initial Function (Called when page loads/user presses new game)
const initializer = () => {
  winCount = 0;
  count = 0;

  //Initially erase all content and hide letteres and new game button
  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  //For creating letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);
    //character button click
    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");
      //if array contains clciked value replace the matched dash with letter else dram on canvas
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          //if character in array is same as clicked button
          if (char === button.innerText) {
            //replace dash with letter
            dashes[index].innerText = char;
            //increment counter
            winCount += 1;
            //if winCount equals word lenfth
            if (winCount == charArray.length) {
              resultText.innerHTML = `<h2 class='win-msg'>Você ganhou!</h2><p>A palavra era: <span>${chosenWord}</span></p>`;
              //block all buttons
              blocker();
            }
          }
        });
      } else {
        //lose count
        count += 1;
        //for drawing man
        drawMan(count);
        //Count==6 because head,body,left arm, right arm,left leg,right leg
        if (count == 6) {
          resultText.innerHTML = `<h2 class='lose-msg'>Você perdeu!</h2><p>A palavra era: <span>${chosenWord}</span></p>`;
          blocker();
        }
      }
      //disable clicked button
      button.disabled = true;
    });
    letterContainer.append(button);
  }

  displayOptions();
  //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
  let { initialDrawing } = canvasCreator();
  //initialDrawing would draw the frame
  initialDrawing();
};

//Canvas
const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;

  //For drawing lines
  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };

  const head = () => {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  const body = () => {
    drawLine(70, 40, 70, 80);
  };

  const leftArm = () => {
    drawLine(70, 50, 50, 70);
  };

  const rightArm = () => {
    drawLine(70, 50, 90, 70);
  };

  const leftLeg = () => {
    drawLine(70, 80, 50, 110);
  };

  const rightLeg = () => {
    drawLine(70, 80, 90, 110);
  };

  //initial frame
  const initialDrawing = () => {
    //clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //bottom line
    drawLine(10, 130, 130, 130);
    //left line
    drawLine(10, 10, 10, 131);
    //top line
    drawLine(10, 10, 70, 10);
    //small top line
    drawLine(70, 10, 70, 20);
  };

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

//draw the man
const drawMan = (count) => {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  switch (count) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftArm();
      break;
    case 4:
      rightArm();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
};

//New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;