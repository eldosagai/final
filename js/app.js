const products = [
    { id: 1, title: 'Drow Ranger Arcana', short_desc:'cool thing', description: 'The best thing that I have ever seen', price: 10.00, image: 'https://preview.redd.it/eer4jymdw5881.png?width=1093&format=png&auto=webp&s=6d51502ec87c054ab7522ecefc3c5664b9007853' },
    { id: 2, title: 'Queen of Pain Arcana', short_desc: 'cool thing', description: 'The best thing that I have ever seen', price: 20.00, image: 'https://scontent.ffru7-1.fna.fbcdn.net/v/t1.6435-9/103763386_3193838790672518_5241928998248557351_n.jpg?stp=dst-jpg_p843x403&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=d4hmaWHLh0IQ7kNvgHx63J2&_nc_ht=scontent.ffru7-1.fna&oh=00_AYBuoCK2zfqV2hkJwsJJW-eQOd8jNhu0KKdTwiuVGRK4YA&oe=66715351' },
    { id: 3, title: 'Shaker Arcana', short_desc: 'cool thing', description: 'The best thing that I have ever seen', price: 30.00, image: 'https://1.bp.blogspot.com/-oXRl-dFPfeI/XrTYK1Ny-yI/AAAAAAAAEoc/oTBPhq4mhWw-iSW6r0ite2PNkPpNWFbTQCLcBGAsYHQ/s400/planetfall_1.jpg' },
];

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.endsWith('catalog.html')) {
        const productList = document.getElementById('product-list');
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.title;
            const productDetails = document.createElement('div');
            const productTitle = document.createElement('h2');
            productTitle.textContent = product.title;
            const productDescription = document.createElement('p');
            productDescription.textContent = product.short_desc;
            const productPrice = document.createElement('p');
            productPrice.textContent = `Price: $${product.price.toFixed(2)}`;
            const productLink = document.createElement('a');
            productLink.href = `product.html?id=${product.id}`;
            productLink.textContent = 'View Details';
            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'Add to Cart';
            addToCartButton.addEventListener('click', () => {
                addToCart(product);
            });
            productDetails.appendChild(productTitle);
            productDetails.appendChild(productDescription);
            productDetails.appendChild(productPrice);
            productDetails.appendChild(productLink);
            productDetails.appendChild(addToCartButton);
            productItem.appendChild(productImage);
            productItem.appendChild(productDetails);
            productList.appendChild(productItem);
        });
    } else if (window.location.pathname.endsWith('product.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'), 10);
        const product = products.find(p => p.id === productId);
        if (product) {
            document.getElementById('product-title').textContent = product.title;
            document.getElementById('product-description').textContent = product.description;
            document.getElementById('product-price').textContent = `Price: $${product.price.toFixed(2)}`;
            document.getElementById('product-image').src = product.image;
            document.getElementById('product-image').alt = product.title;

            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'Add to Cart';
            addToCartButton.addEventListener('click', () => {
                addToCart(product);
            });
        document.querySelector('main').appendChild(addToCartButton);
        } else {
            document.getElementById('product-title').textContent = 'Product not found';
            document.getElementById('product-description').textContent = '';
            document.getElementById('product-price').textContent = '';
            document.getElementById('product-image').src = '';
            document.getElementById('product-image').alt = 'No image available';
        }
    }
});

function addToCart(product) {
    console.log(`${product.title} added to cart!`);
    showPopupNotification(`${product.title} has been added to your cart.`);
}

function showPopupNotification(message) {
    const popup = document.createElement('div');
    popup.classList.add('popup-notification');
    popup.textContent = message;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add('show');
    }, 10);
    setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.remove();
        }, 300);
    }, 3000);
}
