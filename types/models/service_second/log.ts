export type ServiceNameSecondLogActionService = "ACCOUNT_ADD" | "ACCOUNT_DELETE" | "ACCOUNT_DUMP" | "ACCOUNT_GET" | "ACCOUNT_REFRESH" | "ACCOUNT_WIPE" | "ACCOUNT_DIE" | "ACCOUNT_REQUEST_BALANCE" | "ACCOUNT_REQUEST_PROFILE" | "ACCOUNT_REQUEST_HISTORY" | "GET_STATS" | "LOGS_SERVICE_DUMP" | "LOGS_ACCOUNT_DUMP";

export type ServiceNameSecondLogActionStreak = "STREAK_OPENED" | "STREAK_RELINK" | "STREAK_BALANCE_CHANGED";

export type ServiceNameSecondLogDumpFields = {
    data: ServiceNameSecondLogFields[];
    count: number;
}

export type ServiceNameSecondLogOrder = 'DESC' | 'ASC';

export type ServiceNameSecondLogType = "info" | "warning" | "error" | "debug";

export type ServiceNameSecondLogFields = {
    action: ServiceNameSecondLogActionService | ServiceNameSecondLogActionStreak;
    type: ServiceNameSecondLogType;
    message: string;
    meta: any;
    created_at: number;
}
