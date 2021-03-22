# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Zeyi Yan**

Time spent: **6** hours spent in total

Link to project: code: https://glitch.com/edit/#!/maize-four-scarecrow

## Required Functionality

The following **required** functionality is complete:

- [Y] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [Y] "Start" button toggles between "Start" and "Stop" when clicked.
- [Y] Game buttons each light up and play a sound when clicked.
- [Y] Computer plays back sequence of clues including sound and visual cue for each button
- [Y] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [Y] User wins the game after guessing a complete pattern
- [Y] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [Y] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [Y] Buttons use a pitch (frequency) other than the ones in the tutorial
- [Y] More than 4 functional game buttons
- [Y] Playback speeds up on each turn
- [Y] Computer picks a different pattern each time the game is played
- [Y] Player only loses after 3 mistakes (instead of on the first mistake)
- [Y] Game button appearance change goes beyond color (e.g. add an image)
- [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
      Limited time and I don't actually know where I can find suitable audio clips.
- [Y] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [Y] List anything else that you can get done to improve the app!
- I think the spec implied that I should generate the entire pattern at the start, though I thought a more realistic memory test wouldn't
  repeat the same pattern (shouldn't iterate through the same list), so minor adjustment that it dynamically creates a random number in every loop of the PlayClueSequence function.
- I am fairly new to web development and I was kind of struggling to make the image appear and to build the countdown, so I had to make some changes to the structure of the program to get the desired functionalities.
  It works as desired, but there are some redundant codes that I don't have time to optimize for now.

## Video Walkthrough

Patterns generated on the fly during each round as can be observed from these clips. 

Start and stop:
![](https://i.imgur.com/WYaVS6T.gif)
Gameplay and winning (3 rounds hardcoded):
![](https://i.imgur.com/uuAe3sp.gif)
Speedsup:
![](https://i.imgur.com/Htlt5ID.gif)
3 strikes (turn 1 and lose):
![](https://i.imgur.com/g8Eogoy.gif)
3 strikes (turn 2+ and lose):
![](https://i.imgur.com/iQSbiNc.gif)
design change:
![](https://i.imgur.com/37GVGIf.gif)
timer increases each turn:
![](https://i.imgur.com/lMYy6qL.gif)
timer runs out (lose the game as a design choice):
![](https://i.imgur.com/bnQ2Y7x.gif)










## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   
   StackOverflow
   
   W3School
   
   Blogs/personal websites found on Google

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)


    I couldn't make the button hidden then un-hidden for reasons I still don't quite understand. At first I tried to make the image overlap each other and go from there, but I have not written in JS nor CSS before, and I couldn't really figure out how the relative position vs absolute position and z-index work. I then resorted to an easier approach as putting the button and the image in the same relative position on the page, and use JS to add and remove "hidden" class attribute when needed. It created some new problems as once a button is hidden, it can no longer detect onmouseup movement, so that had to be changed accordingly as well. There are probably more efficient ways of doing this, but I currently do not have the time to optimize it further. 
    
    The timer took some time to complete, mostly spent on figuring out when the timer should start and how I can clear it. Creating the countdown itself was not too hard, as I found similar codes on StackOverflow and made it work for this project with some adjustments. After trying out some different versions, I realized it was the most natural to make the timer starts when the clue has finished showing, and to clear the interval I had to create some global variables to be accessed in other function calls, which turned out to be quite simple once I understood how that works in JS.
    
    So the lesson learned: Google is my friend when doing coding projects. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

    How do I actually hosting projects on an actual website? How do I get a domain name? What are some frameworks I can use to add more complex functionalities (e.g. login using Google account, share this page on FB, etc.)? How can I link a database to a web server? How do I ensure securities for the database? How can I ensure security for the website against attacks like XSS or DoS? How do I estimate traffic and how much bandwidth do I need for a website? How will my website render on different browsers/ consoles, backward compatibility? How do I implement concurrency/ do I need to implement concurrency for web development? 
    
    So in summary, this project has been fun, but it is more like a classroom project, which I have done a lot in my college career. What I want to know is how the development and deployment for websites actually work. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)


   Definitely cleaning up the code for better readability. It is currently a mess and there are a lot of redundancy. But it accomplishes the job and I am not planning on devoting a lot of time to it in the future, so maybe not the biggest priority. 
   
   In terms of features, maybe difficulty level selections that let users decide how many turns they need (and this takes advantage of my implementation to generate patterns on the fly), or just skip to a certain level. Maybe adding cookies so users can keep track of their recent records? I can also further gamify it so it displays a score, adding sounds like cheers or visual effects to make the experience more fun. If I go down the more scientific track, I can let the user enter their age and gender, and based on their performance I can send them feedback about how well their short-term memory is based on some predetermined formulas.
   
   In terms of aesthetics, the UI currently looks horrible, but I am really bad at designing and I assume this would be the most time-consuming part. 

## License

    Copyright [Zeyi Yan]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
