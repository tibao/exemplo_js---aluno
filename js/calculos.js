document.getElementById("calcular").addEventListener("click", function () {
    const nome = document.getElementById("txtnome").value;
    const idade = parseInt(document.getElementById("txtidade").value);
    const salarioBruto = parseFloat(document.getElementById("txtsalario").value);
    const dependentes = parseInt(document.getElementById("txtdependentes").value);

    // Cálculo do INSS (exemplo: 8%)
    const inss = salarioBruto * 0.08;

    // Cálculo do vale transporte (exemplo: 5%)
    const valeTransporte = salarioBruto * 0.05;

    // Cálculo do salário líquido
    const salarioLiquido = salarioBruto - inss - valeTransporte;

    // Exibir resultados nas divs da página
    document.getElementById("alert_nome").innerText = `Nome: ${nome}`;
    document.getElementById("alert_dependentes").innerText = `Número de dependentes: ${dependentes}`;
    document.getElementById("alert_salario").innerText = `Salário bruto: R$ ${salarioBruto.toFixed(2)}`;
    document.getElementById("alert_inss").innerText = `INSS: R$ ${inss.toFixed(2)}`;
    document.getElementById("alert_transporte").innerText = `Vale transporte: R$ ${valeTransporte.toFixed(2)}`;
    document.getElementById("alert_liquido").innerText = `Salário líquido: R$ ${salarioLiquido.toFixed(2)}`;
});
