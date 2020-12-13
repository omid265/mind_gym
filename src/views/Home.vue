<template>
  <div class="home">
    <v-card class="text-center">
      <v-card-text class="header">
        <!-- <v-row no-gutters>
         
          <v-col cols="3"> -->
        <div class="mx-auto"></div>
        Score
        <h2>{{ score }}</h2>
        <!-- </v-col>
        </v-row> -->
      </v-card-text>
    </v-card>
<v-container>
  
    <v-card >
      <v-card-text>
        <v-row>
          <v-col cols="3" class="text-center">
            Time
            <!-- <v-progress-circular
              color="red"
              :value="timer * 10"
              class=""
            ></v-progress-circular> -->
            <h2>{{ timer }}</h2>
          </v-col>
          <v-col cols="9">
            <v-card>
              <v-card-text class="text-center">
                <h2>{{ expresion }}</h2>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-text-field
          autofocus
          type="number"
          v-model="answer"
          label="Answer"
          class="text-center"
        ></v-text-field>
      </v-card-text>
    </v-card>
    <h3 class="mt-2"><v-icon color="success">mdi-history</v-icon>
          Answer List
          <v-btn class="d-none" color="error" v-if="trueAnswerList.length>0" @click="clearAnswerList" x-small icon>
          <v-icon>mdi-delete</v-icon>
          </v-btn>
          </h3>
    <v-card class="mt-2" max-height="200" style="overflow:auto">
      
      <v-card-text>
        <v-list one-line>
          <v-list-item-group v-model="selected">
            <template v-for="(item, index) in trueAnswerList">
              <v-list-item :key="item.title" color="green">
                
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="item.exprestion + '= ' + item.answer"
                    ></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-list-item-action-text
                      v-text="item.answerTime + 's'"
                    ></v-list-item-action-text>

                  </v-list-item-action>
                
              </v-list-item>

              <v-divider
                v-if="index < trueAnswerList.length - 1"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
    </v-container>
    <v-bottom-navigation height="13" v-model="value" absolute>
      <v-btn small value="recent">
        <span>Recent</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn small value="favorites">
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn small value="nearby">
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
let timerCash;
export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      value: "",
      expresion: "",
      answer: "",
      score: 0,
      timeScore: 0,
      timer: 10,
      timerCount: 20,
      numberLength: 1,
      gameLevel: [
        10,
        20,
        30,
        40,
        50,
        60,
        70,
        80,
        90,
        100,
        110,
        120,
        130,
        140,
        150,
        160,
        170,
      ],
      trueAnswerList: [],
      selected: "",
    };
  },
  watch: {
    answer(n) {
      let r = eval(this.expresion);
      if (r == n) {
        let _this = this;
        _this.trueAnswerList.unshift({ exprestion: _this.expresion, answer: eval(_this.expresion), answerTime: (_this.timerCount- _this.timer) })
        this.timer = this.timerCount;
          localStorage.setItem('answerList',JSON.stringify(_this.trueAnswerList));
        clearInterval(timerCash);

        setTimeout(() => {
          _this.score++;
          localStorage.setItem("Score", _this.score);
          _this.generateExpresion();
        }, 300);
      } else {
        this.score = this.score == 0 ? "0" : this.score--;
      }
    },
    getAnswerList: {
    deep: true,
    handler: function (newVal) {
      console.log(newVal)
      // this.selected = newVal[0]
      // this.allKeys = newVal
    }
  }
  },
  mounted() {
    this.score = localStorage.getItem("Score") || 0;
    this.trueAnswerList=localStorage.getItem('answerList')==null?[]:JSON.parse(localStorage.getItem('answerList'));

    this.generateExpresion();
  },
  beforeDestroy() {
    clearInterval(timerCash);
  },
  methods: {
    generateExpresion() {
      this.timer = this.timerCount;
      clearInterval(timerCash);
      this.newExpresion();
      let _this = this;

      timerCash = setInterval(() => {
        _this.timer--;
        if (_this.timer == 0) {
          _this.trueAnswerList.unshift({ exprestion: _this.expresion, answer: eval(_this.expresion), answerTime: "0" })
          localStorage.setItem('answerList',JSON.stringify(_this.trueAnswerList));
          this.timeScore--;
          _this.timer = _this.timerCount;
          _this.generateExpresion();
        }
      }, 1000);
      this.answer = "";
    },
    newExpresion() {
      let range = (this.numberLength+this.score) * 10;
      this.expresion =
        Math.floor(Math.random() * range) +
        " " +
        this.getOperation() +
        " " +
        Math.floor(Math.random() * range);
    },
    getOperation() {
      // let operation=['+','*','/','-'];
      let operation = ["+", "-"];
      let index = Math.floor(Math.random() * 2);
      return operation[index];
    },
    clearAnswerList(){
      this.trueAnswerList=[];
    }
  },
};
</script>
