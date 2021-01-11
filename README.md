# SQL vs NoSQL

By the end of the day, you will be able to:

- Create a schema for MySQL and MongoDB 

- Perform CRUD operations in MySQL and MongoDB

- Explain the differences between a relational database and a document-based database

  

## Agenda

| Time          | Activity                                                     |
| ------------- | ------------------------------------------------------------ |
| 7:30 - 9am    | AM Warmup                                                    |
| 9 - 11am      | Live Coding SQL and MongoDB (we will live code part of the assignments) |
| 11am - 4:30pm | Work solo on assignments                                     |
| 3 - 4pm       | Office Hours (optional)                                      |



## AM Warmup

1. Watch: [MySQL IN 10 MINUTES (2020) | Introduction to Databases, SQL, & MySQL](https://www.youtube.com/watch?v=2bW3HuaAUcY)

2. Install MongoDB on your computer by opening Terminal and typing the following:

```bash
brew tap mongodb/brew
```

```bash
brew install mongocli
```

At this point, if you get an error message, you will need to reinstall Xcode, which can take 30 minutes or more.  Make sure your internet connection can handle a download that big (won't work on a hotspot for example). When you're ready, type the following:

```
sudo rm -rf /Library/Developer/CommandLineTools
```

```
sudo xcode-select --install
```

After xcode has installed, type the code in the line below. If it's installed correctly, you'll get back some info about mongocli and not an error message:

```
mongocli help
```



## Assignments

[U2 Lab 1: Exploring a SQL database](https://skilledkc.valor.training/mod/assign/view.php?id=11655)

[U2 Lab 2: Exploring a MongoDB database](https://skilledkc.valor.training/mod/assign/view.php?id=11657)

[U2 Quiz: Differences in Database Types](https://skilledkc.valor.training/mod/quiz/view.php?id=11659)



Please note that there will be some minor changes to the written instructions; please attend the Live Coding session for instructions.
