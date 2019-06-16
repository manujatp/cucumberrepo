Feature: Login Feature for PostOffice

Scenario: Login in to PostOffice
#Data driven using Data Table if we provide multi set of values (another row) we have to do another logic in step definition bad approach
Given open the browser
When user is already on Post Office Login Page
Then title of the Post Office Page is Post Office Login page
Then user enters username and password for login
| rajesh1978 | abcd1978 |
Then user clicks on Login button in Post Office login page
Then logout from the post office home page
Then close the browser