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
        },
        {
            "name": "GameCommand",
            "fields": [],
            "extensions": [
                [
                    100,
                    536870911
                ]
            ],
            "enums": [
                {
                    "name": "GameCommandType",
                    "values": [
                        {
                            "name": "KICK_FROM_GAME",
                            "id": 1000
                        },
                        {
                            "name": "LEAVE_GAME",
                            "id": 1001
                        },
                        {
                            "name": "GAME_SAY",
                            "id": 1002
                        },
                        {
                            "name": "SHUFFLE",
                            "id": 1003
                        },
                        {
                            "name": "MULLIGAN",
                            "id": 1004
                        },
                        {
                            "name": "ROLL_DIE",
                            "id": 1005
                        },
                        {
                            "name": "DRAW_CARDS",
                            "id": 1006
                        },
                        {
                            "name": "UNDO_DRAW",
                            "id": 1007
                        },
                        {
                            "name": "FLIP_CARD",
                            "id": 1008
                        },
                        {
                            "name": "ATTACH_CARD",
                            "id": 1009
                        },
                        {
                            "name": "CREATE_TOKEN",
                            "id": 1010
                        },
                        {
                            "name": "CREATE_ARROW",
                            "id": 1011
                        },
                        {
                            "name": "DELETE_ARROW",
                            "id": 1012
                        },
                        {
                            "name": "SET_CARD_ATTR",
                            "id": 1013
                        },
                        {
                            "name": "SET_CARD_COUNTER",
                            "id": 1014
                        },
                        {
                            "name": "INC_CARD_COUNTER",
                            "id": 1015
                        },
                        {
                            "name": "READY_START",
                            "id": 1016
                        },
                        {
                            "name": "CONCEDE",
                            "id": 1017
                        },
                        {
                            "name": "INC_COUNTER",
                            "id": 1018
                        },
                        {
                            "name": "CREATE_COUNTER",
                            "id": 1019
                        },
                        {
                            "name": "SET_COUNTER",
                            "id": 1020
                        },
                        {
                            "name": "DEL_COUNTER",
                            "id": 1021
                        },
                        {
                            "name": "NEXT_TURN",
                            "id": 1022
                        },
                        {
                            "name": "SET_ACTIVE_PHASE",
                            "id": 1023
                        },
                        {
                            "name": "DUMP_ZONE",
                            "id": 1024
                        },
                        {
                            "name": "STOP_DUMP_ZONE",
                            "id": 1025
                        },
                        {
                            "name": "REVEAL_CARDS",
                            "id": 1026
                        },
                        {
                            "name": "MOVE_CARD",
                            "id": 1027
                        },
                        {
                            "name": "SET_SIDEBOARD_PLAN",
                            "id": 1028
                        },
                        {
                            "name": "DECK_SELECT",
                            "id": 1029
                        },
                        {
                            "name": "SET_SIDEBOARD_LOCK",
                            "id": 1030
                        },
                        {
                            "name": "CHANGE_ZONE_PROPERTIES",
                            "id": 1031
                        }
                    ]
                }
            ]
        },
        {
            "name": "RoomCommand",
            "fields": [],
            "extensions": [
                [
                    100,
                    536870911
                ]
            ],
            "enums": [
                {
                    "name": "RoomCommandType",
                    "values": [
                        {
                            "name": "LEAVE_ROOM",
                            "id": 1000
                        },
                        {
                            "name": "ROOM_SAY",
                            "id": 1001
                        },
                        {
                            "name": "CREATE_GAME",
                            "id": 1002
                        },
                        {
                            "name": "JOIN_GAME",
                            "id": 1003
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_LeaveRoom",
            "fields": [],
            "messages": [
                {
                    "ref": "RoomCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_LeaveRoom",
                            "name": "ext",
                            "id": 1000
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_RoomSay",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "message",
                    "id": 1
                }
            ],
            "messages": [
                {
                    "ref": "RoomCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_RoomSay",
                            "name": "ext",
                            "id": 1001
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_CreateGame",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "description",
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
                    "type": "uint32",
                    "name": "max_players",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "only_buddies",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "only_registered",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "spectators_allowed",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "spectators_need_password",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "spectators_can_talk",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "spectators_see_everything",
                    "id": 9
                },
                {
                    "rule": "repeated",
                    "type": "uint32",
                    "name": "game_type_ids",
                    "id": 10
                }
            ],
            "messages": [
                {
                    "ref": "RoomCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_CreateGame",
                            "name": "ext",
                            "id": 1002
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_JoinGame",
            "fields": [
                {
                    "rule": "optional",
                    "type": "sint32",
                    "name": "game_id",
                    "id": 1,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "password",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "spectator",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "override_restrictions",
                    "id": 4
                }
            ],
            "messages": [
                {
                    "ref": "RoomCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_JoinGame",
                            "name": "ext",
                            "id": 1003
                        }
                    ]
                }
            ]
        },
        {
            "name": "ModeratorCommand",
            "fields": [],
            "extensions": [
                [
                    100,
                    536870911
                ]
            ],
            "enums": [
                {
                    "name": "ModeratorCommandType",
                    "values": [
                        {
                            "name": "BAN_FROM_SERVER",
                            "id": 1000
                        },
                        {
                            "name": "BAN_HISTORY",
                            "id": 1001
                        },
                        {
                            "name": "WARN_USER",
                            "id": 1002
                        },
                        {
                            "name": "WARN_HISTORY",
                            "id": 1003
                        },
                        {
                            "name": "WARN_LIST",
                            "id": 1004
                        },
                        {
                            "name": "VIEWLOG_HISTORY",
                            "id": 1005
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_BanFromServer",
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
                    "name": "address",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "minutes",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "reason",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "visible_reason",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "clientid",
                    "id": 6
                }
            ],
            "messages": [
                {
                    "ref": "ModeratorCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_BanFromServer",
                            "name": "ext",
                            "id": 1000
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_GetBanHistory",
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
                    "ref": "ModeratorCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_GetBanHistory",
                            "name": "ext",
                            "id": 1001
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_WarnUser",
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
                    "name": "reason",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "clientid",
                    "id": 3
                }
            ],
            "messages": [
                {
                    "ref": "ModeratorCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_WarnUser",
                            "name": "ext",
                            "id": 1002
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_GetWarnHistory",
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
                    "ref": "ModeratorCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_GetWarnHistory",
                            "name": "ext",
                            "id": 1003
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_GetWarnList",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "mod_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "user_name",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "user_clientid",
                    "id": 3
                }
            ],
            "messages": [
                {
                    "ref": "ModeratorCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_GetWarnList",
                            "name": "ext",
                            "id": 1004
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_ViewLogHistory",
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
                    "name": "ip_address",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "game_name",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "game_id",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "message",
                    "id": 5
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "log_location",
                    "id": 6
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "date_range",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "maximum_results",
                    "id": 8
                }
            ],
            "messages": [
                {
                    "ref": "ModeratorCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_ViewLogHistory",
                            "name": "ext",
                            "id": 1005
                        }
                    ]
                }
            ]
        },
        {
            "name": "AdminCommand",
            "fields": [],
            "extensions": [
                [
                    100,
                    536870911
                ]
            ],
            "enums": [
                {
                    "name": "AdminCommandType",
                    "values": [
                        {
                            "name": "UPDATE_SERVER_MESSAGE",
                            "id": 1000
                        },
                        {
                            "name": "SHUTDOWN_SERVER",
                            "id": 1001
                        },
                        {
                            "name": "RELOAD_CONFIG",
                            "id": 1002
                        },
                        {
                            "name": "ADJUST_MOD",
                            "id": 1003
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_UpdateServerMessage",
            "fields": [],
            "messages": [
                {
                    "ref": "AdminCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_UpdateServerMessage",
                            "name": "ext",
                            "id": 1000
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_ShutdownServer",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "reason",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "minutes",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "ref": "AdminCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_ShutdownServer",
                            "name": "ext",
                            "id": 1001
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_ReloadConfig",
            "fields": [],
            "messages": [
                {
                    "ref": "AdminCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_ReloadConfig",
                            "name": "ext",
                            "id": 1002
                        }
                    ]
                }
            ]
        },
        {
            "name": "Command_AdjustMod",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "user_name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "should_be_mod",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "ref": "AdminCommand",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Command_AdjustMod",
                            "name": "ext",
                            "id": 1003
                        }
                    ]
                }
            ]
        },
        {
            "name": "CommandContainer",
            "fields": [
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "cmd_id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "game_id",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "room_id",
                    "id": 20
                },
                {
                    "rule": "repeated",
                    "type": "SessionCommand",
                    "name": "sessionCommand",
                    "id": 100
                },
                {
                    "rule": "repeated",
                    "type": "GameCommand",
                    "name": "game_command",
                    "id": 101
                },
                {
                    "rule": "repeated",
                    "type": "RoomCommand",
                    "name": "room_command",
                    "id": 102
                },
                {
                    "rule": "repeated",
                    "type": "ModeratorCommand",
                    "name": "moderator_command",
                    "id": 103
                },
                {
                    "rule": "repeated",
                    "type": "AdminCommand",
                    "name": "admin_command",
                    "id": 104
                }
            ]
        }
    ]
}).build();
