---
permalink: /
title: ""
excerpt: "ALEA IACTA EST"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---



# Computer systems are the smartest and the dumbest invention ever made by humans

The above title, in mathematical terms, is a contradiction and hence always false. A contradiction --- and a tautology for the same reason --- is useless because it does not take any inputs that can change the outcome. Such a statement is either always false. However, using a self-contradictory title does create a feeling of "Wait, that doesn't make sense" (and hopefully some curiosity) that will bring attention to the actual intention behind such a title. 

The point I wish to make is "The **idea** of a computer system --- an object that does computations --- is **smart**, but the *computer system* itself is *dumb* by human standards." Computers only do what you ask from them --- nothing more, nothing less. Computers cannot perform any computation without explicit instructions. As evidenced in my earlier disregard for contradictions/tautologies, it might be somewhat obvious that my interests lie in scenarios where the outcome is not preordained and can be controlled in some sense. For such a purpose, computer systems are perfect because they take instructions and follow them religiously to produce an outcome that, in theory, is decided by the instructor. Thus, my research interests primarily lie in computer systems and computational methods. 

> They do not have any independent thoughts or opinions.

Before moving on to the details about my work (if you want to skip, scroll to the last paragraph or click [Research Statement](https://sachin-shivakumar.github.io/publications/)), let us briefly discuss the principle behind a computer. While various instruments can be classified as a **computer**, let us take a specific example for illustration --- the *Analytical engine* invented by Charles Babbage in the 19th century. The idea behind this system was simple but useful. Use a punch card to tell the sequence of arithmetic operations (addition/multiplication) to perform, and the engine does it. However, without this *punch card*, the analytical engine cannot perform any action (except converting electricity into heat --- not very helpful). Here seems like a good place to introduce computing devices (or computer systems) --- systems that take certain input and perform a predefined set of computations without further user intervention to produce some output. 

> Any phenomena can be represented using this framework

Since I have used very broad terms without precise definitions, such as inputs, computations, outputs, etc., we can represent any phenomena in this framework. For example,
1. A piano --- A person presses a key (the input) which makes the hammer corresponding to the key hit a string (the computation) to produce a sound (the output).
2. A computer --- A person writes a code in C (the input) and sends it to a C-compiler (the computation) to produce the **DOOM** video game (the output).
3. Hydroelectric turbine --- Water hits the turbine blades (the input), which rotate a magnetic coil (the computation), generating electricity (the output).
4. Squeaky toy --- Dog bites the toy (the input), forcing air out of a small orifice with a thin membrane obstructing the flow (the computation) produces squeaky sound (the output).

> To this day, all computing devices follow the same principle. 

While computing devices have grown more energy-efficient, time-efficient, and compact, all of them (not just successors of the analytical engine) still require input and a program to produce an output. For example, a computer that would write an operating system to communicate with others when plugged into a wall does not exist (has input electricity, but no computation). A violin cannot play 'Moonlight Sonata' on its own (can do the computation but has no inputs). No software can write your thesis for you (or even do a flawless grammar check). Therefore, these computing devices only do what 'the program' asks them to with an appropriate 'input'.

> ***LETS TALK MATH***

As we saw in various illustrations above, computer systems take inputs and give useful outputs (if they have useful programs). Therefore, my objective is to build programs that, when given input, perform some desired actions. More specifically, I work on building digital systems that use certain inputs to produce the desired output. While the inputs and outputs are specific to the phenomena under discussion, my primary interest lies in the program that translates such inputs to outputs. Any phenomena can be represented using an abstract mathematical model with three primary components ---

* *inputs*, $$u$$: Inputs are typically provided using various actuators (in digital systems, the information is an electrical signal). 
* *model*, $$\mathbf{G}$$: The input signal $$u$$ goes through some computation $$\mathbf{G}$$ to generate a modified signal $$\mathbf{G}(u).$$
* *output*, $$y$$: Outputs are measured using various sensors and are the outcome of applying $$u$$. Usually, we pick $$\mathbf{G}$$ such that $$y=\mathbf{G}(u).$$ 

> The applications of control theory are boundless; however, to walk, we need to take one step at a time 

Although the above framework can fit any phenomena of interest, **currently**, my focus is on a particular class of problems: the class of Ordinary Differential Equations (ODEs) and Partial Differential Equations (PDEs). In particular, I am developing computational tools that employ convex optimization methods to model, analyze, and control various phenomena modeled as ODEs or PDEs.

For more details on my research and contributions, check : [publications page](https://sachin-shivakumar.github.io/publications/), [MATLAB toolboxes](https://sachin-shivakumar.github.io/portfolio/), [CV](https://sachin-shivakumar.github.io/cv/), and [Blog](https://sachin-shivakumar.github.io/control-freaks/).







