$('#submit').click(function () {
  handleResp($('#userchat').val())
})

//commands
const commands = {
  leave: locationName => {
    //make sure location exist
    if (Gamelocation[locationName + 'Exit']) {
      //get location exits
      let exits = Gamelocation[locationName + 'Exit']()

      //ask user which exit
      printMsg(
        `<br>You leave the ${locationName}. You can either leave through a door that leads to ${exits[0]} or to ${exits[1]} or return to ${exits[2]}. Where do you want to go? <br>`
      )

      printMsg(
        `Options: go ${
          exits[0].split(' ')[exits[0].split(' ').length - 1]
        }, go ${exits[1].split(' ')[exits[1].split(' ').length - 1]}, go ${
          exits[2].split(' ')[exits[2].split(' ').length - 1]
        } <br><br>`
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
    //send msg
    printMsg(
      'You are now at the gym. You spot a small but adorable little redhead highschool student in the corner. Next to him stands a tall, blue-eyed highschool student. <br>Who do you approach? <br>'
    )

    //prompt user for anwser
    printMsg('Options: Leave gym, approach redhead, approach blue-eyes<br><br>')
  },
  gymExit: function () {
    return ['a hallway', 'the student lounge', 'gym']
  },
  lounge: () => {
    printMsg(
      '<br>You walk down a hallway and approach the student lounge door. You reach for the handle but hear some noises coming from inside. <br><br> *Bang* *Bang* <br><br> The sound of someone banging on metal rattles through your ears. You take a deep breath, and walk inside. You encounter a tall, thick male, who has golden-colored eyes and spiky white-grey hair with black streaks. He is banging on the vending machine with a look of despair washed over his face. It appears his candy bar is stuck, and he is trying to forcefully remove it. What do you want to do?<br>'
    )

    printMsg('Options: Approach muscle-man, leave lounge<br>')
  },
  loungeExit: () => {
    return ['the cafeteria', 'the gym', 'the student lounge']
  },
  hallway: () => {
    //send msg
    printMsg(
      '<br>You are now in the hallway, to your right is the bathroom. In the end of the hallway you see a chemistry room, and the door is ajar. You spot a calm, slim figure walking up ahead. There is sweat on his brow, and he seems to be looking for something. Do you want to approach him?'
    )

    //prompt user for anwser
    printMsg(
      '<br>Options: go bathroom, Approach calm-guy, go chemlab, go gym <br>'
    )
  },
  chemlab: () => {
    //send msg
    printMsg(
      '<br>You ignore and pass the back-hair student, and continue walking down the hallway. You enter the chemistry room. Two Nekoma students in their uniforms are inside. One with dyed yellow hair is playing a video game, while curled up in the corner like a cat. The other is a tall student with black hair nearly covering his left eye, who appears to be admiring the periodic table. How will you react?'
    )

    //prompt user for anwser
    printMsg('<br>Options: approach gamer, approach nerd, leave chemlab<br>')
  },
  chemlabExit: () => {
    return ['a hallway', 'the cafeteria', 'chemlab']
  },
  cafeteria: () => {
    //send msg
    printMsg(
      '<br>You have no interest in chemistry and whatever, who cares about chemistry, so you turn right and head to the Cafeteria. Inside the Cafeteria, you run into two strong high school boys, who look surprisingly alike. “Are they twins?” You wonder. Everything about their face and body structure are identical except one has poorly dyed blonde hair, while the other has sleek, dyed grey hair. The blonde hair boy is shoving his face full of Fatty Tuna, while his grey-haired friend is scolding him. How do you want to handle the situation? <br>'
    )

    //prompt user for anwser
    printMsg(
      '<br>Options: Approach blondy, approach grey-hairs, leave cafeteria, go lounge, go chemlab<br>'
    )
  },
  cafeteriaExit: () => {
    return ['lounge', 'chemlab', 'cafeteria']
  },
  bathroom: () => {
    printMsg(
      '<br>You walk into the bathroom, so you can wash your hands and check your face. Have to make sure you look your best when searching for a future partner. You walk in and encounter two high school boys. They are both tall but one has brown curly hair with the complexion of an angel. The other has spiky hair and a visage of pure anger. The two students from Aoba Johsai are bickering:<br><br>“Shittykawa, stop looking at yourself in the mirror!”<br>“Silly Iwa-chan, perfection takes time!”<br><br>You overhear part of their conversation, but they stop abruptly when you walk in. They turn and look at you. What do you do?'
    )

    printMsg(
      '<br>Options: Approach angel, approach angels-friend, leave bathroom<br>'
    )
  },
  bathroomExit: () => {
    return ['hallway', 'gym', 'bathroom']
  }
}

//store boy objects
const boy = {
  redhead: () => {
    printMsg(
      "<br>HI THERE I'M HINATA SHOYO. I LOVE VOLLEYBALL…..do YOUUU like volleyball?"
    )

    printMsg(
      '<br>Options: i LOVE volleyball, volleyball is for sweaty jocks, meh<br>'
    )
  },
  'blue-eyes': () => {
    printMsg('... <br> He walks away. How do you respond?<br>')

    //record blue eye interaction
    boyMeetings['blue-eyes'] = true
    printMsg('Options: Leave gym, approach redhead, approach blue-eyes<br>')
  },
  'calm-guy': () => {
    printMsg(
      "Uhh hi. I'm Akaashi, have you seen a tall, spiky grey haired man at all? I’ve been looking all over."
    )

    printMsg(
      '<br>Options: who is that, yea he is in the dining hall, I think I saw him in the lounge, I am not going to tell you, he is in the chem lab<br>'
    )
  },
  nerd: () => {
    printMsg(
      'OH HI, I’m Kuroo! Now aren’t you pretty, but not as pretty as this periodic table. My favorite element is bromine, what is yours?'
    )

    printMsg(
      'Options: Chemistry is gross, Argon of course, gold because I am expensive<br>'
    )
  },
  'grey-hairs': () => {
    printMsg(
      "Oh hello. My name's Osamu, and sorry you had to witness my idiot brother. I wanted him to try my onigiri, but he got distracted by the tuna. Would you like to try my onigiri?"
    )

    printMsg(
      '<br>Options: Eww of course not, your brother is kind of cute, I would love some, I love onigiri but I do not trust your cooking<br>'
    )
  },
  blondy: () => {
    printMsg(
      'Oh who are you? I am Atsumu, and if you want some of my fatty tuna, then you can’t have it!'
    )

    printMsg(
      '<br>Options: Fatty tuna is disgusting, I want more than just your fatty tuna, I like your hair<br>'
    )
  },
  'muscle-man': () => {
    printMsg(
      'HEY HEY HEY! I am Bokuto, and can you help me shake this vending machine, my candy bar is stuck and I AM STARVING!'
    )

    printMsg(
      '<br>Options: Of course LETS DO THIS, if you are hungry then go to the cafeteria, no<br>'
    )
  },
  angel: () => {
    printMsg(
      'Looks like we got a guest Iwa-chan. Hi there, people call me Oikawa, but you can call me tonight;)'
    )

    printMsg(
      '<br>Options: Eww what, I thought they called you Shittykawa, I will be looking forward to it<br>'
    )
  },
  'angels-friend': () => {
    printMsg(
      'Hello I-<br>*The angel pushes his friend off to the side*<br>“HIIII I’M OIKAWA. You must be a fan...I’ll give you my autograph if you want, but you’ll have to get on your knees and beg”'
    )

    printMsg(
      '<br>Options: Anything you say...master, you are so full of yourself, in your wildest dreams<br>'
    )
  }
}

//correct responses
const correctresp = {
  'i love volleyball': () => {
    printMsg(
      'AWESOME! U R PRETTY COOL! WE SHOULD HANG OUT SOME TIME<br>The boy skips away excited. Now where do you want to go?'
    )

    //increase rating
    boyRatings['hinata'] = 1

    printMsg('<br>Options: Leave gym, approach redhead, approach blue-eyes<br>')
  },
  'i think i saw him in the lounge': () => {
    printMsg(
      "Thank you so much. You're a lifesaver.<br>The boy walks off. Now where do you want to go?"
    )

    boyRatings['akaashi'] = 1

    printMsg(
      '<br>Options: go bathroom, Approach calm-guy, go chemlab, go gym<br>'
    )
  },
  'argon of course': () => {
    printMsg(
      'WOAHHH You must be very NOBLE;)<br>The boy smiles and walks away. What do you want to do now?'
    )

    boyRatings['kuroo'] = 1

    printMsg('<br>Options: approach gamer, approach nerd, leave chemlab<br>')
  },
  'i would love some': () => {
    printMsg(
      "Yes! Thank you so much. I'll go grab you some....oh actually it turns out that I ate them all already, but thanks anyways!<br>The boy walks away. What do you do?"
    )

    boyRatings['osamu'] = 1

    printMsg(
      '<br>Options: Approach blondy, approach grey-hairs, leave cafeteria, go lounge, go chemlab<br>'
    )
  },
  'i want more than just your fatty tuna': () => {
    printMsg(
      'The boy raises his eyebrow at you, and smirks.<br>He walks away. Now what do you do?'
    )

    boyRatings['atsumu'] = 1

    printMsg(
      '<br>Options: Approach blondy, approach grey-hairs, leave cafeteria, go lounge, go chemlab<br>'
    )
  },
  'of course lets do this': () => {
    printMsg(
      'Thank you so much!! You are the best.<br>Together you two shake the machine, and his candy bar falls down. He hugs you, and walks away. What do you do?'
    )

    boyRatings['bokuto'] = 1

    printMsg('<br>Options: Approach muscle-man, leave lounge<br>')
  },
  'i thought they called you shittykawa': () => {
    printMsg(
      "Ouu so mean, but it is okay because you're cute.<br>He turns away back to the mirror. Where do you want to go?"
    )

    boyRatings['oikawa'] = 1

    printMsg(
      '<br>Options: Approach angel, approach angels-friend, leave bathroom<br>'
    )
  },
  'anything you say...master': () => {
    printMsg(
      'Woah woah...I think my nose bleeding.<br>He turns back to the mirror. What do you want to do?'
    )

    boyRatings['oikawa'] = 1

    printMsg(
      '<br>Options: Approach angel, approach angels-friend, leave bathroom<br>'
    )
  },
  'in your wildest dreams': () => {
    printMsg(
      'Oikawa shrugs, and turns back to the mirror. What do you want to do?'
    )

    boyRatings['iwaizumi'] = 1

    printMsg(
      '<br>Options: Approach angel, approach angels-friend, leave bathroom<br>'
    )
  }
}

const incorrectResp = {
  hinata: () => {
    printMsg(
      'oh ok.<br>The boy walks away slowly, while shedding a tear. Now what do you want to do?'
    )

    printMsg('<br>Options: Leave gym, approach redhead, approach blue-eyes<br>')
  },
  akaashi: () => {
    printMsg(
      '*sigh* okay whatever. I gotta go.<br>The boy walks off. Where do you want to go?'
    )

    printMsg(
      '<br>Options: go bathroom, Approach calm-guy, go chemlab, go gym<br>'
    )
  },
  kuroo: () => {
    printMsg(
      "Interesting. Well I'm going to get back to my periodic table.<br>The boy turns away. How do you respond?"
    )

    printMsg('<br>Options: approach gamer, approach nerd, leave chemlab<br>')
  },
  osamu: () => {
    printMsg(
      'oh fine.<br>The boy lowers his head and walks away. What do you do?'
    )

    printMsg(
      '<br>Options: Approach blondy, approach grey-hairs, leave cafeteria, go lounge, go chemlab<br>'
    )
  },
  atsumu: () => {
    printMsg(
      'The boy rolls his eyes at you, and walks away. How do you respond?'
    )

    printMsg(
      '<br>Options: Approach blondy, approach grey-hairs, leave cafeteria, go lounge, go chemlab<br>'
    )
  },
  bokuto: () => {
    printMsg(
      "oh sorry to bother you.<br>The boy's hair droops and his eyes sadden, as he walks away. What do you do?"
    )

    printMsg('<br>Options: Approach muscle-man, leave lounge<br>')
  },
  oikawa: () => {
    printMsg(
      'Oikawa shrugs, and turns back to the mirror. What do you want to do?'
    )

    printMsg(
      '<br>Options: Approach angel, approach angels-friend, leave bathroom<br>'
    )
  },
  iwaizumi: () => {
    printMsg(
      'You are kinda mean, but you can not replace my Iwa-chan! <br> He turns away. Where do you want to go next?'
    )

    printMsg(
      '<br>Options: Approach angel, approach angels-friend, leave bathroom<br>'
    )
  }
}

//store endings
goodEndings = {
  hinata: () => {
    printMsg(
      'OHH I would LOVE to accompany you to the prom, as long as we can play volleyball after the dance!'
    )

    //call end game function
    endGame('Hinata')
  },
  akaashi: () => {
    printMsg(
      "Hmm I don't mind attending with you. You're really nice, so I'm sure it will be a lot of fun."
    )

    endGame('Akaashi')
  },
  kuroo: () => {
    printMsg(
      'OMG OF COURSE! I AM SO GLAD YOU ASKED! I WOULD LOVE TO ACCOMPANY YOU;)'
    )

    endGame('Kuroo')
  },
  osamu: () => {
    printMsg("Sounds like fun! I'll make onigiri for us to eat beforehand.")

    endGame('Osamu')
  },
  atsumu: () => {
    printMsg('Sure pretty thang;)')

    endGame('Atsumu')
  },
  bokuto: () => {
    printMsg(
      'OMG OMG OMG YOU REALLY WANT TO GO WITH ME?!?!?! HOW COULD I NOT SAY NO? YES YES YES YESSSSS!!!!'
    )

    endGame('Bokuto')
  },
  oikawa: () => {
    printMsg(
      "Can't say I wasn't expecting this, but sure. You look like you could be some fun, but remenber no pictures can include my bad side. JK I have no bad side;)"
    )

    endGame('Oikawa')
  },
  iwaizumi: () => {
    printMsg('Sure, I need some time away from Shittykawa.')

    endGame('Iwaizumi')
  }
}

//store bad endings
badEndings = {
  hinata: () => {
    printMsg("Sorry I can't make it. I'll be playing volleyball.")

    //call end game function
    endGame('nobody')
  },
  'blue-eyes': () => {
    printMsg('...')

    endGame('nobody')
  },
  akaashi: () => {
    printMsg('Thanks for asking, but I am unable to attend.')

    endGame('nobody')
  },
  kuroo: () => {
    printMsg(
      'Oh shoot! I already planned to do an acid-base titration that day. Bummer!'
    )

    endGame('nobody')
  },
  osamu: () => {
    printMsg('I am flattered, but no.')

    endGame('nobody')
  },
  atsumu: () => {
    printMsg(
      'BAHAHAHA you think I would go to prom with you?! Never in a million years!'
    )

    endGame('nobody')
  },
  bokuto: () => {
    printMsg("I- Uh I- Uh I can't go. Sorry! I have to take care of my owl.")

    endGame('nobody')
  },
  oikawa: () => {
    printMsg('Hmmm okay, as long as we can bring Iwa-chan as well!!')

    endGame('nobody')
  },
  iwaizumi: () => {
    printMsg('No.')

    endGame('nobody')
  }
}

//end game
function endGame (name) {
  printMsg(`Congratulations you ended with ${name}.\n\nTHE END.`)
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
    //give user opportunity to ask
    printMsg(
      'Now that you have met all the boys, you can ask one of them to prom! Who do you want to ask?'
    )

    printMsg(
      'Options: ask hinata, ask blue-eyes, ask akaashi, ask kuroo, ask osamu, ask atsumu, ask bokuto, ask oikawa, ask iwaizumi\n\n'
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

function printMsg (str) {
  $('#messages').append(str)
  //keep scrollbar at the bottom
  $('#messages').scrollTop($('#messages')[0].scrollHeight);
}

//start game with opening
printMsg(
  'The prom is coming in 2 weeks, now you desperately need to find someone to accompany you. A tournament at Nekoma High just ended. Aoba Johsai High, Inarizaki High, Fukurodani  Academy, and Karasuno High were invited. After watching the tournament, you decided to find the #1 prom mate among all the boys.<br><br>YOU SEARCH THEM OUT.<br>'
)
//start in gym
Gamelocation.gym()

//make sure window dont automatically reload
window.onbeforeunload = function () {
  return 'Dude, are you sure you want to leave? Think of the kittens!'
}
