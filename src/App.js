import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import IsLoggedIn from './components/isLoggedIn';
import LoginPage from './pages/logInPage';
import Companies from './pages/books';
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/" exact component={IsLoggedIn(Books)} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;