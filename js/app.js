$(window).ready( () => {

  // This function creates a ul element and its nested pagination links
  const createLinks = numberOfPages => {
    const $ul = $('<ul></ul>');

    // Create and add li elements with proper class names
    for (let i = 1; i <= numberOfPages; i++) {
      const $li = $(`<li><a href="#">${i}</a></li>`);
      if (i === 1) $li.children('a').addClass('active');
      $ul.append($li);
    }

    $ul.click(e => {
      const $target = $(e.target);
      if ($target.is('a')) loadPage($target.text())
    });

    return $ul;
  }



  // This function accepts a page number which is used to load a range of students
  const loadPage = pageNumber => {
    // Set proper link as 'active'
    $('.pagination').show();
    $('.pagination ul li').each((index, li) => {
      const $a = $(li).children('a');
      const isActive = (pageNumber - 1) === index;
      ( isActive ? $a.addClass('active') : $a.removeClass('active') );
    });

    // Load proper students
    const lowIndex = 10 * (pageNumber - 1);
    $students.each((index, student) => {
      const withinRange = index >= lowIndex && index < lowIndex + 10;
      ( withinRange ? $(student).show() : $(student).hide() );
    });

    // Ensure 'not found' error is hidden
    studentNotFoundError(false);
  }



  // Search function accepts an input element, tests its value against student names, and shows or hides student elements as appropriate
  const searchForStudents = $input => {
    $('.pagination').hide();
    const searchedName = $input.val().toLowerCase();
    if (searchedName === '') loadPage(1);
    else {
      let studentNotFound = true;
      function show (student) {
        $(student).show();
        studentNotFound = false;
      }

      $students.filter((index, student) => {
        const studentName = $(student).find('.student-details h3').text();
        const studentEmail = $(student).find('.student-details span').text();
        const present = ( studentName.search(searchedName) >= 0
                        || studentEmail.search(searchedName) >= 0 );
<<<<<<< HEAD
=======
        console.log(present);
>>>>>>> 605e9331ae34562698e5640df0a8f580872c7a62

        ( present ? show(student) : $(student).hide() );
      });

      studentNotFoundError(studentNotFound);
    }
  }



// This function shows or hides error message based on 'true' or 'false' argument
  const studentNotFoundError = showError => {
    showError ? $('.no-match').slideDown()
              : $('.no-match').hide();
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
                                <h3>Not Found</h3>
                                <span class="email">No students match your search query</span>
                              </div>
                            </li>`).hide();

  $('.student-list').append($noMatchError);
});
