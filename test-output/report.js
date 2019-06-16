$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Selenium Project/TPGBDDProj/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "TPG Login Feature",
  "description": "",
  "id": "tpg-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "TPG MyAccount Login Test Scenario",
  "description": "",
  "id": "tpg-login-feature;tpg-myaccount-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#Simple Data Driven without Examples keyword"
    }
  ],
  "line": 6,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user is already on Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "title of the Login Page is My Account Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters \"rajesh1978\" and \"abcd1978\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "logout from the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.open_the_browser()"
});
formatter.result({
  "duration": 3265538484,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 2919610334,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_Login_Page_is_My_Account_Login_page()"
});
formatter.result({
  "duration": 49046742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rajesh1978",
      "offset": 13
    },
    {
      "val": "abcd1978",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 171588787,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 6539790068,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_on_home_page()"
});
formatter.result({
  "duration": 63656942,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.logout_from_the_home_page()"
});
formatter.result({
  "duration": 2638433668,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 67614701,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 15,
      "value": "#Data Driven with Examples keyword"
    }
  ],
  "line": 16,
  "name": "TPG PostOffice Login Test Scenario",
  "description": "",
  "id": "tpg-login-feature;tpg-postoffice-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user is already on Post Office Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "title of the Login Page is Post Office Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" for login",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on Login button in Post Office login page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "logout from the post office home page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "tpg-login-feature;tpg-postoffice-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 27,
      "id": "tpg-login-feature;tpg-postoffice-login-test-scenario;;1"
    },
    {
      "cells": [
        "rajesh1978",
        "abcd1978"
      ],
      "line": 28,
      "id": "tpg-login-feature;tpg-postoffice-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "TPG PostOffice Login Test Scenario",
  "description": "",
  "id": "tpg-login-feature;tpg-postoffice-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user is already on Post Office Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "title of the Login Page is Post Office Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user enters \"rajesh1978\" and \"abcd1978\" for login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on Login button in Post Office login page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "logout from the post office home page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.open_the_browser()"
});
formatter.result({
  "duration": 5689878275,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Post_Office_Login_Page()"
});
formatter.result({
  "duration": 5305913086,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_Login_Page_is_Post_Office_Login_page()"
});
formatter.result({
  "duration": 61994081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rajesh1978",
      "offset": 13
    },
    {
      "val": "abcd1978",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_login(String,String)"
});
formatter.result({
  "duration": 193989918,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_button_in_Post_Office_login_page()"
});
formatter.result({
  "duration": 1854300770,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.logout_from_the_post_office_home_page()"
});
formatter.result({
  "duration": 1163909927,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 98847261,
  "status": "passed"
});
});