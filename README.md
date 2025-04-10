# Customer Satisfaction Survey

This project is a simple customer satisfaction survey form built using HTML, CSS, JavaScript, PHP, and MySQL. The form allows users to provide feedback on their experience with a service/product. It collects information such as name, email, age, satisfaction level, recommendation, improvement areas, and additional comments. The data is stored in a MySQL database.

## Features

- **Survey Form**: Collects user feedback including:
  - Full name
  - Email address
  - Age
  - Satisfaction level (1-5 scale)
  - Recommendation (Yes/No)
  - Improvement areas (multiple checkboxes)
  - Additional comments
- **Form Validation**: Client-side validation for all fields, including custom error messages.
- **Responsive Design**: Fully responsive form for desktop and mobile devices.
- **Data Storage**: Survey responses are stored in a MySQL database.
- **Thank You Message**: After submitting, a thank you message is displayed.

## Technologies Used

- **Frontend**:
  - HTML
  - CSS
  - JavaScript
- **Backend**:
  - PHP
- **Database**:
  - MySQL

## Project Structure

```
survey/
├── survey.html      # The survey form (HTML)
├── survey.css       # Styling for the survey form (CSS)
├── survey.js        # JavaScript for client-side form validation
└── submit.php       # PHP script to process and store form data
```

## Prerequisites

1. A local web server (e.g., XAMPP, WAMP, or LAMP) is installed.
2. PHP version 7.0 or above.
3. MySQL database.

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/survey.git
   ```

2. **Setup MySQL Database**:
   - Create a new database named `survey` in MySQL.
   - Create a table to store survey responses. You can use the following SQL query to create the table:

     ```sql
     CREATE TABLE survey_responses (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) NOT NULL,
         age INT,
         satisfaction INT,
         recommend VARCHAR(3),
         improvements TEXT,
         comments TEXT
     );
     ```

3. **Configure Database Connection**:
   - Open `submit.php` and check the database connection settings. Ensure the `$host`, `$dbname`, `$username`, and `$password` are set correctly based on your local MySQL setup.

4. **Place the files on your server**:
   - Move the entire `survey` folder to the appropriate directory on your local web server (e.g., `htdocs` in XAMPP).

5. **Access the Survey**:
   - Open your browser and visit `http://localhost/survey/survey.html` to see the form in action.

## Form Validation

- The form has **client-side validation** implemented using JavaScript.
- It checks for:
  - Required fields (name, email, satisfaction level, recommendation, improvements).
  - Valid email format.
  - Age between 1 and 120.
  - Maximum 500 characters for comments.

## PHP and MySQL

- The survey form is submitted to `submit.php`, which processes the form data.
- Data is sanitized using PHP's `filter_input` function.
- Survey responses are inserted into the `survey_responses` table in MySQL.

## License

This project is open-source and available under the MIT License. Feel free to use and modify it!

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make changes, and create a pull request.

## Contact

If you have any questions or suggestions, feel free to reach out to me at:

- **Email**: arslannawaz293@gmail.com
- **GitHub**: https://github.com/arslan12941
```

### Notes:
1. **Database Table**: I've included the SQL query to create the table in MySQL. Be sure to adapt it if needed.
2. **Database Configuration**: Double-check your database connection details in `submit.php`.
3. **License**: Adjust the license section as necessary based on your preferences.
