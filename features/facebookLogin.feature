Feature:  Facebook Login test 
    
    @0001
    Scenario: Sourav login to the facebook
        Given Sourav opens facebook page and enter username
        When Sourav enters password
        When click the login button 
        Then Sourav sees the facebook main page having notification button
        