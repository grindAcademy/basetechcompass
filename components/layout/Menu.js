import Link from "next/link"

export default function Menu() {
    const navigationItems = [
      { name: "Lessons", href: "/lessons" },
      { name: "Challenges", href: "/challenges" },
      { name: "Blog", href: "/blog" },
    ];

    return (
      <>
        <ul className="wsmenu-list nav-theme">
          {navigationItems.map((item) => (
            <li aria-haspopup="true" key={item.name}>
              <Link href={item.href} className="h-link">
                {item.name}
              </Link>
            </li>
          ))}
          <li
            className="nl-simple reg-fst-link mobile-last-link"
            aria-haspopup="true"
          >
            <Link href="/login" className="h-link">
              Login
            </Link>
          </li>
          <li className="nl-simple" aria-haspopup="true">
            <Link
              href="/login"
              className="btn r-04 btn--theme hover--tra-white last-link"
            >
              Start learning now
            </Link>
          </li>
        </ul>
      </>
    );
}
