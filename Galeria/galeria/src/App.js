/**
 * Representa uma imagem na galeria.
 * @param {string} url - A URL da imagem.
 * @param {string} id - O ID da imagem.
 * @constructor
 */
function GalleryItem(url, id) {
  this.url = url;
  this.id = id;
}

/**
 * Adiciona uma nova imagem à galeria.
 * @param {GalleryItem} item - O objeto GalleryItem representando a imagem.
 */
function addGalleryItem(item) {
  const gallery = document.querySelector('#gallery');
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery-item');
  galleryItem.innerHTML = `
    <img src="${item.url}">
    <button data-id="${item.id}">Remover</button>
  `;
  gallery.appendChild(galleryItem);
}

/**
 * Remove uma imagem da galeria.
 * @param {string} id - O ID da imagem a ser removida.
 */
function removeGalleryItem(id) {
  const gallery = document.querySelector('#gallery');
  const galleryItem = gallery.querySelector(`[data-id="${id}"]`).parentNode;
  gallery.removeChild(galleryItem);
}

/**
 * Adiciona um evento de clique para remover uma imagem da galeria.
 */
function addGalleryItemRemoveHandler() {
  const gallery = document.querySelector('#gallery');
  gallery.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      const id = event.target.dataset.id;
      removeGalleryItem(id);
    }
  });
}

/**
 * Adiciona uma nova imagem à galeria quando o usuário seleciona um arquivo.
 */
function addGalleryItemOnFileSelect() {
  const fileInput = document.querySelector('#fileInput');
  fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      const url = event.target.result;
      const id = Date.now().toString();
      const item = new GalleryItem(url, id);
      addGalleryItem(item);
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Inicializa a aplicação.
 */
function init() {
  addGalleryItemOnFileSelect();
  addGalleryItemRemoveHandler();
}

init();
