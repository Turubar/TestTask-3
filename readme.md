Для запуска проекта потребуется ASP.NET 8, React.JS, PostgreSQL<br /><br />
В папке с backend проектом, в файле appsettings.json, в строке "Database" нужно заменить строку подключения к PostgreSQL.<br />
Возможно, также потребуется подправить порт frontend приложения в строке "Frontend".<br />
<br />
Пример:<br />
"Database": "Server=localhost;Port=5432;Database=orders_db;User Id=postgres;Password=123456;",<br />
"Frontend": "http://localhost:5173"<br />
<br />
Порт backend приложения должен быть "http://localhost:5062", если по каким-то причинам он другой, то его можно поменять в файле launchSettings.json, в профиле http => applicationUrl
<br />
<br />
Запуск:<br />
1) Запустить backend приложение с помощью Visual Studio (http-профиль)<br />
2) Запустить frontend приложение с помощью Visual Studio Code (в терминале перейдите к папке my-order-service => npm run dev)
