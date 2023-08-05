const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const searchDiv = document.querySelector(".search-container");

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 
'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 
'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 
'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 
'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 
'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 
'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 
'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 
'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
		for(let i of fruits){
			let fruit = i.toLowerCase();
			if(fruit.indexOf(str.toLowerCase()) !== -1){
				results.push(i);
				if(results.length > 7){
					return results;
				}
			}
		}
	return results;
}
function makeLi(str){
	let newLi = document.createElement('li');
	newLi.innerText = str;
	suggestions.append(newLi);
}
function searchHandler(e) {
	suggestions.innerHTML = '';
	if(input.value === ''){
		return
	}
	showSuggestions(search(input.value));
}

function showSuggestions(results) {
	for(let el of results){
		makeLi(el);
	}
	searchDiv.append(suggestions);
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	searchHandler();
}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);