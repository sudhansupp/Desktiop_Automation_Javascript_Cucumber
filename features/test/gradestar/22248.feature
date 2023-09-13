Feature: Test case Verify In-transit Garlic Load Entry

    Background: Sensient Launching & Login Dynamically
        #22548 #22553
        Given I open "sensient" gradestar application
        When I login with "sensient" gradestar credentials

    @only @22554 @InstructionScreen
    Scenario: Test case to Verify all the tab and crop present in the dashboard
        #22554 i.e validation of all crop buttons and tabs of instruction screen
        Then I validate the list in "New Field Departure" group
            | Garlic  |
            | Onions  |
            | Parsley |
        And I validate the list in "New Purchase Load" group
            | Chili pepper |
            | Garlic       |
            | Onions       |
            | Parsley      |
        And I validate the list in "New Transfer Load" group
            | Garlic  |
            | Onions  |
            | Parsley |
        And I validate the list in "New Miscalenous Load" group
            | Ship            |
            | Receive         |
            | Certified Scale |


    @only @22555 @garlic
    Scenario: Verify the below Required fields in the Inbound page of garlic crop in New Field Departure Tab

        And I click on "garlic" crop from "New Field Departure" Tab
        Then I should see all the below Required Lebels
            | fieldName         |
            | Field tag #       |
            | Field #           |
            | Est. Intended Use |
            | Field time-out    |
            | Hauler            |

    @only @22555 @validateRequiredFieldofGarlicCrop
    Scenario: Validation of all Required field of garlic crops in New Field Departure Tab

        And I click on "garlic" crop from "New Field Departure" Tab
        And I click on "Receive" Button
        Then I validate the Reqired Field of "In-transit Garlic" of Inbound Page
        And I Enter data in Reqired Field of "In-transit Garlic" of Inbound Page
        And I Navigate to "Purchase-Garlic" Page of Load : INTRANSIT RECEIVE
        And I Navigate to Dump Page of "Purchase-Garlic" Load : INTRANSIT RECEIVE
        And I click on "garlic" crop from "New Field Departure" Tab
        And I validate the Dataflow of "In-transit Garlic" Page

    @only @22555 @Onions
    Scenario: Verify the below Required fields in the Inbound page of Onions crop in New Field Departure Tab

        And I click on "Onions" crop from "New Field Departure" Tab
        Then I should see all the below Required Lebels
            | fieldName         |
            | Field tag #       |
            | Field #           |
            | Est. Intended Use |
            | Field time-out    |
            | Hauler            |

    @only @22555 @validateRequiredFieldofOnionsCrop
    Scenario: Validation of all Required field of Onions crops in New Field Departure Tab

        And I click on "Onions" crop from "New Field Departure" Tab
        And I click on "Receive" Button
        And I validate the Reqired Field of "In-transit Onions" of Inbound Page
        And I Enter data in Reqired Field of "In-transit Onions" of Inbound Page
        And I Navigate to "Purchase-Onions" Page of Load : INTRANSIT RECEIVE
        And I Navigate to Dump Page of "Purchase-Onions" Load : INTRANSIT RECEIVE
        And I click on "Onions" crop from "New Field Departure" Tab
        Then I validate the Dataflow of "In-transit Onions" Page

    @only @22555 @Parsley
    Scenario: Verify the below Required fields in the Inbound page of Parsley crop in New Field Departure Tab
        And I click on "Parsley" crop from "New Field Departure" Tab
        Then I should see all the below Required Lebels
            | fieldName         |
            | Field tag #       |
            | Field #           |
            | Est. Intended Use |
            | Field time-out    |
            | Hauler            |

    @only @22555 @validateRequiredFieldofParsleyCrop
    Scenario: Validation of all Required field of Parsley crops in New Field Departure Tab

        And I click on "Parsley" crop from "New Field Departure" Tab
        And I click on "Receive" Button
        And I validate the Reqired Field of "In-transit Parsley" of Inbound Page
        And I Enter data in Reqired Field of "In-transit Parsley" of Inbound Page
        And I Navigate to "Purchase-Parsley" Page of Load : INTRANSIT RECEIVE
        And I Navigate to Dump Page of "Purchase-Parsley" Load : INTRANSIT RECEIVE
        And I click on "Parsley" crop from "New Field Departure" Tab
        And I validate the Dataflow of "In-transit Parsley" Page

    @only @22556 @ChiliPepperNewPurchaseLoad
    Scenario: Verify the below Required fields in the Inbound page of Chilli Pepper crop in New Purchase Load Tab

        And I click on "Chili Pepper" crop from "New Purchase Load" Tab
        Then I should see all the below Required Lebels
            | fieldName         |
            | Load #            |
            | Field #           |
            | Grower            |
            | Area              |
            | Variety           |
            | Est. Intended Use |
            | Is split          |
            | Is mixed          |
            | Shipped with      |
            | Loader #          |
            | Field time-in     |
            | Field time-out    |
            | Hauler            |

    @only @22556 @GarlicNewPurchaseLoad
    Scenario: Verify the below Required fields in the Inbound page of garlic crop in New Purchase Load Tab

        And I click on "garlic" crop from "New Purchase Load" Tab
        Then I should see all the below Required Lebels
            | fieldName         |
            | Load #            |
            | Field #           |
            | Grower            |
            | Area              |
            | Variety           |
            | Est. Intended Use |
            | Is split          |
            | Is mixed          |
            | Shipped with      |
            | Loader #          |
            | Field time-in     |
            | Field time-out    |
            | Hauler            |

    @only @22556 @OnionsNewPurchaseLoad
    Scenario: Verify the below Required fields in the Inbound page of Onions crop in New Purchase Load Tab

        And I click on "Onions" crop from "New Purchase Load" Tab
        Then I should see all the below Required Lebels
            | fieldName         |
            | Load #            |
            | Field #           |
            | Grower            |
            | Area              |
            | Variety           |
            | Est. Intended Use |
            | Is split          |
            | Is mixed          |
            | Shipped with      |
            | Loader #          |
            | Field time-in     |
            | Field time-out    |
            | Hauler            |

    @only @22557 @ParsleyNewPurchaseLoad
    Scenario: Verify the below Required fields in the Inbound page of Parsley crop in New Purchase Load Tab

        And I click on "Parsley" crop from "New Purchase Load" Tab
        And I enter the data in "Purchase-Parsley" required field
        And I Click on "Dump" Tab
        Then I should see all the below Required Lebels
            | fieldName        |
            | Document #       |
            | Load #           |
            | Date unloaded    |
            | Act intended use |
            | Shift            |
        And I verify the required field in dump

    @only @22558 @GradeSectionAutomateAndValidateofGarlic
    Scenario: GradeStar Automation - Automate and validate the Grade Screen by Garlic crop in New Purchase Load Tab

        And I click on "garlic" crop from "New Purchase Load" Tab
        Then I validate the Required Field
        And I enter the data in "Purchase-Garlic" required field
        And I Click on "Grade" Tab
        And I should see all the below Required Lebels
            | fieldName         |
            | Trailer #         |
            | Hauler            |
            | Invoice #         |
            | Est. Intended Use |
            | Arrive time       |
            | Load type         |
            | Inspection date   |
            | Inspector         |
            | Dirt              |
            | Cull              |
            | Solids            |
            | Grade Remarks     |

    @only @22558 @GradeSectionAutomateAndValidateofOnions
    Scenario: GradeStar Automation - Automate and validate the Grade Screen by Onions crop in New Purchase Load Tab

        And I click on "Onions" crop from "New Purchase Load" Tab
        And I validate the Required Field
        And I enter the data in "Purchase-Onions" required field
        And I Click on "Grade" Tab
        Then I should see all the below Required Lebels
            | fieldName         |
            | Trailer #         |
            | Hauler            |
            | Invoice #         |
            | Est. Intended Use |
            | Arrive time       |
            | Load type         |
            | Inspection date   |
            | Inspector         |
            | Master 1          |
            | Master 2          |
            | Master sample     |
            | Grade Remarks     |

    @only @22559 @OnionsCropFromNewTransferScreen
    Scenario: Verify the below Required fields in the Inbound page of garlic crop in New Transfer Load Tab

        And I click on "Onions" crop from "New Transfer Load" Tab
        Then I should see all the below Required Lebels
            | fieldName         |
            | Load #            |
            | Location          |
            | Est. Intended Use |
            | Is split          |
            | Shipped with      |
            | Hauler            |
            | Invoice #         |
            | SubHaul           |
            | Truck             |

    @only @22559 @GarlicCropFromNewTransferScreen
    Scenario: Verify the below Required fields in the Inbound page of garlic crop in New Transfer Load Tab

        And I click on "garlic" crop from "New Transfer Load" Tab
        And I select any option from Est. Intended Use
        And I Click on "Dump" Tab
        Then I should see all the below Required Lebels
            | fieldName        |
            | Document #       |
            | Load #           |
            | Date unloaded    |
            | Act intended use |
            | Shift            |

    @only @22693 @EndToEndScenariosGarlic
    Scenario: End to End scenarios from In-transit to awaiting grade

        When I click on "garlic" crop from "New Field Departure" Tab
        Then I Fill the details in "In-transit Garilc" Page
        Then I Click on "IN TRANSIT" Tab
        Then I click on "IN TRANSIT" List
        Then I click on "Receive" Button
        Then I Fill the details in "Purchase Garilc" Page
        Then I click on "Print" Button
        Then I handle Error Message
        Then I Click on "IN PROGRESS" Tab
        Then I click on "IN PROGRESS" List
        Then I enter value in Shift Field
        Then I enter value in Shift Field
        Then I click on "Dump" Button
        Then I Click on "AWAITING GRADES" Tab
        Then I click on "AWAITING GRADES" List
        Then I Fill the details in "Grade" Page
        Then I click on "Finish" Button
        