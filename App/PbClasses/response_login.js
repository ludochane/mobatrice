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
            "name": "Response_Login",
            "fields": [
                {
                    "rule": "optional",
                    "type": "ServerInfo_User",
                    "name": "user_info",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ServerInfo_User",
                    "name": "buddy_list",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "ServerInfo_User",
                    "name": "ignore_list",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "denied_reason_str",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "denied_end_time",
                    "id": 5
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "missing_features",
                    "id": 6
                }
            ],
            "messages": [
                {
                    "ref": "Response",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Response_Login",
                            "name": "ext",
                            "id": 1005
                        }
                    ]
                }
            ]
        }
    ]
}).build();
