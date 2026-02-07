#!/usr/bin/env python3
"""
Fetch images from original WordPress site and update Next.js pages
"""

import os
import re
import requests
from urllib.parse import quote
import time

# Base URLs
WP_BASE = "https://www.drozguroktaynar.com"
WP_UPLOADS = "https://www.drozguroktaynar.com/wp-content/uploads"

# Map slug to potential image patterns
def get_image_url_for_slug(slug):
    """Try to find the hero image for a given slug from original site"""
    
    # Try fetching the original page
    url = f"{WP_BASE}/{slug}/"
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            content = response.text
            
            # Look for og:image meta tag (most reliable)
            og_match = re.search(r'<meta property="og:image" content="([^"]+)"', content)
            if og_match:
                img_url = og_match.group(1)
                # Filter out admin-ajax URLs
                if 'admin-ajax' not in img_url and 'uploads' in img_url:
                    return img_url
            
            # Look for featured image in content
            img_matches = re.findall(r'(https://www\.drozguroktaynar\.com/wp-content/uploads/\d{4}/\d{2}/[^"\'>\s]+\.(?:jpg|jpeg|png|webp))', content)
            for img in img_matches:
                # Skip logo and small images
                if 'logo' not in img.lower() and 'cropped' not in img.lower():
                    # Prefer non-sized versions
                    clean_img = re.sub(r'-\d+x\d+\.', '.', img)
                    return clean_img
            
            # Return first content image if found
            if img_matches:
                return img_matches[0]
                
    except Exception as e:
        print(f"  Error fetching {slug}: {e}")
    
    return None

def get_content_images(slug):
    """Get all content images from a blog post"""
    url = f"{WP_BASE}/{slug}/"
    images = []
    
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            content = response.text
            
            # Find all images in content area
            img_matches = re.findall(r'(https://www\.drozguroktaynar\.com/wp-content/uploads/\d{4}/\d{2}/[^"\'>\s]+\.(?:jpg|jpeg|png|webp))', content)
            
            seen = set()
            for img in img_matches:
                # Clean URL - remove size suffix for cleaner version
                clean_img = re.sub(r'-\d+x\d+\.', '.', img)
                
                # Skip logos and duplicates
                if 'logo' not in img.lower() and clean_img not in seen:
                    seen.add(clean_img)
                    images.append(clean_img)
                    
    except Exception as e:
        print(f"  Error fetching content images for {slug}: {e}")
    
    return images[:5]  # Max 5 images per article

def update_page_with_images(page_path, hero_image, content_images):
    """Update a page.tsx file with real images"""
    
    with open(page_path, 'r') as f:
        content = f.read()
    
    original = content
    
    # Replace placeholder hero image
    if hero_image:
        # Escape the hero_image URL for use in replacement
        safe_hero = hero_image.replace('\\', '\\\\')
        
        # Pattern for placehold.co images
        content = re.sub(
            r'src="https://placehold\.co/[^"]+\?text=[^"]+"',
            f'src="{safe_hero}"',
            content
        )
        
        # Also update og:image in metadata if present
        content = re.sub(
            r'(images:\s*\[\s*")[^"]+(")',
            lambda m: m.group(1) + safe_hero + m.group(2),
            content
        )
    
    # Add content images after first major section if we have them
    if content_images and len(content_images) > 1:
        # Find a good place to insert additional image (after first </section>)
        # This is optional - we mainly focus on hero image
        pass
    
    if content != original:
        with open(page_path, 'w') as f:
            f.write(content)
        return True
    
    return False

def main():
    blog_dir = "src/app/blog"
    
    if not os.path.exists(blog_dir):
        print("Blog directory not found!")
        return
    
    slugs = [d for d in os.listdir(blog_dir) if os.path.isdir(os.path.join(blog_dir, d)) and d != 'page.tsx']
    
    print(f"Found {len(slugs)} blog posts")
    print("=" * 50)
    
    updated = 0
    not_found = []
    
    for i, slug in enumerate(sorted(slugs)):
        page_path = os.path.join(blog_dir, slug, "page.tsx")
        
        if not os.path.exists(page_path):
            continue
        
        print(f"[{i+1}/{len(slugs)}] {slug}...")
        
        # Get hero image
        hero_image = get_image_url_for_slug(slug)
        
        if hero_image:
            print(f"  ✓ Found: {hero_image[:60]}...")
            
            # Get content images too
            content_images = get_content_images(slug)
            
            if update_page_with_images(page_path, hero_image, content_images):
                updated += 1
                print(f"  ✓ Updated page")
            else:
                print(f"  - No changes needed")
        else:
            print(f"  ✗ No image found")
            not_found.append(slug)
        
        # Rate limiting
        time.sleep(0.3)
    
    print("=" * 50)
    print(f"Updated: {updated} pages")
    print(f"No image found: {len(not_found)} pages")
    
    if not_found:
        print("\nPages without images:")
        for slug in not_found[:20]:
            print(f"  - {slug}")

if __name__ == "__main__":
    main()
