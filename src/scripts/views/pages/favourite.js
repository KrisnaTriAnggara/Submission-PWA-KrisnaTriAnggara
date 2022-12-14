import FavouriteRestaurantDB from '../../data/favouriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favourite = {
  async render() {
    return `
        <section class="list-restaurant">
            <div class="responsive-container" id="focusContent">
                <h2 class="list-restaurant-title">Restoran Favorit Anda</h2>
                <div class="restaurant-list" id="restaurant-list">

                </div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await FavouriteRestaurantDB.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favourite;
