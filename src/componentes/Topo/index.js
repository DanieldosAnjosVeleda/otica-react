import './style.css'
export default function Topo(){
    return(
        <header>
            <div className='limitar-secao topo'>
                <img src='assets/logo1.png' alt='imagem de uma coruja à esquerda e o nome da ótica à direita' title='Logo'/>
                
                <nav className='links'>
                <a href='#produtos'>PRODUTOS</a>
                <a href='#sobre'>SOBRE</a>
                <a href='#contato'>CONTATO</a>
                </nav>
            </div>
        </header>
    );
}