Feature: end to end ecommerence validation 

    Feature Description - application end to end testing
    Scenario: ecommerence product delievry
    Given I open the Ecommerence page
    When I added item the cart
    And Validate the price
    Then select the country submit and verify Thankyou

    