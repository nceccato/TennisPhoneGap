var ActiviteDAO = function(){
	
	this.liste_activites = [];
	
	this.initialiser = function(){
		var SQL_CREATION = "CREATE TABLE IF NOT EXISTS activite(id INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(50), date VARCHAR(30), description TEXT)";
		this.baseDeDonnees = window.openDatabase("ListeActivite", "1.0", "Liste des activites", 200000);
		
		this.baseDeDonnees.transaction(
		function(operation){
			var SQL_CREATION = "CREATE TABLE IF NOT EXISTS activite(id INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(50), date VARCHAR(30), description TEXT)";

			operation.executeSql(SQL_CREATION);
		},
		this.reagirErreur,
		this.reagirSucces
		);
	}
	
	this.ajouterActivite = function(activite){
		this.baseDeDonnees.transaction(
			function(operation){
				var SQL_AJOUT = "INSERT INTO activite(nom, date, description) VALUES(?, ?, ?)";
				var parametres = [activite.nom, activite.date, activite.description];
				operation.executeSql(SQL_AJOUT, parametres);
			},
			this.reagirErreur,
			this.reagirSucces
		);
	}
	
	this.modifierActivite = function(activite){
		this.baseDeDonnees.transaction(
			function(operation){
				var SQL_MODIFIER = "UPDATE activite SET nom = ?, date = ?, description = ? where id= ?";
				var parametres = [activite.nom, activite.date, activite.description, activite.id];
				operation.executeSql(SQL_MODIFIER, parametres);
				//alert("SQL_AJOUT :"+ SQL_MODIFIER);
			},
			this.reagirErreur,
			this.reagirSucces
		);
	}
	
	this.listerToutesLesActivites = function(finalisation){
		var self = this;
		
		self.baseDeDonnees.transaction(
			function(operation){
				var SQL_SELECTION = "SELECT * FROM activite";
				operation.executeSql(SQL_SELECTION, [], function(operation, resultat)
				{
					self.liste_activites = [];
					for(var position = 0; position<resultat.rows.length; position++){
						var enregistrementActivite = resultat.rows.item(position);
						activite = new Activite(enregistrementActivite.id,
											enregistrementActivite.nom, 
											enregistrementActivite.date, 
											enregistrementActivite.description);
						self.liste_activites[self.liste_activites.length] = activite;
					}
				});
			},
			this.reagirErreur,
			
			function(){
				finalisation(self.liste_activites);
			}
		);
	}
	
	this.reagirErreur = function(erreur){
		console.log("ERREUR:SQL:" + erreur.code + ":" + erreur.message);
		alert("ERREUR:SQL:" + erreur.code + ":" + erreur.message);
	}
	
	this.reagirSucces = function(){
		console.log("SUCCES:SQL:");
		alert("SUCCES:SQL:");
	}
	
	this.initialiser();
	
	
	
	this.trouverActiviteParId = function(id_activite){
		for(var no_activite in this.liste_activites){
			if(this.liste_activites[no_activite].id == id_activite){
				return this.liste_activites[no_activite];
			}
		}
	};
	
}
