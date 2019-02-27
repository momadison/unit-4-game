//========DECLARE VARIABLES============
//variables for tags
var charChoice = $("#charChoice");
var stageLeft = $("#stageLeft");
var stageRight = $("#stageRight");
var headlines = $("#chooseFighters");
var controller = $("#controller");
var punchAudio = new Audio('assets/audio/punch.mp3');

//variables to identify if the stages are set
var leftStage = false;
var rightStage = false;
var userChamp = "";
var userVillain = "";
var clickCount = 0;
var compChoice = ["kinetic","magic"];
var attackPower = 0;
var hitPointHolder = 0;
var multiplier = 0;


//===========CREATE ALL FIGHTERS================
//function creating new fighter
function createNewFighter(name,iI,iMD,iMO, iKD, iKO,iA, iL, hP) {
    var obj = {};
    obj.name = name;
    obj.imageIcon = iI;
    obj.imageMagicDefense = iMD;
    obj.imageMagicOffense = iMO;
    obj.imageKineticDefense = iKD;
    obj.imageKineticOffense = iKO;
    obj.imageArena = iA;
    obj.imageLoss = iL;
    obj.hitPoints = hP;
    fighterCount++;
    return obj;
}

//create all fighters
var fighterCount = 0;
var fighter1 = createNewFighter("fighter1","assets/images/pikachuicon.jpg","assets/images/pikachumd.jpg",
    "assets/images/pikachumd.jpg","assets/images/pikachukd.jpg","assets/images/pikachuko.jpg",
    "assets/images/pikachuneutral.jpg", "assets/images/pikachuloss.jpg", 1000);
var fighter2 = createNewFighter("fighter2","assets/images/ironManIcon.jpg","assets/images/ironManMagic.jpg",
"assets/images/ironManMagic.jpg","assets/images/ironManKinetic.jpg","assets/images/ironManKinetic.jpg",
"assets/images/ironManIcon.jpg", "assets/images/ironManLoss.jpg", 1000);
var fighter3 = createNewFighter("fighter3","assets/images/jerryIcon.jpg","assets/images/jerryMagic.jpg",
"assets/images/jerryMagic.jpg","assets/images/jerryKinetic.jpg","assets/images/jerryKinetic.jpg",
"assets/images/jerryIcon.jpg", "assets/images/jerryLoss.jpg", 1000);
var fighter4 = createNewFighter("fighter4","assets/images/cenaIcon.jpg","assets/images/cenaMagic.jpg",
"assets/images/cenaMagic.jpg","assets/images/cenaKinetic.jpg","assets/images/cenaKinetic.jpg",
"assets/images/cenaIcon.jpg", "assets/images/cenaLoss.jpg",1500);
var fighter5 = createNewFighter("fighter5","assets/images/zeldaIcon.jpg","assets/images/zeldaMagic.jpg",
"assets/images/zeldaMagic.jpg","assets/images/zeldaKineticDefense.jpg","assets/images/zeldaKineticOffense.jpg",
"assets/images/zeldaIcon.jpg", "assets/images/zeldaLoss.jpg", 1000);
var fighter6 = createNewFighter("fighter6","assets/images/alfIcon.jpg","assets/images/alfMagic.jpg",
"assets/images/alfMagic.jpg","assets/images/alfKinetic.jpg","assets/images/alfKinetic.jpg",
"assets/images/alfIcon.jpg", "assets/images/alfLoss.jpg", 1000);

//=======INITIATION FUNCTIONS================================
function loadScreen() {
    for (var i = 1; i <= fighterCount; i++) {
        //add div column tag for fighter
        var tableFighter = $("<div>");
        var tableSize = 12 / fighterCount;
        tableFighter.attr("class", "col-md-" + tableSize);
        tableFighter.attr("value", "fighter"+[i]);
        tableFighter.addClass("fighter"+[i]);
        charChoice.append(tableFighter);
        //add img tag for fighter
        var fighterImageHolder = $("<img>");
        var myFighter = "fighter" + [i];
        myFighter = eval(myFighter);
        fighterImageHolder.attr("src", myFighter.imageIcon);
        fighterImageHolder.attr("width", "150px");
        $(".fighter"+[i]).append(fighterImageHolder);  
    }
}

