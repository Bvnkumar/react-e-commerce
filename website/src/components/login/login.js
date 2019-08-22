import React from 'react';
import './login.scss';

class LoginComponent extends React.Component {
    constructor() {
        super()
        this.state = { email: '', password: '' };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPassChange = this.onPassChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
        this.goToSignup = this.goToSignup.bind(this);

    }
    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    onPassChange(event) {
        this.setState({ password: event.target.value });
    }
    submitLogin(event) {
        var me = this;
        event.preventDefault();
        fetch('http://localhost:3001/auth/login', { method: "post", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state) }).
            then((res) => {
                return res.json();

            }).then(function (data) {
                console.log("data ", data);
                document.cookie = "token=" + data.token;
            })
    }
    goToSignup() {
        const { history } = this.props;
        history.push('/signup')
    }

    render() {
        return (
            <div className="container">
                <div className="loginBlock col-6">
                    <form noValidate>
                        <div className="row">
                            <div className="col-8 offset-2">
                                <div className="form-group">
                                    <label className="form-label">Username:</label>
                                    <input type="text" className="form-control" onChange={this.onEmailChange}></input>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 offset-2">
                                <div className="form-group">
                                    <label className="form-label">Password:</label>
                                    <input type="password" className="form-control" onChange={this.onPassChange}></input>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 offset-2">
                                <button className="btn btn-primary w-100" onClick={this.submitLogin}>Login</button>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-8 offset-2">
                                <button className="btn btn-primary w-100" onClick={this.goToSignup}>Signup</button>
                            </div>
                        </div>
                    </form>

                </div>


            </div>
        )
    }
}
export default LoginComponent;