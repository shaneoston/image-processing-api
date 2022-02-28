# Image processing api
The image processing app resizes a given file to user-specified dimensions.

To run the app: `npm run build` and then `node dist/.`

To run the app without building it: `npm run start`

## To use the app 
Enter the following url substituting the TERMS in caps with a valid
filename from the list below.
```
http://localhost:3000/api/images?filename=IMAGENAME&width=NUMBER&height=NUMBER
```
Here is an example of valid and properly formatted URL.
```
http://localhost:3000/api/images?filename=fjord&width=500&height=800
```
Note that width and height are required and must be number values.

Valid filenames are: 
* encenadaport
* fjord
* icelandwaterfall
* palmtunnel
* santamonica