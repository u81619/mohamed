fetch('./payload1.bin''./payload2.bin' ).then(res => {
    res.arrayBuffer().then(arr => {
        window.pld = new Uint32Array(arr);

    })
})
