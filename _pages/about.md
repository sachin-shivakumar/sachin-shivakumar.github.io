---
permalink: /
title: "About"
excerpt: "ALEA IACTA EST"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---



# Computer systems are the smartest and the dumbest invention ever made by humans

Although the above statements sounds "catchy", it is clearly self-contradictory (or vague, at the very least) and, hence, requires more explanation to avoid multiple interpretations. The **idea** of a computer system (an object that does computations) is **smart**, but the *computer system* itself is *dumb* by human standards; Computers only do what you ask from it --- nothing more, nothing less. Computers cannot perform any computation without explicit instructions. 

> They do not have any independent thoughts or opinions.

While there are various instruments that are attributed to be the *first computer*, we will restrict our discussion to the *Analytical engine* invented by Charles Babbage in the 19th century. The idea behind this system was simple but useful. Use a punch card to tell the sequence of arithmetic operations (addition/multiplication) to perform and the engine does it. However, without this `punch card`, analytical engine cannot perform any action (except converting electricity into heat --- not very helpful). 

> To this day, all computing devices follow the same principle. 

While computing devices have grown more energy-efficient, time-efficient, and compact, they still require a punch card. For example, there does not exist a computer that, when plugged to a wall, would develop a way to communicate with others by writing its own operating system (or even learn to write a simple ***Hello World***). Therefore, we still need to build a punch card (a program) --- just like Babbage did two centuries ago. 

> A computer that learns and uses the information given to it to make some change.

Rather than making a list of things a computer cannot do, I want to state the things I wish a computer could do. Then we can figure out a way to build such a computer --- *maybe*. In simple words, I want a computing machine that can **observe its surroundings** (data fed through sensors), **learn something from its observations** (build a mathematical model) and **demonstrate its knowledge** (manipulate the surroundings to get a desired result).

> ***Lets talk math***

Now that we have *vague* goals, let us try to translate those goals into solvable mathematical problems. 

* *observation of surroundings*: This is a simple enough task which can be done by various means, such as, electrical sensors, visual sensors, thermal sensors, etc.,--- all sensors that convert information into electrical signals. However, the term information is broad, unclear, and contains unnecessary details (which can be noise). Therefore, we classify the information further into two specific categories that will the computer in parsing the information in a meaningful manner. Namely, we split the information as ---
  1. a set of actions taken (input, $$u$$) 
  2. result of those actions (output, $$y$$)
* *learning from observations*: Now that we have two signals $$u$$ and $$y$$, we ask the computer to learn from this information. The most straightforward aspect to learn is to find a way to predict the result of an action $$y$$, given an action $$u$$. Thus, to learn from surroundings, we will build a mathematical model $$\mathbf{G}$$ such that, for any pair $$(u,y)$$, we have
``` 
$$y = \mathbf{G}(u)$$.
```
* *Demonstrate the learnt knowledge*: While there are more than one ways to demonstrate a learnt model, we will focus on the utilizing the knowledge to obtain a desired outcome, i.e., given the model $$\mathbf{G}$$, we wish to find some inputs $$u$$ that give us the desired outputs $$y$$.










