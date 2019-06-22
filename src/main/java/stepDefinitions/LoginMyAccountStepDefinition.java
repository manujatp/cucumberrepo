//package stepDefinitions;
//
//import java.util.Iterator;
//import java.util.List;
//import java.util.Map;
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
//public class LoginMyAccountStepDefinition {
//WebDriver driver;
//	
//	@Given("^open the browser$")
//	public void open_the_browser(){
//		WebDriverManager.chromedriver().setup();
//		driver = new ChromeDriver();
//	}
//	@When("^user is already on TPG MyAccount Login page$")
//	public void user_is_already_on_Login_page(){
//		
//		driver.get("https://www.tpg.com.au/home/myaccount");
//	}
//	
//
//@Then("^title of the Login Page is My Account Login page$")
//public void title_of_the_Login_Page_is_My_Account_Login_page(){
//   String title = driver.getTitle();
//   Assert.assertEquals("My Account Login page", title);
//   
//}
//
//@Then("^user enters username and password$")
//public void user_enters_username_and_password(DataTable credentials){
//	//Map<String,String> data = (Map<String,String>)credentials.asMaps(String.class, String.class);
//	 
//	for(Map<String,String> data : credentials.asMaps(String.class, String.class)){
//	WebElement _userNameTxtElement = driver.findElement(By.id("check_username"));
//	_userNameTxtElement.sendKeys(data.get("username"));
//	_userNameTxtElement.sendKeys(Keys.TAB);
//	WebElement _passwordTxtElement = driver.findElement(By.id("password"));
//	_passwordTxtElement.sendKeys(data.get("password"));
////	call the functions for login and logout and rearrange the feature file like that
////	user_clicks_on_Login_button();
////	user_on_home_page();
////	logout_from_the_home_page();
//	}
//   
//}
//
//@Then("^user clicks on Login button$")
//public void user_clicks_on_Login_button() {
//  WebElement _signInBtnElement = driver.findElement(By.xpath("//input[contains(@class,'yapo-sibtn')]"));
//  _signInBtnElement.click();
//}
//
//@Then("^user on home page$")
//public void user_on_home_page(){
//   WebElement _yourAccountLnlElement = driver.findElement(By.xpath("//div[text()='Your Account']"));
//   Assert.assertEquals("Your Account", _yourAccountLnlElement.getText());
//}
//
//@Then("^logout from the home page$")
//public void logout_from_the_home_page(){
//	WebElement _logoutButton = driver.findElement(By.xpath("//b[text()= 'Log Out']"));
//	_logoutButton.click();
//}
//
//
//@Then("^close the browser$")
//public void close_the_browser(){
//	driver.close();
//}
//
//}
