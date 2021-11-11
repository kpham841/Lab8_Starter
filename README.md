# Lab 8 - Starter

Names: 
Khiem Pham
Darren Yeung

1) Within a Github action that runs whenever code is pushed
I would fit my automated tests within a Github action that runs whenever code is pushed. This is because 
I believe this is general practice for CI/CD pipelines. We want the test to run whenever something new is pushed 
to the main branch. If we wait to run tests when everything thing is pushed at the end, we will have a lot to debug 
at once which is much more difficult. 

2) Would you use and end to end test to check if a function is returning the correct output? 
No becaues E2E testing is "a way for developers to automate test cases that involve emulating user actions from start to finish (end to end)" 
This means that it will presumably replicate a typical user's actions from the start of the program to the end of the program. If
we wanted to test for a bug in a specific function call, we wouldn't want to run the entire program. We would want to test  
this function specfically so a much better option would be to use unit testing. 

3) No, because since we are dealing with a "Messaging Application" the "Message Feature" is basically the 
the entire application which would involve a lot of other functions like selecting the recipent the user 
wants to send the message to, uploading different files, sending multiple messages at the same time, etc. So something
like E2E testing would be better. 

4) Yes we would use unit testing to test the max length feature of the messaging application because the only thing this feature does it to stop the user from typing over a certain number of characters which is a very specific task in the grand scheme of the entire application. When testing specifc individual modules for their functionality, unit test would be a much better choice than E2E testing.

