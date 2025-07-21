fetch('./payload1.bin').then(res => {
    res.arrayBuffer().then(arr => {
        window.pld = new Uint32Array(arr);

    })
})
fetch('./payload2.bin').then(res => {
    res.arrayBuffer().then(arr => {
        window.pld = new Uint32Array(arr);

    })
})
