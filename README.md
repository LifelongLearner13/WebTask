#WebTask

Project assessment for TangoCode's Junior Software Engineer position.

By: Sierra Gregg

##Instructions

1. Clone repo `git clone`
2. Start a local Postgres server. This depends on your setup. To manually start a server, run `pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start`
3. Create the database with `createdb webtask`
4. Import data into database with `psql webtask < scr/api/webtask_seed.sql`
2. Navigate inside the project folder and install dependencies by running this commands `cd WebTask && npm install`

##Development Environment

The app was developed on a MacBook Pro running macOS Sierra version 10.12.3. In addition to the decencies listed in the package.json, the app uses:
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

Since the full feature set of the app is never described, I decided to keep the database simple. I did not attempt to store the images in the database, because I have never done it in the past and for such a small project the file system seemed like a better storage option. As for textual information, I grouped everything under one table, called `car`. The major trade-offs of this approach are simplicity of keeping everything in one place versus, planning for a hidden/future feature. For example, the *save* field implies a user account which would require a separate table. Instead of guessing about possible features that are not discussed in the instructions, I choose the simplest possible interpretation.

After deciding to use one table, I spent some time considering Candidate Keys. Both *vim* and *item number* should be unique fields and therefore qualify as natural keys. If I picked one as the primary key, the table would not meet the criteria of 3NF, because there would be a functional dependency on the candidate key I didn't pick. On the other hand, combining the fields into a compound key would not meet 2NF, because uniqueness can be determined by either field. After reading a few articles (see references section), I decided to use an artificial auto-incrementing key. The benefits of this approach are it insures uniqueness even if *vim* or *item number* need to be changed and it is normalized to 2NF. The downside is the approach does not meet 3NF.

##Resources

* [Normalization of Database](http://www.studytonight.com/dbms/database-normalization.php)
* [What's the best practice for primary keys in tables?](http://stackoverflow.com/questions/337503/whats-the-best-practice-for-primary-keys-in-tables)
* [Choosing a Primary Key: Natural or Surrogate?](http://www.agiledata.org/essays/keys.html)
* [How I Write SQL, Part 1: Naming Conventions](https://launchbylunch.com/posts/2014/Feb/16/sql-naming-conventions/)
* [PostgreSQL 9.6 Docs](https://www.postgresql.org/docs/9.6/static/index.html)
* 
