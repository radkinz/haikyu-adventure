//commands
const commands = {
  leave: locationName => {
    //make sure location exist
    if (Gamelocation[locationName + 'Exit']) {
      //get location exits
      let exits = Gamelocation[locationName + 'Exit']();

      //clear msg
      clearMsg();

      //ask user which exit
      printMsg(
        `You leave the ${locationName}. You can either leave through a door that leads to ${exits[0]} or to ${exits[1]} or return to ${exits[2]}. Where do you want to go? <br>`
      )

      promptUser(
        `Options: go ${
          exits[0].split(' ')[exits[0].split(' ').length - 1]
        }, go ${exits[1].split(' ')[exits[1].split(' ').length - 1]}, go ${
          exits[2].split(' ')[exits[2].split(' ').length - 1]
        }`
      )
    } else {
      printMsg('Please choose one of the valid options<br>')
    }
  },

  go: destination => {
    //call location function if exist
    if (Gamelocation[destination]) {
      Gamelocation[destination]()
    } else {
      printMsg('Please choose one of the valid options<br>')
    }
  },

  approach: boyName => {
    //make sure exists
    if (boy[boyName]) {
      boy[boyName]()
      boyMeetings[boyName] = true
    } else {
      printMsg('Please choose one of the valid options<br>')
    }
  },

  ask: boyName => {
    //make sure exists
    boyName = boyName.toLowerCase()
    if (boyRatings[boyName] !== undefined) {
      if (boyRatings[boyName] > 0) {
        //get good ending
        goodEndings[boyName]()
      } else {
        //get bad ending
        badEndings[boyName]()
      }
    } else {
      printMsg('Please choose one of the valid options<br>')
    }
  }
}

//store location objects
const Gamelocation = {
  gym: function () {
    clearMsg();

    //send msg
    printMsg(
      'You are now at the gym. You spot a small but adorable little redhead highschool student in the corner. Next to him stands a tall, blue-eyed highschool student. <br>Who do you approach? <br>'
    )

    //prompt user for anwser
    promptUser('Options: Leave gym, approach redhead, approach blue-eyes')
  },
  gymExit: function () {
    return ['a hallway', 'the student lounge', 'gym']
  },
  lounge: () => {
    clearMsg();

    printMsg(
      'You walk down a hallway and approach the student lounge door. You reach for the handle but hear some noises coming from inside. <br><br> *Bang* *Bang* <br><br> The sound of someone banging on metal rattles through your ears. You take a deep breath, and walk inside. You encounter a tall, thick male, who has golden-colored eyes and spiky white-grey hair with black streaks. He is banging on the vending machine with a look of despair washed over his face. It appears his candy bar is stuck, and he is trying to forcefully remove it. What do you want to do?<br>'
    )

    promptUser('Options: Approach muscle-man, leave lounge')
  },
  loungeExit: () => {
    return ['the cafeteria', 'the gym', 'the student lounge']
  },
  hallway: () => {
    clearMsg();

    //send msg
    printMsg(
      'You are now in the hallway, to your right is the bathroom. In the end of the hallway you see a chemistry room, and the door is ajar. You spot a calm, slim figure walking up ahead. There is sweat on his brow, and he seems to be looking for something. Do you want to approach him?'
    )

    //prompt user for anwser
    promptUser(
      '<br>Options: go bathroom, Approach calm-guy, go chemlab, go gym'
    )
  },
  chemlab: () => {
    clearMsg();

    //send msg
    printMsg(
      'You ignore and pass the back-hair student, and continue walking down the hallway. You enter the chemistry room. Two Nekoma students in their uniforms are inside. One with dyed yellow hair is playing a video game, while curled up in the corner like a cat. The other is a tall student with black hair nearly covering his left eye, who appears to be admiring the periodic table. How will you react?'
    )

    //prompt user for anwser
    promptUser('<br>Options: approach gamer, approach nerd, leave chemlab')
  },
  chemlabExit: () => {
    return ['a hallway', 'the cafeteria', 'chemlab']
  },
  cafeteria: () => {
    clearMsg();

    //send msg
    printMsg(
      'You head to the Cafeteria. Inside the Cafeteria, you run into two strong high school boys, who look surprisingly alike. “Are they twins?” You wonder. Everything about their face and body structure are identical except one has poorly dyed blonde hair, while the other has sleek, dyed grey hair. The blonde hair boy is shoving his face full of Fatty Tuna, while his grey-haired friend is scolding him. How do you want to handle the situation? <br>'
    )

    //prompt user for anwser
    promptUser(
      '<br>Options: Approach blondy, approach grey-hairs, leave cafeteria, go lounge, go chemlab'
    )
  },
  cafeteriaExit: () => {
    return ['lounge', 'chemlab', 'cafeteria']
  },
  bathroom: () => {
    clearMsg();

    printMsg(
      'You walk into the bathroom, so you can wash your hands and check your face. Have to make sure you look your best when searching for a future partner. You walk in and encounter two high school boys. They are both tall but one has brown curly hair with the complexion of an angel. The other has spiky hair and a visage of pure anger. The two students from Aoba Johsai are bickering:<br><br>“Shittykawa, stop looking at yourself in the mirror!”<br>“Silly Iwa-chan, perfection takes time!”<br><br>You overhear part of their conversation, but they stop abruptly when you walk in. They turn and look at you. What do you do?'
    )

    promptUser(
      '<br>Options: Approach angel, approach angels-friend, leave bathroom'
    )
  },
  bathroomExit: () => {
    return ['hallway', 'gym', 'bathroom']
  }
}

