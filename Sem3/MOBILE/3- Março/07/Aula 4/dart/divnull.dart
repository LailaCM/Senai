main(){
    int? result = null;
    print (result);
}

divisao (int a, int b){
    if (b == 0) {
        print("Não é possível dividir por 0");
        return null;
    };

    return a ~/ b;
}