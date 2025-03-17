import React from 'react'
import Link from "next/link";


const Page = () => {
    return (
        <div className="bg-red-500">
            Click <Link href="/documents/123">here</Link> to go to document id
        </div>
    )
}
export default Page
