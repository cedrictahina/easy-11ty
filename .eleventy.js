module.exports = function () {
    // You can return your Config object (optional).
    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "includes",
            layouts: "layouts",
            data: "data"
        },
        templateFormats: ["html", "njk", "md"]
    };
}; 