loadScreen();
//=============ON CLICK FUNCTIONS===========================
//function to set the Champion to the stage
//pick champion and villain on click functions
$(".fighter1").click(function () {
    if ((leftStage === true) && (rightStage === false)) {
        $(".fighter1").remove();
        setRightStage(fighter1);
    }
    if (clickCount < 1) {
        $(".fighter1").remove();
        setLeftStage(fighter1);
    }
    
})
$(".fighter2").click(function () {
    if ((leftStage === true) && (rightStage === false)) {
        $(".fighter2").remove();
        setRightStage(fighter2);
    }
    if (clickCount < 1) {
        $(".fighter2").remove();
        setLeftStage(fighter2);
    }
    
})
$(".fighter3").click(function () {
    if ((leftStage === true) && (rightStage === false)) {
        $(".fighter3").remove();
        setRightStage(fighter3);
    }
    if (clickCount < 1) {
        $(".fighter3").remove();
        setLeftStage(fighter3);
    }
    
})
$(".fighter4").click(function () {
    if ((leftStage === true) && (rightStage === false)) {
        $(".fighter4").remove();
        setRightStage(fighter4);
    }        if (clickCount < 1) {
        $(".fighter4").remove();
        setLeftStage(fighter4);
    }
})
$(".fighter5").click(function () {
    if ((leftStage === true) && (rightStage === false)) {
        $(".fighter5").remove();
        setRightStage(fighter5);
    }
    if (clickCount < 1) {
        $(".fighter5").remove();
        setLeftStage(fighter5);
    }
    
})
$(".fighter6").click(function () {
    if ((leftStage === true) && (rightStage === false)) {
        $(".fighter6").remove();
        setRightStage(fighter6);
    }
    if (clickCount < 1) {
        $(".fighter6").remove();
        setLeftStage(fighter6);
    }
})

//function to set the Champ
function setLeftStage(champ) {
   imageLeftTag = $("<img>");
   leftHitPointsDiv = $("<div>");
   imageLeftTag.attr("src", champ.imageArena);
   imageLeftTag.addClass("leftImage");
   leftHitPointsDiv.addClass("box boxleft");
   leftHitPointsDiv.text(champ.hitPoints);
   userChamp = eval(champ.name);
   stageLeft.append(imageLeftTag);
   stageLeft.append(leftHitPointsDiv);
   clickCount++;
   leftStage = true;
    headlines.text("Choose your Villain!");
}
//function to set the Villain
function setRightStage(villain) {
    imageRightTag = $("<img>");
    rightHitPointsDiv = $("<div>");
    imageRightTag.attr("src", villain.imageArena);
    imageRightTag.addClass("rightImage");
    rightHitPointsDiv.addClass("box boxright");
    rightHitPointsDiv.text(villain.hitPoints);
    userVillain = eval(villain.name);
    stageRight.append(imageRightTag);
    stageRight.append(rightHitPointsDiv);
    rightStage = true;
    headlines.text("FIGHT!");
    attack();
}

//function to setup attack buttons
function attackButtons() {
    attackDivMagic = $("<div>");
    attackDivMagic.addClass("magicAttack");
    attackDivMagic.text("Magic Attack");
    attackDivKinetic = $("<div>");
    attackDivKinetic.addClass("kineticAttack");
    attackDivKinetic.text("Physical Attack");
    controller.append(attackDivMagic);
    controller.append(attackDivKinetic);
    headlines.text("ATTACK!");
}

//function to setup defend buttons
function defendButtons() {
    defendDivMagic = $("<div>");
    defendDivMagic.addClass("magicAttack");
    attackDivMagic.text("Magic Defense");
    attackDivKinetic = $("<div>");
    attackDivKinetic.addClass("kineticAttack");
    attackDivKinetic.text("Physical Defense");
    controller.append(attackDivMagic);
    controller.append(attackDivKinetic);
    headlines.text("DEFEND!")
}

//function to wait before executing next line
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

 //function to display the hit
 function hitDisplay(hit, stage) {
    var hitDiv = $("<div>");
    hitDiv.attr("id", "hitIt")
    hitDiv.addClass("hitDisplay");
    hitDiv.text("");
    hitDiv.text(hit);
    stage.append(hitDiv);
    moveHit();
    punchAudio.play();
}

 function moveHit() {
        var elem = document.getElementById("hitIt"); 
        console.log(elem);
        var pos = 0;
        var id = setInterval(frame, 5);
        function frame() {
            if (pos == 250) {
                clearInterval(id);
                elem.remove();
            } else {
                pos += 2; 
                elem.style.top = pos + 'px'; 
            }
            }
 }

 function youWin() {
    $(".rightImage").attr("src" , userVillain.imageLoss);
    $(".boxright").remove();
    headlines.text("YOU WIN!");
 }

 function youLose() {
    $(".leftImage").attr("src" , userChamp.imageLoss);
    $(".boxleft").remove();
    headlines.text("YOU LOSE!");
 }
 

