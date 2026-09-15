import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogPosts } from "@/data/blogPosts"


import React from 'react'

export default function OurBlog() {
  return (
    <>
       <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
            <div className="mb-14 flex flex-wrap items-end justify-between gap-6 border-b border-primary/20 pb-10">
                <SectionTitle eyebrow="Latest blog" title="Insights from our" accent="experts" className="mb-0"/>
                <Reveal delay={0.25}>
                    <Button href="/blog">
                        see all posts
                    </Button>
                </Reveal>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts.slice(0,3).map((post,i) => (
                    <BlogCard key={post.slug} post={post} delay={i * 0.2}/>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}
