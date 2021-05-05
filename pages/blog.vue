<template>
  <section class="blog">
      <h1 class="heading">Blog</h1>
      <div class="posts-wrapper">
        <div class="entry">
            <h4 class="title">5/3 Entry</h4>
            <p>
                The plan is to make training material for a front end development project. I want to use it as content for website. I'll add it to my development plans. It's gonna take documentation to another level. If I can get the design system built, there should be plenty of topics for fairly large lesson. The training material can come in the form of video, presentation, and blog entry. This looks like the start of my re-education. Education could be a nice place to apply myself.
            </p>
        </div>
      </div>
      <div v-for="post of posts" :key="post.title" class="posts-wrapper">
        <div class="entry">
            <h4 class="title">{{ post.title }}</h4>
            <p>{{ post.content }}</p>
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
            ]
        }
    }
}
</script>

<style>

</style>