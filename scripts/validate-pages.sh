#!/bin/bash
# Build Validator Script
# Tüm sayfalarda TypeScript hatası olup olmadığını kontrol eder

cd "$(dirname "$0")/.." || exit 1

echo "🔍 TypeScript kontrolü yapılıyor..."
echo ""

# TypeScript kontrolü
errors=$(npx tsc --noEmit 2>&1)

if [ $? -eq 0 ]; then
  echo "✅ TypeScript hatası yok!"
else
  echo "❌ TypeScript hataları bulundu:"
  echo ""
  echo "$errors" | head -50
  echo ""
  
  # Hatalı dosyaları listele
  echo "📋 Hatalı dosyalar:"
  echo "$errors" | grep "error TS" | cut -d'(' -f1 | sort -u
  exit 1
fi

echo ""
echo "🏗️ Build kontrolü yapılıyor..."

# Build kontrolü (hızlı)
npm run build 2>&1 | tail -20

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Build başarılı!"
else
  echo ""
  echo "❌ Build başarısız!"
  exit 1
fi
