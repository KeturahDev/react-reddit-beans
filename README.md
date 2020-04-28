# Reddit-Beans
## By: Keturah Howard, Alyssa Colistro, Todd Walraven, Mariam Alaeddin || April 28th 2020
#### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Component Tree

<img width="684" alt="post" src="https://user-images.githubusercontent.com/58479140/80538850-415f1100-895b-11ea-8f6e-375d768697d2.png">

## Description 

Mock reddit site to practice redux store information.


## Preview
***[Deployed Application](https://keturahdev.github.io/reddit-beans/)***
<img width="1315" alt="Screen Shot 2020-04-24 at 8 32 25 PM" src="https://user-images.githubusercontent.com/32975967/80270189-dbc50900-866a-11ea-98c3-f5db8ae17d94.png">

*component diagram*
<img width="815" alt="Screen Shot 2020-04-24 at 9 48 04 AM" src="https://user-images.githubusercontent.com/32975967/80236977-cae7a980-8610-11ea-8eff-2098cb79edc7.png">

## Project Specifications
### User Stories
* As a user, I want to enter content into a form and submit to create a new post.
* As a user, I want my new posts to include a timestamp. And I want to see when other listings were posted, too.
* As a user, I want to upvote posts I particularly enjoy.
* As a user, I want to downvote posts I don't like, or find inappropriate.
* As a user, I'd like posts with the most upvotes to appear higher on the page. (We haven't explicitly covered this in our curriculum, but here's a hint: You can complete logic before the return statement of a mapStateToProps() method!)

Stretch goal:

* As a user, I want to click a post to view additional details. For now simply hide/show some message content. (Hint: You could create a currentlySelectedPost Redux state key, and alter the value based on which post the user is selecting.)

### Behavior Driven Development

|Behavior|Input|Output|
|---|:---:|:---:|
|display all bean-bowls|-|*list of bean-bowls*|
|display bean-bowl details|user clicks bean-bowl|*page appears with all bean-bowl details*|
|user can add new bean-bowl to list|user clicks add bean-bowl|*form for creating bean-bowl appears*|
|user can navigate back to menu |user clicks on button on details page|*menu reappears*|
|user can upvote a bean-bowl |user clicks upvote button on bean-bowl|*upvote of bean-bowl increases by 1 and bean-bowls will be reordered if necessary based on number of upvotes per bean-bowl*|
|user can downvote a bean-bowl |user clicks downvote button on a bean-bowl|*a loses a vote and bean-bowl list is reordered to reflect bean-bowls by number of votes*|


## Setup/Installation Requirements

_In Terminal:_

* Navigate to where you want this application to be saved, i.e.:
```cd desktop```
* Clone the file from GitHub with HTTPS
```git clone https://github.com/KeturahDev/reddit-beans```
* Open file in your preferred text editor
* On Mac: ```open -a {your text editor} reddit-beans```
* On Windows: ```reddit-beans```

_Download Manually:_

* Navigate to https://github.com/KeturahDev/reddit-beans.
* Click green "Clone or Download" button.
* Click "Download ZIP".
* Click downloaded file to unzip.
* Navigate to folder called "reddit-beans-store" in terminal.
* Run "npm start" to auto start a local instance in your browser at http://localhost:3000/.


## Known Bugs

_No known bugs at this time._

## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/KeturahDev/reddit-beans/issues) here on GitHub._

## Technologies Used

* React
* npm
* Webpack
* Javascript
* HTML & CSS
* Bootstrap 4
* React-Redux

### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 *Keturah Howard, Alyssa Colistro, Todd Walraven, Mariam Alaeddin*