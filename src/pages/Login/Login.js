import School from '../../school.svg';
import './style.css'
export function Login(){
    return(
        <div className="container">
            <div className="form-container">
                <div className="heading">
                    <img src={School} alt="logo"/>
                    <h3>Bem vindo</h3>
                    <p className="paragraph">Entre com a sua conta</p>
                </div>
                <form action="" method="" className="send-form">
                    <div className="input-container">
                    <i class="fa-regular fa-envelope fa-lg"></i>
                    <input type="email" placeholder="abc@email.com" className="input-mail"/>
                    </div>
                    <div className="input-container">
                    <i class="fa-solid fa-lock fa-lg"></i>
                    <input type="password" placeholder="Sua senha" minlength="8" required className="input-password"/>
                    <i class="fa-solid fa-eye-slash fa-lg "></i>
                    </div>
                    
                    <button>Entrar</button>
                </form>
            </div>
        </div>
    )
}