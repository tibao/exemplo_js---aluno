$("#calcular").click(function () {
    var valor = parseFloat($("#valor").val());
    var desconto = parseFloat($("#txtdesconto").val());
    var multa = parseFloat($("#txtmulta").val());

    if (isNaN(valor) || isNaN(desconto) || isNaN(multa)) {
        alert("Por favor, preencha todos os campos com números válidos.");
        return;
    }

    var final = parseFloat((valor * (1 - desconto / 100) + multa).toFixed(2));
    var moeda = final.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    });

    $("#txtresultado")
        .text("Valor final: " + moeda)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': 'green' })
        .fadeIn(1000);

    if (final > 5) {
        alert("Valor final maior que 5");
        $("#txtresultado").css('color', 'red');
    } else {
        $("#txtresultado").css('color', 'green');
        alert("Valor final menor que 5");
    }

    // if ternário
    var mostrar = (final > 5) ? 'acima da média' : 'abaixo da média';
    alert("O valor final é " + mostrar);

    // switch case
    switch (true) {
        case (final > 10):
            alert("Valor final maior que 10");
            break;
        case (final > 5):
            alert("Valor final maior que 5");
            break;
        default:
            alert("Valor final menor ou igual a 5");
    }

    switch (parseInt(final) % 2) {
        case 0:
            alert("Valor final é par");
            break;
        case 1:
            alert("Valor final é ímpar");
            break;
        default:
            alert("Valor final não é um número");
    }

    // CORRIGIDO: uso de $("#txtmsg") e variável 'mostrar'
    $("#txtmsg")
        .text("O valor é " + mostrar)
        .css({ 'font-weight': 'bold', 'font-size': '14pt', 'color': 'green' });

    // Fatorial
    var fatorial = 1;
    for (var i = 1; i <= Math.floor(final); i++) {
        fatorial *= i;
    }

    $("#txtfatorial")
        .text("Fatorial de " + Math.floor(final) + " é: " + fatorial)
        .css({ 'font-weight': 'bold', 'font-size': '14pt', 'color': '#0000FF' });
});
