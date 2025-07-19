interface QuoteBlockProps {
  quote: string
  alignment?: "center" | "left"
}

export default function QuoteBlock({ quote, alignment = "center" }: QuoteBlockProps) {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <blockquote
          className={`text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-white/90 ${
            alignment === "center" ? "text-center" : "text-left"
          }`}
        >
          {quote}
        </blockquote>
      </div>
    </section>
  )
}
