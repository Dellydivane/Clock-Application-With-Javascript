setInterval(setClock,1000)
const saatcizgi =document.querySelector('[data-saat-cizgi]')
const dakikacizgi =document.querySelector('[data-dakika-cizgi]')
const saniyecizgi =document.querySelector('[data-saniye-cizgi]')

function setClock () {
    const currentDate = new Date ()
    const secondRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minuteRatio + currentDate.getHours()) / 12
    
    setRotation(saniyecizgi,secondRatio)
    setRotation(dakikacizgi,minuteRatio)
    setRotation(saatcizgi,hoursRatio)
}

function setRotation(element,rotationRatio) {
    element.style.setProperty('--rotation',rotationRatio * 360)
}

setClock()