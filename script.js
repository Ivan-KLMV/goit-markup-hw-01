window.addEventListener('DOMContentLoaded', (event) => {
  var draggable = document.getElementById('draggable');
  var isDragging = false;
  var offset = { x: 0, y: 0 };

  draggable.addEventListener('mousedown', function (e) {
    isDragging = true;
    offset.x = e.clientX - draggable.offsetLeft;
    offset.y = e.clientY - draggable.offsetTop;
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('mouseenter', function () {
    draggable.classList.add('grab'); // Додаємо клас для зміни курсору
  });

  draggable.addEventListener('mouseleave', function () {
    draggable.classList.remove('grab'); // Видаляємо клас для зміни курсору
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    draggable.style.left = e.clientX - offset.x + 'px';
    draggable.style.top = e.clientY - offset.y + 'px';
  });

  document.addEventListener('mouseup', function () {
    isDragging = false;
    draggable.classList.remove('dragging');
  });
});
