package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

public class LoginStepDefinition {
	WebDriver driver;
	
	@Given("^open the browser$")
	public void open_the_browser(){
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
	}
	@When("^user is already on Login Page$")
	public void user_is_already_on_Login_page(){
		
		driver.get("https://www.tpg.com.au/home/myaccount");
	}
	

@Then("^title of the Login Page is My Account Login page$")
public void title_of_the_Login_Page_is_My_Account_Login_page(){
   String title = driver.getTitle();
   Assert.assertEquals("My Account Login page", title);
   
}

@Then("^user enters \"(.*)\" and \"(.*)\"$")
public void user_enters_username_and_password(String username, String password){
	
	WebElement _userNameTxtElement = driver.findElement(By.id("check_username"));
	_userNameTxtElement.sendKeys(username);
	_userNameTxtElement.sendKeys(Keys.TAB);
	WebElement _passwordTxtElement = driver.findElement(By.id("password"));
	_passwordTxtElement.sendKeys(password);
   
}

@Then("^user clicks on Login button$")
public void user_clicks_on_Login_button() {
  WebElement _signInBtnElement = driver.findElement(By.xpath("//input[contains(@class,'yapo-sibtn')]"));
  _signInBtnElement.click();
}

@Then("^user on home page$")
public void user_on_home_page(){
   WebElement _yourAccountLnlElement = driver.findElement(By.xpath("//div[text()='Your Account']"));
   Assert.assertEquals("Your Account", _yourAccountLnlElement.getText());
}

@Then("^logout from the home page$")
public void logout_from_the_home_page(){
	WebElement _logoutButton = driver.findElement(By.xpath("//b[text()= 'Log Out']"));
	_logoutButton.click();
}

@When("^user is already on Post Office Login Page$")
public void user_is_already_on_Post_Office_Login_Page(){
	   driver.get("https://www.tpg.com.au/home/postoffice");
}

@Then("^title of the Login Page is Post Office Login page$")
public void title_of_the_Login_Page_is_Post_Office_Login_page(){
  Assert.assertEquals("Post Office Login page", driver.getTitle()); 
}

@Then("^user enters \"(.*)\" and \"(.*)\" for login$")
public void user_enters_login(String user, String pass){
	WebElement _userNameElement = driver.findElement(By.id("imapuser"));
	_userNameElement.sendKeys(user);
	_userNameElement.sendKeys(Keys.TAB);
	WebElement _passwordElement = driver.findElement(By.id("pass"));
	_passwordElement.sendKeys(pass);
}

@Then("^user clicks on Login button in Post Office login page$")
public void user_clicks_on_Login_button_in_Post_Office_login_page() {
	  WebElement _logInBtnElement = driver.findElement(By.id("btnLogin"));
	  _logInBtnElement.click();
}


@Then("^logout from the post office home page$")
public void logout_from_the_post_office_home_page() {
	WebElement _signoutButton = driver.findElement(By.name("btnSignOut"));
	_signoutButton.click();
}

@Then("^close the browser$")
public void close_the_browser(){
	driver.close();
}

}
