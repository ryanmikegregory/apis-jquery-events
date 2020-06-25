let clickCount = 0;

$(document).ready(onReady);

function onReady() {
  $('.js-btn-createBox').on('click', makeBox);
  $('.js-btn-createGreenBox').on('click', makeGreenBox);
  $('.js-container').on('click', '.js-btn-toggle', toggleBox);
  $('.js-container').on('click', '.js-btn-toggleYellow', toggleYellowBox);
}

function makeGreenBox() {
  clickCount++;
  $('.js-container').append(`
    <div class="greenBox">
      <p>${clickCount}</p>
      <button class="js-btn-toggleYellow">Toggle</button>
    </div>
  `);
}

function makeBox() {
  clickCount++;
  $('.js-container').append(`
    <div class="box">
      <p>${clickCount}</p>
      <button class="js-btn-toggle">Toggle</button>
    </div>
  `);
}

function toggleBox() {
  // 'this' is the button that was clicked.
  /*
      div
        - p
        - button <<< $this
  */

  // $(this).parent().fadeOut();
  $(this).parent().toggleClass('red');
}

function toggleYellowBox() {
  $(this).parent().toggleClass('yellow');
  // $(this).remove();
}
