# lab-01-quiz-page

Outcomes:
- There should be an alert
- There should be a confirm so the user can opt out
- There should be a first name prompt and last name prompt
- There should be three question prompts
- The user should be able to see their results taking the quiz

HTML Setup:
- Some information, presented nicely with an image and some list items
    - Why? So user knows what to do
- A button to launch the quiz
    - Why? To launch quiz
- Empty results div
    - Why? To inject/display the results to the user

1) Get DOM elements
    - Button
    - Empty div
2) Add event listeners
    - Button
3) Respond to user input -- in most apps, the real work happens in the cool zone
    - Launch an alert
    - Launch a confirmation
        - If the user says no, nothing else happens (`return` nothing to break out of the cool zone)
        - If the user says yes, launch the seris of prompts
    - Launch a first name prompt
        - Store output for display
    - Launch a last name prompt
        - Store output for display
    - Launch quiz prompts with 3 specific yes/no questions
        - How do we evaluate the answers
        - What counts as a yes?
            - Yes
            - Yeah
            - Yep
            - Y
            - yes
            - yeah
            - y
            - anything that starts with a y
            - How many times are we going to see if something counts as a yes?
                - 3 times
                - instead of copying and pasting, lets write a 'countsAsAYes' function!
    - Make a results string
    - Display the results string
        - Inject stuff into the 'textContent' of our empty results div
