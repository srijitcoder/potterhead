
//About Section Deceleration
function about(){
$(document).ready(function(){
		$('.aboutHP').show();
		$('.nav').hide();
		$('.navtab').hide();
		setTimeout(aboutHP(), 400);
});
}

function aboutHP(){
	$(document).ready(function(){
		$('.abouttab').show();
	});	
}

$(document).ready(function(){
$('#closeAbout').click(function(){
	$('.aboutHP').hide();
	$('.abouttab').hide();
});
});
//About Deceleration Ends

//Sorting Hat Deceleration
function sort(){
$(document).ready(function(){
		$('.sortHP').show();
		$('.nav').hide();
		$('.navtab').hide();
		setTimeout(sortHP(), 400);
});
}

hat_neutral = 0;

function sortHP(){
	$(document).ready(function(){
		$('.sorttab').show();
		if(hat_neutral == 0){
			var lucky_hat = Math.floor((Math.random() * 4) + 1); 
			$('.sortingHat').attr("src", "img/h"+lucky_hat+".png");
			$('.load').hide();
			hat_neutral = 1;
		}
	});	
}

$(document).ready(function(){
$('#closeSort').click(function(){
	$('.sortHP').hide();
	$('.sorttab').hide();
});
});
//Sorting Hat Deceleration Ends

//Navigation Deceleration
$(document).ready(function(){
	$('.nav_bar').click(function(){
		$('.nav').show();
		setTimeout(navactive, 400);
	});
});

function navactive(){
	$(document).ready(function(){
		$('.navtab').show();
	});	
}


$(document).ready(function(){
$('.closeNav').click(function(){
	$('.nav').hide();
	$('.navtab').hide();
});
});
//Navigation Deceleration Ends

//Video Deceleration
$(document).ready(function(){
$('#videoClose').click(function(){
	$('.video').hide();
	$('.videoTabRelative').hide();
});
});

function play(video){
	$(document).ready(function(){
		$('.video').show();
		$('.videoTab').attr("src", "video/"+video+".mp4");
		setTimeout(videoTab, 400);
	});
}

function videoTab() {
	$(document).ready(function(){
		$('.videoTabRelative').show();
	});		
}
//Video Deceleration Ends

//Facts Deceleration
function fact(){
$(document).ready(function(){
		$('.factHP').show();
		$('.nav').hide();
		$('.navtab').hide();
		setTimeout(factHP(), 400);
});
}

function factHP(){
	$(document).ready(function(){
		$('.facttab').show();
		setTimeout(facts(), 400);
	});	
}

	//Real Harry Potter Facts:
var TheFact = 0;
function facts(){
	TheFact = TheFact + 1;
	$(document).ready(function(){
		if(TheFact == 1) {
			$('#facts').html("''Fred and George were born on April Fool’s Day.''");
		}
		else if(TheFact == 2){
			$('#facts').html("''The only time the Weasley twins were ever apart were when George`s ear was cursed off and when Fred was killed.''");
		}
		else if(TheFact == 3){
			$('#facts').html("''Harry Potter books have been translated into more than 70 languages.''");
		}
		else if(TheFact == 4){
			$('#facts').html("''Platform 7 1/2 in King`s Cross is the official station for Orient Express.''");
		}
		else if(TheFact == 5){
			$('#facts').html("''There are total 11 well known famous wizarding schools in the world.''");
		}
		else if(TheFact == 6){
			$('#facts').html("''Michael Jackson wanted to do a Harry Potter musical, but J.K. Rowling said no.''");
		}
		else if(TheFact == 7){
			$('#facts').html("''Sirius Black and Fred Weasley, two pranksters from different generations, died laughing.''");
		}
		else if(TheFact == 8){
			$('#facts').html("''Originally Rowling wanted to kill off Arthur Weasley in the fifth book, but switched him for Sirius Black.''");
		}
		else if(TheFact == 9){
			$('#facts').html("'' If Muggles came upon Hogwarts, it would look like a decrepit building with a “Keep Out: Dangerous” sign on it.''");
		}
		else if(TheFact == 10){
			$('#facts').html("''Rowling said she seriously considered killing off Ron in the middle of the series.''");
		}
		else if(TheFact == 11){
			$('#facts').html("''In the Harry Potter universe, there are an estimated 3,000 wizards living in Great Britain.''");
		}
		else if(TheFact == 12){
			$('#facts').html("''Every 30 seconds, someone begins reading the Harry Potter series.''");
		}
		else if(TheFact == 13){
			$('#facts').html("''Harry’s birthday is July 31, 1980. Rowling`s birthday is also July 31 – but in 1966.''");
		}
		else if(TheFact == 14){
			$('#facts').html("''The actress who played Moaning Myrtle was 37 years old at the time “Harry Potter and the Chamber of Secrets” was filmed. She is the oldest actress to ever portray a Hogwarts student.''");
		}
		else if(TheFact == 15){
			$('#facts').html("''The least successful Harry Potter film, 'Harry Potter and the Prisoner of Azkaban', made $90 million more than the most successful Twilight movie.''");
		}
		else if(TheFact == 16){
			$('#facts').html("''Neville briefly worked as an Auror immediately following the war. Afterwards, he became Professor of Herbology at Hogwarts.''");
		}
		else if(TheFact == 17){
			$('#facts').html("''Neville Longbottom is the god father of Harry`s eldest son Albus Potter''");
		}
		else if(TheFact == 18){
			$('#facts').html("''Ron Weasley is the god father of Harry`s daughter Lily Luna Potter''");
		}
		else if(TheFact == 19){
			$('#facts').html("''As per JK Rowling, the letter 't' is silent in the word Voldemort. In French, it means 'Flight of Death'. ''");
		}
		else if(TheFact == 20){
			$('#facts').html("''Draco Malfoy is the only person who has hugged Voldemort.''");
		}
		else if(TheFact == 21){
			$('#facts').html("''Voldemort`s daughter name is Delphine who appears in cursed child.''");
		}
		else if(TheFact == 22){
			$('#facts').html("''Ron Weasley has occurred to have one more child called Panju Weasley from Padma Patil due to 'Time Turner' used by Albus Potter and Scorpius Malfoy in cursed child''");
		}
		else if(TheFact == 23){
			$('#facts').html("''Harry`s eldest son Albus Potter was sorted into 'Slytherin' in cursed child and his best friend was Draco`s son Scorpius''");
			TheFact = 0;
		}
	});	
}

$(document).ready(function(){
$('#closeFact').click(function(){
	$('.factHP').hide();
	$('.facttab').hide();
});
});
//Facts Deceleration Ends