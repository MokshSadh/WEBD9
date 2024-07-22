
function toggleCountryDetails(event) {
    const countryDetails = event.target.nextElementSibling;
    if (countryDetails.style.display === 'none' || countryDetails.style.display === '') {
        countryDetails.style.display = 'block';
    } else {
        countryDetails.style.display = 'none';
    }
}


function toggleTravelStory(event) {
    const storyContent = event.target.nextElementSibling;
    if (storyContent.style.display === 'none' || storyContent.style.display === '') {
        storyContent.style.display = 'block';
    } else {
        storyContent.style.display = 'none';
    }
}


document.querySelectorAll('.country h3').forEach(countryTitle => {
    countryTitle.addEventListener('click', toggleCountryDetails);
});


document.querySelectorAll('article h3').forEach(storyTitle => {
    storyTitle.addEventListener('click', toggleTravelStory);
});


