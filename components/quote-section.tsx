interface QuoteSectionProps {
  quote: string
  alignment?: "center" | "left"
  isItalic?: boolean
}

export default function QuoteSection({ quote, alignment = "center", isItalic = true }: QuoteSectionProps) {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <blockquote
          className={`text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-white/90 ${
            alignment === "center" ? "text-center" : "text-left"
          } ${isItalic ? "italic" : ""}`}
        >
          "{quote}"
        </blockquote>
      </div>
    </section>
  )
}
