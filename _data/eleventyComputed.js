module.exports = {
	metadata: {
		socials: data => {
			var s = Array.from(data.metadata.socials)
			s.forEach(network => {
				const serviceData = data.socialnetworks[network.service]
				network.url = serviceData.baseUrl + network.handle
				if (serviceData.canonicalName == "Mastodon") {
					// If we have a leading @, we might start with a blank entry in the array, so filter that out
					const components = network.handle.split("@").filter(x => x.length > 0)
					network.url = serviceData.baseUrl + components[1] + "/@" + components[0]
				}
				network.altText = serviceData.prefix + network.handle + " on " + serviceData.canonicalName
				network.svgUrl = serviceData.img
			})
			return s
		}
	},
	twitterHandle: data => {
		var d = data.metadata.socials.find(x => (x.service == "twitter"))
		return d !== undefined ? d["handle"] : ""
	}
}
