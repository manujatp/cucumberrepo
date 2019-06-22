Feature: Login MyAccount in TPG

Scenario: Login to TPG MyAccount Page

Given open the browser
When user is already on TPG MyAccount Login page
Then title of the Login Page is My Account Login page
Then user enters username and password
| username | password |
| rajesh1978 | abcd1234 |
#| manu1234 | abcd345| For configure the step definition for multiple login entry : add login and logout for each entry
#mostly multi entry is not for login details its mainly for adding values (Data driven)
Then user clicks on Login button
Then user on home page
Then logout from the home page
Then close the browser