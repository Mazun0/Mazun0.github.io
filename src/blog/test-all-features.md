---
layout: layouts/post.njk
title: Testing All Markdown Features
description: A post to test code blocks, LaTeX, images, and more.
tags: blog
readTime: 6
tagInitial: T
tagType: test
date: 2025-07-27
navType: blogPost
pageType: default
---

# test all features
---

## 📝 Markdown Basics

- **Bold text**
- _Italic text_
- `Inline code`
- [External Link](https://example.com)

---


## 🧠 JavaScript Code

```js
function greet(name) {
  return `Hello, ${name}!`;
}
``` 
```python
def square(x):
    return x * x

```

Inline: \( \int x^2 dx = \frac{x^3}{3} + C \)

Block:

$$
f(x) = ax^2 + bx + c
$$

Or even align:

$$
\begin{align}
a &= b + c \\
f(x) &= \int_0^\infty e^{-x} dx
\end{align}
$$


![Image](/resources/images/example.jpg)




<div class="photo-reel">
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Havelock_Island%2C_Mangrove_tree_on_the_beach%2C_Andaman_Islands.jpg" alt="Sunset at the Beach" class="photo-item">
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Sofia_Massif_and_Sofia_Glacier%2C_Karachay-Cherkessia%2C_Caucasus_Mountains.jpg" alt="Mountain Hiking" class="photo-item">
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/NYC_wideangle_south_from_Top_of_the_Rock.jpg" alt="City View" class="photo-item">
  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Mystic_Beach%2C_Vancouver_Island%2C_Canada_10.jpg" alt="Beach Adventure" class="photo-item">
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Beech_Forest_%28AU%29%2C_Great_Otway_National_Park%2C_Beauchamp_Falls_--_2019_--_1271.jpg" alt="Forest Trail" class="photo-item">
</div>
