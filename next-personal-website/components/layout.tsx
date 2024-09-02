import Head from 'next/head'

type NavItemProps = {
    title: string
    url: string
    isSelected: boolean
}

function NavItem({ title, url, isSelected }: NavItemProps) {
    return (
        <li>
            <a className={`block px-3 py-2 transition hover:text-teal-500 ${isSelected ? "text-teal-500" : ""}`} href={url}>{title}</a>
        </li>
    )
}

type NavbarProps = {
    pageId: string
}

function Navbar({ pageId }: NavbarProps) {
	return (
		<div className="flex justify-center mx-auto max-w-7xl h-16 pt-6">
			<nav>
				<ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
					<NavItem title={"About Me"} url={"/"} isSelected={pageId == "about_me"} />
                    <NavItem title={"Projects"} url={"/projects"} isSelected={pageId == "projects"} />
                    <NavItem title={"Essays"} url={"/essays"} isSelected={pageId == "essays"} />
				</ul>
			</nav>
		</div>
	)
}

function Footer() {
    return (
        <footer className="pt-10 px-8 pb-16 border-t mt-11">
            <div className="flex justify-between gap-6">
                <div className="flex gap-6 text-sm font-medium text-zinc-600">
                    <FooterLink text={"About Me"} url={"/"} />
                    <FooterLink text={"Projects"} url={"/projects"} />
                    <FooterLink text={"Essays"} url={"/essays"} />
                </div>
                <p className="text-sm text-zinc-400">© 2024 Eros God. All rightsreserved.</p>
            </div>
        </footer>
    )
}

type FooterLinkProps = {
    text: string 
    url: string 
}

function FooterLink(props: FooterLinkProps) {
    let { url, text } = props
    return <a className="transition hover:text-teal-500" href={url}>{text}</a>
}

export default function Layout({ children }: any) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{children.props.metadata.title}</title>
                <meta name="description" content={children.props.metadata.description} />
                {/* Open Graph tags */}
                <meta property="og:title" content={children.props.metadata.title} />
                <meta property="og:description" content={children.props.metadata.description} />
                <meta property="og:image" content={children.props.metadata.openGraph.image} />
                <meta property="og:url" content={children.props.metadata.openGraph.url} />
            </Head>
            <Navbar pageId={children.props.pageId} />
            <main>{children}</main>
            <Footer />
        </>
    )
}