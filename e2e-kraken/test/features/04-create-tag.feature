Feature: Create Tag

  @user1 @web
  Scenario: As a user I want to create tag
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "l.solier@uniandes.edu.co" into input field having name attribute "identification"
    Then I enter "admin12345" into input field having name attribute "password"
    Then I click on element having css selector "button.login"
    Then I wait
    Then I click on element having xpath "//a[@href='#/tags/']"
    Then I click on element having xpath "//a[@href='#/tags/new/']"
    Then I enter "Tag kraken" into input field having name attribute "name"
    Then I enter "Slug kraken" into input field having name attribute "slug"
    Then I enter "Descripcion de una tag utilizando Kraken" into input field having name attribute "description"
    Then I enter "Meta title Kraken" into input field having name attribute "metaTitle"
    Then I enter "Meta descripcion Kraken" into input field having name attribute "metaDescription"
    Then I click on element having xpath "//button[span/text()='Save']"
    Then I click on element having xpath "//a[@href='#/tags/']"
    Then I should see text "Tag kraken"