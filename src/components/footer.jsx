function Footer() {
    return <footer className="page-footer deep-purple accent-2">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Mariya Aleksandrova
                <a className="grey-text text-lighten-4 right" href="https://github.com/lksndrv/reactSPA"> Reprisitory </a>
            </div>
        </div>
    </footer>
}

export { Footer };
