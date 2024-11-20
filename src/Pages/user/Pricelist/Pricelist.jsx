import React from "react";
import { Helmet } from "react-helmet";
import "./PriceList.css";
// Component untuk Carousel
const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      {/* <div className="carousel-indicators">
        {[...Array(4)].map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div> */}
      <Helmet>
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />

        {/* Popper.js */}
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-qfVTN0HEqJHXIQw0DBdIOZZACaOi/1w1MQowxHGT2Efj8Z9wYe8jvRyME7PQt7Hd"
          crossorigin="anonymous"
        ></script>

        {/* Bootstrap JS */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
          integrity="sha384-A/Oo3SKtH7ANmGc+mQftEps5cGn0Mo0z8JJhx7jV3/gsV2AfjnNzX7FLoxtT6kk/"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <div className="carousel-inner">
        {[
          { imgSrc: "/assets/images/img/slider mobil - toyota fortuner.png", alt: "Toyota Fortuner" },
          { imgSrc: "/assets/images/img/slider mobil - honda crv.png", alt: "Honda CRV" },
          { imgSrc: "/assets/images/img/slider mobil - toyota avanza.png", alt: "Toyota Avanza" },
          { imgSrc: "/assets/images/img/slider mobil - toyota alpard.png", alt: "Toyota Alpard" },
        ].map((slide, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={slide.imgSrc} className="d-block w-100" alt={slide.alt} />
            <div className="carousel-caption d-none d-md-block">
              <div className="button-wrapper">
                <button className="c-button">Sewa</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

// Car data to be displayed in cards
const vehicles = {
  mpv: [
    {
      name: "Toyota Avanza",
      rating: 4.6,
      passengers: 7,
      transmission: "Ganda",
      airConditioner: true,
      doors: 4,
      price: 400000,
      imageUrl: "/assets/images/img/toyota-avanza, Property 2=black.png",
    },
    {
      name: "Mitsubisi Xpander",
      rating: 4.7,
      passengers: 7,
      transmission: "Ganda",
      airConditioner: true,
      doors: 4,
      price: 450000,
      imageUrl: "/assets/images/img/misubisi-expander, Property 2=gray.png",
    },
    {
      name: "Suzuki Ertiga",
      rating: 4.6,
      passengers: 7,
      transmission: "Ganda",
      airConditioner: true,
      doors: 4,
      price: 400000,
      imageUrl: "/assets/images/img/suzuki-ertiga, Property 2=04.png",
    },
    {
      name: "Daihatsu Xenia",
      rating: 4.6,
      passengers: 7,
      transmission: "Ganda",
      airConditioner: true,
      doors: 4,
      price: 400000,
      imageUrl: "/assets/images/img/daihatsu-sirion, Property 2=01.png",
    },
  ],
  cityCar: [
    {
      name: "Honda CRV",
      rating: 4.5,
      passengers: 5,
      transmission: "Auto",
      airConditioner: true,
      doors: 4,
      price: 400000,
      imageUrl: "/assets/images/img/honda-crv, Property 2=02.png",
    },
    {
      name: "Suzuki Ignis",
      rating: 4.7,
      passengers: 5,
      transmission: "Auto",
      airConditioner: true,
      doors: 4,
      price: 350000,
      imageUrl: "/assets/images/img/suzuki-ignis, 01.png",
    },
    {
      name: "Daihatsu Sirion",
      rating: 4.8,
      passengers: 5,
      transmission: "Auto",
      airConditioner: true,
      doors: 4,
      price: 350000,
      imageUrl: "/assets/images/img/daihatsu-sirion, Property 2=01.png",
    },
    {
      name: "Honda Brio",
      rating: 4.7,
      passengers: 5,
      transmission: "Auto",
      airConditioner: true,
      doors: 4,
      price: 350000,
      imageUrl: "/assets/images/img/honda-brio, Property 2=04.png",
    },
  ],
  luxuryCar: [
    {
      name: "Lexus LM",
      rating: 4.7,
      passengers: 4,
      transmission: "Auto",
      airConditioner: true,
      doors: 4,
      price: 1000000,
      imageUrl: "/assets/images/img/lexus lm, Property 2=gray.png",
    },
    {
      name: "Toyota Alpard",
      rating: 4.8,
      passengers: 7,
      transmission: "Auto",
      airConditioner: true,
      doors: 4,
      price: 1000000,
      imageUrl: "/assets/images/img/toyota-alpard, Property 2=01.png",
    },
    {
      name: "Mercedes Benz",
      rating: 4.9,
      passengers: 4,
      transmission: "Auto",
      airConditioner: true,
      doors: 4,
      price: 1000000,
      imageUrl: "/assets/images/img/Mercedes-Benz S-Class.png",
    },
    {
      name: "BMW 7 Series",
      rating: 4.8,
      passengers: 4,
      transmission: "Auto",
      airConditioner: true,
      doors: 4,
      price: 1000000,
      imageUrl: "/assets/images/img/bmw i7, Property 2=black.png",
    },
  ],
  twoWheelers: [
    {
      name: "Honda Vario 150",
      rating: 4.7,
      passengers: 2,
      transmission: "Auto",
      fuelEfficiency: "±45-48 km/liter",
      engine: "150cc",
      price: 150000,
      imageUrl: "/assets/images/img/vario-150, Property 2=01.png",
    },
    {
      name: "Yamaha NMAX 155",
      rating: 4.8,
      passengers: 2,
      transmission: "Auto",
      fuelEfficiency: "±40-43 km/liter",
      engine: "155cc",
      price: 180000,
      imageUrl: "/assets/images/img/yamaha-nmax-155, Property 2=01.png",
    },
    {
      name: "Vespa GTS 300",
      rating: 4.9,
      passengers: 2,
      transmission: "Auto",
      fuelEfficiency: "±25-30 km/liter",
      engine: "300cc",
      price: 210000,
      imageUrl: "/assets/images/img/vespa-gts-300, Property 2=02.png",
    },
    {
      name: "U.E-Motor MX1200",
      rating: 4.9,
      passengers: 2,
      transmission: "Auto",
      fuelEfficiency: "±50-60 km/full",
      engine: "1200w",
      price: 180000,
      imageUrl: "/assets/images/img/united-e-motor-mx1200, Property 2=gray.png",
    },
  ],
};

const VehicleCard = ({ name, rating, passengers, transmission, airConditioner, doors, price, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p className="rating">
        ⭐ {rating} ({Math.floor(Math.random() * 1000)})
      </p>
      <ul className="features">
        <li>
          <i className="fas fa-user"></i> {passengers} Penumpang
        </li>
        <li>
          <i className="fas fa-cogs"></i> {transmission}
        </li>
      </ul>
      <ul className="features">
        {airConditioner && (
          <li>
            <i className="fas fa-snowflake"></i> Air Conditioner
          </li>
        )}
        <li>
          <i className="fas fa-door-open"></i> {doors} Pintu
        </li>
      </ul>
      <p className="price">
        <span className="price-label">Harga</span>
        <span className="price-value">
          <strong>Rp {price.toLocaleString()}</strong>
          <span className="price-duration">/hari</span>
        </span>
      </p>
      <button className="rent-button">
        <a href="">Sewa</a>
      </button>
    </div>
  );
};

const VehicleSection = ({ title, description, vehicles }) => {
  return (
    <div className="vehicle-section">
      <div className="vehicle-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="vehicle-cards">
        {vehicles.map((vehicle, index) => (
          <VehicleCard key={index} {...vehicle} />
        ))}
      </div>
    </div>
  );
};

const CarRental = () => {
  return (
    <div className="isi-wrapper">
      <Carousel />
      <div className="isi">
        <VehicleSection
          title="Multi-Purpose Vehicle"
          description="Ideal untuk keluarga atau grup karena ruangnya yang luas dan mampu menampung hingga 7 penumpang. MPV adalah pilihan tepat untuk perjalanan jauh dengan banyak barang bawaan."
          vehicles={vehicles.mpv}
        />
        <VehicleSection
          title="City Car"
          description="Cocok untuk berkendara dalam kota karena ukurannya yang kecil dan irit bahan bakar. Mobil ini pas untuk perjalanan singkat atau jalan-jalan santai di perkotaan."
          vehicles={vehicles.cityCar}
        />
        <VehicleSection
          title="Luxury Car"
          description="Mobil premium yang menawarkan kenyamanan dan kemewahan ekstra, ideal untuk acara spesial atau perjalanan bisnis."
          vehicles={vehicles.luxuryCar}
        />
        <VehicleSection
          title="Two-Wheelers"
          description="Kendaraan dua roda yang ekonomis dan praktis untuk penggunaan sehari-hari. Cocok untuk perjalanan singkat atau mobilitas harian yang hemat bahan bakar. Termasuk motor bebek, skuter premium, dan motor listrik."
          vehicles={vehicles.twoWheelers}
        />
      </div>
      <div className="waves">
        <img src="/assets/images/img/waves.png" alt="Waves" />
      </div>
    </div>
  );
};

export default CarRental;
