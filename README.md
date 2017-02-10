#WebTask

Project assessment for TangoCode's Junior Software Engineer position.

By: Sierra Gregg

##Instructions

1. Clone repo `git clone`
2. Start a local Postgres server. This depends on your setup. To manually start a server, run `pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start`
3. Create the database with `createdb webtask`
4. Import data into database with `psql webtask < scr/api/webtask_seed.sql`
5. Navigate inside the project folder and install dependencies by running `cd WebTask && npm install`
6. To get a copy of the app running quickly run `npm run dev`, the app will be available at  [http://localhost:5000/](http://localhost:5000/)

##Video Demonstration

A video demonstration of the app working in Chrome, Safari, and Firefox can be found here: [https://youtu.be/EZ91Yha62oE](https://youtu.be/EZ91Yha62oE)

##Development Environment

The app was developed on a MacBook Pro running macOS Sierra version 10.12.3. In addition to the decencies listed in the `package.json`, the app was developed with:
* PostgreSQL v9.6.1
* npm v4.1.2
* Node v7.5.0

The following tools were used during the development process:
* [Atom](https://atom.io/) v1.13.1 (Text Editor)
* [Postico](https://eggerapps.at/postico/) v1.1.1 (PostgreSQL Client for the Mac)
* [ERDPlus](https://erdplus.com/#/) (Online Diagram app)

##Thought Process

###Database

I choose to persist the app's data using PostgreSQL DBMS. Although I could have setup a NoSQL database, such as MongoDB, faster; I thought a rational database suited the structured nature of the data. I choose PostgreSQL only because I have used it recently.

Since the full feature set of the app is never described, I decided to keep the database simple. I did not attempt to store the images in the database, because I have never done so in the past and for such a small project the file system seemed like a better storage option. My initial idea was to store everything under one table, `car`. Over halfway through the project, I realized the flaw in my logic. The image files might not be in the database, but we still need information about where they are in the file system. In the end, my database consisted of two tables, `car` and `picture`, connected via a one to many relationship. Yes, there is potential for more tables; however I choose the simplest possible interpretation, instead of guessing about possible features that are not discussed in the instructions.

After deciding to group most of the information under the `car` table, I spent some time considering Candidate Keys. Both *vim* and *item number* should be unique fields and therefore qualify as natural keys. If I picked one as the primary key, the table would not meet the criteria of 3NF, because there would be a functional dependency on the candidate key I didn't pick. On the other hand, combining the fields into a compound key would not meet 2NF, because uniqueness can be determined by either field. After reading a few articles (see references section), I decided to use an artificial auto-incrementing key. The benefits of this approach is it insures uniqueness even if *vim* or *item number* need to be changed and it is normalized to 2NF. The downside to the approach is it does not meet 3NF.

I have included the schema diagrams for both database designs.

###RESTful API

The setup and code for the API was straight forward. I used Node.js with the Express.js framework. Since the React app only requests information, the API consists of one GET endpoint. The `api/car/:carid` endpoint requires a car id as a parameter and returns the associated car details, including an array of image paths.

I used a library called pg-promise to query the database. As the name implies, the library uses promises to handle async database actions.

The server also hosts the front-end files at the root and in development will
log HTTP requests to the console.

##React Front-end

I started by identifying components. [webtask_component_list](webtask_component_list.png) provides a list of the components I chose and their names. In order to find components, I looked for reusable UI elements, like the Extrior and Performance tables, and logical groupings, like the image gallery.

After identifying the components, I wrote a static site only using React. Next, I designated the `car-detail` component as the master, i.e. holds the state and performs most of the logic. I used React's built in state management techniques, because the instructions did not mention a state management library like, Redux, and adding such a library seemed like overkill. Once the components were in place, the interactive logic was fairly easy.

If I had more time, I would like to refractor the `car-detail` component. Right now it handles too many things: an API call, tracking the width of the browser, and the app state. That having been said, the rest of my components are simple, clean, and stateless.

##CSS

I tackled the styles last, because I knew they would take the longest. I chose to use LESS because I wanted a way of defining variables for later use. I have never worked from a model that includes measurements. It was an interesting, if frustrating, experience. The images provided with the instructions only showed `h4` elements, so I wrapped all my text inside `h4` tags. There were no units associated with the values provided on the images, so I chose to go with `px`. Unfortunately, this means the site isn't very responsive outside the Desktop and Mobile views described in the instructions. The app looks the best at 1024 px width and 500 px width. I tried my hardest to match the dimensions provided in the instructions, with some success.

##Resources

* [Font Awesome](http://fontawesome.io/)
* [Normalization of Database](http://www.studytonight.com/dbms/database-normalization.php)
* [What's the best practice for primary keys in tables?](http://stackoverflow.com/questions/337503/whats-the-best-practice-for-primary-keys-in-tables)
* [Choosing a Primary Key: Natural or Surrogate?](http://www.agiledata.org/essays/keys.html)
* [How I Write SQL, Part 1: Naming Conventions](https://launchbylunch.com/posts/2014/Feb/16/sql-naming-conventions/)
* [PostgreSQL 9.6 Docs](https://www.postgresql.org/docs/9.6/static/index.html)
* [Different mobile and desktop layouts with React](https://goshakkk.name/different-mobile-desktop-tablet-layouts-react/) by Gosha Arinich
* [How to Create Skewed Edges With CSS](http://www.hongkiat.com/blog/skewed-edges-css/) by Agus
