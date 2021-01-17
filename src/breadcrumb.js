import {PageName} from "./global";

export const indexBreadcrumb = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "${PageName.HOME}",
      "item": "https://gallifreyan.info/"
    }
  ]
}
</script>
`

export const aboutBreadcrumb = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "${PageName.ABOUT}",
      "item": "https://gallifreyan.info/about/"
    }
  ]
}
</script>
`

export const blogBreadcrumb = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "${PageName.BLOG}",
      "item": "https://gallifreyan.info/blog/"
    }
  ]
}
</script>
`

export const changelogBreadcrumb = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "${PageName.CHANGELOG}",
      "item": "https://gallifreyan.info/changelog/"
    }
  ]
}
</script>
`

export const downloadBreadcrumb = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "${PageName.DOWNLOAD}",
      "item": "https://gallifreyan.info/download/"
    }
  ]
}
</script>
`

export const contactBreadcrumb = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "${PageName.CONTACT}",
      "item": "https://gallifreyan.info/contact/"
    }
  ]
}
</script>
`

export const designsBreadcrumb = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "${PageName.DESIGNS}",
      "item": "https://gallifreyan.info/designs/"
    }
  ]
}
</script>
`

export const scgGuideBreadcrumb = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "${PageName.GUIDES}",
      "item": "https://gallifreyan.info/guide/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "${PageName.SCG}",
      "item": "https://gallifreyan.info/guide/scg/"
    }
  ]
}
</script>
`

export const structureBreadcrumb = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "${PageName.STRUCTURE}",
      "item": "https://gallifreyan.info/guide/scg/"
    }
  ]
}
</script>
`