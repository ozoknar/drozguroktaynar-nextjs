#!/usr/bin/env python3
"""Fix JSX syntax errors in blog pages."""

import os
import re

BLOG_DIR = os.path.expanduser("~/Desktop/drozguroktaynar-nextjs/src/app/blog")

def fix_jsx_syntax(content):
    """Fix common JSX syntax issues."""
    
    # Fix > followed by number (like VKİ >40) - but not in JSX tags
    # Only fix when it's in text content (between > and <)
    def fix_gt_number(match):
        before = match.group(1)
        after = match.group(2)
        return f"{before}&gt;{after}"
    
    # Pattern: text content with > followed by number
    content = re.sub(r'(\w)\s*>\s*(\d)', fix_gt_number, content)
    
    # Fix < followed by number (like <%10)
    content = re.sub(r'\(<\s*%', r'(&lt;%', content)
    content = re.sub(r'(\s)<(\d)', r'\1&lt;\2', content)
    
    # Fix standalone > in text (not part of JSX)
    # Look for patterns like "derece >" or "kg >"
    content = re.sub(r'(\w)\s+>\s+', r'\1 &gt; ', content)
    
    # Fix HbA1c specific patterns
    content = re.sub(r'HbA1c\s*>\s*', r'HbA1c &gt; ', content)
    
    # Fix VKİ specific patterns  
    content = re.sub(r'VKİ\s*>\s*', r'VKİ &gt; ', content)
    
    # Fix BMI patterns
    content = re.sub(r'BMI\s*>\s*', r'BMI &gt; ', content)
    
    return content

def process_file(filepath):
    """Process a single file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        fixed_content = fix_jsx_syntax(content)
        
        if fixed_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    fixed = 0
    for root, dirs, files in os.walk(BLOG_DIR):
        for filename in files:
            if filename.endswith('.tsx'):
                filepath = os.path.join(root, filename)
                if process_file(filepath):
                    print(f"Fixed: {os.path.relpath(filepath, BLOG_DIR)}")
                    fixed += 1
    
    print(f"\nTotal files fixed: {fixed}")

if __name__ == "__main__":
    main()
