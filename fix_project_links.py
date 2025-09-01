#!/usr/bin/env python3
import re
import json

# Read the projects.jsx file
with open('src/pages/projects.jsx', 'r') as f:
    content = f.read()

# Extract all projects and create proper GitHub repo names
projects = []
pattern = r'\{\s*name:\s*[\'"]([^\'"]*)[\'"]\s*,\s*description:\s*[\'"]([^\'"]*)[\'"]\s*,'
matches = re.findall(pattern, content)

for match in matches:
    name = match[0]
    # Create a valid repo name (lowercase, hyphens instead of spaces)
    repo_name = name.lower().replace(' ', '-').replace('/', '-').replace('&', 'and').replace("'", '').replace('"', '').replace('.', '').replace(',', '')
    repo_name = re.sub(r'[^a-z0-9-]', '', repo_name)
    repo_name = re.sub(r'-+', '-', repo_name)  # Replace multiple hyphens with single
    repo_name = repo_name.strip('-')  # Remove leading/trailing hyphens
    
    projects.append({
        'name': name,
        'repo_name': repo_name
    })

print(f"Found {len(projects)} projects to fix")

# Fix the broken links
updated_content = content

# First, fix the duplicated parts
updated_content = re.sub(r"'https://github\.com/Metaluv/([a-z0-9-]+)'github\.com/Metaluv'", r"'https://github.com/Metaluv/\1', label: 'github.com/Metaluv/\1'", updated_content)

# Also fix any remaining old format
updated_content = re.sub(r"href: 'https://github\.com/Metaluv', label: 'github\.com/Metaluv'", r"href: 'https://github.com/Metaluv', label: 'github.com/Metaluv'", updated_content)

# Write the updated content back
with open('src/pages/projects.jsx', 'w') as f:
    f.write(updated_content)

print("✅ Fixed all project links in projects.jsx")