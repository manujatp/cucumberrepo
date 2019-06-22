package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HooksStepDefinition {
	
//Global Hooks:	Same as @BeforeMethod in TestNg, execute before each scenario, Ordering also possibe Order=0 for Before ordering in ascending order
	@Before(order=0)
	public void setUP(){
		System.out.println("Launch FF");
		System.out.println("Enter url for capsule crm");
	}
	
//Global Hooks:	Same as @AfterMethod in TestNg, execute after each scenario: for after ordering is in descending order
	@After(order=0)
	public void tearDown(){
		System.out.println("Close the browser");
	}
	
//	Tagged Hooks : It is specific to the tag specified scenarios
	@Before("@RegressionTest")
	public void tagBefore(){
		System.out.println("tagBefore for regression only");
	
	}
	
	@After("@SmokeTest")
	public void tagAfter(){
		System.out.println("tag After for smoke and regression");
	}
	

	@Given("^user is on cases page$")
	public void user_is_on_cases_page() {
		System.out.println("user is on cases page");
	}

	@When("^user fills the add case form$")
	public void user_fills_the_add_case_form() throws Throwable {
		System.out.println("user fills the add case form");
	}

	@Then("^case is added$")
	public void case_is_added() throws Throwable {
		System.out.println("case is added");
	}

	@Given("^user is on people page$")
	public void user_is_on_people_page() throws Throwable {
		System.out.println("user is on people page");
	}

	@When("^user fills add people form$")
	public void user_fills_add_people_form() throws Throwable {
		System.out.println("user fills add people form");
	}

	@Then("^people is added$")
	public void people_is_added() throws Throwable {
		System.out.println("people is added");   
	}

	@Given("^user is on task page$")
	public void user_is_on_task_page() throws Throwable {
		System.out.println("user is on task page");
	}

	@When("^user fills add task form$")
	public void user_fills_add_task_form() throws Throwable {
		System.out.println("user fills add task form");
	}

	@Then("^task is added$")
	public void task_is_added() throws Throwable {
		System.out.println("task is added");
	}

	@Given("^user is on tag page$")
	public void user_is_on_tag_page() throws Throwable {
		System.out.println("user is on tag page");
	}

	@When("^user fill add \"([^\"]*)\" form$")
	public void user_fill_add_form(String arg1) throws Throwable {
		System.out.println("user fill add "+arg1+" form"); 
	}

	@Then("^tag is added$")
	public void tag_is_added() throws Throwable {
		System.out.println("tag is added");
	}
}
