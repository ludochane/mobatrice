module.exports = require("react-native-protobuf").newBuilder({})['import']({
    "package": null,
    "messages": [
        {
            "name": "ServerInfo_User",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "user_level",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "address",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "real_name",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "Gender",
                    "name": "gender",
                    "id": 5,
                    "options": {
                        "default": "GenderUnknown"
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "country",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "avatar_bmp",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "sint32",
                    "name": "id",
                    "id": 8,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "sint32",
                    "name": "server_id",
                    "id": 9,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "session_id",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "accountage_secs",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "email",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "clientid",
                    "id": 13
                }
            ],
            "enums": [
                {
                    "name": "UserLevelFlag",
                    "values": [
                        {
                            "name": "IsNothing",
                            "id": 0
                        },
                        {
                            "name": "IsUser",
                            "id": 1
                        },
                        {
                            "name": "IsRegistered",
                            "id": 2
                        },
                        {
                            "name": "IsModerator",
                            "id": 4
                        },
                        {
                            "name": "IsAdmin",
                            "id": 8
                        }
                    ]
                },
                {
                    "name": "Gender",
                    "values": [
                        {
                            "name": "GenderUnknown",
                            "id": -1
                        },
                        {
                            "name": "Male",
                            "id": 0
                        },
                        {
                            "name": "Female",
                            "id": 1
                        }
                    ]
                }
            ]
        },
        {
            "name": "SessionCommand",
            "fields": [],
            "extensions": [
                [
                    100,
                    536870911
                ]
            ],
            "enums": [
                {
                    "name": "SessionCommandType",
                    "values": [
                        {
                            "name": "PING",
                            "id": 1000
                        },
                        {
                            "name": "LOGIN",
                            "id": 1001
                        },
                        {
                            "name": "MESSAGE",
                            "id": 1002
                        },
                        {
                            "name": "LIST_USERS",
                            "id": 1003
                        },
                        {
                            "name": "GET_GAMES_OF_USER",
                            "id": 1004
                        },
                        {
                            "name": "GET_USER_INFO",
                            "id": 1005
                        },
                        {
                            "name": "ADD_TO_LIST",
                            "id": 1006
                        },
                        {
                            "name": "REMOVE_FROM_LIST",
                            "id": 1007
                        },
                        {
                            "name": "DECK_LIST",
                            "id": 1008
                        },
                        {
                            "name": "DECK_NEW_DIR",
                            "id": 1009
                        },
                        {
                            "name": "DECK_DEL_DIR",
                            "id": 1010
                        },
                        {
                            "name": "DECK_DEL",
                            "id": 1011
                        },
                        {
                            "name": "DECK_DOWNLOAD",
                            "id": 1012
                        },
                        {
                            "name": "DECK_UPLOAD",
                            "id": 1013
                        },
                        {
                            "name": "LIST_ROOMS",
                            "id": 1014
                        },
                        {
                            "name": "JOIN_ROOM",
                            "id": 1015
                        },
                        {
                            "name": "REGISTER",
                            "id": 1016
                        },
                        {
                            "name": "ACTIVATE",
                            "id": 1017
                        },
                        {
                            "name": "ACCOUNT_EDIT",
                            "id": 1018
                        },
                        {
                            "name": "ACCOUNT_IMAGE",
                            "id": 1019
                        },
                        {
                            "name": "ACCOUNT_PASSWORD",
                            "id": 1020
                        },
                        {
                            "name": "REPLAY_LIST",
                            "id": 1100
                        },
                        {
                            "name": "REPLAY_DOWNLOAD",
                            "id": 1101
                        },
                        {
                            "name": "REPLAY_MODIFY_MATCH",
                            "id": 1102
                        },
                        {
                            "name": "REPLAY_DELETE_MATCH",
                            "id": 1103
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_Ping",
            "fields": [],
            "messages": [
                {
                    "ref": "SessionCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_Ping",
                            "name": "ext",
                            "id": 1000
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_Login",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "user_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "password",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "clientid",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "clientver",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "clientfeatures",
                    "id": 5
                }
            ],
            "messages": [
                {
                    "ref": "SessionCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_Login",
                            "name": "ext",
                            "id": 1001
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_Message",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "user_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "message",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "ref": "SessionCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_Message",
                            "name": "ext",
                            "id": 1002
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_ListUsers",
            "fields": [],
            "messages": [
                {
                    "ref": "SessionCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_ListUsers",
                            "name": "ext",
                            "id": 1003
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_GetGamesOfUser",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "user_name",
                    "id": 1
                }
            ],
            "messages": [
                {
                    "ref": "SessionCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_GetGamesOfUser",
                            "name": "ext",
                            "id": 1004
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_GetUserInfo",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "user_name",
                    "id": 1
                }
            ],
            "messages": [
                {
                    "ref": "SessionCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_GetUserInfo",
                            "name": "ext",
                            "id": 1005
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_AddToList",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "list",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "user_name",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "ref": "SessionCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_AddToList",
                            "name": "ext",
                            "id": 1006
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_RemoveFromList",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "list",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "user_name",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "ref": "SessionCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_RemoveFromList",
                            "name": "ext",
                            "id": 1007
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_ListRooms",
            "fields": [],
            "messages": [
                {
                    "ref": "SessionCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_ListRooms",
                            "name": "ext",
                            "id": 1014
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_JoinRoom",
            "fields": [
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "room_id",
                    "id": 1
                }
            ],
            "messages": [
                {
                    "ref": "SessionCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_JoinRoom",
                            "name": "ext",
                            "id": 1015
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_Register",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "user_name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "password",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "email",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "ServerInfo_User.Gender",
                    "name": "gender",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "country",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "real_name",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "clientid",
                    "id": 7
                }
            ],
            "messages": [
                {
                    "ref": "SessionCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_Register",
                            "name": "ext",
                            "id": 1016
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_Activate",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "user_name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "token",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "ref": "SessionCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_Activate",
                            "name": "ext",
                            "id": 1017
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_AccountEdit",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "real_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "email",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "ServerInfo_User.Gender",
                    "name": "gender",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "country",
                    "id": 4
                }
            ],
            "messages": [
                {
                    "ref": "SessionCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_AccountEdit",
                            "name": "ext",
                            "id": 1018
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_AccountImage",
            "fields": [
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "image",
                    "id": 1
                }
            ],
            "messages": [
                {
                    "ref": "SessionCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_AccountImage",
                            "name": "ext",
                            "id": 1019
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_AccountPassword",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "old_password",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "new_password",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "ref": "SessionCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_AccountPassword",
                            "name": "ext",
                            "id": 1020
                        }
                    ]
                }
            ]
        }
    ]
}).build();
