main(){
    int result = divisao (10,0);
    print (result);
}

divisao (int a, int b){
    if (b == 0) {
        print("Não é possível dividir por 0");
        return 0;
    };

    return a ~/b;
}