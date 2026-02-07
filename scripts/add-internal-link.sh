#!/bin/bash
# Script to add /ameliyatsiz-cozumler internal link to pages

INTERNAL_LINK_BLOCK='          {/* Ameliyatsız Tedavi Internal Link */}
          <div className="bg-blue-50 border-l-4 border-blue-700 p-6 my-8 rounded-r-lg">
            <p className="text-gray-700">
              <strong>İlgili İçerik:</strong> Ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi için{'"'"' '"'"'}
              <a href="/ameliyatsiz-cozumler" className="text-blue-700 hover:text-blue-900 font-semibold hover:underline">
                ameliyatsız çözümler sayfamızı
              </a>{'"'"' '"'"'}
              ziyaret edebilirsiniz.
            </p>
          </div>'

# List of pages that need the link
PAGES=(
  "ayak-bilegi-artroskopisi-nedir"
  "ayak-bilegi-burkulmasi-tedavi-suresi-ne-kadar"
  "ayak-bilegi-burkulmasi-ve-ne-zaman-gecer"
  "bankart-lezyonu-nedir"
  "dirsek-kirigi"
  "diz-anatomisi-nedir"
  "diz-burkulmasi-belirtisi"
  "diz-kireclenmesine-ne-iyi-gelir"
  "diz-kireclenmesi-tedavisi-2"
  "eklem-agrisi-bursa-dr-ozgur-oktay-nar-ortopedi-bursa"
  "eklem-faresi-cerrahisi"
  "el-bilegi-kirigi"
  "gunde-7-bin-adim-saglikli-yasam"
  "hidrojel-arastirmalari-son-hizla-devam-ediyor"
  "hidrojel-sivi-diz-protezi-nedir-2"
  "hill-sachs-lezyonu-nedir"
  "kalca-anatomisi-ve-minimal-invaziv-kalca-protezi"
  "kalca-bursiti-nedir"
  "kalca-kireclenmesi-nedir"
  "kalca-sikismasi-femoroasetabular-sendrom-nedir"
  "kalca-tendiniti-nedir"
  "kas-zedelenmesi"
  "kaval-kemigi"
  "kemik-odemi"
  "kiomedin-diz-kireclenmesi-tedavisi-ile-yeni-yaklasimlar"
  "kok-hucre-tedavisi-2"
  "meniskus-yirtigi-belirtileri-ve-tedavisi"
  "meniskus-yirtilmasi-belirtileri-ve-tedavisi"
  "odem-kremi"
  "omuz-anatomisi-eklemin-yapisi-kaslari-ve-fonksiyonlari-nedir"
  "omuz-protezi-nedir"
  "ortopedi-uzmani-op-dr-ozgur-oktay-nar-isiat-2025te-bilimsel-katkisiyla-dikkat-cekti"
  "pleksus-yaralanmalari-nedir"
  "priformis-sendromu-nedir"
  "radius-kirigi"
  "rotator-kuf-sendromu-nedir"
  "skafoid-kirigi-belirtileri"
  "stres-kirigi"
  "tfcc-lezyonu"
  "total-eklem-degistirme-cerrahisi-nedir"
  "yaslilarda-kalca-protezi-sonrasi-fizik-tedavi-rehberi"
  "yeni-nesil-yikanabilir-islanmaz-alci-sistemleri"
)

BLOG_DIR="$HOME/Desktop/drozguroktaynar-nextjs/src/app/blog"
COUNT=0

for page in "${PAGES[@]}"; do
  FILE="$BLOG_DIR/$page/page.tsx"
  if [ -f "$FILE" ]; then
    # Check if already has the link
    if grep -q "ameliyatsiz-cozumler" "$FILE"; then
      echo "⏭️  SKIP: $page (already has link)"
    else
      # Find CTA section and insert before it
      if grep -q '{/\* CTA' "$FILE"; then
        sed -i '/{\/\* CTA/i\
          {/* Ameliyatsız Tedavi Internal Link */}\
          <div className="bg-blue-50 border-l-4 border-blue-700 p-6 my-8 rounded-r-lg">\
            <p className="text-gray-700">\
              <strong>İlgili İçerik:</strong> Ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi için{'"'"' '"'"'}\
              <a href="/ameliyatsiz-cozumler" className="text-blue-700 hover:text-blue-900 font-semibold hover:underline">\
                ameliyatsız çözümler sayfamızı\
              </a>{'"'"' '"'"'}\
              ziyaret edebilirsiniz.\
            </p>\
          </div>\
' "$FILE"
        echo "✅ ADDED: $page"
        ((COUNT++))
      else
        echo "⚠️  WARN: $page (no CTA section found)"
      fi
    fi
  else
    echo "❌ ERROR: $page (file not found)"
  fi
done

echo ""
echo "==================================="
echo "✅ Total pages updated: $COUNT"
echo "==================================="
