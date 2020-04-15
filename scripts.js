let photo1 = {
    photo: 'Images/3shilouettes.jpg',
    title: 'Three shilouettes by the Ocean',
    description: 'Ahead of the boardwalk I’m wandering on lies the delightfully green Magdalena peninsula; to my right, the golden sands of Playa el Puntal beach',
};

let photo2 = {
    photo: 'Images/OceanAndGrass.jpg',
    title: 'Ocean And Grass',
    description: "It's not often that I'm attracted to a city so quickly, especially one with such little fanfare; indeed I knew nothing of this Spanish coastal city before my arrival",
};

let photo3 = {
    photo: 'Images/Boats.jpg',
    title: 'Boats',
    description: 'This is a place I could actually live, I muse, as a local cycles past me leisurely, no doubt enjoying another glorious morning in this part of the world. ',
};

let photo4 = {
    photo: 'Images/City.jpg',
    title: 'City',
    description: 'Ahead of the boardwalk I’m wandering on lies the delightfully green Magdalena peninsula; to my right, the golden sands of Playa el Puntal beach',
};

let photo5 = {
    photo: 'Images/Surfer.jpg',
    title: 'Surfer',
    description: 'There are certain things we always seek out in a new city; a strong local culture, vast natural beauty, an impressive gourmet scene, and most importantly, many beautiful golden beaches, and Santander has all in spades',
};

// $('#photo').attr('src', photo1.photo);

// $('#photo-title').text(photo1.title);

// $('#photo-description').text(photo1.description);

let eachPhotos = [photo1, photo2, photo3, photo4, photo5];

let currentPhoto = 0;

$('#photo').attr('src', eachPhotos[currentPhoto].photo);

$('#photo-title').text(eachPhotos[currentPhoto].title);

$('#photo-description').text(eachPhotos[currentPhoto].description);

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', eachPhotos[photoNumber].photo);
  }

  loadPhoto(currentPhoto);

  $('#forward').click(() => {
    currentPhoto++;
    currentPhoto = currentPhoto % eachPhotos.length;
    loadPhoto(currentPhoto);

  });



