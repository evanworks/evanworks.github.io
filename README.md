I've made a couple things

[Chocolate Factory](#chocolate)

[Shape Clicker](#shape)


[Python Fishing](#fishing) <span style="border: 1px solid red;">NEW!</span>

[Rapid](#rapid)

[Directory](#directory)

---

Codepen: 
<a href="https://codepen.io/hithere567">hithere567</a> (don't judge, I chose the name when I was nine)

Mail:
<a href="mailto:evanwarnerlee@gmail.com">evanwarnerlee@gmail.com</a>

---
<h1 id="chocolate">Chocolate Factory</h1>
A relaxing clicker game about making chocolate


**Latest website release:** 
<a href="https://evan-w-lee.github.io/chocolate-factory/chocolate">evan-w-lee.github.io/chocolate-factory/chocolate</a>


_New update every week!_

<img width="1341" alt="Chocolate Factory" src="https://github.com/evan-w-lee/chocolate-factory/assets/170060467/55c8595d-0928-43fe-a76e-b4e72905bf91">

## Versions

### ALPHA v0.9.1 (6/24/24)
**NOTES:**
Apparently the new update did mess things up. Also apparently if you click on stuff in the change product seller tooltips their background turns black??? I feel like I should've made this an update instead of a patch. It escalated quickly :)

**CHANGES:**
* Changed the way the project displays look
* The project displays are now unclickable if you don't have enough bytes

**BUG FIXES:**
* Fixed bug where the dark chocolate project text went slightly below the project box
* Fixed issue where you could buy the dark chocolate project even if you don't have enough bytes
* Fixed strange bug where it always says you don't have enough bytes when you buy a project but the project activates anyway
* Fixed issue where the bubble telling you to 'change the product seller...' doesn't go away ever
* Fixed weird problem where the byte count can go up to one more than the maximum


>### ALPHA v0.9.0 (6/23/24)
>**NOTES:**
>Adding new chocolates required a full rework of the money and bar system. Everything's probably borken :/
>
>**FEATURES:**
>* Added a new type of chocolate (finally)
>
>**CHANGES:**
>* Reworked the customer pay systems
>* Reworked the WHOLE FRICKING GAME
>
>**BUG FIXES:**
>* Made the name changing feature less buggy


>### ALPHA v0.8.0 (6/15/24)
>**NOTES:**
>I think I've removed most of the bugs. From now on I'm just going to work on more project-related things. Any suggestions on projects or the rightmost column? Email me at >evanwarnerlee@gmail.com. 
>
>**FEATURES:**
>* Added the ability to name your shop
>* Added a game over screen (it's a placeholder for now)
>
>**CHANGES:**
>* Changed debug keys to [ and \] so they wouldn't interfere with naming the shop
>* Added a visual indicator for when you increase the byte mining power
>* The change seller feature is not unlocked right away anymore
>
>**BUG FIXES:**
>* Renamed ROWS to COLUMNS in the code (You know those columns that make up the game? I had a small-brain moment and labelled them "rows".)
>* Made it so you have to have bought a worker to buy the boxes project
>* Added a display for adaptive pricing of the byte mining power upgrade (the circuits look more powerful!)
>* Fixed issue where the bubble text displayed under the locked columns


>### ALPHA patch v0.7.2
>**NOTES:**
>oops. Again.
>
>**BUGS:**
>* Made the version name say the right thing
>* Refactored some code to make the game 0.5 milliseconds faster
>* Fixed some extra chocolate code


>### ALPHA patch v0.7.1
>**NOTES:**
>oops.
>
>**BUGS:**
>* Fixed fatal error where the boxes display was always visible
>* Fixed more font issues


>### ALPHA v0.7.0
>**NOTES:**
>Believe it or not, this was one of the most boring coding sessions of my life. Also, I know I said that next was making a better tutorial, but next is probably not that >because I'm too lazy. I did add support for different types of chocolate. It took forever because of all the things that I didn't think of when I first made all of the >game's systems. I probably should've used OOP.
>
>**FEATURES:**
>* Added the Boxes project, which makes a better reputation for more money spent
>* Added a visual for reputation
>* Changed debug key to {I} so *some hackers* will be confused
>* Added support for other chocolates (XTRACHOCOLATE in the code)
>
>**BUGS:**
>* Fixed font issues
>* Made it so info bubbles don't appear when you've already looked at them
>* Fixed fatal issue with the seller changing feature


>### ALPHA v0.6.0
>**NOTES:**
>Worker pay was really, really messed up. I'm sorry, it was a nightmare to debug. You know what I had to do to make the workers pay increase correctly? Instead of doing the
>simple thing (worker pay + 0.1), I had to this: (worker pay - -0.1). Yep, subtracting by a negative number.
>
>Also, I was dumb and updated my computer with the update log not saved, so I was in the middle of making this update and I had no idea what I changed cause I lost all the >info. I had to compare v0.5.6 to the code saved on my hard drive. If only I was smarter. :/
>
>**FEATURES:**
>* Changed Kacao Kulture back to Cacao Culture because it looked weird
>* Added the Donuts project
>* Made the workers slower
>* Reworked the worker pay system (the workers are done, I promise)
>* Replaced the worker tooltip with visuals that show both data points
>
>**BUGS:**
>* Fixed bug where workers still work when their pay is $0.00
>* Fixed floating-point rounding errors in the worker pay (0.5 == 0.498758937)
>* Fixed that annoying issue where you could scroll down just a little

>### ALPHA patch v0.5.6
>**FEATURES:**
>* Added a debug menu (press D)
>
>
>**BUGS:**
>* Version name says the right thing now


>### ALPHA edit v0.5.5
>**NOTES:**
>I recieved some excellent feedback from my team of testers (aka friends) Next is creating a more comprehensive tutorial.
>
>**FEATURES:**
>* Added AutoBuyers, a new project that automatically buys ingredients when you run out
>* Finalized the workers
>* Changed "Cacao Culture" to "Kacao Kulture" because why not
>
>
>**BUGS:**
>* Switched the place of milk and cacao again because now it looks weird
>* Fixed issue where you can't buy extra power


>### ALPHA v0.5.0
>**FEATURES:**
>* Added worker pay
>* Created a more comprehensive tutorial
>* Added three new companies
>* Columns now show a locked screen, "Unlocked at $69" or whatever
>* Added the version number as a display
>
>
>**BUGS:**
>* Fixed issue where the money only update on each click of the chocolate
>* Switched the places of milk and cacao so people would stop thinking "Milo's Cacao Co." is the name of your shop
>* Adjusted time the bytes menu appears to stop players going bankrupt
>* Worker project box now displays the correct value

>### ALPHA v0.4.0
>**FEATURES:**
>* Added functionality to the seller change feature
>* Added bubbles detailing the byte mining process
>* Created MARKETING, an important variable that changes how many customers you can get
>* Adjusted prices
>
>
>**BUGS:**
>* Fixed display issue with chocolate tooltip
>* Added a $ sign to worker price updates
>* Removed the boxes project, which does nothing

>### ALPHA patch v0.3.1
>**FEATURES:**
>* Made worker price increase over time
>
>
>**BUGS:**
>* Fixed fatal error where setting chocolate price to -$0.00 resulted in the game breaking
>* Changed the price of workers to $75

>### ALPHA v0.3.0
>Notes: The first published version

<h1 id="shape">Shape Clicker</h1>
A bug-ridden clicker game about shapes

**If you want to, you can play it:** 
<a href="https://shape-clicker.superhi.hosting">shape-clicker.superhi.hosting</a>

<img src="/Screenshot 2024-05-18 at 9.28.08 AM.png" style="width: 400px; border: 2px solid black;">

I actually might update it more in the future. You can definitely tell it was made by a child, but it's simple and at least kind of fun. I still have some interesting ideas. It has potential.

<h1 id="rapid">Rapid</h1>
A simple search engine for the web using jQuery.

**It's actually kinda cool:**
<a href="https://rapid.superhi.hosting">rapid.superhi.hosting</a>

<img src="/Screenshot 2024-05-20 at 7.34.25 PM.png" style="width: 400px; border: 2px solid red;">

<img src="/Screenshot 2024-05-20 at 7.34.44 PM.png" style="width: 600px; border: 2px solid black;">

### A brief history:

Rapid was one of my first projects. It's been through many revisions, but I traced its origins back to a random project on CodePen (which I copied and branded as my own.)

*Sorry, JuicyWatermelon.*

I did make most of it, though. My friend (KingOfSpadesXX, I know it's a dumb name) made a little copy. I don't think it works, but here you go: (Don't expect too much, it has some goofy-ahh style)

**A random person's search engine:**
<a href="https://zoomplex.superhi.hosting">zoomplex.superhi.hosting</a>

I checked: yeah, it's broken.

<h1 id="directory">Directory</h1>
Hosts most of my old projects. It's fun to explore, if SuperHi isn't down again :(((

**Here you go:**
<a href="https://directory.superhi.hosting">directory.superhi.hosting</a>

Fun fact: this is made from a W3Schools tempate. I probably use W3Schools too much (I even used it for my newest project) but it's how I learned and that's all that matters, right?
