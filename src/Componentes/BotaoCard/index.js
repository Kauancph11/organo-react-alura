import './Botao.css'

const BotaoCard = (props) => {
    return(
        <button className='botao'>{props.children}</button>
    )
}
export default BotaoCard;