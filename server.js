//prepare stuff to prompt user
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//commands
commands = {
    leave: (locationName) => {
        //make sure location exist
        if (location[locationName + "Exit"]) {
            //get location exits
            let exits = location[locationName + "Exit"]();

            //ask user which exit
            printMsg(`\nYou leave the ${locationName}. \nYou can either leave through a door that leads to ${exits[0]} or to ${exits[1]} or return to ${exits[2]}. \nWhere do you want to go? \n`);

            promptUser(`Options: go ${exits[0].split(" ")[exits[0].split(" ").length-1]}, go ${exits[1].split(" ")[exits[1].split(" ").length-1]}, go ${exits[2].split(" ")[exits[2].split(" ").length-1]} \n\n`);
        } else {
            promptUser("Please choose one of the valid options\n")
        }
    },

    go: (destination) => {
        //call location function if exist
        if (location[destination]) {
            location[destination]();
        } else {
            promptUser("Please choose one of the valid options\n")
        }
    },

	approach: (boyName) => {
        //make sure exists
        if (boy[boyName]) {
            boy[boyName](boyName);
        } else {
            promptUser("Please choose one of the valid options\n")
        }
	}
}

//store location objects
location = {
    gym: () => {
        //send msg
        printMsg("You are now at the gym. \nYou spot a small but adorable little redhead highschool student in the corner. \nNext to him stands a tall, blue-eyed highschool student. \nWho do you approach? \n");

        //prompt user for anwser
        promptUser("Options: Leave gym, approach redhead, approach blue-eyes\n\n")
    },
    gymExit: () => {
        return ["a hallway", "the student lounge", "gym"]
    },
    lounge: () => {
        printMsg("\nYou walk down a hallway and approach the student lounge door. \nYou reach for the handle but hear some noises coming from inside. \n\n *Bang* *Bang* \n\n The sound of someone banging on metal rattles through your ears. You take a deep breath, and walk inside. \nYou encounter a tall, thick male, who has golden-colored eyes and spiky white-grey hair with black streaks. He is banging on the vending machine with a look of despair washed over his face. It appears his candy bar is stuck, and he is trying to forcefully remove it. \nWhat do you want to do?\n");

        promptUser("Options: Approach muscle-man, leave lounge\n");
    },
    loungeExit: () => {
        return ["the cafeteria", "the gym", "the student lounge"]
    },
    hallway: () => {
        //send msg
        printMsg("\nYou are now in the hallway, to your right is the bathroom.\nIn the end of the hallway you see a chemistry room, and the door is ajar.\nYou spot a calm, slim figure walking up ahead. There is sweat on his brow, and he seems to be looking for something. \nDo you want to approach him?");

        //prompt user for anwser
        promptUser("\nOptions: go bathroom, Approach him, go chemlab, go gym \n\n")
    },
    chemlab: () => {
        //send msg
        printMsg("\nYou ignore and pass the back-hair student, and continue walking down the hallway.\nYou enter the chemistry room.\nTwo Nekoma students in their uniforms are inside. \nOne with dyed yellow hair is playing a video game, while curled up in the corner like a cat. \nThe other is a tall student with black hair nearly covering his left eye, who appears to be admiring the periodic table. \nHow will you react?");

        //prompt user for anwser
        promptUser("\nOptions: approach gamer, approach nerd, leave chemlab\n\n")
    },
    chemlabExit: () => {
        return ["a hallway", "the cafeteria", "chemlab"]
    },
    cafeteria: () => {
        //send msg
        printMsg("\nYou have no interest in chemistry and whatever, who cares about chemistry, so you turn right and head to the Cafeteria. \nInside the Cafeteria, you run into two strong high school boys, who look surprisingly alike. “Are they twins?” You wonder. \nEverything about their face and body structure are identical except one has poorly dyed blonde hair, while the other has sleek, dyed grey hair. \nThe blonde hair boy is shoving his face full of Fatty Tuna, while his grey-haired friend is scolding him. \nHow do you want to handle the situation? \n");

        //prompt user for anwser
        promptUser("\nOptions: Approach blondy, approach grey-hairs, leave cafeteria, go lounge, go chemlab\n\n")
    },
    cafeteriaExit: () => {
        return ["lounge", "chemlab", "cafeteria"]
    },
    bathroom: () => {
        printMsg("\nYou walk into the bathroom, so you can wash your hands and check your face. \nHave to make sure you look your best when searching for a future partner. \nYou walk in and encounter two high school boys. \nThey are both tall but one has brown curly hair with the complexion of an angel. \nThe other has spiky hair and a visage of pure anger. \nThe two students from Aoba Johsai are bickering:\n\n“Shittykawa, stop looking at yourself in the mirror!”\n\n“Silly Iwa-chan, perfection takes time!”\n\nYou overhear part of their conversation, but they stop abruptly when you walk in. \nThey turn and look at you. \nWhat do you do?");

        promptUser("\nOptions: Approach angel, approach other, leave bathroom\n\n");
    },
    bathroomExit: () => {
        return ["hallway", "gym", "bathroom"]
    }
}

