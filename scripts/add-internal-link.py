#!/usr/bin/env python3
"""Add /ameliyatsiz-cozumler internal link to pages that don't have it."""

import os
import re

BLOG_DIR = os.path.expanduser("~/Desktop/drozguroktaynar-nextjs/src/app/blog")

INTERNAL_LINK_BLOCK = '''
          {/* Ameliyatsız Tedavi Internal Link */}
          <div className="bg-blue-50 border-l-4 border-blue-700 p-6 my-8 rounded-r-lg">
            <p className="text-gray-700">
              <strong>İlgili İçerik:</strong> Ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi için{' '}
              <a href="/ameliyatsiz-cozumler" className="text-blue-700 hover:text-blue-900 font-semibold hover:underline">
                ameliyatsız çözümler sayfamızı
              </a>{' '}
              ziyaret edebilirsiniz.
            </p>
          </div>
'''

PAGES = [
    "ayak-bilegi-artroskopisi-nedir",
    "ayak-bilegi-burkulmasi-tedavi-suresi-ne-kadar",
    "ayak-bilegi-burkulmasi-ve-ne-zaman-gecer",
    "bankart-lezyonu-nedir",
    "dirsek-kirigi",
    "diz-anatomisi-nedir",
    "diz-burkulmasi-belirtisi",
    "diz-kireclenmesine-ne-iyi-gelir",
    "diz-kireclenmesi-tedavisi-2",
    "eklem-agrisi-bursa-dr-ozgur-oktay-nar-ortopedi-bursa",
    "eklem-faresi-cerrahisi",
    "el-bilegi-kirigi",
    "gunde-7-bin-adim-saglikli-yasam",
    "hidrojel-arastirmalari-son-hizla-devam-ediyor",
    "hidrojel-sivi-diz-protezi-nedir-2",
    "hill-sachs-lezyonu-nedir",
    "kalca-anatomisi-ve-minimal-invaziv-kalca-protezi",
    "kalca-bursiti-nedir",
    "kalca-kireclenmesi-nedir",
    "kalca-sikismasi-femoroasetabular-sendrom-nedir",
    "kalca-tendiniti-nedir",
    "kas-zedelenmesi",
    "kaval-kemigi",
    "kemik-odemi",
    "kiomedin-diz-kireclenmesi-tedavisi-ile-yeni-yaklasimlar",
    "kok-hucre-tedavisi-2",
    "meniskus-yirtigi-belirtileri-ve-tedavisi",
    "meniskus-yirtilmasi-belirtileri-ve-tedavisi",
    "odem-kremi",
    "omuz-anatomisi-eklemin-yapisi-kaslari-ve-fonksiyonlari-nedir",
    "omuz-protezi-nedir",
    "ortopedi-uzmani-op-dr-ozgur-oktay-nar-isiat-2025te-bilimsel-katkisiyla-dikkat-cekti",
    "pleksus-yaralanmalari-nedir",
    "priformis-sendromu-nedir",
    "radius-kirigi",
    "rotator-kuf-sendromu-nedir",
    "skafoid-kirigi-belirtileri",
    "stres-kirigi",
    "tfcc-lezyonu",
    "total-eklem-degistirme-cerrahisi-nedir",
    "yaslilarda-kalca-protezi-sonrasi-fizik-tedavi-rehberi",
    "yeni-nesil-yikanabilir-islanmaz-alci-sistemleri",
]

def add_internal_link(filepath):
    """Add internal link to a page file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already has the link
    if 'ameliyatsiz-cozumler' in content:
        return 'skip'
    
    # Try to find CTA section and insert before it
    cta_pattern = r'(\s*\{/\* CTA)'
    match = re.search(cta_pattern, content)
    if match:
        insert_pos = match.start()
        new_content = content[:insert_pos] + INTERNAL_LINK_BLOCK + content[insert_pos:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return 'added'
    
    # Try to find PubMed References section
    pubmed_pattern = r'(\s*\{/\* PubMed)'
    match = re.search(pubmed_pattern, content)
    if match:
        insert_pos = match.start()
        new_content = content[:insert_pos] + INTERNAL_LINK_BLOCK + content[insert_pos:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return 'added'
    
    # Try to find Bilimsel Kaynaklar section
    kaynaklar_pattern = r'(\s*<section[^>]*>\s*<h3[^>]*>\s*<span>📚</span>)'
    match = re.search(kaynaklar_pattern, content)
    if match:
        insert_pos = match.start()
        new_content = content[:insert_pos] + INTERNAL_LINK_BLOCK + content[insert_pos:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return 'added'
    
    # Try before closing </article>
    article_pattern = r'(\s*</article>)'
    match = re.search(article_pattern, content)
    if match:
        insert_pos = match.start()
        new_content = content[:insert_pos] + INTERNAL_LINK_BLOCK + content[insert_pos:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return 'added'
    
    return 'warn'

def main():
    added = 0
    skipped = 0
    warned = 0
    errors = 0
    
    for page in PAGES:
        filepath = os.path.join(BLOG_DIR, page, 'page.tsx')
        if os.path.exists(filepath):
            result = add_internal_link(filepath)
            if result == 'added':
                print(f"✅ ADDED: {page}")
                added += 1
            elif result == 'skip':
                print(f"⏭️  SKIP: {page} (already has link)")
                skipped += 1
            else:
                print(f"⚠️  WARN: {page} (no insertion point found)")
                warned += 1
        else:
            print(f"❌ ERROR: {page} (file not found)")
            errors += 1
    
    print()
    print("=" * 40)
    print(f"✅ Added: {added}")
    print(f"⏭️  Skipped: {skipped}")
    print(f"⚠️  Warned: {warned}")
    print(f"❌ Errors: {errors}")
    print("=" * 40)

if __name__ == "__main__":
    main()
