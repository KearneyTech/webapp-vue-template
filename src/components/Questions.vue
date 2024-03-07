<template>
    <section class="questions">
        <h3>Questions</h3>
        <div><input type="text"/></div>
        <div>
            <select>
                <option>First</option>
                <option>Second</option>
            </select>
        </div>
        <div>
            <input name="radios" type="radio"><label>Almost Done</label>
            <input name="radios" type="radio"><label>Done</label>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style>
section.questions {
    margin-top: 2rem;
}
</style>