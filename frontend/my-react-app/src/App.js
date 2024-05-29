import React from 'react';
import './App.css';
import './generalRules.css';

function App() {
    return (
        <div className="General">
            <header className="App-header">
                <h1>Realm of Nayshia</h1>
                <nav className="Navbar">
                    <a href="/abilities" className="NavbarButton">Abilities</a>
                    <a href="/items" className="NavbarButton">Items</a>
                    <a href="/npcs" className="NavbarButton">NPCs</a>
                    <a href="/quests" className="NavbarButton">Quests</a>
                    <a href="/recipes" className="NavbarButton">Recipes</a>
                    <a href="/setBonuses" className="NavbarButton">Set Bonuses</a>
                </nav>
                <p>This page will be the home page for the app. It will have links to all the other app's pages.</p>
                <p>Besides linking to the other pages, this page will have a massive table with player data that will be obtained from the mongo database. There will be a search bar and filtration options to look through the table effectively.</p>
            </header>
        </div>
    );
}

export default App;