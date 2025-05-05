#include <stdio.h>
#include<locale.h>

int main() {
	
	setlocale(LC_ALL,"");
	
    int num_numeros, i, maior, menor;
    int numero;
    
    printf("Quer saber qual numéro é maior e qual é menor?Vamos nessa!\n");
    printf("Qual é a quantidade de números que deseja comparar?\n");
    scanf("%d", &num_numeros);

    printf("Digite o %dº número: ", 1);
    scanf("%d", &maior);

    menor = maior;

    for(i = 2; i <= num_numeros; i++) {
        printf("Digite o %dº número: ", i);
        scanf("%d", &numero);

        if(numero > maior) {
            maior = numero;
        }

        if(numero < menor) {
            menor = numero;
        }
    }

    printf("O maior número informado foi: %d\n", maior);
    printf("O menor número informado foi: %d\n", menor);

    return 0;
}
