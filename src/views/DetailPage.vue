<template>
  <div class="">
    <div class="header-block-image text-white"
    :style="{
      'background-image': 'url(' + require(`../assets/images/${placeContent.imgPrim}`) + ')'
  }">
      <div class="container">
      </div>
    </div>
    <div class="container pos-relative">
      <div class="row mt-5">
        <div class="col-md-7">
          <h1>{{placeContent.chambre}}</h1>
          <small>Escam Groupes</small> <br />
          
          <div class="bord-btm-ccc my-4 pb-5">
              <h2 class="font-weight-bold">À propos</h2>
              <p class="fw-bold">Fonctionnalité : {{placeContent.chambre}} </p>
              <p class="my-3">{{placeContent.infoText}}</p>
              <p class="my-3">{{placeContent.infoGeneral}}</p>

          </div>

       


            


            <div class="bord-btm-ccc my-5 pb-5 experience">
              <h2 class="font-weight-bold">Qui sommes nous</h2>
              <p class="my-4">
                  Crée en septembre 2010 le Groupe ESCAM est constitué aujourd’hui de Plusieurs écoles à Abidjan aussi bien qu'a l'interieur du pays. Le Groupe ESCAM est spécialisé dans la formation:
• des Commerciaux
• des Gestionnaires d’Entreprise
• des Juristes d’Entreprise
• des Comptables et Financiers
• des Informaticiens
Le Groupe ESCAM vise à former de véritables professionnels (techniciens et ingénieurs) dans le management efficace de l’information et des technologies associées. Pour se faire, il propose aux étudiants deux (02) cycles de formation :
➢ Le Premier et Le Second Cycle

A la fin de ces cycles Tous les apprenants des différentes filières sont soumis à un stage de fin de cycle qui leur permet de confronter leurs connaissances livresques à la réalité pratique du terrain.
                </p>
          

            </div>

            <div class="my-5 pb-5">
              <h2 class="font-weight-bold">Mot du directeur</h2>

            <carousel
                :perPageCustom="[
                    [200, 1],
                    [768, 1],
                    [1024, 1],
                ]"
                :navigationEnabled="true"
                :paginationEnabled="false"
                >
                <slide >


                <div class="block-temoignage px-5 mt-5">
                    <p ><img width="20" src="../assets/images/comma-right.png" alt=""> <span class="mx-4">
                   La mission du Groupe ESCAM est de former des ingénieurs qui vont transformer le monde avec des idées nouvelles.
Il est capital d’inculquer cet état d’esprit à nos étudiants en l’appliquant d’abord nous-mêmes.
</span>
                    <img width="20" src="../assets/images/comma-left.png" alt="">
                    </p>
                    <div class="text-end">
                     <p>Mr. AMARA KONE </p>

                    </div>
                </div>
                </slide>
                <slide >


                <div class="block-temoignage px-5 mt-5">
                    <p ><img width="20" src="../assets/images/comma-right.png" alt=""> 
                    <span class="mx-4"> Dans ces conditions, le Groupe ESCAM demeure, innovante, imaginative et reste un modèle de changement compte tenu des enjeux environnementaux et des impératifs du monde socio-économique. </span>
                    <img width="20" src="../assets/images/comma-left.png" alt="">
                    </p>
                    <div class="text-end">
                        <p>Mr. AMARA KONE </p>
                    </div>
                </div>
                </slide>
            </carousel>

            </div>

        </div>
        <div class="col-md-1">

        </div>
        <div class="col-md-4 p-0">




             <div class="bord-ccc pt-5 pb-4 px-4 bor-rad-5" >
             

              <button class="btn btn-warning w-100 my-4" @click="goToReservePage(placeContent)">Acceder à nos bibliothèque</button>
              <div class="text-center ">
              <p>A l'écoute au : <strong class="color-bl-dark"> +225 07 49 24 48 11</strong></p>
              </div>
            </div>
            <div class="row stigmate">
                <div class="col-md-4 p-0 bg-dark bg-orange-red">
                </div>
                <div class="col-md-4 p-0 bg-dark h-100 bg-white">
                </div>
                <div class="col-md-4 p-0 bg-dark h-100 bg-green-dark">
                </div>
            </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  data() {
    return {
        scrollData:0,
        placeContent:{},
        isReserve:false,
        experienceContent:[
            {
                text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed vero labore veritatis et quos perferendis in odio incidunt iste.',
                img:'card-p.png'
            },
            {
                text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed vero labore veritatis et quos perferendis in odio incidunt iste.',
                img:'card-m.png'
            },
            {
                text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed vero labore veritatis et quos perferendis in odio incidunt iste.',
                img:'card-n.png'
            },

        ],
        pieces:[
            {
                title:'Le salon',
                content:[
                    {
                        text:'Hifi stéréo'
                    },
                    {
                        text:'1 télé'
                    },
                    {
                        text:'Cheminée'
                    },
                ]
            },
            {
                title:'Salle à manger',
                content:[
                    {
                        text:'12 sièges'
                    },
                ]
            },
            {
                title:'Coin repas extérieur',
                content:[
                    {
                        text:'10 places'
                    },
                ]
            },
            {
                title:'Cuisine',
                content:[
                    {
                        text:'Cuisine séparée'
                    },
                                        {
                        text:'Lave-vaisselle'
                    },
                                        {
                        text:'Four micro onde'
                    },
                                        {
                        text:'Bouilloire'
                    },
                                        {
                        text:'Grille-pain'
                    },
                    {
                        text:'Machine nespresso'
                    },
                    {
                        text:'Machine à expresso'
                    },
                ]
            },
            {
                title:'Chambre 1',
                content:[
                    {
                        text:'1 lit double'
                    },
                                        {
                        text:'1 télé'
                    },
                                        {
                        text:'30 m²'
                    },
                                        {
                        text:'Dans la maison'
                    },
                                        {
                        text:'principale'
                    },
                ]
            },
            {
                title:'Chambre 1 salle ',
                content:[
                    {
                        text:'de bain'
                    },
                                        {
                        text:'Lavabo double'
                    },
                                        {
                        text:'Douche à l’italienne'
                    },
                                        {
                        text:'Toilette'
                    },
                                        {
                        text:'Sèche-cheveux'
                    },
                ]
            },
        ]
        
    };
  },
  mounted(){
       window.addEventListener("scroll", this.onScroll);
  },
  created(){
           this.placeContent = this.$store.state.ChoosenPlace;
           this.isReserve = this.placeContent.isDisponible;
            // console.log("coisi detail-page ", this.placeContent)
    },
  methods:{
      onScroll(e){
          this.scrollData = window.top.scrollY;
        //   console.log("Data scroll ", this.scrollData)
      },
      goToReservePage(e){

          this.$store.commit("choosenMutation",e);
          this.$router.push({name:'biblioPage'})
      },
          
  },
  components:{
      Carousel, 
      Slide
  }
};
</script>

