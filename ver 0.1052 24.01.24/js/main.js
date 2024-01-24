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
    amt: new Decimal("2000"),
    gain: new Decimal("0"),
    gainBase: new Decimal("0"),
    manti: 1,
    gainManti: 1,
    gaine2: new Decimal("0"),
    base: new Decimal("0"),
    entropy: new Decimal("0")
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
aUpgrade5.style.display = "none"
aUpgrade6.style.display = "none"
aUpgrade7.style.display = "none"
aUpgrade8.style.display = "none"
let isAUpgrade1Bought = false
let isAUpgrade2Bought = false
let isAUpgrade3Bought = false
let isAUpgrade4Bought = false
let isAUpgrade5Bought = false
let isAUpgrade6Bought = false
let isAUpgrade7Bought = false
let isAUpgrade8Bought = false
let isAUpgrade9Bought = false
let isEntropyUnlocked = false
const minFluctDisp = document.getElementById("minFluctDisp")
const maxFluctDisp = document.getElementById("maxFluctDisp")
const fluctDisp = document.getElementById("fluctDisp")
fluctDisp.style.display = "none"
const entropyDisp = document.getElementById("entropyDisp")
const entropyBoostDisp = document.getElementById("entropyBoostDisp")
entropyDisp.style.display = "none"
const fluctCurrDisp = document.getElementById("fluctCurrDisp")
function fluctuation(){
    fluct.current = Decimal.add((Decimal.times((Math.round(Math.random()*100)/100), Decimal.sub(fluct.max, "1"))), Decimal.add("1", fluct.min))
    fluctCurrDisp.textContent = fluct.current
    minFluctDisp.textContent = Decimal.add("1", fluct.min)
    maxFluctDisp.textContent = fluct.max
}
//начало генерации
aUpgrade1.addEventListener("click", function(){
    if(isAUpgrade1Bought == false){
        aUpgrade1.style.backgroundColor = "green"
        isAUpgrade1Bought = true
    }
})
//удвоение 1
aUpgrade2.addEventListener("click",function(){
    if(alpha.amt.greaterThanOrEqualTo("15") == true & isAUpgrade2Bought == false){
        alpha.amt = Decimal.sub(alpha.amt, "15")
        isAUpgrade2Bought = true
        aUpgrade2.style.backgroundColor = "green"
    }
})
//удвоение 2
aUpgrade3.addEventListener("click",function(){
    if(alpha.amt.greaterThanOrEqualTo("42") == true & isAUpgrade3Bought == false){
        
        alpha.amt = Decimal.sub(alpha.amt, "42")
        isAUpgrade3Bought = true
        aUpgrade3.style.backgroundColor = "green"
    }
})
//апгрейд анлок и флуктуация
aUpgrade4.addEventListener("click", function(){
    if(alpha.amt.greaterThanOrEqualTo("100") == true & isAUpgrade4Bought == false){
        aUpgrade5.style.display = "block"
        aUpgrade6.style.display = "block"
        aUpgrade7.style.display = "block"
        aUpgrade4.style.backgroundColor = "green"
        fluctDisp.style.display = "block"
        fluct.min = "0"
        fluct.max = "2"
        
        isAUpgrade4Bought = true
        fluctFunct = setInterval(fluctuation, 3000)
        alpha.amt = Decimal.sub(alpha.amt, "100")
    }
})
//энтропия
aUpgrade5.addEventListener("click", function(){
    if(alpha.amt.greaterThanOrEqualTo("237") == true & isAUpgrade5Bought == false){
        isAUpgrade5Bought = true
        isEntropyUnlocked = true
        aUpgrade5.style.backgroundColor = "green"
        alpha.amt = Decimal.sub(alpha.amt,"237")
        entropyDisp.style.display = "block"
    }
})
//открытие остальных аспектов и буст флуктуации
aUpgrade6.addEventListener("click", function(){
    if(alpha.amt.greaterThanOrEqualTo("2000") == true & isAUpgrade6Bought == false){
        isAUpgrade6Bought == true
        aUpgrade6.style.backgroundColor = "green"
        fluct.max = Decimal.times(fluct.max, "2")
        fluct.min = Decimal.add(fluct.min, "1")
        alpha.amt = Decimal.sub(alpha.amt, "2000")
        aUpgrade8.style.display = "block"
    }
})
//буст второго апгрейда
//анлок бета
function gainCalc(){
    alpha.gain = "0"
    alpha.base = "0"
    alpha.gainBase = "0"
    if(isAUpgrade1Bought == true){
        alpha.base = Decimal.add(alpha.base, "0.1")
        alpha.gain = alpha.base
    }
    if(isAUpgrade2Bought == true){
        alpha.base = Decimal.times(alpha.base, "2")
        alpha.gain = alpha.base
    }
    if(isAUpgrade3Bought == true){
        alpha.gainBase = Decimal.times(alpha.base,"2")
        alpha.gain = alpha.gainBase
        
    }
    if(isAUpgrade4Bought == true){
        alpha.gain = Decimal.times(alpha.gainBase, fluct.current)
    }
    if(isAUpgrade5Bought == true){
        alpha.entropy = Decimal.div(Decimal.round(Decimal.times(Decimal.pow("1.42", Decimal.div(Decimal.round(Decimal.times(Decimal.log10(alpha.amt),"100")),"100")),"100")),"100")
        alpha.gain = Decimal.times(alpha.gain, alpha.entropy)
        entropyBoostDisp.textContent = alpha.entropy
        
    }
}
a2 = setInterval(gainCalc, 100);
console.log(Decimal.pow("1.42", Decimal.round(Decimal.div(Decimal.times(Decimal.log10("1000"),"100"),"100"))))
