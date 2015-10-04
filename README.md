# admin-forum

=============
To run this project on your linux machine, you would need to have NPM (node package manager), Mongo DB, Express web framework and Node JS on you machine.

Step 1: install NPM


Installation for NPM
-----------

```
sudo apt-get install npm
```

Step 2: Try this, if it works for your machine then you dont have to go for other steps. 



Installation for Mean stack
-----------

```
sudo npm install -g mean-cli
```

Step 3:
Installing Mongo DB:
-------

head over to [Mongo DB website](http://mongodb.org/downloads) and follow the steps written below:

* Download and extract the archive file
* Run mongod binary (usually located in the bin folder of the extracted archive)
* Create the folder to store the database files (the default folder is /data/db)
* Make sure port 27017 is free to use

 Installing MongoDB on a Windows machine
-------
Once you downloaded the right archive version for your system, unpack the archive file, and move the folder to C:\mongodb. MongoDB uses a default folder to store its files, and on Windows machine the default location is C:\data\db, so in order to create a new folder by using the command prompt , go to C:\ and execute:
-----------

```
C:\>mkdir data\db
```


#installing Mongo DB on a linux based machine

Once you downloaded the right archive version for your system, unpack the archive file, and move the folder to your desired location (sure, you can put it on your desktop if you wish). MongoDB uses a default folder to store its files, and on Linux and Mac OS X machines the default location is /data/db, so in order to create a new folder by using your command-line tool you'll have to execute:
-----------

```
$ mkdir -p /data/db
```

but most probably you'll have to do it with a sudo command because of permission errors. The -p flag creates the parent folder also, so in the command above, both data and db folders were created. Since the default storing folder is not in your home folder, you'll have to make sure you set yourself correct permissions for this folder, and you can do this by executing the following command:

-----------

```
$ sudo chown -R $USER /data/db
```
