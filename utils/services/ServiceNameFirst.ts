import { ServiceNameFirstAPI } from "~/api";
import type { ServiceStrategy } from "~/types";

export class ServiceNameFirstStrategy implements ServiceStrategy {
    getAPI() {
        return new ServiceNameFirstAPI('');
    }

    getModes() {
        return ['accounts', 'streaks'];
    }

    getDisplayKeys() {
        return {
            accounts: ['enable', 'id', 'nickname', 'balance', 'mode', 'created_at', 'updated_at'],
            streaks: ['id', 'points', 'opened', 'opened_at', 'created_at', 'updated_at'],
        }
    }

    getStats() {
        return new ServiceNameFirstAPI('').getStats;
    }

    getActions(mode: 'accounts' | 'streaks') {
        return {
            accounts: {
                'Добавить': {
                    request: new ServiceNameFirstAPI('').createAccount,
                    params: this.getAddRequestParams()[mode],
                },  
                'Удалить все': {
                    request: new ServiceNameFirstAPI('').wipeAccounts,
                    params: this.getWipeRequestParams()[mode],
                },
            },
            streaks: {
                'Добавить': {
                    request: new ServiceNameFirstAPI('').createStreak,
                    params: this.getAddRequestParams()[mode],
                },
                'Добавить несколько': {
                    request: new ServiceNameFirstAPI('').createManyStreak,
                    params: this.getAddManyRequestParams()[mode],
                },
                'Удалить все': {
                    request: new ServiceNameFirstAPI('').wipeStreaks,
                    params: this.getWipeRequestParams()[mode]
                },
            },
        }
    }

    getDumpRequest() {
        return {
            accounts: new ServiceNameFirstAPI('').dumpAccounts,
            streaks: new ServiceNameFirstAPI('').dumpStreaks,
        }
    }

    getDumpRequestParams() {
        const object = {
            'query': 'string',
            'limit': 'number',
            'offset': 'number',
            'filter_by': 'string',
            'order_by': 'string',
        }
        return {
            accounts: object,
            streaks: object,
        }
    }

    getAddRequest() {
        return {
            accounts: new ServiceNameFirstAPI('').createAccount,
            streaks: new ServiceNameFirstAPI('').createStreak,
        }
    }

    getAddRequestParams() {
        return {
            accounts: {
                'token': {
                    example: '$2a$06$0123456789abcdefghijkl',
                    type: 'string',
                    required: true,
                },
                'mode': {
                    example: 'main',
                    type: ['main', 'farm', 'reserve_main'],
                    required: false,
                },
            },
            streaks: {
                'points': {
                    example: 10_000,
                    type: 'number',
                    required: true,
                },
            }
        }
    }

    getAddManyRequest() {
        return {
            accounts: undefined,
            streaks: new ServiceNameFirstAPI('').createManyStreak,
        }
    }

    getAddManyRequestParams() {
        return {
            accounts: undefined,
            streaks: {
                'points': {
                    example: 10_000,
                    type: 'number',
                    required: true,
                },
                'count': {
                    example: 1_000,
                    type: 'number',
                    required: true,
                },
            }
        }
    }

    getUpdateRequest() {
        return {
            accounts: new ServiceNameFirstAPI('').updateAccount,
            streaks: new ServiceNameFirstAPI('').updateStreak,
        }
    }

    getUpdateRequestParams() {
        return {
            accounts: {
                'id': {
                    example: '1234567890',
                    type: 'string',
                    required: true,
                },
                'mode': {
                    example: 'main',
                    type: ['main', 'farm', 'reserve_main'],
                    required: true,
                },
            },
            streaks: {
                'id': {
                    example: '1234567890',
                    type: 'string',
                    required: true,
                },
                'points': {
                    example: 10_000,
                    type: 'number',
                    required: true,
                },
            }
        }
    }

    getDeleteRequest() {
        return {
            accounts: new ServiceNameFirstAPI('').deleteAccount,
            streaks: new ServiceNameFirstAPI('').deleteStreak,
        }
    }

    getWipeRequest() {
        return {
            accounts: new ServiceNameFirstAPI('').wipeAccounts,
            streaks: new ServiceNameFirstAPI('').wipeStreaks,
        }
    }

    getWipeRequestParams() {
        return {
            accounts: {
                'confirm': {
                    example: true,
                    type: 'boolean',
                    required: true,
                },
            },
            streaks: {
                'confirm': {
                    example: true,
                    type: 'boolean',
                    required: true,
                },
            },
        }
    }

    getRefreshRequest() {
        return {
            accounts: new ServiceNameFirstAPI('').refreshAccount,
            streaks: undefined,
        }
    }

    getRefreshRequestParams() {
        return {
            accounts: {
                'id': {
                    example: '1234567890',
                    type: 'string',
                    required: true,
                },
            },
            streaks: undefined,
        }
    }

    getStatsRequest() {
        return new ServiceNameFirstAPI('').getStats;
    }

    getRelinkRequest() {
        return {
            accounts: undefined,
            streaks: new ServiceNameFirstAPI('').relinkStreaks,
        }
    }

    getRelinkRequestParams() {
        return {
            accounts: undefined,
            streaks: {
                'id': {
                    example: '1234567890',
                    type: 'string',
                    required: true,
                },
            },
        }
    }

    getBalanceRequest() {
        return {
            accounts: undefined,
            streaks: undefined,
        }
    }

    getBalanceRequestParams() {
        return {
            accounts: undefined,
            streaks: undefined,
        }
    }

    getProfileRequest() {
        return {
            accounts: undefined,
            streaks: undefined,
        }
    }

    getProfileRequestParams() {
        return {
            accounts: undefined,
            streaks: undefined,
        }
    }

    getBalanceHistoryRequest() {
        return {
            accounts: undefined,
            streaks: undefined,
        }
    }

    getBalanceHistoryRequestParams() {
        return {
            accounts: undefined,
            streaks: undefined,
        }
    }   
}