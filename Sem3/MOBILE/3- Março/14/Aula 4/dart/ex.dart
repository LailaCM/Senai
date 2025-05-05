class Funcionario{
  //Atributos
  int id = 0;
  String nome = '';
  double salario = 0.0;
  int? dependentes;

//Métodos
String toString(){
  return "Funcionário (id: $id, nome: $nome, salario: $salario, dependentes: $dependentes, Salario Familia: $salFamilia)";
  }

double salFamilia() {
    if (salario < 2000 && dependentes != null) {
      return dependentes! * 60;
    }
    return 0.0;
  }
}



void main(){
  //Criando um novo funcionário
  Funcionario f1 = new Funcionario();
  f1.id = 1;
  f1.nome = "João";
  f1.salario = 1000.0;
  print(f1.toString());
}