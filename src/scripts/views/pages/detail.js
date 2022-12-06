import RestaurantApiSource from '../../data/restaurant-api-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import {
  createDetailRestaurantItem,
  createLikeButtonTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <section class="detail-restaurant" id="focusContent">
          <div id="restaurant"></div>
        </section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    let restaurant = await RestaurantApiSource.detailRestaurant(url.id);

    restaurant = restaurant.restaurant;

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createDetailRestaurantItem(restaurant);

    const likeButtonContainer = document.querySelector('#restaurant-like-container');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#restaurant-like-container'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Detail;
