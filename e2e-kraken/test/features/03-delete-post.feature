  Feature: Delete Post

    @user1 @web
    Scenario: As a user I want to delete post
        Given I navigate to page "http://localhost:2368/ghost/#/signin"
        Then I enter "l.solier@uniandes.edu.co" into input field having name attribute "identification"
        Then I enter "admin12345" into input field having name attribute "password"
        Then I click on element having css selector "button.login"
        Then I wait
        Then I click on element having css selector "[href="#/posts/"]"
        Then I click on element number "0" having css selector "li.gh-posts-list-item" of list having css selector "ol.posts-list"
        Then I click on element having css selector "button.post-settings"
        Then I click on element having css selector "button.settings-menu-delete-button"
        Then I click on element having css selector "button.gh-btn-red"
        Then I click on element having css selector "[href="#/posts/"]"