//store boy objects
boy = {
	redhead: (boyName) => {
		printMsg("\nHI THERE I'M HINATA SHOYO. I LOVE VOLLEYBALL…..do YOUUU like volleyball?");

		promptUserBoyQuest("\nOptions: i LOVE volleyball, volleyball is for sweaty jocks, meh\n\n", boyName);
	},
    "blue-eyes": (boyName) => {
        printMsg("...\nHe walks away. How do you respond?\n\n");

        //record blue eye interaction
        boyMeetings[boyName] = true;
        promptUser("Options: Leave gym, approach redhead, approach blue-eyes\n\n");
    },
    him: (boyName) => {
        printMsg("Uhh hi. Have you seen a tall, spiky grey haired man at all? I’ve been looking all over.");

        promptUserBoyQuest("\nOptions: who is that?, yea he's in the dining hall, I think I saw him in the lounge, I am not going to tell you, he's in the chem lab\n\n", boyName);
    },
    nerd: (boyName) => {
        printMsg("OH HI, I’m Kuroo! Now aren’t you pretty, but not as pretty as this periodic table. My favorite element is bromine, what is yours?");

        promptUserBoyQuest("\Options: Chemistry is gross, Argon of course, gold because I’m expensive\n\n", boyName)
    },
    "grey-hairs": (boyName) => {
        printMsg("Oh hello. Sorry you had to witness my idiot brother. I wanted him to try my onigiri, but he got distracted by the tuna. Would you like to try my onigiri?");

        promptUserBoyQuest("\nOptions: Eww of course not, your brother is kind of cute, I would love some, I love onigiri but I don't trust your cooking\n\n", boyName);
    },
    blondy: (boyName) => {
        printMsg("Oh who are you? If you want some of my fatty tuna, then you can’t have it!");

        promptUserBoyQuest("\nOptions: Fatty tuna is disgusting, I want more than just your fatty tuna, I like your hair\n\n", boyName);
    },
    "muscle-man": (boyName) => {
        printMsg("HEY HEY HEY! Can you help me shake this vending machine, my candy bar is stuck and I AM STARVING!");

        promptUserBoyQuest("\nOptions: Of course LETS DO THIS, if you are hungry then go to the cafeteria, sure\n\n", boyName);
    },
    angel: (boyName) => {
        printMsg("Looks like we got a guest Iwa-chan. Hi there, people call me Oikawa, but you can call me tonight;)");

        promptUserBoyQuest("\nOptions: Eww what, I thought they called you Shittykawa, I will be looking forward to it\n\n", boyName);
    },
    other: (boyName) => {
        printMsg("Hello I-\n*The angel pushes his friend off to the side*\n“HIIII I’M OIKAWA. You must be a fan...I’ll give you my autograph if you want, but you’ll have to get on your knees and beg”");

        promptUserBoyQuest("\nOptions: Anything you say...master, you are so full of yourself *slaps him*, in your wildest dreams\n\n", boyName);
    }
}

correctResp = {
	"i love volleyball": (boyName) => {
		printMsg("AWESOME! U R PRETTY COOL! WE SHOULD HANG OUT SOME TIME\n\nThe boy skips away excited. Now where do you want to go?");

        //increase rating
        boyRatings[boyName] = 1;

		promptUser("\nOptions: Leave gym, approach redhead, approach blue-eyes\n\n");
	},
    "i think i saw him in the lounge": (boyName) => {
        printMsg("Thank you so much. You're a lifesaver.\n\nThe boy walks off. Now where do you want to go?");

        boyRatings[boyName] = 1;

		promptUser("\nOptions: go bathroom, Approach him, go chemlab, go gym\n\n");
    },
    "argon of course": (boyName) => {
        printMsg("WOAHHH You must be very NOBLE;)\n\nThe boy smiles and walks away. What do you want to do now?");

        boyRatings[boyName] = 1;

        promptUser("\nOptions: approach gamer, approach nerd, leave chemlab\n\n")
    },
    "i would love some": (boyName) => {
        printMsg("Yes! Thank you so much. I'll go grab you some....oh actually it turns out that I ate them all already, but thanks anyways!\n\nThe boy walks away. What do you do?")

        boyRatings[boyName] = 1;

        promptUser("\nOptions: Approach blondy, approach grey-hairs, leave cafeteria, go lounge, go chemlab\n\n");
    },
    "i want more than just your fatty tuna": (boyName) => {
        printMsg("The boy raises his eyebrow at you, and smirks.\n\nHe walks away. Now what do you do?");

        boyRatings[boyName] = 1;

        promptUser("\nOptions: Approach blondy, approach grey-hairs, leave cafeteria, go lounge, go chemlab\n\n");
    },
    "of course lets do this": (boyName) => {
        printMsg("Thank you so much!! You are the best.\n\nTogether you two shake the machine, and his candy bar falls down. He hugs you, and walks away. What do you do?");

        boyRatings[boyName] = 1;

        promptUser("\nOptions: Approach muscle-man, leave lounge\n\n");
    },
    "i thought they called you shittykawa": (boyName) => {
        printMsg("Ouu so mean, but it is okay because you're cute.\n\nHe turns away back to the mirror. Where do you want to go?");

        boyRatings[boyName] = 1;

        promptUser("\nOptions: Approach angel, approach other, leave bathroom\n\n");
    },
    "anything you say...master": (boyName) => {
        printMsg("Woah woah...I think my nose bleeding.\n\nHe turns back to the mirror. What do you want to do?")

        boyRatings[boyName] = 1;

        promptUser("\nOptions: Approach angel, approach other, leave bathroom\n\n");
    }
}

