# lab-01-quiz-page

Outcomes:
- Should have an alert to indicate the start of the quiz
- Should have a confirm for the user to opt out
- First name prompt and last name prompt
- Three question prompts relating to the passage
- Show the results of the quiz to the user

HTML Setup:
- Some information about a topic
    - Why? So user has info to work with
- Button to launch the quiz
    - Why? To launch quiz
- Empty results div
    - Why? To display the results to the user

1) Get DOM elements
    - Button
    - Empty div
2) Add event listeners
    - Button
3) Respond to user input
    - Launch alert
    - Launch confirmation
        - If the user says no, nothing else happens (`return` nothing to break out of the cool zone)
        - If the user says yes, launch the seris of prompts
    - Launch first name prompt
        - Store output for display
    - Launch last name prompt
        - Store output for display
    - Launch quiz prompts with 3 specific yes/no questions
        - How do we evaluate the answers?
            - function
        - What counts as a yes?
            - anything that starts with a y
            - all other inputs will be a no
        -Store correct answers with a counter
    - Make a results string
    - Display the results string
        - Inject the results to the 'textContent' of our empty results div
