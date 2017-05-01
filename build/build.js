var shell = require('shelljs');

shell.rm('-rf','www/js/libs');
shell.rm('-rf','bower_components');
shell.rm('-rf','platforms');
shell.rm('-rf','plugins');

shell.exec('./node_modules/.bin/bower install');
shell.exec('./node_modules/.bin/bower-installer');

shell.exec('./node_modules/.bin/phonegap platform add android');
shell.exec('./node_modules/.bin/phonegap platform add browser');
shell.exec('./node_modules/.bin/phonegap platform add ios');
shell.exec('./node_modules/.bin/phonegap build --buildConfig=build/build.json');
