import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
					<div className="gap-4 d-flex flex-sm-row flex-column row justify-content-center">
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
					<Footer />				
			</div>
			
			
		</>
	);
};

export default Home;
