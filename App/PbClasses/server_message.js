module.exports = require("react-native-protobuf").newBuilder({})['import']({
    "package": null,
    "messages": [
        {
            "name": "Response",
            "fields": [
                {
                    "rule": "required",
                    "type": "uint64",
                    "name": "cmd_id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "ResponseCode",
                    "name": "response_code",
                    "id": 2
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
                    "name": "ResponseCode",
                    "values": [
                        {
                            "name": "RespNotConnected",
                            "id": -1
                        },
                        {
                            "name": "RespNothing",
                            "id": 0
                        },
                        {
                            "name": "RespOk",
                            "id": 1
                        },
                        {
                            "name": "RespNotInRoom",
                            "id": 2
                        },
                        {
                            "name": "RespInternalError",
                            "id": 3
                        },
                        {
                            "name": "RespInvalidCommand",
                            "id": 4
                        },
                        {
                            "name": "RespInvalidData",
                            "id": 5
                        },
                        {
                            "name": "RespNameNotFound",
                            "id": 6
                        },
                        {
                            "name": "RespLoginNeeded",
                            "id": 7
                        },
                        {
                            "name": "RespFunctionNotAllowed",
                            "id": 8
                        },
                        {
                            "name": "RespGameNotStarted",
                            "id": 9
                        },
                        {
                            "name": "RespGameFull",
                            "id": 10
                        },
                        {
                            "name": "RespContextError",
                            "id": 11
                        },
                        {
                            "name": "RespWrongPassword",
                            "id": 12
                        },
                        {
                            "name": "RespSpectatorsNotAllowed",
                            "id": 13
                        },
                        {
                            "name": "RespOnlyBuddies",
                            "id": 14
                        },
                        {
                            "name": "RespUserLevelTooLow",
                            "id": 15
                        },
                        {
                            "name": "RespInIgnoreList",
                            "id": 16
                        },
                        {
                            "name": "RespWouldOverwriteOldSession",
                            "id": 17
                        },
                        {
                            "name": "RespChatFlood",
                            "id": 18
                        },
                        {
                            "name": "RespUserIsBanned",
                            "id": 19
                        },
                        {
                            "name": "RespAccessDenied",
                            "id": 20
                        },
                        {
                            "name": "RespUsernameInvalid",
                            "id": 21
                        },
                        {
                            "name": "RespRegistrationRequired",
                            "id": 22
                        },
                        {
                            "name": "RespRegistrationAccepted",
                            "id": 23
                        },
                        {
                            "name": "RespUserAlreadyExists",
                            "id": 24
                        },
                        {
                            "name": "RespEmailRequiredToRegister",
                            "id": 25
                        },
                        {
                            "name": "RespTooManyRequests",
                            "id": 26
                        },
                        {
                            "name": "RespPasswordTooShort",
                            "id": 27
                        },
                        {
                            "name": "RespAccountNotActivated",
                            "id": 28
                        },
                        {
                            "name": "RespRegistrationDisabled",
                            "id": 29
                        },
                        {
                            "name": "RespRegistrationFailed",
                            "id": 30
                        },
                        {
                            "name": "RespActivationAccepted",
                            "id": 31
                        },
                        {
                            "name": "RespActivationFailed",
                            "id": 32
                        },
                        {
                            "name": "RespRegistrationAcceptedNeedsActivation",
                            "id": 33
                        },
                        {
                            "name": "RespClientIdRequired",
                            "id": 34
                        },
                        {
                            "name": "RespClientUpdateRequired",
                            "id": 35
                        }
                    ]
                },
                {
                    "name": "ResponseType",
                    "values": [
                        {
                            "name": "JOIN_ROOM",
                            "id": 1000
                        },
                        {
                            "name": "LIST_USERS",
                            "id": 1001
                        },
                        {
                            "name": "GET_GAMES_OF_USER",
                            "id": 1002
                        },
                        {
                            "name": "GET_USER_INFO",
                            "id": 1003
                        },
                        {
                            "name": "DUMP_ZONE",
                            "id": 1004
                        },
                        {
                            "name": "LOGIN",
                            "id": 1005
                        },
                        {
                            "name": "DECK_LIST",
                            "id": 1006
                        },
                        {
                            "name": "DECK_DOWNLOAD",
                            "id": 1007
                        },
                        {
                            "name": "DECK_UPLOAD",
                            "id": 1008
                        },
                        {
                            "name": "REGISTER",
                            "id": 1009
                        },
                        {
                            "name": "ACTIVATE",
                            "id": 1010
                        },
                        {
                            "name": "ADJUST_MOD",
                            "id": 1011
                        },
                        {
                            "name": "BAN_HISTORY",
                            "id": 1012
                        },
                        {
                            "name": "WARN_HISTORY",
                            "id": 1013
                        },
                        {
                            "name": "WARN_LIST",
                            "id": 1014
                        },
                        {
                            "name": "VIEW_LOG",
                            "id": 1015
                        },
                        {
                            "name": "REPLAY_LIST",
                            "id": 1100
                        },
                        {
                            "name": "REPLAY_DOWNLOAD",
                            "id": 1101
                        }
                    ]
                }
            ]
        },
        {
            "name": "SessionEvent",
            "fields": [],
            "extensions": [
                [
                    100,
                    536870911
                ]
            ],
            "enums": [
                {
                    "name": "SessionEventType",
                    "values": [
                        {
                            "name": "SERVER_IDENTIFICATION",
                            "id": 500
                        },
                        {
                            "name": "SERVER_COMPLETE_LIST",
                            "id": 600
                        },
                        {
                            "name": "SERVER_MESSAGE",
                            "id": 1000
                        },
                        {
                            "name": "SERVER_SHUTDOWN",
                            "id": 1001
                        },
                        {
                            "name": "CONNECTION_CLOSED",
                            "id": 1002
                        },
                        {
                            "name": "USER_MESSAGE",
                            "id": 1003
                        },
                        {
                            "name": "LIST_ROOMS",
                            "id": 1004
                        },
                        {
                            "name": "ADD_TO_LIST",
                            "id": 1005
                        },
                        {
                            "name": "REMOVE_FROM_LIST",
                            "id": 1006
                        },
                        {
                            "name": "USER_JOINED",
                            "id": 1007
                        },
                        {
                            "name": "USER_LEFT",
                            "id": 1008
                        },
                        {
                            "name": "GAME_JOINED",
                            "id": 1009
                        },
                        {
                            "name": "NOTIFY_USER",
                            "id": 1010
                        },
                        {
                            "name": "REPLAY_ADDED",
                            "id": 1100
                        }
                    ]
                }
            ]
        },
        {
            "name": "GameEvent",
            "fields": [
                {
                    "rule": "optional",
                    "type": "sint32",
                    "name": "player_id",
                    "id": 1,
                    "options": {
                        "default": -1
                    }
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
                    "name": "GameEventType",
                    "values": [
                        {
                            "name": "JOIN",
                            "id": 1000
                        },
                        {
                            "name": "LEAVE",
                            "id": 1001
                        },
                        {
                            "name": "GAME_CLOSED",
                            "id": 1002
                        },
                        {
                            "name": "GAME_HOST_CHANGED",
                            "id": 1003
                        },
                        {
                            "name": "KICKED",
                            "id": 1004
                        },
                        {
                            "name": "GAME_STATE_CHANGED",
                            "id": 1005
                        },
                        {
                            "name": "PLAYER_PROPERTIES_CHANGED",
                            "id": 1007
                        },
                        {
                            "name": "GAME_SAY",
                            "id": 1009
                        },
                        {
                            "name": "CREATE_ARROW",
                            "id": 2000
                        },
                        {
                            "name": "DELETE_ARROW",
                            "id": 2001
                        },
                        {
                            "name": "CREATE_COUNTER",
                            "id": 2002
                        },
                        {
                            "name": "SET_COUNTER",
                            "id": 2003
                        },
                        {
                            "name": "DEL_COUNTER",
                            "id": 2004
                        },
                        {
                            "name": "DRAW_CARDS",
                            "id": 2005
                        },
                        {
                            "name": "REVEAL_CARDS",
                            "id": 2006
                        },
                        {
                            "name": "SHUFFLE",
                            "id": 2007
                        },
                        {
                            "name": "ROLL_DIE",
                            "id": 2008
                        },
                        {
                            "name": "MOVE_CARD",
                            "id": 2009
                        },
                        {
                            "name": "FLIP_CARD",
                            "id": 2010
                        },
                        {
                            "name": "DESTROY_CARD",
                            "id": 2011
                        },
                        {
                            "name": "ATTACH_CARD",
                            "id": 2012
                        },
                        {
                            "name": "CREATE_TOKEN",
                            "id": 2013
                        },
                        {
                            "name": "SET_CARD_ATTR",
                            "id": 2014
                        },
                        {
                            "name": "SET_CARD_COUNTER",
                            "id": 2015
                        },
                        {
                            "name": "SET_ACTIVE_PLAYER",
                            "id": 2016
                        },
                        {
                            "name": "SET_ACTIVE_PHASE",
                            "id": 2017
                        },
                        {
                            "name": "DUMP_ZONE",
                            "id": 2018
                        },
                        {
                            "name": "STOP_DUMP_ZONE",
                            "id": 2019
                        },
                        {
                            "name": "CHANGE_ZONE_PROPERTIES",
                            "id": 2020
                        }
                    ]
                }
            ]
        },
        {
            "name": "GameEventContext",
            "fields": [],
            "extensions": [
                [
                    100,
                    536870911
                ]
            ],
            "enums": [
                {
                    "name": "ContextType",
                    "values": [
                        {
                            "name": "READY_START",
                            "id": 1000
                        },
                        {
                            "name": "CONCEDE",
                            "id": 1001
                        },
                        {
                            "name": "DECK_SELECT",
                            "id": 1002
                        },
                        {
                            "name": "UNDO_DRAW",
                            "id": 1003
                        },
                        {
                            "name": "MOVE_CARD",
                            "id": 1004
                        },
                        {
                            "name": "MULLIGAN",
                            "id": 1005
                        },
                        {
                            "name": "PING_CHANGED",
                            "id": 1006
                        },
                        {
                            "name": "CONNECTION_STATE_CHANGED",
                            "id": 1007
                        },
                        {
                            "name": "SET_SIDEBOARD_LOCK",
                            "id": 1008
                        }
                    ]
                }
            ]
        },
        {
            "name": "GameEventContainer",
            "fields": [
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "game_id",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "GameEvent",
                    "name": "event_list",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "GameEventContext",
                    "name": "context",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "seconds_elapsed",
                    "id": 4
                }
            ]
        },
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
            "name": "ServerMessage",
            "fields": [
                {
                    "rule": "optional",
                    "type": "MessageType",
                    "name": "message_type",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "Response",
                    "name": "response",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "SessionEvent",
                    "name": "session_event",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "GameEventContainer",
                    "name": "game_event_container",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "RoomEvent",
                    "name": "room_event",
                    "id": 5
                }
            ],
            "enums": [
                {
                    "name": "MessageType",
                    "values": [
                        {
                            "name": "RESPONSE",
                            "id": 0
                        },
                        {
                            "name": "SESSION_EVENT",
                            "id": 1
                        },
                        {
                            "name": "GAME_EVENT_CONTAINER",
                            "id": 2
                        },
                        {
                            "name": "ROOM_EVENT",
                            "id": 3
                        }
                    ]
                }
            ]
        }
    ]
}).build();
