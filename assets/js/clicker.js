(() => {
document.getElementById("buy1").style.display="block";
// god mode
//document.getElementById("score").innerText="1000000000";

let perso1speed=1;
let perso2speed=Math.ceil(Math.exp(2));
let perso3speed=Math.ceil(Math.exp(3));
let perso4speed=Math.ceil(Math.exp(4));
let perso5speed=Math.ceil(Math.exp(5));
let perso6speed=Math.ceil(Math.exp(6));
let perso7speed=Math.ceil(Math.exp(7));
let perso8speed=Math.ceil(Math.exp(8));
let perso1cost=0;
let perso2cost=perso2speed*100;
let perso3cost=perso3speed*200;
let perso4cost=perso4speed*300;
let perso5cost=perso5speed*400;
let perso6cost=perso6speed*500;
let perso7cost=perso7speed*600;
let perso8cost=perso8speed*700;
let perso1autoclickCost=perso1speed*20;
let perso2autoclickCost=perso2speed*20;
let perso3autoclickCost=perso3speed*20;
let perso4autoclickCost=perso4speed*20;
let perso5autoclickCost=perso5speed*20;
let perso6autoclickCost=perso6speed*20;
let perso7autoclickCost=perso7speed*20;
let perso8autoclickCost=perso8speed*20;
let perso1Name="ryu";
let perso2Name="zanglief";
let perso3Name="cammy";
let perso4Name="blanka";
let perso5Name="ken";
let perso6Name="honda";
let perso7Name="chun-li";
let perso8Name="bison";

// Animate character who don't fight
setInterval(function() {
    for (let i=1; i<9;i++) {
        if (document.getElementById("imgCharacter"+i).dataset.img === eval("perso"+i+"Name")+"1") {
            document.getElementById("imgCharacter"+i).src = "./assets/img/"+eval("perso"+i+"Name")+"2.png";
            document.getElementById("imgCharacter"+i).dataset.img = eval("perso"+i+"Name")+"2";
        } else if (document.getElementById("imgCharacter"+i).dataset.img === eval("perso"+i+"Name")+"2") {
            document.getElementById("imgCharacter"+i).src = "./assets/img/"+eval("perso"+i+"Name")+"3.png";
            document.getElementById("imgCharacter"+i).dataset.img = eval("perso"+i+"Name")+"3";
        } else if (document.getElementById("imgCharacter"+i).dataset.img === eval("perso"+i+"Name")+"3") {
            document.getElementById("imgCharacter"+i).src = "./assets/img/"+eval("perso"+i+"Name")+"4.png";
            document.getElementById("imgCharacter"+i).dataset.img = eval("perso"+i+"Name")+"4";
        } else if (document.getElementById("imgCharacter"+i).dataset.img === eval("perso"+i+"Name")+"4") {
            document.getElementById("imgCharacter"+i).src = "./assets/img/"+eval("perso"+i+"Name")+"1.png";
            document.getElementById("imgCharacter"+i).dataset.img = eval("perso"+i+"Name")+"1";
        }
    }
}, 150)

// Animate character who fight
setInterval(function() {
    for (let i=1; i<9; i++) {
        if (document.getElementById("imgCharacter"+i).dataset.img === eval("perso"+i+"Name")+"Click1") {
            document.getElementById("imgCharacter"+i).src = "./assets/img/"+eval("perso"+i+"Name")+"Click2.png";
            document.getElementById("imgCharacter"+i).dataset.img = eval("perso"+i+"Name")+"Click2";
        } else if (document.getElementById("imgCharacter"+i).dataset.img === eval("perso"+i+"Name")+"Click2") {
            document.getElementById("imgCharacter"+i).src = "./assets/img/"+eval("perso"+i+"Name")+"Click3.png";
            document.getElementById("imgCharacter"+i).dataset.img = eval("perso"+i+"Name")+"Click3";
        } else if (document.getElementById("imgCharacter"+i).dataset.img === eval("perso"+i+"Name")+"Click3") {
            document.getElementById("imgCharacter"+i).src = "./assets/img/"+eval("perso"+i+"Name")+"1.png";
            document.getElementById("imgCharacter"+i).dataset.img = eval("perso"+i+"Name")+"1";
        }
    }
}, 50)

// Animate button who was clicked
setInterval(function() {
    for (let i=1; i<9;i++) {
        if (document.getElementById("button"+i).dataset.state === "2") {
            document.getElementById("button"+i).src = "./assets/img/perso"+i+"Button3.png";
            document.getElementById("button"+i).dataset.state = "3";
        } else if (document.getElementById("button"+i).dataset.state === "3") {
            document.getElementById("button"+i).src = "./assets/img/perso"+i+"Button4.png";
            document.getElementById("button"+i).dataset.state = "4";
        } else if (document.getElementById("button"+i).dataset.state === "4") {
            document.getElementById("button"+i).src = "./assets/img/perso"+i+"Button3.png";
            document.getElementById("button"+i).dataset.state = "5";
        } else if (document.getElementById("button"+i).dataset.state === "5") {
            document.getElementById("button"+i).src = "./assets/img/perso"+i+"Button2.png";
            document.getElementById("button"+i).dataset.state = "6";
        } else if (document.getElementById("button"+i).dataset.state === "6") {
            document.getElementById("button"+i).src = "./assets/img/perso"+i+"Button1.png";
            document.getElementById("button"+i).dataset.state = "1";
        }
    }
    }, 50)

// when click
function click (id) {
    let numId=id.substring(6, 7);
    document.getElementById("score").innerText=(Number(document.getElementById("score").innerText)+Number(document.getElementById("speed"+numId).textContent)).toString(10);
    fight(numId);
    pressButton(numId);
}

// fight on click
function fight(id) {
        document.getElementById("imgCharacter"+id).src = "./assets/img/"+eval("perso"+id+"Name")+"Click1.png";
        document.getElementById("imgCharacter"+id).dataset.img = eval("perso"+id+"Name")+"Click1";
}

// push the button
function pressButton(id) {
    document.getElementById("button"+id).src="./assets/img/perso"+id+"Button2.png"; document.getElementById("button"+id).dataset.state="2";
}

    //to re-show the special move
    setInterval(() => {
        for (let i = 1; i < 9; i++) {
            if (document.getElementById("level" + i) !== undefined) {
                document.getElementById("specialMove" + i).dataset.state = Number(document.getElementById("specialMove" + i).dataset.state) + 1;
                document.getElementById("timer" + i).style.display = "flex";
                document.getElementById("specialMove" + i).textContent = " (" + document.getElementById("specialMove" + i).dataset.state + ") ";
            }
        }
    }, 60000)

    // buy special moves
    function buySp(id) {
        let numId = id.substring(5, 6)
        document.getElementById("specialMove" + numId).dataset.state = (Number(document.getElementById("specialMove" + numId).dataset.state) - 1).toString(10);
        document.getElementById("specialMove" + numId).textContent = " (" + document.getElementById("specialMove" + numId).dataset.state + ") ";
        if (Number(document.getElementById("specialMove" + numId).dataset.state) < 1) {
            document.getElementById("timer" + numId).style.display = "none";
        }
    }

    // activate special moves
    function clickMove(id) {
        let numId = id.substring(5, 6);
        let i = 9;
        document.getElementById("button" + numId).src = "./assets/img/perso" + numId + "Button4.png";
        document.getElementById("button" + numId).dataset.state = "4";
        document.getElementById("score").innerText = (Number(document.getElementById("score").innerText) + (Number(document.getElementById("speed" + numId).textContent) * 80)).toString(10);
        if (numId === "1") { i = 5; }
        if (numId === "2") { i = 9; }
        if (numId === "3") { i = 8; }
        if (numId === "4") { i = 8; }
        if (numId === "5") { i = 9; }
        if (numId === "6") { i = 6; }
        if (numId === "7") { i = 6; }
        if (numId === "8") { i = 8; }
        specialMove(i, numId)
    }

    // Special move + countdown
    function specialMove(i, id) {
        if (i === 9) { document.getElementById("imgCharacter" + id).src = "./assets/img/SP/" + eval("perso" + id + "Name") + i + ".png" }
        if (i === 8) { document.getElementById("imgCharacter" + id).src = "./assets/img/SP/" + eval("perso" + id + "Name") + i + ".png" }
        if (i === 7) { document.getElementById("imgCharacter" + id).src = "./assets/img/SP/" + eval("perso" + id + "Name") + i + ".png" }
        if (i === 6) { document.getElementById("imgCharacter" + id).src = "./assets/img/SP/" + eval("perso" + id + "Name") + i + ".png" }
        if (i === 5) { document.getElementById("imgCharacter" + id).src = "./assets/img/SP/" + eval("perso" + id + "Name") + i + ".png" }
        if (i === 4) { document.getElementById("imgCharacter" + id).src = "./assets/img/SP/" + eval("perso" + id + "Name") + i + ".png" }
        if (i === 3) { document.getElementById("imgCharacter" + id).src = "./assets/img/SP/" + eval("perso" + id + "Name") + i + ".png" }
        if (i === 2) { document.getElementById("imgCharacter" + id).src = "./assets/img/SP/" + eval("perso" + id + "Name") + i + ".png" }
        if (i === 1) { document.getElementById("imgCharacter" + id).src = "./assets/img/SP/" + eval("perso" + id + "Name") + i + ".png" }
        i--;
        if (i >= 1) {
            setTimeout(function () { specialMove(i, id) }, 50);
        }
        else {
            document.getElementById("button" + id).src = "./assets/img/perso" + id + "Button1.png";
            document.getElementById("button" + id).dataset.state = "1";
        }
    }

// buy a character
function buy(id) {
    let numId=id.substring(3, 4);
    if (Number(document.getElementById("score").textContent)<eval("perso"+numId+"cost")) alerte("You don't have enough points to buy this character !");
    else {
    document.getElementById("score").innerText=(Number(document.getElementById("score").innerText)-eval("perso"+numId+"cost")).toString(10);
    document.getElementById("name"+numId).innerText=eval("perso"+numId+"Name");
    document.getElementById("speed"+numId).innerText=eval("perso"+numId+"speed");
    document.getElementById("level"+numId).innerText="1";
    document.getElementById("autoclick"+numId).innerText="Buy autoclick "+eval("perso"+numId+"autoclickCost")+" pts";
    document.getElementById("imgCharacter"+numId).src = "./assets/img/"+eval("perso"+numId+"Name")+"1.png";
    document.getElementById("imgCharacter"+numId).dataset.img = eval("perso"+numId+"Name")+"1";
    document.getElementById("buy"+numId).style.display="none";
    document.getElementById("left"+numId).style.display="block";
    document.getElementById("right"+numId).style.display="flex";
    document.getElementById("costLevelUp"+numId).innerText=((Number(document.getElementById("level"+numId).textContent))*eval("perso"+numId+"autoclickCost")).toString(10);
    modalNewPerso(numId);
    if (numId<8) {
        document.getElementById("mystery"+(Number(numId)+1).toString(10)).style.display = "none";
        document.getElementById("perso"+(Number(numId)+1).toString(10)+"cost").textContent = eval("perso"+(Number(numId)+1).toString(10)+"cost");
        document.getElementById("buy"+(Number(numId)+1).toString(10)).style.display = "block";
    }
    }
}

// buy autoclick
function buyAutoclick(id) {
    let numId = id.substring(9, 10);
    if (Number(document.getElementById("score").textContent)<eval("perso"+numId+"autoclickCost"))  alerte("You don't have enough points to buy this autoclick !");
    else {
        document.getElementById("score").innerText=(Number(document.getElementById("score").innerText)-eval("perso"+numId+"autoclickCost")).toString(10);
        document.getElementById("autoclick"+numId).textContent="Activate Autoclick";
    }
}

// buy levelup
    function levelup(id) {
        let numId = id.substring(7, 8);
        let levelupCost=Number(document.getElementById("level"+numId).textContent)*eval("perso"+numId+"autoclickCost");
        if (Number(document.getElementById("score").textContent)<levelupCost)  alerte("You don't have enough points to level up !");
        else {
            document.getElementById("score").innerText=(Number(document.getElementById("score").innerText)-levelupCost).toString(10);
            document.getElementById("speed"+numId).textContent=((Number(document.getElementById("level"+numId).textContent)+1)*eval("perso"+numId+"speed")).toString(10);
            document.getElementById("level"+numId).innerText=(Number(document.getElementById("level"+numId).innerText)+1).toString(10);
            document.getElementById("costLevelUp"+numId).innerText=((Number(document.getElementById("level"+numId).textContent))*eval("perso"+numId+"autoclickCost")).toString(10);
        }
    }

// modal congratz for new perso
function modalNewPerso(id){
    let modal = document.getElementById("modal");
    modal.style.display="block";
    let perso = eval("perso" + id + "Name");
    switch (perso){
        case "bison" :
            limitVictory = 2;
            break;
        case "blanka":
            limitVictory = 5;
            break;
        case "cammy":
            limitVictory = 5;
            break;
        case "chun-li":
            limitVictory = 13;
            break;
        case "honda" :
            limitVictory = 2;
            break;
        case "ken" :
            limitVictory = 3;
            break;
        case "ryu":
            limitVictory = 7;
            break;
        case "zanglief":
            limitVictory = 2;
            break;
    }
    document.getElementById("modal-title").innerHTML = "Congratulations!<br/> You have enough points to get " + perso;
     animPerso(id,limitVictory, 1)
    if (modal !== null){
        document.getElementById("modalClose").addEventListener("click", () => {
            modal.style.display = "none";
            loadBonus();
            document.getElementById("specialMove" + id).dataset.state = "1";
            document.getElementById("specialMove" + id).textContent = " (" + document.getElementById("specialMove" + id).dataset.state + ") ";
        });
    }
}
// anim perso in modal
function animPerso(id, limitVictory, i){
    let perso = eval("perso" + id + "Name");
    let imgVictory =  "./assets/img/victories/" + perso + "/" + perso + "-" + i + ".png";
    document.getElementById("modal-pers").src = imgVictory;
    i++;
    if (i <= limitVictory ) setTimeout( function(){ animPerso(id, limitVictory, i) }, 150);
 }


// activate autoclick
function activateAutoclick(id) {
    document.getElementById(("autoclick"+id.substring(9, 10))).dataset.activate="1";
    document.getElementById(("autoclick"+id.substring(9, 10))).innerText="Desactivate Autoclick";
}

// desactivate autoclick
function desactivateAutoclick(id) {
    document.getElementById(("autoclick"+id.substring(9, 10))).dataset.activate="0";
    document.getElementById(("autoclick"+id.substring(9, 10))).innerText="Activate Autoclick";
}

// autoclick
setInterval(function() {
    if (document.getElementById("autoclick1").dataset.activate==="1") click("button1");
    if (document.getElementById("autoclick2").dataset.activate==="1") click("button2");
    if (document.getElementById("autoclick3").dataset.activate==="1") click("button3");
    if (document.getElementById("autoclick4").dataset.activate==="1") click("button4");
    if (document.getElementById("autoclick5").dataset.activate==="1") click("button5");
    if (document.getElementById("autoclick6").dataset.activate==="1") click("button6");
    if (document.getElementById("autoclick7").dataset.activate==="1") click("button7");
    if (document.getElementById("autoclick8").dataset.activate==="1") click("button8");
}, 1000)

// listen for button click
document.querySelectorAll('.button').forEach((element) =>
element.addEventListener('click', () => {
    click(element.id);
}));
// listen for buying character
document.querySelectorAll('.buy').forEach((element) =>
element.addEventListener('click', () => {
    buy(element.id);
}));
// listen for buying levelup
    document.querySelectorAll('.levelup').forEach((element) =>
        element.addEventListener('click', () => {
            levelup(element.id);
        }));
// listen for buying autoclick
    document.querySelectorAll('.autoclick').forEach((element) =>
        element.addEventListener('click', () => {
          if (document.getElementById(("autoclick"+element.id.substring(9, 10))).innerText==="Activate Autoclick") activateAutoclick(element.id);
          else if (document.getElementById(("autoclick"+element.id.substring(9, 10))).innerText==="Desactivate Autoclick") desactivateAutoclick(element.id);
          else buyAutoclick(element.id);
        }));

    // listen for special move
    document.querySelectorAll('.specialMove').forEach((element) =>
        element.addEventListener('click', () => {
            buySp(element.id);
            clickMove(element.id)
        }));

    let c = document.getElementById("game");
    let background1Img = document.getElementById("background1");
    let opacity="FF";
    let opacityInterval="";
    let car1=document.getElementById("car1");
    let car1X=-100;
    let car1Y=-100;
    let car2=document.getElementById("car2");
    let car2X=-100;
    let car2Y=-100;
    let car3=document.getElementById("car3");
    let car3X=-100;
    let car3Y=-100;
    let eclatVerre1=document.getElementById("eclatVerre1");
    let eclatVerre1X=-100;
    let eclatVerre1Y=-100;
    let eclatVerre2=document.getElementById("eclatVerre2");
    let eclatVerre2X=-100;
    let eclatVerre2Y=-100;
    let car4=document.getElementById("car4");
    let car4X=-100;
    let car4Y=-100;
    let car5=document.getElementById("car5");
    let car5X=-100;
    let car5Y=-100;
    let car6=document.getElementById("car6");
    let car6X=-100;
    let car6Y=-100;
    let car7=document.getElementById("car7");
    let car7X=-200;
    let car7Y=-100;
    let car8=document.getElementById("car8");
    let car8X=-200;
    let car8Y=-100;
    let car9=document.getElementById("car9");
    let car9X=-200;
    let car9Y=-100;
    let car10=document.getElementById("car10");
    let car10X=-200;
    let car10Y=-100;
    let oil1=document.getElementById("oil1");
    let oil1X=-200;
    let oil1Y=-100;
    let oil2=document.getElementById("oil2");
    let oil2X=-200;
    let oil2Y=-100;
    let oil3=document.getElementById("oil3");
    let oil3X=-200;
    let oil3Y=-100;
    let oilStatut=0;
    let water1=document.getElementById("water1");
    let water1X=-200;
    let water1Y=-100;
    let waterStatut=0;
    let water2=document.getElementById("water2");
    let water2X=-200;
    let water2Y=-100;
    let water3=document.getElementById("water3");
    let water3X=-200;
    let water3Y=-100;
    let wheel1=document.getElementById("wheel1");
    let wheel1X=-200;
    let wheel1Y=-100;
    let wheel2=document.getElementById("wheel2");
    let wheel2X=-200;
    let wheel2Y=-100;
    let door=document.getElementById("door");
    let doorX=-100;
    let doorY=-100;
    let carBreak1=document.getElementById("carBreak1");
    let carBreak1X=-100;
    let carBreak1Y=-100;
    let carBreak2=document.getElementById("carBreak2");
    let carBreak2X=-100;
    let carBreak2Y=-100;
    let carLife=0;
    let ptsBonus=0;

// fonction name is clear no ?
    function refreshScreen() {
        let ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(background1Img, 0, 0);
        if (parseInt(opacity, 16)>0) {
            ctx.font = '800 30px sans-serif';
            ctx.fillStyle = "#FF1902" + opacity;
            ctx.fillText("BONUS LEVEL", 330, 90);
        }
        else {
            ctx.drawImage(wheel2, wheel2X, wheel2Y);
            ctx.drawImage(car1, car1X, car1Y);
            ctx.drawImage(car2, car2X, car2Y);
            ctx.drawImage(car3, car3X, car3Y);
            ctx.drawImage(car4, car4X, car4Y);
            ctx.drawImage(car5, car5X, car5Y);
            ctx.drawImage(car6, car6X, car6Y);
            ctx.drawImage(car7, car7X, car7Y);
            ctx.drawImage(car8, car8X, car8Y);
            ctx.drawImage(car9, car9X, car9Y);
            ctx.drawImage(car10, car10X, car10Y);
            ctx.drawImage(eclatVerre1, eclatVerre1X, eclatVerre1Y);
            ctx.drawImage(eclatVerre2, eclatVerre2X, eclatVerre2Y);
            ctx.drawImage(carBreak1, carBreak1X, carBreak1Y);
            ctx.drawImage(carBreak2, carBreak2X, carBreak2Y);
            ctx.drawImage(door, doorX, doorY);
            ctx.drawImage(oil1, oil1X, oil1Y);
            ctx.drawImage(oil2, oil2X, oil2Y);
            ctx.drawImage(oil3, oil3X, oil3Y);
            ctx.drawImage(water1, water1X, water1Y);
            ctx.drawImage(water2, water2X, water2Y);
            ctx.drawImage(water3, water3X, water3Y);
            ctx.drawImage(wheel1, wheel1X, wheel1Y);
        }
    }

// load the car after "bonus level"
    function loadCar() {
        car1X=380;car1Y=90;
        car2X=383;car2Y=72;
        refreshScreen();
    }

// handle the opacity of "bonus level"
    function opacityBonus() {
        opacity = (parseInt(opacity, 16)-6).toString(16);
        if (parseInt(opacity, 16)<0  && carLife===50) { stopOpacity(); loadCar(); }
        else refreshScreen();
    }
    function stopOpacity() {
        clearInterval(opacityInterval);
    }

// click on the car
    function clickCar() {
        carLife--;
        if (carLife>42) {
            animateCar2(10);
            addScore();
        }
        else if (carLife===42) {
            car3X=383;car3Y=72;
            animateEclat1(10);
            animateCar3(10);
            addScore();
        }
        else if (carLife>34) {
            animateCar3(10);
            addScore();
        }
        else if (carLife===34) {
            car4X=478;car4Y=72;
            car5X=463;car5Y=72;
            car2X=-100;car2Y=-100;
            carBreak1X=502;carBreak1Y=77;
            eclatVerre2X=520; eclatVerre2Y=80;
            animateEclat2(10);
            animateCar4(10);
            addScore();
        }
        else if (carLife>29) {
            animateCar4(10);
            addScore();
        }
        else if (carLife===29) {
            car6X=383;car6Y=72;
            car3X=-100;car3Y=-100;
            doorX=381;
            doorY=80;
            animateEclat1(10);
            animateDoor(10);
            animateCar5(10);
            addScore();
        }
        else if (carLife>22) {
            animateCar5(10);
            addScore();
        }
        else if (carLife===22) {
            car4X=-100;car4Y=-100;
            car5X=-100;car5Y=-100;
            car6X=-100;car6Y=-100;
            car7X=380;car7Y=80;
            carBreak2X=420;carBreak2Y=60;
            animateEclat1(10);
            animateEclat2(10);
            animateEclat3 (10);
            animateCar6(10);
            addScore();
        }
        else if (carLife>15) {
            animateCar6(10);
            addScore();
        }
        else if (carLife===15) {
            car7X=-200;car7Y=-100;
            car8X=380;car8Y=77;
            animateCar7(10);
            addScore();
        }
        else if (carLife>6) {
            animateCar7(10);
            addScore();
        }
        else if (carLife===6) {
            car8X=-200;car8Y=-100;
            car9X=378;car9Y=70;
            refreshScreen();
            animateCar8(10);
            addScore();
        }
        else if (carLife>0) {
            animateCar8(10);
            addScore();
        }
        else if (carLife===0) {
            car9X=-200;car9Y=-100;
            animateFinish();
            addScore();
            addScore();
        }

    }

    function addScore() {
        document.getElementById("score").textContent=(Number(document.getElementById("score").textContent)+ptsBonus).toString(10);
    }

// final animation
    function animateFinish() {
        water1X=460;water1Y=70;waterStatut=1;
        oil1X=500;oil1Y=65;oilStatut=1;
        animateWater(200, 1);
        animateOil(200, 1);
        refreshScreen();
        animateCarDown(200);
    }

//fall the car
    function animateCarDown(i) {
        i--;
        if (i===100) { car1X=-200; car1Y=-100; car10X=383; car10Y=102; }
        if (i>=-5) setTimeout(function(){ animateCarDown(i) }, 30);
        if (i===-5)  { let ctx = c.getContext("2d"); ctx.clearRect(0, 0, c.width, c.height); }
    }

// animate water
    function animateWater(i, place) {
        i--;
        let xWater=0; let yWater=0;
        if (place===1) { xWater=460; yWater=70; }
        if (place===2) { xWater=460; yWater=100; }
        if (waterStatut===1) { water1X=-200;water1Y=-100;water2X=xWater;water2Y=yWater; waterStatut=2; }
        else if (waterStatut===2) { water2X=-200;water2Y=-100;water3X=xWater;water3Y=yWater; waterStatut=3; }
        else if (waterStatut===3) { water3X=-200;water3Y=-100;water2X=xWater;water2Y=yWater; waterStatut=4; }
        else if (waterStatut===4) { water2X=-200;water2Y=-100;water1X=xWater;water1Y=yWater; waterStatut=1; }
        if (i===100) place=2;
        refreshScreen();
        if (i>=0) setTimeout(function(){ animateWater(i, place) }, 30);
    }

// animate oil
    function animateOil(i, place) {
        i--;
        let xOil=0; let yOil=0;
        if (place===1) { xOil=500; yOil=65; }
        if (place===2) { xOil=500; yOil=95; }
        if (oilStatut===1) { oil1X=-200;oil1Y=-100;oil2X=xOil;oil2Y=yOil; oilStatut=2; }
        else if (oilStatut===2) { oil2X=-200;oil2Y=-100;oil3X=xOil;oil3Y=yOil; oilStatut=3; }
        else if (oilStatut===3) { oil3X=-200;oil3Y=-100;oil2X=xOil;oil2Y=yOil; oilStatut=4; }
        else if (oilStatut===4) { oil2X=-200;oil2Y=-100;oil1X=xOil;oil1Y=yOil; oilStatut=1; }
        if (i===100) place=2;
        refreshScreen();
        if (i>=0) setTimeout(function(){ animateOil(i, place) }, 30);
    }

// animate car 2 after click
    function animateCar2(i) {
        if (i===10) car2Y=73;
        if (i===9) car2Y=74;
        if (i===8) car2Y=75;
        if (i===7) car2Y=76;
        if (i===6) car2Y=77;
        if (i===5) car2Y=77;
        if (i===4) car2Y=76;
        if (i===3) car2Y=75;
        if (i===2) car2Y=74;
        if (i===1) car2Y=73;
        if (i===0) car2Y=72;
        i--;
        refreshScreen();
        if (i>=0) setTimeout(function(){ animateCar2(i) }, 30);
    }

// animate car 2+3 after click
    function animateCar3(i) {
        if (i===10) { car2Y=73; car3Y=73; }
        if (i===9)  { car2Y=74; car3Y=74; }
        if (i===8)  { car2Y=75; car3Y=75; }
        if (i===7)  { car2Y=76; car3Y=76; }
        if (i===6)  { car2Y=77; car3Y=77; }
        if (i===5)  { car2Y=77; car3Y=77; }
        if (i===4)  { car2Y=76; car3Y=76; }
        if (i===3)  { car2Y=75; car3Y=75; }
        if (i===2)  { car2Y=74; car3Y=74; }
        if (i===1)  { car2Y=73; car3Y=73; }
        if (i===0)  { car2Y=72; car3Y=72; }
        i--;
        if (carLife<35) car2Y=-100;
        refreshScreen();
        if (i>=0) setTimeout(function(){ animateCar3(i) }, 30);
    }

// animate car 4 after click
    function animateCar4(i) {
        if (i===10) { car3Y=73; car4Y=73;car5Y=73; }
        if (i===9)  { car3Y=74; car4Y=74;car5Y=74; }
        if (i===8)  { car3Y=75; car4Y=75;car5Y=75; }
        if (i===7)  { car3Y=76; car4Y=76;car5Y=76; }
        if (i===6)  { car3Y=77; car4Y=77;car5Y=77; }
        if (i===5)  { car3Y=77; car4Y=77;car5Y=77; }
        if (i===4)  { car3Y=76; car4Y=76;car5Y=76; }
        if (i===3)  { car3Y=75; car4Y=75;car5Y=75; }
        if (i===2)  { car3Y=74; car4Y=74;car5Y=74; }
        if (i===1)  { car3Y=73; car4Y=73;car5Y=73; }
        if (i===0)  { car3Y=72; car4Y=72;car5Y=72; }
        i--;
        if (carLife<35) car2Y=-100;
        refreshScreen();
        if (i>=0) setTimeout(function(){ animateCar4(i) }, 30);
    }

// animate car 5 after click
    function animateCar5(i) {
        if (i===10) { car6Y=73; car4Y=73;car5Y=73; }
        if (i===9)  { car6Y=74; car4Y=74;car5Y=74; }
        if (i===8)  { car6Y=75; car4Y=75;car5Y=75; }
        if (i===7)  { car6Y=76; car4Y=76;car5Y=76; }
        if (i===6)  { car6Y=77; car4Y=77;car5Y=77; }
        if (i===5)  { car6Y=77; car4Y=77;car5Y=77; }
        if (i===4)  { car6Y=76; car4Y=76;car5Y=76; }
        if (i===3)  { car6Y=75; car4Y=75;car5Y=75; }
        if (i===2)  { car6Y=74; car4Y=74;car5Y=74; }
        if (i===1)  { car6Y=73; car4Y=73;car5Y=73; }
        if (i===0)  { car6Y=72; car4Y=72;car5Y=72; }
        i--;
        if (carLife<30) car3Y=-100;
        refreshScreen();
        if (i>=0) setTimeout(function(){ animateCar5(i) }, 30);
    }

// animate car 5 after click
    function animateCar6(i) {
        if (i===10) { car7Y=81; }
        if (i===9)  { car7Y=82; }
        if (i===8)  { car7Y=83; }
        if (i===7)  { car7Y=84; }
        if (i===6)  { car7Y=85; }
        if (i===5)  { car7Y=85; }
        if (i===4)  { car7Y=84; }
        if (i===3)  { car7Y=83; }
        if (i===2)  { car7Y=82; }
        if (i===1)  { car7Y=81; }
        if (i===0)  { car7Y=80; }
        i--;
        if (carLife<23) car6Y=-100;
        refreshScreen();
        if (i>=0) setTimeout(function(){ animateCar6(i) }, 30);
    }

    // animate car 7 after click
    function animateCar7(i) {
        if (i===10) { car8Y=78; }
        if (i===9)  { car8Y=79; }
        if (i===8)  { car8Y=80; }
        if (i===7)  { car8Y=81; }
        if (i===6)  { car8Y=82; }
        if (i===5)  { car8Y=82; }
        if (i===4)  { car8Y=81; }
        if (i===3)  { car8Y=80; }
        if (i===2)  { car8Y=79; }
        if (i===1)  { car8Y=78; }
        if (i===0)  { car8Y=77; }
        i--;
        if (carLife<16) car7Y=-200;
        refreshScreen();
        if (i>=0) setTimeout(function(){ animateCar7(i) }, 30);
    }

    // animate car 8 after click
    function animateCar8(i) {
        if (i===10) { car9Y=71; }
        if (i===9)  { car9Y=72; }
        if (i===8)  { car9Y=73; }
        if (i===7)  { car9Y=74; }
        if (i===6)  { car9Y=75; }
        if (i===5)  { car9Y=75; }
        if (i===4)  { car9Y=74; }
        if (i===3)  { car9Y=73; }
        if (i===2)  { car9Y=72; }
        if (i===1)  { car9Y=71; }
        if (i===0)  { car9Y=70; }
        i--;
        if (carLife<6) car8Y=-200;
        refreshScreen();
        if (i>=0) setTimeout(function(){ animateCar8(i) }, 30);
    }

//animate brisevitre1
    function animateEclat1(i) {
        if (i===10) { eclatVerre1X=410; eclatVerre1Y=71; }
        if (i===9) { eclatVerre1X=409; eclatVerre1Y=70; }
        if (i===8) { eclatVerre1X=408; eclatVerre1Y=69; }
        if (i===7) { eclatVerre1X=407; eclatVerre1Y=70; }
        if (i===6) { eclatVerre1X=406; eclatVerre1Y=71; }
        if (i===5) { eclatVerre1X=405; eclatVerre1Y=72; }
        if (i===4) { eclatVerre1X=404; eclatVerre1Y=73; }
        if (i===3) { eclatVerre1X=403; eclatVerre1Y=74; }
        if (i===2) { eclatVerre1X=402; eclatVerre1Y=75; }
        if (i===1) { eclatVerre1X=401; eclatVerre1Y=76; }
        if (i===0) { eclatVerre1X=400; eclatVerre1Y=77; }
        if (i===-1) { eclatVerre1X=399; eclatVerre1Y=78; }
        if (i===-2) { eclatVerre1X=398; eclatVerre1Y=79; }
        if (i===-3) { eclatVerre1X=398; eclatVerre1Y=80; }
        if (i===-4) { eclatVerre1X=-100; eclatVerre1Y=-100; }
        refreshScreen();
        i--;
        if (i>=-4) setTimeout(function(){ animateEclat1(i) }, 35);
    }

//animate door broken
    function animateDoor(i) {
        if (i===10) { doorX=379; doorY=79; }
        if (i===9) { doorX=377; doorY=79; }
        if (i===8) { doorX=375; doorY=79; }
        if (i===7) { doorX=373; doorY=79; }
        if (i===6) { doorX=371; doorY=79; }
        if (i===5) { doorX=369; doorY=80; }
        if (i===4) { doorX=368; doorY=80; }
        if (i===3) { doorX=367; doorY=80; }
        if (i===2) { doorX=366; doorY=81; }
        if (i===1) { doorX=365; doorY=81; }
        if (i===0) { doorX=364; doorY=82; }
        if (i===-1) { doorX=363; doorY=82; }
        if (i===-2) { doorX=362; doorY=83; }
        if (i===-3) { doorX=361; doorY=84; }
        if (i===-4) { doorX=-100; doorY=-100; }
        refreshScreen();
        i--;
        if (i>=-4) setTimeout(function(){ animateDoor(i) }, 35);
    }

//animate brisevitre2
    function animateEclat2(i) {
        if (i===10) { eclatVerre2X=521; eclatVerre2Y=76; carBreak1X=503;carBreak1Y=76;}
        if (i===9) { eclatVerre2X=522; eclatVerre2Y=75; carBreak1X=504;carBreak1Y=75; }
        if (i===8) { eclatVerre2X=523; eclatVerre2Y=74; carBreak1X=505;carBreak1Y=74; }
        if (i===7) { eclatVerre2X=524; eclatVerre2Y=73; carBreak1X=506;carBreak1Y=73; }
        if (i===6) { eclatVerre2X=525; eclatVerre2Y=74; carBreak1X=507;carBreak1Y=72; }
        if (i===5) { eclatVerre2X=526; eclatVerre2Y=75; carBreak1X=508;carBreak1Y=71; }
        if (i===4) { eclatVerre2X=527; eclatVerre2Y=76; carBreak1X=509;carBreak1Y=70; }
        if (i===3) { eclatVerre2X=528; eclatVerre2Y=77; carBreak1X=510;carBreak1Y=69; }
        if (i===2) { eclatVerre2X=529; eclatVerre2Y=78; carBreak1X=511;carBreak1Y=68; }
        if (i===1) { eclatVerre2X=530; eclatVerre2Y=79; carBreak1X=512;carBreak1Y=67; }
        if (i===0) { eclatVerre2X=531; eclatVerre2Y=80; carBreak1X=513;carBreak1Y=66; }
        if (i===-1) { eclatVerre2X=532; eclatVerre2Y=81; carBreak1X=514;carBreak1Y=65; }
        if (i===-2) { eclatVerre2X=533; eclatVerre2Y=82; carBreak1X=515;carBreak1Y=66; }
        if (i===-3) { eclatVerre2X=534; eclatVerre2Y=83; carBreak1X=516;carBreak1Y=67; }
        if (i===-4) { eclatVerre2X=-100; eclatVerre2Y=-100; carBreak1X=-100;carBreak1Y=-100; }
        refreshScreen();
        i--;
        if (i>=-4) setTimeout(function(){ animateEclat2(i) }, 30);
    }

//animate brisevitre3
    function animateEclat3(i) {
        if (i===10) { carBreak2X=420;carBreak2Y=58;}
        if (i===9) { carBreak2X=420;carBreak2Y=56; }
        if (i===8) { carBreak2X=420;carBreak2Y=54; }
        if (i===7) { carBreak2X=420;carBreak2Y=52; }
        if (i===6) { carBreak2X=420;carBreak2Y=50; }
        if (i===5) { carBreak2X=420;carBreak2Y=48; }
        if (i===4) { carBreak2X=419;carBreak2Y=47; }
        if (i===3) { carBreak2X=419;carBreak2Y=46; }
        if (i===2) { carBreak2X=419;carBreak2Y=45; }
        if (i===1) { carBreak2X=419;carBreak2Y=44; }
        if (i===0) { carBreak2X=418;carBreak2Y=43; }
        if (i===-1) { carBreak2X=418;carBreak2Y=42; }
        if (i===-2) { carBreak2X=418;carBreak2Y=41; }
        if (i===-3) { carBreak2X=418;carBreak2Y=40; }
        if (i===-4) { carBreak2X=-100;carBreak2Y=-100; }
        refreshScreen();
        i--;
        if (i>=-4) setTimeout(function(){ animateEclat3(i) }, 30);
    }

//                carBreak2X=420;carBreak2Y=60;


// listen to mouse move
    document.addEventListener("mousemove", mouseMoveHandler, false);
    function mouseMoveHandler(e) {
        let relativeX = e.clientX - c.offsetLeft;
        let relativeY = e.clientY - c.offsetTop;
        if (relativeX > 380 && relativeX < 567 && relativeY>52 && relativeY<140) {
            document.body.style.cursor ="pointer";
        }
        else if (relativeX > 0 && relativeX < c.width && relativeY>0 && relativeY<c.height) {
            document.body.style.cursor ="default";
        }
    }

// listen to click
    document.addEventListener("click", mouseClickHandler, false);
    function mouseClickHandler(e) {
        let relativeX = e.clientX - c.offsetLeft;
        let relativeY = e.clientY - c.offsetTop;
        if (relativeX > 380 && relativeX < 567 && relativeY>52 && relativeY<140) {
            clickCar();
        }
    }

// load game
    function loadBonus() {
        water1X = -200;
        water1Y = -200;
        water2X = -200;
        water2Y = -200;
        water3X = -200;
        water3Y = -200;
        oil1X = -200;
        oil1Y = -200;
        oil2X = -200;
        oil2Y = -200;
        oil3X = -200;
        oil3Y = -200;
        car1X = -200;
        car1Y = -200;
        car2X = -200;
        car2Y = -200;
        car3X = -200;
        car3Y = -200;
        car4X = -200;
        car4Y = -200;
        car5X = -200;
        car5Y = -200;
        car6X = -200;
        car6Y = -200;
        car7X = -200;
        car7Y = -200;
        car8X = -200;
        car8Y = -200;
        car9X = -200;
        car9Y = -200;
        car10X = -200;
        car10Y = -200;
        refreshScreen();
        opacity = "FF";
        opacityInterval = setInterval(opacityBonus, 100);
        carLife = 50;
        for (let i=1; i<9; i++) {
            if (document.getElementById("speed"+i).textContent!==undefined) ptsBonus=ptsBonus+Number(document.getElementById("speed"+i).textContent);
        }
    }

})();