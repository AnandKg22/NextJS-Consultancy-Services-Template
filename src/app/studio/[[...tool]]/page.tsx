/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return (
    <div className="flex flex-col h-screen">
      {/* Custom Admin Header */}
      <div className="bg-[#1a1a1a] text-white px-4 py-3 flex items-center justify-between border-b border-gray-800">
        <div className="font-bold text-sm tracking-wider uppercase">
          Studio Admin
        </div>
        <a
          href="/"
          className="text-white hover:text-[#ffad18] text-sm font-medium transition-colors flex items-center gap-2"
        >
          ← Back to Website
        </a>
      </div>

      {/* Studio Editor */}
      <div className="flex-1 relative">
        <NextStudio config={config} />
      </div>
    </div>
  )
}
