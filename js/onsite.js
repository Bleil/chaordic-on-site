var ChaordicOnSite = {};
ChaordicOnSite = (function () {

    'use strict';

    return {
        carouselContainer: '',

        create: function (carouselDestinationContainer) {
            this.carouselContainer = carouselDestinationContainer;
            var head = document.getElementsByTagName('head')[0];
            var dataScript = document.createElement('script');
            dataScript.src = '//roberval.chaordicsystems.com/challenge/challenge.json?callback=X';
            head.appendChild(dataScript);
        },

        populate: function (data) {
            if (data.reference && data.reference.item) {
                this.createReferenceItem(data.reference.item);
            }
            if (data.recommendation && data.widget && data.widget.size > 0) {
                Carousel.create(this.carouselContainer, data.recommendation, data.widget.size);
            }
        },

        createReferenceItem: function (referenceItem) {
            var container = document.querySelector('.onsite-reference-item-container');
            var item = Carousel.createItem(referenceItem);
            if (item) {
                container.appendChild(item);
            }
        }
    }
}());

function X(response) {
    ChaordicOnSite.populate(response.data);
}