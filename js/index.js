// Get element with class share-button
var shareButton = document.getElementsByClassName('share-button')[0];
// Get element with class button
var button = document.getElementsByClassName('button')[0];

var mblShare = document.getElementsByClassName('mbl-share-data')[0];

button.addEventListener('click', function() {
    shareButton.classList.toggle('active');
    mblShare.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.share-button')){
        shareButton.classList.remove('active');
        mblShare.classList.remove('active');
    }

});