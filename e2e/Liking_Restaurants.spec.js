/* eslint-disable import/newline-after-import */
/* eslint-disable comma-spacing */
/* eslint-disable indent */
/* eslint-disable no-undef */
const assert = require('assert');
Feature('Liking Restaurants');

Before((I) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = "You don't have any favorite restaurant";

Scenario('showing empty liked restaurants', (I) => {
  I.seeElement('#list-rest');
  I.see(firstCondition, '#list-rest');
});

Scenario('Liking one restaurant', async (I) => {
  I.amOnPage('/#/favorite');
  I.see(firstCondition, '#list-rest');
  I.amOnPage('/');
  I.seeElement('.restaurants-item__content a');
  const firstCard = locate('.restaurants-item__content h3').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants-item');
  const likedCard = locate('.restaurants-item__content h3').first();
  const likedCardTitle = await I.grabTextFrom(likedCard);
  assert.strictEqual(likedCardTitle, firstCardTitle);
});

Scenario('Unliking one restaurant', async (I) => {
  I.amOnPage('/#/favorite');
  I.see(firstCondition, '#list-rest');
  I.amOnPage('/');
  I.seeElement('.restaurants-item__content a');
  const firstCard = locate('.restaurants-item__content h3').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants-item');
  const likedCard = locate('.restaurants-item__content h3').first();
  const likedCardTitle = await I.grabTextFrom(likedCard);
  assert.strictEqual(likedCardTitle, firstCardTitle);
  I.click(likedCardTitle);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('#list-rest');
  const noFavRestaurant = await I.grabTextFrom('#list-rest');
  assert.strictEqual(noFavRestaurant, firstCondition);
});
