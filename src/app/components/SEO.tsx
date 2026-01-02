import { Helmet } from "react-helmet-async";
import { useTranslation } from "../lib/TranslationContext";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({ 
  title, 
  description, 
  image = "/images/tokyo-websites-logo.png", 
  url = "https://tokyowebsites.com", 
  type = "website" 
}: SEOProps) {
  const { t } = useTranslation();
  
  // Title Length: ~30-60 chars is optimal. 
  // "Tokyo Websites - ウェブサイト制作・デジタルブランディング" is ~26 chars (Japanese counts as 2). Perfect.
  const siteTitle = title ? `${title} | Tokyo Websites` : "Tokyo Websites - ウェブサイト制作・デジタルブランディング (立川・多摩)";
  
  // Description Length: ~120-160 chars is optimal for SEO.
  const metaDescription = description || "東京・立川の小規模実店舗に特化したWeb制作。最短4日で集客に強いホームページを作成します。SEO対策、多言語対応、スマホ最適化まで、成果が出るデジタルブランディングを低価格で提供。Tokyo Websites.";
  
  const siteUrl = "https://tokyowebsites.com";
  const fullUrl = url.startsWith("http") ? url : `${siteUrl}${url}`;
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Tokyo Websites" />
      <meta property="og:locale" content="ja_JP" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  );
}

