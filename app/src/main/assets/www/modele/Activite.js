var Activite = function(nom, date, description){
	this.construire = function(){
		this.nom = nom;
		this.date = date;
		this.description = description;
	}
	
	this.construire();
}