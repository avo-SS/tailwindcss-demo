![image](https://user-images.githubusercontent.com/96238309/170766091-a07aa1d2-7f40-447e-9c7f-d7c0189656f6.png)

# TailwindCSS - Demo

This presentation is only available as code, but for those that can't run it locally this README will go through the slides as if it was a PowerPoint. 


### Run presentation locally or skip to [presentation section](https://github.com/avo-SS/tailwindcss-demo/edit/main/README.md#presentation):

#### Basic commands to get started

##### Clone the repo
```
git clone https://github.com/avo-SS/tailwindcss-demo.git
```

 <br/>
 
##### Install packages and run
```
yarn install
```
```
yarn dev
```

<br/>

##### Keyboard & Mouse Navigation
- Use `left-arrow` ◀️ to navigate to previous slide.
- Use `right-arrow` ▶️ to navigate to previous slide. 
- Use `down-arrow` 🔽 to navigate to next section. 
- Use `right-arrow key` 🔼 to navigate to previous section. 
- Hover at the bottom of the screen to make navigation buttons visible
<img src="https://user-images.githubusercontent.com/96238309/170767919-a5b74345-e7ef-4853-be89-5c9ed0101109.png" width="20%" >

<br/>

# Presentation


## 1. Agenda
![image](https://user-images.githubusercontent.com/96238309/170768310-aaa3d0c5-cc6a-473a-8916-6ead317ef505.png)

## 2. Information
![image](https://user-images.githubusercontent.com/96238309/170768443-dfc8fb7f-a3aa-49f8-ae78-52cca74facae.png)

## 3. Why look into <img src="./public/svgs/tw-mark.svg" width="24"/>

### Section 2
![image](https://user-images.githubusercontent.com/96238309/170773481-a6219d00-9459-4247-8c80-b5794276c30c.png)
### Section 3 [NextJS - CSS](https://nextjs.org/docs/basic-features/built-in-css-support)
![image](https://user-images.githubusercontent.com/96238309/170773548-46cfa4e8-a178-4a20-b09e-5cd1693592b3.png)
### Section 4 [State of CSS](https://2021.stateofcss.com/en-US/technologies/css-frameworks)
![image](https://user-images.githubusercontent.com/96238309/170773681-c77346c8-fac5-42aa-a00f-57df655d249f.png)

## 4. What is <img src="./public/svgs/tw-mark.svg" width="24"/>

### Section 2 What it's not
![image](https://user-images.githubusercontent.com/96238309/170774149-9c3beeae-06f7-468f-b610-8b510ac5f759.png)
### Section 3 Tailwind is
![image](https://user-images.githubusercontent.com/96238309/170774239-d9b50123-839d-429a-8128-f78fabf7aa31.png)
### Section 4 Live coding
![image](https://user-images.githubusercontent.com/96238309/170774358-c5a31e88-3c1e-43ce-8699-a1dc5dcbb12f.png)

## 5. Core Concepts

### Section 1 
![image](https://user-images.githubusercontent.com/96238309/170774475-51919add-a06f-4731-947d-3b5b2e0fdc78.png)
### Section 2
![image](https://user-images.githubusercontent.com/96238309/170774497-ddc0b5ab-e226-4413-b905-d0978321afa4.png)
### Section 3 
![image](https://user-images.githubusercontent.com/96238309/170774568-60f975a0-9e21-44bd-addc-5aba396ecb42.png)

## 6. Landingpage Demo

### To switch between the themes when running locally
- In the file `tailwind.config.js` uncomment this line `require('./tailwind-presets/cosmetics-preset.js')`
- In the browser click on the content-swap button in the header navigation ![image](https://user-images.githubusercontent.com/96238309/170778191-2e549890-ceb5-490a-acf0-c75d5b2a4460.png)
- **Disclaimer**: The page is not built responsive as it is only for demonstration purposes.


| Tech theme light | Tech theme dark |
| --- | --- |
| <img src="https://user-images.githubusercontent.com/96238309/170775501-606891cb-04c8-48f2-8dea-ed20d58b9fdb.png"/> | <img src="https://user-images.githubusercontent.com/96238309/170776334-2ce5d96b-4de9-4cef-a463-1353cbef72f0.png"/> |

| Cosmetics theme light | Cosmetics theme dark |
| --- | --- |
| <img src="https://user-images.githubusercontent.com/96238309/170777423-4f620b92-b46d-4c61-9b13-5b19256a3eb6.png"/> | <img src="https://user-images.githubusercontent.com/96238309/170777602-eaa6426e-5f5f-4157-b2df-97e131b34d4c.png"/> |


## 7. Landingpage Comparison

![image](https://user-images.githubusercontent.com/96238309/170777949-624d899a-53d8-42fa-819e-6706663025e4.png)

## 8. Figma to Tailwind  <img src="./public/svgs/tw-mark.svg" width="24"/> with [Skaidi Design System](https://design.utdanning.no/) as an example

![image](https://user-images.githubusercontent.com/96238309/170778953-6ed50d1f-1825-43d2-92dc-f52b7115b3a9.png)

## 9. Command Line Interface

Run these commands from root:

- Watch output file when making changes to styles
```
npx tailwindcss -i ./styles/globals.css -o output.css -w
``` 
- Build minified output css file
```
npx tailwindcss -i ./styles/globals.css -o output.css -m
``` 

![image](https://user-images.githubusercontent.com/96238309/170779571-2442a337-02fc-42d2-9df2-8eb20e0272f6.png)

## 10. Demo of different ways of working with TailwindCSS

- Normal tailwind classes
- Twin.macro styled component
- Button with props for color `isRed`
- Styles extracted into an object and referenced inline with `css` attribute
- CSS Modules with `@apply` directive

![image](https://user-images.githubusercontent.com/96238309/170779910-6882c14f-0831-43c0-b756-0f53d4f413a5.png)


## 11. Summary with Pros & Cons

![image](https://user-images.githubusercontent.com/96238309/170780302-522a172d-9d1b-4ddf-a9c3-8d655a696942.png)


## 12. Q & A

![image](https://user-images.githubusercontent.com/96238309/170780340-cca5e5e0-1c58-44ad-a5f6-73de92e84c8d.png)


## Questions or looking for recording of presentation?

### Feel free to contact me at anton.vo@soprasteria.com
