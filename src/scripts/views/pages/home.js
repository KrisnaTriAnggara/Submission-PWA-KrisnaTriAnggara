import RestaurantApiSource from '../../data/restaurant-api-source';
import '../components/restaurant-item';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section class="hero">
            <img src="./images/heros/hero-image_1.jpg" alt="Gambar hero - chef sedang memasak">
            <div class="hero-title">
                <div class="hero-title-container responsive-container">
                    <h1>Katalog Restoran Indonesia</h1>
                    <p>Cobala Temukan Restoran Indonesia Yang beranekaragam</p>
                    <p>Menyajikan ribuan restoran pilihan dari seluruh Nusantara !!!</p>
                </div>
            </div>
        </section>
        <section class="list-restaurant">
            <div class="responsive-container" id="focusContent">
                <h2 class="list-restaurant-title">Carilah Restoran</h2>
                <div class="restaurant-list" id="restaurant-list">

                </div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurantApi = await RestaurantApiSource.restaurantList();

    if (!restaurantApi.error) {
      const restaurantContainer = document.querySelector('#restaurant-list');
      restaurantApi.restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Home;
