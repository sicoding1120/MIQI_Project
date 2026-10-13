/**
 * SEOHead — Injects JSON-LD structured data into the document head.
 *
 * All data reflects actual, visible content on the TPQ MIQI website.
 * No fabricated ratings, reviews, addresses, or social profiles are included
 * beyond what is displayed in the page content.
 *
 * Optimised for keywords: TPQ, MIQI, Majelis Taklim, Majelis Ta'lim,
 * Taman Pendidikan Al-Qur'an, mengaji, Cibinong, Bogor
 */
export function SEOHead() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      /* ─── WebSite Schema ─── */
      {
        "@type": "WebSite",
        "@id": "https://tpqmiqi.my.id/#website",
        "name": "TPQ MIQI",
        "alternateName": [
          "Majelis Ta'lim Inarotul Qalbi",
          "Majelis Taklim Inarotul Qalbi",
          "MIQI",
          "Taman Pendidikan Al-Qur'an MIQI",
          "TPQ MIQI Cibinong",
          "TPQ MIQI Bogor",
        ],
        "url": "https://tpqmiqi.my.id/",
        "inLanguage": "id-ID",
        "description":
          "TPQ MIQI — Taman Pendidikan Al-Qur'an dan Majelis Taklim untuk anak dengan metode interaktif di Cibinong, Bogor. Program Iqra, Tahsin, Tahfidz, dan pembinaan karakter Islami.",
        "publisher": {
          "@id": "https://tpqmiqi.my.id/#organization",
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://tpqmiqi.my.id/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      /* ─── EducationalOrganization Schema ─── */
      {
        "@type": "EducationalOrganization",
        "@id": "https://tpqmiqi.my.id/#organization",
        "name": "TPQ MIQI — Majelis Ta'lim Inarotul Qalbi",
        "alternateName": [
          "TPQ MIQI",
          "MIQI",
          "Majelis Taklim Inarotul Qalbi",
          "Majelis Ta'lim Inarotul Qalbi",
          "Taman Pendidikan Al-Qur'an MIQI",
          "Majelis Taklim MIQI",
          "TPQ Majelis Taklim Cibinong",
        ],
        "url": "https://tpqmiqi.my.id/",
        "description":
          "Taman Pendidikan Al-Qur'an (TPQ) dan Majelis Taklim untuk anak. Menyediakan program Iqra, Tahsin, Tahfidz, dan pembinaan karakter Islami di Cibinong, Bogor.",
        "foundingDate": "2024",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Sirojul Munir No.44, RW.6, Nanggewer",
          "addressLocality": "Cibinong",
          "addressRegion": "Jawa Barat",
          "postalCode": "16912",
          "addressCountry": "ID",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -6.481,
          "longitude": 106.851,
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Cibinong",
          },
          {
            "@type": "City",
            "name": "Bogor",
          },
          {
            "@type": "AdministrativeArea",
            "name": "Kabupaten Bogor",
          },
        ],
        "telephone": "+6288801252105",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+6288801252105",
          "contactType": "customer service",
          "availableLanguage": "Indonesian",
          "areaServed": "ID",
        },
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
        "image": [
          "https://tpqmiqi.my.id/logo/utama.png",
          "https://tpqmiqi.my.id/banner/1.jpeg",
          "https://tpqmiqi.my.id/banner/2.jpeg",
          "https://tpqmiqi.my.id/banner/3.jpeg",
        ],
        "logo": {
          "@type": "ImageObject",
          "url": "https://tpqmiqi.my.id/logo/utama.png",
          "width": 512,
          "height": 512,
        },
        "knowsAbout": [
          "Pendidikan Al-Qur'an",
          "Iqra",
          "Tahsin",
          "Tahfidz",
          "Pembinaan Karakter Islami",
          "Majelis Taklim",
          "TPQ",
          "Belajar Mengaji",
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Program Pendidikan TPQ MIQI",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "EducationalOccupationalProgram",
                "name": "Program Iqra — Belajar Membaca Al-Qur'an",
                "description":
                  "Program dasar belajar membaca Al-Qur'an untuk anak pemula di TPQ MIQI Cibinong.",
                "provider": { "@id": "https://tpqmiqi.my.id/#organization" },
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "EducationalOccupationalProgram",
                "name": "Program Tahsin — Perbaikan Bacaan Al-Qur'an",
                "description":
                  "Program perbaikan dan penyempurnaan bacaan Al-Qur'an dengan tajwid yang benar.",
                "provider": { "@id": "https://tpqmiqi.my.id/#organization" },
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "EducationalOccupationalProgram",
                "name": "Program Tahfidz — Hafalan Al-Qur'an",
                "description":
                  "Program menghafal Al-Qur'an dengan metode yang mudah dan menyenangkan untuk anak.",
                "provider": { "@id": "https://tpqmiqi.my.id/#organization" },
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "EducationalOccupationalProgram",
                "name": "Pembinaan Karakter Islami",
                "description":
                  "Program pembentukan akhlak mulia dan karakter Islami untuk santri TPQ MIQI.",
                "provider": { "@id": "https://tpqmiqi.my.id/#organization" },
              },
            },
          ],
        },
      },

      /* ─── BreadcrumbList Schema ─── */
      {
        "@type": "BreadcrumbList",
        "@id": "https://tpqmiqi.my.id/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda TPQ MIQI",
            "item": "https://tpqmiqi.my.id/",
          },
        ],
      },

      /* ─── WebPage Schema ─── */
      {
        "@type": "WebPage",
        "@id": "https://tpqmiqi.my.id/#webpage",
        "url": "https://tpqmiqi.my.id/",
        "name": "TPQ MIQI — Taman Pendidikan Al-Qur'an | Majelis Ta'lim Inarotul Qalbi Cibinong Bogor",
        "description":
          "Website resmi TPQ MIQI (Majelis Ta'lim Inarotul Qalbi). Taman Pendidikan Al-Qur'an terbaik di Cibinong, Bogor. Belajar mengaji anak dengan program Iqra, Tahsin, Tahfidz.",
        "isPartOf": { "@id": "https://tpqmiqi.my.id/#website" },
        "about": { "@id": "https://tpqmiqi.my.id/#organization" },
        "breadcrumb": { "@id": "https://tpqmiqi.my.id/#breadcrumb" },
        "inLanguage": "id-ID",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://tpqmiqi.my.id/banner/1.jpeg",
        },
        "datePublished": "2024-01-01",
        "dateModified": "2026-10-13",
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
