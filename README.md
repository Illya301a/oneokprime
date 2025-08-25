# Vania Website

Сайт Ванька с красивым дизайном и анимациями.

## 🚀 Развертывание на GitHub Pages

### Шаг 1: Установите зависимости
```bash
npm install
```

### Шаг 2: Установите gh-pages
```bash
npm install gh-pages --save-dev
```

### Шаг 3: Обновите homepage в package.json
Замените `yourusername` на ваше имя пользователя GitHub:
```json
"homepage": "https://yourusername.github.io/vania"
```

### Шаг 4: Соберите и разверните
```bash
npm run build
npm run deploy
```

### Шаг 5: Настройте GitHub Pages
1. Перейдите в настройки репозитория на GitHub
2. Найдите раздел "Pages"
3. Выберите источник "Deploy from a branch"
4. Выберите ветку "gh-pages" и папку "/ (root)"
5. Нажмите "Save"

## 🛠️ Локальная разработка

```bash
npm start
```

## 📁 Структура проекта

```
my-app/
├── public/
│   ├── photos/          # Фотографии для слайдера
│   └── config/          # Конфигурационные файлы
├── src/
│   ├── components/      # React компоненты
│   └── photos/          # Логотип и другие изображения
└── package.json
```

## 🎨 Особенности

- Фиолетовая цветовая схема
- Анимированные кнопки
- Адаптивный дизайн
- Слайдер с изображениями
- Поддержка темной темы
