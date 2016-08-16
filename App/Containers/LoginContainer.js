import React, { Component } from 'react';
import CommandsBuilder from '../PbClasses/commands.js';
import ServerMessageBuilder from '../PbClasses/server_message.js';
global.Buffer = global.Buffer || require('buffer').Buffer

export default class LoginContainer extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    var ws = new WebSocket('ws://localhost:4748');
    ws.binaryType = 'arraybuffer';

    ws.onopen = () => {
      // connection opened
      console.log("ws open: " + ws.readyState);

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
      if (ws.readyState == WebSocket.OPEN) {
        ws.send(commandContainer.toArrayBuffer());
        console.log("Sent: " + commandContainer.toString());
      } else {
        console.log("Send: Not connected");
      }
      //client.write(base64str);
    };

    ws.onmessage = (e) => {
      // a message was received
      const data = e.data;
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
    };

    ws.onerror = (e) => {
      // an error occurred
      console.log(e.message);
    };

    ws.onclose = (e) => {
      // connection closed
      console.log(e.code, e.reason);
    };
  }

  render() {
    return (
      <View style={{paddingTop: 22}}>
      </View>
    );
  }
}
