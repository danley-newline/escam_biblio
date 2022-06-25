<template>
  <div>
      <div class="header-block-image home-page text-white mb-5">
        <div class="container">
            <div class="bienvenue-block w-75">
                <h1 class="font-weight-bold  text-shad-2 fs-75">Bienvenue</h1>
                <p class="font-weight-bold text-shad-2"></p>


                    <div class="card-news-info bord-rad-10 p-5 w-100">
                        <div class="text-center">
                            <h1 class="font-weight-bold orange-red text-shad-2 fs-75">Escam Côte D'ivoire</h1>
                        </div>
                    </div>


                </div>
        </div>
    </div>

    <div class="bord-rad-10 bg-orange-red py-4 mb-5">
        <marquee scrolldelay="200" behavior="alternate" class="pt-2 pb-2 text-light mt-5 font-weight-bold"> Numéro homologation : N° 130/MESRS/DGESIP/DESUP/KKJ  du 28 Septembre 2018</marquee>
    </div>

    <div class="container px-4 my-5 py-5">
        <div class="text-center">
                <h1 class="mb-5" id="cursus">Notre Cursurs Universitaire</h1>
        </div>
            <carousel
                :perPageCustom="[
                    [200, 1],
                    [768, 2],
                    [1100, 3],
                ]"
                :navigationEnabled="true"
                :paginationEnabled="false"
                >
                <slide v-for="(items, i) in Cursus" :key="i" >
                    <a href="/info-formations" class="my-special-a">
                    <div class="my-4">
                        <div class="hotel-block" @click="seeDetail(items)">
                            <img  :src="require(`../assets/images/${items.imgPrim}`)" class="img-fluid head-img" alt="" /> 
                            <div class="hotel-content p-4">
                                

                                <h2 class="font-weight-normal">{{items.chambre}}</h2>
                                <div class="sous-content text-center mt-4">
                                    <p>{{items.text}}</p>
                                    
                                    
                                </div>


                            </div>
                        </div>
                    </div>
                    </a>
                </slide>
                
            
                     </carousel>
    </div>



    <div class="container my-5 pt-5">
        
            <h1 class="gray-light my-4 ">Informations Cours
Jour & Soir</h1>
            <div class="row ">
                <div class="col-md-4 right-propos-bg">
                    <!-- I PUT A BACKGROUND IMG HERE IN CSS -->
                </div>
                <div class="col-md-1 px-2 ">
                    <div class="bg-orange-red h-100">

                    </div>
                </div>
                <div class="col-md-7 col-sm-12">
                    <p>Le Groupe ESCAM proposent un encadrement fort des étudiants, pour leur assurer un confort d'études, et une réussite. L'encadrement n'est pas uniquement pédagogique mais aussi festif .

Les rapports entre étudiants permettent de passer de belles années d'études , constitué de moment de sport, de voyage et de rencontrer du monde !</p>
    <p>Chers étudiants</p>
    <p>Vous allez très prochainement choisir un parcours de formation et consacrer beaucoup de temps et d'energie pour atteindre deux (02) objectifs:

- Apprendre un metier
- Réussir votre vie professionnelle.

Vous devez savoir que le Groupe ESCAM, vous forme a la pratique d'un metier actuel tout en vous plaçant dans un cursurs d'approfondissement des connaissances qui peut vous conduire au nivau le plus élevé (BAC + 5).

Notre offre de formations , au format LMD, est composée de parcours Licence et Master :

Les parcours Licence professionnelle (Bac + 3) faciliteront votre entrée dans le monde du travail.
Les enseignements dispensés vous offrent la possibilité de vous présenter a l'examen national du BTS
a la fin de la 2ème année de licence.</p>

<p>Les parcours Master professionnelle (Bac + 5 ) vous forment a exercer des responsabilités managériales dans les instances de décisions de l'entreprise.

Nous mettons ainsi a votre disposition des outils pédagogiques , Des ressources humaines, Des moyens et outils didactiques , ainsi qu'un réseau international d'université et grandes écoles auquel nous appartenons.

