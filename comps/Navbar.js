import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <div>
            <h1>Ninjas</h1>
            <div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/ninjas"><a>Ninja Listing</a></Link>
                <Link href="/about"><a>About</a></Link>
            </div>
        </div>
    )
}

export default Navbar