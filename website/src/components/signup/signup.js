import React from 'react';
import './signup.scss';

class SignupComponent extends React.Component {
    constructor() {
        super()
        this.state = { firstname: '', lastname: '', email: '', password: '' };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPassChange = this.onPassChange.bind(this);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.submitSignup = this.submitSignup.bind(this);
        this.goToLogin = this.goToLogin.bind(this);

    }
    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    onPassChange(event) {
        this.setState({ password: event.target.value });
    }
    onFirstNameChange(event) {
        this.setState({ firstname: event.target.value });
    }
    onLastNameChange(event) {
        this.setState({ lastname: event.target.value });
    }
    submitSignup(event) {
        fetch('http://localhost:3001/auth/signup', { method: "post", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state) }).
            then((res) => console.log("res.json() ", res.json())
            )
    }
    goToLogin() {
        const { history } = this.props;
        history.push('/login');
    }

    render() {
        return (
            <div className="container">
                <div className="loginBlock col-6">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="form-group">
                                <label className="form-label">Firstname:</label>
                                <input type="text" className="form-control" onChange={this.onFirstNameChange}></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="form-group">
                                <label className="form-label">Lastname:</label>
                                <input type="text" className="form-control" onChange={this.onLastNameChange}></input>
                            </div>
                        </div>
                    </div>
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
                            <button className="btn btn-primary w-100" onClick={this.submitSignup}>Signup</button>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <button className="btn btn-primary w-100" onClick={this.goToLogin}>Login</button>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default SignupComponent;