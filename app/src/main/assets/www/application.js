var applicationListeTennis = {
	lancer:function(){		
		this.activiteDAO = new ActiviteDAO();
		this.liste_activites = this.activiteDAO.listerToutesLesActivites();
		
		$(window).on('hashchange', $.proxy(this.naviguer, this));
		
		this.naviguer();
		
	},
	naviguer:function(){
		var ancre = window.location.hash;
		if(!ancre){
			this.listeActivitesVue = new ListeActivitesVue(this.liste_activites);
			this.listeActivitesVue.afficher();
		}
		else{
			var trouvailles = ancre.match(/^#activite\/([0-9]+)/);
			var id_activite = trouvailles[1];
			//alert("id_activite : "+id_activite);
			var activite = this.activiteDAO.trouverActiviteParId(id_activite);
			this.activiteVue = new ActiviteVue(activite);
			this.activiteVue.afficher();
		}
	}
};

applicationListeTennis.lancer();


