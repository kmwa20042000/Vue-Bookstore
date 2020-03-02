<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row justify-content-md-center">
        <div class="col-md-auto">
          <h1 class="heading">Kazu's Bookstore</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="description">Hover over a bookcover to flip it.</p>
        </div>
        <div class="col">
          <label>Search title:</label>
          <input type="text" v-model="search" placeholder="Search title.." />
        </div>
      </div>
    </div>
    <div class="content">
      <imagecards v-for="book in filteredBooks" v-bind:key="book.title" v-bind:book='book' />

    </div>
  </div>



</template>

<script>
  import imagecard from './Imagecard'
  import appheader from './app-header'
  import LightBox from 'vue-image-lightbox'
  export default {

    components: {
      'imagecards': imagecard,
      'appheaders': appheader,
       LightBox,
    },
    data() {
      return {
        bookList: [],
        search: '',
      }
    },
    created() {
      fetch('https://api.myjson.com/bins/zyv02', {
          method: "GET",
        })
        .then(function (response) {
          return response.json();
        }).then(
          (bookApi) => {
          this.bookList = bookApi.books;
        }
        )
    },
    computed: {
      filteredBooks: function () {
        return this.bookList.filter((book) => {
          return book.title.toLowerCase().match(this.search.toLowerCase());
        })
      }
    }
  }
</script>

<style>
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 300;
    color: #333;
    font-family: "Nunito Sans", sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: #ecf0f9;
    background-attachment: fixed;
  }

  .content {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
  }

  .heading {
    width: 100%;
    margin-left: 1rem;
    font-weight: 900;
    font-size: 1.618rem;
    text-transform: uppercase;
    letter-spacing: .1ch;
    line-height: 1;
    padding-bottom: .5em;
    margin-bottom: 1rem;
    position: relative;
  }

  .heading:after {
    display: block;
    content: '';
    position: absolute;
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, #1a9be6, #1a57e6);
    bottom: 0;
  }

  .description {
    width: 100%;
    margin-top: 0;
    margin-left: 1rem;
    margin-bottom: 3rem;
  }

  .card {
    color: inherit;
    cursor: pointer;
    width: calc(33% - 2.5rem);
    min-width: calc(33% - 2.5rem);
    height: 550px;
    min-height: 400px;
    perspective: 1000px;
    margin: .5em;
    position: relative;
  }

  @media screen and (max-width: 800px) {
    .card {
      width: calc(50% - 2rem);
    }
  }

  @media screen and (max-width: 500px) {
    .card {
      width: 100%;
    }
  }

  .front,
  .back {
    display: flex;
    border-radius: 6px;
    background-position: center;
    background-size: cover;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: ease-in-out 600ms;
  }

  .front {
    background-size: cover;
    padding: 2rem;
    font-size: 1.618rem;
    font-weight: 600;
    color: #fff;
    overflow: hidden;
    font-family: Poppins, sans-serif;
  }

  .front:before {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .25;
    z-index: -1;
  }

  .card:hover .front {
    transform: rotateY(180deg);
  }

  .card:nth-child(even):hover .front {
    transform: rotateY(-180deg);
  }

  .back {
    background: #fff;
    transform: rotateY(-180deg);
    padding: 0 2em;
  }

  .back .button {
    background: linear-gradient(135deg, #1a9be6, #1a57e6);
  }

  .back .button:before {
    box-shadow: 0 0 10px 10px rgba(26, 87, 230, 0.25);
    background-color: rgba(26, 87, 230, 0.25);
  }

  .card:hover .back {
    transform: rotateY(0deg);
  }

  .card:nth-child(even) .back {
    transform: rotateY(180deg);
  }

  .card:nth-child(even) .back .button {
    background: linear-gradient(135deg, #e61a80, #e61a3c);
  }

  .card:nth-child(even) .back .button:before {
    box-shadow: 0 0 10px 10px rgba(230, 26, 60, 0.25);
    background-color: rgba(230, 26, 60, 0.25);
  }

  .card:nth-child(even):hover .back {
    transform: rotateY(0deg);
  }

  .button {
    transform: translateZ(40px);
    cursor: pointer;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    font-weight: bold;
    color: #fff;
    padding: .5em 1em;
    border-radius: 100px;
    font: inherit;
    border: none;
    position: relative;
    transform-style: preserve-3d;
    transition: 300ms ease;
  }

  .button:before {
    transition: 300ms ease;
    position: absolute;
    display: block;
    content: '';
    transform: translateZ(-40px);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    border-radius: 100px;
    left: 10px;
    top: 16px;
  }

  .button:hover {
    transform: translateZ(55px);
  }

  .button:hover:before {
    transform: translateZ(-55px);
  }

  .button:active {
    transform: translateZ(20px);
  }

  .button:active:before {
    transform: translateZ(-20px);
    top: 12px;
  }
</style>