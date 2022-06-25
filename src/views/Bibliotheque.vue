<template>
  <div class="login-page">
    <div class="row block-content">
      <div class="col-md-6 img-side">
        <div class="">
                        <h3 class="fw-bold">BIBLIO ESCAM GROUPE DRIVE </h3>

                        <h4 class="fw-bold my-4 text-white">Notre bibliothèque drive pour vos derniers documents</h4>

                        <div class="text-center">
                            <a href="https://drive.google.com/drive/folders/18OOAywgr8pnsJIqD8rechyAOWaf0qVZ3?usp=sharing" target="_blank" class="btn btn-success fw-bold">Acceder a notre Drive </a>
                        </div>

          <div>
           
          </div>
        </div>
      </div>
      <div class="col-md-6 espace-form">
          <div>
            <h3 class="fw-bold">LA BIBLIOTHEQUE VIRTUEL </h3>

                        <h4 class="fw-bold my-4 text-white ">DEDIÉ A LA FORMATION DES ETUDIANTS</h4>

                        <div class="text-center">
                            <a href="https://biblio.uvci.edu.ci/" target="_blank" class="btn btn-orange fw-bold text-white">Acceder à la bibliothèque</a>
                        </div>
          </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.login-page {
  .img-side {
    background: #f1743a;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;

    h1 {
      color: #fff;
      text-transform: capitalize;
    }

    .img-space {
      position: absolute;
      top: 10%;
      background: #fff;
      padding: 2vw;
      border-radius: 10px;
    }
  }

  .btn-orange{
    background: #f1743a;
  }

  .espace-form {
    display: flex;
    align-items: center;
    justify-content: center;
    background: green;
  }

  .form-block {
    width: 80%;

    input {
      border-radius: 10px;
      outline: none;
      background: #e2e3e3;
      height: 40px;
      margin-bottom: 1rem;
    }

    label {
      font-size: 1vw;
      font-weight: bold;
      margin-bottom: 1vh;
    }

    button.btn.btn-success {
      font-size: 1.1vw;
      font-weight: bold;
      padding: 10px 20px;
      border-radius: 10px;
    }
  }
}
</style>