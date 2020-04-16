
// $('#photo').attr('src', photo1.photo);

// $('#photo-title').text(photo1.title);

// $('#photo-description').text(photo1.description);

let eachPhotos = [
    {
    photo: 'Images/3shilouettes.jpg',
    title: 'Three shilouettes by the Ocean',
    description: 'Ahead of the boardwalk I’m wandering on lies the delightfully green Magdalena peninsula; to my right, the golden sands of Playa el Puntal beach'
},

{
    photo: 'Images/OceanAndGrass.jpg',
    title: 'Ocean And Grass',
    description: "It's not often that I'm attracted to a city so quickly, especially one with such little fanfare; indeed I knew nothing of this Spanish coastal city before my arrival",
},

{
    photo: 'Images/Boats.jpg',
    title: 'Boats',
    description: 'This is a place I could actually live, I muse, as a local cycles past me leisurely, no doubt enjoying another glorious morning in this part of the world. ',
},

{
    photo: 'Images/City.jpg',
    title: 'City',
    description: 'Ahead of the boardwalk I’m wandering on lies the delightfully green Magdalena peninsula; to my right, the golden sands of Playa el Puntal beach',
},

{
    photo: 'Images/Surfer.jpg',
    title: 'Surfer',
    description: 'There are certain things we always seek out in a new city; a strong local culture, vast natural beauty, an impressive gourmet scene, and most importantly, many beautiful golden beaches, and Santander has all in spades',
}

];

// let currentPhoto = 0;

// $('#photo').attr('src', eachPhotos[currentPhoto].photo);
// $('#photo-title').text(eachPhotos[currentPhoto].title);
// $('#photo-description').text(eachPhotos[currentPhoto].description);

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', eachPhotos[photoNumber].photo);
    $('#photo-title').text(eachPhotos[photoNumber].title);
    $('#photo-description').text(eachPhotos[photoNumber].description);
  };

  
$(() => {
    let currentPhoto = 0;
    loadPhoto(currentPhoto);
  
    $("#forward").click(() => {
      currentPhoto++;
      if (currentPhoto >= eachPhotos.length) {
        currentPhoto = 0;
      }
      loadPhoto(currentPhoto);
    });
  
    $("#back").click(() => {
      currentPhoto--;
      if (currentPhoto < 0) {
        currentPhoto = eachPhotos.length - 1;
      }
      loadPhoto(currentPhoto);
    });
  });



// let createThumbs = $("#tnContainer").append(`<img src=${eachPhotos.photo}>`);
// eachPhotos.forEach(element => {
    // createThumbs(element);
// })

eachPhotos.forEach(function(item){
  $("#tnContainer").append(`<img src=${item.photo}>`);});
  