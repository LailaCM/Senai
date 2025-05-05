#include <stdio.h>
#include<locale.h>

int main() {
	
	setlocale(LC_ALL,"");
	
    float distancia, tempo, velocidade;
	
	printf("Quer saber qual foi a velocidade média do seu veiculo durante a viagem? Vamos nessa!\n");
    printf("Digite a distância entre as cidades(km):\n");
    scanf("%f", &distancia);
    printf("Digite o tempo de viagem(h):\n");
    scanf("%f", &tempo);

    velocidade = distancia / tempo;
    printf("A velocidade média do veículo durante a viagem foi de %.2f km/h\n", velocidade);

    return 0;
}
