# otb - On the Beach test

A little bit of code to demonstrate my abilities.

### Installation

Open up the command prompt and cd into the parent folder of where you would like to install the files 

eg. `cd C:\Sites`

Then clone the repo

`git clone https://github.com/cherry15/otb.git`

This will create a folder called otb in the current folder with all the necessary files.

or you can add a folder name to the end of the git command eg to place all the files into C:\Sites\my_site

`git clone https://github.com/cherry15/otb.git my_site`

cd into your newly created folder

`cd my_site`

To run the app, open up the command prompt and type

`gulp serve`

This will run the uncompressed files

To build the app type

`gulp build-dist`

To serve the distribution version type

`gulp serve-dist`

The files for the module are in otb\app\components\beach

### Testing

Tests are present but won't run in this environment as this is my first attempt at writing a gulpfile
The tests have been run in a different setup which was part of a yeoman generator.

