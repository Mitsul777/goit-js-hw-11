// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('form');
const searchInput = document.getElementById('searchInput');
const galleryContainer = document.getElementById('gallery');
const loader = document.getElementById('loader');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Передбачаємо стандартну дію форми (відправку)
    
    
    loader.classList.add('visible');

    const apiKey = '41459044-8203682bce4ef2c3a7a872845';
    const searchQuery = searchInput.value.trim();  // Отримуємо значення з текстового поля та видаляємо зайві пробіли
    
    // Перевіряємо, чи введений пошуковий запит
    if (searchQuery !== "") {
        const imageType = 'photo'; // Значення параметра image_type
        const orientation = 'horizontal'; // Значення параметра orientation
        const safeSearch = true; // Значення параметра safesearch
        const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=${imageType}&orientation=${orientation}&safesearch=${safeSearch}`;
    
        
        // Показати loader перед початком запиту
        // loader.style.display = 'block';

        // Виконуємо HTTP-запит до Pixabay API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
        // Обработка результатов поиска
        const images = data.hits;

        // Создание HTML для каждого изображения
        const imagesMarkup = createMarkup(images);

        // Вставка HTML в галерею
        const galleryContainer = document.getElementById('gallery');
        galleryContainer.innerHTML = imagesMarkup;
        const lightbox = new SimpleLightbox('.image-card a');
            })
            .catch(error => {
                console.error("Помилка при виконанні запиту:", error);
            })
            .finally(() => {
                // Очищаємо поле вводу за допомогою методу reset
                loader.classList.remove('visible');
                form.reset();
            });
    } else {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query.',
            position: 'topRight',
        });
    }
});

function createMarkup(imgArr) {
    return imgArr.map(({ webformatURL, tags, likes, views, comments, downloads }) => `
<div class="image-card">
<a href="${webformatURL}" class="lightbox-trigger">
    <img src="${webformatURL}" alt="${tags}">
</a>
    <div class="image-details">
    <p><strong>Likes:</strong> ${likes}</p>
    <p><strong>Views:</strong> ${views}</p>
    <p><strong>Comments:</strong> ${comments}</p>
    <p><strong>Downloads:</strong> ${downloads}</p>
</div>
    </div>
    `).join('');
}


