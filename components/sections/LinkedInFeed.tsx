'use client';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface LinkedInPost {
  id: string;
  date: string;
  content: string;
  link: string;
  likes?: number;
  comments?: number;
}

interface LinkedInFeedProps {
  posts: LinkedInPost[];
  companyUrl?: string;
}

export default function LinkedInFeed({ posts, companyUrl = 'https://www.linkedin.com/company/juriscare' }: LinkedInFeedProps) {
  return (
    <section className="bg-white py-20 md:py-32 relative z-[2]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-gray-900 mb-8 leading-tight">
              Nos actualités
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Suivez nos dernières actualités et partages sur LinkedIn
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 group"
              >
                {/* LinkedIn icon + Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#0A66C2] rounded flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                </div>

                {/* Post Content */}
                <p className="text-gray-700 leading-relaxed line-clamp-4">
                  {post.content}
                </p>

                {/* Engagement metrics */}
                {(post.likes || post.comments) && (
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                    {post.likes && (
                      <span>👍 {post.likes}</span>
                    )}
                    {post.comments && (
                      <span>💬 {post.comments}</span>
                    )}
                  </div>
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium rounded-full transition-all duration-300 text-center px-8 py-4 text-lg bg-[#0A66C2] text-white hover:bg-[#004182] shadow-lg hover:shadow-xl"
            >
              Suivez-nous sur LinkedIn
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
