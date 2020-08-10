import React from 'react';
import Header from './Views/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Agents from './Views/Agents';
import Maps from './Views/Maps';
import Weapons from './Views/Weapons';
import './App.css';
import background from './images/background.jpg';

function App() {
    return (
        <Router>
            <main>
                <div className="root">
                    <Header items={['Maps', 'Weapons', 'Agents']} />
                </div>
                <Route path="/" exact component={Home} />
                <Route path="/weapons" component={Weapons} />
                <Route path="/agents" component={Agents} />
                <Route path="/maps" component={Maps} />
            </main>
        </Router>
    );
}

export default App;

function Home() {
    return (
        <div className="content">
            <img className="background" src={background} alt="Valorant Background" />
        </div>
    );
}
