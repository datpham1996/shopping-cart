'use strict';


$('#js-shopping-list-form').submit(function(event){
  event.preventDefault();
  const item = $('#shopping-list-entry').val();
  

  const addToList = `<li>
  <span class="shopping-item">` + item + `</span> 
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`;
  $('.shopping-list').append(addToList);
});

$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  $(this).closest('li').remove();
});

$('.shopping-item-toggle').on('click', event => {
  $(event.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});