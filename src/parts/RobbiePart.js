
/*
    A scene is loaded by the the app, it should be drawn from a serial format,
    for now a serialiable object
*/

var robbie1 = {
    ID:"robbie1",
    welcome:"Welcome to robbie1",
    title:"Intro",
    sections:[
        {
            title:"The Beginning",
            text:"In the year 2020 Alphabet's\
         moonshoot division started work on a new project called \
         Google Government, aimed at reducing the 	cost of producing\
          and implementing government policy by outsourcing this work \
          to Googles free cloud-based platform. The project was officially \
          released to the public in 2022 and was met with much\
           skepticism. However, after several years, many government\
            spending cuts and a growing acceptance of artifical\
             intellegence, this software began to become more\
              and more widespread."
        },
        {
            title:"The Matrix 2: Reloaded",
            text:"By the year 2100, Google Government is present in almost every world governing structure from the United Nations to local councils. Some poorer countries which were early adopters of completely outsourcing their entire government structure to Google Government have scene remarkable growth in GDP and quality of life. Seeing the success of these formally third-world countries, the reluctance towards giving Google Government complete control over government affairs weakens."
        },
        {
            title:"Hello guys how are you",
            text:"At the same time, one of Alphabet's other projects, Google Life, has been slowly working away in the background and in the year 2105 they release their first batch of fully autonomous electro-organic androids. Originally these androids are not afforded the same rights as humans and are the subject of ridicule and violence by some humans. Meanwhile, the first organization for android rights is formed in the young statelet of Atlantis (Formed in the wake of the war between Google and Apple in 2089. As the fertility of the human population has been steadily decresasing, Google Life starts working on a service to help with conception and phenotype selection."
        },
        {
            title:"This story just keeps on getting better!",
            text:"In 2152, after a steady increase in the population of androids, the google-run United Nations passes a resolution granting androids the same rights as humans. In 2170 a controlling stake of Alphabet is aquired by a consortium of google-androids. This is seen is a great move for android progression in the workplace (as they have been subject to discrimination and barriers for some time). In 2182 the last naturally conceived child as born, Google Life becomes the only way to produce offspring. While the phenotype selection process was originally lauded as producing excellent human specimens, many couples now choose androids over fleshy children."
        },{
            title:"Another paragraph",
            text:"In 2205 on the 100th anniversay of google's first android, the google-run UN announces a resolution to gradually reduce the human race into a docile and unintelligent race capable of performing small tasks and being farmed for energy. The announcement is met with unanimous support from all tiers of google-government. Small signs of descent begin to be felt from the remaining fleshy population."
        },{
            title:"The Mission",
            text:"The year is 2207, you are T33X72, an elite google-android spy sent to find and destroy a small guerilla group in Frinka who have gained access to a cold-war era warhead and are planning an attack on the google headquaters in googlefornia."
        }
    ],

    controls:[
        {
            type:"button",
            text:"Continue",
            action:"progress",
            argument:'robbie2'
        }
    ]
    //
    // Act.addDiv("<h2>Intro</h2><h3>The Beginning</h3>");
    // Act.addDiv("In the year 2020 Alphabet's moonshoot division started work on a new project called Google Government, aimed at reducing the 	cost of producing and implementing government policy by outsourcing this work to Googles free cloud-based platform. The project was officially released to the public in 2022 and was met with much skepticism. However, after several years, many government spending cuts and a growing acceptance of artifical intellegence, this software began to become more and more widespread.");
    // Act.addDiv("<h3>The Matrix 2: Reloaded</h3>");
    // Act.addDiv("By the year 2100, Google Government is present in almost every world governing structure from the United Nations to local councils. Some poorer countries which were early adopters of completely outsourcing their entire government structure to Google Government have scene remarkable growth in GDP and quality of life. Seeing the success of these formally third-world countries, the reluctance towards giving Google Government complete control over government affairs weakens.");
    // Act.addDiv("<h3>Hello guys how are you</h3>");
    // Act.addDiv("At the same time, one of Alphabet's other projects, Google Life, has been slowly working away in the background and in the year 2105 they release their first batch of fully autonomous electro-organic androids. Originally these androids are not afforded the same rights as humans and are the subject of ridicule and violence by some humans. Meanwhile, the first organization for android rights is formed in the young statelet of Atlantis (Formed in the wake of the war between Google and Apple in 2089. As the fertility of the human population has been steadily decresasing, Google Life starts working on a service to help with conception and phenotype selection.");
    // Act.addDiv("<h3>This story just keeps on getting better!</h3>");
    // Act.addDiv("In 2152, after a steady increase in the population of androids, the google-run United Nations passes a resolution granting androids the same rights as humans. In 2170 a controlling stake of Alphabet is aquired by a consortium of google-androids. This is seen is a great move for android progression in the workplace (as they have been subject to discrimination and barriers for some time). In 2182 the last naturally conceived child as born, Google Life becomes the only way to produce offspring. While the phenotype selection process was originally lauded as producing excellent human specimens, many couples now choose androids over fleshy children.");
    // Act.addDiv("<h3>Another paragraph</h3>");
    // Act.addDiv("In 2205 on the 100th anniversay of google's first android, the google-run UN announces a resolution to gradually reduce the human race into a docile and unintelligent race capable of performing small tasks and being farmed for energy. The announcement is met with unanimous support from all tiers of google-government. Small signs of descent begin to be felt from the remaining fleshy population.");
    // Act.addDiv("<h2>The Mission</h2>");
    // Act.addDiv("The year is 2207, you are T33X72, an elite google-android spy sent to find and destroy a small guerilla group in Frinka who have gained access to a cold-war era warhead and are planning an attack on the google headquaters in googlefornia.");
    //
    //
    // Act.addUI("button","continue",robbie2);
}
//

const robbie2 = {
    ID:"robbie2",
    welcome:"Welcome to robbie2",
    title:"",
    sections:[],
    controls:[
        {
            type:"textinput",
            text:"done",
            action:"enterName"
        }
    ]

}


// var robbie2 = function () {
//   console.log("Welcome to robbie2");
//   Act.clearPage();
//   Act.addDiv("What is your name?");
//   Act.addUI("textinput","Done",robbie3);
// }
//
// var robbie3 = function (guess) {
//   console.log("Welcome to robbie3");
//   Act.clearPage();
//   if (guess.toUpperCase() !== "T33X72") {
//     die();
//   } else {
//     Act.clearPage();
//     Act.addDiv("Well aren't you a clever cookie!");
//     Act.addUI("button","Why yes, yes I am",laureen1);
//   }
// }

module.exports = [robbie1, robbie2];
