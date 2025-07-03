import type { ServiceNameSecondAccount } from "~/models";

export type ServiceNameSecondAccountFields = {
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
}

export type ServiceNameSecondAccountCreateFields = {
    login: string;
    password: string;
}

export type ServiceNameSecondAccountInfoFields = {
    balance: number;
    barcode: string;
    phone: string;
}

export type ServiceNameSecondAccountDumpFields = {
    data: ServiceNameSecondAccount[];
    count: number;
}