//store boy objects
const boy = {
  redhead: () => {
    clearMsg();

    printMsg(
      "HI THERE I'M HINATA SHOYO. I LOVE VOLLEYBALL…..do YOUUU like volleyball?"
    )

    promptUser(
      '<br>Options: i LOVE volleyball, volleyball is for sweaty jocks, meh'
    )
  },
  'blue-eyes': () => {
    clearMsg();

    printMsg('... <br> He walks away. How do you respond?')

    //record blue eye interaction
    boyMeetings['blue-eyes'] = true
    promptUser('Options: Leave gym, approach redhead, approach blue-eyes')
  },
  'calm-guy': () => {
    clearMsg();

    printMsg(
      "Uhh hi. I'm Akaashi, have you seen a tall, spiky grey haired man at all? I’ve been looking all over."
    )

    promptUser(
      '<br>Options: who is that, yea he is in the dining hall, I think I saw him in the lounge, I am not going to tell you, he is in the chem lab'
    )
  },
  nerd: () => {
    clearMsg();

    printMsg(
      'OH HI, I’m Kuroo! Now aren’t you pretty, but not as pretty as this periodic table. My favorite element is bromine, what is yours?'
    )

    promptUser(
      'Options: Chemistry is gross, Argon of course, gold because I am expensive'
    )
  },
  'grey-hairs': () => {
    clearMsg();

    printMsg(
      "Oh hello. My name's Osamu, and sorry you had to witness my idiot brother. I wanted him to try my onigiri, but he got distracted by the tuna. Would you like to try my onigiri?"
    )

    promptUser(
      '<br>Options: Eww of course not, your brother is kind of cute, I would love some, I love onigiri but I do not trust your cooking'
    )
  },
  blondy: () => {
    clearMsg();

    printMsg(
      'Oh who are you? I am Atsumu, and if you want some of my fatty tuna, then you can’t have it!'
    )

    promptUser(
      '<br>Options: Fatty tuna is disgusting, I want more than just your fatty tuna, I like your hair'
    )
  },
  'muscle-man': () => {
    clearMsg();

    printMsg(
      'HEY HEY HEY! I am Bokuto, and can you help me shake this vending machine, my candy bar is stuck and I AM STARVING!'
    )

    promptUser(
      '<br>Options: Of course LETS DO THIS, if you are hungry then go to the cafeteria, no'
    )
  },
  angel: () => {
    clearMsg();

    printMsg(
      'Looks like we got a guest Iwa-chan. Hi there, people call me Oikawa, but you can call me tonight;)'
    )

    promptUser(
      '<br>Options: Eww what, I thought they called you Shittykawa, I will be looking forward to it'
    )
  },
  'angels-friend': () => {
    clearMsg();

    printMsg(
      'Hello I-<br>*The angel pushes his friend off to the side*<br>“HIIII I’M OIKAWA. You must be a fan...I’ll give you my autograph if you want, but you’ll have to get on your knees and beg”'
    )

    promptUser(
      '<br>Options: Anything you say...master, you are so full of yourself, in your wildest dreams'
    )
  }
}

