import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import React from 'react';

function ValidatePage() {
    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [authenticationCode, setAuthenticationCode] = useState('');

    const handleRegisterConfirmation = async () => {
        try {
            console.log('handleRegisterConfirmation');
            console.log(username);
            console.log(authenticationCode);

             await Auth.confirmSignUp(username, authenticationCode);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    const styles = `
      .validate-container {
        text-align: center;
        margin: 20px;
      }

      .form-group {
        margin: 10px 0;
      }

      label {
        display: block;
        font-weight: bold;
      }

      input {
        width: 100%;
        padding: 8px;
        margin: 5px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      .validate-button {
        background-color: #007BFF;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      .cancel-button {
        background-color: #fff;
        border: 1px solid #007BFF;
        color: #007BFF;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
      }
    `;

    return (
        <div>
            <h1>Validate</h1>
            <div className="form-group">
                <label htmlFor="username">Email Id</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter Email Id"
                    value={username}
                    onChange={(evt) => setUserName(evt.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="authCode">Authentication Code</label>
                <input
                    type="text"
                    id="authCode"
                    placeholder="Enter Authentication Code"
                    value={authenticationCode}
                    onChange={(evt) => setAuthenticationCode(evt.target.value)}
                />
            </div>

            <button onClick={handleRegisterConfirmation} className="validate-button">
                Validate &gt;&gt;
            </button>
            <Link to='/'>
                <button className="cancel-button">Cancel</button>
            </Link>
            <style>{styles}</style>
        </div>
    );
}

export default ValidatePage;
