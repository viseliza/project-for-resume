import type { ServiceNameSecondLogFields } from "~/types";

export class ServiceNameSecondLog {
    action: string | null;
    type: string;
    message: string;
    meta: any;
    created_at: number;

    constructor(data: ServiceNameSecondLogFields) {
        this.action = data.action;
        this.type = data.type;
        this.message = data.message;
        this.meta = data.meta;
        this.created_at = data.created_at;
    }
}