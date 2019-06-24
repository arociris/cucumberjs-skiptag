Feature: Test feature

   Feature to test skiptags

   Scenario: Should not get skipped
   Given This is given
   When This is when
   Then This is then

   @Tag1
   Scenario: Should get skipped
   Given This is given
   When This is when
   Then This is then

   @Tag2  
   Scenario: Should get skipped
   Given This is given
   When This is when
   Then This is then
