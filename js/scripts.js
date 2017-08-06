var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops';
dinosaur = dinosaur.toUpperCase();
var textReplaced = text.replace('Velociraptor', dinosaur);
var textReplacedHalf = textReplaced.length/2;
console.log(textReplaced.slice(0,72));