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
            <li key={item.name}>
              <Link href={item.href} className="h-link">
                {item.name}
              </Link>
            </li>
          ))}
          <li
            className="nl-simple reg-fst-link mobile-last-link"
          >
            <Link href="/login" className="h-link">
              Login
            </Link>
          </li>
          <li className="nl-simple">
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
