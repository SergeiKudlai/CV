# **Kudlai Sergei**
***
![My Photo](./assets/img/my_foto.JPG "My Photo")

***
1. Сontacts
  1. Telegram : https://t.me/Kudlai_Sergei
  2. Email : s.kudlai@mail.ru
  3. Phone : +375 29 873-57-43
  4. Discord : s.kudlai (sergeikudlai)#0774
***
## About me 
My name is Sergey, I'm 30 years old.I live in the country of Belarus, the city of Minsk. I have higher technical education. My goal is to become a senior Front-End developer. From my strengths, I would like to single out purposefulness, punctuality and responsibility. After I finished courses on typesetting I made projects for my friends and took some freelance jobs, but eventually realized that my knowledge is not enough and I need to keep exploring distant shores and learn programming languages to become a master of my craft. At the moment I'm studying React
***
## My skills
I have experience with HTML, CSS, SCSS, jQuery, GULP, Webpack, Bootstrap, TypeScript, JavaScript, Git/GitHub, Figma in my work I used the BEM methodology.
***

## JavaScript examples
```
function nextBigger(n) {
  const digits = n.toString().split('').reverse();


  for (let i = 0; i < digits.length; i++) {
    if (digits[i] >= digits[i - 1]) continue;

    const temp = digits[i];
    const index = digits.slice(0, i).findIndex((n) => n > temp);

    if (index === -1) continue;

    digits[i] = digits[index];
    digits[index] = temp;

    return +digits
      .slice(0, i)
      .sort((a, b) => b - a)
      .concat(digits.slice(i))
      .reverse()
      .join('');
  }

  return -1;
}
```
***

## My work
https://rolling-scopes-school.github.io/sergeikudlai-JSFE2022Q3/songbird/

https://rolling-scopes-school.github.io/sergeikudlai-JSFE2022Q3/gem-puzzle/

https://sergeikudlai.github.io/online-store/
***

## Education
Completed courses in layout, simulators at HTML Academy, also repeatedly took free courses in Front-End development on different platforms. In 2023 I took Front-end 2022Q3 RS School course and continue studying at this school on React 2023 Q1 course.

## English language
A-2 (self-study), I improve my level of English through daily practice and classes with a teache
