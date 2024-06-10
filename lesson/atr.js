// На странице есть список элементов, каждыйы из которых имеет атрибут data-price, содержащий цену товара. Создайте функцию, которая принимает максимальную цену и скрывает все элементы с низкой ценой выше указанной значения.

const filterElementsByDataAttribute = (attributeName, maxPrice) => {
    const elements = Array.from(document.querySelectorAll(`[${attributeName}]`));
    elements.forEach(element => {
        const price = parseFloat(element.getAttribute(attributeName));
        if (price > maxPrice) {
            element.style.display = 'none';
        }
    });
};

// Пример испольтзования
filterElementsByDataAttribute('data-price', 50)


// На странице есть список элементов, каждыйы из которых имеет атрибут data-кфештп, содержащий рейтинг товара. Создайте функцию, которая принимает сортирует элементы в порядке убывания и переставляет их на странице в соответствии с новым порядком.

const sortElementsByDataAttribute = (attributeName) => {
    const rating = document.querySelector('.rating');
    const elements = Array.from(document.querySelectorAll(`[${attributeName}]`));
    elements.sort((a, b) => {
        const ratingA = parseInt(a.getAttribute(attributeName));
        const ratingB = parseInt(b.getAttribute(attributeName));
        return ratingB - ratingA;
    });
    elements.forEach((element) => {
        rating.appendChild(element);
    });
};

// Пример испольтзования
sortElementsByDataAttribute('data-rating')

