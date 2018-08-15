
// ------------ MODEL -------------
let model = {
	// cat variables
	activeCat: null,
	cats: [],
	
	
	
};

// ------------ CONTROLLER -------------
let controller = {
	// 
	init: function () {
		// add cats to the list and images according to
		// the amount of cats stored in images/
		this.addCats(5);
	}, 

	addCats: function (numberOfCats) {
		// create an object for each desired cat, and push
		// it into the cat list (array)
		for (var i = 1; i < numberOfCats+1; i++) {	
			model.cats.push({
				clickCount: 0,
				name: 'Cat'+[i],
				imgSrc: 'images/cat_picture'+[i]+'.jpg'
			});
		}
	},
};

// ------------ VIEW -------------
let view = {

};

controller.init();


/*
 * Old shit
 */


// var cats = $(".cat");
// var buttons = $("button");

// function hideAllCats(){
// 	for (var i=0; i<cats.length; i++){
// 		$(cats[i]).hide();
// 	}
// }

// function bindButtonToCat(idNumber){
// 	$("#button"+idNumber).click(function(){
// 		hideAllCats();
// 		$("#cat"+idNumber).show();
// 	})
// }

// function bindCounterToCat(idNumber){
// 	var cat = "#cat"+idNumber
// 	$(cat).click(function(){
// 		var count = $(cat+" > .counter").text();
// 		count = parseInt(count) + 1;
// 		$(cat+" > .counter").text(count);
// 	})
// }

// for (var i=1; i<=buttons.length; i++){
// 	bindButtonToCat(i);
// }

// for (var i=1; i<=cats.length; i++){
// 	bindCounterToCat(i);
// }

// hideAllCats();
// $("#cat1").show();