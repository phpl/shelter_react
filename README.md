# shelter_react

## About application
Our application allows user to get into character of shelter manager. We allow user to Create, Read, Update and Delete animals. Application does contain validation of fields while adding or editing animals. We added confirmation modal for both delete and adopt action in case of user misclick. Effective filtering allows manager to find whats in his mind reallly quick.
## Some screenshots of application
Shelter manager view:
![ScreenShot](https://github.com/phpl/shelter_react/blob/master/screenshots/main.PNG?raw=true)
Filter functionality:
![ScreenShot](https://github.com/phpl/shelter_react/blob/master/screenshots/FIltered.PNG?raw=true)
Add/Edit animal with validation:
![ScreenShot](https://github.com/phpl/shelter_react/blob/master/screenshots/form.PNG?raw=true)
Confirmation of adopting animal:
![ScreenShot](https://github.com/phpl/shelter_react/blob/master/screenshots/confirmatino.PNG?raw=true)
Confirmation of deleting animal:
![ScreenShot](https://github.com/phpl/shelter_react/blob/master/screenshots/delete.PNG?raw=true)
## About implementation
  Application is using React.js with Redux for front end experience. For back end we are using Django. For communication with both front end and back end Django REST framework is being used. Thanks to django-webpack-loader we are coupling frontend and backend. We are using Django to both serve frontend and to expose the REST API. As database we are using SQLite.
## Launching application in development mode
  In frontend directory use command
  ```yarn start```
  In backend directory
  ```python manage.py runserver```
## Launching application in production mode
  In frontend directory use command
  ```yarn build```
  It generates all needed files in backend path.
  In backend directory use command
  ```python manage.py runserver --settings=shelter.production_settings```
