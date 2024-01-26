const body = document.body
body.style.backgroundColor = "black"

const aspectSelector = document.getElementById("aspectSelection")
const alphaAspectSelect = document.getElementById("alphaAspectSelect")
alphaAspectSelect.style.display = "block"
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
const aspectPlaceh = document.getElementById("aspectPlaceh")


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
    aspectSelector.style.display = "grid"
    backToSelButton.style.display = "none"
})

var alpha = {
    amt: new Decimal("3e5"),
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
    sciNota(alphaAmtDisp, alpha.amt)
    sciNota(alphaGainDisp, Decimal.times(alpha.gain,"10"))
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
const aUpgrade10 = document.getElementById("aUpgrade10")
const aUpgrade11 = document.getElementById("aUpgrade11")
const aUpgrade12 = document.getElementById("aUpgrade12")
const aUpgrade13 = document.getElementById("aUpgrade13")
const aUpgrade14 = document.getElementById("aUpgrade14")
const aUpgrade15 = document.getElementById("aUpgrade15")
const aUpgrade16 = document.getElementById("aUpgrade16")

aUpgrade2.style.display = "none"
aUpgrade3.style.display = "none"
aUpgrade4.style.display = "none"
aUpgrade5.style.display = "none"
aUpgrade6.style.display = "none"
aUpgrade7.style.display = "none"
aUpgrade8.style.display = "none"
aUpgrade9.style.display = "none"
aUpgrade10.style.display = "none"
aUpgrade11.style.display = "none"
aUpgrade12.style.display = "none"
aUpgrade13.style.display = "none"
aUpgrade14.style.display = "none"
aUpgrade15.style.display = "none"
aUpgrade16.style.display = "none"

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
const fluctCurrDisp = document.getElementById("fluctCurrDisp")

const entropyDisp = document.getElementById("entropyDisp")
const entropyBoostDisp = document.getElementById("entropyBoostDisp")
entropyDisp.style.display = "none"

const concDiv = document.getElementById("concentration")
concDiv.style.display = "none"

const concEssBoostDisp = document.getElementById("concEssBoostDisp")
const concFluctBoostDisp = document.getElementById("concFluctBoostDisp")
const aConcGainDisp = document.getElementById("aConcGainDisp")
const concButton = document.getElementById("concButton")
const aConcAmtDisp = document.getElementById("aConcAmtDisp")
//флуктуация
function fluctuation(){
    fluct.current = "0"
    fluct.current = Decimal.add(Decimal.times(Decimal.sub(fluct.max, fluct.min),Math.random()), fluct.min)
    sciNota(minFluctDisp, fluct.min)
    sciNota(maxFluctDisp, fluct.max)
    sciNotaWithX(fluctCurrDisp, fluct.current)
}
//апгрейд 1
function buyAUpgrade1(){
    if(isAUpgrade1Bought == false){
        isAUpgrade1Bought = true
        alpha.upgradesBought = Decimal.add(alpha.upgradesBought, "1")
        aUpgrade1.style.backgroundColor = "rgb(93, 228, 89)"
        aUpgrade1.style.borderColor = "green"
        aUpgrade2.style.display = "block"
        
    }
}
aUpgrade1.addEventListener("click", buyAUpgrade1)
//апгрейд 2
function buyAUpgrade2(){
    if(alpha.amt.greaterThanOrEqualTo("15") == true & isAUpgrade2Bought == false){
        isAUpgrade2Bought = true
        alpha.upgradesBought = Decimal.add(alpha.upgradesBought, "1")
        alpha.amt = Decimal.sub(alpha.amt, "15")
        aUpgrade2.style.backgroundColor = "rgb(93, 228, 89)"
        aUpgrade2.style.borderColor = "green"
        aUpgrade3.style.display = "block"     
    }
}
aUpgrade2.addEventListener("click", buyAUpgrade2)


//апгрейд3
function buyAUpgrade3(){
    if(alpha.amt.greaterThanOrEqualTo("42") == true & isAUpgrade3Bought == false){
        isAUpgrade3Bought = true
        alpha.upgradesBought = Decimal.add(alpha.upgradesBought, "1")
        alpha.amt = Decimal.sub(alpha.amt, "42")
        aUpgrade3.style.backgroundColor = "rgb(93, 228, 89)"
        aUpgrade3.style.borderColor = "green"
        aUpgrade4.style.display = "block"
    }
}
aUpgrade3.addEventListener("click", buyAUpgrade3)


//апгрейд 4
function buyAUpgrade4(){
    if(alpha.amt.greaterThanOrEqualTo("100") == true & isAUpgrade4Bought == false){
        isAUpgrade4Bought = true
        alpha.upgradesBought = Decimal.add(alpha.upgradesBought, "1")
        alpha.amt = Decimal.sub(alpha.amt, "100")
        aUpgrade4.style.backgroundColor = "rgb(93, 228, 89)"
        aUpgrade4.style.borderColor = "green"
        aUpgrade5.style.display = "block"
        fluctDisp.style.display = "block"
        setInterval(fluctuation, 3000)
        setTimeout(()=>{
            fluct.current = Decimal.add(Decimal.times(Decimal.sub(fluct.max, fluct.min),Math.random()), fluct.min)
            sciNotaWithX(fluctCurrDisp, fluct.current)
        },100)
    }
}
aUpgrade4.addEventListener("click", buyAUpgrade4)


//апгрейд 5
function buyAUpgrade5(){
    if(alpha.amt.greaterThanOrEqualTo("237") == true & isAUpgrade5Bought == false){
        isAUpgrade5Bought = true
        alpha.upgradesBought = Decimal.add(alpha.upgradesBought, "1")
        alpha.amt = Decimal.sub(alpha.amt,"237")
        isEntropyUnlocked = true
        aUpgrade5.style.backgroundColor = "rgb(93, 228, 89)"
        aUpgrade5.style.borderColor = "green"
        aUpgrade6.style.display = "block"
        entropyDisp.style.display = "block"
    }
}
aUpgrade5.addEventListener("click", buyAUpgrade5)


//апгрейд 6
function buyAUpgrade6(){
    if(alpha.amt.greaterThanOrEqualTo("2000") == true & isAUpgrade6Bought == false){
        isAUpgrade6Bought = true
        alpha.upgradesBought = Decimal.add(alpha.upgradesBought, "1")
        alpha.amt = Decimal.sub(alpha.amt, "2000")
        aUpgrade6.style.backgroundColor = "rgb(93, 228, 89)"
        aUpgrade6.style.borderColor = "green"
        aUpgrade7.style.display = "block"
        setTimeout(()=>{
            fluct.current = Decimal.add(Decimal.times(Decimal.sub(fluct.max, fluct.min),Math.random()), fluct.min)
            sciNotaWithX(fluctCurrDisp, fluct.current)
        },100)
    }
}
aUpgrade6.addEventListener("click", buyAUpgrade6)


//апгрейд 7
function buyAUpgrade7(){
    if(alpha.amt.greaterThanOrEqualTo("10000") == true & isAUpgrade7Bought == false){
        isAUpgrade7Bought = true
        alpha.upgradesBought = Decimal.add(alpha.upgradesBought, "1")
        alpha.amt = Decimal.sub(alpha.amt, "10000")
        aUpgrade7.style.backgroundColor = "rgb(93, 228, 89)"
        aUpgrade7.style.borderColor = "green"
        aUpgrade8.style.display = "block"
    }
}
aUpgrade7.addEventListener("click", buyAUpgrade7)


//апгрейд 8
function buyAUpgrade8(){
    if(alpha.amt.greaterThanOrEqualTo("1e5") == true & isAUpgrade8Bought == false){
        isAUpgrade8Bought = true
        isConcentrationUnlocked = true
        alpha.upgradesBought = Decimal.add(alpha.upgradesBought, "1")
        alpha.amt = Decimal.sub(alpha.amt, "1e5")
        aUpgrade8.style.backgroundColor = "rgb(93, 228, 89)"
        aUpgrade8.style.borderColor = "green"
        concDiv.style.display = "block"
    }
}
aUpgrade8.addEventListener("click", buyAUpgrade8)


//вычисление получения аэсс
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
    if(isAUpgrade4Bought == true & isAUpgrade6Bought == false){
        fluct.min = Decimal.add("1","0")
        fluct.max = Decimal.add("2","0")
        sciNota(minFluctDisp, fluct.min)
        sciNota(maxFluctDisp, fluct.max)
        
    }
    if(isAUpgrade5Bought == true || isEntropyUnlocked == true){
        alpha.entropy = Decimal.div(Decimal.round(Decimal.times(Decimal.pow("1.42", Decimal.div(Decimal.round(Decimal.times(Decimal.log10(alpha.amt),"100")),"100")),"100")),"100")
        alpha.gain = Decimal.times(alpha.gain, alpha.entropy)
        sciNotaWithX(entropyBoostDisp, alpha.entropy)
    }
    if(isAUpgrade6Bought == true){
        fluct.max = Decimal.times(Decimal.pow("1.4", alpha.upgradesBought),"2")
        fluct.min = Decimal.pow("1.2", alpha.upgradesBought)
        if(isConcentrationUnlocked == false){
            sciNota(minFluctDisp, fluct.min)
            sciNota(maxFluctDisp, fluct.max)
        }
        alpha.gain = Decimal.times(alpha.gainBase, fluct.current)
    }
    if(isAUpgrade7Bought == true){
        alpha.gain = Decimal.times(alpha.gain,"10")
    }
    if(isConcentrationUnlocked == true & conc.amt.greaterThanOrEqualTo("1")){
        alpha.gain = Decimal.times(alpha.gain, conc.essBoost)
        fluct.min = Decimal.times(fluct.min, conc.fluctBoost)
        fluct.max = Decimal.times(fluct.max, conc.fluctBoost)
        sciNota(minFluctDisp, fluct.min)
        sciNota(maxFluctDisp, fluct.max)
    }
    
}
setInterval(gainCalc, 100);
function concentration(){
    if(conc.estimated.greaterThanOrEqualTo("1") == true){
        aUpgrade9.style.display = "block"
        conc.amt = Decimal.add(conc.amt, Decimal.floor(conc.estimated))
        conc.essBoost = Decimal.times(conc.essBoostPower, conc.amt)
        conc.fluctBoost = Decimal.add(Decimal.times(conc.fluctBoostPower, conc.amt),"1")
        sciNotaWithX(concEssBoostDisp, conc.essBoost)
        sciNotaWithX(concFluctBoostDisp, conc.fluctBoost)
        sciNota(aConcAmtDisp, conc.amt)
        setTimeout(() => {
            conc.estimated = "0"
        }, 100);
        concReset()
        
    }
}

