var AjouterActiviteVue = function(){
	
	this.afficher = function(actionAjouterActivite){
		$("body").html(AjouterActiviteVue.html);
		
		$("#formulaire-ajouter").on(("submit"), $.proxy(this.ajouterActivite, this));
		
		this.actionAjouterActivite = actionAjouterActivite;
	}
	
	this.ajouterActivite = function(){
		var nom = $("#activite-nom").val();
		var date = $("#activite-date").val();
		var description = $("#activite-description").val();
		
		var activite = new Activite(id=null, nom, date, description);
		
		this.actionAjouterActivite(activite);
		
		window.location.hash = "";
		event.preventDefault();
	}
}
AjouterActiviteVue.html = $("#page-ajouter-activite").html();
