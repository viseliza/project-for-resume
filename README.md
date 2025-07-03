# Панель администратора на Nuxt3 (public version)

## Вступление
В данной версии были переименнованы изменены важные данные на заглушки (например URL API было заменено на "https://example.com") из-за чего невозомжно протестировать проект. Но весь реализованный функционал представлен в том виде, в каком он находится в реальном проекте. Содержание:
1. Установка зависимостей
2. Развертывание dev сервера
3. Развертывание prod сервера
4. Структура проекта

## Установка зависимостей

Убедитесь что все зависимости установлены, для того чтобы проверить и установить их, введите одну из следующих команд:

```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

## Развертывание dev сервера

Чтобы запустить сервер на хосте `http://localhost:21000` - необходимо ввести одну из следующих команд:

```bash
npm run dev
# or
pnpm run dev
# or
yarn dev
# or
bun run dev
```

## Развертывание prod сервера

Для начала необходимо собрать приложение, это можно сделать одной из следующих команд:

```bash
npm run build
# or
pnpm run build
# or
yarn build
# or
bun run build
```

Запуск локального preview из настоящей сборки:

```bash
npm run preview
# or
pnpm run preview
# or
yarn preview
# or
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Структура проекта

```bash
├── api          # Функции и интерфейсы для работы с внешними и внутренними API
├── assest       # Статические ресурсы: изображения, шрифты, иконки и т.п.
├── components   # Переиспользуемые Vue-компоненты (UI-элементы)
├── composables  # Функции composition API (реактивные хуки и т.п.)
├── layouts      # Шаблоны макетов страниц (например: default.vue, admin.vue)
├── middlewares  # Промежуточные обработчики (напр. аутентификация, редиректы)
├── models       # Определения бизнес-моделей и типов данных
├── pages        # Страницы приложения (автоматическая маршрутизация)
├── plugins      # Плагины Nuxt/Vue (например: vee-validate, axios)
├── public       # Публичные ресурсы, доступные напрямую по URL
├── server       # Серверный код, API-эндпоинты, server middleware
├── store        # Vuex/Pinia хранилище состояния
├── types        # TypeScript-описания типов, интерфейсов и т.п.
├── utils        # Утилиты и вспомогательные функции
```