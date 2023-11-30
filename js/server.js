import { renderPhoto } from './rendering.js';
import { formSubmit } from './photoeditor.js';
import { closeModal } from './photoeditor.js';

fetch('https://30.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    renderPhoto((photos));
  });

formSubmit(closeModal);
