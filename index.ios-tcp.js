import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';
//import bytebuffer from 'bytebuffer';
//import ProtoBuf from 'react-native-protobuf';
import CommandsBuilder from './src/pb_classes/commands.js';
//import EventListGamesBuilder from './src/pb_classes/event_list_games.js';
//import SessionCommandsBuilder from './src/pb_classes/session_commands.js';
//import ResponseBuilder from './src/pb_classes/response.js';
//import ResponseLoginBuilder from './src/pb_classes/response_login.js';
import ServerMessageBuilder from './src/pb_classes/server_message.js';
global.Buffer = global.Buffer || require('buffer').Buffer
import rntcp from 'react-native-tcp';

class ListViewBasics extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    const client = rntcp.createConnection(4747, 'localhost');

    client.on('error', function(error) {
      console.log(error);
    });

    client.on('data', function(data) {
      console.log('message was received', data);

      try {
        const serverMessage = ServerMessageBuilder.ServerMessage.decode(data);
        console.log('serverMessage: ' + serverMessage);
        var view = new Uint8Array(data);
        var str = "";
        for(var i = 0; i < view.length; i++)
        {
          str += String.fromCharCode(view[i]);
        }
        console.log(str);

        switch (serverMessage.messageType) {
          case ServerMessageBuilder.ServerMessage.MessageType.RESPONSE:
            var response = serverMessage.response;
            var cmdId = response.cmdId;
            console.log('TODO RESPONSE');
          case ServerMessageBuilder.ServerMessage.MessageType.SESSION_EVENT:
            // TODO
            console.log('TODO SESSION_EVENT');
            break;
          case ServerMessageBuilder.ServerMessage.MessageType.GAME_EVENT_CONTAINER:
            // TODO
            console.log('TODO GAME_EVENT_CONTAINER');
            break;
          case ServerMessageBuilder.ServerMessage.MessageType.ROOM_EVENT:
            // TODO
            console.log('TODO ROOM_EVENT');
            break;
        }
      } catch (err) {
        console.log("Processing failed:", err);
        var view = new Uint8Array(data);
        var str = "";
        for(var i = 0; i < view.length; i++)
        {
          str += String.fromCharCode(view[i]);
        }
        console.log(str);
        return;
      }

    });

    const CommandLogin = CommandsBuilder.Command_Login;
    const commandLogin = new CommandLogin({
      'user_name': 'totototo',
      'password': 'toto',
      'clientid': 'toto',
      'clientver': 'mobclient-0.2 (2016-08-03)',
      'clientfeatures': [
        'client_id',
        'client_ver',
        'feature_set',
        'room_chat_history',
        'client_warnings'
      ]
    });

    const SessionCommand = CommandsBuilder.SessionCommand;
    const sessionCommand = new SessionCommand({
      '.Command_Login.ext': commandLogin
    });

    const CommandContainer = CommandsBuilder.CommandContainer;
    const commandContainer = new CommandContainer({
      'sessionCommand': sessionCommand,
      'cmd_id': 1
    });

    const encodedBuffer = commandContainer.encode();
    //const buffer = encodedBuffer.toBuffer();
    //const base64str = commandContainer.toBase64();

    // const result = client.write(encodedBuffer.view);
    client.write(new Buffer(encodedBuffer.toBuffer()));
    //client.write(base64str);

    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }

  render() {
    return (
      <View style={{paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('mobatrice', () => ListViewBasics);