concButton.addEventListener("click", concentration)
function concReset(){
    setTimeout(()=>{
        alpha.amt = "1"
        alpha.upgradesBought = "0"
        alpha.gaib = "0"
        fluct.current = "0"
        fluct.min = "0"
        fluct.max = "0"

    },100)
    isAUpgrade1Bought = false
    isAUpgrade2Bought = false
    isAUpgrade3Bought = false
    isAUpgrade4Bought = false
    isAUpgrade5Bought = false
    isAUpgrade6Bought = false
    isAUpgrade7Bought = false
    isAUpgrade8Bought = false
    
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
    aUpgrade1.style.borderColor = "black"
    aUpgrade2.style.borderColor = "black"
    aUpgrade3.style.borderColor = "black"
    aUpgrade4.style.borderColor = "black"
    aUpgrade5.style.borderColor = "black"
    aUpgrade6.style.borderColor = "black"
    aUpgrade7.style.borderColor = "black"
    aUpgrade8.style.borderColor = "black"
    clearInterval(fluctuation())
}

setInterval(()=>{
        if(isConcentrationUnlocked == true){
            concDiv.style.display = "block"
            conc.estimated = Decimal.floor(Decimal.div(Decimal.log10(alpha.amt),"5"))
            sciNota(aConcGainDisp, conc.estimated)
        } 
},100)
//******************функции для ски нотации */
function sciNota(reqDisp, reqValue){
    let value ={
        manti: 0,
        expo: 0
    }
    if(reqValue.greaterThan("1e6") == true){
       
        value.manti = reqValue.m.toFixed(2)
        value.expo = reqValue.e
        reqDisp.textContent = (value.manti.toString() + "e" + value.expo.toString())
    } else {
        reqDisp.textContent = reqValue.toFixed(2)
    }

}
function sciNotaWithX(reqDisp, reqValue){
    let value ={
        manti: 0,
        expo: 0
    }
    if(reqValue.greaterThan("1e6") == true){
       
        value.manti = reqValue.m.toFixed(2)
        value.expo = reqValue.e
        reqDisp.textContent = "X"+(value.manti.toString() + "e" + value.expo.toString())
    } else {
        reqDisp.textContent = "X"+reqValue.toFixed(2)
    }

}