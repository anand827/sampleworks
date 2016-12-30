# UI-Boilerplate

1. Rename your root folder name(UI-Boilerplate) as your PROJECT NAME.
2. Create a folder name design and 3rd-party for your local reference.
3. Download your dependency files by running the command [npm install] in VScode command line.
4. After completion run the project by command [gulp].
5. For Image Optmization run the command [gulp-image].

# VScode Shortcuts
------------------

1. Command prompt 	- CTRL + ~
2. GIT 				- CTRL + SHIFT + G
3. FILE EXPLORER 	- CTRL + SHIFT + E
4. COMMAND PANEL 	- CTRL + SHIFT + P


# THINGS TO FOLLOW
------------------
1. SASS.
2. BEM concept.
3. At last optimize the images.

#### IMPORTANT: PLEASE USE THE BOOTSTRAP GRID ALONE. DO NOT USE THE FULL BOOTSTRAP.
#### EXCEPT THE GRID OTHER BOOTSTRAP COMPONENTS ARE COMMENTED IF YOU ARE IN-NEED OF ANY COMPONENTS PLEASE UN-COMMENT IT. 

# PROJECT STRUCTURE
-------------------
UI-Boilerplate--|---3rd-party    			--put your css and js library orginal source here for reference<br>
				|---design       			--put your jpg and psd design here in folder as per date
				|---src          			--project source files
					|---html     			--project root files and folder
						|---css    			--generated css file
						|---images 			--project whole images 
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