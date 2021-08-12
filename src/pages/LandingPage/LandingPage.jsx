import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import CategoryPage from '../CategoryPage/CategoryPage';

export default function LandingPage() {

  return (
    <>
        <main className="landing-page">
            <h1 className="landing-title">Sunset Seafood</h1>
            <p className="landing-title2"> • $4.99 Delivery Fee  •  20-30 Mins  •  Rating</p>
        </main>
        <div>
            <p className="landing-header">$$-Seafood-Meat-Vegan Friendly</p>
            <p className="landing-header">Serving Global</p>
            <h4 className="menu-all-day">Menu All Day</h4>
            <p className="landing-hour">9:00AM - 9:00PM</p>
            <nav className="landing-category">
                <Link>Appetizers and Snacks</Link>
                {/* we can add the #to an a tag to make it scroll to that part on the page */}
                <a href="#shrimp">Shrimps</a>&nbsp;&nbsp;
                <a href="#crab">Crab and Lobster</a>&nbsp;&nbsp;
                <Link>Fish</Link>&nbsp;&nbsp;
                <Link>Shell Fish</Link>&nbsp;&nbsp;
                <Link>Snake</Link>&nbsp;&nbsp;
                <Link>Insects</Link>&nbsp;&nbsp;
                <a href="#hotPot">Hot Pot</a>&nbsp;&nbsp;
                <Link>Beef</Link>&nbsp;&nbsp;
                <Link>Pork and Chicken</Link>&nbsp;&nbsp;
                <Link>Vegetable</Link>&nbsp;&nbsp;
            </nav>
            <hr></hr>
            <CategoryPage />
            

        </div>
       
    </>
    
    
  );
}