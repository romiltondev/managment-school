import School from '../../school.svg';
export function Login(){
    return(
        <div className="container">
            <div className="form-container">
                <div className="heading">
                    <img src={School} alt="logo"/>
                    <h3>Bem vindo</h3>
                    <p>Entre com a sua conta</p>
                </div>
                <form action="" method="" className="send-form">
                    <input type="email" placeholder="abc@email.com"/>
                    <input type="password" placeholder="Sua senha"/>
                    <button>Entrar</button>
                </form>
            </div>
        </div>
    )
}