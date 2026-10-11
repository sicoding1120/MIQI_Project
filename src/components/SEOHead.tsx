/**
 * SEOHead — Injects JSON-LD structured data into the document head.
 *
 * All data reflects actual, visible content on the TPQ MIQI website.
 * No fabricated ratings, reviews, addresses, or social profiles are included
 * beyond what is displayed in the page content.
 */
export function SEOHead() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "TPQ MIQI",
        "alternateName": "Majelis Ta'lim Inarotul Qalbi",
        "url": "https://tpqmiqi.my.id/",
        "inLanguage": "id-ID",
        "description":
          "Taman Pendidikan Al-Qur'an untuk anak dengan metode interaktif di Cibinong, Bogor.",
      },
      {
        "@type": "EducationalOrganization",
        "name": "TPQ MIQI — Majelis Ta'lim Inarotul Qalbi",
        "url": "https://tpqmiqi.my.id/",
        "description":
          "Pendidikan Al-Qur'an untuk anak dengan program Iqra, Tahsin, Tahfidz, dan pembinaan karakter Islami.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Sirojul Munir No.44, RW.6, Nanggewer",
          "addressLocality": "Cibinong",
          "addressRegion": "Jawa Barat",
          "postalCode": "16912",
          "addressCountry": "ID",
        },
        "telephone": "+6288801252105",
        "sameAs": [
          "https://www.instagram.com/sahabattpqmiqi",
          "https://www.facebook.com/profile.php?id=61592310251382",
          "https://www.tiktok.com/@sahabattpqmiqi",
          "https://www.youtube.com/channel/UCOLc2U8N6vQ9xJB17ZcM03Q",
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "08:00",
            "closes": "12:00",
          },
        ],
        "image": "https://tpqmiqi.my.id/logo/utama.png",
        "logo": "https://tpqmiqi.my.id/logo/utama.png",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
