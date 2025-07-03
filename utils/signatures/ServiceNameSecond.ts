import serviceNameSecond from '~/assets/images/logos/service_second.png';
import type { SignatureStrategy } from "~/types";
import type { SignatureAPI } from "~/api";

export class ServiceNameSecond implements SignatureStrategy {
    getTitle() {
        return 'Второй сервис (название изменено)';
    }

    getAPICall(api: SignatureAPI) {
        return api.serviceNameSecond;
    }

    getParams(args = null): Record<string, any> {
        return {
            'url': {
                example: 'https://example.com/api/v1/users/customer/auth',
                type: 'string',
                required: true,
            },
            'ts': {
                example: '1719049200',
                type: 'number',
                required: false,
            },
        }
    }

    getDescription() {
        return 'Сигнатура для работы с API Второй сервис (название изменено)';
    }

    getStyle() {
        return {
            icon: serviceNameSecond,
            color: '#1f64b2'
        }
    }
}
