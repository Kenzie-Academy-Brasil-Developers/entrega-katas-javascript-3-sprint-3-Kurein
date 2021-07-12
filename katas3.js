const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults (valor) {
    const main = document.getElementsByTagName("main")[0]
    main.appendChild(valor)
}

function kata1() {
    
    const nome1 = document.createElement("div")
    nome1.innerText = "Katas 1 " 

    let array1 = []

    for (i1 = 1; i1 <=25; i1++) {
        array1.push(i1)
    }
    
    const p1 = document.createElement("p")
    p1.innerText = array1

    nome1.appendChild(p1)

    showResults(nome1)

    return array1
}

function kata2() {

    const nome2 = document.createElement("div")
    nome2.innerText = "Katas 2 " 

    let array2 = []

    for (i2 = 25; i2 >= 1; i2--) {
        array2.push(i2)
    }
    
    const p2 = document.createElement("p")
    p2.innerText = array2

    nome2.appendChild(p2)

    showResults(nome2)

    return array2
}

function kata3() {

    const nome3 = document.createElement("div")
    nome3.innerText = "Katas 3 " 

    let array3 = []

    for (i3 = -1; i3 >= -25; i3--) {
        array3.push(i3)
    }

    const p3 = document.createElement("p")
    p3.innerText = array3

    nome3.appendChild(p3)

    showResults(nome3)

    return array3
}

function kata4() {

    const nome4 = document.createElement("div")
    nome4.innerText = "Katas 4 " 

    let array4 = []

    for (i4 = -25; i4 <= -1; i4++) {
        array4.push(i4)
    }

    const p4 = document.createElement("p")
    p4.innerText = array4

    nome4.appendChild(p4)

    showResults(nome4)

    return array4
}

function kata5() {
    
    const nome5 = document.createElement("div")
    nome5.innerText = "Katas 5 " 

    let array5 = []

    for (i5 = 25; i5 >= -25; i5--) {
        if (i5%2 !== 0) {
            array5.push(i5)
        }
    }

    const p5 = document.createElement("p")
    p5.innerText = array5

    nome5.appendChild(p5)

    showResults(nome5)

    return array5
}

function kata6() {
    
    const nome6 = document.createElement("div")
    nome6.innerText = "Katas 6 " 

    let array6 = []

    for (i6 = 0; i6 <=100; i6++) {
        if (i6%3 ===0) {
            array6.push(i6)
        }
    }

    const p6 = document.createElement("p")
    p6.innerText = array6

    nome6.appendChild(p6)

    showResults(nome6)

    return array6
}

function kata7() {
    
    const nome7 = document.createElement("div")
    nome7.innerText = "Katas 7 " 

    let array7 = []

    for (i7 = 0; i7 <=100; i7++) {
        if (i7%7 ===0) {
            array7.push(i7)
        }
    }

    const p7 = document.createElement("p")
    p7.innerText = array7

    nome7.appendChild(p7)

    showResults(nome7)

    return array7
}

function kata8() {
    
    const nome8 = document.createElement("div")
    nome8.innerText = "Katas 8 " 

    let array8 = []

    for (i8 = 100; i8 >=0; i8--) {
        if (i8%7 === 0 || i8%3 === 0) {
            array8.push(i8)
        }
    }

    const p8 = document.createElement("p")
    p8.innerText = array8

    nome8.appendChild(p8)

    showResults(nome8)

    return array8
}

function kata9() {
    
    const nome9 = document.createElement("div")
    nome9.innerText = "Katas 9 " 

    let array9 = []

    for (i9 = 5; i9 <=100; i9+=5) {
        if (i9%2 !== 0) {
            array9.push(i9)
        }
    }

    const p9 = document.createElement("p")
    p9.innerText = array9

    nome9.appendChild(p9)

    showResults(nome9)

    return array9
}

