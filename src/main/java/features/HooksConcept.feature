Feature: Hooks Concept Feature

Scenario: add cases to CapsuleCRM
Given user is on cases page
When user fills the add case form
Then case is added

@RegressionTest
Scenario: add people to capsule crm
Given user is on people page
When user fills add people form
Then people is added

@SmokeTest
Scenario: add task to capsule crm
Given user is on task page
When user fills add task form
Then task is added


Scenario Outline: add tags to capsule crm
Given user is on tag page
When user fill add "<tag>" form
Then tag is added

Examples:
|tag|
|Tester|
|Analyst|
|Lead|
