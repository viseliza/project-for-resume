import type { 
    ServiceNameSecondAccountCreateFields, 
    ServiceNameSecondAccountDumpFields, 
    ServiceNameSecondAccountFields, 
    ServiceNameSecondAccountInfoFields 
} from "~/types";

/** Модель аккаунта
 * @class Account
 */
export class ServiceNameSecondAccount {
    id: string;
    login: string;
    password: string;
    token: string;
    device_id: string;
    region_id: number;
    barcode: string;
    balance: number;
    opened: boolean;
    opened_at: number;
    rechecked_at: number;
    created_at: number;
    updated_at: number;

    constructor(data: ServiceNameSecondAccountFields) {
        this.id = data.id;
        this.login = data.login;
        this.password = data.password;
        this.token = data.token;
        this.device_id = data.device_id;
        this.region_id = data.region_id;
        this.barcode = data.barcode;
        this.balance = data.balance;
        this.opened = data.opened;
        this.opened_at = data.opened_at;
        this.rechecked_at = data.rechecked_at;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
    }
}

/** Модель полученных данных после запроса на создание аккаунта
 * @class AccountCreate
 */
export class ServiceNameSecondAccountCreate {
    login: string;
    password: string;
    
    constructor(data: ServiceNameSecondAccountCreateFields) {
        this.login = data.login;
        this.password = data.password;
    }
}

/** Модель полученных данных после запроса на информацию об аккаунте
 * @class AccountInfo
 */
export class ServiceNameSecondAccountInfo {
    balance: number;
    barcode: string;
    phone: string;

    constructor(data: ServiceNameSecondAccountInfoFields) {
        this.balance = data.balance;
        this.barcode = data.barcode;
        this.phone = data.phone;
    }
}

/** Модель полученных данных после запроса на дамп аккаунтов
 * @class AccountDump
 */
export class ServiceNameSecondAccountDump {
    data: ServiceNameSecondAccount[];
    count: number;

    constructor(data: ServiceNameSecondAccountDumpFields) {
        this.data = data.data;
        this.count = data.count;
    }
}

/** Модель полученных данных после удаления аккаунтов
 * @class ServiceNameSecondAccountWipe
 */
export class ServiceNameSecondAccountWipe {
    status: string;

    constructor(status: string) {
        this.status = status;
    }
}