incorrectResp = {
	 redhead: () => {
		 printMsg("oh ok.\n\nThe boy walks away slowly, while shedding a tear. Now what do you want to do?");

		 promptUser("\nOptions: Leave gym, approach redhead, approach blue-eyes\n\n");
	 },
     him: () => {
         printMsg("*sigh* okay whatever. I gotta go.\n\nThe boy walks off. Where do you want to go?");

         promptUser("\nOptions: go bathroom, Approach him, go chemlab, go gym\n\n");
     },
     nerd: () => {
         printMsg("Interesting. Well I'm going to get back to my periodic table.\n\nThe boy turns away. How do you respond?")

         promptUser("\nOptions: approach gamer, approach nerd, leave chemlab\n\n");
     },
     "grey-hairs": () => {
         printMsg("oh fine.\n\nThe boy lowers his head and walks away. What do you do?");

         promptUser("\nOptions: Approach blondy, approach grey-hairs, leave cafeteria, go lounge, go chemlab\n\n");
     },
     blondy: () => {
         printMsg("The boy rolls his eyes at you, and walks away. How do you respond?");

         promptUser("\nOptions: Approach blondy, approach grey-hairs, leave cafeteria, go lounge, go chemlab\n\n");
     },
     "muscle-man": () => {
         printMsg("oh sorry to bother you.\n\nThe boy's hair droops and his eyes sadden, as he walks away. What do you do?");

         promptUser("\nOptions: Approach muscle-man, leave lounge\n\n");
     }, 
     angel: () => {
         printMsg("Oikawa shrugs, and turns back to the mirror. What do you want to do?")

         promptUser("\nOptions: Approach angel, approach other, leave bathroom\n\n");
     },
     other: () => {
         printMsg("You are kinda mean, but you can not replace my Iwa-chan! \n\n He turns away. Where do you want to go next?");

         promptUser("\nOptions: Approach angel, approach other, leave bathroom\n\n");
     }
}

//store boys and their raitings
boyRatings = {
    redhead: 0,
    "blue-eyes": 0,
    him: 0,
    nerd: 0,
    "grey-hairs": 0,
    blondy: 0,
    "muscle-man": 0,
    angel: 0,
    other: 0
}

//store if you have met all the boys
boyMeetings = {
    redhead: false,
    "blue-eyes": false,
    him: false,
    nerd: false,
    "grey-hairs": false,
    blondy: false,
    "muscle-man": false,
    angel: false,
    other: false,
}

//print msg function to user
function printMsg(str) {
    console.log(str);
}

//prompt user function
function promptUser(Userquestion) {
    rl.question(Userquestion, (resp) => {
        //quickly clean resp
        resp = resp.toLowerCase();

        //get verb and subject
        let verb = resp.split(" ")[0];
        let subject = resp.split(" ")[1];

        //call command if exist
        if (commands[verb]) {
            commands[verb](subject);
        } else {
            promptUser("Please choose one of the valid options\n")
        }
    });
}

//prompt user the boy's message
function promptUserBoyQuest(Userquestion, boyName) {
	rl.question(Userquestion, (resp) => {
		//quickly clean resp
		resp = resp.toLowerCase();

		//check resp with correct anwsers
		if (correctResp[resp]) {
			//if resp correct then play characters good resp
			correctResp[resp](boyName)
            console.log(boyRatings)
		} else {
			incorrectResp[boyName]()
		}

        //no matter what record boy meeting
        boyMeetings[boyName] = true;
        
        //check if you have met all boys
        if (Object.values(boyMeetings).every(item => item === true) {
            console.log("you've met all the boys")
        }
	});
}

//start game with opening
printMsg("The prom is coming in 2 weeks, now you desperately need to find someone to accompany you. A tournament at Nekoma High just ended. Aoba Johsai High, Inarizaki High, Fukurodani  Academy, and Karasuno High were invited. \nAfter watching the tournament, you decided to find the #1 prom mate among all the boys.\n\nYOU SEARCH THEM OUT.\n")
//start in gym
location.gym();