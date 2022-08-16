# .NetCore and Angular Application
This project is a template for local development on an API and an Angular application.

# About AdoptaFriend
This website is about meeting other peaple with dogs/cats so they can communicat, if it's about advices on places, meet together with there dogs or adopt one.
In this project I used SQLite DB, user managment, photo management-  only admin has controll about the images that the users uploads, the admin needs to approove/ disapprove them. 
User can log in / register to the website and can send messages to other users, like other users, basically the user can manage his profile as he likes and see other profiles and like them, massage them...

# Project Startup
The project can be started with the single command: dotnet run. The .csproj file has been modified to automatically start the Angular developer server included in the Angular CLI (ng serve). 
There is an error handeling in the website for codes 404/401/400/500. 
Authentication & Authorization are with JWT Tokens

# Client:
This project was generated with Angular CLI
Development server:
Run ng serve for a dev server.
Navigate to http://localhost:4200/.
The app will automatically reload if you change any of the source files.

# Summary and system instructions
The system has about 15 users for now(all users are displayed in the seed data file in the code, or you can login with example user: username: Eran, password: Pa$$w0rd), each user can login to his account with the username and a Permanent password : Pa$$w0rd. 
New users can register by fill in a simple form that include: username, known as, date of birth, city, country, password and a confirmed password that must be equal to the password the user entered. 
The password must include: at least one capital letter, at least 6 chars, at least one digit (0-9). 
If the entered password is no valid - a relevant validation error will be displayed. 

After login/ creating new account, the user is redirected to the search page, in the search page, the user can filter the list of the dogs by age or sex and then by clicking on 'Aplly filters'.
Reset button will reset the last filter. 
User can also filter by last active/ newwest member. 
In each page will be displayed 5 dogs, user can move between the pages to see the rest of the dogs. 
If user want to know more about the dog he can simply click on man icon in the card and he will be ridiredted to the dog details, in the dog details he will see description, lokking for, the dog age, type, last active, and member since. 
In the photos tab the user will see al photos of the dog, and in the messages tab the user can send the dog a message. 
If the dog saw the message, the message status will be 'read', and if the messages is unread... this will be the status until the dog will read the message. 
To follow up the message the user can go to the messages tab - outbox tab.

Messages tab: user can see al inboxes he got from other users or outboxes he sent to other users or the unread messages he didn't see yet. 

Next tab is the lists tab, in this tab user will see the friends he liked and the friends who liked him, he also can search a specific friend by name. 

All dogs tab: this page will display all dogs members in the system, theier name, age, city and type. 
User can search for a relevant dog he wants by type, by input the relevant type in the field 'search by type' and click on search, all relevant results will be displayed. 

About us tab: if you want to learn about us a little bit more you are welcome! or you can simply click on facebook / instegram/ twiter/ linkdin and you will be retirected to the relevant social media, there you can learn about us even more! 

Each user can edit his profile by clicking on the 'Welcome {username}' >> edit profile. 
In the edit profile user can change the description, looking for, Interests and details such as: city, country and type. 
User can also edit his photos, he can remove photos (except the main photo), add new photo, set other photo as main. 
After uploading a photo, the photo will be waiting for approval of the admin user. 

Admin user: to login with admin user: username: admin, password: Pa$$w0rd.
Admin can control which photo to approve/ disapprove, (photo menagemnt in the admin tab), admin can also control the roles all users has. 
By clicking on 'edit role', user can decide wheater the user will be admin/ moderator/ member or even all of them. 


This was a short brief on the system, hope you enjoy. 
Thank you!




