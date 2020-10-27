This project is developed using React, Bootstrap, WebSocket.

Chanllenge Description: A calculator website which logs calculations as they happen and shares those calculations with everyone connected to the website. For example, user A and user B go to your site at the same time. User A calculates "5 + 5", which equals "10". This is logged below the calculator as "5+5 = 10". User B is updated about this calculation right after user A posts it. Now, user B calculates "34". This calcs to 12 and displays "34=12" right below the prior calculation. User A sees this update immediately after user B posts it. Results should remain between sessions. Only show the last 10 calculations descending from most recent to oldest.

Demo: https://dhartim.github.io/SezzleCalculator/

## Tech Stack
1. I have used websocket to broadcast message to everyone on the session who has joined.
2. Used React for frontend with bootstrap to make it responsive.
3. Websocket server is deployed on heroku.
4. Server code can be found on this github repositiory: https://github.com/Dhartim/sezzleServer

## How to Run Application
1. Download code from this repository.
2. Run ```npm install``` to install all dependencies.
3. Once dependencies are install start application using ``` npm start ``` command.


