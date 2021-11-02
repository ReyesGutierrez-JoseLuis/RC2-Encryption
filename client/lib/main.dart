import 'package:flutter/material.dart';
import 'package:first_test/enc_data.dart';
import 'package:first_test/dec_data.dart';
import 'package:first_test/create_data.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  static const appTitle = 'Drawer Demo';

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      title: appTitle,
      home: MyHomePage(title: appTitle),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title)),
      body: const Center(
        child: Text('Rc2!'),
      ),
      drawer: Drawer(
        // Add a ListView to the drawer. This ensures the user can scroll
        // through the options in the drawer if there isn't enough vertical
        // space to fit everything.
        child: ListView(
          // Important: Remove any padding from the ListView.
          padding: EdgeInsets.zero,
          children: [
            const DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.blue,
              ),
              child: Text('Rc2'),
            ),
            ListTile(
              title: const Text('Crear Texto'),
              onTap: () {
                // Update the state of the app
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const CreateText()),
                );
                // ...
                // Then close the drawer
                // Navigator.pop(context);
              },
            ),
            ListTile(
              title: const Text('View Encrypted'),
              onTap: () {
                // Update the state of the app
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => EncPage()),
                );
                // ...
                // Then close the drawer
                // Navigator.pop(context);
              },
            ),
            ListTile(
              title: const Text('View Decrypted'),
              onTap: () {
                // Update the state of the app
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => DecPage()),
                );
                // ...
                // Then close the drawer
                // Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
    );
  }
}