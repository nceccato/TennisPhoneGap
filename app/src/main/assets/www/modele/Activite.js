var Activite = function(id, nom, date, description){
	this.construire = function(){
		this.id = id;
		this.nom = nom;
		this.date = date;
		this.description = description;
	}
	
	this.construire();
}