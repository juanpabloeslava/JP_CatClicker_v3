/* ======= MODEL ========== */
let model = {
	// cat variables
	activeCat: null,
	cats: [],
};

/* ======= CONTROLLER ========== */
let controller = {
	// 
	init: function () {
		// add 5 cats to model.cats array
		// in the future this could be set by an alarm with an input
		// that asks the user how many cats does he want to have
		this.addCats(5);

		// set the active Cat view
		model.activeCat = model.cats[0];

		// make the list
		listView.init();
	}, 

	getActiveCat: function () {
		return model.activeCat;
	},
	
	getAllCats: function () {
		return model.cats;
	},

	// add cats to the list and images according to
	// the amount of cats stored in images/. Just be sure
	// to name the images correctly using the following guide:
	// cat_picture(number).jpg
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
	}
};

/* ======= VIEW ========== */
let listView = {
	//TO-DO: make a list with the name of the cats

	// catList: document.getElementById('catlist-view'),
	
	// cats: controller.getAllCats(),
	
	init: function () {
		// set DOM variables
		this.catList = document.getElementById('catlist-view');
		this.cats = controller.getAllCats();
		
		// render for the first time
		this.render();
	},
	
	render: function () {
		// create the cats' list
		for (let cat of this.cats) {
			// create and modify <li> items for the cats' list
			let catListElement = document.createElement('li');
			catListElement.innerHTML = `See ${cat.name}`;
			// add each <li> item to the DOM
			this.catList.appendChild(catListElement);
		}
	}
};

let catView = {
	
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