//correct responses
const correctresp = {
  'i love volleyball': () => {
    clearMsg();

    printMsg(
      '<br><br>AWESOME! U R PRETTY COOL! WE SHOULD HANG OUT SOME TIME<br>The boy skips away excited. Now where do you want to go?'
    )

    //increase rating
    boyRatings['hinata'] = 1

    promptUser('<br>Options: Leave gym, approach redhead, approach blue-eyes')
  },
  'i think i saw him in the lounge': () => {
    clearMsg();

    printMsg(
      "<br><br>Thank you so much. You're a lifesaver.<br>The boy walks off. Now where do you want to go?"
    )

    boyRatings['akaashi'] = 1

    promptUser(
      '<br>Options: go bathroom, Approach calm-guy, go chemlab, go gym'
    )
  },
  'argon of course': () => {
    clearMsg();

    printMsg(
      '<br><br>WOAHHH You must be very NOBLE;)<br>The boy smiles and walks away. What do you want to do now?'
    )

    boyRatings['kuroo'] = 1

    promptUser('<br>Options: approach gamer, approach nerd, leave chemlab')
  },
  'i would love some': () => {
    clearMsg();

    printMsg(
      "<br><br>Yes! Thank you so much. I'll go grab you some....oh actually it turns out that I ate them all already, but thanks anyways!<br>The boy walks away. What do you do?"
    )

    boyRatings['osamu'] = 1

    promptUser(
      '<br>Options: Approach blondy, approach grey-hairs, leave cafeteria, go lounge, go chemlab'
    )
  },
  'i want more than just your fatty tuna': () => {
    clearMsg();

    printMsg(
      '<br><br>The boy raises his eyebrow at you, and smirks.<br>He walks away. Now what do you do?'
    )

    boyRatings['atsumu'] = 1

    promptUser(
      '<br>Options: Approach blondy, approach grey-hairs, leave cafeteria, go lounge, go chemlab'
    )
  },
  'of course lets do this': () => {
    clearMsg();

    printMsg(
      '<br><br>Thank you so much!! You are the best.<br>Together you two shake the machine, and his candy bar falls down. He hugs you, and walks away. What do you do?'
    )

    boyRatings['bokuto'] = 1

    promptUser('<br>Options: Approach muscle-man, leave lounge')
  },
  'i thought they called you shittykawa': () => {
    clearMsg();

    printMsg(
      "<br><br>Ouu so mean, but it is okay because you're cute.<br>He turns away back to the mirror. Where do you want to go?"
    )

    boyRatings['oikawa'] = 1

    promptUser(
      '<br>Options: Approach angel, approach angels-friend, leave bathroom'
    )
  },
  'anything you say...master': () => {
    clearMsg();

    printMsg(
      '<br><br>Woah woah...I think my nose bleeding.<br>He turns back to the mirror. What do you want to do?'
    )

    boyRatings['oikawa'] = 1

    promptUser(
      '<br>Options: Approach angel, approach angels-friend, leave bathroom'
    )
  },
  'in your wildest dreams': () => {
    clearMsg();

    printMsg(
      '<br><br>Oikawa shrugs, and turns back to the mirror. What do you want to do?'
    )

    boyRatings['iwaizumi'] = 1

    promptUser(
      '<br>Options: Approach angel, approach angels-friend, leave bathroom'
    )
  }
}

