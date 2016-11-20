var ListeActivitesVue = function(liste_activites){
	
	this.afficher = function(){
		var page_liste_activites = ListeActivitesVue.html;
		$("body").html(ListeActivitesVue.html);
		var html_liste_activites = $("#liste-activites");
		var htmlEnConstruction = "";
		
		for(var no_activite in liste_activites){
			htmlEnConstruction += ListeActivitesVue.html_item
			.replace("{ID}",liste_activites[no_activite].id)
			.replace("{NOM}",liste_activites[no_activite].nom)
			.replace("{ID2}",liste_activites[no_activite].id);
		}
		html_liste_activites.html(htmlEnConstruction);
	}
}
ListeActivitesVue.html = $("#page-liste-activites").html();
ListeActivitesVue.html_item = $("#item-liste-activites").html();