Ensemble nous réussirons votre avenir professionnel.</p>
                </div>
                
                
            </div>


            <div class="block-suites my-5 py-5">
                <div class="d-flex justify-content-between align-items-center my-4" >
                    <div>
                    <h1 class=" mb-0">Nos Ecoles Escam & Esie</h1>

                    </div>
                    <div>
                    </div>
                </div>
                <div class="py-5">
                     <carousel
                :perPageCustom="[
                    [200, 1],
                    [768, 2],
                    [1100, 3],
                ]"
                :navigationEnabled="true"
                :paginationEnabled="false"
                >
                <slide v-for="(items, i) in ourSchool" :key="i" >
                    <div class="my-4">
                        <div class="hotel-block orange-red">
                            <div class="text-center p-4">
                                

                                <h2 class="fw-bold">{{items.chambre}}</h2>
                                <div class="sous-content text-dark ext-center mt-4">
                                    <p>{{items.text}}</p>
                                    
                                    
                                </div>


                            </div>
                        </div>
                    </div>
                </slide>
                
            
                     </carousel>
                    
                </div>
            </div>
        
    </div>


  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    data(){
        return{
           

             Cursus:[
                {
                    imgPrim:'mubarak-showole.jpg',
                    lieu:'ASSINIE, Ivory Coast',
                    villaName:'Luxury Villa',
                    price:250000,
                    isDisponible:true,
                    chambre:'BAC G1 - G2 - B',
                    comode:[
                        {
                            icon:'person.png',
                            text:'12 personnes',
                        },
                        {
                            icon:'bed.png',
                            text:'6 chambres',
                        },
                        {
                            icon:'bed.png',
                            text:'6 salles de bain',
                        },
                        {
                            icon:'trace.png',
                            text:'800 m2',
                        },
                    ],
                    infoText:``,
                    infoGeneral:``,
                    
                    text:"La rénovation des séries technologiques , vision renforcé l'enseignement et fortement augmenter les compétences"
                },
                {
                    imgPrim:'mars-sector.jpg',
                    lieu:'ABIDJAN, Ivory Coast',
                    villaName:'Cocody Villa',
                    isDisponible:false,
                    price:300000,
                    chambre:'Bts',
                    comode:[
                        {
                            icon:'person.png',
                            text:'12 personnes',
                        },
                        {
                            icon:'bed.png',
                            text:'6 chambres',
                        },
                        {
                            icon:'bed.png',
                            text:'6 salles de bain',
                        },
                        {
                            icon:'trace.png',
                            text:'800 m2',
                        },
                    ],
                    
                    infoText:`Le BTS (Brevet de Technicien Supérieur), est un diplôme national de l’enseignement supérieur qui se prépare en deux ans après le baccalauréat et qui ouvre la voie à plus de 200 spécialités dans les secteurs agricole, tertiaire et industriel.



Tout comme le Bachelor, le BTS en école de commerce est pensé pour favoriser une orientation professionnelle rapide sans fermer la porte à la poursuite des études. Sa particularité réside dans la nature professionnalisante de son contenu pédagogique et son enseignement pratique porté par de nombreuses semaines de stage en entreprise. Proposé aujourd’hui par de nombreux établissements privés en formation initiale (lycées et écoles de commerce), le BTS peut aussi être préparé en alternance ; il conduit à l’obtention d’un diplôme de niveau bac+2 reconnu par l’Etat. En France, le BTS est disponible en plus de 80 options toutes filières confondues. Sa validation ouvre naturellement les portes du marché de l’emploi. Coup de projecteur sur un diplôme particulièrement prisé par les étudiants, mais aussi les recruteurs !`,
                    infoGeneral:`De façon concise, le BTS est un diplôme de niveau bac+2 proposé dans divers secteurs d’activité et accessible directement après la réussite au baccalauréat. C’est un choix de formation très intéressant dans l’optique d’une insertion professionnelle accélérée. Même si l’enseignement théorique reste primordial, c’est surtout le contenu pratique et orienté terrain qui fait la force des cursus BTS pour booster l’employabilité des futurs diplômés. Les formations BTS sont généralement intenses avec des semaines de cours assez chargées. Les bacheliers technologiques sont les profils que l’on retrouve le plus dans les programmes BTS, mais les bacheliers généraux sont eux aussi attirés par le cursus du fait de la courte durée de la formation.
                    `,
                    text:"Conclu par un examen final national. Les stages constituent la composante principale de la formation en BTS."

                },
                {
                    imgPrim:'emmanuel-ikwuegbu.jpg',
                    lieu:'Paris, France',
                    villaName:'Luxury Villa',
                    price:250000,
                    isDisponible:true,
                    chambre:'Licence',
                    infoText:`Avec une année d’étude supplémentaire, les licences professionnelles permettent aux titulaires d’un Bac+2 d’acquérir une spécialisation supplémentaire ou d’affiner leur cursus avant d’intégrer le marché du travail. Diplôme national professionnalisant, il est très apprécié par les employeurs.`,
                    infoGeneral:`Mises en place en partenariat avec les entreprises, les LP (Licences Professionnelles) sont des diplômes universitaires de niveau bac+3 Si elle est très appréciée par les étudiants qui y voient la possibilité de se professionnaliser davantage, les recruteurs sont également très friands des licences professionnelles.

L’objectif de ce diplôme universitaire est d’apporter aux étudiants des compétences supplémentaires, plus précises, et toujours en accord avec l’évolution du marché. Le programme est en effet axé sur le monde professionnel pour répondre aux mieux aux demandes des entreprises. Les licences pros s’inscrivent parfaitement dans la continuité d’un DUT, ou d’un BTS.`,
                    comode:[
                        {
                            icon:'person.png',
                            text:'12 personnes',
                        },
                        {
                            icon:'bed.png',
                            text:'6 chambres',
                        },
                        {
                            icon:'bed.png',
                            text:'6 salles de bain',
                        },
                        {
                            icon:'trace.png',
                            text:'800 m2',
                        },
                    ],
                    text:"Avec une année d’étude supplémentaire, les licences professionnelles permettent aux titulaires d’un Bac+2 d’acquérir une spécialisation supplémentaire."

                },
                {
                    imgPrim:'kojo-kwarteng.jpg',
                    lieu:'ABOISSO, Ivory Coast',
                    villaName:'Luxury Villa',
                    price:280000,
                    isDisponible:true,
                    chambre:'Master',
                    infoText:`En quoi consiste le master professionnel?
Le master professionnel est un cycle d'études complémentaires proposant une formation professionnalisée. Celui-ci contraste avec les trois années de licence universitaire dites préparatoires, qui sont plus accès sur des notions générales (étudiées pour la plupart en amphi). Grâce aux différents stages proposés lors de ces deux années complémentaires, les étudiants ont la possibilité de changer de voie, selon leurs affinités dès la première année de master.
Où se prépare le master professionnel ?
Les lieux de formation pour préparer un master professionnel:
- à l'université
- dans certaines écoles spécialisées
A qui s'adresse le master professionnel?
L'admission en master professionnel se fait après la validation de la licence générale (bac +3) et permet une orientation vers un domaine précis.
Il est important de savoir, que le passage de la L3 (dernière année de licence) à la M1 (première année de master) ne se fait pas automatiquement, faite donc attention à l'ensemble de vos notes obtenues en licence.
`,
                    infoGeneral:`Le master professionnel s'étale sur quatre semestres dont un consacré au stage. Selon les universités le choix du master professionnel ou de recherche se fait, soit à l'entrée en première année, soit en deuxième année après une année en tronc commun ayant pour but d'assoir les bases de la spécialisation.
                    `,
                    comode:[
                        {
                            icon:'person.png',
                            text:'12 personnes',
                        },
                        {
                            icon:'bed.png',
                            text:'6 chambres',
                        },
                        {
                            icon:'bed.png',
                            text:'6 salles de bain',
                        },
                        {
                            icon:'trace.png',
                            text:'800 m2',
                        },
                    ],
                    text:"pour but de former les futurs chercheurs et thésards. L'enseignement dispensé vise à éveiller l'esprit d'initiative et critique des étudiants"
                },
                {
                    imgPrim:'meet_1157-47741.jpg',
                    lieu:'ABOISSO, Ivory Coast',
                    villaName:'Luxury Villa',
                    price:280000,
                    isDisponible:true,
                    chambre:'MBA',
                    infoText:`Historiquement généraliste (même si se développent aujourd’hui des MBA spécialisés), cette formation vise principalement à apporter à des participants au profil technique (commerciaux, juristes, ingénieurs, scientifiques, etc.) des compétences en management et une vision globale de l’entreprise, afin de favoriser leur accès à des postes de direction.

Y sont donc approfondies toutes les compétences managériales : gestion, comptabilité, fiscalité, droit, finance, langues, etc., le tout dans un contexte de multilinguisme et de multiculturalisme.

Quel que soit le lieu d’apprentissage, les enseignements s’y font, pour la plupart, en anglais, les étudiants comme les équipes d’enseignants représentant diverses nationalités. Par essence international, le diplôme a ainsi acquis, dans un contexte de mondialisation de l’économie, une très forte notoriété. Il intéresse notamment les entreprises en quête de cadres capables de s’adapter aux différents marchés mondiaux.
`,
                    infoGeneral:`Né aux Etats-Unis dans les Business Schools, le MBA était initialement destiné aux ingénieurs désireux d’accéder à des fonctions d’encadrement. Il s’adresse aujourd’hui à toutes personnes justifiant d’un profil technique (commerciaux, juristes, ingénieurs, scientifiques, etc.)`,
                    comode:[
                        {
                            icon:'person.png',
                            text:'12 personnes',
                        },
                        {
                            icon:'bed.png',
                            text:'6 chambres',
                        },
                        {
                            icon:'bed.png',
                            text:'6 salles de bain',
                        },
                        {
                            icon:'trace.png',
                            text:'800 m2',
                        },
                    ],
                    text:"Stratégie, marketing, finances, ressources humaines et management.."
                },

            ],

            ourSchool:[
                {
                    imgPrim:'chambre.png',
                    lieu:'ASSINIE, Ivory Coast',
                    villaName:'Luxury Villa',
                    price:250000,
                    isDisponible:true,
                    chambre:'Escam Cocody',
                    
                    comode:[
                        {
                            icon:'person.png',
                            text:'12 personnes',
                        },
                        {
                            icon:'bed.png',
                            text:'6 chambres',
                        },
                        {
                            icon:'bed.png',
                            text:'6 salles de bain',
                        },
                        {
                            icon:'trace.png',
                            text:'800 m2',
                        },
                    ],
                    text:"07 49 24 48 11"
                },
                {
                    imgPrim:'chambre.png',
                    lieu:'ASSINIE, Ivory Coast',
                    villaName:'Luxury Villa',
                    price:250000,
                    isDisponible:true,
                    chambre:'Escam Bingerville',
                    comode:[
                        {
                            icon:'person.png',
                            text:'12 personnes',
                        },
                        {
                            icon:'bed.png',
                            text:'6 chambres',
                        },
                        {
                            icon:'bed.png',
                            text:'6 salles de bain',
                        },
                        {
                            icon:'trace.png',
                            text:'800 m2',
                        },
                    ],
                    text:"07 09 56 41 79"
                },
                {
                    imgPrim:'chambre.png',
                    lieu:'ASSINIE, Ivory Coast',
                    villaName:'Luxury Villa',
                    price:250000,
                    isDisponible:true,
                    chambre:'Escam Yopougon',
                    comode:[
                        {
                            icon:'person.png',
                            text:'12 personnes',
                        },
                        {
                            icon:'bed.png',
                            text:'6 chambres',
                        },
                        {
                            icon:'bed.png',
                            text:'6 salles de bain',
                        },
                        {
                            icon:'trace.png',
                            text:'800 m2',
                        },
                    ],
                    text:"07 07 50 49 33"
                },
                 {
                    imgPrim:'chambre.png',
                    lieu:'ASSINIE, Ivory Coast',
                    villaName:'Luxury Villa',
                    price:250000,
                    isDisponible:true,
                    chambre:'Escam Abobo ',
                    comode:[
                        {
                            icon:'person.png',
                            text:'12 personnes',
                        },
                        {
                            icon:'bed.png',
                            text:'6 chambres',
                        },
                        {
                            icon:'bed.png',
                            text:'6 salles de bain',
                        },
                        {
                            icon:'trace.png',
                            text:'800 m2',
                        },
                    ],
                    text:"07 07 96 99 98"
                },
                {
                    imgPrim:'chambre.png',
                    lieu:'ASSINIE, Ivory Coast',
                    villaName:'Luxury Villa',
                    price:250000,
                    isDisponible:true,
                    chambre:'ESIE Cocody',
                    comode:[
                        {
                            icon:'person.png',
                            text:'12 personnes',
                        },
                        {
                            icon:'bed.png',
                            text:'6 chambres',
                        },
                        {
                            icon:'bed.png',
                            text:'6 salles de bain',
                        },
                        {
                            icon:'trace.png',
                            text:'800 m2',
                        },
                    ],
                    text:"07 49 24 48 11"
                },
                 {
                    imgPrim:'chambre.png',
                    lieu:'ASSINIE, Ivory Coast',
                    villaName:'Luxury Villa',
                    price:250000,
                    isDisponible:true,
                    chambre:'ESIE Yopougon',
                    comode:[
                        {
                            icon:'person.png',
                            text:'12 personnes',
                        },
                        {
                            icon:'bed.png',
                            text:'6 chambres',
                        },
                        {
                            icon:'bed.png',
                            text:'6 salles de bain',
                        },
                        {
                            icon:'trace.png',
                            text:'800 m2',
                        },
                    ],
                    text:"07 07 50 49 33"
                },
                 {
                    imgPrim:'chambre.png',
                    lieu:'ASSINIE, Ivory Coast',
                    villaName:'Luxury Villa',
                    price:250000,
                    isDisponible:true,
                    chambre:'Escam Bouake',
                    comode:[
                        {
                            icon:'person.png',
                            text:'12 personnes',
                        },
                        {
                            icon:'bed.png',
                            text:'6 chambres',
                        },
                        {
                            icon:'bed.png',
                            text:'6 salles de bain',
                        },
                        {
                            icon:'trace.png',
                            text:'800 m2',
                        },
                    ],
                    text:"07 59 23 46 19"
                },
                 {
                    imgPrim:'chambre.png',
                    lieu:'ASSINIE, Ivory Coast',
                    villaName:'Luxury Villa',
                    price:250000,
                    isDisponible:true,
                    chambre:'Escam San Pedro',
                    comode:[
                        {
                            icon:'person.png',
                            text:'12 personnes',
                        },
                        {
                            icon:'bed.png',
                            text:'6 chambres',
                        },
                        {
                            icon:'bed.png',
                            text:'6 salles de bain',
                        },
                        {
                            icon:'trace.png',
                            text:'800 m2',
                        },
                    ],
                    text:"07 47 07 28 83"
                },
                 {
                    imgPrim:'chambre.png',
                    lieu:'ASSINIE, Ivory Coast',
                    villaName:'Luxury Villa',
                    price:250000,
                    isDisponible:true,
                    chambre:'Escam Man',
                    comode:[
                        {
                            icon:'person.png',
                            text:'12 personnes',
                        },
                        {
                            icon:'bed.png',
                            text:'6 chambres',
                        },
                        {
                            icon:'bed.png',
                            text:'6 salles de bain',
                        },
                        {
                            icon:'trace.png',
                            text:'800 m2',
                        },
                    ],
                    text:"07 08 04 44 67"
                },
                

            ],
        }
    },
    components:{
        Carousel, 
        Slide
    },
    methods:{
        seeDetail(e){
            // console.log("voici le click ", e)
            this.$store.commit("choosenMutation",e);
            
            // this.$router.push({name:'detail-page'})
            
        }
    }
}
</script>

