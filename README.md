  API REST d'authentification utilisateur basée sur des jetons sécurisés à l'aide de JWT 
  (jeton Web JSON), bcrypt, Node, Express et MongoDB

  Le jeton Web JSON (JWT) est un objet JSON décrit dans la RFC 7519 comme une approche sûre 
  pour transférer un ensemble d'informations entre deux parties. Les revendications dans un JWT 
  sont codées en tant qu'objet JSON utilisé comme charge utile d'une structure JSON Web Signature 
  (JWS) ou comme texte en clair d'une structure JSON Web Encryption (JWE), permettant aux 
  revendications d'être signées numériquement ou protégées par l'intégrité avec un code
  d'authentification de message (MAC) et / ou crypté.

 
  // jsonwebtoken	
Ce package est utilisé pour créer le jeton basé sur des chaînes expirable et robuste,
qui aide à établir la communication sécurisée entre le client et le serveur.


  // bcryptjs	
Ce package hache le mot de passe dans la chaîne protégée avant de l'enregistrer
dans la base de données.


  // mongoose-unique-validator	
Le mongoose-unique-validator est un package qui attache la validation de pré-sauvegarde pour unique
champs dans un schéma Mongoose.


  // body-parser	
Le module npm body-parser  est un middleware d'analyse JSON. Il aide à analyser les données JSON,
texte brut ou un objet entier.


  // Express	
Express js est un framework d'application web Node js open source gratuit. Il aide à créer
applications Web et API RESTful.


  // CORS	
Il s'agit d'un package Node JS, également appelé middleware express js. Il permet d'activer
CORS avec plusieurs options. Il est disponible via le registre npm.


  // Mongoose	
Mongoose est un ODM(Object Document Mapper) MongoDB pour Node. Il vous permet d'interagir 
avec la base de données MongoDB.

  Authentication REST APIs

  . GET (users list) /api
  . POST (sign-in) /api/signin
  . POST (sign-up) /api/register-user
  . GET (user profile) /api/user-profile/id
  . PUT (update user) /api/update-user/id
  . DELETE (delete user) /api/delete-user/id


 Start Node Server

  . Run npm install to install required packages
  . Open terminal run nodemon
  . Open other terminal run mongod

 Open API URL on http://localhost:4000/api