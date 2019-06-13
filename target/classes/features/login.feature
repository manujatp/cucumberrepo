Feature: TPG Login Feature

Scenario: TPG MyAccount Login Test Scenario

#Simple Data Driven without Examples keyword
Given open the browser
When user is already on Login Page
Then title of the Login Page is My Account Login page
Then user enters "rajesh1978" and "abcd1978"
Then user clicks on Login button
Then user on home page
Then logout from the home page
Then close the browser

#Data Driven with Examples keyword
Scenario Outline: TPG PostOffice Login Test Scenario

Given open the browser
When user is already on Post Office Login Page
Then title of the Login Page is Post Office Login page
Then user enters "<username>" and "<password>" for login
Then user clicks on Login button in Post Office login page
Then logout from the post office home page
Then close the browser

Examples:
   | username | password |
   | rajesh1978 | abcd1978 |