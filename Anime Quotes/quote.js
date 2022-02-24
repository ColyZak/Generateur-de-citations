function generate(){

   let  quotes = {
        "- Nagato" : '“If you don’t share someone’s pain, you can never understand them.”',
        "- Madara Uchiha" : '“Wake up to reality! Nothing ever goes as planned in this world. The longer you live, the more you realize that in this reality only pain, suffering and futility exist.”',
        "- Haku" : '“It is only through the eyes of others that our lives have any meaning.”',
        "- Jiraiya" : '“A person grows up when he’s able to overcome hardships. Protection is important, but there are some things that a person must learn on his own.”',
        "- Naruto Uzumaki" : '“If he rips my arms off, I’ll kick him to death. If he rips my legs off, I’ll bite him to death! If he rips my head off, I’ll stare him to death! And if he gouges out my eyes, I’ll curse him from beyond the grave.”',
        "- Orochimaru" : '“It’s human nature not to realize the true value of something, unless they lose it.”',
        "- Obito Uchiha" : '“No one cared who I was until I put on a mask.”',
        "- Sasuke Uchiha" : '“Was she having fun in her little make-believe fantasy of true love? As for me, I have absolutely no reason to love her and likewise, I can see no reason why she would love me.”',
        "- Itachi Uchiha" : '“Your comrades are there to make up for what you cannot do and to prevent you from ignoring things that you actually might have been able to do.”',
        "- Pain" : '“Sometimes you must hurt in order to know, fall in order to grow, lose in order to gain because life’s greatest lessons are learned through pain.”',
        "- Gaara" : '“Just because someone is important to you, it doesn’t necessarily mean that, that person is good. Even if you knew that person was evil… People cannot win against their loneliness.”',
        "- Shikamaru Nara" : '“It’s because we help out when they’re in trouble that we can count on them to come running when we need it.”',
        "- Neji Hyuga" : '“The difference between stupidity and genius, is that genius has its limits.”',
        "- Rock Lee" : '“A dropout will beat a genius through hard work.”',
        "- Hinata Hyuga" : '“When I watch you, I feel strong, like I can do anything – that even I am worth something.”',
        "- Kakashi Hatake" : '“The people from this village are different from your average village. Even if it means dying, there’s not a single one of us, who would sell out a comrade.”',
        "- Sai" : '“A smile is the best way to get oneself out of a tight spot, even if it is a fake one. Surprisingly enough, everyone takes it at face value.”'

    }
    let authors = Object.keys(quotes);
    console.log(authors);
    let author = authors[Math.floor(Math.random() * authors.length)];
    console.log(author);
    let quote = quotes[author];
    console.log(quote);
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;


}