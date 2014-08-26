Note-Taking App - Interview Assignment
===============

Sample project used as part of interview process.


##Instructions

Your task is to build an Angular app for managing personal notes (think Evernote). The app should use Angular to allow the user to create/edit/view notes without refreshing the whole page.

Please clone this repo and create your own branch to work in. When you are ready to submit your work, open a pull request.

##Requirements

* User should have list of notes
* User should be able to create, view, edit and delete notes
* User should be able to write the note in [Markdown](http://daringfireball.net/projects/markdown/)
* When a user selects a note, the note’s markdown should be rendered to HTML and displayed
* Page should be responsive for mobile and tablet
* Only needs to work in modern browsers (Chrome, Firefox)

**Bonus Points**

* For saving the data for the user in the browser, so data is persisted when the user comes back
* For geotagging the notes with current location
* For creating an "About" page and linking to it using Angular Routing (no page refresh)
* For any additional features that increase the usefulness of the tool




The Mind of Sir Baggz-A-Lot
===============

First of all, thank you so much for this opportunity to extend my AngularJS skills by creating this project. I hope you enjoy using it as much as I have developing it.

* For a working model of a local storage version (non-Markdown), check out [myPlnker](http://embed.plnkr.co/ATRKej8ILWURSzeetVWo/preview)
* For a detailed version utilizing 3-way binding through AngularFire Server API, locate the ```app``` directory and run ```grunt serve``` through the terminal
* For a review of the working code, locate the ```app``` directory in the root.


##Thought Process

I started this project with some R&D for UX by comparing the good qualities from: Evernote App, iPhone Note App, and the iPhone Reminders App.

Once I determined the direction I wanted to take regarding wire-framing, I started developing my original app utilizing local storage that you can view on my Plunker as stated above. I chose to use the power of the Yeoman-angular generator tool to scaffold my app, provide a testing environment, allow for easy inclusion of extra libraries, and quick production of the app.

On Friday of the week this project was assigned, John had mentioned that he was going to be on vacation for a week and that we would re-unite to discuss this project on the 18th. Now, that I had a gracefully extended time frame to live out this application, I decided to take a risk and step it up a notch by adding a new server API tool I had yet to use that compliments AngularJS (AngularFire).

By using AngularFire, I could 3-way bind to a server creating a fully RESTful environment without the need of backend code. This is HUGE!
You can check out more on the Firebase Server API [here](https://www.firebase.com/)



##Requirements

* User can view list of notes with live results straight from the server via 3-way binding
* User can click on the plus sign to successfully add notes straight to the server (viewed instantly)
* User can view note by clicking on any note in list
* User can delete note instantly off the server by clicking the ```slide``` link to reveal delete button
* User can edit note *BUT CANNOT save updated note. I'm currently in the process of trouble-shooting the functionality from the AngularFire API*
* The entire app was developed in a mobile first approach and is optimized for mobile/tablet view utilizing SCSS
* The app is fully compatible with modern browsers

####Markdown

To allow for the conversion of Markdown, I utilized the Showdown.js library and created a custom ```<bgz-markdown>``` directive that would allow both editing and previewing of Markdown text. *HOWEVER* I have come to realize that custom directives do not currently support two-way binding from outside of the directive (to my knowledge).

To view the Markdown in action:

* Un-comment the labeled markup on the ```soloPost.html``` page
* Comment out the ```<div class="btn">``` above the markout element

When the markdown element has been prepared by following the above directions, user can edit the ```<textarea>``` and click the SAVE button to view the converted Markdown. Likewise, to enter back into the edit mode, click the pencil icon in the top right corner of the header.



##Bonus

* Data is saved on a Firebase Server for consistent data retrieval
* Geo-tagging used with HTML5 Geolocation API *I would love to become more familiar with the Google Maps API to utilize in future projects for displaying human address' and not lattitude/longitude coordinates
* About page can be viewed by clicking the ```slide``` button on the lists page to reveal About link
* Complete app utilizes Angular Routing through ```$routeProvider```
* I would love to add the functionality of loading photos to the notes, and tagging people or locations if time permitted
* AngularJS animation is a little weird right now, once this has become more solid (and myself more educated), I am always up for adding beautiful animations to enhance the UX



##Conclusion

Thank you so much for reading my book (so sorry!). I hope this project allows you to see my passion by squeezing as much functionality through these 2 attempts as possible. This was a really cool project and I would definitely love the opportunity to extend my Angular skills even further to see how much more is possible!