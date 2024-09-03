Для запуска проекта потребуется ASP.NET 8, React.JS, PostgreSQL

1) В папке с backend проектом, в файле appsettings.json, в строке "Database" нужно заменить строку подключения к PostgreSQL. Возможно, также потребуется подправить порт frontend приложения в строке "Frontend".
<br />
Пример:<br />
"Database": "Server=localhost;Port=5432;Database=orders_db;User Id=postgres;Password=123456;",
"Frontend": "http://localhost:5173"<br />
<br />
Запуск:<br />
1) Запустить backend приложение с помощью Visual Studio<br />
2) Запустить frontend приложение с помощью Visual Studio Code (в терминале перейдите к папке my-order-service => npm run dev)
