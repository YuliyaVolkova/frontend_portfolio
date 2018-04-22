## Frontend для проекта Portfolio_Loftschool: сборка Webpack3 c HMR
### Посмотреть мой проект можно здесь: https://yuliyavolkova.github.io/portfolio_pages/

### **студент**:  Волкова Юлия
### **наставник**: Ивченко Антон
### **курс**: Продвинутый курс по WEB

### Main Setup

``` bash
# install dependencies
npm install
```

> для запуска Webpack сервера для разработки в режиме HMR:

``` bash
# serve with hot reload at localhost:8080
npm run start
```

> для запуска Webpack в режиме watch (будет писать выходные данные на жесткий диск в папку build):

``` bash
npm run watch
```

> для запуска Webpack в режиме сборки для продакшен:

``` bash
# build for production with minification
npm run build
```

Чтобы подключить Google Map нужно создать в корне проекта config.json, в котором прописать key вашей карты

````
{
  "mapKey": "<key>"
}
