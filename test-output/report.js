$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Selenium Project/TPGBDDProj/src/main/java/features/HooksConcept.feature");
formatter.feature({
  "line": 1,
  "name": "Hooks Concept Feature",
  "description": "",
  "id": "hooks-concept-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 207645,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "add cases to CapsuleCRM",
  "description": "",
  "id": "hooks-concept-feature;add-cases-to-capsulecrm",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on cases page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user fills the add case form",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "case is added",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.user_is_on_cases_page()"
});
formatter.result({
  "duration": 70753829,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.user_fills_the_add_case_form()"
});
formatter.result({
  "duration": 58596,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.case_is_added()"
});
formatter.result({
  "duration": 57457,
  "status": "passed"
});
formatter.after({
  "duration": 52906,
  "status": "passed"
});
formatter.before({
  "duration": 101831,
  "status": "passed"
});
formatter.before({
  "duration": 63147,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "add people to capsule crm",
  "description": "",
  "id": "hooks-concept-feature;add-people-to-capsule-crm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user is on people page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user fills add people form",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "people is added",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.user_is_on_people_page()"
});
formatter.result({
  "duration": 88178,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.user_fills_add_people_form()"
});
formatter.result({
  "duration": 58596,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.people_is_added()"
});
formatter.result({
  "duration": 52337,
  "status": "passed"
});
formatter.after({
  "duration": 49494,
  "status": "passed"
});
formatter.before({
  "duration": 140516,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "add task to capsule crm",
  "description": "",
  "id": "hooks-concept-feature;add-task-to-capsule-crm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user is on task page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user fills add task form",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "task is added",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.user_is_on_task_page()"
});
formatter.result({
  "duration": 93867,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.user_fills_add_task_form()"
});
formatter.result({
  "duration": 70543,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.task_is_added()"
});
formatter.result({
  "duration": 71111,
  "status": "passed"
});
formatter.after({
  "duration": 65422,
  "status": "passed"
});
formatter.after({
  "duration": 170666,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "add tags to capsule crm",
  "description": "",
  "id": "hooks-concept-feature;add-tags-to-capsule-crm",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "user is on tag page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user fill add \"\u003ctag\u003e\" form",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "tag is added",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "hooks-concept-feature;add-tags-to-capsule-crm;",
  "rows": [
    {
      "cells": [
        "tag"
      ],
      "line": 27,
      "id": "hooks-concept-feature;add-tags-to-capsule-crm;;1"
    },
    {
      "cells": [
        "Tester"
      ],
      "line": 28,
      "id": "hooks-concept-feature;add-tags-to-capsule-crm;;2"
    },
    {
      "cells": [
        "Analyst"
      ],
      "line": 29,
      "id": "hooks-concept-feature;add-tags-to-capsule-crm;;3"
    },
    {
      "cells": [
        "Lead"
      ],
      "line": 30,
      "id": "hooks-concept-feature;add-tags-to-capsule-crm;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 83058,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "add tags to capsule crm",
  "description": "",
  "id": "hooks-concept-feature;add-tags-to-capsule-crm;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "user is on tag page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user fill add \"Tester\" form",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "tag is added",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.user_is_on_tag_page()"
});
formatter.result({
  "duration": 84195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 15
    }
  ],
  "location": "HooksStepDefinition.user_fill_add_form(String)"
});
formatter.result({
  "duration": 1682204,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.tag_is_added()"
});
formatter.result({
  "duration": 41529,
  "status": "passed"
});
formatter.after({
  "duration": 55751,
  "status": "passed"
});
formatter.before({
  "duration": 89885,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "add tags to capsule crm",
  "description": "",
  "id": "hooks-concept-feature;add-tags-to-capsule-crm;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "user is on tag page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user fill add \"Analyst\" form",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "tag is added",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.user_is_on_tag_page()"
});
formatter.result({
  "duration": 61440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Analyst",
      "offset": 15
    }
  ],
  "location": "HooksStepDefinition.user_fill_add_form(String)"
});
formatter.result({
  "duration": 105244,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.tag_is_added()"
});
formatter.result({
  "duration": 44942,
  "status": "passed"
});
formatter.after({
  "duration": 34133,
  "status": "passed"
});
formatter.before({
  "duration": 100694,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "add tags to capsule crm",
  "description": "",
  "id": "hooks-concept-feature;add-tags-to-capsule-crm;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "user is on tag page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user fill add \"Lead\" form",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "tag is added",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.user_is_on_tag_page()"
});
formatter.result({
  "duration": 58026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lead",
      "offset": 15
    }
  ],
  "location": "HooksStepDefinition.user_fill_add_form(String)"
});
formatter.result({
  "duration": 67129,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.tag_is_added()"
});
formatter.result({
  "duration": 42667,
  "status": "passed"
});
formatter.after({
  "duration": 32996,
  "status": "passed"
});
});