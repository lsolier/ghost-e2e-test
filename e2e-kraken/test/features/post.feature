Feature: Post

  @user1 @web
  Scenario: As a user I want to create and publish post
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "l.solier@uniandes.edu.co" into input field having id "ember8"
    Then I enter "Lui$$olier15" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I should see text "View site"
    Then I click on element having id "ember28"
    Then I should see text "New post"
    Then I click on element having id "ember126"
    Then I enter "Titulo usando Kraken" into input field having id "ember314"
    Then I enter "Descripcion usando Kraken" into input field having css selector "div[data-kg=editor]"
    Then I click on element having id "ember379"
    Then I click on element having css selector "[.gh-publishmenu-button]"
    Then I click on element having id "ember310"
    Then I should see text "Titulo usando Kraken"
    

