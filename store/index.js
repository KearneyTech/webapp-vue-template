export const state = () => ({
    list: [
        { title: "title", description: "desc", content: "something"},
        { title: "Brand New", description: "Get it while it's hot!", content: "Deal of the Century!!!"}
    ]
})

export const mutations = {
    add(state, item) {
        state.list.push(item)
    },
    delete(state, index ) {
        console.log("index", index)
        state.list.splice(index, 1)
    }
}