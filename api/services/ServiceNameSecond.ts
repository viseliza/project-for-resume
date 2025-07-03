import type { RequestResult } from "~/types";
import { TemplateAPI } from "~/api";
import { 
    ServiceNameSecondAccount, 
    ServiceNameSecondAccountCreate, 
    ServiceNameSecondAccountWipe, 
    Statistic
} from "~/models";

export class ServiceNameSecondAPI extends TemplateAPI {
    /*****************************/
    /* * * К О Н С Т А Н Т Ы * * */
    /*****************************/

    static accountsMethod  = 'services/service_second/private/accounts/';
    static logsMethod      = 'services/service_second/private/logs/';
    static serversMethod   = 'services/service_second/public/servers/';
    static requestsMethod  = 'services/service_second/private/requests/';
    static statsMethod     = 'services/service_second/private/stats/';

    constructor(x_token: string) {
        super(x_token)
    }


    /***************************/
    /* * * A C C O U N T S * * */
    /***************************/

    /** Добавление аккаунта второго сервиса (название изменено)
    *
    * @param {object} body - Данные для создания аккаунта 
    * @param {string} access_token - Настоящий access_token
    * @returns {Promise<Account>} - Созданная модель аккаунта
    */
    async createAccount(body: ServiceNameSecondAccountCreate, access_token: string) {
        const account = await super.callApi(ServiceNameSecondAPI.accountsMethod + 'add', {
            headers: {
                'Authorization': `Bearer ${access_token}`
            },
            body
        }, "POST");
        return new ServiceNameSecondAccount(account);
    }

    /** Дамп аккаунтов второго сервиса (название изменено) в диапазоне 
    *
    * @param {any} params - Диапазон выборки аккаунтов 
    * @param {string} access_token - Настоящий access_token
    * @returns {Promise<any>} - Найденные модели аккаунтов в диапазоне
    */
    async dumpAccounts(params: any, access_token: string) {
        const { data, count } = await super.callApi(ServiceNameSecondAPI.accountsMethod + 'dump', {
            headers: {
                'Authorization': `Bearer ${access_token}`
            },
            opts: { ...params }
        });
        return {
            data: data.map((account: ServiceNameSecondAccount) => new ServiceNameSecondAccount(account)),
            count
        };
    }


    /** Обновление информации аккаунта второго сервиса (название изменено) по его Id  
    *
    * @param {string} id - Id аккаунта для поиска 
    * @param {string} access_token - Настоящий access_token
    * @returns {Promise<ServiceNameSecondAccount>} - Найденная модель аккаунта
    */
    async refreshAccount(id: string, access_token: string): Promise<ServiceNameSecondAccount> {
        const account = await super.callApi(ServiceNameSecondAPI.accountsMethod + `refresh/${id}`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });
        return new ServiceNameSecondAccount(account);
    }

    
    /** Удаление аккаунта второго сервиса (название изменено) по Id
    *
    * @param {string} id - Id аккаунта для удаления 
    * @param {string} access_token - Настоящий access_token
    * @returns {Promise<ServiceNameSecondAccount>} - Модель удаленного аккаунта
    */
    async deleteAccount(id: string, access_token: string): Promise<ServiceNameSecondAccount> {
        const account = await super.callApi(ServiceNameSecondAPI.accountsMethod + id, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            },
        }, "DELETE");
        return new ServiceNameSecondAccount(account);
    }
    
    
    /** Удаление всех аккаунтов второго сервиса (название изменено)
    *
    * @param {any} opts - Данные для подтверждения удаления всех аккаунтов 
    * @param {string} access_token - Настоящий access_token
    * @returns {Promise<ServiceNameSecondAccountWipe>} - Статус завершения операции
    */
    async wipeAccounts(opts: any, access_token: string): Promise<ServiceNameSecondAccountWipe> {
        return await super.callApi(ServiceNameSecondAPI.accountsMethod + 'wipe', {
            headers: {
                'Authorization': `Bearer ${access_token}`
            },
            opts
        }, "DELETE");
    }


    /*************************/
    /* * * * S T A T S * * * */
    /*************************/

    /** Получение статистики по сервису второго сервиса (название изменено)  
    *
    * @param {string} params - Опциональные параметры
    * @param {string} access_token - Настоящий access_token
    * @returns {Promise<Statistic>} - Модель статистики по сервису
    */
    async getStats(params: any, access_token: string): Promise<Statistic> {
        const statistic = await super.callApi(ServiceNameSecondAPI.statsMethod, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });
        return new Statistic(statistic);
    }


    /***********************/
    /* * R E Q U E S T S * */
    /***********************/

    
    /** Получение баланса и счета карты с аккаунта второго сервиса (название изменено) по Id
    *
    * @param {string} id - Id аккаунта для удаления 
    * @param {string} access_token - Настоящий access_token
    * @returns {Promise<RequestResult>} - Модель удаленного аккаунта
    */
    async getBalance(id: string, access_token: string): Promise<RequestResult> {
        return super.callApi(ServiceNameSecondAPI.accountsMethod + id + '/balance', {
            headers: {
                'Authorization': `Bearer ${access_token}`
            },
        });
    }

    
    /** Получение профиля аккаунта второго сервиса (название изменено) по Id
    *
    * @param {string} id - Id аккаунта для удаления 
    * @param {string} access_token - Настоящий access_token
    * @returns {Promise<RequestResult>} - Модель удаленного аккаунта
    */
    async getProfile(id: string, access_token: string): Promise<RequestResult> {
        return super.callApi(ServiceNameSecondAPI.accountsMethod + id + '/profile', {
            headers: {
                'Authorization': `Bearer ${access_token}`
            },
        });
    }

    
    /** Получение истории операций с балансом аккаунта второго сервиса (название изменено) по Id
    *
    * @param {object} data - Данные для поиска 
    * @param {string} access_token - Настоящий access_token
    * @returns {Promise<RequestResult>} - Модель удаленного аккаунта
    */
    async getBalanceHistory(data: { id: string, params: any }, access_token: string): Promise<RequestResult> {
        const { id, params } = data;
        return super.callApi(ServiceNameSecondAPI.accountsMethod + id + '/balance-history', {
            headers: {
                'Authorization': `Bearer ${access_token}`
            },
            opts: { ...params }
        });
    }


    /***********************/
    /* * * * L O G S * * * */
    /***********************/
    
    /** Получение логов по сервису
    *
    * @param {any} params - Параметры для фильтрации и поиска логов 
    * @param {string} access_token - Настоящий access_token
    * @returns {Promise<any>} - Модели найденных логов и общее количество
    */
    async getServiceLogs(params: any, access_token: string) {
        return super.callApi(ServiceNameSecondAPI.logsMethod + 'service', {
            headers: {
                'Authorization': `Bearer ${access_token}`
            },
            opts: {
                ...params
            }
        }, "GET");
    }


    /** Получение логов по штриху
    *
    * @param {any} _data - Id штриха и параметры для фильтрации и поиска логов 
    * @param {string} access_token - Настоящий access_token
    * @returns {Promise<any>} - Модели найденных логов и общее количество
    */
    async getStreakLogs(_data: any, access_token: string) {
        const { id, params } = _data;
        return super.callApi(ServiceNameSecondAPI.logsMethod + id, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            },
            opts: {
                ...params
            }
        }, "GET");
    }
}