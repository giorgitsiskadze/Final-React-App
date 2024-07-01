import React from "react";
import image from "../images/key.png";

const About = () => {
    return(
        <>
           <div className="fav">
            <h1 className="m-2 center">About Us</h1><br />
                <div className="center"> 
                    <div>About Us Welcome to MovieSearcher,
                    your ultimate destination for discovering and exploring movies! <br />
                    At MovieSearcher, we are passionate about cinema and dedicated to providing 
                    you with a seamless and enriching movie search experience.</div>
                </div>
            {/* This is the web application where you can find movies. */}

            <div className="end">
            <img className="aboutimg m-5"  src={image}>
            </img>
                
                <p className="aboutp m-5">
                <h2 className="m-5">General componenets</h2>
                
                Comprehensive Database: With an extensive database of movies from around the world, you can easily search for any title <br/><br/>
                Detailed Information: Get detailed information about each movie, including plot summaries, cast and crew, release dates, ratings, and reviews. <br/><br/>
                Personalized Recommendations: Discover new movies tailored to your tastes with our advanced recommendation engine. <br/><br/>
                User Reviews: Read and write reviews to share your thoughts and experiences with the community. <br/><br/>
                Watchlist: Create and manage your own watchlist to keep track of movies you want to see. <br/><br/>
                Latest News: Stay up-to-date with the latest news and trends in the world of cinema. 
                </p>
            </div>
           </div>
        </>
    )
}

export default About;
