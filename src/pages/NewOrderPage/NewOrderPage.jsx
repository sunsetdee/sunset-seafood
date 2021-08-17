import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewOrderPage.css';
import CategoryIndexPage from '../CategoryIndexPage/CategoryIndexPage';

export default function NewOrderPage() {

  return (
    <>
        <main className="landing-page">
            <h1 className="landing-title">Sunset Seafood</h1>
            <p className="landing-title2"> • $4.99 Delivery Fee  •  20-30 Mins  • ★★★★★</p>
        </main>
        <div>
            <p className="landing-header">$$-Seafood-Meat-Vegan Friendly</p>
            <p className="landing-header">Serving Global</p>
            <h4 className="menu-all-day">Menu All Day</h4>
            <p className="landing-hour">9:00AM - 9:00PM</p>
            <nav className="landing-category">
                {/* we can add the # to an a tag and give an ID to it on the CategoryIndex to make it scroll to that part on the page */}
                <a href="#shrimp">Shrimps</a>&nbsp;&nbsp;
                <a href="#crab">Crab and Lobster</a>&nbsp;&nbsp;
                <a href="#fish">Fish</a>&nbsp;&nbsp;
                <a href="#shellFish">Shell Fish</a>&nbsp;&nbsp;
                <a href="#snake">Snake</a>&nbsp;&nbsp;
                <a href="#insect">Insects</a>&nbsp;&nbsp;
                <a href="#hotPot">Hot Pot</a>&nbsp;&nbsp;
                <a href="#beef">Beef</a>&nbsp;&nbsp;
                <a href="#pork">Pork and Chicken</a>&nbsp;&nbsp;
                <a href="#vegetable">Vegetable</a>&nbsp;&nbsp;
            </nav>
            <hr></hr>
            <CategoryIndexPage />
            

        </div>
       
    </>
    
    
  );
}