var shell = require('shelljs');

shell.rm('-rf','www/libs');
shell.rm('-rf','bower_components');
shell.rm('-rf','platforms');
shell.rm('-rf','plugins');

shell.exec('node_modules/.bin/bower install');
shell.exec('node_modules/.bin/bower-installer');

shell.exec('phonegap platform add android');
shell.exec('phonegap platform add browser');
shell.exec('phonegap platform add ios');
shell.exec('phonegap build');
