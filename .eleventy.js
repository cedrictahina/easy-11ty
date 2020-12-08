module.exports = function () {
    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "views/includes",
            layouts: "views/layouts",
            data: "data"
        },
        templateFormats: ["html", "njk", "md"],
        passthroughFileCopy: true
    };
}; 