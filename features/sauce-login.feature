Feature: Sauce demo login test

  Scenario Outline: User login successfully

    Given user is on sauce-demo page
    When user input username with <username>
	When user input password with <password>
	And user click button
    Then user should redirect to homepage <validate>

    Examples:
      | username 	  | password     | validate           |
      | standard_user | secret_sauce | validateOnPage     |
      | visual_user   | secret_sauce | validateOnPage     |
