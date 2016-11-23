var applicationListeTennis = {
	lancer:function(){		
		
		$(window).on('hashchange', $.proxy(this.naviguer, this));
		
		if(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)){
			$(document).on('deviceready', $.proxy(this.initialiserPourDonnees(), this));
		}else{
			this.initialiserPourDonnees();
		}
	},
	
	initialiserPourDonnees:function(){
		this.activiteDAO = new ActiviteDAO();
		this.naviguer();
	},
	
	naviguer:function(){
		var ancre = window.location.hash;
		
		if(!ancre){
			this.liste_activites = this.activiteDAO.listerToutesLesActivites($.proxy(this.afficherToutesLesActivites, this));
		}
		else if(ancre.match(/^#ajouter-activite/)){
			this.ajouterActiviteVue = new AjouterActiviteVue();
			this.ajouterActiviteVue.afficher($.proxy(this.sauvegarderNouvelleActivite, this));
		}
		else if(ancre.match(/^#modifier-activite\/([0-9]+)/)){
			var trouvailles = ancre.match(/^#modifier-activite\/([0-9]+)/);
			var id_activite = trouvailles[1];
			//alert("id_activite : "+id_activite);
			var activite = this.activiteDAO.trouverActiviteParId(id_activite);
			this.modifierActiviteVue = new ModifierActiviteVue(activite);
			this.modifierActiviteVue.afficher($.proxy(this.sauvegarderModificationActivite, this));
		}
		else{
			var trouvailles = ancre.match(/^#activite\/([0-9]+)/);
			var id_activite = trouvailles[1];
			//alert("id_activite : "+id_activite);
			var activite = this.activiteDAO.trouverActiviteParId(id_activite);
			this.activiteVue = new ActiviteVue(activite);
			this.activiteVue.afficher();
		}
	},
	sauvegarderNouvelleActivite:function(activite){
		this.activiteDAO.ajouterActivite(activite);
	},
	sauvegarderModificationActivite:function(activite){
		this.activiteDAO.modifierActivite(activite);
	},
	
	afficherToutesLesActivites:function(liste_activites){
		this.listeActivitesVue = new ListeActivitesVue(liste_activites);
		this.listeActivitesVue.afficher();
	}
};

applicationListeTennis.lancer();


