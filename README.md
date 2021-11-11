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
