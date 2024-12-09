# Jetpunk Bot
A bot that completes the game "Países do mundo" from Jetpunk.
(https://www.jetpunk.com/quizzes/paises-do-mundo)

https://github.com/user-attachments/assets/256f1250-12f9-4543-ab69-416671b82f95


## Description
a simple backend project built to test automate bots on the WEB

## Main concept
My goal is to complete the game "Países do mundo" from jetpunk in less than 1 minute.

"but what is this game?"
Jetpunk is a website with a lot of quizzes, and this quiz one is based on typing in the name of ALL the countries in the world. (I know how to complete this game without any help, but now I want to add a little of computation to that)

My first solution for this project was about to make a request to the api "restcountries", filter by INDEPENDENT countries and type all names. Looks simple, but it doesnt work so easily :(

It doesnt work because of these reasons:

* this game is too old (For example, the restcountries api returns "Porto Rico" as a country, but jetpunk does not recognize it as a country either)
* on the game, when we type "Trinidad", it automatically recognizes as "Trinidad and Tobago" and we dont need to type the rest of the name. It looks help us a lot, but when we talk about typing the name of all the countries in the world using a BOT, it is a pain in the neck. For example, if the bot types "Trinidad and Tobago", the game will recognize the respective country on "Trinidad" and reset the input (But the bot doesnt know about this and will continue typing "and Tobago", causing some crashes).

My second solution for this project was about to declare an array with all countries (of course, typing them manually) and insert each index of array on input.

That solution one is bad, because we need to update the array every time the game updates. (although this game hasn't been updated in years)

## Technical Details
* Typescript
* NodeJS
* selenium-webdriver
