let Twit = require ('twit')
/********************************************************************************************************************************************
 *  FILL IN THE OBJECT BELOW WITH YOUR INFORMATION FROM THE TWITTER DEVELOPER APP. CHECK THE README FOR MORE DETAILS ON HOW TO CREATE ONE *
 ********************************************************************************************************************************************/
let T = new Twit({
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret:'' ,
})

/*************************************************************************************************************************************************************
 * UNCOMMENT FROM LINE 16 TO LINE 18 TO TEST IT BY DOING A TWEET. IT WILL TWEET "HELLO WORLD", IF YOU WANT SOMETHING ELSE JUST CHANGE THE STRING AT `STATUS` *
 *************************************************************************************************************************************************************/

// T.post('statuses/update', { status: 'hello world' }, function(err, data, response) {
//     console.log(data)
//   })


/*****************************************************************************************************************************************************************************************************************************************************************************************************
 * BELOW ARE THE FUNCTIONS(line 26-41) USED FROM TWIT TO SEARCH FOR TWEETS WITH A CERTAIN WORD AND THEN RETWEET THOSE TWEETS. CHANGE THE QUERY AT `Q` FOR THE WORD AND ALSO THE DATE IF YOU'D LIKE TO GET THE LATEST ONE. YOU CAN ASLO CHANGE THE `COUNT` TO HOW MANY TWEETS AND REETWEETS YOU WOULD LIKE TO DO. *
 *****************************************************************************************************************************************************************************************************************************************************************************************************/


// T.get('search/tweets', { q: 'web development since:2020-06-11', count: 10 })
//   .catch(function (err) {
//     console.log('caught error', err.stack)
//   })
//   .then(function (result) {
// 

//     console.log('data', result.data);
//     result.data.statuses.map(x => {
//                 
//                 T.post('statuses/retweet/:id', { id: x.id_str}, function (err, data, response) {
//                     console.log(data)
//                   })
//             })
//            
//   })


