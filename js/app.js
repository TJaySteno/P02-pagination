$(window).ready( () => {
  // This function creates a ul element and its nested pagination links
  function createLinks (numberOfPages) {
    const $ul = $('<ul></ul>');

    // Create and add li elements with proper class names
    for (let i = 1; i <= numberOfPages; i++) {
      const li = $(`<li><a href="#">${i}</a>`);
      if (i === 1) li.addClass('active');
      $ul.append(li);
    }

    // When a click on $ul is on an anchor element, pass target's text into load page function
    $ul.click(e => {
      if ($(e.target).is('a')) loadPage($(e.target).text());
    });

    return $ul;
  }



  // This function accepts a page number which is used to load a range of students
  function loadPage (pageNumber) {
    const lowIndex = 10 * (pageNumber - 1);

    $students.each((index, student) => {
      const withinRange = index >= lowIndex && index < lowIndex + 10;
      ( withinRange ? $(student).show() : $(student).hide() );
    });

    studentNotFoundError(false);
  }



  // Search function accepts an input element, tests its value against student names, and shows or hides student elements as appropriate
  function searchForStudents($input) {
    const searchedName = $input.val().toLowerCase();
    if (searchedName === '') loadPage(1);
    else {
      let studentNotFound = true;

      $students.filter((index, student) => {
        const studentName = $(student).find('.student-details h3').text();
        const nameAbsent = studentName.search(searchedName) === -1;

        if (nameAbsent) $(student).hide();
        else {
          $(student).show();
          studentNotFound = false;
        }
      });

      studentNotFoundError(studentNotFound);
    }
  }



// This function shows or hides error message based on 'true' or 'false' argument
  function studentNotFoundError (showError) {
    ( showError ? $('.no-match').show() : $('.no-match').hide() );
  }





  // Store student elements and hide all but the first 10
  const $students = $('.student-list li');
  loadPage(1);

  // Provided there are more than 10 students, add pagination div with links
  if ($students.length > 10) {
    const numberOfPages = Math.ceil($students.length / 10);
    const $ul = createLinks(numberOfPages);

    const $pagination = $('<div class="pagination"></div>');
    $pagination.append($ul);

    $('.page').append($pagination);
  }



  // Add student search bar to page and set listeners that will pass input element into search function.
  $('.page-header').append($(`<div class="student-search">
                                <input placeholder="Search for students...">
                                <button>Search</button>
                              </div>`));

  $('.student-search input').keyup(e => searchForStudents($(e.target)) );
  $('.student-search button').click(e => searchForStudents($(e.target).prev()) );

  // Add a hidden error message and attach it to the student list
  const $noMatchError = $(` <li class="student-item cf no-match">
                              <div class="student-details">
                                <h3>No students match your search query</h3>
                              </div>
                              <div class="joined-details">
                                <span class="date">(404)</span>
                              </div>
                            </li>`).hide();

  $('.student-list').append($noMatchError);
});
