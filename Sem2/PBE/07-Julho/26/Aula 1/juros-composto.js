v = parseFloat(prompt("Digite o valor inicial:"));
i = parseFloat(prompt("Digite a taxa de juros:"));
t = parseFloat(prompt("Digite o número de meses:"));

i = i/100
x = 1 + i
y = Math.pow(x, t)
x = v * y
    console.log (x);