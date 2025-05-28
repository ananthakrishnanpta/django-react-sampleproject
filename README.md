Sample project in react and django integration.



## Running the project

- Clone the repository into local system
- Open terminal and navigate to the project folder.
- Run `python -m venv virt` to create a virtual environment.
- Activate the virtual environment : `virt/Scripts/activate` 
- `pip install -r requirements.txt`
- navigate to `cd backend`
    - Run migrations
        -  `python manage.py makemigrations`
        -  `python manage.py migrate`
    - Create superuser
        -  `python manage.py createsuperuser`
        - Follow instructions and remember the credentials.
    - Run the server
        -  `python manage.py runserver`
        - Click the link appearing on terminal 
    - go to the ip:port of the development server (127.0.0.1:8000 by default) and type in the path `/admin/` in address bar of browser.
     - For example, `127.0.0.1:8000/admin/`
     - Sign in using the superuser credentials.
     - Create products
- Open another terminal and navigate to the `frontend` folder inside the project.
    - Install dependencies
        - `npm install`
    - Run development server
        - `npm run dev`

    - Navigate to the given url (127.0.0.1:5173/ by default)in terminal.
    - Check if the products added using admin panel is appearing in the front end.

