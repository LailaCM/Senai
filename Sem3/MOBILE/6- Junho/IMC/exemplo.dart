import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(home: ImcPage()));
}

class ImcPage extends StatefulWidget {
  @override
  _ImcPageState createState() => _ImcPageState();
}

class _ImcPageState extends State<ImcPage> {
  final TextEditingController pesoController = TextEditingController();
  final TextEditingController alturaController = TextEditingController();

  void calcularIMC() {
    final double? peso = double.tryParse(pesoController.text);
    final double? altura = double.tryParse(alturaController.text);

    if (peso != null && altura != null && altura > 0) {
      double imc = peso / (altura * altura);
      String classificacao = "";

      if (imc < 18.5) {
        classificacao = "Abaixo do peso";
      } else if (imc < 25) {
        classificacao = "Peso normal";
      } else if (imc < 30) {
        classificacao = "Sobrepeso";
      } else if (imc < 35) {
        classificacao = "Obesidade Grau I";
      } else if (imc < 40) {
        classificacao = "Obesidade Grau II";
      } else {
        classificacao = "Obesidade Grave";
      }

      showDialog(
        context: context,
        builder:
            (_) => AlertDialog(
              title: Text('Resultado do IMC'),
              content: Text(
                'Seu IMC é ${imc.toStringAsFixed(2)}\nClassificação: $classificacao',
              ),
              actions: [
                TextButton(
                  onPressed: () => Navigator.pop(context),
                  child: Text('OK'),
                ),
              ],
            ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blueGrey[50],
      appBar: AppBar(
        backgroundColor: Colors.blueGrey[800],
        title: Text('Calculadora de IMC'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text('Peso (kg):', style: TextStyle(fontSize: 16)),
            TextField(
              controller: pesoController,
              keyboardType: TextInputType.number,
              decoration: InputDecoration(hintText: 'Digite seu peso'),
            ),
            SizedBox(height: 16),
            Text('Altura (m):', style: TextStyle(fontSize: 16)),
            TextField(
              controller: alturaController,
              keyboardType: TextInputType.number,
              decoration: InputDecoration(hintText: 'Digite sua altura'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),
              onPressed: calcularIMC,
              child: Text('Calcular IMC'),
            ),
          ],
        ),
      ),
    );
  }
}
