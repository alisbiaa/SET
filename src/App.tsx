import React from 'react';
import './css/App.css';
import SET from "./components/SET";

function App() {
    return (
        // controllers
        <div className="bg-Isabelline">
            <div className="container mx-auto px-4 h-screen">
                <div className="grid grid-rows-6 grid-cols-4 gap-4 py-10 h-full">
                    <SET/>
                </div>
            </div>
        </div>
    );
}


export default App;
