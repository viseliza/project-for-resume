import { ServiceNameSecondAccountCreate, Tokens } from "~/models";
import type { ServiceStrategy } from "~/types";
import { ServiceNameSecondAPI } from "~/api";

export class ServiceNameSecondStrategy implements ServiceStrategy {
    getAPI() {
        return new ServiceNameSecondAPI('');
    }

    getModes() {
        return ['accounts'];
    }

    getDisplayKeys() {
        return {
            accounts: ['enable', 'id', 'login', 'balance', 'barcode', 'created_at', 'updated_at'],
            streaks: undefined,
        }
    }

    getActions(mode: 'accounts' | 'streaks') {
        return {
            accounts: {
                'Добавить': {
                    request: new ServiceNameSecondAPI('').createAccount,
                    params: this.getAddRequestParams()[mode]
                },
                'Удалить все': {
                    request: new ServiceNameSecondAPI('').wipeAccounts,
                    params: this.getWipeRequestParams()[mode]
                },
            },
            streaks: undefined,
        }
    }

    getDumpRequest() {
        return {
            accounts: new ServiceNameSecondAPI('').dumpAccounts,
            streaks: undefined,
        }
    }

    getStats() {
        return new ServiceNameSecondAPI('').getStats;
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
            streaks: undefined,
        }
    }

    getAddRequest() {
        return {
            accounts: new ServiceNameSecondAPI('').createAccount,
            streaks: undefined,
        }
    }

    getAddRequestParams() {
        return {
            accounts: {
                'login': {
                    example: '79001112233',
                    type: 'string',
                    required: true,
                },
                'password': {
                    example: 'S3cr3tPWD',
                    type: 'string',
                    required: true,
                },
            },
            streaks: undefined,
        }
    }

    getAddManyRequest() {
        return {
            accounts: undefined,
            streaks: undefined,
        }
    }

    getAddManyRequestParams() {
        return {
            accounts: undefined,
            streaks: undefined,
        }
    }

    getUpdateRequest() {
        return {
            accounts: undefined,
            streaks: undefined,
        }
    }

    getUpdateRequestParams() {
        return {
            accounts: undefined,
            streaks: undefined,
        }
    }

    getDeleteRequest() {
        return {
            accounts: new ServiceNameSecondAPI('').deleteAccount,
            streaks: undefined,
        }
    }

    getDeleteRequestParams() {
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

    getWipeRequest() {
        return {
            accounts: new ServiceNameSecondAPI('').wipeAccounts,
            streaks: undefined,
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
            streaks: undefined,
        }
    }

    getRefreshRequest() {
        return {
            accounts: new ServiceNameSecondAPI('').refreshAccount,
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
        return new ServiceNameSecondAPI('').getStats;
    }

    getRelinkRequest() {
        return {
            accounts: undefined,
            streaks: undefined,
        }
    }

    getRelinkRequestParams() {
        return {
            accounts: undefined,
            streaks: undefined,
        }
    }

    getBalanceRequest() {
        return {
            accounts: new ServiceNameSecondAPI('').getBalance,
            streaks: undefined,
        }
    }

    getBalanceRequestParams() {
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

    getProfileRequest() {
        return {
            accounts: new ServiceNameSecondAPI('').getProfile,
            streaks: undefined,
        }
    }

    getProfileRequestParams() {
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

    getBalanceHistoryRequest() {
        return {
            accounts: new ServiceNameSecondAPI('').getBalanceHistory,
            streaks: undefined,
        }
    }

    getBalanceHistoryRequestParams() {
        return {
            accounts: {
                'id': {
                    example: '1234567890',
                    type: 'string',
                    required: true,
                },
                'page': {
                    example: 1,
                    type: 'number',
                    required: false,
                },
                'limit': {
                    example: 20,
                    type: 'number',
                    required: false,
                },
            },
            streaks: undefined,
        }
    }
}