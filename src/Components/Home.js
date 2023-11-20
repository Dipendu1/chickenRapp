import React from 'react'; 
import './/Home.css'
const HomePage = () => {
  return (
    <div>
            <div className="container">
                <h1>CHICKEN RAPP</h1>
                <h3>Chick-a-las Cage</h3>

                <div className="article">
                    <img
                        src="https://thissillygirlskitchen.com/wp-content/uploads/2020/05/Southern-Fried-Chicken-12.jpg"
                        alt="chicken"
                        className="article-image"
                        height={600} width={800}
                    />
                    <p>This southern fried chicken is a thing dreams are made of. Crispy on the outside, juicy and tender on the inside, the perfect chicken recipe.</p>
                    <p>Me being I added a little something-something to the mix to make this chicken dinner (or lunch or snack, I don’t judge) over the top!</p>
                    <h2>Featured Recipe</h2>
                    <p>
                        Try our mouthwatering recipe that will tantalize your taste buds.
                    </p>
                </div>

                <div className="article">
                    <img
                        src="https://thissillygirlskitchen.com/wp-content/uploads/2020/05/Southern-Fried-Chicken-20.jpg"
                        alt="Exquisite Cuisine"
                        className="article-image"
                        height={600} width={800}
                    />
                    <h2>Exquisite Cuisine</h2>
                    <p>
                        Explore a world of flavors with our exquisite cuisine collection.
                    </p>
                </div>

                <div className="box special-offer">
                    <h2>Special Offer</h2>
                    <p>Don't miss our limited-time offer on your favorite dishes.</p>
                </div>

                <div className="box events-tastings">
                    <h2>Events and Tastings</h2>
                    <p>Join us for exciting food events and tastings near you.</p>
                </div>
            </div>
        </div >

  );
}

export default HomePage;