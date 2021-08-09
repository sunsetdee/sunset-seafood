import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
export default function LandingPage() {

  return (
    <>
        <main className="landing-page">
            <h1 className="landing-title">Sunset Seafood</h1>
            <p className="landing-title2">$4.99 Delivery Fee  •  20-30 Mins  •  Rating</p>
        </main>
        <body>
            <p className="landing-header">$$-Seafood-Meat-Vegan Friendly</p>
            <p className="landing-header">Serving Global</p>
            <h4 className="menu-all-day">Menu All Day</h4>
            <p className="landing-hour">9:00AM - 9:00PM</p>
            <nav className="landing-category">
                <Link>Shrimps</Link>&nbsp;&nbsp;
                <Link>Crab</Link>&nbsp;&nbsp;
                <Link>Fish</Link>&nbsp;&nbsp;
                <Link>Shell Fish</Link>&nbsp;&nbsp;
                <Link>Exoctic Animal</Link>&nbsp;&nbsp;
                <Link>Beef</Link>&nbsp;&nbsp;
                <Link>Vegetable</Link>&nbsp;&nbsp;
            </nav>

        </body>
    </>
    
    
  );
}