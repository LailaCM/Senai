void main() {
    List<int> numeros = [1, 8, 3, 2, 5];
    numeros.sort((a, b) => b.compareTo(a));
    print(numeros); 
}