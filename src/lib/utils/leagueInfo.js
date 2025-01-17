/*   STEP 1   */
export const leagueID = "1117197816645976064"; // your league ID
export const leagueName = "Pitbull Fan Group #305 #worldwide"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Intro text for the fantasy football league.</p>
  <p>Another paragraph with some intro text.</p>
  <p>etc.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
  {
    "managerID": "996460592841928704",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    "name": "Mike McShane",
    "location": "West Roxbury, MA, USA", // (optional)
    "bio": "Webster's Dictionary defines 'Commissioner' as 'a member of a commission', wait no that doesn't really help...oh here we go, as 'the representative of the governmental authority in a district, province, or other unit often having both judicial and administrative powers'. Actually not really sure what that means. Let's see what else they have. 'The officer in charge of a department or bureau of the public service', nah not what I'm looking for. Oh here we are, let's try this again. Webster's Dictionary defines 'Commissioner' as 'the administrative head of a professional sport'. So, why will I win this year? Well as the administrative head of this league, turns out I can change the rules to make me win! It really is that easy! In fact, since you all have to send me money anyways, why don't we just pick this back up again next year. It was a pleasure taking your money...I mean hosting the league with you all once again this year.",
    "photo": "/managers/mike_mcshane_survivor_pic.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy", // (optional)
    "tradingScale": 9, // 1 - 10 (optional)
    "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },{
    "managerID": "434817840378277888",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    "name": "Kevin McAllister",
    "location": "London, England", // (optional)
    "bio": "Have you ever met someone and immediately known that they will make it big? That if anyone's face is going to be out there, it would be them? Kevin 'Fame' McAllister is that person. Having tasted (league-wide) fame in 2018, Kevin set his sights on bigger things. And not long after, you could find his face gracing the pages of newspapers worldwide. So what will this star do next? It seems he has set his sights on winning this Survivor Pool. And if he had what it took to achieve worldwide recognition, he has what it takes to beat everyone else and become the 2020 Survivor Pool Champion. Don't be surprised if you see Kevin's face gracing the league newsletter at the end of this year.",
    "photo": "/managers/kevin_mcallister_survivor_pic.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "no", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 11631, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy", // (optional)
    "tradingScale": 5, // 1 - 10 (optional)
    "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },{
    "managerID": "550860293976215552",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    "name": "Max Dunbar",
    "location": "Boston?", // (optional)
    "bio": "What do you get when you combine a raw love for the game with the incredible ability to analyze football players for how they'll perform this year? You get Max Dunbar. There is no overstating his brilliance in the (stats) sheets. The Overdog will exceed your expectations. It is rumored that in 2018 he was asked by all 32 NFL teams to help them with their draft boards. For the fun of the challenge, he agreed and was able to successfully create some of the best pairings in football today; putting Saquon Barkley in New York, Nick Chubb in Cleveland, and most notably Lamar Jackson in Baltimore. If I were to predict that Max will win it all this year, he will win the league twice over. ",
    "photo": "/managers/max_dunbar_survivor_pic.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy", // (optional)
    "tradingScale": 5, // 1 - 10 (optional)
    "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },{
    "managerID": "865673135989575680",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    "name": "Neal McGovern",
    "location": "Cambridge, MA, USA", // (optional)
    "bio": "Have you ever thought, 'my bench depth is lacking this week, maybe I should pick him up'? That moment of hesitation is all he needs. Take a moment to think, stop to tie your shoes, blink or breathe one extra time and you will see your dreams crushed before your eyes. Don't wait until waivers have passed, because Neal will have picked up your player. Try to offload good players on their bye week and the next week Neal will have them on his team. Thinking about going out for ice cream tonight? Neal is already finishing off the cone. If commitment and dedication aren't what you need to take home the trophy this year I don't know what is; and if Neal isn't commitment and dedication then I don't know who is. ",
    "photo": "/managers/neal_mcgovern_survivor_pic.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 9493, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy", // (optional)
    "tradingScale": 5, // 1 - 10 (optional)
    "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },{
    "managerID": "869792642324733952",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    "name": "Bobby Looney",
    "location": "Charlestown, MA, USA", // (optional)
    "bio": "It is a fact that last year was an Absolute Disaster for Bobby Looney; and honestly most of the years before that were A Disgrace too, but that's not the Bobby we all know. When you see him on the field you think wow he's an Absolute Dog. You see him out at night and think now that's an Attractive Dude. Chill with him for an afternoon and you know that he's an All-around Dynamite friend. From spectator, to player, to captain, to champion, and all the way up to Athletic Director, Bobby has worked his way up in his real life sports career, so what's to make us believe he won't do the same in our league. You would be A Dunce to count out the A.D. ",
    "photo": "/managers/bobby_looney_survivor_pic.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy", // (optional)
    "tradingScale": 10, // 1 - 10 (optional)
    "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },{
    "managerID": "996873398301102080",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    "name": "Chris Kelly",
    "location": "Dedham, MA, USA", // (optional)
    "bio": "What could a cerebral type possibly hope to achieve in a contest about football? Well let me introduce you to the one and only Chris Kelly and show you just what he can do. You've been watching football for years...big whoop, Brainiac has studied defenses, offenses, and even special teams formations. Wonder how likely the Browns are to win a game this year? Just ask Chris and I'm sure he'll have worked out the probability. Chris' chance of winning this year and his performance last year are independent events. Additionally, the league history stats don't lie, Chris can win. Oh and I think I should mention that Brainiac has a PhD in kicking butt, and this year he is gonna school us all.",
    "photo": "/managers/chris_kelly_survivor_pic.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4881, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy", // (optional)
    "tradingScale": 5, // 1 - 10 (optional)
    "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },{
    "managerID": "996955100054614016",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    "name": "Alex Trombetta",
    "location": "Cambridge, MA, USA", // (optional)
    "bio": "Turtles are known to be one of the oldest creatures on this planet; they were here before we were born, and they'll be here long after we leave. They are consistent. And they say consistency is the key to success; so if you're looking for consistency, look no further than The Turtle. Alex will first make you think he isn't a threat. He'll stay back watching everyone else tire themselves out grasping and fighting for position. And then when push comes to shove, he'll hit you with shell, bite you like you're his lunch, and make the playoffs. Every. Single. Time. Like a turtle, don't underestimate Alex. In this league, you're the rabbit and with one misstep, The Turtle will step right over you on his way to victory.",
    "photo": "/managers/alex_trombetta_survivor_pic.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 6813, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy", // (optional)
    "tradingScale": 5, // 1 - 10 (optional)
    "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },{
    "managerID": "996976158145105920",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    "name": "Dan McCormack",
    "location": "Brighton?", // (optional)
    "bio": "Don't let his age fool you, Youngster is already more of a man than you'll ever be. With the energy of an 18 year old, Dan stays up all night partying and still has time to come home and crush you in the challenge of your choosing. Sometimes his energy manifests itself as an impulsive trade of Aaron Rodgers in his MVP season, sometimes as driving his knee through a wall during mini-hockey, and sometimes as concentrating hard enough that you can watch his beard grow before your eyes. Don't have the energy to constantly monitor Twitter for injury updates? Dan does. Can't stay up for the Sunday night games? Dan can. Don't have the sheer willpower to go toe-to-toe with some of the best Fantasy Footballers in the world? Dan does, Dan can, and Dan will. They say that if you don't watch your back, someone younger and hotter is going to come and take the title right out from under your feet. Dan is that someone.",
    "photo": "/managers/dan_mccormack_survivor_pic.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 3198, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy", // (optional)
    "tradingScale": 5, // 1 - 10 (optional)
    "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },{
    "managerID": "997006433533128704",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    "name": "Paul Labelle",
    "location": "Los Angeles, CA, USA", // (optional)
    "bio": "Paul Labelle can be found walking the city streets late at night searching for trouble. Donning 90's basketball jerseys and bumping to music from Biggie Smalls on his walkman, this is not a man you want to run into in the dark. Paul will jump at any chance to smack (talk) you around and tell you why HE is going to win again this year. Still not scared? Come see me again in Week 10 where I guarantee you Paul will still be alive and thriving.",
    "photo": "/managers/paul_labelle_survivor_pic.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "lac", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4217, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy", // (optional)
    "tradingScale": 5, // 1 - 10 (optional)
    "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },{
    "managerID": "997015421221953536",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    "name": "Jake Teixeira",
    "location": "Fernandina Beach, FL, USA", // (optional)
    "bio": "Purr-haps last year was not a bright spot for Tex's fantasy football career, but just looking at last year would not be a fair analysis of his abilities. So let's paws and take a moment to think about what he has achieved in his career. He has had just as much success as any of us, and back in 2011 he even clawed his way to the top spot. When he's on his game he is a fur-midable opponent and truly anything is paw-sible for him. So don't count him out, because you know he is going to stay paw-sitive and put up a fight. To him we're all just pieces of trash in his way, and Cat Daddy doesn't waste his time with litter.",
    "photo": "/managers/jake_teixeira_survivor_pic.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "jax", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 7564, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy", // (optional)
    "tradingScale": 5, // 1 - 10 (optional)
    "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  }
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    