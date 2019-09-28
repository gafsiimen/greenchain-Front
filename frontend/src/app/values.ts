export const CURRENT_USER_TOKEN = 'user_token';
export const apiUrl = 'http://localhost:8000/api/';
export const   Products = [
    {
      id: 1,
      category: 'Alimentation',
      name: '80% réduction sur 1 Mètre de Pizza Farm Ranch',
      city: 'Abidjan',
      partenaire: 'Farm Ranch',
      quantity: 3,
      pictureUrl: 'https://www.crazydeal.tn/components/com_enmasse/upload/i20190401135335photosite%20copie.jpg',
      price: 125,
      description : 'Farm Ranch Pizza vous gâte encore et encore ET S INSTALLE DESORMAIS A ENNASER, A EL GHAZELA et  EL MANAR ! Avec les sorties et les envies de ne pas manger à la maison Green Chain vous propose le deal indispensable pour vos sorties entre amis ou en famille ! Profitez d’un coupon de réduction vous permettant une réduction sur les pizza mètre ! Vous ne pouvez plus échapper à un bon mètre de pizza !',
      offre :'Achetez un coupon de 5dt chez Green Chain profitez de 30% de réduction sur 1 mètre de Pizza pour 5 passages (toutes les pizza sauf viande séchée , saumon et fruits de mer) 1 mètre de pizza : 35 DT au lieu de 50 DT (à payer chez le partenaire) Valable uniquement pour Farm Ranch Ennaser, El ghazela et El Manar.' ,
      condition :'Coupon valable de suite : Immédiatement après l achat. La présentation du coupon imprimé chez le partenaire est obligatoire. Coupon valable pour 5 passages durant 1 mois. Les clients seront servis par ordre selon la disponibilité du partenaire: premier arrivé, premier servi.Le seule moyen de payement est en espèces Horaires d ouverture de 11h30 à 23h30 '
    },
    {
      id: 2,
      category: 'Mode',
      name: 'Forfait soin des mains et épilation visage et sourcils',
      city: 'Abidjan',
      partenaire: 'Jeune et Jolie',
      quantity: 4,
      pictureUrl: 'https://www.crazydeal.tn/components/com_enmasse/upload/i20190731125348jjj1.jpg',
      price: 350,
      description : 'Juste ce qu il vous faut pour l été !! L équipe "Jeune et Jolie" vous la demandé et bien vous êtes servies !! Une nouvelle offre et juste ce qu il vous faut pour rayonner',
      offre :'Forfait : 25 Dt au lieu de 90 DT - Epilation visage - Epilation sourcils - Soin mains + pose vernis simple' ,
      condition :'La présentation du coupon chez le partenaire est obligatoire Prise de rendez-vous obligatoire immédiatement après l achat premier arrivé, premier servi Horaires : du Lundi au Vendredi de 9H30 à 18H00 et le Samedi de 09H30 à 13:00 '

    },
    {
      id: 3,
      category: 'Expérience',
      name: 'Une journée farniente au bord de la piscine avec déjeuner',
      city: 'Abidjan',
      partenaire: 'CRAZYSUMMER - Hotel le Khalife Hammamet',
      quantity: 5,
      pictureUrl: 'https://www.crazydeal.tn/components/com_enmasse/upload/i20190613154253k3.jpg',
      price: 250,
      description : 'Vous voulez profitez de l été et des sorties baignades en famille, profiter de bons moments avec vos enfants et en garder plein de souvenirs ? L’Hôtel Le Khalife vous propose un accès pour une journée à la piscine. Profitez d’une belle journée familiale ou entre amis au soleil, à bronzer, manger nager le tout à un prix tout petit.',
      offre :'Accès piscine journée et un déjeuner à 19 DT par personne au lieu de 32 DT composé de : 1 sandwich escalope, Accès piscine pour la journée de 09h00 à 18h00 , Enfant -2 ans gratuit' ,
      condition :'La présentation du coupon imprimé chez le partenaire est obligatoire. Prise de rendez-vous obligatoire immédiatement après l’achat Les clients seront servis par ordre selon la disponibilité du partenaire: premier arrivé, premier servi Coupon 1 personne. Check in 09h00 - check out 18h00 Coupon valable au 10/09/2019 '

    },

    {
      id: 4,
      category: 'Mode',
      name: 'Un forfait Hammam hommes et femmes avec gommage, enveloppement, jacuzzi etc',
      city: 'Abidjan',
      partenaire: 'Hotel Phébus Gammarth',
      quantity: 1,
      pictureUrl: 'https://www.crazydeal.tn/components/com_enmasse/upload/i2019071013540712.jpg',
      price: 600,
      description : 'Chaque personne a son « petit truc » pour oublier le stress de la semaine et se détendre. Pour beaucoup, il n’y a pas mieux qu’un Hammam pour y remédier . Daddou SPA de l’hôtel Phebus à Gammarth vous propose un forfait hammam au gommage en passant par l’enveloppement aux algues,et savon noir, et terminer avec la touche relaxation en bénéficiant d’un accès jacuzzi sans oublier un accès piscine',
      offre :'Offre pour 1 personne 26 dt au lieux de 90 dt, payer 6,500 dt et 19,5 dt chez dadou spa 1 Hammam  1 Gommage 1 Enveloppement argile et savon noir 1 Accès Jacuzzi 1 Accès piscine couverte' ,
      condition :'La présentation du coupon imprimé chez le partenaire est obligatoire. 1 coupon par personne et valable 1 mois Prise de rendez-vous obligatoire immédiatement après l achat. Les clients seront servis par ordre selon la disponibilité du partenaire: premier arrivé, premier servi Ouvert de 10:30 h à 19 h - fermé Lundi '

    },
    {
      id: 5,
      category: 'Expérience',
      name: 'Une journée à la plage avec un déjeuner en bord de mer en famille ou entre amis pour profiter de votre été',
      city: 'Abidjan',
      partenaire: 'Arena Playa Ghar El Melh',
      quantity: 2,
      pictureUrl: 'https://www.crazydeal.tn/components/com_enmasse/upload/i20190708143252ar5.jpg',
      price: 500,
      description : 'Ghar El Melh est sans aucun doute LA destination de cet été pour passer une belle journée entre plage et déjeuner et profiter du soleil et de la convivialité de la région. Cette plage est depuis un moment indétrônable dans le nord du pays grâce à son paysage, son sable fin, sa mer bleue !',
      offre :'Un menu déjeuner et un accès plage pour 1 personne = 23 DT ,Accès plage toute la journée (parasol + siège ou cabane selon le nombre) Déjeuner en bord de mer composé de : Salade : méchouia + verte Dorade grillé au feu de bois Tastira Pâtes Frites 1 Bouteille d eau' ,
      condition :'La présentation du coupon imprimé chez le partenaire est obligatoire. Coupon valable pour une durée d’un mois. Prise de rendez-vous obligatoire 24h à l avance immédiatement après l achat. Les clients seront servis par ordre selon la disponibilité du partenaire: premier arrivé, premier servi coupon valable au 10/09/2019 '

    }

  ];
 
export const Categories = [
    {
      id: 1,
      name: 'Alimentation',
      count : 1
    },
    {
      id: 2,
      name: 'Mode',
      count : 2
    },
    {
      id: 3,
      name: 'Expérience' ,
      count : 2
    }
  ];