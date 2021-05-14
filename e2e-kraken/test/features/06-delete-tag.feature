Feature: Delete Tag

  @user1 @web
  Scenario: As a user I want to delete tag
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "l.solier@uniandes.edu.co" into input field having name attribute "identification"
    Then I enter "admin12345" into input field having name attribute "password"
    Then I click on element having css selector "button.login"
    Then I wait
    Then I click on element having xpath "//a[@href='#/tags/']"
    Then I click on element number "0" having css selector "li.gh-tags-list-item" of list having css selector "ol.tags-list"
    Then I click on element having xpath "//button[span/text()='Delete tag']"
    Then I click on element having xpath "//button[span/text()='Delete']"