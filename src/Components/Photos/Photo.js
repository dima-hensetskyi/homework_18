import React from 'react';
import Gallery from 'react-photo-gallery';

function Photo() {
    const BasicRows = () => <Gallery photos={Photo_SET} />;
    return <BasicRows />;
}

const Photo_SET = [
    {
        alt: '1',
        src: 'https://tatooinetimes.com/wp-content/uploads/2020/01/mandalorian_ch7_hero.jpg',
        width: 14,
        height: 4,
    },
    {
        alt: '2',
        src: 'https://cdn.shazoo.ru/449398_XePCbLzEvo_the_child_star_wars_gallery_5e32.jpg',
        width: 5,
        height: 3,
    },

    {
        alt: '3',
        src:
            'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F11%2Fhot-toys-the-mandalorian-figure-release-info-002.jpg?q=75&w=800&cbr=1&fit=max',
        width: 5,
        height: 3,
    },
    {
        alt: '4',
        src:
            'https://lumiere-a.akamaihd.net/v1/images/mandalorian-108-1_4924430e.jpeg?region=446%2C0%2C2836%2C1595',
        width: 14,
        height: 4,
    },
    {
        alt: '5',
        src:
            'https://lumiere-a.akamaihd.net/v1/images/mandalorian-108-7_013d454d.jpeg?region=498%2C0%2C2844%2C1600',
        width: 14,
        height: 4,
    },
    {
        alt: '6',
        src: 'https://i.pinimg.com/originals/50/8e/19/508e19331a065c57643a90cb6aec1019.png',
        width: 5,
        height: 3,
    },
];

export default Photo;
