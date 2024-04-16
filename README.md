# Plant Swap

"Family Recipe" is a recipe sharing website made for my Portfolio Project 4 for code institute, where users can upload and share recipes as well as reading recipes from other users.

I thought about this as I have a family recipe book from South Africa and I think it would be great to have a website where family members could share their family recipes with eachother and the world. I also wanted a rating system based on the amount of likes and a comment section for recipes. 

![image](static/images/readme/responsive.png)

Click [here](https://familyrecipe-66825c6657db.herokuapp.com/) to view the live site.

# Table of Contents
- [Database Diagram](#database-diagram)
  - [Planning](#planning)
  - [Final Result](#final-result)

- [User Experience](#user-experience)
  - [Agile](#agile)
  - [Strategy](#strategy)
  - [Scope](#scope)
  - [Structure](#structure)
  - [Skeleton](#skeleton)
  - [Surface](#surface)

- [Technologies Used](#technologies-used)
  - [Languages](#languages)
  - [Frameworks, Libraries and Programs](#frameworks-libraries-and-programs)

- [Features](#features)
  - [Existing Features](#existing-features)
  - [Future Features](#future-features)

- [Testing and Validation](#testing-and-validation)
  
- [Fixed Bugs](#fixed-bugs)

- [Known Issues](#known-issues)

- [Credits](#credits)
  - [Media](#media)
  - [Content](#content)
  - [Acknowledgements](#acknowledgements)

- [Deployment](#deployment)

- [Development](#development)
  - [Fork](#fork)
  - [Clone](#clone)

  
## Database Diagram

The project uses ElephantSQL as PostgreSQL relational database for storing the data. I used lucidcharts to display the relationships to the different database tables. The main relationships were based on the likes model as these were called both in the recipe model to show the total likes and related back to the unique users, and then also the users liked recipes.

### Planning

![image](static/images/readme/database.png)


#### Recipe Model
  - This is the main model for the website to function. I based this off the walkthrough I think therefore I blog. Adjusted the layout a bit to fit the website function as a worldwide sharing platform for recipes in mind.

#### Comment Model
 - The comment model allows logged in users to comment on recipes.

#### Like Model
  - The custom model.
  - Enable users to like recipes.

[Back to top ⇧](#table-of-contents)

## User Experience

To create a website with good UI and UX I interviewed my sister in France who is a chef and asked her what her thoughts were on a recipe sharing website and also got insight to what she would want to use the site for. 

There are many future features that will later be introduced and enhancements that I did not get around to implementing just yet but these will be reflected in the user stories section.

### Agile

I employed the agile methodology, starting from the planning stage and continuing until the final product was built. To ensure that I stayed organized and on track, I utilized a GitHub project and a [Kanban board](https://github.com/users/adrianskelton/projects/5/views/1). Information about User Stories can be found in the subsection below⇩ 

**Five planes of User Experience:**

### Strategy

My User Stories can be found [here](https://github.com/adrianskelton/adrianproject4/issues). All User Stories include:
 - Acceptance Criteria
 - Tasks
 - Labels (MoSCoW Priotarization)

Some of the User Stories are part of an EPIC.

Please, go to [TESTING.md](TESTING.md) if you want to come to the section where I test my User Stories.

#### Key Project Goal

The key goal of the website is to create a platform where users can create an account and share recipes as well as viewing recipes shared by other users.

#### Target Audience

The target audience is primarily people who have family recipes that they are proud of and want to share with the world but also anyone that likes to cook and who wants new and different recipes to try out from around the world. That is why I added country as an option to the recipe model as well as the like function so that users could see how the recipes were rated.

#### User Requirements and Expectations:

- Easy navigation throughout the site.

- Uncomplicated user experience to login and handle recipe creation and modification.

- Responsive and informative feedback on the site (comments and likes).

- Capability to access the site across various electronic devices.

- Fully working links and functionality.


### Scope

#### Content | Functionality Requirements:

- Easily accessible navigation bar with the links that have easily understandable names.

- Responsive design.

- A brief and simple description of the site’s purpose.

- A complete collection of recipes.

- A thorough list of ingredients and step-by-step instructions to follow.

- A possibility to see what country the recipe is from.

- A possibility to read comments.

#### Authentication:

- Add registration/login features that give the user access to extra functionality.

- Add Logout functionality for security reasons.

#### Functionality for logged-in users:

  - **CRUD functionality:**

    - Implement feature that allows user to **C**reate recipes.
    - Implement feature that allows user to **R**ead recipes.
    - Implement feature that allows user to **U**pdate recipes.
    - Implement feature that allows user to **D**elete recipes.

  - **Comment and like feature:**

    - Enable logged-in users to post comments on any of the published recipes.
    - Enable logged-in users to like/unlike published recipes.


### Structure

The blog is divided into different pages. Some of the pages are accessible only for logged in users. The blog structure allows users to access recipes via the recipes page or by sorting them through different categories. All users can access detailed information about each recipe by clicking on the recipe card. Users who are logged in can publish, edit, and delete their own recipes, and interact with other recipes by liking and commenting on them.

**For detailed information about all existing features see the section [Existing Features](#existing-features).**


### Skeleton

I created wireframes using [Balsamiq](https://balsamiq.com/). Please note this was only a concept in the beginning so the end result was quite different.

<details>
<summary>Home page</summary>

All users 
![image](static/images/readme/desktop-landing-guest.png)

Logged-in users.
![image](static/images/readme/desktop-landing-user.png)

</details>

<details>
<summary>Recipe page</summary>

![image](static/images/readme/desktop-recipe-page.png)

</details>

<details>
<summary>Recipe detail page</summary>

![image](static/images/readme/wire-desktop-recipe-page.png)

</details>

<details>
<summary>Mobile view home page</summary>

![image](static/images/readme/mobile-landing-page.png)

</details>

### Surface

#### Colour Scheme

The choice of colors depends on the background image chosen for home, sign up, login, and logout pages.

![image](static/images/readme/palette.png)

 - **`313131`** is the primary color used throughout the pages:
   - Welcome message.
   - Category boxes on the home page.
   - Add | Edit recipe forms.
   - Sign Up | Login | Logout forms.
   - Confirmation message when choosing to delete a recipe.

 - **`850000`** is used for links and hover styling on navbar and footer. The color was chosen with the help of [Color Contrast Analyzer](https://dequeuniversity.com/rules/axe/4.7/color-contrast) (provided by Lighthouse testing) in order for background and foreground colors to have a sufficient contrast ratio.

 - **`FFFFFF`** is used as the background color for all recipe-related pages including recipes, recipe details, add recipe, edit recipe and categories.

#### Button styling

All buttons throughout the pages have the same styling, ensuring uniformity and providing a seamless user experience. 
 
I went with following colors:
  - `GREEN` that usually is associated with "YES" | "SAVE" | "OK".
  - `#7e180d` that usually is associated with "NO" | "CANCEL" | "GO BACK".
  - `WHITE` for the text in order to get a sufficient contrast ratio.

    ![image]()

#### Recipe images:

Users have the option to upload images in various sizes. To ensure consistency, I made sure that all recipe cards on the same line had the same height. The size of the images doesn't affect the layout of the recipe detail page. All sections are uploaded correctly as they should be.

![image](static/images/readme/palette.png)

- The colors used were based on the the colors in the logo and the hero image tomato color that stood out to me. I chose the primary color to invoke a feeling of warmth of sharing recipes with community and it matched the heart color as part of the logo. 
  - #7E180D color1
  - #FFFFFF color2 
  - #313131 color3

#### Typography

[Google Fonts](https://fonts.google.com/) was used to import the chosen fonts in use for the site.


- I have used **"Josefin"** for all the headings.

  ![image](static/images/readme/font-josefin.png)

- For the paragraphs I went with **"Crimson"**

  ![image](static/images/readme/font-crimson.png)

[Back to top ⇧](#table-of-contents)

## Technologies Used

### Languages
 
  - HTML
  - CSS
  - Python
  - JavaScript

### Frameworks, Libraries and Programs

  - [Django](https://www.djangoproject.com/)
   

  - [Gunicorn](https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/gunicorn/)
    - Python HTTP server for WSGI applications.
  
  - [ElepantSQL](https://www.elephantsql.com/)
    - Database platform used by the deployed project on Heroku.

  - [Cloudinary](https://cloudinary.com/)
    - The cloud platform used to store static media files.

  - [Git](https://git-scm.com/)
    - used for version controll.

  - [GitPod](https://www.gitpod.io/)
    - The IDE used to create the site.
                                               
  - [GitHub](https://github.com/)
    - The code hosting platform used to save and store the files for the website.

  - [Heroku](https://www.heroku.com/)
    - The cloud platform used to deploy the project into live environment.

  - [Bootstrap](https://getbootstrap.com/)
    - The front-end development framework used for styling along with custom CSS.
  
  - [Lucidchart](https://www.lucidchart.com/pages/sv)
    - The diagramming application used to create ERD diagrams.

  - [Am I responsive?](https://ui.dev/amiresponsive)
    - used to see how the site looks on a range of devices.

[Back to top ⇧](#table-of-contents)

## Features

### Existing Features

#### Navigation Bar

- The navbar is bootstrap and is at the top right of every page. 
- If the user is logged in or is a guest the menu content changes appropriately. 
- The hamburger menu is applied on media breakpoint of 979px. This was when the text from the navbar started going into the family recipe logo and looked cluttered.
- I kept the menu clean with no additional styling to focus attention on the recipes and content instead.
 
  - **Guests:**

    ![image](static/images/readme/desktop-navbar-guest.png)
    
    - The navigation bar contains links for the Logo, Home, Register and Login pages.
    - Clicking "Register" directs users to the create account form.
    - Clicking "Login" directs users to the login form.

  - **Logged-in users:**
    
    ![image](static/images/readme/navbar-desktop.png)

    - The navigation bar contains links for the Logo, Home, Recipes, Add Recipe, and Logout pages.
    - Clicking "Add Recipe" takes the user to a page where they can fill in a form to publish a recipe.
    - Clicking "Logout" directs users to the confirmation page.

- On smaller devices, the navigation bar is displayed using a hamburger menu:

    ![image](static/images/readme/navbar-hamburger.png)

#### Logo

<img src="static/images/readme/logo-mobile.png"><br>
Mobile logo (shown above)
<br>
<img src="static/images/readme/logo-desktop.png"><br>
Desktop logo (shown above)
<br>
<video controls src="static/images/readme/video-navbar.mov" width="100%"><br>
Video showing responsiveness of menu and change to hamburger menu at media breakpoint.

#### Welcome message

- This section welcomes users to the blog, once the user is logged in this message changes, this was achieved using the django check to see if the user is authenticated. 

The short welcome explains:
  - The concept of the site as a platform to share recipes.
  - That the user will need to create an account to do this.

![image](static/images/readme/welcome-guest.png)

The message then changes as seen below. I put a link after the welcome to the user to allow them to view their recipes. From this page they are also able to comment, like, edit and delete their recipes.

![image](static/images/readme/welcome-logged-in.png)

#### User Recipes

- When the user clicks on "view your recipes" they will be taken to the recipes that they have submited. On this page they will be able to also edit and delete their recipes.

![image](static/images/readme/user-recipe.png)


#### Footer

![image](static/images/readme/footer.png)

- The footer is quite unobtrusive to not take away from the main content, the social media icons open up in a new page when clicked.
- The footer remains consistent across all pages.

#### Sign Up

![image](static/images/readme/signup.png)

- The form enables users to register and create an account.
- The form includes following fields:
  - Username
  - Email
  - Password
  - Password (again)

#### Login

![image](static/images/readme/login.png)

- The form enables users to log in.

- When a user logs in, they gain the ability to:
  - like recipes.
  - comment on existing recipes.
  - create new recipes.
  - edit/delete their own recipes.

#### Logout

![image](static/images/readme/logout-confirm.png)

- When the user clicks on Logout in the navbar, they are redirected to a page displaying a confirmation message above.



#### Recipes page

![image](static/images/readme/recipe-page.png)

- This page shows a list of all the published recipes.

- Information displayed:
  - recipe image;
  - created date;
  - create date;
  - "Read more" button.

- By clicking the "View Recipe" button, the user redirects to a page containing detailed information about that specific recipe.

#### Recipe detail page

The recipe detail page includes the following information:



![image]()

- recipe title;
- country;
- number of servings;
- create date
- likes
- Ingredients section.
- Instructions section.
- Comments section:
- There are some comments on the recipe:

      ![image]()
    
    - There are NO comments:

      ![image]()

    - Leave a comment (available ONLY for logged-in users):

      ![image]()

#### Add a Recipe page

- This page includes a form that allows users who are logged in to publish their own recipes.
- Available fields:
  - Title
  - Country
  - Image (uploaded to cloudinary)
  - Description
  - Ingredients
  - Instructions
  - Servings

  - Buttons

    ![image]()
   
    - SAVE:

      - After correctly submitting the form, the user will be redirected to the recipes page upon clicking the save button.

      - A success message is displayed to the user.

    - "CANCEL" button:

       - When the user clicks on the 'go back' button, they will be redirected to the recipes page.


### Future Features

- Categories to be added such as vegan, desert, main course etc
- Enable users to log in using their social media accounts.

[Back to top ⇧](#table-of-contents)

## Testing and Validation.

Detailed testing of the site can be found at [TESTING.md](TESTING.md). 

Testing includes following:

- Validator testing
- Responsivness & Browser Compability Testing
- Manual Testing
- Automated Testing
- Testing of User Stories
- Lighthouse

## Fixed Bugs

  - **Eror**: I could not runserver or make migrations at some point. The error below was shown. Migration folder 0004 was missing.
  ![image](static/images/error-migration-error.png)
  - **Fix**: Moved all the migration files to a subfolder and then tried again.

  - **Problem**: I could not get css to load.
  - **Fix**: I had set debug mode to true which seemed to affect loading of files.

  - **Problem**: Could not get am i responsive to work
  - **Fix**: post found on slack to ignore x-frame in settings. I just had to install an extension to do this in chrome


## Known issues

None

[Back to top ⇧](#table-of-contents)

## Credits

To style the forms I watched the following tutorials
- [Style Django Forms With Bootstrap - Django Blog #5](https://www.youtube.com/watch?v=6-XXvUENY_8&ab_channel=Codemy.com)
- [Tip for changing logo based on screen size](https://stackoverflow.com/questions/34984737/display-a-different-logo-on-mobile-and-desktop)

### Media

- [Favicon Generator](https://favicon.io/favicon-converter/) was used to generate a favicon from the image.

- [Font Awesome](https://fontawesome.com/) was used to add the icons for the social media links in the footer.

- The hero image was taken from [Pexels](https://www.pexels.com/photo/sharing-cherry-tomatoes-3184188/)

- The recipes published by me are taken from [Jamie Oliver](https://www.jamieoliver.com/).

### Content

- The main code of this project is based on the Code Institute tutorial ["I Think Therefore I Blog"](https://github.com/Code-Institute-Solutions/Django3blog) with changes made to suit my project. [Django Documentation](https://docs.djangoproject.com/en/4.2/) was used throughout the project.

- The readme skeleton was taken from [Kattis91](https://github.com/Kattis91/what-is-cooking)

- [Secret Key Generator](https://miniwebtool.com/django-secret-key-generator/) was used to generate Django Secret Key.

### Acknowledgements

I would like to aknowledge the following people:

  - Spencer my mentor who helped me throughout this project.

  - My sister Claire in France who helped with the concept via her feedback of what she would like in a recipe sharing site.

  - Tutor Assistance Team for helping me out with diverse things throughout the project.

[Back to top ⇧](#table-of-contents)

## Deployment

### Installing Django and supporting libraries

- Install **Gunicorn**(the server that is used to run Django on Heroku): `pip3 install django gunicorn`

- Install **dj_database_url** and **pyscopg2**(connect to PostegreSQL): `pip 3 install dj_database_url pyscopg2`

- Install **Cloudinary** (The cloud platform used to store static media files): `pip3 install dj3-cloudinary-storage`



### Create App

- Create Project.

- Create App.

- Add App to installed apps in **settings.py**:

  ````
  INSTALLED_APPS = [
    ...
    'APP_NAME',
  ]
  ````

### Create a new external database

- Navigate to **ElephantSQL.com** and click **“Get a managed database today”**.

- Click **Create New Instance**.

- Set up your plan:
  - give your plan a Name;
  - select the Tiny Turtle (Free) plan.

- Click **“Select Region”** and select a data center near you.

- Click **"Review"**, check that your details are correct and click **“Create instance”**.

- Return to the dashboard and click on the database instance name for this project.

- Copy the database URL.


### Create the Heroku app

 - Sign up for Heroku and accept terms of service.

 - Click the **"Create a new app"** button.

 - Give your app a name and select the region closest to you. A name must be unique.
  

### Create an env.py file

- Create **env.py** file and check that the file is included in the **.gitignore file**.

- Import os library: `import os`.

- Set environment variables:
  - **DATABASE_URL** with the value you just copied from ElephantSQL: `os.environ["DATABASE_URL"]="<copiedURL>`
  - **SECRET_KEY**: `os.environ["SECRET_KEY"] = "randomSecretKey"` 

### Update settings.py

- Add the following code:

  ````
  import os
  import dj_database_url
  if os.path.isfile('env.py'):
      import env
  ````

- Remove the insecure secret key provided by Django. Change your SECRET_KEY variable to the following: `SECRET_KEY = os.environ.get('SECRET_KEY')`

- Comment out the original **DATABASES** variable and add the code below:

  ````
  DATABASES = {
      'default': dj_database_url.parse(os.environ.get("DATABASE_URL"))
  }
  ````

- Save all files and make migrations: `python3 manage.py migrate`


### Connecting Heroku to the database

- Go back to the Heroku dashboard and open the **Settings** tab:

- Create _Config Vars_:
  - KEY: **PORT** | VALUE: **8000**.
  - KEY: **SECRET_KEY** | VALUE: **randomSecretKey**(the value that is in env.py)
  - KEY: **DATABASE_URL** | VALUE: **ElephantSQL database url**(no quotation marks needed)
  - KEY: **DISABLE_COLLECTSTATIC** | VALUE: **1** (Temporary to be able to deploy the project as we do not have any static files yet)


### Get static and media files stored on Cloudinary

- Create a Cloudinary account (steps can be found in the [Code Institutes](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+FST101+2021_T1/courseware/b31493372e764469823578613d11036b/9236975633b64a12a61a00e0cca7c47d/?child=first) tutorial in LMS).

- Copy **API Environment Variable** in the Cloudinary dashboard.

- Go back to **env.py** and add a new environment vriable:
  - **CLOUDINARY_URL** with the value just copied from the dashboard ⇧(remove CLOUDINARY_URL in the beginning).

- HEROKU: Add a new _Config Var_ with the KEY **CLOUDINARY_URL**, and the same value(URL) as in the step above.

- **settings.py**:

  - Add Cloudinary Libraries to installed apps (the order is important):

    ````
    INSTALLED_APPS = [
      ...,
      'cloudinary_storage',
      'django.contrib.staticfiles',
      'cloudinary',
      ...,
    ]
    ````
  
  - Tell Django to use Cloudinary to store media and static files:
   
    ````
    STATICFILES_STORAGE = 'cloudinary_storage.storage.StaticHashedCloudinaryStorage'
    STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static'), ]
    STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

    MEDIA_URL = '/media/'
    DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'
    ````
 
### Tell Django where templates will be stored

  - Link file to the templates directory in Heroku. _Place under the BASE_DIR line_:

    `TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')`

  - Change the templates directory to TEMPLATES_DIR:

    ````
    TEMPLATES = [
    {
      ...,
      'DIRS': [TEMPLATES_DIR],
      ...,
          ],
        },
      },
    ]
    ````

### Add Heroku Hostname to ALLOWED_HOSTS

  ````
  ALLOWED_HOSTS = ['app-name.herokuapp.com', 'localhost']
  ````

### Create a Procfile

`web: gunicorn family_recipe.wsgi`


### Go back to Heroku

- Click on the **"Deploy"** section on the top of the page.

- Select **GitHub** as deployment method and click the **"Connect to GitHub"** button.

- Search for the repository for this project, _adrianproject4_. 

- Click **"Connect"** to link up Heroku app to the GitHub repository.

- Click on **"Deploy Branch"**.

- Click the **"Enable Automatic Deploys"** button to make it possible for Heroku to rebuild the app a new change is pushed to GitHub repository.

[Back to top ⇧](#table-of-contents)

## Development 

## Fork

- Log in to **GitHub** and ind the repository for this project, [adrianskelton/adrianproject4](https://github.com/adrianskelton/adrianproject4).

- In the top-right corner of the page, click **Fork**.

- Type some new name into the "Repository name" field to distinguish your fork from the upstream repository.

- Click **Create Fork**.

- The fork is now in your personal account and can be changed in the way you want.

## Clone

- On **GitHub**, navigate to your fork of the _adrianproject4_ repository.

- Above the list of files, click **<>Code**.

- Copy the **URL** for the repository. Repository can be cloned in three different ways:
  - **HTTPS**;
  - **SSH**;
  - **GitHub CLI**.

- Open Terminal and change the current working directory to the location where you want the cloned directory.

- Type `git clone`, and paste the URL you copied earlier. Press **Enter**
