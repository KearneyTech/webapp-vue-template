<template>
    <section class="form-entry">
        <h1 class="form-entry-heading">Entry Form</h1>
        <div class="form-entry-inputs">
            <h4 class="inputs-heading">Inputs</h4>
            <div class="input-wrapper">
                <label>Title</label>
                <input v-model="item.title"/>
            </div>
            <div class="input-wrapper">
                <label>Description</label>
                <input v-model="item.description"/>
            </div>
            <div class="input-wrapper">
                <label>Content</label>
                <textarea v-model="item.content" class="input-content"/>
            </div>
            <button @click="handleSaveClick">Save</button>
        </div>
        <div class="list-items">
            <ul class="items-wrapper">
                <li v-for="(item, index) in items" :key="index">
                    <span class="item-title">{{ item.title }}</span>
                    <button @click="handleUpdateClick" :id="index">Update</button>
                    <button @click="handleDeleteClick" :id="index">Delete</button>
                </li>
            </ul>
        </div>

    </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data () {
        return {
            item: {
                title: "Try This On",
                description: "Is",
                content: "This thing on?"
            }
        }
    },
    computed: {
        items () {
            return this.$store.state.list
        }
    },
    methods: {
        handleSaveClick () {
            this.$store.commit('add', this.item)
            this.resetItem()
        },
        handleDeleteClick (obj) {
            this.$store.commit('delete', obj.target.id)
        },
        handleUpdateClick (obj) {
            this.item = this.items[obj.target.id]
            // update form button to update
            // update form button to call update method
            // pass index to update button
        },
        resetItem () {
            this.item = {
                title: "",
                description: "",
                content: ""
            }
        }
    }
}
</script>
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

            textarea,
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