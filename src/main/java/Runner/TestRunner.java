package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:/Selenium Project/TPGBDDProj/src/main/java/features/HooksConcept.feature",//path of feature file
		glue = ("stepDefinitions"),//path of step definition file
		format = {"pretty","html:test-output", "json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},//to generate different types of reports
		monochrome = true, //display the console output in readable format
		strict = true,//if it is true it will give the pending step definitions
		dryRun = false//check the mapping is proper between feature file and step definitions
		//tags = "@SmokeTest" //Execute the scenarios with tag @SmokeTest
		//tags = {"@SmokeTest" , "@RegressionTest"} //Execute scenarios that match @SmokeTest AND @RegressionTest 
		//tags = {"@SmokeTest , @RegressionTest"}  //Execute scenarios that match @SmokeTest OR @RegressionTest
		//tags = {"~@End2EndTest"} //Execute the Scenarios which doesnt have the tag @End2EndTest(minus operation
		//tags = {"~@SmokeTest" , "~@RegressionTest" , "~@End2EndTest"} // Execute the scenarios which doesnt have any of the tags
		)
public class TestRunner {

}
