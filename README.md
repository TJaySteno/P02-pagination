## Project 2
### Pagination and Content Filter

In this second project, I will be creating a program that accepts a list of students, divides that list into pages of 10 students each, creates links to other pages, and updates the HTML dynamically as the user navigates through said pages. Additionally, as I aim to meet the criteria for "Exceeds Expectations", I will be adding in a feature that will allow a user to search students by name or, if no matches are found, will create a message in the HTML to notify him or her.

*(Bullet points from project instructions)*

> ### Before you start
>
> * Have a GitHub account and know how to create a new repo
> * Download the project files. Files supplied for use:
> 2 CSS files (reset.css, design.css), 3 HTML files (index.html, example-meets.html, example-exceeds.html), 'student-list-examples' folder containing 2 pages with differing student listings
> * Create your own external JavaScript file.
> * Have a basic understanding of Progressive Enhancement: basic content should be **accessible to browsers that don't support JavaScript** and **anything related to JavaScript should be added programmatically by JavaScript** (i.e. pagination buttons and search bar & button)
>
> ### Project Instructions
> * On page load, program should hide all but the first 10 students in the list
> * Use example-meets.html lines 119-137 as an example of the markup you'll need to add dynamically
> * Calculate the number of pages needed and add the appropriate number of links to the bottom of the page
> * Clicking on 'number' links should load appropriate students (2 shows 11-20, etc)
> * This app should work for any number of students
> * For extra guidance, read Pagination Project Guide listed in the project resources for helpful hints!
> * Before you submit, check off all of the items on the Student Project Submission Checklist.
>
> *NOTE: It’s good practice to check your project for cross browser compatibility. We recommend making sure your project looks and functions as expected in at least 3 different browsers.*
>
> ### Extra Credit
> * Include a search component to allow a user could search for a particular student or students
> * When the "Search" button is clicked, the list of students is filtered to match the search
> * If no matches are found by the search, include a message in the HTML to tell the user there are no matches.
>
> *NOTE: To get an "Exceeds Expectations" grade for this project, you'll need to complete each of the items in this section. See the rubric in the "How You'll Be Graded" tab above for details on how you'll be graded.
> If you’re shooting for the "Exceeds Expectations" grade, it is recommended that you mention so in your submission notes.
> Passing grades are final. If you try for the "Exceeds Expectations" grade, but miss an item and receive a “Meets Expectations” grade, you won’t get a second chance. Exceptions can be made for items that have been misgraded in review.*
>
> | | Needs Work | Meets Expectations | Exceeds Expectations |
> | --- | --- | --- | --- |
> | Progressive enhancement & unobtrusive JavaScript | 1) Uses inline JavaScript, 2) HTML markup for search box or pagination is shown/hidden in the HTML markup instead of being created dynamically. | 1) No inline JavaScript. All JavaScript is linked from an external file, 2) Use unobtrusive JavaScript to append markup for the pagination links | 1) Use unobtrusive JavaScript to append HTML for a search bar and pagination links |
> | Pagination Links | 1) No links appear for pagination, pagination is hard coded, or the incorrect number of links are displayed. | 1) Pagination links are created properly | 1) Pagination links display based on how many search results are returned. For example: if 10 or fewer results are returned, 0 pagination links are displayed. If 22 search results are returned, 3 pagination links are displayed.
> | Paging | 1) The first 10 students aren’t shown when the page loads, 2) Nothing happens when the links are clicked, or the incorrect number of students are displayed. | 1) The first 10 students are shown when the page loads, and each pagination link displays the correct students, 2) Clicking on “1” in the pagination links should shows students 1 to 10. Clicking “2” shows 11 to 20. Clicking “5” shows students 41 to 50, and so on. | 1) When a search yields 0 results, a message informing the user is that no results have been found is displayed in place of results
> | Code comments | 1) No comments describing how the code and functions work | 1) Code comments explaining how the functions work | 1) N/A
