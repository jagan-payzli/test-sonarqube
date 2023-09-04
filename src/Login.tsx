import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const handleLogin = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        console.log({ email, password });
    };
    return (
        <div>
            <form>
                <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} type="email" />
                <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} type="password" />
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};

export default Login;
