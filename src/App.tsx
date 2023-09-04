import "./App.css";

function App() {
    return (
        <div className="App">
            <h2>Modal Login Form</h2>

            <button>Login</button>

            <div id="id01" className="modal">
                <form className="modal-content animate" action="/action_page.php" method="post">
                    <div className="imgcontainer">
                        <span className="close" title="Close Modal">
                            &times;
                        </span>
                        <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                    </div>

                    <div className="container">
                        <label htmlFor="uname">
                            <b>Username</b>
                        </label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label htmlFor="psw">
                            <b>Password</b>
                        </label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" checked name="remember" /> Remember me
                        </label>
                    </div>

                    <div className="container">
                        <button type="button" className="cancelbtn">
                            Cancel
                        </button>
                        <span className="psw">
                            Forgot <a href="#">password?</a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
