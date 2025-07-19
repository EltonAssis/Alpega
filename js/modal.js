// IMAGENS DA GALERIA
const images = [
  { src: "../images/img_gallery/IMG-20250715-WA0001.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0002.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0003.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0004.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0005.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0006.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0007.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0008.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0009.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0010.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0011.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0012.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0013.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0014.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0015.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0016.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0017.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0018.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0019.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0020.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0021.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0022.jpg", caption: "Legenda da imagem" },
  { src: "../images/img_gallery/IMG-20250715-WA0023.jpg", caption: "Legenda da imagem" },

  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0004.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0005.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0006.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0007.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0008.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0009.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0010.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0011.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0012.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0013.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0014.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0015.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0016.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0017.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0018.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0019.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0020.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0021.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0022.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0023.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0024.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0025.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0026.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/CursoDireito/IMG-20250718-WA0027.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Infomatica/IMG-20250718-WA0001.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Infomatica/IMG-20250718-WA0002.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Infomatica/IMG-20250718-WA0003.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0022.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0023.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0024.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0025.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0026.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0027.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0028.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0029.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0030.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0031.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0032.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0033.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0034.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0035.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0036.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0037.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0038.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0039.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0040.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0041.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0042.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0043.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0044.jpg", caption: "Legenda da imagem" },
  { src: "../images/cursos/Saude/IMG-20250718-WA0046.jpg", caption: "Legenda da imagem" }
];

const gallery = document.getElementById('galeria');
const modal = document.getElementById('modal');
const fade = document.getElementById('fade');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

// Função para abrir o modal
function openModal(index) {
  currentIndex = index;
  const image = images[index];
  modalContent.style.backgroundImage = `url('${image.src}')`;
  
  // Adiciona ou atualiza a legenda no modal
  let captionElement = document.querySelector('.modal-caption');
  if (!captionElement) {
    captionElement = document.createElement('div');
    captionElement.className = 'modal-caption';
    modalContent.appendChild(captionElement);
  }
  captionElement.textContent = image.caption;
  
  modal.classList.add('active');
  fade.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function closeModal() {
  modal.classList.remove('active');
  fade.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Função para navegar para a imagem anterior
function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  const image = images[currentIndex];
  modalContent.style.backgroundImage = `url('${image.src}')`;
  document.querySelector('.modal-caption').textContent = image.caption;
}

// Função para navegar para a próxima imagem
function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  const image = images[currentIndex];
  modalContent.style.backgroundImage = `url('${image.src}')`;
  document.querySelector('.modal-caption').textContent = image.caption;
}

// Event listeners
closeBtn.addEventListener('click', closeModal);
fade.addEventListener('click', closeModal);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// Adiciona suporte para teclado
document.addEventListener('keydown', (e) => {
  if (modal.classList.contains('active')) {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  }
});

// Criar os itens da galeria
images.forEach((image, index) => {
  const item = document.createElement('div');
  item.className = 'gallery-item';
  
  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.caption;
  img.loading = 'lazy';
  img.addEventListener('click', () => openModal(index));
  
  const caption = document.createElement('div');
  caption.className = 'image-caption';
  caption.textContent = image.caption;
  
  item.appendChild(img);
  item.appendChild(caption);
  gallery.appendChild(item);
});