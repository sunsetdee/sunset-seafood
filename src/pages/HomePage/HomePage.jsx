import './HomePage.css';

export default function HomePage() {
    return(
        <div>
        <div className="home-page-div">Please login or sign up to place an order ↑↑↑</div>
        <h1>Welcome To Sunset Seafood</h1>  
        <h3>Where we serve the freshest seafood and other ingredients</h3>
            <div className="homepage-video-div">
            {/* autoPlay is for playing video, muted is for muting the video, it wouldn't auto play without muted. loop is for replaying the video over and over, control is for users to control the video*/}
            <div><video className="homepage-video" autoPlay muted loop controls src="https://wheresthepartyapp-sunset.s3.us-west-1.amazonaws.com/yellow+sand+seafood+market.mp4"/></div>
            <div><video className="homepage-video" autoPlay muted loop controls src="https://wheresthepartyapp-sunset.s3.us-west-1.amazonaws.com/yellow+sand+seafood+market+3.mp4" /></div>
            <div><video className="homepage-video" autoPlay muted loop controls src="https://wheresthepartyapp-sunset.s3.us-west-1.amazonaws.com/yellow+sand+seafood+market+2.mp4" /></div>
            <div><video className="homepage-video" autoPlay muted loop controls src="https://wheresthepartyapp-sunset.s3.us-west-1.amazonaws.com/thai+jumping+shrimps.mp4" /></div>
            <div><video className="homepage-video" autoPlay muted loop controls src="https://wheresthepartyapp-sunset.s3.us-west-1.amazonaws.com/thai+live+prawns.mp4" /></div>
            <div><video className="homepage-video" autoPlay muted loop controls src="https://wheresthepartyapp-sunset.s3.us-west-1.amazonaws.com/thai+live+prawns+2.mp4" /></div>
            <div><video className="homepage-video" autoPlay muted loop controls src="https://wheresthepartyapp-sunset.s3.us-west-1.amazonaws.com/snake+in+cage.mp4" /></div>
            <div><video className="homepage-video" autoPlay muted loop controls src="https://wheresthepartyapp-sunset.s3.us-west-1.amazonaws.com/shark+fin+soup+3.mp4" /></div>
            <div><video className="homepage-video" autoPlay muted loop controls src="https://wheresthepartyapp-sunset.s3.us-west-1.amazonaws.com/bull+penis+soup.mp4" /></div>
            <div><video className="homepage-video" autoPlay muted loop controls src="https://wheresthepartyapp-sunset.s3.us-west-1.amazonaws.com/thai+shark+fin+soup1.mp4" /></div>
            <div><video className="homepage-video" autoPlay muted loop controls src="https://wheresthepartyapp-sunset.s3.us-west-1.amazonaws.com/viet+crab+video.mp4" /></div>
            </div>
        </div>
    )
}