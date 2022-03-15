let fase1 = document.querySelector(".fase1")
let fase2 = document.querySelector(".fase2")
let faseFinal = document.querySelector(".faseFinal")

function transferPag(atualPag, nextPag){
    let dNone
    let dBlock
    if (atualPag == 1){
        dNone = fase1
    }
    else if (atualPag == 2) {
        dNone = fase2
    }
    else{
        dNone = faseFinal
    }
    dNone.style.display = 'none'
    if (nextPag == 1){
        dBlock = fase1
    }
    else if (nextPag == 2) {
        dBlock = fase2
    }
    else{
        dBlock = faseFinal
    }
    dBlock.style.display = 'block'
}

function permicao(){
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')

    if (!peso.value && !altura.value){
        peso.style.border = '1px solid red'
        altura.style.border = '1px solid red'

    }
    else if (!peso.value){
        peso.style.border = '1px solid red'
        altura.style.border = 'none'
    }
    else if(!altura.value){
        peso.style.border = 'none'
        altura.style.border = '1px solid red'
    }
    else{
        let imc = peso.value / (altura.value * altura.value) 
        const resultado = document.getElementById('resultado')
        console.log(imc)

        if (imc < 18.5 ){
            console.log("Magreza / Obesidade:0")
            resultado.innerHTML = "Magreza / obesidade:0"
            resultado.style.color = 'yellow'
        }
        else if (imc >= 18.5 && imc < 25 ){
            console.log("Normal / Obesidade:0")
            resultado.innerHTML = "Normal / obesidade:0"
            resultado.style.color = 'green'
        }
        else if (imc >= 25 && imc < 30 ){
            console.log("Sobrepeso / Obesidade:1")
            resultado = "Sobrepeso / obesidade:1"
            resultado.style.color = 'yellow'
        }
        else if (imc >= 30 && imc < 40 ){
            console.log("Obeso / Obesidade:2")
            resultado.innerHTML = "Obeso / obesidade:2"
            resultado.style.color = 'orange'
        }
        else if (imc > 40 ){
            console.log(" Obesidade Grave/ Obesidade:3")
            resultado.innerHTML = "Obesidade grave / obesidade:3"
            resultado.style.color = 'green'
        }
        transferPag(2,3)
    }
    
}
