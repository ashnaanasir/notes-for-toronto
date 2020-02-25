# notes-for-toronto
Portfolio Project with JS, HTML, CS, APIs

Project is uploaded on: 
https://pedantic-lewin-4fb53c.netlify.com/

### Base Idea:
Creating a page where you can view and post notes about what Toronto means to you. 

#### Features:
- [x] being able to see the current time in Toronto
- [x] being able to see the current temperature of Toronto
- [x] Showing a list of all the existing notes for toronto 
- [x] Having a form where a new note to Toronto can be submitted

#### Bonus: 
- [] using meetup/eventbrite api to show current meetups/events in Toronto 
- [x] embedding twitter ~~toronto hashtag feed~~ blogto timeline (getting toronto hashtag feed requires a twitter developer account)
- [] newsfeed with link to news/stories about toronto(?)

##### Update (25/02)
- So I managed to put the barebones version of website up. And managed to finish all the features I wanted to implement initially. Here is what I want to do next:

- [] figure out an alternative to Masonry to remove vertical space between notes of varying heights.
- [] add rss feed from toronto star converted to JSON
- [] implement meetup api to list upcoming meetups in toronto.
- [] set up netlify lambda function to get data from the add note form and once approved/validated, added to the notes array. OR implement backend server. 
- [] add a colorpicker to the notes form to determine the background color of the note. 
- [] incorporate images in form. 