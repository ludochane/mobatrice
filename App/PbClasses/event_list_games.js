module.exports = require("react-native-protobuf").newBuilder({})['import']({
    "package": null,
    "messages": [
        {
            "name": "RoomEvent",
            "fields": [
                {
                    "rule": "optional",
                    "type": "sint32",
                    "name": "room_id",
                    "id": 1
                }
            ],
            "extensions": [
                [
                    100,
                    536870911
                ]
            ],
            "enums": [
                {
                    "name": "RoomEventType",
                    "values": [
                        {
                            "name": "LEAVE_ROOM",
                            "id": 1000
                        },
                        {
                            "name": "JOIN_ROOM",
                            "id": 1001
                        },
                        {
                            "name": "ROOM_SAY",
                            "id": 1002
                        },
                        {
                            "name": "LIST_GAMES",
                            "id": 1003
                        }
                    ]
                }
            ]
        },
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
            "name": "ServerInfo_Game",
            "fields": [
                {
                    "rule": "optional",
                    "type": "sint32",
                    "name": "server_id",
                    "id": 1,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "sint32",
                    "name": "room_id",
                    "id": 2,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "sint32",
                    "name": "game_id",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "description",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "with_password",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "max_players",
                    "id": 6
                },
                {
                    "rule": "repeated",
                    "type": "sint32",
                    "name": "game_types",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "ServerInfo_User",
                    "name": "creator_info",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "only_buddies",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "only_registered",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "spectators_allowed",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "spectators_need_password",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "spectators_can_chat",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "spectators_omniscient",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "player_count",
                    "id": 30
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "spectators_count",
                    "id": 31
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "started",
                    "id": 50
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "start_time",
                    "id": 51
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "closed",
                    "id": 52
                }
            ]
        },
        {
            "name": "Event_ListGames",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ServerInfo_Game",
                    "name": "game_list",
                    "id": 1
                }
            ],
            "messages": [
                {
                    "ref": "RoomEvent",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Event_ListGames",
                            "name": "ext",
                            "id": 1003
                        }
                    ]
                }
            ]
        }
    ]
}).build();