<style lang="scss">
.my-special-a,.my-special-a:hover  {
    color: #000;
    text-decoration: none;
}
.block-suites{
button.VueCarousel-navigation-button {
    width: 50px;
    height: 50px;
    margin: 0 -1rem;
    box-shadow: 0px 1px 7px #0000003b;

}
}



.hotel-block {
    border-radius: 10px;
    box-shadow: 0px 1px 11px #ccccccba;
    margin: 0 2rem;
    position: relative;

    .head-img{
        border-radius: 10px 10px 0 0;
    }
    &:hover{
        cursor: pointer;
    }

    .icon-absolute {
    position: absolute;
    top: 4%;
    left: 4%;
    
}
   
}
.header-block-image {
  height: 100vh !important;
  background: url(../assets/images/businessman-leader.jpg);
  background-size: 100% 142%;
  background-repeat: no-repeat;
  position: relative;
}
.right-propos-bg{
    background: url(../assets/images/kojo-kwarten.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
.text-shad-2{
        text-shadow: 2px 3px 5px #000;
}
.fs-75 {
    font-size: 75px;
}
.gray-light {
    color: #cacaca;
}
.font-weight-normal{
    font-weight: normal;
}

.fs-50{
    font-weight: normal;
    font-size: 50px;
}
.card-news-info {
    background: #fff;
    box-shadow: 0px 2px 8px #7c7a7a6b;
}
.bienvenue-block {
    position: absolute;
    bottom: -105px;
    left: 20%;
    transform: translate(-10%, 10px);
}
.bord-rad-10{
    border-radius: 10px;
}
.bord-rad-5{
    border-radius: 5px;
}
.date-block {
    background: #f7f7f7;
    color: #000;
    span.number{
        font-size: 50px !important;
    }
}

.pos-relative{
    position: relative;
    button{
        position: absolute;
    top: 118px;
    }
}

@media screen and (min-width:1339px) {
   .content-bienvenue button{
        height: 50px;
            font-size: 14px;
    } 
}
@media screen and (max-width:1338px) {
  .content-bienvenue button{
        font-size: 14px;
    }  
    .home-page {
        .card-news-info{
                padding: 1rem !important;

        }
    } 
}

@media screen and (max-width:1132px) {
    .special-sm-invite{
        display: block !important;
        padding: 10px 25px !important;
        p{
            margin: 0 !important;
        }
    }

    
}

@media screen and (min-width:1132px) {
    .block-suites{
        .VueCarousel-navigation {
            position: absolute !important;
            top: -16% !important;
            right: 28% !important;
        }
    }
}
</style>