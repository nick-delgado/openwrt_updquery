# OpenWrt AutoUpdate Query Tasker JavaScriptLet

This Node project is a quick utility that will query the OpenWrt results and display them an Android phone through Tasker's JavaScriptLet code plugin. 
Obviously, Tasker is required but on Android that should be a "duh"...I think all Android powerusers should have Tasker, Termux...but I digress...


The JS code need to be copied from the **javascriptlet.js** file to the code section inside the Tasker task.

** NOTE: ** I'll probably create and export a Tasker profile later to share but for now I'm just working on the JS code. 

I used browserify+tinyify node modules to create that javascriptlet file. 

The code to run to build the javascriptlet file is: 

'''
$ browserify -p tinyify index.js -o javascriptlet.js
'''

