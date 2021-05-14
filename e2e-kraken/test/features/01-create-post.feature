Feature: Create Post

  @user1 @web
  Scenario: As a user I want to create and publish post
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "l.solier@uniandes.edu.co" into input field having name attribute "identification"
    Then I enter "admin12345" into input field having name attribute "password"
    Then I click on element having css selector "button.login"
    Then I wait
    Then I click on element having xpath "//a[@href='#/posts/']"
    Then I click on element having xpath "//a[@href='#/editor/post/']"
    Then I enter "Titulo usando Kraken" into input field having css selector "textarea.gh-editor-title"
    Then I enter "Descripcion usando Kraken" into input field having css selector "div[data-kg=editor]"
    Then I click on element having css selector "div.gh-publishmenu-trigger"
    Then I click on element having css selector "button.gh-publishmenu-button"
    Then I click on element having xpath "//a[@href='#/posts/']"
    Then I should see text "Titulo usando Kraken"
    

