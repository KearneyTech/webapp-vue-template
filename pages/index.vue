<template>
    <div class="app">
        <div class="app-logo pane">
            <h1>Web App</h1>
        </div>
        <div class="app-nav pane">
            <h2>Menu</h2>
            <a href="https://www.github.com/KearneyTech" target="_blank">GitHub</a>
        </div>
        <div class="app-content pane">
            <h2>Welcome to my work</h2>
            <img src="images/pch.jpeg"/>
        </div>
    </div>
</template>

<style lang="scss">
.app {
    background-color: $primary-background;
    color: $primary-foreground;
    display: grid;
    grid-template-columns: 100px auto;
    grid-template-rows: 100px auto;
    height: 100%;

    @media (min-width: 768px) {
        grid-template-columns: 50% 50%;
        grid-template-rows: 20% auto;
    }

    @media (min-width: 992px) {
        grid-template-columns: 60px 60px auto;
        grid-template-rows: 100%;
    }

    h1, h2 {
        font-weight: 700;
    }

    h2 {
        font-size: 1.3rem;
        margin-top: .5rem;
        margin-bottom: .8rem;
    }

    .pane {
        //border: 1px solid #fff;
        padding: .5rem;
    }

    &-logo {
        grid-column-start: 1;
        grid-row-start: 1;
        background-color: $contrast-background;
        color: $contrast-foreground;
        text-align: center;
    }
    &-nav {
        grid-column-start: 2;
        grid-row-start: 1;
        background-color: $secondary-background;
        color: $secondary-foreground;

        @media (min-width: 992px) {
            grid-column-start: 2;
        }

        &:hover {
            @media (min-width: 992px) {
                width: 200px;
                z-index: 2;
            }
        }

        h2 {
            display: inline-block;
            padding-right: .8rem;
        }

        a,
        a:focus,
        a:visited,
        a:hover {
            color: $secondary-accent;
        }
    }

    &-content {
        background-color: $normal-background;
        color: $normal-foreground;

        grid-column: 1 / 3;
        grid-row: 2;

        @media (min-width: 992px) {
            grid-column: 3;
            grid-row: 1;
        }

        img {
            width: 100%
        }
    }
}
</style>