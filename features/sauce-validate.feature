Feature: Validate

    Scenario: Validate empty cart
		Given user is on sauce-demo page
        When user login using username "standard_user" and password "secret_sauce"
        Then user should redirect to homepage
        When user click cart button
        Then user should see empty cart

    Scenario: User buy Sauce Labs Backpack
		Given user is on sauce-demo page
        When user login using username "standard_user" and password "secret_sauce"
        Then user should redirect to homepage
        And user add "Sauce Labs Backpack" to cart
        When user click cart button
        Then user should see "Sauce Labs Backpack" on cart page

    Scenario: User buy Sauce Labs Bolt T-Shirt
		Given user is on sauce-demo page
        When user login using username "standard_user" and password "secret_sauce"
        Then user should redirect to homepage
        And user add "Sauce Labs Bolt T-Shirt" to cart
        When user click cart button
        Then user should see "Sauce Labs Bolt T-Shirt" on cart page
        