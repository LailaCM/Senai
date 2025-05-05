#include <stdio.h>
#include <math.h>
#include<locale.h>

int main() {
	
	setlocale(LC_ALL,"");
	
    float n, raio, altura, area, volume, PI;
    
    PI = 3,14;

    printf("Digite o valor do raio(cm):\n ");
    scanf("%f", &raio);
    printf("Digite o valor da altura(cm):\n ");
    scanf("%f", &altura);

    area = 2 * PI * raio * altura; 
    n =  2 * PI * (raio * raio);
    area = area + n;
    volume = PI * pow(raio, 2) * altura;

    printf("A área do cilindro é aproximadamente %.2f cm2\n", area);
    printf("O volume do cilindro é aproximadamente %.2f cm3\n", volume);

    return 0;
}
