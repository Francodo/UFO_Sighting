# UFO_Sighting
Francis Odo

Background 
Creating a web site involves a number of programing applications, techniques and methodologies. In this project, the focus is on enhancing HTML with Java Script and CSS. Given a datafile, we want to create multiple search options which will be used to filter the data and generate results. 
Objective
The objective is to provide multiple search options for the user to search for data. The intended search options are: 
•	Date
•	City
•	State
•	Country
•	Shape
Each and any or combination of these options should be able to generate the intended search result. 
Tools/Environment
The development environment is Visual Studio Code. Programming is done in three major area, namely:
1.	HTML 
2.	Java Script 
3.	CSS  
A major critical requirement for this type of application development is the folder structure. Code files and resource files are expected in a particular order of folder structure. Otherwise, the system will not function properly. In this case the folder structure is as shown:
	 
Code Plan
(1)	Java Script –(a) Import data.js in “app.js”
 		(b) Create a variable for table references with D3.select() with tbody
		©  Create a function to build table data
		(d) Loop through each object in the data. Append row and cell for each value in the row
		(e) Append a row to the table body
		(f) Loop through each field in the dataRow and add each value as a data cell
		(g) Keep track of filters
		(h) Create a function to take input for (Date, City, State, Country, Shape)
		(i) Check to see if input was entered and apply filter
		(j) Rebuild table
(k) Attach an event to listen to the form
(l) Build table when the page loads
(2) HTML 	(a) Create forms for input options with reference to each in ”index.html”.
		(b) Create Button
		(c) Provide links or file path to data.js, app.js, image.jpg 
(3) CSS		(a) Modify styling properties as necessary in “style.css”
Approach
•	The index.html is the main engine of the document page. 
•	The “app.js” Java Script provides dynamic and interactive experience to the user.
•	The “style.css” is for consistent styling across pages
Conclusion
The program works, but could be improved with more time. Here are some search result samples: 
