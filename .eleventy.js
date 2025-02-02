const htmlmin = require('html-minifier')
const svgContents = require("eleventy-plugin-svg-contents")
const metagen = require('eleventy-plugin-metagen')

const now = String(Date.now())

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(svgContents)
	eleventyConfig.addPlugin(metagen)

	eleventyConfig.addWatchTarget('./styles/tailwind.config.js')
	eleventyConfig.addWatchTarget('./styles/tailwind.css')

	eleventyConfig.addPassthroughCopy({
		'./_tmp/style.css': './style.css'
	})
	eleventyConfig.addPassthroughCopy('./assets/')
	eleventyConfig.addPassthroughCopy('./favicon.ico')

	eleventyConfig.addShortcode('version', function () {
		return now
	})

	eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
		if (
			process.env.ELEVENTY_PRODUCTION &&
			outputPath &&
			outputPath.endsWith('.html')
		) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});
			return minified
		}
		return content
	})

}
