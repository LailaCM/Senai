import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: BitolaSimples()));

class BitolaSimples extends StatefulWidget {
  @override
  State<BitolaSimples> createState() => _BitolaSimplesState();
}

class _BitolaSimplesState extends State<BitolaSimples> {
  TextEditingController d = TextEditingController();
  TextEditingController c = TextEditingController();
  String r = "";

  void calc() {
    double dist = double.tryParse(d.text) ?? 0;
    double corr = double.tryParse(c.text) ?? 0;
    double b127 = (2 * dist * corr) / (56 * 127);
    double b220 = (2 * dist * corr) / (56 * 220);
    setState(() {
      r = "127V: ${b127.toStringAsFixed(2)} mm²\n220V: ${b220.toStringAsFixed(2)} mm²";
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Bitola"), backgroundColor: Colors.purple),
      body: Column(
        children: [
          TextField(
            controller: d,
            decoration: InputDecoration(hintText: "Distância (m)"),
          ),
          TextField(
            controller: c,
            decoration: InputDecoration(hintText: "Corrente (A)"),
          ),
          ElevatedButton(onPressed: calc, child: Text("Calcular")),
          Text(r),
        ],
      ),
    );
  }
}
