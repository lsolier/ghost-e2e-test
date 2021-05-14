Feature: Update Tag

  @user1 @web
  Scenario: As a user I want to update tag
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "l.solier@uniandes.edu.co" into input field having name attribute "identification"
    Then I enter "admin12345" into input field having name attribute "password"
    Then I click on element having css selector "button.login"
    Then I wait
    Then I click on element having xpath "//a[@href='#/tags/']"
    Then I click on element number "0" having css selector "li.gh-tags-list-item" of list having css selector "ol.tags-list"
    Then I clean input field having name attribute "name"
    Then I enter "Tag editado kraken" into input field having name attribute "name"
    Then I clean input field having name attribute "slug"
    Then I enter "slug-editado-kraken" into input field having name attribute "slug"
    Then I clean input field having name attribute "description"
    Then I enter "Descripcion de una tag editado utilizando Kraken :)" into input field having name attribute "description"
    Then I clean input field having name attribute "metaTitle"
    Then I enter "Meta title editado Kraken" into input field having name attribute "metaTitle"
    Then I clean input field having name attribute "metaDescription"
    Then I enter "Meta descripcion editado con Kraken" into input field having name attribute "metaDescription"
    Then I click on element having xpath "//button[span/text()='Save']"
    Then I click on element having xpath "//a[@href='#/tags/']"
    Then I should see text "Tag editado kraken"