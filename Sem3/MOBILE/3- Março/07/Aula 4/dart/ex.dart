main(){
    String produto = 'Parafusos';
    int quantidade = 100;
    double preco = 0.29;
    dynamic total = quantidade * preco;
    print(
        'Temos em estoque ${quantidade} de ${produto}  por ${preco}. Totalizando ${total}'; 
    );
}