<style lang="scss">

.stigmate {
    margin-top: 5rem;
    height: 100vh;
}

.w-60{
    width: 60% !important;
}
.experience{
    .card-img-block{
        background-size: cover;
        background-repeat: no-repeat;
        height: 300px;
        border-radius: 10px;
    }
}


.color-bl-dark{
            
    &:hover{
        cursor: pointer;
    }
}
.header-block-image {
  height: 80vh !important;
//   background: url(../assets/images/header-img.png);
  background-size: 100% 150%;
  background-repeat: no-repeat;
  position: relative;

  .heart-icon {
    position: absolute;
    bottom: -36px;
    background: #fff;
    border-radius: 50%;
  }
}


.principales,.services,.localisation, .block-novtitle{
    span{
    margin-left: 0.6rem;
}
} 
.right-service {
    margin-left: 5%;
}

.block-img-localise {
    height: 460px;
    overflow-y: hidden;
    position: relative;
}
.map-icon{
    position: absolute;
    top: 48%;
    background: blue;
    left: 47%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    border-radius: 50%;
    width: 70px;

}
.experience .card-mg{
    margin-right: 1rem;
}
.experience img {
    border-radius: 10px;
}
.experience .col-md-4:last-child .card-mg{
    margin-right: 0;
}
.pos-relative{
    position: relative;
}
.reservation-block{
    position: absolute;
    top: -12%;
    z-index: 10;
    
}

.reservation-block, .reservation-fixed{
    background: #fff;
    button{
    height: 50px;
}
}
.reservation-fixed{
    position: fixed;
    top: 14%;
    z-index: 5;
    width: 440px;
    height: 544px;
}
.hide_fixed{
    display: none;
}


.bor-rad-5{
    border-radius: 5px;
}

button.VueCarousel-navigation-button {
    width: 50px;
    height: 50px;
    box-shadow: 0px 1px 7px #000;
    border-radius: 50%;
}
button.VueCarousel-navigation-button.VueCarousel-navigation-next{
        box-shadow: 0px 1px 7px #0000006e;
}

@media screen and (max-width:1399px) {
    .reservation-fixed{
            width: 380px !important;
            height: 597px !important;
    }
}


@media screen and (max-width:1199px) {
    .reservation-fixed{
            width: 328px !important;
    }
    .reservation-block, .reservation-fixed{
        p img{
           display: none
        }
    }

     .pieces-block {
         .bord-ccc {
                padding: 1rem !important;
            }
            .col-md-4 {
            width: 50% !important;
        }
     }
     

     .localisation-block{
         .block-img-localise {
            height: auto !important;
            }
     }
    
}
@media screen and (max-width:991px) {
    .block-novtitle , .principales,.services {
        display: block !important;
    }
    .right-service{
        margin: 0 !important;
    }

    .experience{
         .col-md-4{
             width: 50% !important;
         }
     }

    .reservation-block {
        top: -9%;
    }
   
}
</style>