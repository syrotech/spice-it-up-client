### Spice It Up Rails API Master
What is your project idea?  How did you come up with it? Why? Who would use it?


### Origin Story
My project idea is to make a Small Online Store. I came up with it when Danny was explaining the requirements for Project 2. I would like to do this because one of the projects I would like to work on after this program would involve having an online storefront and I would like the opportunity to get the experience. So, any small business would in theory use this model-- I will focus specifically on Spices (because I like food).
I will probably name it, "Spice it Up".
There will be a signedin user/client/shopping cart (single resource).
There will be many spices they can select (many resources).
To symbolize, there will be a cart (signed in user) that has many spices (one-to-many resource).


### User Stories
As a user, I can click on the ‘Bazaar’ button on the Home/Landing Page after Auth to display the Products Page on the browser.

As a user, I can see a quadrant on the Bazaar Page for each spice, showing the product picture, name, origin, culinary use, price, and a ‘Add to Cart’ button.

As a user, I can see a confirmation message when the product is added to the shopping cart.

As a user, I can click on the Shopping Cart button to display the Shopping Cart- containing the product id, name, price, and quantity ordered input box for each product previously added to the Shopping Cart.

As a user, I can adjust the quantity ordered (from 1 to 100) for any product to adjust the total purchase amount in the Shopping Cart.

As a user, I can click a ‘Cancel Item’ button on the Shopping Cart to cancel that specific spice from the Shopping Cart.

As a user, the total purchase amount will reflect the cancellation of the item from the shopping cart.

STRETCH: As a user, I can see a total amount on the Shopping Card that is calculated as the sum of the quantities multiplied by the unit price for each product in the cart.


### Spice Database

Spice Database: name, origin, weight, cuisine, culinary use, and price


## ERD (entity relationship diagram)

User(Signed in Client) -|----< Spices


## Routing

What routes will you need to make the proper request to your API?

Spices belongs_to User
User has_many Spices


## Wireframes

Please create a wireframe of your planned front end.

http://framebox.org/AJVGg


## Timetable

First, I started with the planning, which is summarized in this ReadMe. This includes the User Stories, Wireframes, ERD and Schedule.

Second, I deployed the API repository on Heroku and GitHub pages.

Third, I deployed the client-facing repository to GitHub pages.

For the Client Facing repository, I started with the Authorization Form on the main page. It will have Signup and Signin("login") options available. Once the user is logged in, it will have a change password and singout("logout") button.
  Sign Up (curl then web app)
  Sign In (curl then web app)
  Change Password (curl then web app)
  Sign Out (curl then web page)
  All API calls have success or failure messages
  Create resource (curl then web app)
  Get all of their owned resources (curl then web app)
  Delete single resource (curl then web app)
  Update single resource (curl then web app)


For the API repository, my Single Resource (Spice): Once the authentification is complete, I will work on the first resource -- spices. Each shopping cart will have a name, origin, cuisine, culinary use, weight, and price. The spice will be my single resource.

  Create a new spice for sale
  Read all the attributes about a spice listing (Index) and Read all the attributes about 1 spice
  Update the attributes about a spice listing
  Delete a total spice from the Bazaar. (1 day)

  Scaffold your resource
  Test your resource's end points with curl scripts
  Update resource controller to inherit from Protected or OpenRead controller
  Test my resource's end points with curl scripts
  Add the relationship to a User
  Add User ownership to resource controller

Final Touches
   README
   Troubleshoot/Debug
   Style


## Additional Resources


## [License](LICENSE)
