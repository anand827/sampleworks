# UI-Boilerplate

# Prerequisites
--------------
1. Node Js Latest Version [GetHere](https://nodejs.org/en/).
2. VScode Editor [GetHere](https://code.visualstudio.com/) or any other

# Usage
-------
1. Download the zip file in your specified path
2. Rename your root folder name(UI-Boilerplate) as your PROJECT NAME.
3. Create a folder name `design` and `3rd-party` for your local reference.
4. Navigate your project path in `CMD`
5. Download your dependency files by running the command `npm install` in command line.
6. After completion run the project by command `gulp`.
7. For Image Optmization run the command `gulp-image`.

# VScode Shortcuts
------------------
1. Command prompt   - `CTRL + ~`
2. Git 				- `CTRL + SHIFT + G`
3. File Exploerer	- `CTRL + SHIFT + E`
4. Command Panel 	- `CTRL + SHIFT + P`


# Things to Follow
------------------
1. SASS.[Readmore](http://sass-lang.com/guide)
2. BEM concept.[Readmore](https://en.bem.info/methodology/css/)
3. At last optimize the images.

#### Important: please use the bootstrap grid alone. do not use the full bootstrap.except the grid other bootstrap components are commented if you are in-need of any components please un-comment it from bootstrap.scss. 
#### This is a Boilerplate please adjust ae per your project requirement.
# Template Structure
-------------------

	UI-Boilerplate--|
					|---3rd-party    			--put your css and js library orginal source here for reference				
					|---design       			--put your jpg and psd design here in folder as per date				
					|---src          			--project source files					
						|---html     			--project root files and folder
							|---css    			--generated css file for your project
							|---images 			--project whole images 
								|---about       --about page images
								|---product     --product page images
								|---compressed 	--optmized image folder after running gulp command
							|---js
								|---lib  		--3rd party library script directory for whole project
								|---site 		--common script directory for whole project
							|---fonts  			--required fonts for entire project
							index.html         	--root page
						|---sass     			--project sass root files
							|--base    			--contains reset element styles and fonts
							|--helpers 			--contains variables and mixins 
							|--layout  			--contains header and footer
							|--media   			--contains all media queries 
							|--pages   			--contains all pages syles
							|--vendors 			--contains 3rd-party scss framework
							style.scss 			--imported scss partial files here
					|---.gitignore
					|---gulpfile.js
					|---package.json
					|---README.md
