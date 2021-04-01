<template>
    <section class="form-entry">
        <h1 class="form-entry-heading">Entry Form</h1>
        <div class="form-entry-inputs">
            <h4 class="inputs-heading">Inputs</h4>
            <div class="input-wrapper">
                <label>Title</label>
                <input id="title"/>
            </div>
            <div class="input-wrapper">
                <label>Description</label>
                <input id="description"/>
            </div>
            <div class="input-wrapper">
                <label>Content</label>
                <input id="content" class="input-content"/>
            </div>
            <button @click="handleSaveClick">Save</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.form-entry {
    margin: 0 auto;
    width: 90%;
    @media (min-width: 576px) {
        width: 80%;
    }
    @media (min-width: 768px) {
        width: 720px;
    }
    @media (min-width: 992px) {
        width: 920px; 
    }
    @media (min-width: 1200px) {
        width: 1110px; 
    }
    @media (min-width: 1320px) {
        width: 1280px; 
    }
    .form-entry-inputs {
        display: flex;
        flex-direction: column;

        .input-wrapper {
            padding: .5rem 0;
            display: flex;
            flex-direction: column;
            @media (min-width: 768px) {
                flex-direction: row;
                justify-content: space-between;
            }

            label {
                margin-right: .25rem;
            }
            input {
                flex-grow: 2;

                &.input-content {
                    height: 50vh;
                }
            }
        }
    }
    button {
        @media (min-width: 768px) {
            min-width: 140px;
            align-self: flex-end;
            margin-top: .5rem;
        }
    }
}
</style>