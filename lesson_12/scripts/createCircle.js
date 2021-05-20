export const createCircle = (
  root,
  size = 150,
  border = 1,
  borderColor = 'green',
  bgColor = 'transparent'
) => {
  const shape = document.createElement('div');

  shape.style.borderRadius = '50%';
  shape.style.width = `${size}px`;
  shape.style.height = `${size}px`;
  shape.style.border = `${border}px solid ${borderColor}`;
  shape.style.backgroundColor = `${bgColor}`;
  root.appendChild(shape);
};