const incorrectResp = {
  hinata: () => {
    printMsg(
      '<br><br>oh ok.<br>The boy walks away slowly, while shedding a tear. Now what do you want to do?'
    )

    promptUser('<br>Options: Leave gym, approach redhead, approach blue-eyes')
  },
  akaashi: () => {
    printMsg(
      '<br><br>*sigh* okay whatever. I gotta go.<br>The boy walks off. Where do you want to go?'
    )

    promptUser(
      '<br>Options: go bathroom, Approach calm-guy, go chemlab, go gym'
    )
  },
  kuroo: () => {
    printMsg(
      "<br><br>Interesting. Well I'm going to get back to my periodic table.<br>The boy turns away. How do you respond?"
    )

    promptUser('<br>Options: approach gamer, approach nerd, leave chemlab')
  },
  osamu: () => {
    printMsg(
      '<br><br>oh fine.<br>The boy lowers his head and walks away. What do you do?'
    )

    promptUser(
      '<br>Options: Approach blondy, approach grey-hairs, leave cafeteria, go lounge, go chemlab'
    )
  },
  atsumu: () => {
    printMsg(
      '<br><br>The boy rolls his eyes at you, and walks away. How do you respond?'
    )

    promptUser(
      '<br>Options: Approach blondy, approach grey-hairs, leave cafeteria, go lounge, go chemlab'
    )
  },
  bokuto: () => {
    printMsg(
      "<br><br>oh sorry to bother you.<br>The boy's hair droops and his eyes sadden, as he walks away. What do you do?"
    )

    promptUser('<br>Options: Approach muscle-man, leave lounge')
  },
  oikawa: () => {
    printMsg(
      '<br><br>Oikawa shrugs, and turns back to the mirror. What do you want to do?'
    )

    promptUser(
      '<br>Options: Approach angel, approach angels-friend, leave bathroom'
    )
  },
  iwaizumi: () => {
    printMsg(
      '<br><br>You are kinda mean, but you can not replace my Iwa-chan! <br> He turns away. Where do you want to go next?'
    )

    promptUser(
      '<br>Options: Approach angel, approach angels-friend, leave bathroom'
    )
  }
}

//store endings
goodEndings = {
  hinata: () => {
    printMsg(
      '<br><br>OHH I would LOVE to accompany you to the prom, as long as we can play volleyball after the dance!'
    )

    //call end game function
    endGame('Hinata')
  },
  akaashi: () => {
    printMsg(
      "<br><br>Hmm I don't mind attending with you. You're really nice, so I'm sure it will be a lot of fun."
    )

    endGame('Akaashi')
  },
  kuroo: () => {
    printMsg(
      '<br><br>OMG OF COURSE! I AM SO GLAD YOU ASKED! I WOULD LOVE TO ACCOMPANY YOU;)'
    )

    endGame('Kuroo')
  },
  osamu: () => {
    printMsg(
      "<br><br>Sounds like fun! I'll make onigiri for us to eat beforehand."
    )

    endGame('Osamu')
  },
  atsumu: () => {
    printMsg('<br><br>Sure pretty thang;)')

    endGame('Atsumu')
  },
  bokuto: () => {
    printMsg(
      '<br><br>OMG OMG OMG YOU REALLY WANT TO GO WITH ME?!?!?! HOW COULD I NOT SAY NO? YES YES YES YESSSSS!!!!'
    )

    endGame('Bokuto')
  },
  oikawa: () => {
    printMsg(
      "<br><br>Can't say I wasn't expecting this, but sure. You look like you could be some fun, but remenber no pictures can include my bad side. JK I have no bad side;)"
    )

    endGame('Oikawa')
  },
  iwaizumi: () => {
    printMsg('<br><br>Sure, I need some time away from Shittykawa.')

    endGame('Iwaizumi')
  }
}

//store bad endings
badEndings = {
  hinata: () => {
    printMsg("<br><br>Sorry I can't make it. I'll be playing volleyball.")

    //call end game function
    endGame('nobody')
  },
  'blue-eyes': () => {
    printMsg('<br><br>...')

    endGame('nobody')
  },
  akaashi: () => {
    printMsg('<br><br>Thanks for asking, but I am unable to attend.')

    endGame('nobody')
  },
  kuroo: () => {
    printMsg(
      '<br><br>Oh shoot! I already planned to do an acid-base titration that day. Bummer!'
    )

    endGame('nobody')
  },
  osamu: () => {
    printMsg('<br><br>I am flattered, but no.')

    endGame('nobody')
  },
  atsumu: () => {
    printMsg(
      '<br><br>BAHAHAHA you think I would go to prom with you?! Never in a million years!'
    )

    endGame('nobody')
  },
  bokuto: () => {
    printMsg(
      "<br><br>I- Uh I- Uh I can't go. Sorry! I have to take care of my owl."
    )

    endGame('nobody')
  },
  oikawa: () => {
    printMsg('<br><br>Hmmm okay, as long as we can bring Iwa-chan as well!!')

    endGame('nobody')
  },
  iwaizumi: () => {
    printMsg('<br><br>No.')

    endGame('nobody')
  }
}

