import React from 'react'
import './Cadastro_hospital.css'

function Hospital_cadastro() {
  return (
    <div className='container-hospital'>
     
 <div className='form-image-hospital'>
<img src="./img/cadastro_hospital.png"/>
</div>
<div className='form-hospital'>
    <div className='form-header-hospital'>
        <div className='title'>
            <h1>Novo hospital</h1>
        </div>
        <div className='login-button-hospital'>
            <button type="button" >Entrar</button>
        </div>
    </div>

    <div className='input-group-hospital'>
        <div className='primeiraColuna'>
            <div className='input-box-hospital'>
                <label htmlFor="nome do hospital">Nome do hospital</label>
                <input id="nome do hospital" type="text" name="nome do hospital" required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="email">Email</label>
                <input id="EmailHospital" type="email" name="email" required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="number">Telefone</label>
                <input id="number" type="tel" name="number" placeholder="(xx) xxxx-xxxx" required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="numero">Número</label>
                <input id="numero" type="text" name="numero" required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="cidade">Cidade</label>
                <input id="cidade" type="text" name="cidade" required/>
            </div> 

            <div className='input-box-hospital'>
                <label htmlFor="pais">País</label>
                <input id="pais" type="text" name="pais" required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="responsavel">Responsável</label>
                <input id="responsavelDoperfil" type="text" name="responsavel" placeholder="João Cardoso" required/>
            </div>

        </div>

        <div className='segundaColuna'>
            <div className='input-box-hospital'>
                <label htmlFor="site">Website</label>
                <input id="site" type="text" name="site" required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="password">Senha</label>
                <input id="password" type="password" name="password" required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="cep">CEP</label>
                <input id="cep" type="text" name="cep" required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="bairro">Bairro</label>
                <input id="bairro" type="text" name="bairro" required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="estado">Estado</label>
                <input id="estado" type="text" name="estado" required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="cnpj">CNPJ</label>
                <input id="cnpj" type="text" name="cnpj" required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="equipe">Equipe</label>
                <input id="equipe" type="text" name="equipe" placeholder="equipe principal" required/>
            </div>

        </div>
        
    </div>

    <div className='confirm-input-hospital'>
        <input type="checkbox" id="confirmacao" name="confirmacao" value="confirmacao"/>
        <label htmlFor="confirmacao">
            Ao confirmar os dados preenchidos do formulário acima, você concorda com os nossos
            <button>Termos de Uso</button> e nossa
            <button>Política de Privacidade</button>.
        </label>
    </div>

    <div className='continue-button-hospital'>
        <button >Continuar</button>
    </div>
</div> 
      
    </div>
  )
}

export default Hospital_cadastro

