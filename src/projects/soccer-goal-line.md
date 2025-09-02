---
layout: layouts/post.njk
title: Soccer goal line technology
description: A scale of a soccer goal line system
stack: C * ATmega 3028 * MPLABX
uid: 0xDD51
issued: 2024
collaboration: false
github: https://github.com/mazun0/
tags: embedded
type: ADD Type
date: 2025-08-25
navType: projectPost
pageType: default
---

# Soccer goal line technology

A scale model of a Soccer Goal Line System involving with Ultranonic Sensors and RFID. 

GitHub: TBD

## Overview



According to the laws of the game, a goal counts if the ball gets pass through the line inside the goal.

This project was part of a final project for Embedded Systems and Real Time course where I was given a budget of the parts. While the first two projects that are asigned were more so on how we devlope firmware, the final project represents more of the overall skills on what we've learend. I deviced to create the project for that I enjoy soccer and was curious on how embedded computers play a role on the beutiful game. 


## Key Features
Key Functionalities are 

- An **RFID** scanner that is distance where the entire ball passes the line fully
- A soccer ball (19cm diameter) that has four **RFID Chips** inserted inside a ball
- Two **Ultrasonic Sensors** that are facing both ends in the goal post used to detect movement of the ball.
- A **16x2 I2C LCD Display**  where it displays the distance of the two senosrs in CM
- A **Red LED** light used for to indicate the activation of the RFID scanner
- A Lego Scale Model with nets. 

## Stack

- Language: C
- Tools: MPLABX
- Hardware: 
    - AVR-BLE (ATmega 3208)
    - RFID Scanner and Chips
    - 2x Ulrasonic Distance Sensors
    - 16x2 I2C Display
    - Custom Lego Goal post
    - 2x Breadboards
    - Wires
    - 2 110 ohm resistors 
    - Red LED light 
    - Green LED light
## 🔧 Usage


This project is designed with a custom  soccer goal lego design  and a 
19cm diamemeter soccer ball that is disceted to insert the RFID chips. 

As well the RFID scanner was soldered with pins where I need to maintain a stable connection. 

## Notes and Challenges

Trying to design a system for a sport that is well know for fast pace and physical especially down to a scale model represents a few challenges.

First was the timing as well bring the logic. Having the Ultrasonic Sensors wasn’t enough and could represent errors if the ball was read outside the goal. I worked around with it by adding the logic that starts the timer when the ball reached the line. As well to abide the rules of the sport and counting the positions for the chips inside, I have to account the distance of the RFID where it’s reachable accounting the rules where the ball needs to fully pass the line. 

Another challenge is the timing, where due to the nature of the sport, having a more forgiving time would make it too easy to read the ball but a much quicker time would not be too forgiving. 

For debugging, I settled to use an LCD display to read the distance between the goal post read by the distance sensors, as well having two lights where red represents the search activation and green for goal.



## 📸 Screenshots/ Media
Coming soon

## Known Issues

Some issues that I've encountered that are the red ligths faints a bit but not well lit until the distance sensors reads the ball. 



## Future Improvments
planned Improvements

 - Impement FreeRTOS 

 - Implement Bluetooth Low Energy to create an app
 
 - Add more functionality to the LCD display like a GOAL messaege

<!-- 
🧼 Optional Add-Ons:

You can add these at the end if relevant:

License (MIT, etc.)

Author or Contact Info

Attributions if you used external templates or tools -->

<!-- ![Screenshot](/resources/images/example.jpg) -->
