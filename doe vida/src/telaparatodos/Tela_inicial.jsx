import React from 'react';
import NavBar from '../Navbar/NavBar';
import './Tela_inicial.css';

function Tela_inicial() {
    return (
        <div>
            <NavBar />
            <div className="container">
                <button>
                    <img className="perfil" src="./img/perfil (3).png" alt="Perfil" />
                </button>
            </div>

            <img className="fixa" src="./img/Rectangle.png" alt="Seja um doador" />

            <div className="body-opcoes">
                <div className="opcoesCadastro">
                    <h1>Selecione uma das opções abaixo para o Cadastro!</h1>
                    <div className="button-group">
                        <div className="button-wrapper">
                            <img src="./img/Sou_doador.png" alt="Doador" className="btn-image" />
                            <button className="button-opcoes">Sou Doador</button>
                        </div>
                        <div className="button-wrapper">
                            <img src="./img/Area_hospitalar.png" alt="Recebedor" className="btn-image" />
                            <button className="button-opcoes">Sou Recebedor</button>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="informacoes">
                    <div className="secao">
                        <h2>Informações</h2>
                        <ul className="linksFooter">
                            <li><a className="linkUm" href="#">Link 1</a></li>
                            <li><a className="linkDois" href="#">Link 2</a></li>
                            <li><a className="linkTres" href="#">Link 3</a></li>
                        </ul>
                    </div>
                </div>
                <div className="creditos">© 2024 Doe Vida. Todos os direitos reservados.</div>
            </footer>
        </div>
    );
}

export default Tela_inicial;
