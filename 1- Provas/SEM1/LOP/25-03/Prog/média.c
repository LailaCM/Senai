#include<stdio.h>
#include<locale.h>

int main(){
	
	setlocale(LC_ALL,"");
    	
    int x, y, z, n;
    
    printf("Precisa descobrir a m�dia de tr�s n�meros? Ent�o vem comigo!\n");
    printf("Digite separadamente os tr�s n�meros que deseja descobrir a m�dia\n");
    scanf("%d %d %d",&x, &y, &z);
    
    n= x + y + z;
    n=n/3;
    
    printf("A m�dia dos numeros que voce informou � %d", n);
    
    return 0;
}
