<template>
  <section class="skins">
      <h1 class="heading">Skins</h1>
      <div class="posts-wrapper">
        <div class="entry">
            <h4 class="title">5/3 Entry</h4>
            <p>
                The plan is to make training material for a front end development project. I want to use it as content for website. I'll add it to my development plans. It's gonna take documentation to another level. If I can get the design system built, there should be plenty of topics for fairly large lesson. The training material can come in the form of video, presentation, and blog entry. This looks like the start of my re-education. Education could be a nice place to apply myself. *
            </p>
        </div>
      </div>
      <div v-for="post of posts" :key="post.title" class="posts-wrapper">
        <div class="entry">
            <h4 class="title">{{ post.title }}</h4>
            <p>{{ post.content }}</p>
        </div>
      </div>
      <div class="the-app">
        <div class="configurator">
            <label for="select-layout">Layout</label>
            <select id="select-layout" v-model="layoutStyle">
                <option value="portrait">Portrait</option>
                <option value="column">Column</option>
                <option value="landscape">Landscape</option>
                <option value="step">Step</option>
            </select>
        </div>
        <div
                class="layout_container"
                :class="layoutStyle"
                >
            <img src="images/whiteboards/IMG_3296.jpg"/>
            <img src="images/whiteboards/IMG_3298.jpg"/>
            <img src="images/whiteboards/IMG_3451.jpg"/>
            <img src="images/whiteboards/IMG_3640.jpeg"/>
            <img src="images/whiteboards/IMG_3641.jpeg"/>
            <img src="images/whiteboards/IMG_3650.jpeg"/>
        </div>
      </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                { title: "Blog Post Title", content: "Content goes here."}
            ],
            layoutStyle: "portrait"
        }
    }
}
</script>

<style lang="scss">
.layout_container {

    img {
        width: 300px;
    }

    &.portrait {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 700px;
        height: 800px;
    }
    &.column {
        display: flex;
        flex-direction: column;
    }
    &.landscape {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 900px;
        height: 600px;

        img {
            width: 250px;
            height: 188px;
        }
    }
    &.step {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 700px;
        height: 800px;

        img:first-child {
            margin-top: 80px;
        }
    }
}
</style>