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
		this.addCats(5);

		// set the active Cat view
		model.activeCat = model.cats[0];

		// make the list
		listView.init();
		catView.init();
	}, 

	getActiveCat: function () {
		return model.activeCat;
	},
	
	getAllCats: function () {
		return model.cats;
	},

	changeCat: function (cat) {
		// alert ('changeCat() was fired from the controller');
		model.activeCat = cat;
	},

	addCatCounter: function (cat) {
		// add to the counter
		model.activeCat.clickCount++;
		// render again
		catView.render();
		
		// model.activeCat.clickCount = catClickCount;
	},

	// add cats to the list and images according to the amount of cats stored in images/. 
	// Just be sure to name the images correctly using the following guide: 'cat_picture(number).jpg'
	addCats: function (numberOfCats) {
		// clear cat list
		model.cats = [];
		// create an object for each desired cat, and push
		// it into the cat list (array)
		for (var i = 1; i < numberOfCats+1; i++) {	
			model.cats.push({
				clickCount: 0,
				name: 'Cat '+[i],
				imgSrc: 'images/cat_picture'+[i]+'.jpeg'
			});
		}
	}
};

/* ======= VIEW ========== */
let catView = {

	init: function () {
		// set DOM variables
		this.catView = document.getElementById('cat-view');
		this.catName = document.getElementById('cat-name');
		this.catCounter = document.getElementById('cat-count');
		this.catImg = document.getElementById('cat-img');
		// this.cats = controller.getAllCats();
		
		// add an event listener to the counter
		this.catImg.addEventListener('click', function () {
			controller.addCatCounter();
		});
		// render the whole thing
		this.render();
	},

	render: function () {
		// set the active cat to display name and image
		let showCat = controller.getActiveCat();

		// do things
		this.catName.innerHTML = showCat.name;
		this.catCounter.innerHTML = showCat.clickCount;
		this.catImg.src = showCat.imgSrc;
	}
};

let listView = {
	//TO-DO: make a list with the name of the cats
	init: function () {
		// 
		this.catList = document.getElementById('catlist-view');
		
		// render for the first time
		this.render();
	},
	
	render: function () {
		// clear cat list
		this.catList.innerHTML = '';
		
		// get all the cats that we're gonna use
		this.cats = controller.getAllCats();

		// create the cats' list
		for (let cat of this.cats) {
			// create and modify <li> items for the cats' list
			this.catListElement = document.createElement('li');
			this.catListElement.innerHTML = cat.name;
			
			// click on list and change Cat
			// this is done through an IIFE, we pass the inmediat value of cat into an inner scope, in the form of a 
			// new variable called 'instantCopyOfcat'. Now it doesn't matter if cat changes, the value we need is already
			// stored in instantCopyOfCat
			this.catListElement.addEventListener('click', (function (instantCopyOfCat) {
				// change the value of the current Cat
				return function () {
					controller.changeCat(instantCopyOfCat);
					catView.render();
				}
			})(cat));

			// add each <li> item to the DOM
			this.catList.appendChild(this.catListElement);
		}
	}
};


controller.init();
