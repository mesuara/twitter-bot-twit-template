# twitter-bot-twit-template
 This is a template created using [Twit](https://github.com/ttezel/twit). It searches for tweets based on the word passed and then retweets those tweets.

 ## Installing

 * [Get Twitter tokens](https://github.com/git/git/blob/master/README#L1)
 * [Install the template](https://github.com/git/git/blob/master/README#L20)


## Get Twitter Tokens

* You will need a [twitter developer account](https://developer.twitter.com/en/apps) to create an App so you can get the tokens and keys. 
* Once you get approved go to [link](https://developer.twitter.com/en/apps), click on the create an app
![create an app](./images/createanapp.png)
* Fill in the fields. For the `Website URL` you can just put `https://www.example.com`.
* Click on the app that was created and navigate to Keys and Tokens.
![keys and tokens](./images/keysandtokens.png)
* If there isn't a Access token & access token secret generate one and save the information in a file/note.

### Next:

- Fork this repo
![Fork](./images/fork.png)
- Open terminal, navigate to the folder you want to have the project saved. Run the command below:
 ```shell
    git clone https://github.com/mesuara/twitter-bot-twit-template
 ```
- Open the folder in a code editor. 
- Make sure you have node. If you're not sure run the command below to check. You can download node [here](https://nodejs.org/en/download/) if you don't have it. You will need it to run the bot file
```shell
node -v
```
- On the `index.js` file paste in the saved tokens and keys from twitter.
```shell
let T = new Twit({
    consumer_key: 'your API key goes here',
    consumer_secret: 'your API secret key goes here',
    access_token: 'your access token goes here',
    access_token_secret:'your access token secret goes here' ,
})
```

