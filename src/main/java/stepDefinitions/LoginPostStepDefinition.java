//package stepDefinitions;
//
//import java.util.List;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.Keys;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//
//import cucumber.api.DataTable;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import io.github.bonigarcia.wdm.WebDriverManager;
//import junit.framework.Assert;
//
//public class LoginPostStepDefinition {
//	
//	WebDriver driver;
//	
//	@Given("^open the browser$")
//	public void open_the_browser(){
//		WebDriverManager.chromedriver().setup();
//		driver = new ChromeDriver();
//	}
//	
//	@When("^user is already on Post Office Login Page$")
//	public void user_is_already_on_Post_Office_Login_Page(){
//		driver.get("https://www.tpg.com.au/home/postoffice");
//	}
//	
//	@Then("^title of the Post Office Page is Post Office Login page$")
//	public void title_of_the_Post_Office_Login_Page_is_Post_Office_Login_Page(){
//		Assert.assertEquals("Post Office Login page", driver.getTitle());
//	}
//	Data driven using DataTable keyword
//	@Then("^user enters username and password for login$")
//	public void user_enters_username_and_password_for_login(DataTable credentials){
//		List<List<String>> data = credentials.raw();
//		WebElement _userNameElement = driver.findElement(By.id("imapuser"));
//		_userNameElement.sendKeys(data.get(0).get(0));
//		_userNameElement.sendKeys(Keys.TAB);
//		WebElement _passwordElement = driver.findElement(By.id("pass"));
//		_passwordElement.sendKeys(data.get(0).get(1));
//	}
//
//@Then("^user clicks on Login button in Post Office login page$")
//public void user_clicks_on_Login_button_in_Post_Office_login_page() {
//	  WebElement _logInBtnElement = driver.findElement(By.id("btnLogin"));
//	  _logInBtnElement.click();
//}
//
//
//@Then("^logout from the post office home page$")
//public void logout_from_the_post_office_home_page() {
//	WebElement _signoutButton = driver.findElement(By.name("btnSignOut"));
//	_signoutButton.click();
//}
//
//@Then("^close the browser$")
//public void close_the_browser(){
//	driver.close();
//}
//
//	
//
//}
