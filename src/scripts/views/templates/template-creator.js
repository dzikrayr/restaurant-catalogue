/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantsDetailTemplate = (restaurant) => `
  <h2 tabindex="0"  class="restaurant__name">${restaurant.name}</h2>
  <img tabindex="0" class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3 tabindex="0">Information</h3>
    <h4 tabindex="0">City :</h4>
    <p tabindex="0">${restaurant.city}</p>
    <h4 tabindex="0">Address :</h4>
    <p tabindex="0" >${restaurant.address}</p>
    <h4 tabindex="0">Rating :</h4>
    <p tabindex="0">${restaurant.rating} </p>
    <h4 tabindex="0">Menu Category :</h4>
    <p tabindex="0">${restaurant.categories[0].name}</p>
    <p tabindex="0">${restaurant.categories[1].name}</p>
    <h4 tabindex="0">Foods Menu :</h4>
    <p tabindex="0">${restaurant.menus.foods.map((food) => food.name)}</p>
    <h4 tabindex="0">Drinks Menu :</h4>
    <p tabindex="0">${restaurant.menus.drinks.map((drink) => drink.name)}</p>
    <h4 tabindex="0">Customer Reviews :</h4>
    <p tabindex="0">Name: ${restaurant.customerReviews[0].name}</p> 
    <p tabindex="0">Review: ${restaurant.customerReviews[0].review}</p> 
    <p tabindex="0">Date: ${restaurant.customerReviews[0].date}</p> 
    <p tabindex="0">-</P>
    <p tabindex="0">Name: ${restaurant.customerReviews[1].name}</p> 
    <p tabindex="0">Review: ${restaurant.customerReviews[1].review}</p> 
    <p tabindex="0">Date: ${restaurant.customerReviews[1].date}</p> 
    <p tabindex="0">-</p>
    <p tabindex="0">Name: ${restaurant.customerReviews[2].name}</p> 
    <p tabindex="0">Review: ${restaurant.customerReviews[2].review}</p> 
    <p tabindex="0">Date: ${restaurant.customerReviews[2].date}</p> 
  </div>

  <div class="restaurant__description">
    <h3 tabindex="0">Description</h3>
    <p tabindex="0">${restaurant.description}</p>
  </div>
</div>
`;

const createRestaurantsItemTemplate = (restaurants) => `
  <div class="restaurants-item">
    <div class="restaurants-item__header">
        <img tabindex="0" class="restaurants-item__header__poster lazyload" alt="${restaurants.name}"
            src="${CONFIG.BASE_IMAGE_URL}${restaurants.pictureId}">
    </div>
    <div class="restaurants-item__content">
        <h3 tabindex="0"><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name}</a></h3>
        <p tabindex="0">${restaurants.city}</p>
        <p tabindex="0">${restaurants.rating}</p>
        <p tabindex="0" >${restaurants.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantsItemTemplate,
  createRestaurantsDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
