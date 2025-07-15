const images = [
  { src: "/images/img_bg_1.jpg", caption: "Paisagem natural com montanhas" },
  { src: "/images/img_bg_2.jpg", caption: "Cidade moderna durante o pôr do sol" },
  { src: "/images/img_bg_3.jpg", caption: "Praia tropical com coqueiros" },
  { src: "/images/img_bg_4.jpg", caption: "Floresta densa com luz solar" },
  { src: "/images/person1.jpg", caption: "Retrato profissional feminino" },
  { src: "/images/person2.jpg", caption: "Homem sorrindo em ambiente casual" },
  { src: "/images/person3.jpg", caption: "Mulher em traje formal" },
  { src: "/images/img_bg_1.jpg", caption: "Outra vista das montanhas" },
  { src: "/images/img_bg_2.jpg", caption: "Vista noturna da cidade" },
  { src: "/images/img_bg_3.jpg", caption: "Praia com ondas fortes" },
];

const gallery = document.getElementById('gallery');
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