# shelter_react

## About implementation
  Application is using React.js with Redux for front end experience. For back end we are using Django. For communication with both front end and back end Django REST framework is being used. Thanks to django-webpack-loader we are coupling frontend and backend. We are using Django to both serve frontend and to expose the REST API.
## To launch application in development mode:
  In frontend directory use command
  ```yarn start```
  In backend directory
  ```python manage.py runserver```
## To launch aplication in production mode:
  In frontend directory use command
  ```yarn build```
  It generates all needed files in backend path.
  In backend directory use command
  ```python manage.py runserver --settings=shelter.production_settings```
