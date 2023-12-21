import './Footer.css'

const Footer = () => {

    return (
        <section className='footer'>
            <ul>
                <li>
                    <a>
                        <img src='/imagens/fb.png' alt='Logo do Facebook' />
                    </a>
                </li>

                <li>
                    <a>
                        <img src='/imagens/tw.png' alt='Logo do Twitter' />
                    </a>
                </li>

                <li>
                    <a>
                        <img src='/imagens/ig.png' alt='Logo do Instagram' />
                    </a>
                </li>
            </ul>

            <div className='logo'>
                <img src='/imagens/logo.png' alt='Logo da Organo' />
            </div>

            <div className='texto'>
                <p>Desenvolvido por Alura</p>
            </div>

        </section>
    )
}
export default Footer;