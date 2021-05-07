<template>
    <div class="app">
        <div class="app-header">
            <div class="app-header-logo pane">
                <h1>Web App</h1>
            </div>
            <div class="app-header-nav pane">
                <h2>Menu</h2>
                <a href="https://www.github.com/KearneyTech" target="_blank">GitHub</a>
            </div>
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

    @media (min-width: 992px) {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        height: 100vh;
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

    &-header {
        display: flex;
        flex-direction: row;
        height: 100px;

        @media (min-width: 768px) {
            height: 280px;
        }

        @media (min-width: 992px) {
            height: auto;
            flex-basis: 300px;
        }

        &-logo {
            background-color: $contrast-background;
            color: $contrast-foreground;
            flex-basis: 120px;
            text-align: center;

            @media (min-width: 768px) {
                flex-basis: auto;
                flex-grow: 1;
            }
        }
        &-nav {
            background-color: $secondary-background;
            color: $secondary-foreground;
            flex-grow: 2;

            @media (min-width: 768px) {
                flex-grow: 1;
            }

            @media (min-width: 992px) {
                height: auto;
                flex-basis: 150px;
            }

            &:hover {
                @media (min-width: 992px) {
                    position: absolute;
                    width: 200px;
                    z-index: 2;
                    height: 100vh;
                    left: 71px;
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
    }
    &-content {
        background-color: $normal-background;
        color: $normal-foreground;

        img {
            width: 100%
        }

        @media (min-width: 992px) {
            overflow: scroll;
        }
    }
}
</style>