var ModifierActiviteVue = function(activite){
	
	this.afficher = function(actionModifierActivite){
		
		var htmlEnConstruction = ModifierActiviteVue.html
		.replace("{NOM}",activite.nom)
		.replace("{DATE}",activite.date)
		.replace("{DESCRIPTION}",activite.description);
		
		$("body").html(htmlEnConstruction);
		
		$("#formulaire-modifier").on(("submit"), $.proxy(this.modifierActivite, this));
		
		this.actionModifierActivite = actionModifierActivite;
	}
	
	this.modifierActivite = function(){
		
		activite.nom = $("#activite-nom").val();
		activite.date = $("#activite-date").val();
		activite.description = $("#activite-description").val();
		
		this.actionModifierActivite(activite);
		
		window.location.hash = "";
		event.preventDefault();
	}
}
ModifierActiviteVue.html = $("#page-modifier-activite").html();
