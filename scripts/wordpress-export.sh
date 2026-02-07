#!/bin/bash
# WordPress JSON Export Script
# Tüm yazıları JSON formatında export eder

WORDPRESS_URL="https://www.drozguroktaynar.com"
OUTPUT_DIR="$(dirname "$0")/../wordpress-data"
mkdir -p "$OUTPUT_DIR"

echo "📦 WordPress verilerini çekiyorum..."

# Tüm postları çek (sayfa başına 100, toplam sayfaları bul)
page=1
all_posts="[]"

while true; do
  echo "📄 Sayfa $page çekiliyor..."
  response=$(curl -s "${WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=100&page=${page}&_embed")
  
  # Boş array kontrolü
  if [ "$response" == "[]" ] || [ -z "$response" ]; then
    break
  fi
  
  # Hata kontrolü
  if echo "$response" | grep -q '"code"'; then
    break
  fi
  
  # Post sayısını kontrol et
  count=$(echo "$response" | jq '. | length')
  if [ "$count" -eq 0 ]; then
    break
  fi
  
  echo "  → $count post bulundu"
  
  # Her post için özet bilgi çıkar
  echo "$response" | jq -c '.[]' | while read -r post; do
    id=$(echo "$post" | jq -r '.id')
    slug=$(echo "$post" | jq -r '.slug')
    title=$(echo "$post" | jq -r '.title.rendered')
    date=$(echo "$post" | jq -r '.date')
    featured_media=$(echo "$post" | jq -r '._embedded["wp:featuredmedia"][0].source_url // empty')
    
    # Her post için ayrı dosya
    echo "$post" | jq '{
      id: .id,
      slug: .slug,
      title: .title.rendered,
      content: .content.rendered,
      excerpt: .excerpt.rendered,
      date: .date,
      modified: .modified,
      featured_image: (._embedded["wp:featuredmedia"][0].source_url // null),
      categories: [._embedded["wp:term"][0][]?.name] // [],
      tags: [._embedded["wp:term"][1][]?.name] // []
    }' > "$OUTPUT_DIR/post-${id}-${slug}.json"
    
    echo "  ✅ $slug"
  done
  
  page=$((page + 1))
  
  # Rate limiting
  sleep 0.5
done

# Tüm postların listesini oluştur
echo "📋 Post listesi oluşturuluyor..."
curl -s "${WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=100&page=1" | jq '[.[] | {id, slug, title: .title.rendered, date}]' > "$OUTPUT_DIR/posts-list.json"
curl -s "${WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=100&page=2" | jq '[.[] | {id, slug, title: .title.rendered, date}]' >> "$OUTPUT_DIR/posts-list-p2.json" 2>/dev/null

echo ""
echo "✅ Export tamamlandı!"
echo "📁 Dosyalar: $OUTPUT_DIR"
echo "📊 Toplam: $(ls -1 $OUTPUT_DIR/post-*.json 2>/dev/null | wc -l) post"
