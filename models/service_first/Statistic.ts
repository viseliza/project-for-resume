import type { StatisticData } from "~/types";

/** Модель статистики первого сервиса (название изменено)
 * 
 * @param {any}   param.account
 * @param {any}   param.balances
 * @param {any}    param.streaks
 */
export class Statistic {
    accounts;
    balance;
    streaks;

    /** Конструктор
     * 
     * @param {any} opts 
     */
    constructor(opts: StatisticData) {
        this.accounts = opts.accounts;
        this.balance  = opts.balance;
        this.streaks  = opts.streaks;
    }

}