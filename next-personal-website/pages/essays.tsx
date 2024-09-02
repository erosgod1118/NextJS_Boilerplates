export async function getStaticProps() {
	return {
		props: {
			pageId: 'essays',
            metadata: {
				title: "Eros God",
				description: "Discover the work of Eros God on her personal website.",
				openGraph: {
					image: "https://example.com/image.jpg",
					url: "https://example.com"
				}
			}
		}
	}
}

export default function Essays() {
    return <div>Essays</div>
}