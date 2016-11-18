var ActiviteDAO = function(){
	
	this.liste_activites = [
		{"id":1,"nom":"Stage 8-12 ans","date":"11/21/2016 - 11/25/2016","description":"Stage d'apprentissage des bases du tennis.<br />Horaires : 10h-15h du lundi au vendredi.<br />Au programme : tennis, mini-tennis, physique ludique.<br /><br />N'oubliez pas d'amener votre repas pour le midi !"},
		{"id":2,"nom":"Tournois d'hiver adulte","date":"12/12/2016 - 12/23/2016","description":"Tournois d'hiver pour les 18 ans et plus.<br />Prix d'inscription : 10$"},
		{"id":3,"nom":"Repas de noel","date":"12/26/2016","description":"Repas de noel au club, venez deguiser si possible.<br />Prix du repas : 7$"},
	];
	
	this.listerToutesLesActivites = function(){
		return this.liste_activites;
	};
	
	this.trouverActiviteParId = function(id_activite){
		for(var no_activite in this.liste_activites){
			if(this.liste_activites[no_activite].id == id_activite){
				return this.liste_activites[no_activite];
			}
		}
	};
	
	this.ajouterActivite = function(activite){
		this.liste_activites[this.liste_activites.length] =
			{"id":this.liste_activites.length+1,
			 "nom":activite.nom,
			 "date":activite.date,
			 "description":activite.description}
	};
}
