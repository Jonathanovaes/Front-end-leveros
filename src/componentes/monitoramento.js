import GlobalStyles from "./monitoramentoStyle"
import { useEffect, useState } from "react"
import axios from "axios";
import SpinnerComponent from "./spinner";

function Monitoramento(){

    const [pedidos, setPedidos] = useState([])
    const [spinner, setSpinner] = useState(false)
    const [totalVendas, setTotalVendas] = useState(0)
    const [resumoStatus, setResumoStatus] = useState({
        qtdStatusProcessando: 0,
        qtdStatusPendente: 0,
        qtdStatusCancelado: 0,
        qtdStatusAprovado: 0,
        qtdTotalPedidos: 0,
    })

    useEffect(() => {
        axios.get(`http://localhost:4000/pedidos`)
          .then((response) => {
            setPedidos(response.data)
            console.log(pedidos)
            setSpinner(true)
          })
          .catch((err) => {
            console.log(err)
          });

          axios.get(`http://localhost:4000/pedidos/totalVendas`)
          .then((response) => {
            setTotalVendas(response.data)
          })
          .catch((err) => {
            console.log(err)
          });

          axios.get(`http://localhost:4000/pedidos/resumoStatus`)
          .then((response) => {
            setResumoStatus(response.data)
          })
          .catch((err) => {
            console.log(err)
          });
      }, [spinner]);

      if (!spinner) {
        return <SpinnerComponent/>
      }
      
      const statusColors = {
        APROVADO: '#005A64', 
        PENDENTE: '#2993CE', 
        PROCESSANDO: '#FFCE00', 
        CANCELADO: '#C73939', 
      };
      

    return(
        <>
        <GlobalStyles/>
        <div>
  <header>
    <img src="/logoNegative 1.png" alt="Leveros" />
    <label>MONITORAMENTO DE PEDIDOS</label>
    <a href="/"><button>SAIR</button></a>
  </header>
  <div id="container">
    <div id="status">
      <div className="titulo">
        <label>Status dos Pedidos</label>
      </div>
      <div id="totalStatus">
        <div className="tipoStatus">
          <label style={{fontSize: 25, color: '#FFCE00'}}>{resumoStatus.qtdStatusProcessando}</label>
          <label style={{fontSize: 14}}>Processando</label>
        </div>
        <div className="tipoStatus">
          <label style={{fontSize: 25, color: '#2993CE'}}>{resumoStatus.qtdStatusPendente}</label>
          <label style={{fontSize: 14}}>Pendente</label>
        </div>
        <div className="tipoStatus">
          <label style={{fontSize: 25, color: '#005A64'}}>{resumoStatus.qtdStatusAprovado}</label>
          <label style={{fontSize: 14}}>Aprovado</label>
        </div>
        <div className="tipoStatus">
          <label style={{fontSize: 25, color: '#C73939'}}>{resumoStatus.qtdStatusCancelado}</label>
          <label style={{fontSize: 14}}>Cancelado</label>
        </div>
        <div className="tipoStatus">
          <label style={{fontSize: 25}}>{resumoStatus.qtdTotalPedidos}</label>
          <label style={{fontSize: 14}}>Total</label>
        </div>
      </div>
    </div>
    <div id="total">
      <div className="titulo">
        <label>
          Total de vendas
        </label>
      </div>
      <div id="totalVendas">
        <label>{totalVendas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</label>
      </div>
    </div>
  </div>
  <div id="pedidos">
  {pedidos.map((resp) => (
  <div className="card" key={resp.id}>
    <div className="tituloPedido">
      <label>Pedido</label>
      <button>ACESSAR</button>
    </div>
    <div className="pedidoDetalhes">
      <label className="numero">Número</label>
      <label>{resp.numero}</label>
    </div>
    <div className="pedidoDetalhes">
      <label className="valor">Valor</label>
      <label>{resp.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</label>
    </div>
    <div className="pedidoDetalhes">
      <label className="statusPedido">Status</label>
      <label style={{ color: statusColors[resp.status] }}>
        {resp.status}
      </label>
    </div>
  </div>
))}

    
  </div>
</div>
        </>
    )
}

export default Monitoramento