export default function Navbar() {
    return <nav className="nav">
        <span className="siteTitle">SongSaver</span>
        <ul>
            <li>
                <a href="/songsaver">Songlist</a>
            </li>
            <li>
                <a href="/about">About Me</a>
            </li>
        </ul>
    </nav>
}