Feature: Bootcamp E2E

  Background:
    Given I open the home page at "https://www.newegg.com" and I close the promo banner if it appears

  Scenario: Search bar

    When I enter the word 'Windows' in the search bar and I click the search
    Then I should check that at least one item appears

  Scenario: Internet shop logo button

    When I open Today's Best Deals tab and I click on the Internet shop logo top right corner
    Then I should check that the main page opened