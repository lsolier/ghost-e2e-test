  Feature: Update Post

    @user1 @web
    Scenario: As a user I want to update and publish post
        Given I navigate to page "http://localhost:2368/ghost/#/signin"
        Then I enter "l.solier@uniandes.edu.co" into input field having name attribute "identification"
        Then I enter "admin12345" into input field having name attribute "password"
        Then I click on element having css selector "button.login"
        Then I wait
        Then I click on element having css selector "[href="#/posts/"]"
        Then I click on element number "0" having css selector "li.gh-posts-list-item" of list having css selector "ol.posts-list"
        Then I clean input field having css selector "textarea.gh-editor-title"
        Then I enter "Titulo actualizando usando Kraken" into input field having css selector "textarea.gh-editor-title"
        Then I enter "Descripcion actualizando usando Kraken" into input field having css selector "div[data-kg=editor]"
        Then I click on element having css selector "div.gh-publishmenu-trigger"
        Then I click on element having css selector "button.gh-publishmenu-button"
        Then I click on element having css selector "[href="#/posts/"]"
        Then I should see text "Titulo actualizando usando Kraken"