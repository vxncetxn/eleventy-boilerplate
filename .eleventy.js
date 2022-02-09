const Image = require('@11ty/eleventy-img');

const imageShortcode = async (src, alt) => {
    const metadata = await Image(src, {
        widths: [300, 600, 1200],
        formats: ['avif', 'webp', null],
        outputDir: '_site/img',
    });

    const imageAttributes = {
        alt,
        sizes: '(max-width: 600px) 300px, 600px',
        loading: 'lazy',
        decoding: 'async',
    };

    return Image.generateHTML(metadata, imageAttributes);
};

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('public');
    eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);

    return {
        markdownTemplateEngine: 'njk',
        dir: {
            input: 'src',
        },
    };
};
