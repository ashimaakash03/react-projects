const HeroSection = () => {
  return (
    <main>
      <div className="hero-content">
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>
          YOUR FEET DESERVES THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
          SHOES. YOUR FEET DESERVES THE BEST AND WE ARE HERE TO HELP YOU WITH
          OUR SHOES.
        </p>
        <div>
          <button>Shop Now</button>
        </div>
        <p>
          Also Available on:
          <img
            src="src/assets/flipkart-logo.png"
            alt="flipkart"
            height="30px"
            width="30px"
          />
          <img
            src="src/assets/amazon-logo.PNG"
            alt="amazon"
            height="30px"
            width="30px"
          />
        </p>
      </div>
      <div className="hero-image">
        <img
          src="src/assets/heroimage.jpg"
          alt="sneakers"
          height="auto"
          width="300px"
        />
      </div>
    </main>
  );
};

export default HeroSection;
