import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');

#root {
width: 100%;
min-height: 100vh; 
display: flex;
}


body {
margin: 0;
display: flex;
}

#sidebar {
width: 30%; 
height: 100vh;
flex-shrink: 0;
background-image: url('/fundo-tela-login.png');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
position: relative;
}

h2 {
width: 406px;
height: 59px;
color: #000;
font-family: 'Inter', sans-serif; 
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
label {
width: 201px;
height: 34px;
font-family: 'Inter', sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 400; 
line-height: normal;
color: #0c0c0c; 
}

#sidebar::before {
content: "";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 90, 100, 0.30);
}


#container {
width: 500px;
background: white;
padding: 20px;
border-radius: 5px;
margin: 40px 40px 0 150px; 
}        

#login-form {
margin-left: 50px;
width: 300px;
}

input[type="text"],
input[type="password"] {
width: 100%;
padding: 10px;
margin: 10px 0;
border: 1px solid #000000;
border-radius: 5px;
}

button {
background: #002D32;
color: white;
padding: 10px 20px;
border: none;
border-radius: 0;
width: 120px;
cursor: pointer;
}

.password-toggle-button {
background: #002D32;
border: 1px solid #ccc;
color: white;
cursor: pointer;
position: absolute;
right: 0;
left: 245px;
top: 14px;
bottom: 0;
width: 70px;
height: 30px;
text-align: center;
line-height: 10px; 
}

.password-container {
position: relative;
}


@media (max-width: 768px) {
body {
flex-direction: column; 
align-items: center; 
}

#sidebar {
display: none; 
}

#container {
width: 100%; 
margin: 0; 
}

h2 {
font-size: 18px; 
}
}
`;

export default GlobalStyles;