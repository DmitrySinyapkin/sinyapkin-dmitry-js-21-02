import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { APP_EN } from './en/app';
import { APP_RU } from './ru/app';

i18next
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: APP_EN,
            },
            ru: {
                translation: APP_RU,
            }
        },
    });

    i18next.changeLanguage('ru');
    