//end game
function endGame (name) {
  printMsg(`<br><br>Congratulations you ended with ${name}.\n\nTHE END.`)
}

//store boys and their raitings
var boyRatings = {
  hinata: 0,
  'blue-eyes': 0,
  akaashi: 0,
  kuroo: 0,
  osamu: 0,
  atsumu: 0,
  bokuto: 0,
  oikawa: 0,
  iwaizumi: 0
}

//store if you have met all the boys
var boyMeetings = {
  redhead: false,
  'blue-eyes': false,
  'calm-guy': false,
  nerd: false,
  'grey-hairs': false,
  blondy: false,
  'muscle-man': false,
  angel: false,
  'angels-friend': false
}

var incorrectRespAns = {
  'you are so full of yourself': 'iwaizumi',
  'eww what': 'oikawa',
  'i will be looking forward to it': 'oikawa',
  'if you are hungry then go to the cafeteria': 'bokuto',
  no: 'bokuto',
  'fatty tuna is disgusting': 'atsumu',
  'i like your hair': 'atsumu',
  'eww of course not': 'osamu',
  'your brother is kind of cute': 'osamu',
  'i love onigiri but i do not trust your cooking': 'osamu',
  'chemistry is gross': 'kuroo',
  'gold because i am expensive': 'kuroo',
  'who is that': 'akaashi',
  'yea he is in the dining hall': 'akaashi',
  'I am not going to tell you': 'akaashi',
  'he is in the chem lab': 'akaashi',
  'volleyball is for sweaty jocks': 'hinata',
  meh: 'hinata'
}

//prompt user function
function handleResp (resp) {
  //quickly clean resp
  resp = resp.toLowerCase()
  //check if you have met all boys and that you are not already asking them out
  if (
    Object.values(boyMeetings).every(Boolean) !== false &&
    resp.split(' ')[0] !== 'ask'
  ) {
    //clear messages
    clearMsg();

    //give user opportunity to ask
    printMsg(
      '<br><br>Now that you have met all the boys, you can ask one of them to prom! Who do you want to ask?<br>'
    )

    promptUser(
      '<br>Options: ask hinata, ask blue-eyes, ask akaashi, ask kuroo, ask osamu, ask atsumu, ask bokuto, ask oikawa, ask iwaizumi'
    )
  } else {
    //first check if message matches a correct resp
    if (correctresp[resp]) {
      correctresp[resp]()
    } else if (incorrectRespAns[resp]) {
      incorrectResp[incorrectRespAns[resp]]()
    } else {
      //get verb and subject
      let verb = resp.split(' ')[0]
      let subject = resp.split(' ')[1]

      //call command if exist
      if (commands[verb]) {
        commands[verb](subject)
      } else {
        printMsg('Please choose one of the valid options<br>')
      }
    }
  }
}

function clearMsg (str) {
  $("#messages").html("");
}

function printMsg (str) {
  $('#messages').append(str)
  //keep scrollbar at the bottom
  $('#messages').scrollTop($('#messages')[0].scrollHeight)
}

//display button choices
function promptUser (str) {
  printMsg(str)
  str = str.split('Options: ')[1]
  str = str.split(',')

  //remove extra spaces
  for (let i = 1; i < str.length; i++) {
    str[i] = str[i].substring(1)
  }

  //empty previous buttons
  $('#options').html('')

  //display button options
  for (let i = 0; i < str.length; i++) {
    //add new buttons
    $('#options').append(`<button>${str[i]}</button>`)
  }

  //set event listners
  let button = document.querySelectorAll('button')

  //set event listeners for all
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', event => {
      handleResp(button[i].innerHTML)
    })
  }
}

//start game with opening
printMsg(
  'The prom is coming in 2 weeks, now you desperately need to find someone to accompany you. A tournament at Nekoma High just ended. Aoba Johsai High, Inarizaki High, Fukurodani  Academy, and Karasuno High were invited. After watching the tournament, you decided to find the #1 prom mate among all the boys.<br><br>YOU SEARCH THEM OUT.'
)
//start in gym
Gamelocation.gym()

//make sure window dont automatically reload
window.onbeforeunload = function () {
  return 'Dude, are you sure you want to leave? Think of the kittens!'
}
