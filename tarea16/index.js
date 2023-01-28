const block = document.querySelectorAll('.block');
const sections = document.querySelectorAll('.wrapper');
const dump = document.querySelector('.dump');

block.forEach((item) => {
  item.addEventListener('dragstart', (e) => {
    item.classList.add('dragging');
    e.dataTransfer.setData('id', item.id);
    const ghostImage = document.querySelector('.ghost-img');
    e.dataTransfer.setDragImage(ghostImage, 0, 0);
  });
  item.addEventListener('dragend', () => {
    item.classList.remove('dragging');
  });
});

sections.forEach((section) => {
  section.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  });
  section.addEventListener('drop', (e) => {
    console.log('Drop');
    const blockId = e.dataTransfer.getData('id');
    const block = document.getElementById(blockId);
    section.appendChild(block);
  });
});

dump.addEventListener('dragover', (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'link';
});
dump.addEventListener('drop', (e) => {
  const blockId = e.dataTransfer.getData('id');
  const block = document.getElementById(blockId);
  block.remove();
});
