#include <stdio.h>
#include<locale.h>

int main() {
	
	setlocale(LC_ALL,"");
	
    int num_numeros, i;
    float numero, media, soma;

    printf("Digite a quantidade de n�meros que deseja calcular a m�dia: \n");
    scanf("%d", &num_numeros);

    soma = 0;
    for(i = 0; i < num_numeros; i++) {
        printf("Digite o %d� n�mero: ", i + 1);
        scanf("%f", &numero);
        soma += numero;
    }

    media = soma / num_numeros;
    printf("A m�dia dos n�meros informados �: %.2f\n", media);

    return 0;
}
