var ActiviteVue = function(activite){
	
	
	this.afficher = function(){
		var htmlEnConstruction = ActiviteVue.html
		.replace("{NOM}",activite.nom)
		.replace("{DATE}",activite.date)
		.replace("{DESCRIPTION}",activite.description);
		
		$("body").html(htmlEnConstruction);
	}
}
ActiviteVue.html = $("#page-activite").html();
