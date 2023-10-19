// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');

#root {
    width: 100%;
    min-height: 100vh; 
    }

body{
    margin: 0;
    background-color: whitesmoke;
}
header {
height: 80px;
width: 100%;
background-color: #002D32;
display: flex;
align-items: center;
justify-content: space-between; 
font-family: Inter;
}

header img {
max-height: 80px;
}

header label {
color: white;
flex: 1; 
}

header button {
background-color: #73B1B2;
height: 40px;
width: 100px;
color: white;
border-radius: 4px;
border: none;
margin-right: 10px;
cursor: pointer;
}

#container{
display: flex;
margin: 25px;
font-family: Inter;
}

#status{
padding-top: 5px;
width: 650px;
height: 132px;
flex-shrink: 0;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
}

#total{
padding-top: 5px;
width: 300px;
height: 132px;
flex-shrink: 0;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
margin-left: auto;
}

.titulo{
margin: 5px;
text-align: center;
}

#totalStatus{
display: flex;
}

.tipoStatus {
margin: 25px;
display: flex;
flex-direction: column; 
align-items: center; 
}

.tipoStatus label {
text-align: center;
}

#totalVendas{
margin: 25px;
text-align: center;
color: #000;
font-family: Inter;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

#pedidos{
margin: 25px;
display: flex;
flex-wrap: wrap;
}

.card{
width: 230px;
height: 185px;
background-color: #002D32;
border-radius: 4px;
margin-right: auto;
margin-bottom: 12px;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
font-family: Inter;
font-size: 12px;
padding: 10px;
}

.tituloPedido{
margin-top: 10px;
margin-right: 5px;
margin-left: 5px;
margin-bottom: 5px;
display: flex;
align-items: center;
font-family: Inter;
}
.tituloPedido button{
margin-left: auto;
background-color: white;
color: #73B1B2;
border: solid 2px #73B1B2;
box-shadow: none;
border-radius: 4px;
padding-top: 10px;
padding-bottom: 10px;

}

.tituloPedido label{
font-size: 18px;
color: #005A64;
}

.pedidoDetalhes{
margin-top: 18px;
margin-left: 5px;
margin-right: 5px;
border-bottom: 1px solid #005A64;
padding-bottom: 5px;

}

.numero{
margin-right: 80px;
}

.valor{
margin-right: 96px;
}

.statusPedido{
margin-right: 88px;
}

@media (max-width: 768px) {
header {
flex-direction: column; 
text-align: center; 
height: 100px;
}
header img {
max-height: 60px; 
}
header label{
display: none;
}

header button {
margin: 10px auto; 
}

#container {
flex-direction: column; 
}

#status {
width: 100%; 
margin-bottom: 10px; 
}

#total {
width: 100%; 
}

.card {
width: 100%; 
margin-right: 0; 
}

#totalStatus {
max-width: 100%; 
overflow-x: scroll; 
}

}


`;

export default GlobalStyles;
