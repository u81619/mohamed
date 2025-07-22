// تحميل payload1.bin
fetch('./payload1.bin').then(res => {
    return res.arrayBuffer();
}).then(arr => {
    window.pld1 = new Uint32Array(arr);

    // بعد تحميل payload1.bin، تحميل payload2.bin
    return fetch('./payload2.bin');
}).then(res => {
    return res.arrayBuffer();
}).then(arr => {
    window.pld2 = new Uint32Array(arr);

    // هنا يمكنك تنفيذ أي كود لتفعيلهما معًا
    // مثال: callPayloads(window.pld1, window.pld2);
});
