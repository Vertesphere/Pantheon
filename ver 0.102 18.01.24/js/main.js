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
    gain: new Decimal("100"),
    manti: 1
}
function alphaGain(){
    alpha.amt = Decimal.add(alpha.amt, alpha.gain)
    alpha.manti = Math.round(Number(alpha.amt.m)*100)/100
    if ((alpha.amt.greaterThan(1000000)) == true){
        alphaAmtDisp.textContent = (alpha.manti.toString() + "e" + alpha.amt.e.toString())
    } else {
        alphaAmtDisp.textContent = Math.round(Number(alpha.amt))
    }
    
}
a1 = setInterval(alphaGain, 1)


alphaGainDisp.textContent = Number(alpha.gain)
