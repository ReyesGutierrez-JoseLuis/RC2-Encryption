// main.dart
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert'; // for using json.decode()

void main() {
  runApp(DecApp());
}

class DecApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // Hide the debug banner
      debugShowCheckedModeBanner: false,
      title: 'Rc2',
      home: DecPage(),
    );
  }
}

class DecPage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<DecPage> {
  // The list that contains information about photos
  List _loadedPhotos = [];

  // The function that fetches data from the API
  Future<void> _fetchData() async {
    const API_URL = 'https://p2-ej2.herokuapp.com/text/fetchMany';

    final response = await http.get(Uri.parse(API_URL));
    final data = json.decode(response.body);
    print(data);


    setState(() {
      _loadedPhotos = data;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Rc2'),
        ),
        body: SafeArea(
            child: _loadedPhotos.length == 0
                ? Center(
              child: ElevatedButton(
                child: Text('Load Decrypted Data'),
                onPressed: _fetchData,
              ),
            )
            // The ListView that displays photos
                : ListView.builder(
              itemCount: _loadedPhotos.length,
              itemBuilder: (BuildContext ctx, index) {
                return ListTile(
/*
                  leading: Image.network(
                    _loadedPhotos[index]["thumbnailUrl"],
                    width: 150,
                    fit: BoxFit.cover,
                  ),
*/
                  title: Text(_loadedPhotos[index]['text']),
/*
                  subtitle:
                  Text('Photo ID: ${_loadedPhotos[index]["id"]}'),
*/
                );
              },
            )));
  }
}