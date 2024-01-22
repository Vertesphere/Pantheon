const body = document.body
body.style.backgroundColor = "black"

const aspectSelector = document.getElementById("aspectSelection")
const alphaAspectSelect = document.getElementById("alphaAspectSelect")
const betaAspectSelect = document.getElementById("betaAspectSelect")
const gammaAspectSelect = document.getElementById("gammaAspectSelect")
const deltaAspectSelect = document.getElementById("deltaAspectSelect")
const epsilonAspectSelect = document.getElementById("epsilonAspectSelect")
const zetaAspectSelect = document.getElementById("zetaAspectSelect")
const etaAspectSelect = document.getElementById("etaAspectSelect")
const thetaAspectSelect = document.getElementById("thetaAspectSelect")
const iotaAspectSelect = document.getElementById("iotaAspectSelect")
const kappaAspectSelect = document.getElementById("kappaAspectSelect")
const lambdaAspectSelect = document.getElementById("lambdaAspectSelect")
const muAspectSelect = document.getElementById("muAspectSelect")
const nuAspectSelect = document.getElementById("nuAspectSelect")
const xiAspectSelect = document.getElementById("xiAspectSelect")
const omicronAspectSelect = document.getElementById("omicronAspectSelect")
const piAspectSelect = document.getElementById("piAspectSelect")
const rhoAspectSelect = document.getElementById("rhoAspectSelect")
const sigmaAspectSelect = document.getElementById("sigmaAspectSelect")
const tauAspectSelect = document.getElementById("tauAspectSelect")
const upsilonAspectSelect = document.getElementById("upsilonAspectSelect")
const phiAspectSelect = document.getElementById("phiAspectSelect")
const chiAspectSelect = document.getElementById("chiAspectSelect")
const psiAspectSelect = document.getElementById("psiAspectSelect")
const omegaAspectSelect = document.getElementById("omegaAspectSelect")

const alphaDiv = document.getElementById("alphaAspect")
alphaDiv.style.display = "none"
const backToSelButton = document.getElementById("backToSelector")
backToSelButton.style.display = "none"
const alphaAmtDisp = document.getElementById("alphaAmtDisp")
const alphaGainDisp = document.getElementById("alphaGainDisp")

alphaAspectSelect.addEventListener('click', function(){
    aspectSelector.style.display = "none"
    alphaDiv.style.display = "block"
    backToSelButton.style.display = "block"

})
backToSelButton.addEventListener("click", function(){
    alphaDiv.style.display = "none"
    aspectSelector.style.display = "block"
    backToSelButton.style.display = "none"
})

var alpha = {
    amt: new Decimal("0"),
    gain: new Decimal("0"),
    gainBase: new Decimal("0"),
    manti: 1,
    gainManti: 1,
    gaine2: new Decimal("0")
}
var fluct = {
    min: new Decimal("0"),
    max: new Decimal("0"),
    current: new Decimal("1")
}
function alphaGain(){
    alpha.amt = Decimal.add(alpha.amt, alpha.gain)
    alpha.manti = Math.round(Number(alpha.amt.m)*100)/100
    alpha.gainManti = Math.round(Number(alpha.gain.m)*100)/100
    alpha.gaine2 = Decimal.times(alpha.gain.e,"10")
    if ((alpha.amt.greaterThan(1000000)) == true){
        alphaAmtDisp.textContent = (alpha.manti.toString() + "e" + alpha.amt.e.toString())
        alphaGainDisp.textContent = (alpha.gainManti.toString() + "e" + alpha.gaine2.toString())
    } else {
        alphaAmtDisp.textContent = Math.round(Number(alpha.amt)*10)/10
        alphaGainDisp.textContent = Math.round(Number(alpha.gain)*10)
    }
    
}
a1 = setInterval(alphaGain, 100)

const aUpgrade1 = document.getElementById("aUpgrade1")
const aUpgrade2 = document.getElementById("aUpgrade2")
const aUpgrade3 = document.getElementById("aUpgrade3")
const aUpgrade4 = document.getElementById("aUpgrade4")
const aUpgrade5 = document.getElementById("aUpgrade5")
const aUpgrade6 = document.getElementById("aUpgrade6")
const aUpgrade7 = document.getElementById("aUpgrade7")
const aUpgrade8 = document.getElementById("aUpgrade8")
const aUpgrade9 = document.getElementById("aUpgrade9")
aUpgrade5.style.display = "none"
aUpgrade6.style.display = "none"
aUpgrade7.style.display = "none"
aUpgrade8.style.display = "none"
aUpgrade9.style.display = "none"
let isAUpgrade1Bought = false
let isAUpgrade2Bought = false
let isAUpgrade3Bought = false
let isAUpgrade4Bought = false
let isAUpgrade5Bought = false
let isAUpgrade6Bought = false
let isAUpgrade7Bought = false
let isAUpgrade8Bought = false
let isAUpgrade9Bought = false
const minFluctDisp = document.getElementById("minFluctDisp")
const maxFluctDisp = document.getElementById("maxFluctDisp")
const fluctDisp = document.getElementById("fluctDisp")
fluctDisp.style.display = "none"

function fluctuation(){
    fluct.current = Math.round(((Math.random() * 1) + 1)*100)/100
    alpha.gain = Decimal.times(alpha.gain, fluct.current)
}


//начало генерации
aUpgrade1.addEventListener("click", function(){
    if(isAUpgrade1Bought == false){
        alpha.gainBase = "0.1"
        alpha.gain = alpha.gainBase
        aUpgrade1.style.backgroundColor = "green"
        isAUpgrade1Bought = true
    }
})
//удвоение 1
aUpgrade2.addEventListener("click",function(){
    if(alpha.amt.greaterThanOrEqualTo("10") == true & isAUpgrade2Bought == false){
        alpha.gainBase = "0.2"
        alpha.gain = alpha.gainBase
        alpha.amt = Decimal.sub(alpha.amt, "10")
        isAUpgrade2Bought = true
        aUpgrade2.style.backgroundColor = "green"
    }
})
//удвоение 2
aUpgrade3.addEventListener("click",function(){
    if(alpha.amt.greaterThanOrEqualTo("25") == true & isAUpgrade3Bought == false){
        alpha.gain = Decimal.times(alpha.gainBase,"2")
        alpha.amt = Decimal.sub(alpha.amt, "25")
        isAUpgrade3Bought = true
        aUpgrade3.style.backgroundColor = "green"
    }
})
//апгрейд анлок и флуктуация
aUpgrade4.addEventListener("click", function(){
    if(alpha.amt.greaterThanOrEqualTo("60") == true & isAUpgrade4Bought == false){
        aUpgrade5.style.display = "block"
        aUpgrade6.style.display = "block"
        aUpgrade7.style.display = "block"
        aUpgrade8.style.display = "block"
        aUpgrade4.style.backgroundColor = "green"
        alpha.gainBase = "0.3"
        alpha.gain = Decimal.times(alpha.gainBase, "2")
        fluctDisp.style.display = "block"
        isAUpgrade4Bought = true
        fluctFunct = setInterval(fluctuation, 5000)
        alpha.amt = Decimal.sub(alpha.amt, "60")
    }
})
//энтропия
//открытие остальных аспектов
//множитель за купленные апгрейды
//буст второго апгрейда
//анлок бета
