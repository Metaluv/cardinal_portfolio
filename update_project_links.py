#!/usr/bin/env python3
import re
import json

# Read the projects.jsx file
with open('src/pages/projects.jsx', 'r') as f:
    content = f.read()

# Extract all projects and create proper GitHub repo names
projects = []
pattern = r'\{\s*name:\s*[\'"]([^\'"]*)[\'"]\s*,\s*description:\s*[\'"]([^\'"]*)[\'"]\s*,\s*link:\s*\{[^}]*\}\s*,\s*icon:\s*(\w+)\s*,\s*category:\s*[\'"]([^\'"]*)[\'"]\s*,'
matches = re.findall(pattern, content)

for match in matches:
    name, description, icon, category = match
    # Create a valid repo name (lowercase, hyphens instead of spaces)
    repo_name = name.lower().replace(' ', '-').replace('/', '-').replace('&', 'and').replace("'", '').replace('"', '').replace('.', '').replace(',', '')
    repo_name = re.sub(r'[^a-z0-9-]', '', repo_name)
    repo_name = re.sub(r'-+', '-', repo_name)  # Replace multiple hyphens with single
    repo_name = repo_name.strip('-')  # Remove leading/trailing hyphens
    
    projects.append({
        'name': name,
        'repo_name': repo_name,
        'description': description,
        'icon': icon,
        'category': category
    })

print(f"Found {len(projects)} projects to update")

# Update the projects.jsx file with new repository links
updated_content = content

for project in projects:
    # Create a pattern to find this specific project
    # We need to be careful to match the exact project
    escaped_name = re.escape(project['name'])
    
    # Pattern to match the project and replace just the link
    pattern = rf"(\s*name:\s*['\"]{ escaped_name }['\"]\s*,\s*description:\s*['\"][^'\"]*['\"]\s*,\s*link:\s*{{\s*href:\s*)'https://github\.com/Metaluv'([^']*')"
    replacement = rf"\1'https://github.com/Metaluv/{project['repo_name']}'"
    
    # Apply the replacement
    updated_content = re.sub(pattern, replacement, updated_content)

# Write the updated content back
with open('src/pages/projects.jsx', 'w') as f:
    f.write(updated_content)

print("✅ Updated all project links in projects.jsx")

# Save the project mapping for reference
with open('project_repo_mapping.json', 'w') as f:
    json.dump(projects, f, indent=2)

print(f"✅ Saved project mapping to project_repo_mapping.json")

# Create a README template generator script
readme_template = '''#!/bin/bash
# Script to create README for a project repository

REPO_NAME="$1"
PROJECT_NAME="$2"
DESCRIPTION="$3"
CATEGORY="$4"

if [ -z "$REPO_NAME" ]; then
    echo "Usage: ./create_readme.sh <repo_name> <project_name> <description> <category>"
    exit 1
fi

# Create repository directory
mkdir -p "repos/$REPO_NAME"
cd "repos/$REPO_NAME"

# Initialize git repo
git init

# Create README.md
cat > README.md << EOF
# $PROJECT_NAME

$DESCRIPTION

## Overview

This is a $CATEGORY project that showcases innovative solutions and modern development practices.

## Features

- Modern, responsive design
- Optimized performance
- SEO-friendly architecture
- Accessibility compliant
- Cross-browser compatibility

## Technologies

- HTML5 / CSS3
- JavaScript / TypeScript
- React / Next.js
- Tailwind CSS
- Node.js

## Getting Started

\`\`\`bash
git clone https://github.com/Metaluv/$REPO_NAME.git
cd $REPO_NAME
npm install
npm run dev
\`\`\`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Jason Cardinal - [Portfolio](https://jasonc.vercel.app)

## Acknowledgments

- Built with passion for $CATEGORY innovation
- Inspired by real-world challenges
- Committed to continuous improvement

---

⭐ If you find this project useful, please consider giving it a star!
EOF

# Create a simple index.html
cat > index.html << 'HTML'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>''' + project['name'] + '''</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .container {
            background: white;
            border-radius: 1rem;
            padding: 3rem;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        h1 {
            color: #333;
            border-bottom: 3px solid #667eea;
            padding-bottom: 1rem;
        }
        .coming-soon {
            text-align: center;
            padding: 3rem;
            background: #f8f9fa;
            border-radius: 0.5rem;
            margin-top: 2rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>''' + project['name'] + '''</h1>
        <p>''' + project['description'] + '''</p>
        <div class="coming-soon">
            <h2>🚀 Coming Soon!</h2>
            <p>This project is currently under development. Check back soon for updates!</p>
        </div>
    </div>
</body>
</html>
HTML

echo "✅ Created README and index.html for $REPO_NAME"
'''

with open('create_readme.sh', 'w') as f:
    f.write(readme_template)

import os
os.chmod('create_readme.sh', 0o755)

print("✅ Created create_readme.sh script")
print("\nNext steps:")
print("1. The project links in projects.jsx have been updated")
print("2. You can manually create GitHub repositories using the GitHub web interface")
print("3. Or use the GitHub API with a personal access token")
print("\nAll project links now point to: https://github.com/Metaluv/<repo-name>")