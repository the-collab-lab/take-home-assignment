# Career Lab | Take-Home Assignment 

This is the take home assignment that Collabies will complete before the technical review for Career Lab. 

Please fork this repo, complete the assignment, and once you are finished, send a link to your repo to the Collab Lab mentor that will be conducting your technical interview. 

---

## How-to

1. Fork this repo.
![Fork button on Github](https://cdn.zappy.app/b2897d9afa278e5019c028d809e96b23.png)
2. Clone your fork to your local machine: `git clone <url of your repo>`
![Repo URL for cloning on Github](https://cdn.zappy.app/fddb551fe494bfc18d18e3009c455b30.png)
3. In the project directory, run `npm install && npm start`
4. Open the project at [localhost:3000](http://localhost:3000)

---

## Exercise: Formatting Text

Create a new React app for formatting text into paragraphs. It should accept input text, and should output the formatted text. For example, if you input the following text:
```
This is
a badly formatted file. This line is pretty long! It's way more than 80 characters! I feel a line wrap coming on!

This      is a second paragraph with extraneous whitespace.
```
Running formatter tool should output the following:
```
This is a badly formatted file. This line is pretty long! It's way more than 80
characters! I feel a line wrap coming on!

This is a second paragraph with extraneous whitespace.
```
The formatting should follow these rules:
- Lines should not exceed 80 characters.
- If the 81st character of a line is in the middle of the word, break the line on the closest previous space.
- If a single word exceeds 80 characters, leave that word intact on a line by itself (this is an exception to the 80-character-per-line limit).
- One blank line between paragraphs.
- No more than one consecutive space or blank line in the formatted text -- collapse multiples into a single space or line.

You may use a testing library you like, but the main code must not require any additional libraries or resources beyond the standard built-in libraries. 

Your code will be evaluated on three criteria:
- Correctness: Does it follow all the instructions?
- Code Quality: Is it readable and well structured?
- Idiomatic Code Style: Does it follow the stylistic conventions of the language, such as indentation and capitalization?