function kata10() {
    
    const nome10 = document.createElement("div")
    nome10.innerText = "Katas 10 " 

    let array10 = []

    for (i10 = 0; i10 <=sampleArray.length -1; i10++) {
        array10.push(sampleArray[i10])
    }

    const p10 = document.createElement("p")
    p10.innerText = array10

    nome10.appendChild(p10)

    showResults(nome10)

    return array10
}

function kata11() {
    
    const nome11 = document.createElement("div")
    nome11.innerText = "Katas 11 " 

    let array11 = []

    for (i11 = 0; i11 <=sampleArray.length -1; i11++) {
        if (sampleArray[i11]%2 ===0) {
            array11.push(sampleArray[i11])
        }
    }

    const p11 = document.createElement("p")
    p11.innerText = array11

    nome11.appendChild(p11)

    showResults(nome11)

    return array11
}

function kata12() {
    
    const nome12 = document.createElement("div")
    nome12.innerText = "Katas 12 " 

    let array12 = []

    for (i12 = 0; i12 <=sampleArray.length -1; i12++) {
        if (sampleArray[i12]%2 !==0) {
            array12.push(sampleArray[i12])
        }
    }

    const p12 = document.createElement("p")
    p12.innerText = array12

    nome12.appendChild(p12)

    showResults(nome12)

    return array12
}

function kata13() {
    
    const nome13 = document.createElement("div")
    nome13.innerText = "Katas 13" 

    let array13 = []

    for (i13 = 0; i13 <=sampleArray.length -1; i13++) {
        if (sampleArray[i13]%8 === 0) {
            array13.push(sampleArray[i13])
        }
    }
        

    const p13 = document.createElement("p")
    p13.innerText = array13

    nome13.appendChild(p13)

    showResults(nome13)

    return array13
}

function kata14() {
    
    const nome14 = document.createElement("div")
    nome14.innerText = "Katas 14" 

    let array14 = []

    for (i14 = 0; i14 <=sampleArray.length -1; i14++) {
        array14.push(sampleArray[i14]**2)
    }
        

    const p14 = document.createElement("p")
    p14.innerText = array14

    nome14.appendChild(p14)

    showResults(nome14)

    return array14
}

function kata15() {
    
    const nome15 = document.createElement("div")
    nome15.innerText = "Katas 15" 

    let soma15 = 0

    for (i15=1; i15<=20; i15++) {
        soma15 += i15
    }
        
    const p15 = document.createElement("p")
    p15.innerText = soma15

    nome15.appendChild(p15)

    showResults(nome15)

    return soma15
}

function kata16() {
    
    const nome16 = document.createElement("div")
    nome16.innerText = "Katas 16" 

    let soma16 = 0

    for (i16=0; i16 <=sampleArray.length -1; i16++) {
        soma16 += sampleArray[i16]
    }
        
    const p16 = document.createElement("p")
    p16.innerText = soma16

    nome16.appendChild(p16)

    showResults(nome16)

    return soma16
}

function kata17() {
    
    const nome17 = document.createElement("div")
    nome17.innerText = "Katas 17" 

    let numero17 = sampleArray[0]

   for (i17=1; i17 <=sampleArray.length -1; i17++) {
    if (numero17 > sampleArray[i17]) {
        numero17 = sampleArray[i17]
    }
   }
        
    const p17 = document.createElement("p")
    p17.innerText = numero17

    nome17.appendChild(p17)

    showResults(nome17)

    return numero17
}

function kata18() {
    
    const nome18 = document.createElement("div")
    nome18.innerText = "Katas 18" 

    let numero18 = sampleArray[0]

   for (i18=1; i18 <=sampleArray.length -1; i18++) {
    if (numero18 < sampleArray[i18]) {
        numero18 = sampleArray[i18]
    }
   }
        
    const p18 = document.createElement("p")
    p18.innerText = numero18

    nome18.appendChild(p18)

    showResults(nome18)

    return numero18
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
