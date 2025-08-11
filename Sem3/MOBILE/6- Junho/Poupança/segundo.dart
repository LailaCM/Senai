import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(home: SimuladorPoupanca()));
}

class SimuladorPoupanca extends StatefulWidget {
  @override
  _SimuladorPoupancaState createState() => _SimuladorPoupancaState();
}

class _SimuladorPoupancaState extends State<SimuladorPoupanca> {
  final TextEditingController valorController = TextEditingController();
  final TextEditingController mesesController = TextEditingController();

  double total = 0.0;

  void calcular() {
    double valor = double.tryParse(valorController.text) ?? 0;
    int meses = int.tryParse(mesesController.text) ?? 0;

    setState(() {
      total = valor * meses;
    });

    showDialog(
      context: context,
      builder:
          (_) => AlertDialog(
            title: Text('Resultado'),
            content: Text('Total poupado: R\$ ${total.toStringAsFixed(2)}'),
            actions: [
              TextButton(
                onPressed: () => Navigator.pop(context),
                child: Text('OK'),
              ),
            ],
          ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.teal[50],
      appBar: AppBar(
        backgroundColor: Colors.teal[800],
        title: Text('Simulador de Poupança'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text('Valor mensal:', style: TextStyle(fontSize: 16)),
            TextField(
              controller: valorController,
              keyboardType: TextInputType.number,
              decoration: InputDecoration(hintText: 'Digite o valor'),
            ),
            SizedBox(height: 16),
            Text('Número de meses:', style: TextStyle(fontSize: 16)),
            TextField(
              controller: mesesController,
              keyboardType: TextInputType.number,
              decoration: InputDecoration(hintText: 'Digite o número de meses'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              style: ElevatedButton.styleFrom(backgroundColor: Colors.brown),
              onPressed: calcular,
              child: Text('Calcular'),
            ),
            SizedBox(height: 20),
            Text('Total poupado: R\$ ${total.toStringAsFixed(2)}'),
          ],
        ),
      ),
    );
  }
}