function attack() {
   attackButtons();
    //If Magic attack is Chosen
    $(".magicAttack").click(function () {
        $(".leftImage").attr("src" , userChamp.imageMagicOffense);
        $(".magicAttack").remove();
        $(".kineticAttack").remove();
        var villChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
        attackPower = Math.floor(Math.random() * 100 - 1);
        
        //If Villain also chooses Magic Defense
        if (villChoice == "magic") {
            $(".rightImage").attr("src", userVillain.imageMagicDefense);
            multiplier = Math.floor(Math.random() * .99) + .5;
            attackPower = attackPower * multiplier;
            userVillain.hitPoints -= attackPower;
            $(".boxright").text(userVillain.hitPoints);
            hitDisplay(attackPower, stageRight);
            if (userVillain.hitPoints >= 0) {
            defend();
            }
            else {
            youWin();
            }
        }

        //If Villain choses Kinetic Defense
        if (villChoice == "kinetic") {
            $(".rightImage").attr("src", userVillain.imageKineticDefense);
            multiplier = Math.floor(Math.random() * 3) + 1;
            attackPower = attackPower * multiplier;
            userVillain.hitPoints -= attackPower;
            $(".boxright").text(userVillain.hitPoints);
            hitDisplay(attackPower, stageRight);
            if (userVillain.hitPoints >= 0) {
                defend();
                }
                else {
                youWin();
                }
        }
    })
    
    //If Kinetic Attack is Chosen
    $(".kineticAttack").click(function () {
        $(".leftImage").attr("src", userChamp.imageKineticOffense);
        $(".magicAttack").remove();
        $(".kineticAttack").remove();
        var villChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
        attackPower = Math.floor(Math.random() * 100) + 1;

        //If Villain chooses Magic Defense
        if (villChoice === "magic") {
            $(".rightImage").attr("src", userVillain.imageMagicDefense);
            multiplier = Math.floor(Math.random() * 3) + 1;
            attackPower = attackPower * multiplier;
            userVillain.hitPoints -= attackPower;
            $(".boxright").text(userVillain.hitPoints);
            hitDisplay(attackPower, stageRight);
            if (userVillain.hitPoints >= 0) {
                defend();
                }
                else {
                youWin();
                }
        }

        //If Villain chooses Kinetic Defense
        if (villChoice === "kinetic") {
            $(".rightImage").attr("src", userVillain.imageKineticDefense);
            multiplier = Math.floor(Math.random() * .99) + .5;
            attackPower = attackPower * multiplier;
            userVillain.hitPoints -= attackPower;
            $(".boxright").text(userVillain.hitPoints);
            hitDisplay(attackPower, stageRight);
            if (userVillain.hitPoints >= 0) {
                defend();
                }
                else {
                youWin();
                }
        }
})  
}

//Function to defend
function defend() {
    defendButtons();
    //If Magic defense is Chosen
    $(".magicAttack").click(function () {
        $(".leftImage").attr("src" , userChamp.imageMagicDefense);
        $(".magicAttack").remove();
        $(".kineticAttack").remove();
        var villChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
        attackPower = Math.floor(Math.random() * 100 - 1);
        
        //If Villain also chooses Magic
        if (villChoice == "magic") {
            $(".rightImage").attr("src", userVillain.imageMagicOffense);
            multiplier = Math.floor(Math.random() * .99) + .5;
            attackPower = attackPower * multiplier;
            userChamp.hitPoints -= attackPower;
            $(".boxleft").text(userChamp.hitPoints);
            hitDisplay(attackPower, stageLeft);
            if (userChamp.hitPoints >= 0) {
                attack();
                }
                else {
                youLose();
                }
        }

        //If Villain choses Kinetic
        if (villChoice == "kinetic") {
            $(".rightImage").attr("src", userVillain.imageKineticOffense);
            multiplier = Math.floor(Math.random() * 3) + 1;
            attackPower = attackPower * multiplier;
            userChamp.hitPoints -= attackPower;
            $(".boxleft").text(userChamp.hitPoints);
            hitDisplay(attackPower, stageLeft);
            if (userChamp.hitPoints >= 0) {
                attack();
                }
                else {
                youLose();
                }
        }
    })
    
    //If Kinetic Defense is Chosen
    $(".kineticAttack").click(function () {
        $(".leftImage").attr("src", userChamp.imageKineticDefense);
        $(".magicAttack").remove();
        $(".kineticAttack").remove();
        var villChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
        attackPower = Math.floor(Math.random() * 100) + 1;

        //If Villain chooses Magic
        if (villChoice === "magic") {
            $(".rightImage").attr("src", userVillain.imageMagicOffense);
            multiplier = Math.floor(Math.random() * 3) + 1;
            attackPower = attackPower * multiplier;
            userChamp.hitPoints -= attackPower;
            $(".boxleft").text(userChamp.hitPoints);
            hitDisplay(attackPower, stageLeft);
            if (userChamp.hitPoints >= 0) {
                attack();
                }
                else {
                youLose();
                }
        }

        //If Villain chooses Kinetic 
        if (villChoice === "kinetic") {
            $(".rightImage").attr("src", userVillain.imageKineticOffense);
            multiplier = Math.floor(Math.random() * .99) + .5;
            attackPower = attackPower * multiplier;
            userChamp.hitPoints -= attackPower;
            $(".boxleft").text(userChamp.hitPoints);
            hitDisplay(attackPower, stageLeft);
            if (userChamp.hitPoints >= 0) {
                attack();
                }
                else {
                youLose();
                }
        }
})  
}


//================EXECUTE THE GAME===========================


