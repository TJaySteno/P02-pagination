const $students = $('.student-list li');

// On page load, hide all but 10 students
$students.each((index, student) => { if (index >= 10) $(student).hide() });

// Provided there are more than 10 students, add pagination div with links
if ($students.length > 10) {
  const numberOfPages = Math.ceil($students.length / 10);
  const $ul = $('<ul></ul>');

  // Create list items for all needed pages
  for (let i = 1; i <= numberOfPages; i++) {
    const li = $(`<li><a href="#">${i}</a>`);
    // Make first index 'active'
    if (i === 1) li.addClass('active');
    $ul.append(li);
  }

  // Have $ul listen for clicks and pass along the event target
  $ul.click(e => loadNewPage(e.target));

  // Create 'pagination' div, fill with $ul, and attach to end of '.page' div
  const $pagination = $('<div class="pagination"></div>');
  $pagination.append($ul);
  $('.page').append($pagination);
}

// Function accepts a page # and loads proper students
function loadNewPage (link) {
  if ($(link).is('a')) {
    // Provided that the event target is a link, store the page number, and hide all students
    const page = $(link).text();
    $students.each((index, student) => $(student).hide());

    // Determine starting index and display 10 students from there
    const lowIndex = 10 * (page - 1);
    $students.each((index, student) => {
      if (index >= lowIndex && index < lowIndex + 10) $(student).show();
    });
  }
}
