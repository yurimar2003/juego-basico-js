function opcion(push) {
    //console.log(push);

    var resultado_texto = ["Ganas", "Pierdes", "Empatas"];
    var nombre = ["Roca", "Papel", "Tijera", "Rata", "Spock"];
    //console.log (nombre[push]);

    var jugada = [
        [2, 0, 1, 1, 0],
        [1, 2, 0, 0, 1],
        [0, 1, 2, 1, 0],
        [0, 1, 0, 2, 1],
        [1, 0, 1, 0, 2]
    ];

    var desc_jugada = [
        ['Iguales', 'Papel cubre roca', 'Roca tritura a tijera', 'Roca tritura rata', 'Spock vaporiza a roca'],
        ['Papel cubre roca', 'Iguales', 'Tijera corta papel', 'Rata come papel', 'Papel desaprueba spock'],
        ['Roca tritura a tijera', 'Tijera corta papel', 'Iguales', 'Tijera decapita a rata', 'Spock aplasta tijera'],
        ['Roca tritura rata', 'Rata come papel', 'Tijera decapita a rata', 'Iguales', 'Rata envenena spock'],
        ['Spock vaporiza a roca', 'Papel desaprueba spock', 'Spock aplasta tijera', 'Rata envenena spock', 'Iguales']
    ];

    var cpu = Math.floor((Math.random() * 5));
    //console.log(cpu);

    var resultado = jugada[cpu][push];

/*     console.log("Humano: " + nombre[push]);
    console.log("CPU: " + nombre[cpu]);
    console.log(desc_jugada[cpu][push]);
    console.log(resultado_texto[resultado]); */


    var mensaje1;
    var mensaje2;
    var mensaje3;
    var mensaje4;

    mensaje1 = new SpeechSynthesisUtterance("Humano: " + nombre[push]);
    mensaje2 = new SpeechSynthesisUtterance("CPU: " + nombre[cpu]);
    mensaje3 = new SpeechSynthesisUtterance(desc_jugada[cpu][push]);
    mensaje4 = new SpeechSynthesisUtterance(resultado_texto[resultado]);

    window.speechSynthesis.speak(mensaje1);
    window.speechSynthesis.speak(mensaje2);
    window.speechSynthesis.speak(mensaje3);
    window.speechSynthesis.speak(mensaje4);
    //console.log(resultado);

    document.getElementById("mensaje1").innerHTML = resultado_texto[resultado];
    document.getElementById("mensaje2").innerHTML = "Humano: " + nombre[push];
    document.getElementById("mensaje3").innerHTML = "CPU: " + nombre[cpu];
    document.getElementById("mensaje4").innerHTML = desc_jugada[cpu][push];

};

/* document.write("hola"); */
/* document.write(window.alert("Jugar de nuevo")); */



