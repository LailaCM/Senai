#include <stdio.h>
#include<locale.h>

int main() {
	
	setlocale(LC_ALL,"");
	
    float distancia, tempo, velocidade;
	
	printf("Quer saber qual foi a velocidade m�dia do seu veiculo durante a viagem? Vamos nessa!\n");
    printf("Digite a dist�ncia entre as cidades(km):\n");
    scanf("%f", &distancia);
    printf("Digite o tempo de viagem(h):\n");
    scanf("%f", &tempo);

    velocidade = distancia / tempo;
    printf("A velocidade m�dia do ve�culo durante a viagem foi de %.2f km/h\n", velocidade);

    return 0;
}
