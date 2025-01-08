## Tailwind CSS, creating custom theme and testing tailwind latest versions
This folder is all about the testing tailwind CSS and its latest updates. We can extend or create our custom theme using tailwind.config.js file and extend options. Make sure you always use extend option so that you don't override any builtin tailwind classes. 
`do not forget to run your tailwind in watch mode everytime you restart your coding.`    
command for running the tailwind css in watch mode is     
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```
### Container class
We find dynamic screen size adjustment as per container class. 
### max-width and mx-auto 
These classes are best utilized for dealing with width. 
### Grid for page layout
Use grid for layout of the page and alternatively you can use flex as well. Check official documentation for more information.     
### Margin and padding in tailwind CSS
1. Use margin, padding, m, p, mt, mb, ml, mr, ml, mx, my, px, py, pt, pr, pl, pb, px, py, m-auto, p-auto etc. 
2. We can use negative values for negative margins and padding.    
Margin: We move the entire box.     
padding: We move the content inside the box.     
`Check the CSS box model for details.`     
`Also don't forget the rules of margin and padding overriding.`    
Arbitrary values for margins and padding can be given by `m-[20px]` means all sides 20px. We can also say `m-[10px_20px_20px_10px]` to define all 4 sides in clockwise directions as happen in case of CSS. Also `m-[10px_20px]` means 10px for top and bottom and 20px for left and right sides.    
3. We can also use `auto` value to make margin or padding auto.    
### Flexbox for layout in Tailwind CSS
Flexbox is used for making page layout similar to grid layout design. Often times grid has rigid layout and hence flex is preferred for more detailed and specific layouts. Also flex can be used inside of gird to provide perfection.  
