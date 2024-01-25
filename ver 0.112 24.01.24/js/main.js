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
    amt: new Decimal("1e5"),
    gain: new Decimal("0"),
    gainBase: new Decimal("0"),
    manti: 1,
    gainManti: 1,
    gainTemp: new Decimal("0"),
    gaine: new Decimal("0"),
    gainm:new Decimal("0"),
    base: new Decimal("0"),
    entropy: new Decimal("0"),
    upgradesBought: new Decimal("0")
}
var fluct = {
    min: new Decimal("0"),
    max: new Decimal("0"),
    current: new Decimal("1")
}
var conc = {
    amt: new Decimal("0"),
    essBoost: new Decimal("0"),
    fluctBoost: new Decimal("0"),
    estimated: new Decimal("0"),
    fluctBoostPower: new Decimal("0.2"),
    essBoostPower: new Decimal("2")
}
function alphaGain(){
    alpha.amt = Decimal.add(alpha.amt, alpha.gain)
    alpha.manti = (alpha.amt.m).toFixed(2)
    alpha.gainTemp = Decimal.times(alpha.gain,"10")
    alpha.gaine = (alpha.gainTemp.e)
    alpha.gainm = (alpha.gainTemp.m).toFixed(2)
    if ((alpha.amt.greaterThan("1e6")) == true){
        alphaAmtDisp.textContent = (alpha.manti.toString() + "e" + alpha.amt.e.toString())
        alphaGainDisp.textContent = (alpha.gainm.toString() + "e" + alpha.gaine.toString())
    } else {
        alphaAmtDisp.textContent = alpha.amt.toFixed(2)
        alphaGainDisp.textContent = Decimal.times(alpha.gain,"10").toFixed(2)
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
let isEntropyUnlocked = false
let isConcentrationUnlocked = false
const minFluctDisp = document.getElementById("minFluctDisp")
const maxFluctDisp = document.getElementById("maxFluctDisp")
const fluctDisp = document.getElementById("fluctDisp")
fluctDisp.style.display = "none"
const entropyDisp = document.getElementById("entropyDisp")
const entropyBoostDisp = document.getElementById("entropyBoostDisp")
entropyDisp.style.display = "none"
const fluctCurrDisp = document.getElementById("fluctCurrDisp")
const concDiv = document.getElementById("concentration")
concDiv.style.display = "none"
const concEssBoostDisp = document.getElementById("concEssBoostDisp")
const concFluctBoostDisp = document.getElementById("concFluctBoostDisp")
const aConcGainDisp = document.getElementById("aConcGainDisp")
const concButton = document.getElementById("concButton")
const aConcAmtDisp = document.getElementById("aConcAmtDisp")

function fluctuation(){
    
    if(isAUpgrade6Bought == true){
        fluct.max = Decimal.times(Decimal.pow("1.4", alpha.upgradesBought),"2").toFixed(2)
        fluct.min = Decimal.pow("1.2", alpha.upgradesBought).toFixed(2)
        fluct.current = Decimal.add(Decimal.times(Decimal.sub(fluct.max, fluct.min),Math.random()), fluct.min).toFixed(2)
    } else {
        fluct.current = Decimal.add(Decimal.times( Decimal.sub(fluct.max, fluct.min),Math.random() ), fluct.min).toFixed(2)
    }
    if(isConcentrationUnlocked == true){
        fluct.min = Decimal.times(fluct.min, conc.fluctBoost)
        fluct.max = Decimal.times(fluct.max, conc.fluctBoost)
    }
    //(((макс - мин) * рандом) + мин)
    //9-2)* 0.5)+2
    
    fluctCurrDisp.textContent = fluct.current
    minFluctDisp.textContent = fluct.min
    maxFluctDisp.textContent = fluct.max
}
//начало генерации
aUpgrade1.addEventListener("click", ()=>{
    if(isAUpgrade1Bought == false){
        aUpgrade1.style.backgroundColor = "green"
        isAUpgrade1Bought = true
        alpha.upgradesBought = Decimal.add(alpha.upgradesBought, "1")
    }
})
//удвоение 1
aUpgrade2.addEventListener("click",()=>{
    if(alpha.amt.greaterThanOrEqualTo("15") == true & isAUpgrade2Bought == false){
        alpha.amt = Decimal.sub(alpha.amt, "15")
        isAUpgrade2Bought = true
        aUpgrade2.style.backgroundColor = "green"
        alpha.upgradesBought = Decimal.add(alpha.upgradesBought, "1")
    }
})
//удвоение 2
aUpgrade3.addEventListener("click",()=>{
    if(alpha.amt.greaterThanOrEqualTo("42") == true & isAUpgrade3Bought == false){
        alpha.amt = Decimal.sub(alpha.amt, "42")
        isAUpgrade3Bought = true
        aUpgrade3.style.backgroundColor = "green"
        alpha.upgradesBought = Decimal.add(alpha.upgradesBought, "1")
    }
})
//апгрейд анлок и флуктуация
aUpgrade4.addEventListener("click", ()=>{
    if(alpha.amt.greaterThanOrEqualTo("100") == true & isAUpgrade4Bought == false){
        aUpgrade5.style.display = "block"
        aUpgrade6.style.display = "block"
        aUpgrade7.style.display = "block"
        aUpgrade4.style.backgroundColor = "green"
        fluctDisp.style.display = "block"
        fluct.min = "1"
        fluct.max = "2"
        isAUpgrade4Bought = true
        fluctFunct = setInterval(fluctuation, 3000)
        alpha.amt = Decimal.sub(alpha.amt, "100")
        alpha.upgradesBought = Decimal.add(alpha.upgradesBought, "1")
    }
})
//энтропия
aUpgrade5.addEventListener("click", ()=>{
    if(alpha.amt.greaterThanOrEqualTo("237") == true & isAUpgrade5Bought == false){
        isAUpgrade5Bought = true
        isEntropyUnlocked = true
        aUpgrade5.style.backgroundColor = "green"
        alpha.amt = Decimal.sub(alpha.amt,"237")
        entropyDisp.style.display = "block"
        alpha.upgradesBought = Decimal.add(alpha.upgradesBought, "1")
    }
})
//открытие остальных аспектов и буст флуктуации
aUpgrade6.addEventListener("click", ()=>{
    if(alpha.amt.greaterThanOrEqualTo("2000") == true & isAUpgrade6Bought == false){
        isAUpgrade6Bought = true
        aUpgrade6.style.backgroundColor = "green"
        alpha.amt = Decimal.sub(alpha.amt, "2000")
        aUpgrade8.style.display = "block"
        alpha.upgradesBought = Decimal.add(alpha.upgradesBought, "1")
    }
})
//буст второго апгрейда
aUpgrade7.addEventListener("click", ()=>{
    if(alpha.amt.greaterThanOrEqualTo("10000") == true & isAUpgrade7Bought == false){
        isAUpgrade7Bought = true
        aUpgrade7.style.backgroundColor = "green"
        alpha.amt = Decimal.sub(alpha.amt, "10000")
        alpha.upgradesBought = Decimal.add(alpha.upgradesBought, "1")
    }
})
//анлок концентрата
aUpgrade8.addEventListener("click", ()=>{
    if(alpha.amt.greaterThanOrEqualTo("1e5") == true & isAUpgrade8Bought == false){
        isAUpgrade8Bought = true
        isConcentrationUnlocked = true
        concDiv.style.display = "block"
        aUpgrade8.style.backgroundColor = "green"
        alpha.amt = Decimal.sub(alpha.amt, "1e5")
    }
})
function gainCalc(){
    alpha.gain = "0"
    alpha.base = "0"
    alpha.gainBase = "0"
    
    if(isAUpgrade1Bought == true){
        alpha.base = Decimal.add(alpha.base, "0.1")
        alpha.gain = alpha.base
        alpha.gainBase = alpha.base
    }
    if(isAUpgrade2Bought == true){
        alpha.base = Decimal.times(alpha.base, "2")
        alpha.gain = alpha.base
        alpha.gainBase = alpha.base
    }
    if(isAUpgrade3Bought == true){
        alpha.gainBase = Decimal.times(alpha.base,"2")
        alpha.gain = alpha.gainBase
        
    }
    if(isAUpgrade4Bought == true){
        alpha.gain = Decimal.times(alpha.gainBase, fluct.current)
    }
    if(isAUpgrade5Bought == true || isEntropyUnlocked == true){
        alpha.entropy = Decimal.div(Decimal.round(Decimal.times(Decimal.pow("1.42", Decimal.div(Decimal.round(Decimal.times(Decimal.log10(alpha.amt),"100")),"100")),"100")),"100")
        alpha.gain = Decimal.times(alpha.gain, alpha.entropy)
        entropyBoostDisp.textContent = alpha.entropy
    }
    if(isAUpgrade7Bought == true){
        alpha.gain = Decimal.times(alpha.gain,"10")
    }
    if(isConcentrationUnlocked == true & conc.amt.greaterThanOrEqualTo("1")){
        alpha.gain = Decimal.times(alpha.gain, conc.essBoost)
    }
}

a2 = setInterval(gainCalc, 100);
function concentration(){
    if(conc.estimated.greaterThanOrEqualTo("1") == true){
        conc.amt = Decimal.add(conc.amt, conc.estimated)
        conc.essBoost = Decimal.times(conc.essBoostPower, conc.amt)
        conc.fluctBoost = Decimal.add(Decimal.times(conc.fluctBoostPower, conc.amt))
        concEssBoostDisp.textContent = conc.essBoost
        concFluctBoostDisp.textContent = conc.fluctBoost
        aConcAmtDisp.textContent = conc.amt
        concReset()
    }
}
concButton.addEventListener("click", concentration())
function concReset(){
    alpha.amt = "0"
    alpha.upgradesBought = "0"
    isAUpgrade1Bought = false
    isAUpgrade2Bought = false
    isAUpgrade3Bought = false
    isAUpgrade4Bought = false
    isAUpgrade5Bought = false
    isAUpgrade6Bought = false
    isAUpgrade7Bought = false
    isAUpgrade8Bought = false
    aUpgrade5.style.display = "none"
    aUpgrade6.style.display = "none"
    aUpgrade7.style.display = "none"
    aUpgrade8.style.display = "none"
    isEntropyUnlocked = false
    fluctDisp.style.display = "none"
    entropyDisp.style.display = "none"
    aUpgrade1.style.backgroundColor = "white"
    aUpgrade2.style.backgroundColor = "white"
    aUpgrade3.style.backgroundColor = "white"
    aUpgrade4.style.backgroundColor = "white"
    aUpgrade5.style.backgroundColor = "white"
    aUpgrade6.style.backgroundColor = "white"
    aUpgrade7.style.backgroundColor = "white"
    aUpgrade8.style.backgroundColor = "white"
}
a3 = setInterval(()=>{
        if(isConcentrationUnlocked == true){
            concDiv.style.display = "block"
            conc.estimated = Decimal.div(Decimal.log10(alpha.amt),"5")
            aConcGainDisp.textContent = (conc.estimated).toFixed(2)
        } 
},100)