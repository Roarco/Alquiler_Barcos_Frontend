import Logo from '../assets/logos/logo.svg';
import '../styles/Login.css'

const Login = () => {
    return (
        <div className="container">
            <div className="instructive">
                <div className="instructive__img">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
            <div className="main">
                <form action className="main__form">
                    <h1>Log In</h1>
                    <label htmlFor="username">Username</label>
                    <div className="main__input-icon">
                        <input id="username" type="text" placeholder="Username" required />
                    </div>
                    <label htmlFor="password">Password</label>
                    <div className="main__input-icon">
                        <input id="password" type="password" placeholder="Password" required />
                    </div>
                    <button type="button" id="btn-login">Log-in</button>
                    <span>Don't have an account?
                        <a href="./pages/sign-in.html">Sign-in</a>
                    </span>
                </form>
            </div>
        </div>

    );
}

export default Login;
